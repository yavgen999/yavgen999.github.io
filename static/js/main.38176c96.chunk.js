(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);a(82),a(107);var n=a(0),r=a.n(n),i=a(46),s=a.n(i),l=a(73),o=a.n(l),c=a(79),u=a(9),m=a(10),d=a(13),k=a(11),h=a(14),v=a(1),f=(a(32),a(33)),E=a.n(f),p=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tasks,a=e.router,n=e.setCurrentTaskId,i=e.onRemovableTasks,s=e.deleteTask,l=e.removable,o=Object(v.platform)();return r.a.createElement("div",null,r.a.createElement(v.PanelHeader,{left:o!==v.ANDROID&&r.a.createElement(v.HeaderButton,{onClick:function(){return i()}},r.a.createElement(E.a,null))},"\u0417\u0430\u0434\u0430\u0447\u0438"),r.a.createElement(v.List,{style:{paddingTop:o===v.ANDROID?56:48}},t.map(function(e,t){return r.a.createElement(v.Cell,{multiline:!0,expandable:!0,removable:l,key:t,onRemove:function(){return s(e.id)},onClick:function(){n(e.id),a.navigate("task",{id:e.id})}},e.name)})))}}]),t}(r.a.Component),b=a(23),C=a.n(b),T=a(34),g=a.n(T),x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(k.a)(t).call(this,e))).onClickAddTask=function(){var e=a.props,t=e.addTask,n=e.router,r=a.state,i=r.name,s=r.text;""!==i&&""!==s?(a.setState({error:!1}),t({name:i,text:s}),n.navigateToDefault()):a.setState({error:!0})},a.onChangeNameTask=function(e){var t=e.target.value;a.setState({name:t})},a.onChangeTextTask=function(e){var t=e.target.value;a.setState({text:t})},a.state={name:"",text:"",error:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.router,a=Object(v.platform)();return r.a.createElement("div",null,r.a.createElement(v.PanelHeader,{left:r.a.createElement(C.a,{onClick:function(){return t.navigate("tasks")}})},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),r.a.createElement(v.FormLayout,null,!0===this.state.error&&r.a.createElement(v.FormStatus,{title:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u043f\u043e\u043b\u044f",state:"error"},"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f"),r.a.createElement(v.Input,{onChange:this.onChangeNameTask,type:"text",value:this.state.name,placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438, \u043a\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0437\u0430\u0434\u0430\u0447\u0430"}),r.a.createElement(v.Textarea,{onChange:this.onChangeTextTask,value:this.state.text,placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438, \u0447\u0442\u043e\u0431\u044b \u0442\u044b \u0445\u043e\u0442\u0435\u043b \u0441\u0434\u0435\u043b\u0430\u0442\u044c"})),r.a.createElement(v.FixedLayout,{vertical:"bottom"},a===v.ANDROID?r.a.createElement(v.Div,{style:{float:"right"}},r.a.createElement(v.Button,{className:"FixedBottomButton",onClick:function(t){return e.onClickAddTask(t)}},r.a.createElement(g.a,null))):r.a.createElement(v.Div,null,r.a.createElement(v.Button,{size:"xl",onClick:function(t){return e.onClickAddTask(t)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))}}]),t}(r.a.Component);var O=function(e){var t=e.task,a=e.router;return r.a.createElement("div",null,r.a.createElement(v.PanelHeader,{left:r.a.createElement(C.a,{onClick:function(){return a.navigate("tasks")}})},"\u0417\u0430\u0434\u0430\u0447\u0430"),"undefined"!==typeof t&&r.a.createElement(v.Group,null,r.a.createElement(v.Header,null,t.name),r.a.createElement(v.Div,null,t.text)))},j=a(80),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(k.a)(t).call(this,e))).onClickEditTask=function(){var e=a.props,t=e.editTask,n=e.router,r=a.state,i=r.id,s=r.name,l=r.text;""!==s&&""!==l?(a.setState({error:!1}),t({id:i,name:s,text:l}),n.navigateToDefault()):a.setState({error:!0})},a.onChangeNameTask=function(e){var t=e.target.value;a.setState({name:t})},a.onChangeTextTask=function(e){var t=e.target.value;a.setState({text:t})},a.state={id:null,name:"",text:"",error:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.task;this.setState(Object(j.a)({},e))}},{key:"render",value:function(){var e=this,t=this.props,a=t.task,n=t.router,i=Object(v.platform)();return r.a.createElement("div",null,"undefined"!==typeof a&&r.a.createElement("div",null,r.a.createElement(v.PanelHeader,{left:r.a.createElement(C.a,{onClick:function(){return n.navigate("task",{id:a.id})}})},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),r.a.createElement(v.FormLayout,null,!0===this.state.error&&r.a.createElement(v.FormStatus,{title:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u043f\u043e\u043b\u044f",state:"error"},"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f"),r.a.createElement(v.Input,{onChange:this.onChangeNameTask,type:"text",value:this.state.name,placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438, \u043a\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0437\u0430\u0434\u0430\u0447\u0430"}),r.a.createElement(v.Textarea,{onChange:this.onChangeTextTask,value:this.state.text,placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438, \u0447\u0442\u043e\u0431\u044b \u0442\u044b \u0445\u043e\u0442\u0435\u043b \u0441\u0434\u0435\u043b\u0430\u0442\u044c"})),r.a.createElement(v.FixedLayout,{vertical:"bottom"},i===v.ANDROID?r.a.createElement(v.Div,{style:{float:"right"}},r.a.createElement(v.Button,{className:"FixedBottomButton",onClick:function(){return e.onClickEditTask()}},r.a.createElement(g.a,null))):r.a.createElement(v.Div,null,r.a.createElement(v.Button,{size:"xl",onClick:function(){return e.onClickEditTask()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))))}}]),t}(r.a.Component),y=a(74),B=a.n(y),S=a(75),w=a.n(S),I=a(35),N=(a(133),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(k.a)(t).call(this,e))).onChangeSearch=function(e){a.setState({search:e})},a.addTask=function(e){e.id=a.state.tasks.length+1,a.setState({tasks:[].concat(Object(c.a)(a.state.tasks),[e])})},a.deleteTask=function(e){var t=a.state.tasks.filter(function(t){return t.id!==e});a.setState({tasks:t})},a.onRemovableTasks=function(){return a.setState({removable:!a.state.removable})},a.setCurrentTaskId=function(e){return a.setState({currentTaskId:e})},a.editTask=function(e){var t=a.state.tasks.map(function(t){return t.id===e.id&&(t=e),t});a.setState({tasks:t})},a.state={tasks:[{id:1,name:"\u041d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u043e\u0432\u043e\u0439 \u0434\u043e\u043b\u0438",text:"\u041d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u043e\u0432\u043e\u0439 \u0434\u043e\u043b\u0438 \u043f\u043e \u043c\u0430\u0441\u0441\u0435."},{id:2,name:"\u0412\u044b\u043f\u0438\u0442\u044c \u0432\u043e\u0434\u0443",text:"\u0411\u0443\u0434\u0443 \u043f\u0438\u0442\u044c \u0432\u043e\u0434\u0443 \u043a\u0430\u0436\u0434\u044b\u0439 \u0447\u0430\u0441"},{id:3,name:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0412\u0430\u0441\u0435",text:"\u041d\u0430\u0434\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0412\u0430\u0441\u0435, \u0447\u0442\u043e\u0431\u044b \u043e\u043d \u043d\u0430\u043f\u0438\u0441\u0430\u043b \u0421\u0432\u0435\u0442\u0435"}],currentTaskId:null,search:"",removable:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.route,n=t.router,i=Object(v.platform)(),s="add"===a.name?"addView":"tasksView",l=a.name;return r.a.createElement(v.Root,{activeView:s},r.a.createElement(v.View,{activePanel:l,id:"tasksView"},r.a.createElement(v.Panel,{id:"tasks"},r.a.createElement(v.FixedLayout,{vertical:"top"},r.a.createElement(v.Search,{value:this.state.search,onChange:this.onChangeSearch})),r.a.createElement(p,{router:n,tasks:this.tasks,removable:this.state.removable,onRemovableTasks:this.onRemovableTasks,setCurrentTaskId:this.setCurrentTaskId,deleteTask:this.deleteTask}),r.a.createElement(v.FixedLayout,{vertical:"bottom"},i===v.ANDROID?r.a.createElement(v.Div,{style:{float:"right"}},r.a.createElement(v.Button,{className:"FixedBottomButton",onClick:function(){return n.navigate("add")}},r.a.createElement(B.a,null))):r.a.createElement(v.Div,null,r.a.createElement(v.Button,{size:"xl",onClick:function(){return n.navigate("add")}},"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430")),i===v.ANDROID&&r.a.createElement(v.Div,null,r.a.createElement(v.Button,{className:"FixedBottomButton",onClick:function(){return e.onRemovableTasks()}},r.a.createElement(E.a,null))))),r.a.createElement(v.Panel,{id:"task"},r.a.createElement(O,{router:n,task:this.task[0]}),r.a.createElement(v.FixedLayout,{vertical:"bottom"},i===v.ANDROID?r.a.createElement(v.Div,{style:{float:"right"}},r.a.createElement(v.Button,{className:"FixedBottomButton",onClick:function(){return n.navigate("edit",{id:e.task[0].id})}},r.a.createElement(w.a,null))):r.a.createElement(v.Div,null,r.a.createElement(v.Button,{size:"xl",onClick:function(){return n.navigate("edit",{id:e.task[0].id})}},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))),r.a.createElement(v.Panel,{id:"edit",theme:"white"},r.a.createElement(D,{router:n,task:this.task[0],editTask:this.editTask}))),r.a.createElement(v.View,{activePanel:l,id:"addView"},r.a.createElement(v.Panel,{id:"add",theme:"white"},r.a.createElement(x,{router:n,addTask:this.addTask}))))}},{key:"tasks",get:function(){var e=this.state.search.toLowerCase();return this.state.tasks.filter(function(t){return t.name.toLowerCase().indexOf(e)>-1||t.text.toLowerCase().indexOf(e)>-1})}},{key:"task",get:function(){var e=Number(this.props.route.params.id)||this.state.currentTaskId;return this.state.tasks.filter(function(t){return t.id===e})}}]),t}(r.a.Component)),R=function(e){return r.a.createElement(I.a,{nodeName:""},function(t){var a=t.route;return r.a.createElement(N,Object.assign({route:a},e))})},F=a(26),P=a(77),A=a(78),L=[{name:"tasks",path:"/tasks"},{name:"task",path:"/task/:id"},{name:"edit",path:"/edit/:id"},{name:"add",path:"/add"}];o.a.send("VKWebAppInit",{});var V=function(){var e=Object(F.b)(L,{defaultRoute:"tasks"});return e.usePlugin(P.a),e.usePlugin(Object(A.a)({useHash:!0})),e}();V.start(function(){s.a.render(r.a.createElement(I.b,{router:V},r.a.createElement(R,{router:V})),document.getElementById("root"))})},81:function(e,t,a){e.exports=a(135)}},[[81,1,2]]]);
//# sourceMappingURL=main.38176c96.chunk.js.map