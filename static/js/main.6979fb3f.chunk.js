(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);n(61),n(86);var o=n(0),a=n.n(o),s=n(32),c=n.n(s),l=n(16),u=n.n(l),p=n(55),i=n(56),r=n(58),b=n(57),d=n(59),f=n(18),h=(n(5),n(109),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(r.a)(this,Object(b.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.share=function(){u.a.send("VKWebAppShowWallPostBox",{message:"\u0422\u0435\u0441\u044299999"})},n.closePopout=function(){n.setState({popout:null})},n.state={activePanel:"load",fetchedUser:null,popout:null},n.closePopout=n.closePopout.bind(Object(f.a)(Object(f.a)(n))),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;u.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data,activePanel:"home"});break;case"VKWebAppShowWallPostBoxResult":e.openPopout();break;default:console.log(t.detail.type)}}),u.a.send("VKWebAppGetUserInfo",{})}}]),t}(a.a.Component));u.a.send("VKWebAppInit",{}),c.a.render(a.a.createElement(h,null),document.getElementById("root"))},60:function(e,t,n){e.exports=n(110)}},[[60,1,2]]]);
//# sourceMappingURL=main.6979fb3f.chunk.js.map