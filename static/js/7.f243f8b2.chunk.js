(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(e,t,a){"use strict";var r=a(3),n=a(4),o=a(7),c=a(6),l=a(8),s=a(0),i=a.n(s),u=a(18),m=a.n(u),d=a(217),p=a.n(d),g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={shareButton:!1},a.shareLink=function(e){navigator.share&&navigator.share({url:e.link}).then(function(){return console.log("Successful share")}).catch(function(e){return console.log("Error sharing",e)})},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){navigator.share&&this.setState({shareButton:!0})}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,this.state.shareButton&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns nav-home-btn",style:{position:"relative"},onClick:function(){return e.shareLink(e.props)}},i.a.createElement("i",{className:"si si-share"}),i.a.createElement(m.a,{duration:"500"})))}}]),t}(s.Component),h=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-12 p-0 fixed",style:{zIndex:"9"}},i.a.createElement("div",{className:"block m-0"},i.a.createElement("div",{className:"block-content p-0 ".concat(this.props.dark&&"nav-dark")},i.a.createElement("div",{className:"input-group ".concat(this.props.boxshadow&&"search-box")},!this.props.disable_back_button&&i.a.createElement("div",{className:"input-group-prepend"},this.props.back_to_home&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/")},200)}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(m.a,{duration:"500"})),this.props.goto_orders_page&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/my-orders")},200)}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(m.a,{duration:"500"})),this.props.goto_accounts_page&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/my-account")},200)}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(m.a,{duration:"500"})),!this.props.back_to_home&&!this.props.goto_orders_page&&!this.props.goto_accounts_page&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns ".concat(this.props.dark&&"nav-dark"),style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.goBack()},200)}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(m.a,{duration:"500"}))),i.a.createElement("p",{className:"form-control search-input d-flex align-items-center ".concat(this.props.dark&&"nav-dark")},this.props.logo&&i.a.createElement("img",{src:"/assets/img/logos/logo.png",alt:localStorage.getItem("storeName"),width:"120"}),this.props.has_title?i.a.createElement(i.a.Fragment,null,this.props.from_checkout?i.a.createElement("span",{className:"nav-page-title"},localStorage.getItem("cartToPayText")," ",i.a.createElement("span",{style:{color:localStorage.getItem("storeColor")}},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),this.props.title,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))):i.a.createElement("span",{className:"nav-page-title"},this.props.title)):null,this.props.has_delivery_icon&&i.a.createElement(p.a,{left:!0},i.a.createElement("img",{src:"/assets/img/various/delivery-bike.png",alt:this.props.title,className:"nav-page-title"}))),this.props.has_restaurant_info?i.a.createElement("div",{className:"fixed-restaurant-info hidden",ref:function(t){e.heading=t}},i.a.createElement("span",{className:"font-w700 fixedRestaurantName"},this.props.restaurant.name),i.a.createElement("br",null),i.a.createElement("span",{className:"font-w400 fixedRestaurantTime"},i.a.createElement("i",{className:"si si-clock"})," ",this.props.restaurant.delivery_time," ",localStorage.getItem("homePageMinsText"))):null,i.a.createElement("div",{className:"input-group-append"},!this.props.disable_search&&i.a.createElement("button",{type:"submit",className:"btn search-navs-btns",style:{position:"relative"}},i.a.createElement("i",{className:"si si-magnifier"}),i.a.createElement(m.a,{duration:"500"})),this.props.homeButton&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns nav-home-btn",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/")},200)}},i.a.createElement("i",{className:"si si-home"}),i.a.createElement(m.a,{duration:"500"})),this.props.shareButton&&i.a.createElement(g,{link:window.location.href})))))))}}]),t}(s.Component);h.contextTypes={router:function(){return null}};t.a=h},218:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e){if(e){var t=parseFloat(e);return t=t.toFixed(2)}return 0}},221:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var r=a(99),n=a(218),o=function(e){return function(t){var a={productQuantity:e.reduce(function(e,t){return++e},0),totalPrice:e.reduce(function(e,t){var a=0;return t.selectedaddons&&t.selectedaddons.map(function(e){return a+=parseFloat(e.price)}),e+=t.price*t.quantity+a*t.quantity,e=parseFloat(e),Object(n.a)(e),e},0)};t({type:r.a,payload:a})}}},222:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return o}),a.d(t,"c",function(){return c});var r=a(61),n=function(e){return{type:r.b,payload:e}},o=function(e){return{type:r.a,payload:e}},c=function(e){return function(t){return console.log("From action",e),t({type:r.c,payload:e})}}},226:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"c",function(){return s}),a.d(t,"b",function(){return i});var r=a(80),n=a(9),o=a(5),c=a.n(o),l=function(e,t,a,o){return function(l){return c.a.post(n.d,{token:e,coupon:t,restaurant_id:a,subtotal:o}).then(function(e){var t=e.data;return[l({type:r.a,payload:t}),l({type:r.b,payload:null})]}).catch(function(e){if(console.log(e),401===e.response.status)return l({type:r.b,payload:"NOTLOGGEDIN"})})}},s=function(){return function(e){console.log("Triggred Coupon Removed");return e({type:r.a,payload:{hideMessage:!0,coupon_error:""}})}},i=function(e,t){return function(a){return e.appliedAmount=t,a({type:r.a,payload:e})}}},234:function(e,t,a){"use strict";var r=a(3),n=a(4),o=a(7),c=a(6),l=a(8),s=a(0),i=a.n(s),u=a(192),m=a(42),d=a(168),p=a(16),g=a(58),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={withLinkToRestaurant:!1,isFavorite:!1},a.fixedRestaurantInfo=function(e){a.child&&(e?a.child.heading.classList.add("hidden"):a.child.heading.classList.remove("hidden"))},a.scrollFunc=function(){if(document.documentElement.scrollTop>55){a.fixedRestaurantInfo(!1)}if(document.documentElement.scrollTop<55){a.fixedRestaurantInfo(!0)}},a.setFavoriteRestaurant=function(){var e=a.props,t=e.restaurant_info,r=e.user;r.success&&(t.is_favorited?a.refs.heartIcon.classList.remove("is-active"):a.refs.heartIcon.classList.add("is-active"),a.props.setFavoriteRest(r.data.auth_token,t.id))},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.setState({withLinkToRestaurant:this.props.withLinkToRestaurant}),this.props.history.location.state&&this.props.history.location.state.fromExplorePage&&this.setState({withLinkToRestaurant:this.props.history.location.state.fromExplorePage}),this.registerScrollEvent()}},{key:"componentWillUnmount",value:function(){this.removeScrollEvent()}},{key:"registerScrollEvent",value:function(){window.addEventListener("scroll",this.scrollFunc)}},{key:"removeScrollEvent",value:function(){window.removeEventListener("scroll",this.scrollFunc)}},{key:"render",value:function(){var e=this,t=this.props,a=t.history,r=t.restaurant,n=t.user;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"bg-white"},i.a.createElement(u.a,{ref:function(t){e.child=t},history:a,boxshadow:!1,has_restaurant_info:!0,restaurant:r,disable_search:!0,homeButton:!0,shareButton:!0}),0===r.length?i.a.createElement(m.a,{height:170,width:400,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},i.a.createElement("rect",{x:"20",y:"70",rx:"4",ry:"4",width:"80",height:"78"}),i.a.createElement("rect",{x:"144",y:"85",rx:"0",ry:"0",width:"115",height:"18"}),i.a.createElement("rect",{x:"144",y:"115",rx:"0",ry:"0",width:"165",height:"16"})):i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{to:"../../stores/"+r.slug,className:this.state.withLinkToRestaurant?"":"no-click"},i.a.createElement("div",{className:"d-flex pt-50"},i.a.createElement("div",{className:"px-15 mt-5"},i.a.createElement("img",{src:r.image,alt:r.name,className:"restaurant-image mt-0"})),i.a.createElement("div",{className:"mt-5 pb-15 w-100"},i.a.createElement("h4",{className:"font-w600 mb-5 text-dark"},r.name),i.a.createElement("div",{className:"font-size-sm text-muted truncate-text text-muted"},r.description),1===r.is_pureveg&&i.a.createElement("p",{className:"mb-0"},i.a.createElement("span",{className:"font-size-sm pr-1 text-muted"},localStorage.getItem("pureVegText")),i.a.createElement("img",{src:"/assets/img/various/pure-veg.png",alt:"PureVeg",style:{width:"20px"}})),i.a.createElement("div",{className:"text-center restaurant-meta mt-5 d-flex align-items-center justify-content-between text-muted"},"0"===r.avgRating?i.a.createElement("div",{className:"col-2 p-0 text-left"},i.a.createElement("i",{className:"fa fa-star",style:{color:localStorage.getItem("storeColor")}})," ",r.rating):i.a.createElement(d.a,{to:"/reviews/"+r.slug,style:{display:"contents"},className:"yes-click"},i.a.createElement("div",{className:"col-2 p-0 text-left store-rating-block"},i.a.createElement("i",{className:"fa fa-star",style:{color:localStorage.getItem("storeColor")}})," ",r.avgRating)),i.a.createElement("div",{className:"col-4 p-0 text-center store-distance-block"},i.a.createElement("i",{className:"si si-clock"})," ",r.delivery_time," ",localStorage.getItem("homePageMinsText")),i.a.createElement("div",{className:"col-6 p-0 text-center store-avgprice-block"},i.a.createElement("i",{className:"si si-wallet"})," ","left"===localStorage.getItem("currencySymbolAlign")&&i.a.createElement(i.a.Fragment,null,localStorage.getItem("currencyFormat"),r.price_range," "),"right"===localStorage.getItem("currencySymbolAlign")&&i.a.createElement(i.a.Fragment,null,r.price_range,localStorage.getItem("currencyFormat")," "),localStorage.getItem("homePageForTwoText")))))),n.success&&i.a.createElement("span",{onClick:this.setFavoriteRestaurant},i.a.createElement("div",{ref:"heartIcon",className:"heart ".concat(r.is_favorited&&"is-active")})))),"<p><br></p>"!==r.custom_message&&"null"!==r.custom_message&&""!==r.custom_message&&i.a.createElement("div",{style:{position:"relative",background:"#fff"},dangerouslySetInnerHTML:{__html:r.custom_message}}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.restaurant_info!==t.restaurant_info?{data:e.restaurant_info}:null}}]),t}(s.Component);t.a=Object(p.b)(function(e){return{restaurant_info:e.items.restaurant_info,user:e.user.user}},{setFavoriteRest:g.l})(h)},245:function(e,t,a){"use strict";var r=a(3),n=a(4),o=a(7),c=a(6),l=a(8),s=a(0),i=a.n(s),u=a(18),m=a.n(u),d=a(193),p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1},a._processAddons=function(e){var t=[];t.selectedaddons=[];for(var r=document.querySelectorAll("input[type=radio]:checked"),n=0;n<r.length;n++)t.selectedaddons.push({addon_category_name:r[n].name,addon_id:r[n].getAttribute("data-addon-id"),addon_name:r[n].getAttribute("data-addon-name"),price:r[n].value});for(var o=document.querySelectorAll("input[type=checkbox]:checked"),c=0;c<o.length;c++)t.selectedaddons.push({addon_category_name:o[c].name,addon_id:o[c].getAttribute("data-addon-id"),addon_name:o[c].getAttribute("data-addon-name"),price:o[c].value});a.props.addProduct(Object.assign(t,e))},a.handlePopupOpen=function(){a.setState({open:!0})},a.handlePopupClose=function(){a.setState({open:!1}),a.props.forceUpdate()},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.props.product;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{type:"button",className:"btn btn-add-remove",style:{color:localStorage.getItem("cartColor-bg")},onClick:this.handlePopupOpen},i.a.createElement("span",{className:"btn-inc"},"+"),i.a.createElement(m.a,{duration:"500"})),i.a.createElement(d.a,{open:this.state.open,onClose:this.handlePopupClose,closeIconSize:32},i.a.createElement("div",{style:{marginTop:"5rem",textAlign:"left"}},i.a.createElement("h3",{className:"mb-2"},localStorage.getItem("customizationHeading")),i.a.createElement("hr",{className:"mb-30 mt-10",style:{borderColor:"#ccc"}}),t.addon_categories.map(function(e){return i.a.createElement("div",{key:e.id,className:"addon-category-block"},i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"addon-category-name mb-2"},e.name),e.addons.length&&i.a.createElement(i.a.Fragment,null,e.addons.map(function(t,a){return i.a.createElement(i.a.Fragment,{key:t.id},i.a.createElement("div",{className:"form-group addon-list"},i.a.createElement("input",{type:"SINGLE"===e.type?"radio":"checkbox",className:"SINGLE"===e.type?"magic-radio":"magic-checkbox",name:e.name,"data-addon-id":t.id,"data-addon-name":t.name,value:t.price,defaultChecked:"SINGLE"===e.type&&0===a&&!0,id:"uId".concat(e.id),onClick:function(){if(e.addon_limit>0)for(var t=e.id,a=document.querySelectorAll("#uId"+t),r=e.addon_limit,n=0;n<a.length;n++){a[n].onclick=function(){if(document.querySelectorAll("#uId"+t+":checked").length>=r+1)return!1}}}}),"SINGLE"===e.type&&i.a.createElement("label",{htmlFor:t.name}),i.a.createElement("label",{className:"text addon-label",htmlFor:t.name},t.name," ",i.a.createElement("span",{className:"addon-label-price ml-1"},"true"===localStorage.getItem("hidePriceWhenZero")&&"0.00"===t.price?null:i.a.createElement(i.a.Fragment,null,"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),t.price," ","right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))))))})),i.a.createElement("hr",{className:"mb-20"})))}),i.a.createElement("button",{className:"btn btn-lg btn-customization-done",onClick:function(){e._processAddons(t),e.handlePopupClose()},style:{backgroundColor:localStorage.getItem("cartColorBg"),color:localStorage.getItem("cartColorText")}},localStorage.getItem("customizationDoneBtnText")))))}}]),t}(s.Component);t.a=p},254:function(e,t,a){"use strict";var r=a(3),n=a(4),o=a(7),c=a(6),l=a(8),s=a(0),i=a.n(s),u=a(222),m=a(49),d=a(18),p=a.n(d),g=a(16),h=a(218),f=a(221),v=a(348),b=a(226),y=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={isOpen:!1,removeProductFromPreviousRestaurant:!1,open:!1,product:[]},a.openFloatCart=function(){a.setState({isOpen:!0})},a.closeFloatCart=function(){a.setState({isOpen:!1})},a.handlePopup=function(){a.setState({open:!a.state.open})},a.addProduct=function(e){var t=a.props,r=t.cartProducts,n=t.updateCart;localStorage.setItem("cleared","false");var o=!1,c=!1,l=!0;r.forEach(function(t){l&&(e.restaurant_id===t.restaurant_id&&localStorage.setItem("activeRestaurant",e.restaurant_id),t.restaurant_id===e.restaurant_id?t.id===e.id&&JSON.stringify(t.selectedaddons)===JSON.stringify(e.selectedaddons)&&(t.quantity+=1,o=!0,c=!1):(a.setState({removeProductFromPreviousRestaurant:!0,open:!0}),c=!0,l=!1,a.setState({product:e})))}),o||c||(localStorage.setItem("activeRestaurant",e.restaurant_id),r.push(e)),l&&n(r),a.openFloatCart()},a.removeProduct=function(e){var t=a.props,r=t.cartProducts,n=t.updateCart,o=r.findIndex(function(t){return t.id===e.id});o>=0&&(r.forEach(function(t){t.id===e.id&&(1===t.quantity?r.splice(o,1):t.quantity-=e.quantity)}),n(r),r.length<1&&(a.closeFloatCart(),localStorage.removeItem("activeRestaurant")))},a.getTotalItemsInCart=function(){if("true"===localStorage.getItem("countQuantityAsTotalItemsOnCart")){var e=0;return a.props.cartProducts.forEach(function(t){e+=t.quantity}),e}return a.props.cartTotal.productQuantity},a.clearCart=function(){var e=a.props,t=e.cartProducts,r=e.updateCart,n=e.removeCoupon;t.splice(0,t.length),a.closeFloatCart(),n(),setTimeout(function(){r(t)},500),a.addProduct(a.state.product),a.openFloatCart(),a.setState({open:!a.state.open,product:[]}),localStorage.setItem("cleared","true")},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.cartProducts.length&&this.setState({isOpen:!0})}},{key:"componentWillReceiveProps",value:function(e){e.newProduct!==this.props.newProduct&&this.addProduct(e.newProduct),e.productToRemove!==this.props.productToRemove&&this.removeProduct(e.productToRemove)}},{key:"render",value:function(){var e=this.props,t=e.cartTotal,a=e.cartProducts,r=["float-cart"];return this.state.isOpen&&r.push("float-cart--open"),i.a.createElement(i.a.Fragment,null,this.state.removeProductFromPreviousRestaurant&&i.a.createElement(i.a.Fragment,null,i.a.createElement(v.a,{fullWidth:!0,fullScreen:!1,open:this.state.open,onClose:this.state.handlePopup,style:{width:"100%",margin:"auto"},PaperProps:{style:{backgroundColor:"#fff",borderRadius:"4px"}}},i.a.createElement("div",{className:"container",style:{borderRadius:"5px",height:"200px"}},i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"px-10 col-12 py-3 d-flex justify-content-between align-items-center"},i.a.createElement("h1",{className:"mt-2 mb-0 font-weight-black h4"},localStorage.getItem("cartReplaceItemTitle"))),i.a.createElement("div",{className:"px-10 mb-20"},localStorage.getItem("cartReplaceItemSubTitle")),i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement("div",{className:"text-center mr-4"},i.a.createElement("button",{className:"btn clear-cart-btn",onClick:this.handlePopup,style:{borderColor:localStorage.getItem("storeColor")}},localStorage.getItem("cartReplaceItemActionNo"))),i.a.createElement("div",{className:"text-center"},i.a.createElement("button",{className:"btn clear-cart-btn text-white",onClick:this.clearCart,style:{backgroundColor:localStorage.getItem("storeColor"),borderColor:localStorage.getItem("storeColor")}},localStorage.getItem("cartReplaceItemActionYes")))))))),i.a.createElement("div",{className:r.join(" "),style:{backgroundColor:localStorage.getItem("cartColorBg"),color:localStorage.getItem("cartColorText")}},a.length?i.a.createElement(m.a,{to:"/cart",delay:200,className:"text-white"},i.a.createElement("span",null,this.getTotalItemsInCart()," ",localStorage.getItem("floatCartItemsText")),i.a.createElement("span",{className:"pl-5 pr-5"},"\xa0|\xa0"),i.a.createElement("span",null,"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),Object(h.a)(t.totalPrice),"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")),i.a.createElement("span",{className:"pull-right"},localStorage.getItem("floatCartViewCartText")," ",i.a.createElement("i",{className:"si si-basket"})),i.a.createElement(p.a,{duration:"500"})):i.a.createElement("span",null,"\xa0")))}}]),t}(s.Component);t.a=Object(g.b)(function(e){return{cartProducts:e.cart.products,newProduct:e.cart.productToAdd,productToRemove:e.cart.productToRemove,cartTotal:e.total.data}},{loadCart:u.b,updateCart:f.a,removeProduct:u.c,removeCoupon:b.c})(y)},255:function(e,t,a){"use strict";var r=a(3),n=a(4),o=a(7),c=a(6),l=a(8),s=a(0),i=a.n(s),u=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"item-badge-collection"},1===this.props.item.is_recommended?i.a.createElement("span",{className:"item-badge",style:{backgroundColor:localStorage.getItem("recommendedBadgeColor")}},localStorage.getItem("recommendedBadgeText")):null,1===this.props.item.is_popular?i.a.createElement("span",{className:"item-badge",style:{backgroundColor:localStorage.getItem("popularBadgeColor")}},localStorage.getItem("popularBadgeText")):null,1===this.props.item.is_new?i.a.createElement("span",{className:"item-badge",style:{backgroundColor:localStorage.getItem("newBadgeColor")}},localStorage.getItem("newBadgeText")):null))}}]),t}(s.Component);t.a=u}}]);