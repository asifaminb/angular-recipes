var f=Object.defineProperty,g=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var e=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var d=(c,a,b)=>a in c?f(c,a,{enumerable:!0,configurable:!0,writable:!0,value:b}):c[a]=b,k=(c,a)=>{for(var b in a||={})i.call(a,b)&&d(c,b,a[b]);if(e)for(var b of e(a))j.call(a,b)&&d(c,b,a[b]);return c},l=(c,a)=>g(c,h(a));var m=(c,a,b)=>(d(c,typeof a!="symbol"?a+"":a,b),b);export{k as a,l as b,m as c};
