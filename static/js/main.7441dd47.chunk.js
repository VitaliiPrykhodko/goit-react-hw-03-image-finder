(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{15:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__163D_"}},16:function(e,t,a){e.exports={overlay:"Modal_overlay__2dQ55",modal:"Modal_modal__37GbI"}},27:function(e,t,a){e.exports={img:"ImageGalleryItem_img__TF_Va"}},28:function(e,t,a){e.exports={btn:"Button_btn__15KUL"}},5:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__3Slxq",form:"Searchbar_form__2Lk2u",buttonForm:"Searchbar_buttonForm__30XNH",input:"Searchbar_input__2W8Qg",buttonIcon:"Searchbar_buttonIcon__DXr_i"}},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),o=a.n(c),i=a(17),s=a(6),u=a(7),l=a(9),h=a(8),g=a(10),m=(a(35),a(5)),d=a.n(m),p=a(26),b=a(0),f=a(2),j=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleInput=function(t){e.setState({query:t.currentTarget.value.trim()})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.query;""!==a?(e.props.onSubmit(a),e.setState({query:""})):g.b.error("Enter the data in the form!")},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(f.jsx)("header",{className:d.a.searchbar,children:Object(f.jsxs)("form",{className:d.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsx)("button",{type:"submit",className:d.a.buttonForm,children:Object(f.jsx)(b.b.Provider,{value:{className:d.a.buttonIcon},children:Object(f.jsx)("span",{className:d.a.buttonLabel,children:Object(f.jsx)(p.a,{})})})}),Object(f.jsx)("input",{onChange:this.handleInput,className:d.a.input,type:"text",autoComplete:"off",autoFocus:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Search images and photos",name:"query",value:e})]})})}}]),a}(n.Component),v=a(27),y=a.n(v),O=function(e){var t=e.webformatURL,a=e.user,n=e.largeImageURL;return Object(f.jsx)("img",{className:y.a.img,src:t,alt:a,"data-image":n})},_=a(15),x=a.n(_),I=function(e){var t=e.pictures,a=e.handleLargeImage;return Object(f.jsx)("ul",{className:x.a.gallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.user,c=e.largeImageURL;return Object(f.jsx)("li",{onClick:function(){return a(c,r)},className:x.a.galleryItem,children:Object(f.jsx)(O,{webformatURL:n,user:r,largeImageURL:c,handleLargeImage:a})},t)}))})},w=a(28),L=a.n(w),k=function(e){var t=e.onClick;return Object(f.jsx)("button",{onClick:t,className:L.a.btn,children:"Load more"})},S=a(29),C=a.n(S),N="23495092-fcdd3993ee353ca97f61af1fc",U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return C.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(N,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits.map((function(e){return e}))}))},R=a(30),F=a.n(R),P=function(){return Object(f.jsx)(F.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})},q=a(16),D=a.n(q),A=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.largeImage,a=e.alt;return Object(f.jsx)("div",{className:D.a.overlay,onClick:this.handleBackdropClick,children:Object(f.jsx)("div",{className:D.a.modal,children:Object(f.jsx)("img",{src:t,alt:a})})})}}]),a}(n.Component),Q=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pictures:[],page:1,searchQuery:"",isLoading:!1,largeImage:"",alt:""},e.handleInput=function(t){e.setState({searchQuery:t,page:1,pictures:[]})},e.filterPictures=function(e){return e.map((function(e){return{id:e.id,webformatURL:e.webformatURL,user:e.user,largeImageURL:e.largeImageURL}}))},e.fetchPictures=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({isLoading:!0}),U(a,n).then((function(t){0===t.length&&g.b.warning("\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e!"),e.setState((function(a){return{pictures:[].concat(Object(i.a)(a.pictures),Object(i.a)(e.filterPictures(t)))}}))})).catch((function(e){return g.b.error(e.message)})).finally((function(){e.setState({isLoading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.changePage=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleLargeImage=function(t,a){e.setState({largeImage:t,alt:a})},e.closeModal=function(){return e.setState({largeImage:"",alt:""})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.searchQuery,n=this.state.searchQuery,r=t.page,c=this.state.page;a===n&&r===c||this.fetchPictures()}},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.isLoading,n=e.largeImage,r=e.alt;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(j,{onSubmit:this.handleInput}),a&&Object(f.jsx)(P,{}),t.length>0&&Object(f.jsx)(I,{pictures:t,handleLargeImage:this.handleLargeImage}),t.length>11&&Object(f.jsx)(k,{onClick:this.changePage}),n&&Object(f.jsx)(A,{largeImage:n,alt:r,onClose:this.closeModal}),Object(f.jsx)(g.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),a}(n.Component),B=Q;a(75);o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.7441dd47.chunk.js.map