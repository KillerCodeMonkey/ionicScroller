# ionicScroller

ionicScroller is an [Angular.js](http://angularjs.org/) and ionic-framework extension for simple scroll-top, -bottom, -to functionality.

Installation
============
- run `bower install ionic-scroller`
- or download zip from release page: https://github.com/KillerCodeMonkey/ionicScroller/releases

Usage
=====
- load angular, quill, ngquill scripts in your index.html
- add dependency to your app module `var myAppModule = angular.module('quillTest', ['ngQuill']);`
- use ngquill directive in your html
`<ng-quill-editor ng-model="message" toolbar="true" link-tooltip="true" image-tooltip="true" toolbar-entries="font size bold list bullet italic underline strike align color background link image" editor-required="true" required="" error-class="input-error"></ng-quill-editor>`
- if you use it in a form and you are resetting it via $setPristine() -> you have to set editor.setHTML('') -> it will add the error class only, if the model has ng-dirty class

Configuration
=============

- show toolbar: `toolbar="true"` (default: false)
- connect model: `ng-model="message"` (required)
- set toolbar entries (formats): `toolbar-enries="font bold ..."` (separated by whitespace, if you want all -> delete the attribute, default: all)
- show link tooltip: `link-tooltip="true"` (default: false)
- show image tooltip: `image-tooltip="true"` (default: false)
- set to required: editor-required="true" (adds hidden text-input that checks length of content) and you have to add html5 attribute `required` to carry about form validation for the model (sets correct classes at the dom-node - ng-dirty, invalid and so on)
- customized error class added to editors container div: `error-class="input-error"`
- set theme name: `theme="snow"` (default: 'snow')
- set readOnly: `read-only=""` (default: false) - requires function to be executed
- set translations: `translations="dict.editor"` (object with editor translations -> default is english)
