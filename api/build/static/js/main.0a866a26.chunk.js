(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{36:function(e,t,a){e.exports=a(64)},41:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),i=a.n(r),l=(a(41),a(4)),o=a(5),c=a(7),u=a(6),p=a(8),m=a(13),g=a(30),d=a.n(g),f=(a(49),function(e){return{type:"Mark_Location",payload:[e[0],e[1]]}}),h=a(12),b=(a(58),[]),v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"click",value:function(e){var t=this;b=[e.latlng.lat,e.latlng.lng],this.props.add_pointer(e.latlng),setTimeout((function(){t.props.add_pointer(e.latlng)}),0)}},{key:"render",value:function(){var e=this;return s.a.createElement(d.a,{className:"map",markers:this.props.pings,zoom:1,onClick:function(t){return e.click(t)},location:!0})}}]),a}(n.Component),E=Object(h.a)(Object(p.b)((function(e){return{pings:e.pings}}),(function(e){return{add_pointer:function(t){return e(function(e){return{type:"Add_Pointer",payload:[e.lat,e.lng]}}(t))}}}))(v)),y=[],N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"All_Pings":case"My_Pings":return e=e.concat(t.payload);case"Add_Pointer":if(e.length>=1&&e[e.length-1].title&&"New Tag"===e[e.length-1].title&&e.pop(),e.length>=2&&e[e.length-2].draggable)return e;y=b;var a={position:t.payload,draggable:!0,onDragend:function(e){y=[e.target._latlng.lat,e.target._latlng.lng]}};return e=e.concat(a);case"Mark_Location":if(0===e.length)return window.alert("Add a location to ping...."),e;if(void 0===e[e.length-1].position[0])return window.alert("Add a location to ping...."),e;if(e.length>=1)for(;e.length>=1&&e[e.length-1].draggable;)e.pop();a={position:t.payload,title:"New Tag",draggable:!1};return e=e.concat(a);default:return e}},w=a(34),j=a.n(w),k=a(35),O=(a(59),a(60),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={name:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/users/username").then((function(e){return e.json()})).then((function(t){e.setState({name:t.name})}))}},{key:"render",value:function(){return s.a.createElement("nav",null,s.a.createElement("div",null,s.a.createElement("img",{src:"/logoimg.png",width:"60px"}),s.a.createElement("div",{className:"logo"},"GioTag")),s.a.createElement("div",{className:"user"},s.a.createElement("span",{className:"material-icons"},"account_circle"),s.a.createElement("span",{className:"user-text"},this.state.name)))}}]),a}(n.Component)),_=(a(61),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"markLocation",value:function(e){this.props.marker_thunk(e)}},{key:"allPings",value:function(){var e=this;fetch("/all/pings").then((function(e){return e.json()})).then((function(t){e.props.All_pings(t),e.props.All_pings(t)}))}},{key:"mypings",value:function(){var e=this;fetch("/my/pings").then((function(e){return e.json()})).then((function(t){e.props.My_pings(t),e.props.My_pings(t)}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"sidebar-container"},s.a.createElement("img",{src:"/decorator.png",width:"75%",className:"decorator"}),s.a.createElement("ul",{className:"map-links"},s.a.createElement("li",{onClick:function(){return e.mypings()}}," MY Pings"),s.a.createElement("li",{onClick:function(){return e.allPings()}},"All Pings"),s.a.createElement("li",{onClick:function(){return e.unping()}},"Unping"),s.a.createElement("li",null,s.a.createElement("a",{href:"/logout"},"Logout")),s.a.createElement("li",{className:"ping_button",onClick:function(){return e.markLocation(y)}},"Ping")))}}]),a}(n.Component)),A=Object(h.a)(Object(p.b)(null,(function(e){return{marker_thunk:function(t){return e(function(e){return function(t){fetch("https://api.opencagedata.com/geocode/v1/json?q="+e[0].toString()+"+"+e[1].toString()+"&key=4553a14022dd4fe5a004f0e2616027fc").then((function(e){return e.json()})).then((function(a){console.log(a),fetch("/add/location",{method:"post",body:JSON.stringify({position:e,draggable:!1,title:a.results[0].formatted}),headers:{"Content-Type":"Application/json",credentials:"same-0rigin"}}).then((function(e){return e.json()})).then((function(a){"success"===a.Status?(t(f(e)),t(f(e))):window.alert("Opps this location is Already Marked by you !!!...")}))}))}}(t))},All_pings:function(t){return e(function(e){return{type:"All_Pings",payload:e}}(t))},My_pings:function(t){return e(function(e){return{type:"My_Pings",payload:e}}(t))}}}))(_)),C=(a(62),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).remove_loc=function(t){t.target.style.backgroundColor="red",fetch("/delete/location",{method:"delete",body:JSON.stringify({title:t.target.innerHTML}),headers:{"Content-Type":"application/json",credential:"self-origin"}}).then((function(e){return e.json()})).then((function(t){e.props.My_pings(t)}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=[];if(console.log(this.props.pings),this.props.pings&&this.props.pings.length>=1)for(var t=0;t<this.props.pings.length;t+=2)this.props.pings[t].title&&this.props.pings[t].title.length>=70&&e.push(s.a.createElement("li",{onClick:this.remove_loc},this.props.pings[t].title.slice(71,this.props.pings[t].title.length-4)));return s.a.createElement("div",{className:"sidebar-container side-bar-right"},s.a.createElement("div",{className:"ping-log-info"},"Ping Logs"),s.a.createElement("ul",{className:"log-bar"},e))}}]),a}(n.Component)),P=Object(h.a)(Object(p.b)((function(e){return{pings:e.pings}}),null)(C)),S=(a(63),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).login=function(){var t=e.Login_email.current.value,a=e.Login_password.current.value;fetch("/users/login",{method:"post",body:JSON.stringify({email:t,password:a}),headers:{"Content-Type":"Application/json",credentials:"same-origin"}}).then((function(e){if(401!==e.status)return e.json();window.alert("Authentication Failed !!...")})).then((function(t){console.log(t.Status),t.Status&&"success"===t.Status&&e.setState({status:1})}))},e.signup=function(){var t=e.Name.current.value,a=e.Password.current.value,n=e.Cnf_password.current.value,s=e.Email.current.value;""!==t?a.length<6?window.alert("Password Length should be greater then equal to 6 !!!..."):a===n?-1!==s.search("@")?fetch("/users/signup",{method:"Post",body:JSON.stringify({Name:t,Password:a,Email:s}),headers:{"Content-Type":"Application/json",credentials:"same-origin"}}).then((function(e){return e.json()})).then((function(e){"Success"===e.status?window.alert("you have sccessfully created an Account Try Login Now.."):window.alert("User With this Email Already Exist!!!....")})):window.alert("Email is not Valid !!!....."):window.alert("Repeat password is not same!!!...."):window.alert("Name should not be Empty!!!...")},e.Name=s.a.createRef(),e.Password=s.a.createRef(),e.Cnf_password=s.a.createRef(),e.Email=s.a.createRef(),e.Login_email=s.a.createRef(),e.Login_password=s.a.createRef(),e.state={status:0},e}return Object(o.a)(a,[{key:"render",value:function(){return 0===this.state.status?(console.log(this.state.status),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"filter-layer"},s.a.createElement("div",{className:"login-wrap"},s.a.createElement("div",{className:"login-html"},s.a.createElement("input",{id:"tab-1",type:"radio",name:"tab",className:"sign-in",checked:!0}),s.a.createElement("label",{for:"tab-1",className:"tab"},"Sign In"),s.a.createElement("input",{id:"tab-2",type:"radio",name:"tab",className:"sign-up"}),s.a.createElement("label",{for:"tab-2",className:"tab"},"Sign Up"),s.a.createElement("div",{className:"login-form"},s.a.createElement("div",{className:"sign-in-htm"},s.a.createElement("div",{className:"group"},s.a.createElement("label",{for:"user",className:"label"},"Email Address"),s.a.createElement("input",{id:"user",type:"text",className:"input",ref:this.Login_email})),s.a.createElement("div",{className:"group"},s.a.createElement("label",{for:"pass",className:"label"},"Password"),s.a.createElement("input",{id:"pass",type:"password",className:"input","data-type":"password",ref:this.Login_password})),s.a.createElement("div",{className:"group"},s.a.createElement("input",{type:"submit",className:"button",value:"Sign In",onClick:this.login})),s.a.createElement("div",{className:"hr"}),s.a.createElement("div",{className:"foot-lnk",onClick:function(){window.location.href="/users/google"}},s.a.createElement("img",{src:"https://img.icons8.com/color/30/000000/google-logo.png"}),s.a.createElement("label",{className:"google-login-text"},"Google login"))),s.a.createElement("div",{className:"sign-up-htm"},s.a.createElement("div",{className:"group"},s.a.createElement("label",{for:"user",className:"label"},"Full Name"),s.a.createElement("input",{id:"user",type:"text",className:"input",ref:this.Name})),s.a.createElement("div",{className:"group"},s.a.createElement("label",{for:"pass",className:"label"},"Password"),s.a.createElement("input",{id:"pass",type:"password",className:"input","data-type":"password",ref:this.Password})),s.a.createElement("div",{className:"group"},s.a.createElement("label",{for:"pass",className:"label"},"Repeat Password"),s.a.createElement("input",{id:"pass",type:"password",className:"input","data-type":"password",ref:this.Cnf_password})),s.a.createElement("div",{className:"group"},s.a.createElement("label",{for:"pass",className:"label"},"Email Address"),s.a.createElement("input",{id:"pass",type:"text",className:"input",ref:this.Email})),s.a.createElement("div",{className:"group"},s.a.createElement("input",{type:"submit",className:"button",value:"Sign Up",onClick:this.signup})),s.a.createElement("div",{className:"hr"})))))))):(console.log(this.state.status),s.a.createElement(M,null))}}]),a}(n.Component)),L=Object(m.d)(Object(m.c)({pings:N}),Object(m.a)(k.a,j.a)),M=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={status:-1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/status").then((function(e){return e.json()})).then((function(t){"authenticated"===t.status?e.setState({status:1}):e.setState({status:0})}))}},{key:"render",value:function(){return 1===this.state.status?s.a.createElement(p.a,{store:L,className:"App"},s.a.createElement(O,null),s.a.createElement("div",{className:"map-box"},s.a.createElement(A,null),s.a.createElement(E,null),s.a.createElement(P,null))):0===this.state.status?s.a.createElement(p.a,{store:L,className:"App"},s.a.createElement(S,null)):s.a.createElement(p.a,{store:L,className:"App"})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.0a866a26.chunk.js.map