(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{36:function(n,e,t){n.exports=t(64)},41:function(n,e,t){},58:function(n,e,t){},59:function(n,e,t){},60:function(n,e,t){},61:function(n,e,t){},62:function(n,e,t){},63:function(n,e,t){},64:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(19),i=t.n(o),c=(t(41),t(4)),l=t(5),s=t(7),u=t(6),p=t(10),g=t(13),f=t(30),m=t.n(f),d=(t(49),function(n){return{type:"Mark_Location",payload:[n[0],n[1]]}}),h=t(12),b=(t(58),[]),y=function(n){Object(s.a)(t,n);var e=Object(u.a)(t);function t(){return Object(c.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"click",value:function(n){var e=this;b=[n.latlng.lat,n.latlng.lng],this.props.add_pointer(n.latlng),setTimeout((function(){e.props.add_pointer(n.latlng)}),0)}},{key:"render",value:function(){var n=this;return r.a.createElement(m.a,{className:"map",markers:this.props.pings,zoom:1,onClick:function(e){return n.click(e)},location:!0})}}]),t}(a.Component),v=Object(h.a)(Object(p.b)((function(n){return{pings:n.pings}}),(function(n){return{add_pointer:function(e){return n(function(n){return{type:"Add_Pointer",payload:[n.lat,n.lng]}}(e))}}}))(y)),j=[],k=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"All_Pings":case"My_Pings":return n=n.concat(e.payload);case"Add_Pointer":if(n.length>=1&&n[n.length-1].title&&"New Tag"===n[n.length-1].title&&n.pop(),n.length>=2&&n[n.length-2].draggable)return n;j=b;var t={position:e.payload,draggable:!0,onDragend:function(n){j=[n.target._latlng.lat,n.target._latlng.lng]}};return n=n.concat(t);case"Mark_Location":if(0===n.length)return window.alert("Add a location to ping...."),n;if(void 0===n[n.length-1].position[0])return window.alert("Add a location to ping...."),n;if(n.length>=1)for(;n.length>=1&&n[n.length-1].draggable;)n.pop();t={position:e.payload,title:"New Tag",draggable:!1};return n=n.concat(t);default:return n}},O=t(34),E=t.n(O),_=t(35),w=(t(59),t(60),function(n){Object(s.a)(t,n);var e=Object(u.a)(t);function t(){var n;return Object(c.a)(this,t),(n=e.call(this)).state={name:""},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var n=this;fetch("/users/username").then((function(n){return n.json()})).then((function(e){n.setState({name:e.name})}))}},{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement("img",{src:"/logoimg.png",width:"60px"}),r.a.createElement("div",{className:"logo"},"GioTag")),r.a.createElement("div",{className:"user"},r.a.createElement("span",{className:"material-icons"},"account_circle"),r.a.createElement("span",{className:"user-text"},this.state.name)))}}]),t}(a.Component)),N=(t(61),function(n){Object(s.a)(t,n);var e=Object(u.a)(t);function t(){return Object(c.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"markLocation",value:function(n){this.props.marker_thunk(n)}},{key:"allPings",value:function(){var n=this;fetch("/all/pings").then((function(n){return n.json()})).then((function(e){n.props.All_pings(e),n.props.All_pings(e)}))}},{key:"mypings",value:function(){var n=this;fetch("/my/pings").then((function(n){return n.json()})).then((function(e){n.props.My_pings(e),n.props.My_pings(e)}))}},{key:"render",value:function(){var n=this;return r.a.createElement("div",{className:"sidebar-container"},r.a.createElement("img",{src:"/decorator.png",width:"75%",className:"decorator"}),r.a.createElement("ul",{className:"map-links"},r.a.createElement("li",{onClick:function(){return n.mypings()}}," MY Pings"),r.a.createElement("li",{onClick:function(){return n.allPings()}},"All Pings"),r.a.createElement("li",{onClick:function(){return n.unping()}},"Unping"),r.a.createElement("li",null,r.a.createElement("a",{href:"/logout"},"Logout")),r.a.createElement("li",{className:"ping_button",onClick:function(){return n.markLocation(j)}},"Ping")))}}]),t}(a.Component)),C=Object(h.a)(Object(p.b)(null,(function(n){return{marker_thunk:function(e){return n(function(n){return function(e){fetch("https://api.opencagedata.com/geocode/v1/json?q="+n[0].toString()+"+"+n[1].toString()+"&key=4553a14022dd4fe5a004f0e2616027fc").then((function(n){return n.json()})).then((function(t){console.log(t),fetch("/add/location",{method:"post",body:JSON.stringify({position:n,draggable:!1,title:t.results[0].formatted}),headers:{"Content-Type":"Application/json",credentials:"same-0rigin"}}).then((function(n){return n.json()})).then((function(t){"success"===t.Status?(e(d(n)),e(d(n))):window.alert("Opps this location is Already Marked by you !!!...")}))}))}}(e))},All_pings:function(e){return n(function(n){return{type:"All_Pings",payload:n}}(e))},My_pings:function(e){return n(function(n){return{type:"My_Pings",payload:n}}(e))}}}))(N)),A=(t(62),function(n){Object(s.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).remove_loc=function(e){e.target.style.backgroundColor="red",fetch("/delete/location",{method:"delete",body:JSON.stringify({title:e.target.innerHTML}),headers:{"Content-Type":"application/json",credential:"self-origin"}}).then((function(n){return n.json()})).then((function(e){n.props.My_pings(e)}))},n}return Object(l.a)(t,[{key:"render",value:function(){for(var n=[],e=0;e<this.props.pings.length;e+=2)n.push(r.a.createElement("li",{onClick:this.remove_loc},this.props.pings[e].title.slice(71,this.props.pings[e].title.length-4)));return r.a.createElement("div",{className:"sidebar-container side-bar-right"},r.a.createElement("div",{className:"ping-log-info"},"Ping Logs"),r.a.createElement("ul",{className:"log-bar"},n))}}]),t}(a.Component)),M=Object(h.a)(Object(p.b)((function(n){return{pings:n.pings}}),null)(A)),P=(t(63),a.Component,Object(g.d)(Object(g.c)({pings:k}),Object(g.a)(_.a,E.a))),L=function(n){Object(s.a)(t,n);var e=Object(u.a)(t);function t(){var n;return Object(c.a)(this,t),(n=e.call(this)).state={status:-1},n}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:P,className:"App"},r.a.createElement(w,null),r.a.createElement("div",{className:"map-box"},r.a.createElement(C,null),r.a.createElement(v,null),r.a.createElement(M,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.6ad0deae.chunk.js.map