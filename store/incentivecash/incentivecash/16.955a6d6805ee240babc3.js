(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ON18:function(e,n,o){"use strict";o.d(n,"a",function(){return l});var t=o("mrSG"),i=o("AytR"),r=o("Kmpd"),s=o("fXoL"),a=o("KNWA"),c=o("rux5");let l=(()=>{class e{constructor(e,n){this._directus=e,this._storeService=n,this.environmentApiURL="",this.environmentApiURL=i.a.api,this.serviceJSPayload()}serviceJSPayload(){this.$payload=this._storeService.tokenId.subscribe(e=>{const n=JSON.stringify(e);try{r.Minima.file.save(n,"tokenid.txt",e=>{if(!e.success)throw new Error("TokenId, ScaleFactor not saved!")})}catch(o){r.Minima.log(o)}})}login(e){return Object(t.a)(this,void 0,void 0,function*(){return localStorage.getItem("kickemoff")&&localStorage.removeItem("kickemoff"),this._directus.post(this.environmentApiURL+"auth/login",e)})}logout(){return Object(t.a)(this,void 0,void 0,function*(){document.getElementById("sign-out-btn").style.opacity="1.0",yield this._storeService.getUserDetailsOnce().then(e=>{const n=e;n.loginData.access_token="",n.loginData.refresh_token="",this._storeService.data.next(n),document.location.reload()})})}firstTime(){return new Promise(e=>{r.Minima.file.load("loggedEmail.txt",n=>{n.success?n.data&&JSON.parse(n.data).true&&e(!0):e(!1)})})}logEmail(e){return new Promise((n,o)=>{r.Minima.cmd("hash 256 "+e.toLowerCase(),e=>{if(e.status)if(e.response.hash){const t=JSON.stringify({email:e.response.hash});r.Minima.file.save(t,"loggedEmail.txt",e=>{e.success?n("Email has been logged..."):o("Failed to log user email.")})}else o("File saving unavailable.")})})}checkForEmailTxtFile(){return new Promise((e,n)=>{r.Minima.file.load("loggedEmail.txt",o=>{o||n("Failed to access file system."),e(!!o.success&&!!o.exists)})})}checkEmail(e){return new Promise((n,o)=>{r.Minima.file.load("loggedEmail.txt",t=>{if(t.success)if(t.exists&&t.data){const i=JSON.parse(t.data);r.Minima.cmd("hash 256 "+e.toLowerCase(),e=>{e.status&&e.response.hash&&(e.response.hash===i.email?n("Welcome back :)"):o("Your IncentiveCash MiniDAPP is linked to a previously used email"))})}else n("File not found.");else o("Failed to find file.")})})}getReferenceId(e){return Object(t.a)(this,void 0,void 0,function*(){const n="https://incentivedb.minima.global/users/me?access_token="+e.access_token;return new Promise((e,o)=>{r.Minima.net.GET(n,n=>{n&&n.result?decodeURIComponent(n.result)?e(decodeURIComponent(n.result)):o("Failed to decode server data!"):o("Server time out!  Please check your internet connection or consult an admin.")})})})}makeSessionStart(){return new Promise(e=>{e(new Date||new Date("foo"))})}makeSessionEnd(e){return new Promise(n=>{let o=(new Date).getTime();n(new Date(o+e.expires)||new Date("foo"))})}updateUserData(e,n){return Object(t.a)(this,void 0,void 0,function*(){let o=yield this.makeSessionStart(),t=yield this.makeSessionEnd(e);return new Promise((i,r)=>{this.getReferenceId(e).then(s=>{let a=JSON.parse(s);const c={email:n,pKey:"",refID:a.data.id,loginData:{access_token:e.access_token,refresh_token:e.refresh_token,expires:e.expires,sessions:{sessionStart:o,sessionEnd:t}}};this._storeService.saveFile(JSON.stringify({uid:c.refID}),"uid.txt").then(()=>{i(c)}).catch(e=>{r(""+e)})}).catch(e=>{r(""+e)})})})}}return e.\u0275fac=function(n){return new(n||e)(s.Ob(a.a),s.Ob(c.a))},e.\u0275prov=s.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"ct+p":function(e,n,o){"use strict";o.r(n),o.d(n,"HomePageModule",function(){return y});var t=o("ofXK"),i=o("TEn/"),r=o("3Pt+"),s=o("tyNb"),a=o("mrSG"),c=o("fXoL"),l=o("ON18"),d=o("rux5");const g=["getReferenceButton"],m=["pageContent"];function u(e,n){if(1&e){const e=c.Lb();c.Kb(0,"div",30),c.Kb(1,"div"),c.kc(2," You have been safely signed off after being inactive for a while. "),c.Jb(),c.Kb(3,"span",31),c.Sb("click",function(){return c.fc(e),c.Ub().hideBanner()}),c.kc(4," \xd7 "),c.Jb(),c.Jb()}}function b(e,n){1&e&&c.Ib(0,"ion-icon",32)}function p(e,n){1&e&&(c.Kb(0,"ion-note",33),c.kc(1,"An email is required."),c.Jb())}function f(e,n){1&e&&(c.Kb(0,"ion-note",33),c.kc(1,"You have entered an invalid email address, please try again."),c.Jb())}function h(e,n){1&e&&c.Ib(0,"ion-icon",32)}function v(e,n){1&e&&(c.Kb(0,"ion-note",33),c.kc(1,"A password is required."),c.Jb())}function _(e,n){1&e&&(c.Kb(0,"ion-row",34),c.Kb(1,"ion-col",35),c.Ib(2,"ion-progress-bar",36),c.Jb(),c.Jb())}const k=function(e,n){return{"has-success":e,"has-error":n}},w=[{path:"",component:(()=>{class e{constructor(e,n,o,t){this._loginService=e,this.formBuilder=n,this.router=o,this._storeService=t,this.loginStatus="",this.kickemoff=!1,this.progressBar=!1,this.checkForKick(),this.initLoginForm()}ionViewWillEnter(){}ionViewWillLeave(){}initLoginForm(){this.loginForm=this.formBuilder.group({uName:["",[r.j.required]],password:["",[r.j.required]]})}onSubmit(){return Object(a.a)(this,void 0,void 0,function*(){this.loginForm.disable(),this.loginStatus="Logging in...",this.progressBar=!0,this.scrollToBottom();const e={email:this.username.value.trim(),password:this.password.value};yield this.login(e).then(n=>Object(a.a)(this,void 0,void 0,function*(){this.loginStatus="Saved token...",yield this._loginService.updateUserData(n,e.email).then(e=>{this.loginStatus="Updated user details!",this._storeService.data.next(e)}).catch(e=>{this.loginStatus=""+e,this.progressBar=!1}),yield this._loginService.checkForEmailTxtFile().then(n=>Object(a.a)(this,void 0,void 0,function*(){n?yield this._loginService.checkEmail(e.email).then(e=>{this.loginStatus=""+e,this.lastAccess(),this.router.navigate(["/welcome"])}).catch(e=>{this.loginStatus=e+", please consult an admin.",this.loginForm.enable(),this.progressBar=!1}):(this.loginStatus="Logging your email...",yield this._loginService.logEmail(e.email).then(e=>{this.loginStatus=""+e,this.lastAccess(),this.router.navigate(["/welcome"])}).catch(e=>{this.loginStatus=e+", please consult an admin.",this.loginForm.enable(),this.progressBar=!1}))})).catch(e=>{this.loginStatus=e+", please consult an admin.",this.loginForm.enable(),this.progressBar=!1})})).catch(e=>{this.loginForm.enable(),this.loginStatus=""+e,this.progressBar=!1})})}checkForKick(){return Object(a.a)(this,void 0,void 0,function*(){const e=yield this._storeService.checkForKick();this.kickemoff=!!e.kickemoff&&e.kickemoff})}login(e){return new Promise((n,o)=>Object(a.a)(this,void 0,void 0,function*(){const t=yield this._loginService.login(e);if(t.ok){const e=yield t.json();n({access_token:e.data.access_token,expires:e.data.expires,refresh_token:e.data.refresh_token})}else{const e=yield t.json();e&&e.errors&&e.errors[0]&&o("Invalid user credentials."===e.errors[0].message?"Invalid username or password.":`${t.status}: ${t.statusText}`)}}))}clearForm(){this.loginForm.reset(),this.formInit()}hideBanner(){this.kickemoff=!1,this._storeService.removeTheirInactivityFileOnLogin()}lastAccess(){localStorage.setItem("isLogged","true");let e=(new Date).getTime();this._storeService.lastAccess.next({milliseconds:e})}formInit(){this.loginForm=this.formBuilder.group({uName:["",r.j.required],password:["",r.j.required]})}get username(){return this.loginForm.get("uName")}get password(){return this.loginForm.get("password")}scrollToBottom(){try{this.pageContent.scrollToBottom(300)}catch(e){console.log(e)}}}return e.\u0275fac=function(n){return new(n||e)(c.Hb(l.a),c.Hb(r.a),c.Hb(s.g),c.Hb(d.a))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-home"]],viewQuery:function(e,n){if(1&e&&(c.nc(g,!0),c.nc(m,!0)),2&e){let e;c.ec(e=c.Tb())&&(n.getReferenceButton=e.first),c.ec(e=c.Tb())&&(n.pageContent=e.first)}},decls:63,vars:22,consts:[[1,"ion-no-border",3,"translucent"],[1,"ion-no-padding"],[1,"title","ion-no-padding","ion-text-center"],["class","signed-off",4,"ngIf"],[3,"scrollEvents","fullscreen"],["pageContent",""],[1,"welcome-container","animate__animated","animate__fadeIn"],[1,"ion-text-center","welcome"],[1,"has"],[1,"blue-ruler"],[1,"m-t7","ion-text-center","welcome-subtitle"],["href","https://incentive.minima.global/#/register","target","_"],[1,"animate__animated","animate__fadeIn","animate__delay-1s",3,"formGroup","ngSubmit","keydown.enter"],["lines","none",1,"ion-no-padding","no-ripple"],["position","stacked"],["clearInput","false","formControlName","uName",3,"ngClass"],["class","input-error-icon","name","alert-circle",4,"ngIf"],["class","input-error-message",4,"ngIf"],["clearInput","false","formControlName","password","type","password",3,"ngClass"],["fill","clear","expand","block","type","submit",1,"sign-up-btn",3,"disabled"],["getReferenceButton",""],[1,"animate__animated","animate__fadeIn","animate__delay-1s"],[1,"forgot","ion-text-center"],["href","https://incentive.minima.global/#/reset","target","_"],[1,"login-status-wrapper",3,"hidden"],[1,"has","animate__animated","animate__pulse","animate__repeat-2"],[1,"login-status","ion-text-center"],["class","has ion-justify-content-center ion-align-items-center",4,"ngIf"],[1,"ion-no-border"],[1,"content"],[1,"signed-off"],[3,"click"],["name","alert-circle",1,"input-error-icon"],[1,"input-error-message"],[1,"has","ion-justify-content-center","ion-align-items-center"],[1,"progress","ion-text-center"],["color","primary","type","indeterminate"]],template:function(e,n){1&e&&(c.Kb(0,"ion-header",0),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-title"),c.Kb(3,"ion-grid",1),c.Kb(4,"ion-row"),c.Kb(5,"ion-col",2),c.kc(6," Incentive Cash "),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.jc(7,u,5,0,"div",3),c.Jb(),c.Kb(8,"ion-content",4,5),c.Kb(10,"ion-grid",6),c.Kb(11,"ion-row"),c.Kb(12,"ion-col",7),c.kc(13," Welcome to the"),c.Ib(14,"br"),c.kc(15," Minima Incentive Program "),c.Jb(),c.Jb(),c.Kb(16,"ion-row",8),c.Kb(17,"ion-col"),c.Ib(18,"div",9),c.Jb(),c.Jb(),c.Kb(19,"ion-row",8),c.Kb(20,"ion-col",10),c.kc(21," If you have already signed up for our"),c.Ib(22,"br"),c.kc(23,"Incentive Program, please sign in using "),c.Ib(24,"br"),c.kc(25," your email & password below. "),c.Ib(26,"br"),c.Ib(27,"br"),c.kc(28," Or click here to "),c.Kb(29,"a",11),c.kc(30,"register"),c.Jb(),c.kc(31," now. "),c.Jb(),c.Jb(),c.Jb(),c.Kb(32,"form",12),c.Sb("ngSubmit",function(){return n.onSubmit()})("keydown.enter",function(){return n.onSubmit()}),c.Kb(33,"ion-list"),c.Kb(34,"ion-item",13),c.Kb(35,"ion-label",14),c.kc(36,"Email"),c.Jb(),c.Kb(37,"ion-input",15),c.jc(38,b,1,0,"ion-icon",16),c.Jb(),c.jc(39,p,2,0,"ion-note",17),c.jc(40,f,2,0,"ion-note",17),c.Jb(),c.Kb(41,"ion-item",13),c.Kb(42,"ion-label",14),c.kc(43,"Password"),c.Jb(),c.Kb(44,"ion-input",18),c.jc(45,h,1,0,"ion-icon",16),c.Jb(),c.jc(46,v,2,0,"ion-note",17),c.Jb(),c.Kb(47,"ion-button",19,20),c.kc(49," Sign in "),c.Jb(),c.Jb(),c.Jb(),c.Kb(50,"ion-grid",21),c.Kb(51,"ion-row",8),c.Kb(52,"ion-col",22),c.Kb(53,"a",23),c.kc(54,"Forgot password?"),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Kb(55,"ion-grid",24),c.Kb(56,"ion-row",25),c.Kb(57,"ion-col",26),c.kc(58),c.Jb(),c.Jb(),c.jc(59,_,3,0,"ion-row",27),c.Jb(),c.Jb(),c.Kb(60,"ion-footer",28),c.Kb(61,"div",29),c.kc(62," \xa9 Copyright 2021 Minima GmbH "),c.Jb(),c.Jb()),2&e&&(c.Zb("translucent",!0),c.xb(7),c.Zb("ngIf",!0===n.kickemoff),c.xb(1),c.Zb("scrollEvents",!0)("fullscreen",!0),c.xb(24),c.Zb("formGroup",n.loginForm),c.xb(5),c.Zb("ngClass",c.cc(16,k,n.username.valid&&(n.username.dirty||n.username.touched),n.username.invalid&&(n.username.dirty||n.username.touched))),c.xb(1),c.Zb("ngIf",n.username.invalid&&n.username.touched),c.xb(1),c.Zb("ngIf",n.loginForm.touched&&n.loginForm.invalid&&0===n.username.value.length),c.xb(1),c.Zb("ngIf",n.username.value.length>0&&n.username.hasError("validEmail")),c.xb(4),c.Zb("ngClass",c.cc(19,k,n.password.valid&&(n.password.dirty||n.password.touched),n.password.invalid&&(n.password.dirty||n.password.touched))),c.xb(1),c.Zb("ngIf",n.password.invalid&&n.password.touched),c.xb(1),c.Zb("ngIf",n.loginForm.touched&&n.loginForm.invalid&&0===n.password.value.length),c.xb(1),c.Zb("disabled",n.loginForm.invalid),c.xb(8),c.Zb("hidden",0===n.loginStatus.length),c.xb(3),c.mc(" ",n.loginStatus," "),c.xb(1),c.Zb("ngIf",n.progressBar))},directives:[i.n,i.z,i.y,i.m,i.w,i.j,t.k,i.k,r.k,r.h,r.c,i.s,i.q,i.r,i.p,i.D,r.g,r.b,t.i,i.d,i.l,i.o,i.t,i.u],styles:["ion-content[_ngcontent-%COMP%]{--padding-top:25px;--padding-start:25px;--padding-end:25px}ion-list[_ngcontent-%COMP%]{background-color:initial;padding:0}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:transparent;--background-color:transparent}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:10px;font-size:20px;color:#aaaabe;font-family:manrope-medium}ion-input[_ngcontent-%COMP%]{font-size:16px;color:#000;border:1px solid #d1d1de;background-color:#fff;padding-left:20px!important}ion-grid.login-status-wrapper[_ngcontent-%COMP%]{margin-top:50px}@media only screen and (max-height:797px){ion-grid.login-status-wrapper[_ngcontent-%COMP%]{margin-top:0}}ion-col.login-status[_ngcontent-%COMP%]{letter-spacing:-.02em;font-family:manrope-regular;padding:0;color:var(--ion-color-primary);font-size:14px}ion-col.welcome[_ngcontent-%COMP%]{font-size:20px}ion-col.welcome[_ngcontent-%COMP%], ion-col.welcome-subtitle[_ngcontent-%COMP%]{font-family:manrope-regular;color:#91919d}ion-col.welcome-subtitle[_ngcontent-%COMP%]{font-size:14px}ion-col.welcome-subtitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#001d33;font-family:manrope-bold}ion-col.welcome-subtitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--ion-color-primary);cursor:pointer}ion-col[_ngcontent-%COMP%]   div.blue-ruler[_ngcontent-%COMP%]{max-width:164px;margin:auto;border-bottom:2px solid var(--ion-color-primary)}@media only screen and (min-width:990px){ion-col[_ngcontent-%COMP%]   div.blue-ruler[_ngcontent-%COMP%]{max-width:376px}ion-content[_ngcontent-%COMP%]{--padding-start:95px;--padding-end:95px}}ion-row.has[_ngcontent-%COMP%]   ion-col.forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:18px;color:#aaaabe;font-family:manrope-medium}ion-row.has[_ngcontent-%COMP%]   ion-col.forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--ion-color-primary);cursor:pointer}ion-row.has[_ngcontent-%COMP%]   ion-col.progress[_ngcontent-%COMP%]{max-width:120px}ion-row.has[_ngcontent-%COMP%]   ion-col.progress[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%]{margin:0;padding:0;--buffer-background:#fafaff}ion-row.has[_ngcontent-%COMP%]   ion-col.failure[_ngcontent-%COMP%]{font-family:manrope-bold;font-size:30px;color:#031b32}ion-footer[_ngcontent-%COMP%]{height:51px;position:relative}ion-footer[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]{text-align:center;width:100%;position:absolute;bottom:20px}.signed-off[_ngcontent-%COMP%]{width:100%;background-color:#f0f0fa;padding:15px;display:flex;justify-content:center;align-items:center;flex-direction:row}.signed-off[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-family:manrope-bold;position:relative;font-size:.825rem;padding-left:25px;color:#031b32;white-space:normal}.signed-off[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:50px;right:5px;cursor:pointer;font-size:1.5rem;color:#001d33}ion-card.kicked-off-card[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:var(--ion-color-secondary);height:48px;box-shadow:none;font-family:manrope-bold;color:#fafaff;border-radius:15px}ion-card.kicked-off-card[_ngcontent-%COMP%]   ion-col#textWrapper[_ngcontent-%COMP%]{text-align:center;padding:10px}ion-card.kicked-off-card[_ngcontent-%COMP%]   ion-col#spanWrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}ion-card.kicked-off-card[_ngcontent-%COMP%]   ion-col#spanWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:manrope-bold;font-size:30px;float:right;position:absolute;right:5px;cursor:pointer;color:#fafaff}.input-error-message[_ngcontent-%COMP%]{font-size:.8rem;color:var(--ion-color-danger)}.input-error-icon[_ngcontent-%COMP%]{color:var(--ion-color-danger);width:20.43px;height:20.43px;position:absolute;right:5px}.has-success[_ngcontent-%COMP%]{border-color:var(--ion-color-success)}.has-error[_ngcontent-%COMP%]{border-color:var(--ion-color-danger)}"]}),e})()}];let x=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(n){return new(n||e)},imports:[[s.j.forChild(w)],s.j]}),e})(),y=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(n){return new(n||e)},imports:[[t.b,r.d,r.i,i.A,x]]}),e})()}}]);