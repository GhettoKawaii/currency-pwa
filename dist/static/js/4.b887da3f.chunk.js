(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{84:function(e,n,t){},85:function(e,n,t){},86:function(e,n,t){},89:function(e,n,t){"use strict";t.r(n);var a=t(23),c=t(77),r=t(78),l=t(87),u=t(79),i=t(88),o=t(1),s=t.n(o),m=t(39),p=t(80),E=t.n(p),d=t(82),b=t.n(d),g=t(83),C=t.n(g),h=(t(84),t(22));t(85);function v(e){var n=e.img_url,t=e.currName,a=(e.greetings,e.RUB),c=e.USD,r=e.UAH,l=e.selectCoin,u=e.className;return s.a.createElement("div",{className:u,onClick:function(){return l(t)}},s.a.createElement("div",{className:"curr-face"},s.a.createElement("img",{src:n,alt:"currency"}),s.a.createElement("span",null,t)),s.a.createElement("div",{className:"curr-values-container"},s.a.createElement("div",null,s.a.createElement("p",null,"USD: "),s.a.createElement("p",null,"UAH: "),s.a.createElement("p",null,"RUB: ")),s.a.createElement("div",null,s.a.createElement("p",null,c),s.a.createElement("p",null,r),s.a.createElement("p",null,a))))}t(86);function f(e){var n=e.currName,t=e.selectCurrency,a=e.className;return s.a.createElement("button",{className:a,onClick:function(){return t(n)}},n)}var y=[{url:"https://endotech.io/img/coinicon/BTC.png",name:"BTC"},{url:"https://endotech.io/img/coinicon/ETH.png",name:"ETH"},{url:"https://endotech.io/img/coinicon/XRP.png",name:"XRP"}],N=["USD","UAH","RUB"],U=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={selectedCoin:null,selectedCurrency:null,volume:""},t.handleChange=function(e){t.setState({volume:e.target.value})},t.selectCoin=function(e){t.setState({selectedCoin:e})},t.selectCurrency=function(e){t.setState({selectedCurrency:e})},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.getCoinsTriggered()}},{key:"render",value:function(){var e=this,n=this.state,t=n.selectedCoin,c=n.selectedCurrency,r=n.volume,l=[];return this.props.isLoading||(l=[Object(a.a)({},this.props.currencies.BTC,y[0]),Object(a.a)({},this.props.currencies.ETH,y[1]),Object(a.a)({},this.props.currencies.XRP,y[2])]),s.a.createElement(o.Fragment,null,s.a.createElement("h1",null,"Currency Conversion"),s.a.createElement("div",{className:"currencies-block"},l.map(function(n,a){return s.a.createElement(E.a,null,s.a.createElement(v,{className:n.name===t?"currency-block-wrapper active-block":"currency-block-wrapper",key:a,img_url:n.url,currName:n.name,RUB:n.RUB,USD:n.USD,UAH:n.UAH,selectCoin:e.selectCoin}))})),t&&s.a.createElement(s.a.Fragment,null,s.a.createElement(C.a,{top:!0},s.a.createElement("h2",null,"Selected Coin: ",t),s.a.createElement("div",{className:"volume"},s.a.createElement("label",null,"Volume:"),s.a.createElement("input",{type:"number",onChange:this.handleChange,value:r}))),s.a.createElement(C.a,{bottom:!0},s.a.createElement("div",{className:"buttons-block"},N.map(function(n,t){return s.a.createElement(f,{currName:n,key:t,selectCurrency:e.selectCurrency,className:c===n?"currency-button active":"currency-button"})}))),c&&r.length>0&&s.a.createElement(b.a,null,s.a.createElement("p",{className:"result"},s.a.createElement("b",null,"".concat(r," ").concat(t))," will be"," ",s.a.createElement("b",null,(Number(r)*l[l.findIndex(function(e){return e.name===t})][c]).toFixed(2)),"\xa0in ",s.a.createElement("b",null,c)))))}}]),n}(o.Component);n.default=Object(m.b)(function(e){return{isLoading:e.getCoins.isLoading,currencies:e.getCoins.data}},function(e){return{getCoinsTriggered:function(){e(Object(h.d)())}}})(U)}}]);
//# sourceMappingURL=4.b887da3f.chunk.js.map