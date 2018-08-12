# morph-list-view

List view container component

## Getting Started

For the information about how to clone the desired repository, running the local server and testing, please refer to this [link](https://github.com/moduware/polymorph-components/blob/master/INFO.md).

## Demo

<!---

```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../morph-list-view-item/morph-list-view-item.html">
    <link rel="import" href="../morph-list-view-title/morph-list-view-title.html">
    <link rel="import" href="../morph-list-view-divider/morph-list-view-divider.html">
    <link rel="import" href="../iron-icons/maps-icons.html">
    <link rel="import" href="morph-list-view.html">
    <style>
      html {
        background-color: #eff0f4;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<morph-list-view platform="android">
  <morph-list-view-title platform="android">Android List</morph-list-view-title>
  <morph-list-view-item platform="android">Item 1</morph-list-view-item>
  <morph-list-view-item platform="android">
    <!-- <span slot="icon"><iron-icon icon="maps:directions-bus"></iron-icon></span> -->
    Item 1
    <span slot="secondary-content">Android Version</span> 
  </morph-list-view-item>
  <morph-list-view-item platform="android" href="#moduware">
    <span slot="header">Header</span>
    Item 2
    <span slot="footer">Footer</span>
  </morph-list-view-item>
</morph-list-view>

<morph-list-view platform="ios">
  <morph-list-view-title platform="ios">IOS List</morph-list-view-title>
  <morph-list-view-item platform="ios">Item 1</morph-list-view-item>
  <morph-list-view-item platform="ios">
    <!-- <span slot="icon"><iron-icon icon="maps:directions-bus"></iron-icon></span> -->
    Item 1
    <span slot="secondary-content">IOS Version</span> 
  </morph-list-view-item>
  <morph-list-view-item platform="ios" href="#moduware">
    <span slot="header">Header</span>
    Item 2
    <span slot="footer">Footer</span>
  </morph-list-view-item>
</morph-list-view>

```

- Here is a quick demo of the morph-list-view element for IOS.

  <p align="center">
    <img src="demo-images/ios-demo.png" alt="IOS morph-list-view demo"/>
  </p>

```html

<template>
  <morph-list-view platform="ios">
    <morph-list-view-title>First list</morph-list-view-title>
    <morph-list-view-item>Item 1</morph-list-view-item>

    <morph-list-view-divider>Divider</morph-list-view-divider>

    <morph-list-view-item>
      Item 2
      <span slot="secondary-content">Version</span> 
    </morph-list-view-item>
    <morph-list-view-item href="#moduware">
      <span slot="header">Header</span>
      Item 3
      <span slot="footer">Footer</span>
    </morph-list-view-item>
  </morph-list-view>

  <morph-list-view>
    <morph-list-view-title>Second list</morph-list-view-title>
    <morph-list-view-item>Item 4</morph-list-view-item>
  </morph-list-view>
</template>

```

- Here is a quick demo of the morph-list-view element for Android.

  <p align="center">
    <img src="demo-images/android-demo.png" alt="Android morph-list-view demo"/>
  </p>

```html

<template>
  <morph-list-view platform="android">
    <morph-list-view-title>First list</morph-list-view-title>
    <morph-list-view-item>Item 1</morph-list-view-item>

    <morph-list-view-divider>Divider</morph-list-view-divider>

    <morph-list-view-item>
      Item 2
      <span slot="secondary-content">Version</span> 
    </morph-list-view-item>
    <morph-list-view-item href="#moduware">
      <span slot="header">Header</span>
      Item 3
      <span slot="footer">Footer</span>
    </morph-list-view-item>
  </morph-list-view>

  <morph-list-view>
    <morph-list-view-title>Second list</morph-list-view-title>
    <morph-list-view-item>Item 4</morph-list-view-item>
  </morph-list-view>
</template>

```

|     Custom Attribute    |   Type  | Description                                                                                   | Default        |
|:-----------------------:|:-------:|-----------------------------------------------------------------------------------------------|----------------|
|      **`accordion`**    | Boolean | This is an option for items to expand one at a time on the same list view                     | **`false`**    |

- Here is a quick demo of the morph-list-view element with accordion option

  <p align="center">
    <img src="demo-images/list-view-accordion.gif" alt="Android morph-list-view accordion option demo"/>
  </p>

- Sample HTML markup for accordion list

```html

<template>
  <morph-list-view accordion>
    <morph-list-view-title>Accordion list</morph-list-view-title>
    <morph-list-view-item expandable expanded>Item 1</morph-list-view-item>
    <morph-list-view-item expandable>Item 2</morph-list-view-item>
    <morph-list-view-item expandable>Item 3</morph-list-view-item>
  </morph-list-view>
</template>

```