(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"0lCN":function(o,n,t){"use strict";t.d(n,"a",function(){return c});var e=t("rux5"),i=t("tyNb"),r=t("TEn/"),s=t("ofXK"),a=t("fXoL");let c=(()=>{class o{}return o.\u0275mod=a.Fb({type:o}),o.\u0275inj=a.Eb({factory:function(n){return new(n||o)},providers:[{provide:"_storeService",useClass:e.a}],imports:[[s.b,r.A,i.j]]}),o})()},LLDH:function(o,n,t){"use strict";t.d(n,"a",function(){return g});var e=t("fXoL"),i=t("rux5"),r=t("TEn/"),s=t("ofXK"),a=t("tyNb");const c=["pollButton"];function l(o,n){1&o&&(e.Kb(0,"span",13),e.kc(1," \u2014 "),e.Jb())}function d(o,n){if(1&o&&(e.Kb(0,"span",13),e.kc(1),e.Jb()),2&o){const o=e.Ub(2);e.xb(1),e.lc(o.$total)}}function p(o,n){if(1&o&&(e.Kb(0,"ion-toolbar",9),e.Kb(1,"ion-grid",10),e.Kb(2,"ion-row"),e.Kb(3,"ion-col",11),e.kc(4," Total Amount: "),e.jc(5,l,2,0,"span",12),e.jc(6,d,2,1,"span",12),e.Jb(),e.Jb(),e.Jb(),e.Jb()),2&o){const o=e.Ub();e.xb(5),e.Zb("ngIf",o.$total.equals(0)),e.xb(1),e.Zb("ngIf",o.$total.greaterThan(0))}}let g=(()=>{class o{constructor(o){this._storeService=o}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)(e.Hb(i.a))},o.\u0275cmp=e.Bb({type:o,selectors:[["custom-footer"]],viewQuery:function(o,n){if(1&o&&e.nc(c,!0),2&o){let o;e.ec(o=e.Tb())&&(n.pollButton=o.first)}},inputs:{$page:"$page",$total:"$total"},decls:16,vars:1,consts:[[1,"ion-no-border","ion-no-padding","ion-text-center"],["class","table-footer ion-no-padding",4,"ngIf"],[1,"activity","ion-no-padding","animate__animated","animate__fadeIn","animate__faster"],["routerLink","/welcome","slot","start","routerLinkActive","ftr-toolbar-active"],["color","medium","src","assets/incentiveCashInfo.svg"],["routerLink","/rewards","slot","start","routerLinkActive","ftr-toolbar-active"],["color","medium","src","assets/incentiveCashClaimedRewards.svg"],["routerLink","/cash","slot","start","routerLinkActive","ftr-toolbar-active"],["color","medium","src","assets/incentiveCashRewardsPending.svg"],[1,"table-footer","ion-no-padding"],[1,"ion-no-padding","animate__animated"],[1,"ion-no-padding"],["id","total",4,"ngIf"],["id","total"]],template:function(o,n){1&o&&(e.Kb(0,"ion-footer",0),e.jc(1,p,7,2,"ion-toolbar",1),e.Kb(2,"ion-toolbar",2),e.Kb(3,"ion-buttons"),e.Kb(4,"ion-tab-button",3),e.Ib(5,"ion-icon",4),e.Kb(6,"ion-label"),e.kc(7,"Info"),e.Jb(),e.Jb(),e.Kb(8,"ion-tab-button",5),e.Ib(9,"ion-icon",6),e.Kb(10,"ion-label"),e.kc(11,"Claimed"),e.Jb(),e.Jb(),e.Kb(12,"ion-tab-button",7),e.Ib(13,"ion-icon",8),e.Kb(14,"ion-label"),e.kc(15,"Pending"),e.Jb(),e.Jb(),e.Jb(),e.Jb(),e.Jb()),2&o&&(e.xb(1),e.Zb("ngIf","cash"===n.$page||"rewards"===n.$page))},directives:[r.l,s.k,r.z,r.e,r.x,r.C,a.h,a.i,r.o,r.r,r.m,r.w,r.j],styles:["ion-footer[_ngcontent-%COMP%]   ion-toolbar.table-footer[_ngcontent-%COMP%]{padding-left:27px;padding-right:27px}ion-button.poll-button[_ngcontent-%COMP%]{text-transform:none}@media only screen and (min-width:992px){ion-footer[_ngcontent-%COMP%]   ion-toolbar.table-footer[_ngcontent-%COMP%]{padding-left:110px;padding-right:110px}}span#total[_ngcontent-%COMP%]{color:var(--ion-color-success)}"]}),o})()},ON18:function(o,n,t){"use strict";t.d(n,"a",function(){return l});var e=t("mrSG"),i=t("AytR"),r=t("Kmpd"),s=t("fXoL"),a=t("KNWA"),c=t("rux5");let l=(()=>{class o{constructor(o,n){this._directus=o,this._storeService=n,this.environmentApiURL="",this.environmentApiURL=i.a.api,this.serviceJSPayload()}serviceJSPayload(){this.$payload=this._storeService.tokenId.subscribe(o=>{const n=JSON.stringify(o);try{r.Minima.file.save(n,"tokenid.txt",o=>{if(!o.success)throw new Error("TokenId, ScaleFactor not saved!")})}catch(t){r.Minima.log(t)}})}login(o){return Object(e.a)(this,void 0,void 0,function*(){return localStorage.getItem("kickemoff")&&localStorage.removeItem("kickemoff"),this._directus.post(this.environmentApiURL+"auth/login",o)})}logout(){return Object(e.a)(this,void 0,void 0,function*(){document.getElementById("sign-out-btn").style.opacity="1.0",yield this._storeService.getUserDetailsOnce().then(o=>{const n=o;n.loginData.access_token="",n.loginData.refresh_token="",this._storeService.data.next(n),document.location.reload()})})}firstTime(){return new Promise(o=>{r.Minima.file.load("loggedEmail.txt",n=>{n.success?n.data&&JSON.parse(n.data).true&&o(!0):o(!1)})})}logEmail(o){return new Promise((n,t)=>{r.Minima.cmd("hash 256 "+o.toLowerCase(),o=>{if(o.status)if(o.response.hash){const e=JSON.stringify({email:o.response.hash});r.Minima.file.save(e,"loggedEmail.txt",o=>{o.success?n("Email has been logged..."):t("Failed to log user email.")})}else t("File saving unavailable.")})})}checkForEmailTxtFile(){return new Promise((o,n)=>{r.Minima.file.load("loggedEmail.txt",t=>{t||n("Failed to access file system."),o(!!t.success&&!!t.exists)})})}checkEmail(o){return new Promise((n,t)=>{r.Minima.file.load("loggedEmail.txt",e=>{if(e.success)if(e.exists&&e.data){const i=JSON.parse(e.data);r.Minima.cmd("hash 256 "+o.toLowerCase(),o=>{o.status&&o.response.hash&&(o.response.hash===i.email?n("Welcome back :)"):t("Your IncentiveCash MiniDAPP is linked to a previously used email"))})}else n("File not found.");else t("Failed to find file.")})})}getReferenceId(o){return Object(e.a)(this,void 0,void 0,function*(){const n="https://incentivedb.minima.global/users/me?access_token="+o.access_token;return new Promise((o,t)=>{r.Minima.net.GET(n,n=>{n&&n.result?decodeURIComponent(n.result)?o(decodeURIComponent(n.result)):t("Failed to decode server data!"):t("Server time out!  Please check your internet connection or consult an admin.")})})})}makeSessionStart(){return new Promise(o=>{o(new Date||new Date("foo"))})}makeSessionEnd(o){return new Promise(n=>{let t=(new Date).getTime();n(new Date(t+o.expires)||new Date("foo"))})}updateUserData(o,n){return Object(e.a)(this,void 0,void 0,function*(){let t=yield this.makeSessionStart(),e=yield this.makeSessionEnd(o);return new Promise((i,r)=>{this.getReferenceId(o).then(s=>{let a=JSON.parse(s);const c={email:n,pKey:"",refID:a.data.id,loginData:{access_token:o.access_token,refresh_token:o.refresh_token,expires:o.expires,sessions:{sessionStart:t,sessionEnd:e}}};this._storeService.saveFile(JSON.stringify({uid:c.refID}),"uid.txt").then(()=>{i(c)}).catch(o=>{r(""+o)})}).catch(o=>{r(""+o)})})})}}return o.\u0275fac=function(n){return new(n||o)(s.Ob(a.a),s.Ob(c.a))},o.\u0275prov=s.Db({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},k6Cy:function(o,n,t){"use strict";t.r(n),t.d(n,"PasswordPageModule",function(){return F});var e=t("0lCN"),i=t("ofXK"),r=t("3Pt+"),s=t("TEn/"),a=t("tyNb"),c=t("mrSG"),l=t("fXoL"),d=t("rux5"),p=t("ON18"),g=t("KNWA"),b=t("rT0V"),u=t("LLDH");function f(o,n){1&o&&l.Ib(0,"ion-icon",19)}function m(o,n){1&o&&(l.Kb(0,"div"),l.kc(1," An old password is required. "),l.Jb())}function w(o,n){if(1&o&&(l.Kb(0,"ion-row",20),l.Ib(1,"ion-col",21),l.Kb(2,"ion-col"),l.jc(3,m,2,0,"div",22),l.Jb(),l.Jb()),2&o){const o=l.Ub();l.xb(3),l.Zb("ngIf",null==o.oldpassword.errors?null:o.oldpassword.errors.required)}}function h(o,n){1&o&&(l.Kb(0,"ion-row",20),l.Ib(1,"ion-col",7),l.Kb(2,"ion-col"),l.kc(3," Your old password is invalid. Please try again, or request a new one "),l.Kb(4,"a",23),l.kc(5,"here."),l.Jb(),l.Jb(),l.Jb())}function C(o,n){1&o&&l.Ib(0,"ion-icon",19)}function _(o,n){1&o&&(l.Kb(0,"div"),l.kc(1," This field is required. "),l.Jb())}function P(o,n){if(1&o&&(l.Kb(0,"ion-row",20),l.Ib(1,"ion-col",7),l.Kb(2,"ion-col"),l.jc(3,_,2,0,"div",22),l.Kb(4,"div",24),l.kc(5," Use 8 or more characters with a mix of upper and lowercase letters, numbers and special characters. "),l.Jb(),l.Jb(),l.Jb()),2&o){const o=l.Ub();l.xb(3),l.Zb("ngIf",null==o.newpassword.errors?null:o.newpassword.errors.required)}}function O(o,n){1&o&&l.Ib(0,"ion-icon",19)}function v(o,n){1&o&&(l.Kb(0,"div"),l.kc(1," This field is required. "),l.Jb())}function M(o,n){1&o&&(l.Kb(0,"div"),l.kc(1," Your passwords do not match. "),l.Jb())}function x(o,n){if(1&o&&(l.Kb(0,"ion-row",20),l.Ib(1,"ion-col",21),l.Kb(2,"ion-col"),l.jc(3,v,2,0,"div",22),l.jc(4,M,2,0,"div",22),l.Jb(),l.Jb()),2&o){const o=l.Ub();l.xb(3),l.Zb("ngIf",null==o.retypepassword.errors?null:o.retypepassword.errors.required),l.xb(1),l.Zb("ngIf",null==o.passwordChangeForm.errors?null:o.passwordChangeForm.errors.mismatch)}}function y(o,n){if(1&o&&(l.Kb(0,"ion-row",25),l.Ib(1,"ion-col",21),l.Kb(2,"ion-col"),l.kc(3),l.Jb(),l.Jb()),2&o){const o=l.Ub();l.xb(3),l.mc(" ",o.postResponse," ")}}const k=function(o,n){return{"has-success":o,"has-error":n}},J=o=>{const n=o.get("newpassword"),t=o.get("retypepassword");return n&&t&&n.value!==t.value?{mismatch:!0}:null},K=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%\xa3^&*()--+={}\[\]|\\:;"'<>,.?/_\u20b9])[a-zA-Z0-9~`!@#$%\xa3^&*()--+={}\[\]|\\:;"'<>,.?/_\u20b9]{8,}$/,I=[{path:"",component:(()=>{class o{constructor(o,n,t,e){this._storeService=o,this.formBuilder=n,this._loginService=t,this._directus=e,this.postStatus="Update",this.postResponse="",this.oldPasswordStatusFailed=!1,this.initForm()}initForm(){this.passwordChangeForm=this.formBuilder.group({oldpassword:["",[r.j.required,r.j.minLength(8)]],newpassword:["",[r.j.required,r.j.pattern(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%\xa3^&*()--+={}\[\]|\\:;"'<>,.?/_\u20b9])[a-zA-Z0-9~`!@#$%\xa3^&*()--+={}\[\]|\\:;"'<>,.?/_\u20b9]{8,}$/),o=>K.test(o.value)?null:{invalidPassword:!0}]],retypepassword:["",[]]}),this.passwordChangeForm.setValidators(J)}ionViewWillEnter(){}signOut(){this._loginService.logout()}checkOlderPassword(o){return new Promise((n,t)=>{this._loginService.login(o).then(o=>{o.ok?n("Good.  Almost there..."):t("Invalid previous password, please try again.")})})}updatePassword(o,n,t){return new Promise((e,i)=>{this._directus.updatePassword(o,n,t).then(o=>(o.ok||i("Password update failed.  Please contact an admin, or try again later."),o.json())).then(o=>{(null==o?void 0:o.errors)?i(`Password update failed, ${o.errors[0].message} `):o&&"OK"===o.result?e("Password changed!"):i("Password update failed.  Please contact an admin, or try again later.")})})}onSubmit(){this.postStatus="Updating...",this.oldPasswordStatusFailed=!1,this.passwordChangeForm.disable(),this._storeService.getUserDetailsOnce().then(o=>Object(c.a)(this,void 0,void 0,function*(){const n={email:o.email,password:this.oldpassword.value};yield this.checkOlderPassword(n).then(n=>{this.postResponse=""+n,n&&this.updatePassword(o.refID,this.newpassword.value,o.loginData.access_token).then(o=>{this.passwordChangeForm.enable(),this.postResponse=""+o,this.postStatus="Update",this.passwordChangeForm.reset(),this.initForm()}).catch(o=>{this.passwordChangeForm.enable(),this.postResponse=""+o,this.postStatus="Update"})}).catch(o=>{this.passwordChangeForm.enable(),this.oldPasswordStatusFailed=!0,this.postResponse=""+o,this.postStatus="Update"})}))}get oldpassword(){return this.passwordChangeForm.get("oldpassword")}get newpassword(){return this.passwordChangeForm.get("newpassword")}get retypepassword(){return this.passwordChangeForm.get("retypepassword")}}return o.\u0275fac=function(n){return new(n||o)(l.Hb(d.a),l.Hb(r.a),l.Hb(p.a),l.Hb(g.a))},o.\u0275cmp=l.Bb({type:o,selectors:[["app-password"]],decls:45,vars:25,consts:[[3,"$toolbarTitle"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"profile-list","ion-no-padding"],[3,"formGroup","ngSubmit"],[1,"profile","ion-no-padding","animate__animated","animate__fadeIn"],["size","2",1,"ion-no-padding","ion-text-left"],["src","assets/incentiveCashPassword.svg",1,"profile-icons"],[1,"information"],["lines","none",1,"ion-no-padding","ion-no-margin","no-ripple"],["position","stacked"],["formControlName","oldpassword","type","password",3,"ngClass"],["slot","end","class","input-error-icon","name","alert-circle",4,"ngIf"],["class","invalid",4,"ngIf"],["clearInput","false","formControlName","newpassword","type","password",3,"ngClass"],["clearInput","false","formControlName","retypepassword","type","password",3,"ngClass"],["type","submit","fill","clear",3,"disabled"],["class","post-status",4,"ngIf"],["slot","end","name","alert-circle",1,"input-error-icon"],[1,"invalid"],["size","2"],[4,"ngIf"],["target","_","href","https://incentive.minima.global/#/reset"],["id","password-format-text"],[1,"post-status"]],template:function(o,n){1&o&&(l.Ib(0,"toolbar-header",0),l.Kb(1,"ion-content",1),l.Kb(2,"ion-header",2),l.Kb(3,"ion-toolbar"),l.Kb(4,"ion-title",3),l.kc(5,"Incentive Cash"),l.Jb(),l.Jb(),l.Jb(),l.Kb(6,"ion-list",4),l.Kb(7,"form",5),l.Sb("ngSubmit",function(){return n.onSubmit()}),l.Kb(8,"ion-grid",6),l.Kb(9,"ion-row"),l.Kb(10,"ion-col",7),l.Ib(11,"ion-icon",8),l.Jb(),l.Kb(12,"ion-col",9),l.Kb(13,"ion-item",10),l.Kb(14,"ion-label",11),l.kc(15,"Old password:"),l.Jb(),l.Kb(16,"ion-input",12),l.jc(17,f,1,0,"ion-icon",13),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.jc(18,w,4,1,"ion-row",14),l.jc(19,h,6,0,"ion-row",14),l.Kb(20,"ion-row"),l.Ib(21,"ion-col",7),l.Kb(22,"ion-col",9),l.Kb(23,"ion-item",10),l.Kb(24,"ion-label",11),l.kc(25,"New password:"),l.Jb(),l.Kb(26,"ion-input",15),l.jc(27,C,1,0,"ion-icon",13),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.jc(28,P,6,1,"ion-row",14),l.Kb(29,"ion-row"),l.Ib(30,"ion-col",7),l.Kb(31,"ion-col",9),l.Kb(32,"ion-item",10),l.Kb(33,"ion-label",11),l.kc(34,"Confirm new password:"),l.Jb(),l.Kb(35,"ion-input",16),l.jc(36,O,1,0,"ion-icon",13),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.jc(37,x,5,2,"ion-row",14),l.Kb(38,"ion-row"),l.Ib(39,"ion-col",7),l.Kb(40,"ion-col",9),l.Kb(41,"ion-button",17),l.kc(42),l.Jb(),l.Jb(),l.Jb(),l.jc(43,y,4,1,"ion-row",18),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Ib(44,"custom-footer")),2&o&&(l.Zb("$toolbarTitle","Change your password"),l.xb(1),l.Zb("fullscreen",!0),l.xb(6),l.Zb("formGroup",n.passwordChangeForm),l.xb(9),l.Zb("ngClass",l.cc(16,k,n.oldpassword.valid&&(n.oldpassword.dirty||n.oldpassword.touched),n.oldpassword.invalid&&(n.oldpassword.dirty||n.oldpassword.touched))),l.xb(1),l.Zb("ngIf",n.oldpassword.invalid&&(n.oldpassword.dirty||n.oldpassword.touched)),l.xb(1),l.Zb("ngIf",n.oldpassword.invalid&&(n.oldpassword.dirty||n.oldpassword.touched)),l.xb(1),l.Zb("ngIf",n.oldPasswordStatusFailed),l.xb(7),l.Zb("ngClass",l.cc(19,k,n.newpassword.valid&&(n.newpassword.dirty||n.newpassword.touched),n.newpassword.invalid&&(n.newpassword.dirty||n.newpassword.touched))),l.xb(1),l.Zb("ngIf",n.newpassword.invalid&&(n.newpassword.dirty||n.newpassword.touched)),l.xb(1),l.Zb("ngIf",n.newpassword.invalid&&(n.newpassword.dirty||n.newpassword.touched)),l.xb(7),l.Zb("ngClass",l.cc(22,k,!(null!=n.passwordChangeForm.errors&&n.passwordChangeForm.errors.mismatch)&&(n.retypepassword.dirty||n.retypepassword.touched),(null==n.passwordChangeForm.errors?null:n.passwordChangeForm.errors.mismatch)&&(n.retypepassword.dirty||n.retypepassword.touched))),l.xb(1),l.Zb("ngIf",(n.retypepassword.invalid||(null==n.passwordChangeForm.errors?null:n.passwordChangeForm.errors.mismatch))&&(n.retypepassword.dirty||n.retypepassword.touched)),l.xb(1),l.Zb("ngIf",(n.retypepassword.invalid||(null==n.passwordChangeForm.errors?null:n.passwordChangeForm.errors.mismatch))&&(n.retypepassword.dirty||n.retypepassword.touched)),l.xb(4),l.Zb("disabled",n.passwordChangeForm.invalid),l.xb(1),l.mc(" ",n.postStatus," "),l.xb(1),l.Zb("ngIf",n.postResponse.length>0))},directives:[b.a,s.k,s.n,s.z,s.y,s.s,r.k,r.h,r.c,s.m,s.w,s.j,s.o,s.q,s.r,s.p,s.D,r.g,r.b,i.i,i.k,s.d,u.a],styles:["ion-list.profile-list[_ngcontent-%COMP%]{margin-top:12px;background-color:initial;margin-left:27px;margin-right:27px}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.pre-header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{margin-bottom:0}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:first-child{margin-top:21px}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon.profile-icons[_ngcontent-%COMP%]{width:36px;height:36px}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon#invalid-icon[_ngcontent-%COMP%]{font-size:1.2rem;position:absolute;z-index:1;right:5px}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row.invalid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:5px;font-size:14px;color:var(--ion-color-danger)}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row.invalid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   div#password-format-text[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);opacity:.7}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row.post-status[_ngcontent-%COMP%]{margin-top:15px}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row.post-status[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{letter-spacing:-.02em;font-family:manrope-regular;padding:0;color:var(--ion-color-primary);font-size:14px}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row.post-status[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{transform:scale(.7)}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row.post-status[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#b5f0c0}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.information[_ngcontent-%COMP%]{background:transparent!important}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.information[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{outline:none;--background:none}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.information[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{background:#fafaff;background-color:#fafaff!important;font-family:manrope-medium!important;color:#031b32!important;padding:0;padding-bottom:10px!important;font-size:1.5rem!important}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.information[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border-radius:5px;border:1px solid #aaaabe;width:100%;height:48px;background:#fff;font-size:1rem;padding-left:10px!important;letter-spacing:.2em}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.information[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-danger)}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.information[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:15px 0 0;width:88px;height:35px;font-size:12px;border-radius:5px;color:#fff;background-color:var(--ion-color-primary);text-transform:none}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.information[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover{opacity:.8;color:#f0f0fa}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.information[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:5px}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.information[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border-radius:5px;border:1px solid #aaaabe;width:100%;height:48px;background:#fff;font-size:16px;padding:10px;letter-spacing:.2em;white-space:normal;overflow:hidden;text-overflow:ellipsis}ion-list.profile-list[_ngcontent-%COMP%]   ion-grid.profile[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.information[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#031b32;color:#f0f0fa}@media only screen and (min-width:992px){ion-list.profile-list[_ngcontent-%COMP%]{margin-left:110px;margin-right:110px}}.input-error-message[_ngcontent-%COMP%]{font-size:.8rem;color:var(--ion-color-danger)}.input-error-icon[_ngcontent-%COMP%]{color:var(--ion-color-danger);width:20.43px;height:20.43px;position:absolute;right:5px}.has-success[_ngcontent-%COMP%]{border-color:var(--ion-color-success)!important}.has-error[_ngcontent-%COMP%]{border-color:var(--ion-color-danger)!important}"]}),o})()}];let S=(()=>{class o{}return o.\u0275mod=l.Fb({type:o}),o.\u0275inj=l.Eb({factory:function(n){return new(n||o)},imports:[[a.j.forChild(I)],a.j]}),o})(),F=(()=>{class o{}return o.\u0275mod=l.Fb({type:o}),o.\u0275inj=l.Eb({factory:function(n){return new(n||o)},imports:[[i.b,r.d,s.A,r.i,S,e.a]]}),o})()}}]);