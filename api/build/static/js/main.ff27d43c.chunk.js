(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{36:function(n,t,e){n.exports=e(64)},41:function(n,t,e){},58:function(n,t,e){},59:function(n,t,e){},60:function(n,t,e){},61:function(n,t,e){},62:function(n,t,e){},63:function(n,t,e){},64:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(19),i=e.n(o),c=(e(41),e(4)),l=e(5),s=e(7),u=e(6),p=e(10),g=e(13),f=e(30),h=e.n(f),m=(e(49),function(n){return{type:"Mark_Location",payload:[n[0],n[1]]}}),d=e(12),b=(e(58),[]),v=function(n){Object(s.a)(e,n);var t=Object(u.a)(e);function e(){return Object(c.a)(this,e),t.apply(this,arguments)}return Object(l.a)(e,[{key:"click",value:function(n){var t=this;b=[n.latlng.lat,n.latlng.lng],this.props.add_pointer(n.latlng),setTimeout((function(){t.props.add_pointer(n.latlng)}),0)}},{key:"render",value:function(){var n=this;return r.a.createElement(h.a,{className:"map",markers:this.props.pings,zoom:1,onClick:function(t){return n.click(t)},location:!0})}}]),e}(a.Component),y=Object(d.a)(Object(p.b)((function(n){return{pings:n.pings}}),(function(n){return{add_pointer:function(t){return n(function(n){return{type:"Add_Pointer",payload:[n.lat,n.lng]}}(t))}}}))(v)),j=[],k=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"All_Pings":case"My_Pings":return n=n.concat(t.payload);case"Add_Pointer":if(n.length>=1&&n[n.length-1].title&&"New Tag"===n[n.length-1].title&&n.pop(),n.length>=2&&n[n.length-2].draggable)return n;j=b;var e={position:t.payload,draggable:!0,onDragend:function(n){j=[n.target._latlng.lat,n.target._latlng.lng]}};return n=n.concat(e);case"Mark_Location":if(0===n.length)return window.alert("Add a location to ping...."),n;if(void 0===n[n.length-1].position[0])return window.alert("Add a location to ping...."),n;if(n.length>=1)for(;n.length>=1&&n[n.length-1].draggable;)n.pop();e={position:t.payload,title:"New Tag",draggable:!1};return n=n.concat(e);default:return n}},O=e(34),E=e.n(O),_=e(35),w=(e(59),e(60),function(n){Object(s.a)(e,n);var t=Object(u.a)(e);function e(){var n;return Object(c.a)(this,e),(n=t.call(this)).state={name:""},n}return Object(l.a)(e,[{key:"componentDidMount",value:function(){var n=this;fetch("/users/username").then((function(n){return n.json()})).then((function(t){n.setState({name:t.name})}))}},{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement("img",{src:"/logoimg.png",width:"60px"}),r.a.createElement("div",{className:"logo"},"GioTag")),r.a.createElement("div",{className:"user"},r.a.createElement("span",{className:"material-icons"},"account_circle"),r.a.createElement("span",{className:"user-text"},this.state.name)))}}]),e}(a.Component)),N=(e(61),function(n){Object(s.a)(e,n);var t=Object(u.a)(e);function e(){return Object(c.a)(this,e),t.apply(this,arguments)}return Object(l.a)(e,[{key:"markLocation",value:function(n){this.props.marker_thunk(n)}},{key:"allPings",value:function(){var n=this;fetch("/all/pings").then((function(n){return n.json()})).then((function(t){n.props.All_pings(t),n.props.All_pings(t)}))}},{key:"mypings",value:function(){var n=this;fetch("/my/pings").then((function(n){return n.json()})).then((function(t){n.props.My_pings(t),n.props.My_pings(t)}))}},{key:"render",value:function(){var n=this;return r.a.createElement("div",{className:"sidebar-container"},r.a.createElement("img",{src:"/decorator.png",width:"75%",className:"decorator"}),r.a.createElement("ul",{className:"map-links"},r.a.createElement("li",{onClick:function(){return n.mypings()}}," MY Pings"),r.a.createElement("li",{onClick:function(){return n.allPings()}},"All Pings"),r.a.createElement("li",{onClick:function(){return n.unping()}},"Unping"),r.a.createElement("li",null,r.a.createElement("a",{href:"/logout"},"Logout")),r.a.createElement("li",{className:"ping_button",onClick:function(){return n.markLocation(j)}},"Ping")))}}]),e}(a.Component)),C=Object(d.a)(Object(p.b)(null,(function(n){return{marker_thunk:function(t){return n(function(n){return function(t){fetch("https://api.opencagedata.com/geocode/v1/json?q="+n[0].toString()+"+"+n[1].toString()+"&key=4553a14022dd4fe5a004f0e2616027fc").then((function(n){return n.json()})).then((function(e){console.log(e),fetch("/add/location",{method:"post",body:JSON.stringify({position:n,draggable:!1,title:e.results[0].formatted}),headers:{"Content-Type":"Application/json",credentials:"same-0rigin"}}).then((function(n){return n.json()})).then((function(e){"success"===e.Status?(t(m(n)),t(m(n))):window.alert("Opps this location is Already Marked by you !!!...")}))}))}}(t))},All_pings:function(t){return n(function(n){return{type:"All_Pings",payload:n}}(t))},My_pings:function(t){return n(function(n){return{type:"My_Pings",payload:n}}(t))}}}))(N)),A=(e(62),function(n){Object(s.a)(e,n);var t=Object(u.a)(e);function e(){var n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))).remove_loc=function(t){t.target.style.backgroundColor="red",fetch("/delete/location",{method:"delete",body:JSON.stringify({title:t.target.innerHTML}),headers:{"Content-Type":"application/json",credential:"self-origin"}}).then((function(n){return n.json()})).then((function(t){n.props.My_pings(t)}))},n}return Object(l.a)(e,[{key:"render",value:function(){var n=[];if(console.log(this.props.pings),this.props.pings&&this.props.pings.length>=1)for(var t=0;t<this.props.pings.length;t+=2)this.props.pings[t].title&&n.push(r.a.createElement("li",{onClick:this.remove_loc},this.props.pings[t].title.slice(71,this.props.pings[t].title.length-4)));return r.a.createElement("div",{className:"sidebar-container side-bar-right"},r.a.createElement("div",{className:"ping-log-info"},"Ping Logs"),r.a.createElement("ul",{className:"log-bar"},n))}}]),e}(a.Component)),M=Object(d.a)(Object(p.b)((function(n){return{pings:n.pings}}),null)(A)),P=(e(63),a.Component,Object(g.d)(Object(g.c)({pings:k}),Object(g.a)(_.a,E.a))),L=function(n){Object(s.a)(e,n);var t=Object(u.a)(e);function e(){var n;return Object(c.a)(this,e),(n=t.call(this)).state={status:-1},n}return Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(p.a,{store:P,className:"App"},r.a.createElement(w,null),r.a.createElement("div",{className:"map-box"},r.a.createElement(C,null),r.a.createElement(y,null),r.a.createElement(M,null)))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.ff27d43c.chunk.js.map