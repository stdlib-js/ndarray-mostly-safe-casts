"use strict";var p=function(t,n){return function(){return n||t((n={exports:{}}).exports,n),n.exports}};var m=p(function(S,g){g.exports={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1,bool:0},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1,bool:0},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1,bool:0},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1,bool:0},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1,bool:0},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1,bool:0},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1,bool:0},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1,bool:0},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1,bool:0},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1,bool:0},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1,bool:0},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1,bool:0},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0,bool:0},bool:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1,bool:1}}});var v=p(function(A,x){
var b=require('@stdlib/utils-keys/dist'),s=require('@stdlib/assert-has-own-property/dist'),y=require('@stdlib/ndarray-base-dtype-resolve-str/dist'),f=m(),c;function h(){var t,n,e,l,r,u,a,i,o;for(e={},t=b(f),n=t.length,o=0;o<n;o++){for(r=t[o],a=f[r],l={},i=0;i<n;i++)u=t[i],l[u]=a[u];e[r]=l}return e}function q(){var t,n,e,l,r,u,a,i,o;for(e={},t=b(f),n=t.length,o=0;o<n;o++){for(r=t[o],a=f[r],l=[],i=0;i<n;i++)u=t[i],a[u]===1&&l.push(u);e[r]=l}return e}function d(t){return arguments.length===0?h():(c===void 0&&(c=q()),t=y(t),s(c,t)?c[t].slice():null)}x.exports=d
});var T=v();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
