function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=Array(r);n<r;n++)e[n]=t[n];return e}function r(r){return function(r){if(Array.isArray(r))return t(r)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,n){if(r){if("string"==typeof r)return t(r,void 0);var e=Object.prototype.toString.call(r).slice(8,-1);if("Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n,e=document.querySelector("ul");function a(t){return Number(t.split("$").join("").split(",").join(""))}(n=r(e.children)).sort(function(t,r){var n=a(t.dataset.salary);return a(r.dataset.salary)-n}),e.replaceChildren.apply(e,r(n)),r(e.children).map(function(t){return{name:t.textContent.trim(),position:t.dataset.position,salary:a(t.dataset.salary),age:t.dataset.age}});
//# sourceMappingURL=index.8631da58.js.map
