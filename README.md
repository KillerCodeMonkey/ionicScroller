# ionicScroller

ionicScroller is an [Angular.js](http://angularjs.org/) and ionic-framework extension for simple scroll-top, -bottom, -to functionality.

Installation
============
- run `bower install ionic-scroller`
- or download zip from release page: https://github.com/KillerCodeMonkey/ionicScroller/releases

Usage
=====
- load ionic, ionic-scroller scripts in your index.html
- add dependency to your app module `var myAppModule = angular.module('ionicScrollerTest', ['ionic', 'ionicScroller']);`
- use directives in your html --> ion-scroller-top, ion-scroller-bottom
`<ion-scroller-top css-class="button button-assertive" offset="20" text="UP!" scroll-delegate="delegateHandle" animate="true"></ion-scroller-top>`
- the generated buttons are hidden on shown with ng-show/ng-hide, so you can animate showing and hiding of the buttons through css as well ;)
- add class with absolute position to move button over your list ;)

Configuration
=============

- change button text: `text="YOUR TEXT OR EMPTY"` (default: Top / Bottom)
- animate scrolling: `animate="true"` (default false)
- auto-hide at offset: `offset="10"` (ion-scroller-bottom: hides button if scroll position top >= offset, default: -1; ion-scroller-top: hides button if scroll position top <= offset, default: -1; offset="-1": does not hide the button)
- connect to delegateHandle: `scroll-delegate="delegateHandle"` (default, the main delegateHandle like ion-content)
- style through class or ng-class expression: `css-class="button button-assertive"` (wraps up in ng-class, default: 'button button-dark')
