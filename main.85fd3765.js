parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return d(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=document.querySelector(".append-row"),i=document.querySelector(".remove-row"),c=document.querySelector(".append-column"),a=document.querySelector(".remove-column"),u=document.querySelector(".field > tbody");c.addEventListener("click",function(t){var r=e(document.querySelector(".field > tbody").children);a.disabled&&(a.disabled=!1),9===r[0].cells.length&&(t.target.disabled=!0),r.forEach(function(e){var t=document.createElement("td");e.append(t)})}),a.addEventListener("click",function(t){var r=e(document.querySelector(".field > tbody").children);c.disabled&&(c.disabled=!1),3===r[0].cells.length&&(t.target.disabled=!0),r.forEach(function(e){e.lastElementChild.remove()})}),l.addEventListener("click",function(t){i.disabled&&(i.disabled=!1),9===e(u.children).length&&(t.target.disabled=!0),u.append(u.lastElementChild.cloneNode(!0))}),i.addEventListener("click",function(t){l.disabled&&(l.disabled=!1),3===e(u.children).length&&(t.target.disabled=!0),u.lastElementChild.remove()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.85fd3765.js.map