define(["require","qpf","knockout"],function(e){var t=e("qpf"),n=t.use("components/meta/meta"),r=e("knockout"),i=n.derive(function(){return{tag:"canvas"}},{type:"VIEWPORT",css:"viewport"});return n.provideBinding("viewport",i),i});