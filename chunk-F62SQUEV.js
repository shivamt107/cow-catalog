import{a as oe,b as ae}from"./chunk-JFNMUKFK.js";import{b as me}from"./chunk-UJO5BMKH.js";import{b as Z,n as ee,o as te,p as ne,q as ie,r as re,s as le}from"./chunk-2VMBMNCH.js";import{d as U,e as S,g as J,h as k,o as K,oa as I,pa as O,q as X,va as Y}from"./chunk-4VKDULOE.js";import"./chunk-36JN3LZY.js";import{$a as n,Aa as T,Db as H,Fb as M,Ga as b,Ha as $,Ja as A,La as s,Nb as h,O as G,P as Q,T as V,Ua as _,Y as D,Z as P,Za as p,_a as i,ab as u,eb as q,fb as L,gb as E,hb as F,jb as W,ka as z,kb as d,nb as C,pb as w,qb as y,rb as x,ua as a,vb as v,wb as m,xb as g,yb as B,zb as R}from"./chunk-DLFWAVIA.js";var ce=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var fe=["content"],ue=["opposite"],_e=["marker"],j=e=>({$implicit:e});function xe(e,o){e&1&&E(0)}function he(e,o){e&1&&E(0)}function Ce(e,o){if(e&1&&(q(0),s(1,he,1,0,"ng-container",2),L()),e&2){let t=d().$implicit,r=d();a(),p("ngTemplateOutlet",r.markerTemplate||r._markerTemplate)("ngTemplateOutletContext",M(2,j,t))}}function we(e,o){if(e&1&&u(0,"div"),e&2){let t=d(2);v(t.cx("eventMarker")),_("data-pc-section","marker")}}function ye(e,o){if(e&1&&u(0,"div"),e&2){let t=d(2);v(t.cx("eventConnector"))}}function Te(e,o){e&1&&E(0)}function be(e,o){if(e&1&&(i(0,"div")(1,"div"),s(2,xe,1,0,"ng-container",2),n(),i(3,"div"),s(4,Ce,2,4,"ng-container",3)(5,we,1,3,"ng-template",null,0,h)(7,ye,1,2,"div",4),n(),i(8,"div"),s(9,Te,1,0,"ng-container",2),n()()),e&2){let t=o.$implicit,r=o.last,c=x(6),l=d();v(l.cx("event")),_("data-pc-section","event"),a(),v(l.cx("eventOpposite")),_("data-pc-section","opposite"),a(),p("ngTemplateOutlet",l.oppositeTemplate||l._oppositeTemplate)("ngTemplateOutletContext",M(19,j,t)),a(),v(l.cx("eventSeparator")),_("data-pc-section","separator"),a(),p("ngIf",l.markerTemplate||l._markerTemplate)("ngIfElse",c),a(3),p("ngIf",!r),a(),v(l.cx("eventContent")),_("data-pc-section","content"),a(),p("ngTemplateOutlet",l.contentTemplate||l._contentTemplate)("ngTemplateOutletContext",M(21,j,t))}}var Ee={root:({instance:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},pe=(()=>{class e extends Y{name="timeline";theme=ce;classes=Ee;static \u0275fac=(()=>{let t;return function(c){return(t||(t=z(e)))(c||e)}})();static \u0275prov=G({token:e,factory:e.\u0275fac})}return e})();var N=(()=>{class e extends Z{value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=V(pe);getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(c){return(t||(t=z(e)))(c||e)}})();static \u0275cmp=b({type:e,selectors:[["p-timeline"]],contentQueries:function(r,c,l){if(r&1&&(C(l,fe,4),C(l,ue,4),C(l,_e,4),C(l,I,4)),r&2){let f;w(f=y())&&(c.contentTemplate=f.first),w(f=y())&&(c.oppositeTemplate=f.first),w(f=y())&&(c.markerTemplate=f.first),w(f=y())&&(c.templates=f)}},hostVars:4,hostBindings:function(r,c){r&2&&(_("data-pc-section","root")("data-pc-name","timeline"),v(c.cn(c.cx("root"),c.styleClass)))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[H([pe]),A],decls:1,vars:1,consts:[["marker",""],[3,"class",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"class",4,"ngIf"]],template:function(r,c){r&1&&s(0,be,10,23,"div",1),r&2&&p("ngForOf",c.value)},dependencies:[k,U,S,J,O],encapsulation:2,changeDetection:0})}return e})(),de=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=$({type:e});static \u0275inj=Q({imports:[N,O,O]})}return e})();function Se(e,o){if(e&1&&(i(0,"span"),m(1),n()),e&2){let t=d(2);a(),B(" ",t.getCurrentWeight()," kg ")}}function ke(e,o){e&1&&(i(0,"span",27),m(1,"Not recorded"),n())}function Ie(e,o){if(e&1&&(i(0,"span"),m(1),n()),e&2){let t=d(2);v(t.dailyWeightGain>=0?"positive":"negative"),a(),R(" ",t.dailyWeightGain>0?"+":"","",t.dailyWeightGain.toFixed(2)," kg/day ")}}function Oe(e,o){e&1&&(i(0,"span",27),m(1,"0"),n())}function De(e,o){if(e&1&&(i(0,"div")(1,"strong"),m(2,"Weight:"),n(),m(3),n()),e&2){let t=d(2).$implicit;a(3),B(" ",t.weight," kg ")}}function Pe(e,o){if(e&1&&(i(0,"div")(1,"strong"),m(2,"Moved:"),n(),m(3),n()),e&2){let t=d(2).$implicit;a(3),R(" ",t.previousPen," \u2192 ",t.newPen," ")}}function ze(e,o){if(e&1&&(i(0,"div",35),s(1,De,4,1,"div",36)(2,Pe,4,2,"div",36),n()),e&2){let t=d().$implicit;a(),p("ngIf",t.weight),a(),p("ngIf",t.previousPen&&t.newPen)}}function Fe(e,o){if(e&1&&(i(0,"div",30)(1,"div",31)(2,"h4"),m(3),n(),i(4,"span",32),m(5),n()(),i(6,"p",33),m(7),n(),s(8,ze,3,2,"div",34),n()),e&2){let t=o.$implicit,r=d(3);a(3),g(t.type),a(2),g(r.formatDateTime(t.date)),a(2),g(t.description),a(),p("ngIf",t.weight||t.previousPen&&t.newPen)}}function We(e,o){if(e&1&&(i(0,"p-timeline",28),s(1,Fe,9,4,"ng-template",29),n()),e&2){let t=d(2);p("value",t.cow.events)}}function Be(e,o){e&1&&(i(0,"div",37),u(1,"i",38),i(2,"p"),m(3,"No events recorded for this cow"),n()())}function Re(e,o){if(e&1){let t=F();i(0,"div",5)(1,"div",6)(2,"h1"),m(3,"Cow Details"),n(),i(4,"p-button",7),W("onClick",function(){D(t);let c=d();return P(c.goBack())}),n()(),i(5,"div",8)(6,"div",9)(7,"p-card",10)(8,"div",11)(9,"div",12)(10,"label",13),m(11,"Ear Tag"),n(),i(12,"div",14),m(13),n()(),i(14,"div",12)(15,"label",13),m(16,"Sex"),n(),i(17,"div",15),m(18),n()(),i(19,"div",12)(20,"label",13),m(21,"Pen"),n(),i(22,"div",15),m(23),n()(),i(24,"div",12)(25,"label",13),m(26,"Status"),n(),i(27,"div",15),u(28,"p-tag",16),n()(),i(29,"div",12)(30,"label",13),m(31,"Added to Catalog"),n(),i(32,"div",15),m(33),n()(),i(34,"div",12)(35,"label",13),m(36,"Last Event"),n(),i(37,"div",15),m(38),n()()()()(),i(39,"div",17)(40,"p-card",18)(41,"div",19)(42,"div",20)(43,"label",13),m(44,"Current Weight"),n(),i(45,"div",21),s(46,Se,2,1,"span",22)(47,ke,2,0,"ng-template",null,1,h),n()(),i(49,"div",20)(50,"label",13),m(51,"Daily Weight Gain"),n(),i(52,"div",15),s(53,Ie,2,4,"span",23)(54,Oe,2,0,"ng-template",null,2,h),n()()()()()(),i(56,"div",24)(57,"p-card",25),s(58,We,2,1,"p-timeline",26)(59,Be,4,0,"ng-template",null,3,h),n()()()}if(e&2){let t=x(48),r=x(55),c=x(60),l=d();a(13),g(l.cow.earTag),a(5),g(l.cow.sex),a(5),g(l.cow.pen),a(5),p("value",l.cow.status)("severity",l.getStatusSeverity(l.cow.status)),a(5),g(l.formatDate(l.cow.createdDate)),a(5),g(l.formatDate(l.cow.lastEventDate)),a(8),p("ngIf",l.getCurrentWeight())("ngIfElse",t),a(7),p("ngIf",l.dailyWeightGain!==null)("ngIfElse",r),a(5),p("ngIf",l.cow.events.length>0)("ngIfElse",c)}}function je(e,o){if(e&1){let t=F();i(0,"div",5)(1,"p-card")(2,"div",37),u(3,"i",39),i(4,"h2"),m(5,"Cow Not Found"),n(),i(6,"p"),m(7,"The requested cow could not be found."),n(),i(8,"p-button",7),W("onClick",function(){D(t);let c=d();return P(c.goBack())}),n()()()()}}var se=class e{constructor(o,t,r){this.route=o;this.router=t;this.cowService=r}cow=null;dailyWeightGain=null;ngOnInit(){let o=this.route.snapshot.paramMap.get("id");o&&this.loadCow(o)}loadCow(o){this.cow=this.cowService.getCowById(o)||null,this.cow&&(this.dailyWeightGain=this.cowService.getDailyWeightGain(this.cow))}getStatusSeverity(o){switch(o){case"Active":return"success";case"InTreatment":return"warn";case"Deceased":return"danger";default:return"info"}}formatDate(o){return o.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}formatDateTime(o){return o.toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}getCurrentWeight(){if(!this.cow||!this.cow.events.length)return null;let o=this.cow.events.filter(r=>r.weight!==void 0);return o.length===0?this.cow.weight||null:o.sort((r,c)=>c.date.getTime()-r.date.getTime())[0].weight||null}goBack(){this.router.navigate(["/"])}static \u0275fac=function(t){return new(t||e)(T(K),T(X),T(le))};static \u0275cmp=b({type:e,selectors:[["app-cow-detail"]],decls:4,vars:2,consts:[["notFound",""],["noWeight",""],["noGain",""],["noEvents",""],["class","cow-detail-container",4,"ngIf","ngIfElse"],[1,"cow-detail-container"],[1,"header"],["label","Back to List","icon","pi pi-arrow-left","severity","secondary",3,"onClick"],[1,"detail-grid"],[1,"main-info"],["header","Basic Information"],[1,"info-grid"],[1,"info-item"],[1,"info-label"],[1,"info-value","font-bold","large"],[1,"info-value"],[3,"value","severity"],[1,"weight-info"],["header","Weight Information"],[1,"weight-stats"],[1,"stat-item"],[1,"info-value","large","font-bold"],[4,"ngIf","ngIfElse"],[3,"class",4,"ngIf","ngIfElse"],[1,"timeline-section"],["header","Event Timeline"],[3,"value",4,"ngIf","ngIfElse"],[1,"muted"],[3,"value"],["pTemplate","content"],[1,"timeline-content"],[1,"event-header"],[1,"event-date"],[1,"event-description"],["class","event-details",4,"ngIf"],[1,"event-details"],[4,"ngIf"],[1,"empty-state"],[1,"pi","pi-calendar"],[1,"pi","pi-exclamation-triangle"]],template:function(t,r){if(t&1&&(u(0,"app-header"),s(1,Re,61,13,"div",4)(2,je,9,0,"ng-template",null,0,h)),t&2){let c=x(3);a(),p("ngIf",r.cow)("ngIfElse",c)}},dependencies:[k,S,te,ee,I,ie,ne,ae,oe,de,N,me,re],styles:[".cow-detail-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:1rem}  .p-timeline-event-opposite{flex:0!important}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:2rem}.detail-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr;gap:1.5rem;margin-bottom:1.5rem}@media (max-width: 768px){.detail-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.info-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem}.info-item[_ngcontent-%COMP%], .stat-item[_ngcontent-%COMP%]{margin-bottom:1rem}.info-label[_ngcontent-%COMP%]{display:block;font-weight:600;color:#6c757d;margin-bottom:.25rem;font-size:.875rem;text-transform:uppercase;letter-spacing:.025em}.info-value[_ngcontent-%COMP%]{font-size:1rem;color:#212529}.info-value.large[_ngcontent-%COMP%]{font-size:1.25rem}.font-bold[_ngcontent-%COMP%]{font-weight:700}.weight-stats[_ngcontent-%COMP%]{text-align:center}.positive[_ngcontent-%COMP%]{color:#28a745;font-weight:600}.negative[_ngcontent-%COMP%]{color:#dc3545;font-weight:600}.muted[_ngcontent-%COMP%]{color:#6c757d;font-style:italic}.timeline-content[_ngcontent-%COMP%]{background:#f8f9fa;padding:1rem;border-radius:6px;border-left:4px solid #007bff}.event-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem;flex-wrap:wrap;gap:.5rem}.event-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1rem}.event-date[_ngcontent-%COMP%]{color:#6c757d;font-size:.8rem}.event-description[_ngcontent-%COMP%]{color:#495057;margin:0 0 .5rem}.event-details[_ngcontent-%COMP%]{border-top:1px solid #dee2e6;padding-top:.5rem;margin-top:.5rem;font-size:.875rem}.event-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:.25rem}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:2rem;color:#6c757d}.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:1rem;display:block;color:#dee2e6}.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#495057;margin:1rem 0}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.5rem 0 1.5rem}"]})};export{se as CowDetailComponent};
