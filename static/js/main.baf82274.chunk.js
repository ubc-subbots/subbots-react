(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){},134:function(e,a,t){},147:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},168:function(e,a,t){},177:function(e,a,t){},178:function(e,a,t){},179:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(28),l=t.n(r),o=(t(99),t(25)),c=t(10),s=t(11),m=t(13),u=t(12),d=t(14),p=t(40),b=t.n(p),E=t(15),h=t.n(E),g=t(2),f=t.n(g),v=t(19),N=t(41),C=(t(104),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"FooterContainer"},i.a.createElement(b.a,{fluid:!0},i.a.createElement(h.a,{className:"IconRow"},i.a.createElement(f.a,{sm:3,className:"my-auto"},i.a.createElement("div",{className:"CopyrightText"},"Copyright \xa9 UBC Subbots 2018")),i.a.createElement(f.a,null,i.a.createElement("a",{href:"https://www.facebook.com/ubc.subbots/"},i.a.createElement(v.a,{className:"Icon",icon:N.a,size:"2x"})),i.a.createElement("a",{href:"https://github.com/ubc-subbots"},i.a.createElement(v.a,{className:"Icon",icon:N.b,size:"2x"})),i.a.createElement("a",{href:"https://ca.linkedin.com/company/ubc-subbots"},i.a.createElement(v.a,{className:"Icon",icon:N.c,size:"2x"}))),i.a.createElement(f.a,{sm:3}))))}}]),a}(i.a.Component)),y=t(42),j=t.n(y),O=t(32),q=t.n(O),w=t(31),S=t.n(w),x=t(24),k=t.n(x),T=t(35),B=t.n(T),L=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(B.a,{show:this.props.isOpen},i.a.createElement(B.a.Header,{closeButton:!0},i.a.createElement(B.a.Title,null,"Modal title")),i.a.createElement(B.a.Body,null,i.a.createElement("p",null,"Modal body text goes here.")),i.a.createElement(B.a.Footer,null,i.a.createElement(k.a,{variant:"secondary"},"Close"),i.a.createElement(k.a,{variant:"primary"},"Save changes")))}}]),a}(i.a.Component),F=t(20),I=(t(134),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={navbarClass:"HeaderContainer",navbrandClass:"NavBrand",isSignInOpened:!1},window.onscroll=function(){document.body.scrollTop>60||document.documentElement.scrollTop>60?(t.setState({navbarClass:"HeaderContainerShrunk"}),t.setState({navbrandClass:"NavBrandShrunk"})):(t.setState({navbarClass:"HeaderContainer"}),t.setState({navbrandClass:"NavBrand"}))},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(j.a,{fixed:"top",expand:"lg",className:this.state.navbarClass},i.a.createElement(j.a.Brand,{className:"NavBrandContainer"},i.a.createElement(o.b,{to:"/",className:this.state.navbrandClass},i.a.createElement(v.a,{className:"SubbotsLogo",icon:F.b,size:"lg"})," UBC Subbots")),i.a.createElement(j.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(q.a,{className:"mr-auto"},i.a.createElement(q.a.Link,{className:"NavContainer"},i.a.createElement(o.b,{to:"/",className:"NavLink"},"Home")),i.a.createElement(q.a.Link,{className:"NavContainer"},i.a.createElement(o.b,{to:"/projects",className:"NavLink"},"Projects")),i.a.createElement(q.a.Link,{className:"NavContainer"},i.a.createElement(o.b,{to:"/teams",className:"NavLink"},"The Teams")),i.a.createElement(q.a.Link,{className:"NavContainer"},i.a.createElement(o.b,{to:"/join",className:"NavLink"},"Join Us")),i.a.createElement(q.a.Link,{className:"NavContainer"},i.a.createElement(o.b,{to:"/sponsors",className:"NavLink"},"Sponsorship"))),i.a.createElement(k.a,{className:"SignInButton",variant:"outline-warning",onClick:function(){return e.setState({isSignInOpened:!0})}},"Member Sign In"),i.a.createElement(L,{show:this.state.isSignInOpened}),i.a.createElement("a",{href:"https://www.ubc.ca/"},i.a.createElement(S.a,{className:"UBCLogo",src:"/subbots-website/images/ubc-logo.png"}))))}}]),a}(i.a.Component)),H=(t(147),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.a,null,i.a.createElement(f.a,{sm:1}),i.a.createElement(f.a,{sm:10}),i.a.createElement(f.a,{sm:1})),i.a.createElement(h.a,null,i.a.createElement(f.a,{sm:1}),i.a.createElement(f.a,{sm:10},i.a.createElement("div",{className:"ViewHeaderImageContainer"},i.a.createElement(S.a,{className:"ViewHeaderImage",src:"/subbots-website/images/"+this.props.image,alt:"Error!"}))),i.a.createElement(f.a,{sm:1}),i.a.createElement("div",{className:"ViewHeaderTitle"},this.props.title)),i.a.createElement(h.a,null,i.a.createElement(f.a,{sm:1}),i.a.createElement(f.a,{s:10},i.a.createElement("div",{className:"ViewHeaderBlurb"},this.props.blurb)),i.a.createElement(f.a,{sm:1})))}}]),a}(i.a.Component)),A={FADE_DURATION:1600,ELECTRICAL_TEAM:"Electrical",SOFTWARE_TEAM:"Software",MECHANICAL_TEAM:"Mechanical"},M=t(91),_=t.n(M);function R(e){return i.a.createElement("div",{className:"ViewContainer"},i.a.createElement(_.a,{bottom:!0,duration:A.FADE_DURATION},i.a.createElement(b.a,{fluid:!0,className:"p-0"},e.children)))}t(150);function U(e){return i.a.createElement(k.a,{className:"ContactButton",variant:"warning"},i.a.createElement("div",{className:"ContactText"},i.a.createElement(v.a,{className:"MailIcon",icon:F.c,size:"lg"}),"Contact Us"))}var D=t(29),G=t(92),W={home:{image:"software.jpg",title:"Welcome To UBC Subbots",blurb:" (Home Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum.",pitch:{image:"mechanical.jpg",header:"Why Subbots?",body:" (Home Pitch) Lorem ipsum dolor sit amet, consectetur adipiscing elit,                sed do eiusmod tempor incididunt ut labore et dolore magna                aliqua. Ut enim ad minim veniam, quis nostrud exercitation                ullamco laboris nisi ut aliquip ex ea commodo consequat.                Duis aute irure dolor in reprehenderit in voluptate velit esse                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat                cupidatat non proident, sunt in culpa qui officia deserunt mollit                anim id est laborum. Excepteur sint occaecat cupidatat non proident,                 sunt in culpa qui officia deserunt mollit anim id est laborum."},goal:{image:"electrical.jpg",header:"Our Goal",body:" (Home Goals) Lorem ipsum dolor sit amet, consectetur adipiscing elit,                sed do eiusmod tempor incididunt ut labore et dolore magna                aliqua. Ut enim ad minim veniam, quis nostrud exercitation                ullamco laboris nisi ut aliquip ex ea commodo consequat.                Duis aute irure dolor in reprehenderit in voluptate velit esse                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat                cupidatat non proident, sunt in culpa qui officia deserunt mollit                anim id est laborum. Excepteur sint occaecat cupidatat non proident,                 sunt in culpa qui officia deserunt mollit anim id est laborum.                Duis aute irure dolor in reprehenderit in voluptate velit esse                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat                cupidatat non proident, sunt in culpa qui officia deserunt mollit                anim id est laborum. Excepteur sint occaecat cupidatat non proident,                 sunt in culpa qui officia deserunt mollit anim id est laborum."}},projects:{image:"mechanical.jpg",title:"See What We Make",blurb:" (Projects Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum."},teams:{image:"electrical.jpg",title:"See What Our Members Do",blurb:" (Teams Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum.",software:{blurb:" (Software Blurb) Lorem ipsum dolor sit amet, consectetur.",body:" (Software Body) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit                 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},electrical:{blurb:"(Electrical Blurb) Lorem ipsum dolor sit amet, consectetur.",body:" (Electrical Body) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit                 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},mechanical:{blurb:"(Mechanical Blurb) Lorem ipsum dolor sit amet, consectetur.",body:" (Mechanical Body) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit                 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},join:{image:"software.jpg",title:"Become Part Of The Team",blurb:" (Join Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum."},sponsors:{image:"electrical.jpg",title:"See Who Makes Us Possible",blurb:" (Sponsors Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum.",sponsor_list:[{image:"ubc_walter_gage.png",link:"http://waltergagebook.engineering.ubc.ca/walter-gage-memorial-bursary-in-engineering/"},{image:"subc.png",link:"https://subc.ca/"},{image:"ubc-applied-sciences-footer-logo.png",link:"https://apsc.ubc.ca/"},{image:"ubc-applied-sciences-footer-logo.png",link:"https://apsc.ubc.ca/"}]}},P=(t(151),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(R,null,i.a.createElement(H,{title:W.home.title,blurb:W.home.blurb,image:W.home.image}),i.a.createElement("div",{className:"HomeSeperator"}),i.a.createElement(h.a,null,i.a.createElement(f.a,{sm:1}),i.a.createElement(f.a,{sm:4},i.a.createElement("div",{className:"HomeImageContainer"},i.a.createElement(S.a,{className:"HomeImage",src:"/subbots-website/images/"+W.home.pitch.image}))),i.a.createElement(f.a,null,i.a.createElement("div",{className:"PitchHeader"},W.home.pitch.header),i.a.createElement("div",{className:"PitchBody"},W.home.pitch.body)),i.a.createElement(f.a,{sm:2})),i.a.createElement("div",{className:"SeperatorTop"}),i.a.createElement("div",{className:"GoalContainer"},i.a.createElement("h4",{className:"GoalHeader"},i.a.createElement(v.a,{icon:F.e}),"  "+W.home.goal.header),i.a.createElement("hr",null),i.a.createElement(h.a,null,i.a.createElement(f.a,{sm:7},i.a.createElement("div",{className:"GoalBody"},W.home.goal.body)),i.a.createElement(f.a,{sm:5},i.a.createElement("div",{className:"HomeImageContainer"},i.a.createElement(S.a,{className:"HomeImage",src:"/subbots-website/images/"+W.home.goal.image}))))),i.a.createElement("div",{className:"SeperatorBottom"}))}}]),a}(i.a.Component)),z=t(26),J=t.n(z),V=t(7),Y=t.n(V),K=t(93),Q=t.n(K),X=(t(168),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={validated:!1,first_name:"",last_name:"",email:"",year:0,team:"",reason:""},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"onFirstNameChange",value:function(e){this.setState({first_name:e.target.value})}},{key:"onLastNameChange",value:function(e){this.setState({last_name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onYearChange",value:function(e){this.setState({year:e.target.value})}},{key:"onTeamChange",value:function(e){this.setState({team:e.target.value})}},{key:"onReasonChange",value:function(e){this.setState({reason:e.target.value})}},{key:"onFormSubmit",value:function(e){if(e.preventDefault(),!0===e.currentTarget.checkValidity()){var a={first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,year:this.state.year,team:this.state.team,reason:this.state.reason};Q.a.post("/rest/join",a).then(function(e){console.log(e);var a=e.data.signee_email.status,t=e.data.subbot_email.status;a||t?!a&&t?alert("INFO: Subbots has recieved your infomation, but your personal confirmation failed to send"):a&&!t||alert("Success! Your application has been sent"):alert("ERROR: An unexpected email error has occured. Please try again in a few minutes")}).catch(function(e){console.log(e)})}else console.log("invalid form");this.setState({validated:!0})}},{key:"render",value:function(){return i.a.createElement(R,null,i.a.createElement(H,{title:W.join.title,blurb:W.join.blurb,image:W.join.image}),i.a.createElement(h.a,null,i.a.createElement(f.a,{sm:3}),i.a.createElement(f.a,{sm:6},i.a.createElement("div",{className:"JoinFormBorder"},i.a.createElement(J.a,{className:"JoinFormContainer"},i.a.createElement(J.a.Header,{className:"JoinFormHeader"},"UBC Subbots 2019-2020 Application"),i.a.createElement(Y.a,{noValidate:!0,validated:this.state.validated,className:"JoinForm",onSubmit:this.onFormSubmit.bind(this)},i.a.createElement(Y.a.Row,null,i.a.createElement(Y.a.Group,{as:f.a},i.a.createElement(Y.a.Label,null,"First Name *"),i.a.createElement(Y.a.Control,{onChange:this.onFirstNameChange.bind(this),placeholder:"Enter first name",required:!0}),i.a.createElement(Y.a.Control.Feedback,{type:"invalid"},"Required Field")),i.a.createElement(Y.a.Group,{as:f.a},i.a.createElement(Y.a.Label,null,"Last Name * "),i.a.createElement(Y.a.Control,{onChange:this.onLastNameChange.bind(this),placeholder:"Enter last name",required:!0}),i.a.createElement(Y.a.Control.Feedback,{type:"invalid"},"Required Field"))),i.a.createElement(Y.a.Group,{controlId:"formBasicEmail"},i.a.createElement(Y.a.Label,null,"Email address * "),i.a.createElement(Y.a.Control,{onChange:this.onEmailChange.bind(this),type:"email",placeholder:"Enter email",required:!0}),i.a.createElement(Y.a.Control.Feedback,{type:"invalid"},"Required Field")),i.a.createElement(Y.a.Row,null,i.a.createElement(Y.a.Group,{as:f.a},i.a.createElement(Y.a.Label,null,"Year *"),i.a.createElement(Y.a.Control,{onChange:this.onYearChange.bind(this),as:"select",required:!0},i.a.createElement("option",{selected:!0,disabled:!0,hidden:!0}),i.a.createElement("option",null,"1"),i.a.createElement("option",null,"2"),i.a.createElement("option",null,"3"),i.a.createElement("option",null,"4"),i.a.createElement("option",null,"5"),i.a.createElement("option",null,"6")),i.a.createElement(Y.a.Control.Feedback,{type:"invalid"},"Required Field")),i.a.createElement(Y.a.Group,{as:f.a},i.a.createElement(Y.a.Label,null,"Desired Team *"),i.a.createElement(Y.a.Control,{onChange:this.onTeamChange.bind(this),as:"select",required:!0},i.a.createElement("option",{selected:!0,disabled:!0,hidden:!0}),i.a.createElement("option",null,A.ELECTRICAL_TEAM),i.a.createElement("option",null,A.SOFTWARE_TEAM),i.a.createElement("option",null,A.MECHANICAL_TEAM)),i.a.createElement(Y.a.Control.Feedback,{type:"invalid"},"Required Field"))),i.a.createElement(Y.a.Group,{controlId:"exampleForm.ControlTextarea1"},i.a.createElement(Y.a.Label,null,"Reason for Application"),i.a.createElement(Y.a.Control,{onChange:this.onReasonChange.bind(this),style:{resize:"none"},as:"textarea",rows:"4",placeholder:"Tell us why you want to join"})),i.a.createElement(k.a,{className:"PrimaryButton",variant:"warning",type:"submit"},i.a.createElement("div",{className:"ApplyButtonText"},"Apply")))))),i.a.createElement(f.a,{sm:3})))}}]),a}(i.a.Component)),Z=(t(177),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(R,null,i.a.createElement(H,{title:W.projects.title,blurb:W.projects.blurb,image:W.projects.image}))}}]),a}(i.a.Component)),$=(t(85),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(f.a,{sm:3},i.a.createElement("a",{href:this.props.link},i.a.createElement(J.a,{className:"SponsorCard"},i.a.createElement(J.a.Body,{className:"SponsorCardBody"},i.a.createElement("img",{className:"SponsorImage",src:"/subbots-website/sponsors/"+this.props.image,alt:"Sponsor"})))))}}]),a}(i.a.Component)),ee=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=W.sponsors.sponsor_list.map(function(e,a){return i.a.createElement($,{key:a,image:e.image,link:e.link})});return i.a.createElement(R,null,i.a.createElement(H,{title:W.sponsors.title,blurb:W.sponsors.blurb,image:W.sponsors.image}),i.a.createElement(h.a,null,i.a.createElement(f.a,{sm:2}),i.a.createElement(f.a,{sm:8},i.a.createElement(h.a,{className:"SponsorRow"},e)),i.a.createElement(f.a,{sm:2})))}}]),a}(i.a.Component),ae=(t(86),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).icons={Software:F.d,Mechanical:F.f,Electrical:F.a},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(f.a,null,i.a.createElement(J.a,{className:"TeamCard"},i.a.createElement(J.a.Header,{className:"TeamCardHeader"},this.props.team),i.a.createElement(J.a.Body,null,i.a.createElement(v.a,{className:"TeamIcon",icon:this.icons[this.props.team],size:"6x"}),i.a.createElement(J.a.Text,{className:"TeamText"},W.teams[this.props.team.toLowerCase()].blurb),i.a.createElement(k.a,{className:"SecondaryButton",variant:"primary",href:"#"+this.props.team},"Learn More"))))}}]),a}(i.a.Component)),te=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).icons={Software:F.d,Mechanical:F.f,Electrical:F.a},t.names={Software:"Software Team",Mechanical:"Mechanical Team",Electrical:"Electrical Team"},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{id:this.props.team,className:"HeaderBuffer"}),i.a.createElement(f.a,null,i.a.createElement("h3",{className:"TeamBodyHeader my-auto"},i.a.createElement(v.a,{className:"TeamIcon",icon:this.icons[this.props.team],size:"lg"}),this.names[this.props.team]),i.a.createElement("hr",null),i.a.createElement(h.a,null,i.a.createElement(f.a,{sm:6},i.a.createElement("h4",{className:"text-center"},"What We Do"),i.a.createElement("div",{className:"TeamBodyFrame"})),i.a.createElement(f.a,{sm:6},i.a.createElement("h4",{className:"text-center"},"What You'll Learn"),i.a.createElement("div",{className:"TeamBodyFrame"}))),i.a.createElement("div",{className:"TeamBodyText"},W.teams[this.props.team.toLowerCase()].body)))}}]),a}(i.a.Component),ne=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(R,null,i.a.createElement(H,{title:W.teams.title,blurb:W.teams.blurb,image:W.teams.image}),i.a.createElement(h.a,null,i.a.createElement(f.a,{sm:2}),i.a.createElement(f.a,{sm:8},i.a.createElement(h.a,null,i.a.createElement(ae,{team:"Software"}),i.a.createElement(ae,{team:"Electrical"}),i.a.createElement(ae,{team:"Mechanical"}))),i.a.createElement(f.a,{sm:2})),i.a.createElement("div",{className:"SeperatorTop"}),i.a.createElement("div",{className:"TeamBodyContainer"},i.a.createElement(te,{team:"Software"}),i.a.createElement(te,{team:"Electrical"}),i.a.createElement(te,{team:"Mechanical"})),i.a.createElement("div",{className:"SeperatorBottom"}))}}]),a}(i.a.Component);function ie(){return i.a.createElement("main",null,i.a.createElement(G.a,null),i.a.createElement(D.c,null,i.a.createElement(D.a,{exact:!0,path:"/",component:P}),i.a.createElement(D.a,{path:"/teams",component:ne}),i.a.createElement(D.a,{path:"/projects",component:Z}),i.a.createElement(D.a,{path:"/sponsors",component:ee}),i.a.createElement(D.a,{path:"/join",component:X})))}t(178);l.a.render(i.a.createElement(function(){return console.log("/subbots-website"),i.a.createElement("div",{className:"App"},i.a.createElement(o.a,{basename:"/subbots-website"},i.a.createElement(I,null),i.a.createElement(ie,null),i.a.createElement(U,null),i.a.createElement(C,null)))},null),document.getElementById("root"))},85:function(e,a,t){},86:function(e,a,t){},94:function(e,a,t){e.exports=t(179)},99:function(e,a,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.baf82274.chunk.js.map