"use strict";var p=function(t,n){return function(){return n||t((n={exports:{}}).exports,n),n.exports}};var m=p(function(S,s){s.exports={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}}});var g=p(function(A,v){
var x=require('@stdlib/utils-keys/dist'),b=require('@stdlib/assert-has-own-property/dist'),y=require('@stdlib/ndarray-base-dtype-resolve-str/dist'),f=m(),c;function h(){var t,n,r,u,a,o,l,i,e;for(r={},t=x(f),n=t.length,e=0;e<n;e++){for(a=t[e],l=f[a],u={},i=0;i<n;i++)o=t[i],u[o]=l[o];r[a]=u}return r}function q(){var t,n,r,u,a,o,l,i,e;for(r={},t=x(f),n=t.length,e=0;e<n;e++){for(a=t[e],l=f[a],u=[],i=0;i<n;i++)o=t[i],l[o]===1&&u.push(o);r[a]=u}return r}function d(t){return arguments.length===0?h():(c===void 0&&(c=q()),t=y(t),b(c,t)?c[t].slice():null)}v.exports=d
});var T=g();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map