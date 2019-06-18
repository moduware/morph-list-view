import { LitElement, html, css } from 'lit-element';
import { FlattenedNodesObserver } from '@polymer/polymer/lib/utils/flattened-nodes-observer.js';
import { getPlatform } from '@moduware/lit-utils';

/**
 * `morph-list-view`
 * 
 * @customElement
 * @extends HTMLElement
 * @demo demo/index.html
 */
export class MorphListView extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          margin-bottom: 35px;
        }
      
        :host .container ::slotted(morph-list-view-item) {
          margin-bottom: 0;
        }
      
        :host .container ::slotted(morph-list-view-item:not(:first-of-type)) {
          --display-top-line: none;
        }
      
        :host .container ::slotted(morph-list-view-item:not(:last-of-type)) {
          --display-bottom-line: none;
          --display-inner-item-bottom-line: block;
        }
        
        /* this is fading the inner line in and out using opacity */
        :host .container ::slotted(morph-list-view-item[expanded]:not(:last-of-type)) {
          --sub-container-after-opacity: 0;
        }
      
      `
    ];
  }


  render() {
    return html`
      <div class="container">
        <slot id="slot"></slot>
      </div>
    `;
  }

  static get is() { return 'morph-list-view'; }
  static get properties() {
    return {
      platform: {
        type: String,
        reflect: true
      },

      accordion: {
        type: Boolean
      }
    };
  }

  /**
   * LitElement lifecycle called once just before first updated() is called
   */
  firstUpdated() {
    super.firstUpdated();

    // check for platform if already set in HTML markup before auto detecting platform using getPlatform and assigning new value
    if (!this.hasAttribute('platform')) {
      this.platform = getPlatform();
    }

    this._observer = new FlattenedNodesObserver(this, (info) => {
      this._processNewNodes(info.addedNodes);
    });

    // Flush function needs to be added in order to have changes delivered immediately
    this._observer.flush();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._observer.disconnect();
  }

  /**
   * Process children of morph list view component. 
   * check nodes of morph-list-view-item and attach click event listeners if they are expandable items
   * @param {Object } nodes 
   */
  _processNewNodes(nodes) {
    if (this.accordion != true) return;
    for (var i = 0; i < nodes.length; i++) {
      // get all the child nodes that are list items
      if (nodes[i].nodeName == 'MORPH-LIST-VIEW-ITEM') {
        var viewItem = nodes[i];
        if (viewItem.hasAttribute('expandable')) {
          viewItem.addEventListener('click', (e) => this._listViewItemClickHandler(e));
        }
      } 
    }
  }

  /**
  *  Goes through all non-target item and the expanded attribute if any. This closes open expandable item when a new one is clicked. 
  */
  _listViewItemClickHandler(e) {
    var items = this.querySelectorAll('morph-list-view-item');
    for (var i = 0; i < items.length; i++) {
      // remove expanded attribute from all other items except the one most recently clicked
      if (items[i] != e.currentTarget) {
        items[i].removeAttribute('expanded');
      }
    }
  }
}

window.customElements.define(MorphListView.is, MorphListView);
