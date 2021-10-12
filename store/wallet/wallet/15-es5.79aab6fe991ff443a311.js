function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(l,o.key,o)}}function _createClass(l,n,t){return n&&_defineProperties(l.prototype,n),t&&_defineProperties(l,t),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6gQK":function(l,n,t){"use strict";t.r(n);var o=t("8Y7J"),u=t("TOdT"),i=t("J9yG"),e=t("aaBP"),c=function(){function l(n,t,o,u){_classCallCheck(this,l),this.route=n,this._minimaApiService=t,this.animationCtrl=o,this.myTools=u,this.expand=!1,this.urlTokenid=this.route.snapshot.paramMap.get("id")?this.route.snapshot.paramMap.get("id"):"",this.prompt=""}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){var l=this;this.urlTokenid&&this.urlTokenid.length>0?this.$subscription=this._minimaApiService.$balance.subscribe((function(n){n?l.$token=n.filter((function(n){return n.tokenid===l.urlTokenid})):console.log("Your tokens have not been found."),l.$token.length>0&&l.$token[0].tokenid&&"0x00"===l.$token[0].tokenid&&(l.$token[0].description="Minima's Official Token.")})):this.prompt="Token ID not found, please try again later",this.$subscription.closed?this.prompt="Token subscription failed.":(this.prompt="",0===this.$token.length&&(this.prompt="Token not found."))}},{key:"ionViewWillLeave",value:function(){this.$subscription&&this.$subscription.unsubscribe()}},{key:"validateProof",value:function(l){var n=this;this._minimaApiService.validateTokenID(l).then((function(l){!0===l.response.valid?n.myTools.presentToast("This proof is valid.","success","bottom"):n.myTools.presentToast("Proof mismatch - not a valid proof","danger","bottom")}))}},{key:"createIcon",value:function(l){return this.avatar="https://www.gravatar.com/avatar/"+e.hash(l)+"?d=identicon"}},{key:"copy",value:function(l,n){document.getElementById(n).innerHTML="Copied",document.getElementById(n).style.color="var(--ion-color-success",this.myTools.copy(l),setTimeout((function(){document.getElementById(n)&&(document.getElementById(n).innerHTML="Copy",document.getElementById(n).style.color="var(--ion-color-primary")}),2e3)}},{key:"expandImage",value:function(){this.expand=!this.expand}}]),l}(),a=function l(){_classCallCheck(this,l)},r=t("pMnS"),p=t("MKJQ"),s=t("sZkV"),b=t("SVse"),m=t("iInd"),x=t("6jz6"),f=t("LmEr"),d=o.nb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:hover{background:0 0;--background-hover:none}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.description[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:1em;font-family:manrope-semibold}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:.5;white-space:normal;font-size:1rem;-moz-user-select:text;user-select:text}.item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]{background-color:transparent!important}ion-label#name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:manrope-bold;font-size:1rem}ion-list[_ngcontent-%COMP%]{background:0 0}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-end:0;color:var(--ion-color-tertiary);border:1px solid var(--ion-color-item-border);--border-color:var(--ion-color-item-border);padding-right:10px;padding-left:10px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:27px;height:27px;display:none;color:var(--ion-color-primary);position:absolute}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]:hover   img.custom-icon[_ngcontent-%COMP%]{opacity:.5}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%]{display:block}.title[_ngcontent-%COMP%]{font-family:manrope-semibold;font-size:1rem;float:left;text-overflow:ellipsis;max-width:inherit;white-space:normal;word-wrap:normal}.nft[_ngcontent-%COMP%]{color:var(--ion-color-secondary);font-family:manrope-semibold}.value[_ngcontent-%COMP%]{-moz-user-select:text;user-select:text;color:var(--ion-color-tertiary);opacity:.7;font-size:1rem;font-family:manrope-regular;text-align:right;white-space:nowrap;text-overflow:ellipsis;max-width:inherit;overflow:hidden;margin:0;padding:0}.value[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:1rem;opacity:.8;-moz-user-select:text;user-select:text}.copy[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer;font-size:.8rem}.active[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-item.nft-large[_ngcontent-%COMP%]{padding:15px}ion-item.nft-large[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center}ion-item.nft-large[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}ion-item.nft-large[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{display:none;position:absolute;font-size:32px;color:var(--ion-color-primary)}ion-item.nft-large[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%]{display:block}ion-item.nft-large[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.5}ion-button.validate-btn[_ngcontent-%COMP%]{text-transform:none;color:var(--ion-color-tertiary)}.center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.prompt[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);padding:5px}"]],data:{}});function g(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,1,"div",[["class","center prompt"]],null,null,null,null,null)),(l()(),o.Jb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.component.prompt)}))}function k(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","custom-icon-big"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.component.createIcon(null==n.parent.parent.context.$implicit?null:n.parent.parent.context.$implicit.tokenid))}))}function h(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","custom-icon-big"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.component.createIcon(null==n.parent.parent.context.$implicit?null:n.parent.parent.context.$implicit.tokenid))}))}function $(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","custom-icon-big"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,null==n.parent.parent.context.$implicit?null:n.parent.parent.context.$implicit.icon)}))}function v(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,0,"img",[["alt","minima"],["class","custom-icon-big"],["src","assets/minimaIcon.svg"]],null,null,null,null,null))],null,null)}function M(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,12,"ion-item",[["class","ion-no-padding ion-no-margin nft-large"]],null,null,null,p.R,p.l)),o.ob(1,49152,null,0,s.H,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,10,"div",[["class","avatarWrapper"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.expandImage()&&o),o}),null,null)),(l()(),o.pb(3,0,null,null,1,"ion-icon",[["name","resize-outline"]],null,null,null,p.M,p.j)),o.ob(4,49152,null,0,s.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.eb(16777216,null,null,1,null,k)),o.ob(6,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,null,1,null,h)),o.ob(8,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,null,1,null,$)),o.ob(10,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,null,1,null,v)),o.ob(12,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,4,0,"resize-outline"),l(n,6,0,"0x00"!==(null==n.parent.context.$implicit?null:n.parent.context.$implicit.tokenid)&&0===(null==n.parent.context.$implicit?null:n.parent.context.$implicit.icon.length)),l(n,8,0,"0x00"!==(null==n.parent.context.$implicit?null:n.parent.context.$implicit.tokenid)&&(null==n.parent.context.$implicit?null:n.parent.context.$implicit.icon.length)>0&&"avatar"===(null==n.parent.context.$implicit?null:n.parent.context.$implicit.icon)),l(n,10,0,"0x00"!==(null==n.parent.context.$implicit?null:n.parent.context.$implicit.tokenid)&&(null==n.parent.context.$implicit?null:n.parent.context.$implicit.icon.length)>0&&"avatar"!==(null==n.parent.context.$implicit?null:n.parent.context.$implicit.icon)),l(n,12,0,"0x00"===(null==n.parent.context.$implicit?null:n.parent.context.$implicit.tokenid))}),null)}function C(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","custom-icon"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.component.createIcon(null==n.parent.parent.context.$implicit?null:n.parent.parent.context.$implicit.tokenid))}))}function y(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","custom-icon"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,null==n.parent.parent.context.$implicit?null:n.parent.parent.context.$implicit.icon)}))}function z(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,0,"img",[["alt","minima"],["class","custom-icon"],["src","assets/minimaIcon.svg"]],null,null,null,null,null))],null,null)}function I(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,15,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.R,p.l)),o.ob(1,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(2,0,null,0,9,"ion-avatar",[["slot","start"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.expandImage()&&o),o}),p.E,p.b)),o.ob(3,49152,[["avatarWrapper",4]],0,s.g,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,1,"ion-icon",[["name","expand-outline"]],null,null,null,p.M,p.j)),o.ob(5,49152,null,0,s.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.eb(16777216,null,0,1,null,C)),o.ob(7,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,y)),o.ob(9,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,z)),o.ob(11,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(12,0,null,0,3,"ion-label",[["id","name"]],null,null,null,p.S,p.p)),o.ob(13,49152,null,0,s.N,[o.h,o.k,o.x],null,null),(l()(),o.pb(14,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Jb(15,null,["",""]))],(function(l,n){l(n,1,0,"none"),l(n,5,0,"expand-outline"),l(n,7,0,"0x00"!==(null==n.parent.context.$implicit?null:n.parent.context.$implicit.tokenid)&&0==(null==n.parent.context.$implicit?null:n.parent.context.$implicit.icon.length)),l(n,9,0,"0x00"!==(null==n.parent.context.$implicit?null:n.parent.context.$implicit.tokenid)&&(null==n.parent.context.$implicit?null:n.parent.context.$implicit.icon.length)>0),l(n,11,0,"0x00"===(null==n.parent.context.$implicit?null:n.parent.context.$implicit.tokenid))}),(function(l,n){l(n,15,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.token)}))}function P(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,7,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.R,p.l)),o.ob(1,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(2,0,null,0,5,"ion-label",[["class","description"]],null,null,null,p.S,p.p)),o.ob(3,49152,null,0,s.N,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),o.Jb(-1,null,[" Token Description "])),(l()(),o.pb(6,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(7,null,["",""]))],(function(l,n){l(n,1,0,"none")}),(function(l,n){l(n,7,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.description)}))}function _(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,8,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.R,p.l)),o.ob(1,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(2,0,null,0,2,"ion-col",[["class","title"],["size","3"],["sizeXs","4"]],null,null,null,p.H,p.e)),o.ob(3,49152,null,0,s.t,[o.h,o.k,o.x],{size:[0,"size"],sizeXs:[1,"sizeXs"]},null),(l()(),o.Jb(-1,0,[" Total Supply (Minima) "])),(l()(),o.pb(5,0,null,0,3,"ion-col",[["class","minima-numeric value"]],null,null,null,p.H,p.e)),o.ob(6,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(7,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(8,null,[" "," "]))],(function(l,n){l(n,1,0,"none"),l(n,3,0,"3","4")}),(function(l,n){l(n,8,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.totalamount)}))}function J(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,8,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.R,p.l)),o.ob(1,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(2,0,null,0,2,"ion-col",[["class","title"]],null,null,null,p.H,p.e)),o.ob(3,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,[" Scale "])),(l()(),o.pb(5,0,null,0,3,"ion-col",[["class","minima-numeric value"]],null,null,null,p.H,p.e)),o.ob(6,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(7,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(8,null,[" "," "]))],(function(l,n){l(n,1,0,"none")}),(function(l,n){l(n,8,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.scale)}))}function O(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,8,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.R,p.l)),o.ob(1,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(2,0,null,0,2,"ion-col",[["class","title"],["size","3"],["sizeXs","4"]],null,null,null,p.H,p.e)),o.ob(3,49152,null,0,s.t,[o.h,o.k,o.x],{size:[0,"size"],sizeXs:[1,"sizeXs"]},null),(l()(),o.Jb(-1,0,[" Confirmed Amount "])),(l()(),o.pb(5,0,null,0,3,"ion-col",[["class","minima-numeric value"]],null,null,null,p.H,p.e)),o.ob(6,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(7,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(8,null,[" "," "]))],(function(l,n){l(n,1,0,"none"),l(n,3,0,"3","4")}),(function(l,n){l(n,8,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.confirmed)}))}function H(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,8,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.R,p.l)),o.ob(1,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(2,0,null,0,2,"ion-col",[["class","title"],["size","3"],["sizeXs","4"]],null,null,null,p.H,p.e)),o.ob(3,49152,null,0,s.t,[o.h,o.k,o.x],{size:[0,"size"],sizeXs:[1,"sizeXs"]},null),(l()(),o.Jb(-1,0,[" Unconfirmed Amount "])),(l()(),o.pb(5,0,null,0,3,"ion-col",[["class","minima-numeric value"]],null,null,null,p.H,p.e)),o.ob(6,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(7,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(8,null,[" "," "]))],(function(l,n){l(n,1,0,"none"),l(n,3,0,"3","4")}),(function(l,n){l(n,8,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.unconfirmed)}))}function w(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,8,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.R,p.l)),o.ob(1,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(2,0,null,0,2,"ion-col",[["class","title"],["size","3"],["sizeXs","4"]],null,null,null,p.H,p.e)),o.ob(3,49152,null,0,s.t,[o.h,o.k,o.x],{size:[0,"size"],sizeXs:[1,"sizeXs"]},null),(l()(),o.Jb(-1,0,[" Sendable Amount "])),(l()(),o.pb(5,0,null,0,3,"ion-col",[["class","value minima-numeric"]],null,null,null,p.H,p.e)),o.ob(6,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(7,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(8,null,[" "," "]))],(function(l,n){l(n,1,0,"none"),l(n,3,0,"3","4")}),(function(l,n){l(n,8,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.sendable)}))}function j(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,3,"ion-col",[["class","minima-numeric value"]],null,null,null,p.H,p.e)),o.ob(1,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(3,null,[" "," "]))],null,(function(l,n){l(n,3,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.mempool)}))}function L(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,3,"ion-col",[["class","value"]],null,null,null,p.H,p.e)),o.ob(1,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(-1,null,[" Value transfer "]))],null,null)}function T(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,3,"ion-col",[["class","value nft"]],null,null,null,p.H,p.e)),o.ob(1,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(-1,null,[" NFT "]))],null,null)}function X(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,8,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.R,p.l)),o.ob(1,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(2,0,null,0,2,"ion-col",[["class","title"]],null,null,null,p.H,p.e)),o.ob(3,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,[" Token Type "])),(l()(),o.eb(16777216,null,0,1,null,L)),o.ob(6,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,T)),o.ob(8,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,"none"),l(n,6,0,"44"!==(null==n.parent.context.$implicit?null:n.parent.context.$implicit.scale)),l(n,8,0,"44"===(null==n.parent.context.$implicit?null:n.parent.context.$implicit.scale))}),null)}function R(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,8,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.R,p.l)),o.ob(1,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(2,0,null,0,2,"ion-col",[["class","title"]],null,null,null,p.H,p.e)),o.ob(3,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,[" Proof "])),(l()(),o.pb(5,0,null,0,3,"ion-col",[["class","value"]],null,null,null,p.H,p.e)),o.ob(6,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(7,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(8,null,[" "," "]))],(function(l,n){l(n,1,0,"none")}),(function(l,n){l(n,8,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.proof)}))}function B(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,2,"ion-button",[["class","small-text validate-btn"],["fill","outline"],["size","small"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.validateProof(null==l.parent.parent.context.$implicit?null:l.parent.parent.context.$implicit.tokenid)&&o),o}),p.F,p.c)),o.ob(1,49152,null,0,s.k,[o.h,o.k,o.x],{fill:[0,"fill"],size:[1,"size"]},null),(l()(),o.Jb(-1,0,[" Validate "]))],(function(l,n){l(n,1,0,"outline","small")}),null)}function S(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,8,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.R,p.l)),o.ob(1,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(2,0,null,0,2,"ion-col",[["class","title"]],null,null,null,p.H,p.e)),o.ob(3,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,[" Validate Proof "])),(l()(),o.pb(5,0,null,0,3,"ion-col",[["class","value"]],null,null,null,p.H,p.e)),o.ob(6,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.eb(16777216,null,0,1,null,B)),o.ob(8,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,"none"),l(n,8,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.proof)}),null)}function E(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,70,"ion-list",[["lines","none"]],null,null,null,p.U,p.q)),o.ob(1,49152,null,0,s.O,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.eb(16777216,null,0,1,null,M)),o.ob(3,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,I)),o.ob(5,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,P)),o.ob(7,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(8,0,null,0,8,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.R,p.l)),o.ob(9,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(10,0,null,0,2,"ion-col",[["class","title"]],null,null,null,p.H,p.e)),o.ob(11,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,[" Name "])),(l()(),o.pb(13,0,null,0,3,"ion-col",[["class","value"]],null,null,null,p.H,p.e)),o.ob(14,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(15,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(16,null,[" "," "])),(l()(),o.pb(17,0,null,0,10,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.R,p.l)),o.ob(18,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(19,0,null,0,4,"ion-col",[["class","title"]],null,null,null,p.H,p.e)),o.ob(20,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,[" Token ID "])),(l()(),o.pb(22,0,null,0,1,"a",[["class","copy"]],[[8,"id",0]],[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.copy(null==l.context.$implicit?null:l.context.$implicit.tokenid,"tokenid"+(null==l.context.$implicit?null:l.context.$implicit.tokenid))&&o),o}),null,null)),(l()(),o.Jb(-1,null,[" Copy "])),(l()(),o.pb(24,0,null,0,3,"ion-col",[["class","value"]],null,null,null,p.H,p.e)),o.ob(25,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(26,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(27,null,[" "," "])),(l()(),o.pb(28,0,null,0,10,"ion-item",[["class","ion-no-padding"],["color","none"]],[[8,"hidden",0]],null,null,p.R,p.l)),o.ob(29,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(30,0,null,0,4,"ion-col",[["class","title"]],null,null,null,p.H,p.e)),o.ob(31,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,[" Coin ID "])),(l()(),o.pb(33,0,null,0,1,"a",[["class","copy"]],[[8,"id",0]],[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.copy(null==l.context.$implicit?null:l.context.$implicit.coinid,"coinid"+(null==l.context.$implicit?null:l.context.$implicit.coinid))&&o),o}),null,null)),(l()(),o.Jb(-1,null,[" Copy "])),(l()(),o.pb(35,0,null,0,3,"ion-col",[["class","minima-numeric value"]],null,null,null,p.H,p.e)),o.ob(36,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(37,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(38,null,[" "," "])),(l()(),o.pb(39,0,null,0,8,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.R,p.l)),o.ob(40,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(41,0,null,0,2,"ion-col",[["class","title"],["size","3"],["sizeXs","4"]],null,null,null,p.H,p.e)),o.ob(42,49152,null,0,s.t,[o.h,o.k,o.x],{size:[0,"size"],sizeXs:[1,"sizeXs"]},null),(l()(),o.Jb(-1,0,[" Total Supply "])),(l()(),o.pb(44,0,null,0,3,"ion-col",[["class","minima-numeric value"]],null,null,null,p.H,p.e)),o.ob(45,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(46,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(47,null,[" "," "])),(l()(),o.eb(16777216,null,0,1,null,_)),o.ob(49,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,J)),o.ob(51,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,O)),o.ob(53,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,H)),o.ob(55,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,w)),o.ob(57,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(58,0,null,0,6,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.R,p.l)),o.ob(59,49152,null,0,s.H,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(60,0,null,0,2,"ion-col",[["class","title"],["size","3"],["sizeXs","4"]],null,null,null,p.H,p.e)),o.ob(61,49152,null,0,s.t,[o.h,o.k,o.x],{size:[0,"size"],sizeXs:[1,"sizeXs"]},null),(l()(),o.Jb(-1,0,[" Mempool Amount "])),(l()(),o.eb(16777216,null,0,1,null,j)),o.ob(64,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,X)),o.ob(66,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,R)),o.ob(68,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,S)),o.ob(70,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,1,0,"none"),l(n,3,0,t.expand),l(n,5,0,!t.expand),l(n,7,0,(null==n.context.$implicit?null:n.context.$implicit.description)&&(null==n.context.$implicit?null:n.context.$implicit.description.length)>0),l(n,9,0,"none"),l(n,18,0,"none"),l(n,29,0,"none"),l(n,40,0,"none"),l(n,42,0,"3","4"),l(n,49,0,null==n.context.$implicit?null:n.context.$implicit.totalamount),l(n,51,0,null==n.context.$implicit?null:n.context.$implicit.scale),l(n,53,0,null==n.context.$implicit?null:n.context.$implicit.confirmed),l(n,55,0,null==n.context.$implicit?null:n.context.$implicit.unconfirmed),l(n,57,0,null==n.context.$implicit?null:n.context.$implicit.sendable),l(n,59,0,"none"),l(n,61,0,"3","4"),l(n,64,0,null==n.context.$implicit?null:n.context.$implicit.mempool),l(n,66,0,null==n.context.$implicit?null:n.context.$implicit.scale),l(n,68,0,"0x00"!==(null==n.context.$implicit?null:n.context.$implicit.tokenid)&&(null==n.context.$implicit?null:n.context.$implicit.proof)),l(n,70,0,"0x00"!==(null==n.context.$implicit?null:n.context.$implicit.tokenid)&&(null==n.context.$implicit?null:n.context.$implicit.proof))}),(function(l,n){l(n,16,0,null==n.context.$implicit?null:n.context.$implicit.token),l(n,22,0,"tokenid"+(null==n.context.$implicit?null:n.context.$implicit.tokenid)),l(n,27,0,null==n.context.$implicit?null:n.context.$implicit.tokenid),l(n,28,0,"0x00"==(null==n.context.$implicit?null:n.context.$implicit.tokenid)),l(n,33,0,"coinid"+(null==n.context.$implicit?null:n.context.$implicit.coinid)),l(n,38,0,null==n.context.$implicit?null:n.context.$implicit.coinid),l(n,47,0,null==n.context.$implicit?null:n.context.$implicit.total)}))}function A(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,15,"ion-header",[["class","page-header ion-no-border"],["mode","md"]],null,null,null,p.L,p.i)),o.ob(1,49152,null,0,s.B,[o.h,o.k,o.x],{mode:[0,"mode"]},null),(l()(),o.pb(2,0,null,0,13,"ion-toolbar",[],null,null,null,p.fb,p.C)),o.ob(3,49152,null,0,s.zb,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,11,"ion-title",[],null,null,null,p.eb,p.B)),o.ob(5,49152,null,0,s.xb,[o.h,o.k,o.x],null,null),(l()(),o.pb(6,0,null,0,6,"ion-item",[["class","no-ripple ion-no-padding"],["id","title"],["lines","none"]],null,null,null,p.R,p.l)),o.ob(7,49152,null,0,s.H,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(8,0,null,0,3,"ion-icon",[["class","back-btn"],["name","arrow-back"],["routerLink","/balance"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==o.Bb(l,10).onClick()&&u),"click"===n&&(u=!1!==o.Bb(l,11).onClick(t)&&u),u}),p.M,p.j)),o.ob(9,49152,null,0,s.C,[o.h,o.k,o.x],{name:[0,"name"]},null),o.ob(10,16384,null,0,m.n,[m.m,m.a,[8,null],o.B,o.k],{routerLink:[0,"routerLink"]},null),o.ob(11,737280,null,0,s.Lb,[b.h,s.Gb,o.k,m.m,[2,m.n]],null,null),(l()(),o.Jb(-1,0,[" Balance "])),(l()(),o.pb(13,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding active"],["id","subtitle"],["lines","none"]],null,null,null,p.R,p.l)),o.ob(14,49152,null,0,s.H,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.Jb(-1,0,[" Token details "])),(l()(),o.pb(16,0,null,null,5,"ion-content",[["class","page-content"]],null,null,null,p.I,p.f)),o.ob(17,49152,[["content",4]],0,s.u,[o.h,o.k,o.x],null,null),(l()(),o.eb(16777216,null,0,1,null,g)),o.ob(19,16384,null,0,b.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,0,1,null,E)),o.ob(21,278528,null,0,b.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null),(l()(),o.pb(22,0,null,null,1,"app-footer",[],null,null,null,x.b,x.a)),o.ob(23,245760,null,0,f.a,[i.a,u.a],null,null)],(function(l,n){var t=n.component;l(n,1,0,"md"),l(n,7,0,"none"),l(n,9,0,"arrow-back"),l(n,10,0,"/balance"),l(n,11,0),l(n,14,0,"none"),l(n,19,0,t.prompt&&t.prompt.length>0),l(n,21,0,t.$token),l(n,23,0)}),null)}var F=o.lb("app-view-tokens",c,(function(l){return o.Lb(0,[(l()(),o.pb(0,0,null,null,1,"app-view-tokens",[],null,null,null,A,d)),o.ob(1,114688,null,0,c,[m.a,i.a,s.c,u.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),V=t("s7LF"),q=t("IA6j");t.d(n,"ViewTokensPageModuleNgFactory",(function(){return D}));var D=o.mb(a,[],(function(l){return o.yb([o.zb(512,o.j,o.X,[[8,[r.a,F]],[3,o.j],o.v]),o.zb(4608,b.l,b.k,[o.s,[2,b.v]]),o.zb(4608,V.q,V.q,[]),o.zb(4608,s.b,s.b,[o.x,o.g]),o.zb(4608,s.Fb,s.Fb,[s.b,o.j,o.p]),o.zb(4608,s.Kb,s.Kb,[s.b,o.j,o.p]),o.zb(1073742336,b.c,b.c,[]),o.zb(1073742336,V.p,V.p,[]),o.zb(1073742336,V.f,V.f,[]),o.zb(1073742336,s.Bb,s.Bb,[]),o.zb(1073742336,m.q,m.q,[[2,m.v],[2,m.m]]),o.zb(1073742336,q.a,q.a,[]),o.zb(1073742336,a,a,[]),o.zb(1024,m.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);