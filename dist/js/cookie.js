/*! formstone v0.7.5 [cookie.js] 2015-07-17 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(b,c,d){if("object"===a.type(b))h=a.extend(h,b);else if(d=a.extend({},h,d||{}),"undefined"!==a.type(b)){if("undefined"===a.type(c))return f(b);null===c?g(b):e(b,c,d)}return null}function e(b,c,d){var e=!1,f=new Date;d.expires&&"number"===a.type(d.expires)&&(f.setTime(f.getTime()+d.expires),e=f.toGMTString());var g=d.domain?"; domain="+d.domain:"",h=e?"; expires="+e:"",j=e?"; max-age="+d.expires/1e3:"",k=d.path?"; path="+d.path:"",l=d.secure?"; secure":"";i.cookie=b+"="+c+h+j+g+k+l}function f(a){for(var b=a+"=",c=i.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null}function g(a){e(a,"",{expires:-6048e5})}var h=(b.Plugin("cookie",{utilities:{_delegate:d}}),{domain:null,expires:6048e5,path:null,secure:null}),i=b.document}(jQuery,Formstone);