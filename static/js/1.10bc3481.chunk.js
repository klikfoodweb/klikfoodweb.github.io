webpackJsonp([1],{418:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),l=r.n(s),p=(r(35),r(19)),A=r(23),c=r.n(A),d=r(419),m=(r.n(d),r(36)),u=r.n(m),g=r(10),h=(r.n(g),r(24)),b=(r.n(h),r(382)),f=r(381),C=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),B=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleChange=function(e){r.setState(n({},e.target.name,e.target.value))},r.handleSubmit=function(e){e.preventDefault(),sessionStorage.clear(),r.setState({submitting:!0});var t={email:r.state.email,password:r.state.password};c.a.post("http://apiklikfood.herokuapp.com/login",u.a.stringify(t)).then(function(e){var t=e;t.data.success&&(sessionStorage.setItem("api_token",t.data.data.api_token),sessionStorage.setItem("username",t.data.data.user.name),sessionStorage.setItem("id",t.data.data.user.id),sessionStorage.setItem("role",t.data.data.role)),g.toast.success("You Are Logged In !"),setTimeout(function(){r.setState({submitting:!0,redirect:!0})},3e3),console.log(e)}).catch(function(e){g.toast.error("Something Went Wrong :("),r.setState({submitting:!1})})},r.handleRegister=function(e){e.preventDefault(),sessionStorage.clear(),r.setState({submitting:!0});var t={name:r.state.registName,email:r.state.registEmail,password:r.state.registPassword,birthplace:r.state.registBirthplace,dateofbirth:r.state.registDateOfBirth,address:r.state.registAddress,no_tlp:r.state.registHp,referall_id:r.state.registReff};console.log(u.a.stringify(t));var n="";n="supplyer"===r.state.registType?"http://apiklikfood.herokuapp.com/register/supplyer":"mitra"===r.state.registType?"http://apiklikfood.herokuapp.com/register/mitra":"http://apiklikfood.herokuapp.com/register/konsumen",c.a.post(n,u.a.stringify(t)).then(function(e){g.toast.success("Register Success !"),setTimeout(function(){r.setState({submitting:!0,redirect:!0})},3e3),console.log(e)}).catch(function(e){g.toast.error("Something Went Wrong :("),r.setState({submitting:!1})})},r.state={name:"",email:"",registName:"",registEmail:"",registPassword:"",registBirthplace:"",registDateOfBirth:"",registAddress:"",registHp:"",registReff:"",registType:"",password:"",submitting:!1,redirect:!1},r}return i(t,e),C(t,[{key:"render",value:function(){return this.state.redirect?l.a.createElement(p.c,{to:"/"}):0!==sessionStorage.length?l.a.createElement(p.c,{to:"/admin"}):l.a.createElement("div",null,l.a.createElement(g.ToastContainer,null),l.a.createElement("section",{id:"form"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4 col-sm-offset-1"},l.a.createElement("div",{className:"login-form"},l.a.createElement("h2",null,"Login to your account"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"email",name:"email",placeholder:"Email Address",value:this.state.email,onChange:this.handleChange}),l.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange}),l.a.createElement("button",{type:"submit",className:"btn btn-success"},"Login")))),l.a.createElement("div",{className:"col-sm-1"},l.a.createElement("h2",{className:"or"},"OR")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"signup-form"},l.a.createElement("h2",null,"New User Signup!"),l.a.createElement("form",{onSubmit:this.handleRegister},l.a.createElement("input",{type:"text",name:"registName",placeholder:"Name",value:this.state.registName,onChange:this.handleChange}),l.a.createElement("input",{type:"email",name:"registEmail",placeholder:"Email Address",value:this.state.registEmail,onChange:this.handleChange}),l.a.createElement("input",{type:"password",name:"registPassword",placeholder:"Password",value:this.state.registPassword,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"registBirthplace",placeholder:"Birthplace",value:this.state.registBirthplace,onChange:this.handleChange}),l.a.createElement("input",{type:"date",name:"registDateOfBirth",placeholder:"Date Of Birth",value:this.state.registDateOfBirth,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"registAddress",placeholder:"Address",value:this.state.registAddress,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"registHp",placeholder:"No Telp",value:this.state.registHp,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"registReff",placeholder:"Refferal",value:this.state.registReff,onChange:this.handleChange}),l.a.createElement("label",null," Daftar Sebagai : "),l.a.createElement("select",{name:"registType",style:{marginBottom:"20px"},onChange:this.handleChange},l.a.createElement("option",{value:"konsumen"},"Konsumen"),l.a.createElement("option",{value:"mitra"},"Mitra"),l.a.createElement("option",{value:"supplyer"},"Supplyer")),l.a.createElement("button",{type:"submit",className:"btn btn-success"},"Signup"))))))),l.a.createElement("footer",{id:"footer"},l.a.createElement(b.a,null),l.a.createElement(f.a,null)))}}]),t}(s.Component);t.default=B},419:function(e,t,r){var n=r(420);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(379)(n,a);n.locals&&(e.exports=n.locals)},420:function(e,t,r){t=e.exports=r(378)(!0),t.push([e.i,":root{--input-padding-x:1.5rem;--input-padding-y:.75rem}.card-signin{border:0;border-radius:1rem;-webkit-box-shadow:0 .5rem 1rem 0 rgba(0,0,0,.1);box-shadow:0 .5rem 1rem 0 rgba(0,0,0,.1)}.card-signin .card-title{margin-bottom:2rem;font-weight:300;font-size:1.5rem}.card-signin .card-body{padding:2rem}.form-signin{width:100%}.form-signin .btn{font-size:80%;border-radius:5rem;letter-spacing:.1rem;font-weight:700;padding:1rem;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s}.form-label-group{position:relative;margin-bottom:1rem}.form-label-group input{height:auto;border-radius:2rem}.form-label-group>input,.form-label-group>label{padding:var(--input-padding-y) var(--input-padding-x)}.form-label-group>label{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;border:1px solid transparent;border-radius:.25rem;-webkit-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}.form-label-group input::-webkit-input-placeholder{color:transparent}.form-label-group input:-ms-input-placeholder,.form-label-group input::-ms-input-placeholder{color:transparent}.form-label-group input::placeholder{color:transparent}.form-label-group input:not(:placeholder-shown){padding-top:calc(var(--input-padding-y) + var(--input-padding-y) * 0.666666666666667);padding-bottom:calc(var(--input-padding-y) / 3)}.form-label-group input:not(:placeholder-shown)~label{padding-top:calc(var(--input-padding-y) / 3);padding-bottom:calc(var(--input-padding-y) / 3);font-size:12px;color:#777}.btn-google{color:#fff;background-color:#ea4335}.btn-facebook{color:#fff;background-color:#3b5998}","",{version:3,sources:["C:/MAMP/htdocs/clickfood/src/login.css"],names:[],mappings:"AAAA,MACE,yBAA0B,AAC1B,wBAA0B,CAC3B,AAED,aACE,SAAU,AACV,mBAAoB,AACpB,iDAAuD,AAC/C,wCAA+C,CACxD,AAED,yBACE,mBAAoB,AACpB,gBAAiB,AACjB,gBAAkB,CACnB,AAED,wBACE,YAAc,CACf,AAED,aACE,UAAY,CACb,AAED,kBACE,cAAe,AACf,mBAAoB,AACpB,qBAAsB,AACtB,gBAAkB,AAClB,aAAc,AACd,2BAA6B,AAC7B,sBAAwB,AACxB,kBAAqB,CACtB,AAED,kBACE,kBAAmB,AACnB,kBAAoB,CACrB,AAED,wBACE,YAAa,AACb,kBAAoB,CACrB,AAED,gDAEE,qDAAuD,CACxD,AAED,wBACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,cAAe,AACf,WAAY,AACZ,gBAAiB,AAEjB,gBAAiB,AACjB,cAAe,AACf,6BAA8B,AAC9B,qBAAsB,AACtB,uCAAwC,AACxC,kCAAmC,AACnC,8BAAgC,CACjC,AAED,mDACE,iBAAmB,CACpB,AAMD,6FACE,iBAAmB,CACpB,AAED,qCACE,iBAAmB,CACpB,AAED,gDACE,sFAA6E,AAC7E,+CAAiD,CAClD,AAED,sDACE,6CAA8C,AAC9C,gDAAiD,AACjD,eAAgB,AAChB,UAAY,CACb,AAED,YACE,WAAa,AACb,wBAA0B,CAC3B,AAED,cACE,WAAa,AACb,wBAA0B,CAC3B",file:"login.css",sourcesContent:[":root {\r\n  --input-padding-x: 1.5rem;\r\n  --input-padding-y: .75rem;\r\n}\r\n\r\n.card-signin {\r\n  border: 0;\r\n  border-radius: 1rem;\r\n  -webkit-box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n          box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card-signin .card-title {\r\n  margin-bottom: 2rem;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.card-signin .card-body {\r\n  padding: 2rem;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n}\r\n\r\n.form-signin .btn {\r\n  font-size: 80%;\r\n  border-radius: 5rem;\r\n  letter-spacing: .1rem;\r\n  font-weight: bold;\r\n  padding: 1rem;\r\n  -webkit-transition: all 0.2s;\r\n  -o-transition: all 0.2s;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group input {\r\n  height: auto;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n}\r\n\r\n.form-label-group>label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  -webkit-transition: all .1s ease-in-out;\r\n  -o-transition: all .1s ease-in-out;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown)~label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n.btn-google {\r\n  color: white;\r\n  background-color: #ea4335;\r\n}\r\n\r\n.btn-facebook {\r\n  color: white;\r\n  background-color: #3b5998;\r\n}"],sourceRoot:""}])}});
//# sourceMappingURL=1.10bc3481.chunk.js.map