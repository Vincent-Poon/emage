define(["require","qpf","knockout"],function(e){var t=e("qpf"),n=t.use("components/meta/button"),r=t.use("components/meta/meta"),i=e("knockout"),s=n.derive(function(){return{$el:$("<div></div>"),icon:i.observable("")}},{type:"ICONBUTTON",css:_.union("icon-button",n.prototype.css),template:'<div class="qpf-icon" data-bind="css:icon"></div>'});return r.provideBinding("iconbutton",s),s});