(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0lCN":function(n,t,e){"use strict";e.d(t,"a",function(){return l});var o=e("rnMS"),i=e("rux5"),a=e("tyNb"),r=e("TEn/"),s=e("ofXK"),c=e("fXoL");let l=(()=>{class n{}return n.\u0275mod=c.Gb({type:n}),n.\u0275inj=c.Fb({factory:function(t){return new(t||n)},providers:[{provide:"_storeService",useClass:i.a}],imports:[[s.b,r.y,a.j,o.b.forRoot()]]}),n})()},LLDH:function(n,t,e){"use strict";e.d(t,"a",function(){return m});var o=e("fXoL"),i=e("rux5"),a=e("TEn/"),r=e("ofXK"),s=e("rnMS"),c=e("tyNb");const l=["pollButton"];function d(n,t){1&n&&(o.Lb(0,"span",11),o.nc(1," \u2014 "),o.Kb())}function u(n,t){if(1&n&&(o.Lb(0,"span",11),o.nc(1),o.Kb()),2&n){const n=o.Vb(2);o.yb(1),o.oc(n.$total)}}function g(n,t){if(1&n&&(o.Lb(0,"ion-toolbar",7),o.Lb(1,"ion-grid",8),o.Lb(2,"ion-row"),o.Lb(3,"ion-col",9),o.nc(4," Total Amount: "),o.lc(5,d,2,0,"span",10),o.lc(6,u,2,1,"span",10),o.Kb(),o.Kb(),o.Kb(),o.Kb()),2&n){const n=o.Vb();o.yb(5),o.ac("ngIf",n.$total.equals(0)),o.yb(1),o.ac("ngIf",n.$total.greaterThan(0))}}let m=(()=>{class n{constructor(n){this._storeService=n}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(o.Ib(i.a))},n.\u0275cmp=o.Cb({type:n,selectors:[["custom-footer"]],viewQuery:function(n,t){if(1&n&&o.qc(l,!0),2&n){let n;o.ec(n=o.Ub())&&(t.pollButton=n.first)}},inputs:{$page:"$page",$total:"$total"},decls:12,vars:3,consts:[[1,"ion-no-border","ion-no-padding","ion-text-center"],["class","table-footer ion-no-padding",4,"ngIf"],[1,"activity","ion-no-padding","animate__animated","animate__fadeIn","animate__faster"],["tooltip","See all your claimed rewards","positionV","bottom","routerLink","/rewards","slot","start","routerLinkActive","ftr-toolbar-active",3,"arrow"],["color","medium","src","assets/incentiveCashClaimedRewards.svg"],["tooltip","See all your pending rewards","positionV","bottom","routerLink","/cash","slot","start","routerLinkActive","ftr-toolbar-active",3,"arrow"],["color","medium","src","assets/incentiveCashRewardsPending.svg"],[1,"table-footer","ion-no-padding"],[1,"ion-no-padding","animate__animated"],[1,"ion-no-padding"],["id","total",4,"ngIf"],["id","total"]],template:function(n,t){1&n&&(o.Lb(0,"ion-footer",0),o.lc(1,g,7,2,"ion-toolbar",1),o.Lb(2,"ion-toolbar",2),o.Lb(3,"ion-buttons"),o.Lb(4,"ion-tab-button",3),o.Jb(5,"ion-icon",4),o.Lb(6,"ion-label"),o.nc(7,"Claimed Rewards"),o.Kb(),o.Kb(),o.Lb(8,"ion-tab-button",5),o.Jb(9,"ion-icon",6),o.Lb(10,"ion-label"),o.nc(11,"Rewards Pending"),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb()),2&n&&(o.yb(1),o.ac("ngIf","cash"===t.$page||"rewards"===t.$page),o.yb(3),o.ac("arrow",!0),o.yb(4),o.ac("arrow",!0))},directives:[a.i,r.k,a.x,a.e,a.v,s.a,a.B,c.h,c.i,a.l,a.o,a.j,a.t,a.g],styles:["ion-footer[_ngcontent-%COMP%]   ion-toolbar.table-footer[_ngcontent-%COMP%]{padding-left:27px;padding-right:27px}ion-button.poll-button[_ngcontent-%COMP%]{text-transform:none}@media only screen and (min-width:992px){ion-footer[_ngcontent-%COMP%]   ion-toolbar.table-footer[_ngcontent-%COMP%]{padding-left:110px;padding-right:110px}}span#total[_ngcontent-%COMP%]{color:var(--ion-color-success)}"]}),n})()},ON18:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var o=e("mrSG"),i=e("AytR"),a=e("Kmpd"),r=e("fXoL"),s=e("KNWA"),c=e("rux5");let l=(()=>{class n{constructor(n,t){this._directus=n,this._storeService=t,this.environmentApiURL="",this.environmentApiURL=i.a.api,this.serviceJSPayload()}serviceJSPayload(){this.$payload=this._storeService.tokenId.subscribe(n=>{const t=JSON.stringify(n);try{a.Minima.file.save(t,"tokenid.txt",n=>{if(!n.success)throw new Error("TokenId, ScaleFactor not saved!")})}catch(e){a.Minima.log(e)}})}login(n){return Object(o.a)(this,void 0,void 0,function*(){return localStorage.getItem("kickemoff")&&localStorage.removeItem("kickemoff"),this._directus.post(this.environmentApiURL+"auth/login",n)})}logout(){return Object(o.a)(this,void 0,void 0,function*(){document.getElementById("sign-out-btn").style.opacity="1.0",yield this._storeService.getUserDetailsOnce().then(n=>{const t=n;t.loginData.access_token="",t.loginData.refresh_token="",this._storeService.data.next(t),document.location.reload()})})}firstTime(){return new Promise(n=>{a.Minima.file.load("loggedEmail.txt",t=>{t.success?t.data&&JSON.parse(t.data).true&&n(!0):n(!1)})})}logEmail(n){return new Promise((t,e)=>{a.Minima.cmd("hash 256 "+n.toLowerCase(),n=>{if(n.status)if(n.response.hash){const o=JSON.stringify({email:n.response.hash});a.Minima.file.save(o,"loggedEmail.txt",n=>{n.success?t("Email has been logged..."):e("Failed to log user email.")})}else e("File saving unavailable.")})})}checkForEmailTxtFile(){return new Promise((n,t)=>{a.Minima.file.load("loggedEmail.txt",e=>{e||t("Failed to access file system."),n(!!e.success&&!!e.exists)})})}checkEmail(n){return new Promise((t,e)=>{a.Minima.file.load("loggedEmail.txt",o=>{if(o.success)if(o.exists&&o.data){const i=JSON.parse(o.data);a.Minima.cmd("hash 256 "+n.toLowerCase(),n=>{n.status&&n.response.hash&&(n.response.hash===i.email?t("Welcome back :)"):e("Your IncentiveCash MiniDAPP is linked to a previously used email"))})}else t("File not found.");else e("Failed to find file.")})})}getReferenceId(n){return Object(o.a)(this,void 0,void 0,function*(){const t="https://incentivedb.minima.global/users/me?access_token="+n.access_token;return new Promise((n,e)=>{a.Minima.net.GET(t,t=>{t&&t.result?decodeURIComponent(t.result)?n(decodeURIComponent(t.result)):e("Failed to decode server data!"):e("Server time out!  Please check your internet connection or consult an admin.")})})})}makeSessionStart(){return new Promise(n=>{n(new Date||new Date("foo"))})}makeSessionEnd(n){return new Promise(t=>{let e=(new Date).getTime();t(new Date(e+n.expires)||new Date("foo"))})}updateUserData(n,t){return Object(o.a)(this,void 0,void 0,function*(){let e=yield this.makeSessionStart(),o=yield this.makeSessionEnd(n);return new Promise((i,a)=>{this.getReferenceId(n).then(r=>{let s=JSON.parse(r);const c={email:t,pKey:"",refID:s.data.id,loginData:{access_token:n.access_token,refresh_token:n.refresh_token,expires:n.expires,sessions:{sessionStart:e,sessionEnd:o}}};this._storeService.saveFile(JSON.stringify({uid:c.refID}),"uid.txt").then(()=>{i(c)}).catch(n=>{a(""+n)})}).catch(n=>{a(""+n)})})})}}return n.\u0275fac=function(t){return new(t||n)(r.Pb(s.a),r.Pb(c.a))},n.\u0275prov=r.Eb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},"Toy+":function(n,t,e){"use strict";e.r(t),e.d(t,"FaqsPageModule",function(){return w});var o=e("0lCN"),i=e("ofXK"),a=e("3Pt+"),r=e("TEn/"),s=e("tyNb"),c=e("fXoL"),l=e("rux5"),d=e("ON18"),u=e("rT0V"),g=e("LLDH");function m(n,t){1&n&&c.Jb(0,"ion-icon",13)}function p(n,t){1&n&&c.Jb(0,"ion-icon",14)}function b(n,t){if(1&n){const n=c.Mb();c.Lb(0,"ion-row",7),c.Tb("click",function(){c.gc(n);const e=t.index;return c.Vb().show(e)}),c.Lb(1,"ion-col",8),c.nc(2),c.Kb(),c.Lb(3,"ion-col",9),c.lc(4,m,1,0,"ion-icon",10),c.lc(5,p,1,0,"ion-icon",11),c.Kb(),c.Jb(6,"ion-col",12),c.Kb()}if(2&n){const n=t.$implicit,e=t.index;c.yb(2),c.pc(" ",null==n?null:n.question," "),c.yb(2),c.ac("ngIf",n.isContentHidden),c.yb(1),c.ac("ngIf",!n.isContentHidden),c.yb(1),c.bc("id","content",e,""),c.ac("hidden",n.isContentHidden)("innerHtml",null==n?null:n.content,c.hc)}}const f=[{path:"",component:(()=>{class n{constructor(n,t){this._storeService=n,this._loginService=t}ngOnInit(){this.faq()}ionViewWillEnter(){}signOut(){this._loginService.logout()}faq(){this.questions=[],this.questions.push({question:"What are Claimed Rewards?",content:"Claimed rewards are Minima coins that have been awarded to you for completing various tasks. They are awarded for maintaining a running node, finding and reporting bugs in either our protocol or our official miniDapps and for building a miniDapp. Coins are automatically stored in our vault and will be released at mainnet. You may view your rewards balance at any time through the Incentive Cash MiniDapp.",isContentHidden:!0}),this.questions.push({question:"What are Rewards Pending?",content:"Rewards pending are a list of the coins that will be awarded to you if you continuously run a Minima node on your Android device or computer.",isContentHidden:!0}),this.questions.push({question:"How many Minima coins will I earn?",content:"Running and maintaining your Minima node will be rewarded with one Minima coin per day, collected weekly. Additional rewards are available for finding and reporting bugs if you are part of the Testing Group which is invite-only.",isContentHidden:!0}),this.questions.push({question:"When will I receive my coins?",content:"All coins earned through the Incentive Program will be stored in the Minima vault and will start to be released at mainnet. The Minima mainnet TGE (token generation event) is currently scheduled for Q2 2022.",isContentHidden:!0}),this.questions.push({question:"What do I need to do now?",content:'Now that you have downloaded and installed the Minima app, are running a node, and are signed up to our Incentive Program, all you need to do is maintain your node. The best way to do this is to use the app, make some transactions, create some custom tokens to share with the community. Explore the other miniDapps available from the Storefront. Check in periodically via the Incentive Cash app to ensure that you are online and upto date on your collection days, and that your coin rewards are collecting correctly. If you want to keep up to date with everything Minima and track our progress, please join our Discord Community on <span class="discord"><a href="https://discord.gg/SgvQ6mc" target="_">https://discord.gg/SgvQ6mc</a></span>',isContentHidden:!0})}show(n){this.questions[n].isContentHidden=!0!==this.questions[n].isContentHidden}}return n.\u0275fac=function(t){return new(t||n)(c.Ib(l.a),c.Ib(d.a))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-faqs"]],decls:10,vars:3,consts:[[3,"$toolbarTitle"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"faqs-list","ion-no-padding"],[1,"faq","ion-no-padding","animate__animated","animate__fadeIn"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["size","10"],["id","arrow","size","2"],["name","caret-down-outline","color","primary",4,"ngIf"],["name","caret-up-outline","color","primary",4,"ngIf"],["size","12",1,"content",3,"hidden","id","innerHtml"],["name","caret-down-outline","color","primary"],["name","caret-up-outline","color","primary"]],template:function(n,t){1&n&&(c.Jb(0,"toolbar-header",0),c.Lb(1,"ion-content",1),c.Lb(2,"ion-header",2),c.Lb(3,"ion-toolbar"),c.Lb(4,"ion-title",3),c.nc(5,"Incentive Cash"),c.Kb(),c.Kb(),c.Kb(),c.Lb(6,"ion-list",4),c.Lb(7,"ion-grid",5),c.lc(8,b,7,6,"ion-row",6),c.Kb(),c.Kb(),c.Kb(),c.Jb(9,"custom-footer")),2&n&&(c.ac("$toolbarTitle","FAQs"),c.yb(1),c.ac("fullscreen",!0),c.yb(7),c.ac("ngForOf",t.questions))},directives:[u.a,r.h,r.k,r.x,r.w,r.p,r.j,i.j,g.a,r.t,r.g,i.k,r.l],styles:["ion-list.faqs-list[_ngcontent-%COMP%]{margin-top:12px;background-color:initial;margin-left:27px;margin-right:27px}ion-list.faqs-list[_ngcontent-%COMP%]   ion-grid.pre-header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{margin-bottom:0}ion-list.faqs-list[_ngcontent-%COMP%]   ion-grid.faq[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{cursor:pointer;padding-bottom:15px;padding-top:15px;border-bottom:1px solid #b5b5c7}ion-list.faqs-list[_ngcontent-%COMP%]   ion-grid.faq[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col#arrow[_ngcontent-%COMP%]{text-align:right}ion-list.faqs-list[_ngcontent-%COMP%]   ion-grid.faq[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.content[_ngcontent-%COMP%]{color:#91919d!important}ion-list.faqs-list[_ngcontent-%COMP%]   ion-grid.faq[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.content[_ngcontent-%COMP%]   span.discord[_ngcontent-%COMP%]{color:var(ion-color-primary)}ion-list.faqs-list[_ngcontent-%COMP%]   ion-grid.faq[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.content[_ngcontent-%COMP%]   span.discord[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}@media only screen and (min-width:992px){ion-list.faqs-list[_ngcontent-%COMP%]{margin-left:110px;margin-right:110px}ion-header[_ngcontent-%COMP%]   ion-toolbar.page-header[_ngcontent-%COMP%]{padding-left:110px;padding-right:110px}}"]}),n})()}];let h=(()=>{class n{}return n.\u0275mod=c.Gb({type:n}),n.\u0275inj=c.Fb({factory:function(t){return new(t||n)},imports:[[s.j.forChild(f)],s.j]}),n})(),w=(()=>{class n{}return n.\u0275mod=c.Gb({type:n}),n.\u0275inj=c.Fb({factory:function(t){return new(t||n)},imports:[[i.b,a.d,r.y,h,o.a]]}),n})()}}]);