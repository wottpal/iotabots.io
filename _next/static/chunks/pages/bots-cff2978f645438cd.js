(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{91420:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bots",function(){return o(6936)}])},2133:function(e,t,o){"use strict";var n=o(85893),r=(o(67294),o(27680)),s=(0,r.makeStyles)((function(e){return{root:{background:e.palette.background.gradient,flexGrow:1,flexShrink:1,display:"flex",flexDirection:"column",justifyContent:"center"}}}));t.Z=function(e){var t=e.children,o=s();return(0,n.jsx)(r.Box,{className:o.root,children:t})}},6936:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return y}});var n=o(85893),r=o(67294),s=o(27680),i=o(2133),l=o(62623),a=o(28492),c=o(44781),h=o(48263),p=o(23972),u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};var d=function(){return(d=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var f="Pixel",m="Percent",g={unit:m,value:.8};function v(e){return"number"===typeof e?{unit:m,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:f,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:m,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),g):(console.warn("scrollThreshold should be string or number"),g)}var T=function(e){function t(t){var o=e.call(this,t)||this;return o.lastScrollTop=0,o.actionTriggered=!1,o.startY=0,o.currentY=0,o.dragging=!1,o.maxPullDownDistance=0,o.getScrollableTarget=function(){return o.props.scrollableTarget instanceof HTMLElement?o.props.scrollableTarget:"string"===typeof o.props.scrollableTarget?document.getElementById(o.props.scrollableTarget):(null===o.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},o.onStart=function(e){o.lastScrollTop||(o.dragging=!0,e instanceof MouseEvent?o.startY=e.pageY:e instanceof TouchEvent&&(o.startY=e.touches[0].pageY),o.currentY=o.startY,o._infScroll&&(o._infScroll.style.willChange="transform",o._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},o.onMove=function(e){o.dragging&&(e instanceof MouseEvent?o.currentY=e.pageY:e instanceof TouchEvent&&(o.currentY=e.touches[0].pageY),o.currentY<o.startY||(o.currentY-o.startY>=Number(o.props.pullDownToRefreshThreshold)&&o.setState({pullToRefreshThresholdBreached:!0}),o.currentY-o.startY>1.5*o.maxPullDownDistance||o._infScroll&&(o._infScroll.style.overflow="visible",o._infScroll.style.transform="translate3d(0px, "+(o.currentY-o.startY)+"px, 0px)")))},o.onEnd=function(){o.startY=0,o.currentY=0,o.dragging=!1,o.state.pullToRefreshThresholdBreached&&(o.props.refreshFunction&&o.props.refreshFunction(),o.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){o._infScroll&&(o._infScroll.style.overflow="auto",o._infScroll.style.transform="none",o._infScroll.style.willChange="unset")}))},o.onScrollListener=function(e){"function"===typeof o.props.onScroll&&setTimeout((function(){return o.props.onScroll&&o.props.onScroll(e)}),0);var t=o.props.height||o._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;o.actionTriggered||((o.props.inverse?o.isElementAtTop(t,o.props.scrollThreshold):o.isElementAtBottom(t,o.props.scrollThreshold))&&o.props.hasMore&&(o.actionTriggered=!0,o.setState({showLoader:!0}),o.props.next&&o.props.next()),o.lastScrollTop=t.scrollTop)},o.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},o.throttledOnScrollListener=function(e,t,o,n){var r,s=!1,i=0;function l(){r&&clearTimeout(r)}function a(){var a=this,c=Date.now()-i,h=arguments;function p(){i=Date.now(),o.apply(a,h)}function u(){r=void 0}s||(n&&!r&&p(),l(),void 0===n&&c>e?p():!0!==t&&(r=setTimeout(n?u:p,void 0===n?e-c:e)))}return"boolean"!==typeof t&&(n=o,o=t,t=void 0),a.cancel=function(){l(),s=!0},a}(150,o.onScrollListener).bind(o),o.onStart=o.onStart.bind(o),o.onMove=o.onMove.bind(o),o.onEnd=o.onEnd.bind(o),o}return function(e,t){function o(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?d(d({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var o=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=v(t);return n.unit===f?e.scrollTop<=n.value+o-e.scrollHeight+1:e.scrollTop<=n.value/100+o-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var o=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=v(t);return n.unit===f?e.scrollTop+o>=e.scrollHeight-n.value:e.scrollTop+o>=n.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=d({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),n=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.createElement("div",{style:n,className:"infinite-scroll-component__outerdiv"},r.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&r.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},r.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(r.Component),w=function(){var e=Array.from({length:20},(function(e,t){return t+1}));return(0,n.jsx)(T,{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"100%",textAlign:"center",justifyContent:"center"},dataLength:e.length,next:function(){e=e.concat(Array.from({length:20},(function(t,o){return o+1+e.length})))},hasMore:!(e.length>=1e3),loader:(0,n.jsx)("h4",{children:"Loading..."}),children:e.map((function(e,t){return(0,n.jsx)(h.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{height:"100%",component:"img",image:"http://assets.iotabots.io/compressed/".concat(t+1,".png"),alt:"IOTABOT"}),(0,n.jsx)(a.Z,{sx:{flexGrow:1},children:(0,n.jsx)(p.Z,{gutterBottom:!0,variant:"h6",component:"h3",children:"IOTABOT #".concat(t+1)})})]})},e)}))})},y=function(){return(0,n.jsx)(i.Z,{children:(0,n.jsx)(s.Box,{py:11,display:"flex",alignItems:"center",children:(0,n.jsx)(s.Container,{maxWidth:"sm",children:(0,n.jsxs)(s.Box,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,n.jsx)(s.Typography,{variant:"h2",gutterBottom:!0,children:"IOTABOTS"}),(0,n.jsx)(w,{})]})})})})}}},function(e){e.O(0,[774,888,179],(function(){return t=91420,e(e.s=t);var t}));var t=e.O();_N_E=t}]);