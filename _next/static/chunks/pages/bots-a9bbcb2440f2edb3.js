(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{91420:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bots",function(){return n(6936)}])},2133:function(e,t,n){"use strict";var o=n(85893),r=(n(67294),n(27680)),s=(0,r.makeStyles)((function(e){return{root:{background:e.palette.background.gradient,flexGrow:1,flexShrink:1,display:"flex",flexDirection:"column",justifyContent:"center"}}}));t.Z=function(e){var t=e.children,n=s();return(0,o.jsx)(r.Box,{className:n.root,children:t})}},6936:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var o=n(85893),r=n(67294),s=n(27680),i=n(2133),l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var a=function(){return(a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var c="Pixel",h="Percent",p={unit:h,value:.8};function u(e){return"number"===typeof e?{unit:h,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:c,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:h,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),p):(console.warn("scrollThreshold should be string or number"),p)}var d=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,o){var r,s=!1,i=0;function l(){r&&clearTimeout(r)}function a(){var a=this,c=Date.now()-i,h=arguments;function p(){i=Date.now(),n.apply(a,h)}function u(){r=void 0}s||(o&&!r&&p(),l(),void 0===o&&c>e?p():!0!==t&&(r=setTimeout(o?u:p,void 0===o?e-c:e)))}return"boolean"!==typeof t&&(o=n,n=t,t=void 0),a.cancel=function(){l(),s=!0},a}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?a(a({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=u(t);return o.unit===c?e.scrollTop<=o.value+n-e.scrollHeight+1:e.scrollTop<=o.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=u(t);return o.unit===c?e.scrollTop+n>=e.scrollHeight-o.value:e.scrollTop+n>=o.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=a({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},r.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&r.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},r.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(r.Component);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,s=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(a){r=!0,s=a}finally{try{o||null==l.return||l.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(){var e=f(r.useState(Array.from({length:42},(function(e,t){return t+1}))),2),t=e[0],n=e[1];return(0,o.jsx)(d,{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",textAlign:"center",justifyContent:"center"},dataLength:t.length,next:function(){n(t.concat(Array.from({length:24},(function(e,n){return n+1+t.length}))))},hasMore:t.length<=1e3,loader:(0,o.jsx)("h4",{children:"Loading..."}),children:t.map((function(e){return(0,o.jsx)(s.Grid,{item:!0,xs:4,sm:3,md:2,children:(0,o.jsxs)(s.Card,{sx:{minHeight:"100px",height:"100%",padding:"2px"},children:[(0,o.jsx)(s.CardMedia,{sx:{height:"100%"},image:"http://assets.iotabots.io/compressed/".concat(e,".png")}),(0,o.jsx)(s.CardContent,{sx:{minHeight:"100px",flexGrow:1}})]})},e)}))})},g=function(){return(0,o.jsx)(i.Z,{children:(0,o.jsx)(s.Box,{py:6,display:"flex",alignItems:"center",children:(0,o.jsx)(s.Container,{maxWidth:"md",children:(0,o.jsxs)(s.Box,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,o.jsx)(s.Typography,{gutterBottom:!0,variant:"h1",children:"IOTABOTS"}),(0,o.jsx)(s.Typography,{variant:"body1",children:"Discover all IOTABOTS."}),(0,o.jsx)(m,{})]})})})})}}},function(e){e.O(0,[774,888,179],(function(){return t=91420,e(e.s=t);var t}));var t=e.O();_N_E=t}]);