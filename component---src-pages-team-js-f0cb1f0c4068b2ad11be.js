(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(A,e,a){"use strict";a.r(e);a(204);var t=a(7),n=a.n(t),c=a(0),r=a.n(c),i=a(4),s=a.n(i),d=a(183),o=a(148),f=a(178),E=a.n(f),l=(a(74),a(75),a(76),a(388)),g=a(174),u=a.n(g),B=a(177),j=a.n(B),Q=a(176),p=a.n(Q),b=a(173),x=a.n(b),m=a(182),h=a.n(m),w=a(145),Y=function(A){var e=A.classes;return r.a.createElement(u.a,{className:e.card},r.a.createElement(p.a,null,r.a.createElement(w.StaticQuery,{query:"2146450380",render:function(e){var a=e.images.edges.find(function(e){return e.node.relativePath.includes(A.image)});if(!a)return null;var t=a.node.childImageSharp.sizes;return r.a.createElement(h.a,{alt:A.alt,sizes:t})},data:l})),r.a.createElement(j.a,null,r.a.createElement(x.a,{className:e.text+" "+e.nameTag,gutterBottom:!0,variant:"h2",component:"h2"},A.name),r.a.createElement(x.a,{className:e.text,component:"p"},A.description)))};Y.propTypes={name:s.a.string.isRequired,position:s.a.string,description:s.a.string.isRequired,image:s.a.string.isRequired};var N=Object(o.withStyles)({card:{width:"100%",backgroundColor:"rgba(0,0,0,0)"},media:{objectFit:"cover"},text:{color:"white",textAlign:"center"},nameTag:{fontSize:"24px",fontWeight:"bold"}})(Y);a.d(e,"query",function(){return C});var D=function(A){function e(){for(var e,a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];return(e=A.call.apply(A,[this].concat(t))||this).getTeamMembers=function(A){return r.a.createElement(E.a,{item:!0,xs:12,md:4,lg:4,key:A.name},r.a.createElement(N,{name:A.name,description:A.description,image:A.image}))},e}return n()(e,A),e.prototype.render=function(){var A=this.props.classes,e=this.props.data;return r.a.createElement("div",{className:"container "+A.root},r.a.createElement("div",{className:"row"},r.a.createElement(d.b,{className:A.heading,variant:"h1",style:{color:"white"}},"Team")),r.a.createElement(E.a,{container:!0,spacing:24},e.site.siteMetadata.members.map(this.getTeamMembers)))},e}(c.Component);D.propTypes={classes:s.a.object.isRequired};var C="95458132";e.default=Object(o.withStyles)({root:{flexGrow:1},heading:{width:"100%",textAlign:"center",padding:"40px"}})(D)},145:function(A,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return g}),a.d(e,"StaticQueryContext",function(){return E}),a.d(e,"StaticQuery",function(){return l});var t=a(0),n=a.n(t),c=a(4),r=a.n(c),i=a(142),s=a.n(i);a.d(e,"Link",function(){return s.a}),a.d(e,"withPrefix",function(){return i.withPrefix}),a.d(e,"navigate",function(){return i.navigate}),a.d(e,"push",function(){return i.push}),a.d(e,"replace",function(){return i.replace}),a.d(e,"navigateTo",function(){return i.navigateTo});var d=a(149),o=a.n(d);a.d(e,"PageRenderer",function(){return o.a});var f=a(32);a.d(e,"parsePath",function(){return f.a});var E=n.a.createContext({}),l=function(A){return n.a.createElement(E.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}l.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},149:function(A,e,a){var t;A.exports=(t=a(157))&&t.default||t},157:function(A,e,a){"use strict";a.r(e);a(33);var t=a(0),n=a.n(t),c=a(4),r=a.n(c),i=a(54),s=a(2),d=function(A){var e=A.location,a=s.default.getResourcesForPathnameSync(e.pathname);return n.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json))};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=d},174:function(A,e,a){"use strict";var t=a(8);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}});var n=t(a(389))},175:function(A,e,a){"use strict";var t=a(8);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}});var n=t(a(390))},176:function(A,e,a){"use strict";var t=a(8);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}});var n=t(a(391))},177:function(A,e,a){"use strict";var t=a(8);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}});var n=t(a(392))},178:function(A,e,a){"use strict";var t=a(8);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}});var n=t(a(393))},204:function(A,e,a){var t=a(24).f,n=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in n||a(16)&&t(n,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(A){return""}}})},388:function(A){A.exports={data:{images:{edges:[{node:{relativePath:"logo.png",name:"logo",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEJklEQVQ4y32Ua0wcVRTHZ2kBjY2amPQDUYgsqDS0SotAuw8wTTU+CrWPtDGKtoG2lJ19Duzu7O6dKbDCNkBi1rZQsaSEkooYKwW2u4BQWinCFpYiIIo1JhI/9YPGRxqM1/88FvnkTU7uOZN7fvM/58wdRjcQTWCwdANT+3T9UyWSv6t/ismPzDL/t4y9t5W8/inDroFoscJQWJKTAvsRplXjJGnPi8wmHWrtTHZyjkSWiBstPmEDLNniJRviYAAfBXAMgp5eexsAVbBlVekj8IO6/klrfjjWsO9iD+dwufwA1gJ2HBaAmcw+gTMJNS8r0MmrqMqzHtgBG1XLfQLQr/DmUEE4ZjnhD6Qh2Q8LWnzkDGAnzV5ShPhnACukHH3fZBtU9jAqIBuwYewhNX4ccQBA587Q9Pk93UPvVXPcQSjkAbECGsTugtUAuFcW1Df5MXLGkPuqBDiG4D72O2rJkmKNDB+Ibiq8eiuRwmfJ6UT07iHYJsCSXu/sYw61dMYHgx5G58DoYPThmRLD8DcUD/7Gg+2KSnVa65bdza/5Nt6jWTeUTOT+brzxrcToYbIDrc/rrk8vF95alh58oR5KQF+Y7PGfmPL6Js16QHwdbQw+plZxwfDlPJVE7eydOMKkVzpb9YN3S40ji1RVykoH0b+N61WhzByUexl2BeVf8rGndkvfny40TYvGf5Byg9pKVwmTaRd6tSzfYhxddBbe/I7qrs9I0D0yhVINAFsA64D9Ve2vp876M9TlsB3NHZrfhhb9WTR+jxrHlpozHWJZhtXXxmRyp5/MtJEHGaw7aBxZOKYLy0CKsvMlZllD82ZAa2H/cHXvU7vbHUyb/TUbMKoPx6g+MuvIMHu8GTayCpY8AybdLuZq7cKqttJ5WX9togiDWtGF7lDDtQkZihIdNrGGcoJI3206ey4/cvcPYyS2tKOl25puct9MtwkPoLBYac5hUUOpg3nFKRgBXkwzub9+obGt2DA4G9NBgbF3fDdUhTh/A7XzHvrW2fYbLw7OdWW5/O2pLL/yjEMM7XcLL8msclEZ3htOIdmBW4Ab8Fl+tRh9ivXce05oNhsisfmC0PTq/rZP3rTynl9c9QFaKdYFU6zk83SLd2WvW+xyEtJUTYhB4tSJAsrxCjL1uEdIwbW6WOUjC0c84kSGmb+dVX+eNYRnfssLx8L4dFp8jc20nCftWXbSfdIrfArYB6e8Qo48vwmBqfASpWrWS9a+szKPkMoTYionNT5tBdeQd6nPWTA0d7+0+dyHbgzF5BMbHEQ4ANj2eA6EaA67STxQHDOUSr+n+KHBgPjwa966Z1PfOZGTN7zQcvBC1yj+Ot+bxNod8TOcT0gwqxUiFwyiOHFD+XILqsh/YGltG1naeuCjKyJvZXOluJQXNFbAJP9tXgEBLJ/9Fz+iL9QzfUHbAAAAAElFTkSuQmCC",aspectRatio:1.1027131782945736,src:"/static/44c5138cdf417ba06b1a69f2ac14c25b/1e875/logo.png",srcSet:"/static/44c5138cdf417ba06b1a69f2ac14c25b/5f5eb/logo.png 150w,\n/static/44c5138cdf417ba06b1a69f2ac14c25b/07cb7/logo.png 300w,\n/static/44c5138cdf417ba06b1a69f2ac14c25b/1e875/logo.png 600w,\n/static/44c5138cdf417ba06b1a69f2ac14c25b/4ddaa/logo.png 900w,\n/static/44c5138cdf417ba06b1a69f2ac14c25b/bfb6f/logo.png 1200w,\n/static/44c5138cdf417ba06b1a69f2ac14c25b/6ae68/logo.png 1800w,\n/static/44c5138cdf417ba06b1a69f2ac14c25b/b55d3/logo.png 2845w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"utkarsh.jpg",name:"utkarsh",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBQT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHaos4TSBm2hMH/xAAdEAADAAEFAQAAAAAAAAAAAAABAgMEABAREiEk/9oACAEBAAEFAiQolZa7OV6yYLXVT9OR7HHPMP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB4QAAIBAwUAAAAAAAAAAAAAAAABEQIQEiIxQVFh/9oACAEBAAY/Am3shxKfttXI8p6TtQhlMn//xAAcEAEAAwACAwAAAAAAAAAAAAABABEhEEExUWH/2gAIAQEAAT8hcqgtiwBOhWcEZ4Yr3KpBfg4XVgk0HrSO1bU//9oADAMBAAIAAwAAABDgCAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAEAAwADAAMAAAAAAAAAAAABABEhQVFhMXGx/9oACAEBAAE/ELCQJ0ENOt7z2PI/MuPTyLU8BGbQ4NK1LXyNOjjOblB7TO7GIcN1+LLPmN/Sk//Z",aspectRatio:1,src:"/static/ee4c2a8f25ed6ecde586ec1fd5ba60bb/3e5d5/utkarsh.jpg",srcSet:"/static/ee4c2a8f25ed6ecde586ec1fd5ba60bb/8bbd3/utkarsh.jpg 150w,\n/static/ee4c2a8f25ed6ecde586ec1fd5ba60bb/03d0a/utkarsh.jpg 300w,\n/static/ee4c2a8f25ed6ecde586ec1fd5ba60bb/3e5d5/utkarsh.jpg 600w,\n/static/ee4c2a8f25ed6ecde586ec1fd5ba60bb/614ba/utkarsh.jpg 900w,\n/static/ee4c2a8f25ed6ecde586ec1fd5ba60bb/7138d/utkarsh.jpg 1200w,\n/static/ee4c2a8f25ed6ecde586ec1fd5ba60bb/70313/utkarsh.jpg 1800w,\n/static/ee4c2a8f25ed6ecde586ec1fd5ba60bb/3aad5/utkarsh.jpg 3637w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"seanchok.jpg",name:"seanchok",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEA//EABcBAQEBAQAAAAAAAAAAAAAAAAIEAQP/2gAMAwEAAhADEAAAAbEOngCuMxZ3jkjuivn/AP/EABwQAAMAAgMBAAAAAAAAAAAAAAECAwQSABARMv/aAAgBAQABBQKlNAa2Do265EyT9GKOk2HvMZR1/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BCE//xAAYEQACAwAAAAAAAAAAAAAAAAABEAIRIf/aAAgBAgEBPwG0Tkl//8QAHhAAAQMEAwAAAAAAAAAAAAAAAQACERASIUETUWH/2gAIAQEABj8Cxl3Su5J8QcNoO0FEKDijjuYp/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARMSFBUf/aAAgBAQABPyE0MHIo817TIGIELqasBEi3OQgwvkBN+lRlvQhDJ//aAAwDAQACAAMAAAAQ/wDHAP/EABkRAQACAwAAAAAAAAAAAAAAAAEAEBEhMf/aAAgBAwEBPxAUzE3Oyv/EABkRAQEBAAMAAAAAAAAAAAAAAAEAITFBwf/aAAgBAgEBPxBYw5Iad+scX//EABoQAQEBAAMBAAAAAAAAAAAAAAERACExYXH/2gAIAQEAAT8QJgWmZeZfhnlEVaw7JnstBpYNyPIHe5yasBV9xmw3lZj80oPM4ZQC9HmBHzf/2Q==",aspectRatio:1,src:"/static/0382e4a04a3ccfae4249b3b39ba07094/3e5d5/seanchok.jpg",srcSet:"/static/0382e4a04a3ccfae4249b3b39ba07094/8bbd3/seanchok.jpg 150w,\n/static/0382e4a04a3ccfae4249b3b39ba07094/03d0a/seanchok.jpg 300w,\n/static/0382e4a04a3ccfae4249b3b39ba07094/3e5d5/seanchok.jpg 600w,\n/static/0382e4a04a3ccfae4249b3b39ba07094/614ba/seanchok.jpg 900w,\n/static/0382e4a04a3ccfae4249b3b39ba07094/b0776/seanchok.jpg 960w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"gela.jpg",name:"gela",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAQX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAYr4OnbHnqxeLMgL/8QAHBAAAgIDAQEAAAAAAAAAAAAAAQIAAxESEzEy/9oACAEBAAEFAsaVo5rXpmM4tXngbmVfXjFRP//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAEDAQE/AWP/xAAXEQADAQAAAAAAAAAAAAAAAAAAEBEh/9oACAECAQE/AYY//8QAHhAAAgAGAwAAAAAAAAAAAAAAAAECERIgMkFRYXH/2gAIAQEABj8Cm34Up62ZRC5O7f/EAB0QAAICAgMBAAAAAAAAAAAAAAABESExQXGBofD/2gAIAQEAAT8h3RNJHotIXIOhtAoFsWLbTFljiO0JfgwImY+k/9oADAMBAAIAAwAAABA/8EL/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQUf/aAAgBAwEBPxCIK9xH/8QAGBEBAQADAAAAAAAAAAAAAAAAAAEhMWH/2gAIAQIBAT8Qyq8Iu3//xAAdEAEBAAICAwEAAAAAAAAAAAABEQAhMVFBYfCB/9oACAEBAAE/EGmgqWRZ5dTHBhCbRDcft4hQJGTeEfNiLx3gtBVug9GaREGcrrCV+bzgGk8/mDoBaujtn//Z",aspectRatio:1,src:"/static/51260249bc26fefea8671c6f36beac95/3e5d5/gela.jpg",srcSet:"/static/51260249bc26fefea8671c6f36beac95/8bbd3/gela.jpg 150w,\n/static/51260249bc26fefea8671c6f36beac95/03d0a/gela.jpg 300w,\n/static/51260249bc26fefea8671c6f36beac95/3e5d5/gela.jpg 600w,\n/static/51260249bc26fefea8671c6f36beac95/614ba/gela.jpg 900w,\n/static/51260249bc26fefea8671c6f36beac95/7138d/gela.jpg 1200w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"siddhant.jpg",name:"siddhant",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABxuIzqmyzm7Q2Cf/EABoQAQADAQEBAAAAAAAAAAAAAAEAAhEDISL/2gAIAQEAAQUCr5YYpszU4kProUrW2E//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/AbCiz//EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwEj/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEQITGR/9oACAEBAAY/At7OIosSZSMP/8QAHRAAAgIDAAMAAAAAAAAAAAAAAAERITFBYVFxkf/aAAgBAQABPyFrYaCXaubrQyzaX0pNRmWSUV/RCzb4WlCfgSVAch//2gAMAwEAAgADAAAAEKAXw//EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAwEBPxBSI1P/xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QDSGf/8QAHxABAAICAgIDAAAAAAAAAAAAAQARITFBUXGRobHB/9oACAEBAAE/EGtMixBW2XlVFzudZl0G7tfkFYd2WX2sMvsdLHPxOUHK0qBZNrSAKAV3fmNv0T//2Q==",aspectRatio:1,src:"/static/6fd078aee05c54dfd405935dc66065cf/3e5d5/siddhant.jpg",srcSet:"/static/6fd078aee05c54dfd405935dc66065cf/8bbd3/siddhant.jpg 150w,\n/static/6fd078aee05c54dfd405935dc66065cf/03d0a/siddhant.jpg 300w,\n/static/6fd078aee05c54dfd405935dc66065cf/3e5d5/siddhant.jpg 600w,\n/static/6fd078aee05c54dfd405935dc66065cf/614ba/siddhant.jpg 900w,\n/static/6fd078aee05c54dfd405935dc66065cf/7138d/siddhant.jpg 1200w,\n/static/6fd078aee05c54dfd405935dc66065cf/70313/siddhant.jpg 1800w,\n/static/6fd078aee05c54dfd405935dc66065cf/6c61b/siddhant.jpg 1983w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"uzair.jpg",name:"uzair",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABhXTHNmmOtzzUyg//xAAeEAABAwQDAAAAAAAAAAAAAAACAAEDBBAREhMhIv/aAAgBAQABBQIfTak7aiap4Q4myhQdRS2//8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQMBAT8BI//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB4QAAIBBAMBAAAAAAAAAAAAAAARAQIhMYEQEpGh/9oACAEBAAY/Ao6zodKUfRsipXyVLDyy9zR5x//EAB0QAAIDAAIDAAAAAAAAAAAAAAERACExQVFhcaH/2gAIAQEAAT8hJTlXaNiERWIK9bGPIRTHrqVgSEjyAeoQANrdqCobXYaa8PjgKn//2gAMAwEAAgADAAAAEHjoPP/EABcRAAMBAAAAAAAAAAAAAAAAAAAQESH/2gAIAQMBAT8QimP/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhEP/aAAgBAgEBPxB2GrBc/8QAHRABAAMAAwADAAAAAAAAAAAAAQARIUFxkTFRsf/aAAgBAQABPxAjjdrjPlK2/uLFQIujOuGHPgA/H25V4MBstxKirE6Id9Ody47rR4upQy0S1a5KgAWM1tKXq/kQUVP/2Q==",aspectRatio:1,src:"/static/368ee07fc4e42d22de9bd03492403921/3e5d5/uzair.jpg",srcSet:"/static/368ee07fc4e42d22de9bd03492403921/8bbd3/uzair.jpg 150w,\n/static/368ee07fc4e42d22de9bd03492403921/03d0a/uzair.jpg 300w,\n/static/368ee07fc4e42d22de9bd03492403921/3e5d5/uzair.jpg 600w,\n/static/368ee07fc4e42d22de9bd03492403921/614ba/uzair.jpg 900w,\n/static/368ee07fc4e42d22de9bd03492403921/7138d/uzair.jpg 1200w,\n/static/368ee07fc4e42d22de9bd03492403921/b1034/uzair.jpg 1632w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"cheema.jpg",name:"cheema",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUEBgH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABs5J+Q6pORy3hVQJ//8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAAwQREhP/2gAIAQEAAQUCZtJj2Ox3L8nkU5JVvURjtoGPP//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB4QAAEDBAMAAAAAAAAAAAAAAAEAEDECESEiUXGB/9oACAEBAAY/AiRwtzfxjSJWYYsOl//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExQVFx/9oACAEBAAE/IehDCKQBWNJWfEZfIPpluoMCdjIfZbibDxP/2gAMAwEAAgADAAAAENTQg//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAEDAQE/ECP/xAAYEQACAwAAAAAAAAAAAAAAAAAAARAhUf/aAAgBAgEBPxBrC5//xAAdEAEAAwACAwEAAAAAAAAAAAABABEhMWEQQcHh/9oACAEBAAE/EHMi5tu1Fliy1HPj4FJqzTlj13NwMAOYDTQEj92qWZdHJzR+E//Z",aspectRatio:1,src:"/static/80c7cfbf3aecf5b4f9af6664bd1717c9/3e5d5/cheema.jpg",srcSet:"/static/80c7cfbf3aecf5b4f9af6664bd1717c9/8bbd3/cheema.jpg 150w,\n/static/80c7cfbf3aecf5b4f9af6664bd1717c9/03d0a/cheema.jpg 300w,\n/static/80c7cfbf3aecf5b4f9af6664bd1717c9/3e5d5/cheema.jpg 600w,\n/static/80c7cfbf3aecf5b4f9af6664bd1717c9/614ba/cheema.jpg 900w,\n/static/80c7cfbf3aecf5b4f9af6664bd1717c9/7138d/cheema.jpg 1200w,\n/static/80c7cfbf3aecf5b4f9af6664bd1717c9/70313/cheema.jpg 1800w,\n/static/80c7cfbf3aecf5b4f9af6664bd1717c9/bfc21/cheema.jpg 3024w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"krishna.jpg",name:"krishna",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQFAQIG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAZ8GZWy9CwortQq2DP8A/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDBAARMTIz/9oACAEBAAEFArEpjZ53cJ0soGezAEEfnbXbRprBx//EABURAQEAAAAAAAAAAAAAAAAAABAB/9oACAEDAQE/ASH/xAAWEQEBAQAAAAAAAAAAAAAAAAAQARH/2gAIAQIBAT8Bwp//xAAeEAACAQMFAAAAAAAAAAAAAAAAAQIRMXEQEiFRYf/aAAgBAQAGPwJdUPBYI7rCcKsjgXLsXbzp/8QAHBAAAgMBAQEBAAAAAAAAAAAAAAERITFRQXGh/9oACAEBAAE/IXNN7DFLh1nT8IdDYiBs6nV+Ho4MOcIUk3FmDH4f/9oADAMBAAIAAwAAABBIyAD/xAAYEQACAwAAAAAAAAAAAAAAAAABEBExQf/aAAgBAwEBPxCoKwv/xAAXEQEAAwAAAAAAAAAAAAAAAAAQASEx/9oACAECAQE/ELSYP//EAB4QAQACAgIDAQAAAAAAAAAAAAEAESExYZFRcbHw/9oACAEBAAE/EPBYHNwwsDECn2ZP+KjOnBF4t3fRE12rNVvdHPUsHtn6JdEhSwpz6l7iQanbetzETBT5P//Z",aspectRatio:1,src:"/static/9114ef4603579b4cc0eeb67a10c1ff39/918f3/krishna.jpg",srcSet:"/static/9114ef4603579b4cc0eeb67a10c1ff39/68e0f/krishna.jpg 150w,\n/static/9114ef4603579b4cc0eeb67a10c1ff39/f7af8/krishna.jpg 300w,\n/static/9114ef4603579b4cc0eeb67a10c1ff39/918f3/krishna.jpg 400w",sizes:"(max-width: 400px) 100vw, 400px"}}}},{node:{relativePath:"rajat.jpg",name:"rajat",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAeNKWowLUltw1nCf/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAAxESIRP/2gAIAQEAAQUChUgRUObBsnlZKu2PyrYz/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHRABAAIBBQEAAAAAAAAAAAAAAQAxQQIQESEykf/aAAgBAQAGPwKC01t2PEAxRPGr5AYOVlz/xAAcEAADAAEFAAAAAAAAAAAAAAAAARFBITFhkfH/2gAIAQEAAT8hjE9TtEIc2RK2qxB6UTHG4LD3COUf/9oADAMBAAIAAwAAABBzOMP/xAAYEQACAwAAAAAAAAAAAAAAAAAAEQEQMf/aAAgBAwEBPxBCIyv/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPxAFj//EAB0QAQACAwADAQAAAAAAAAAAAAEAESExUWFxwfD/2gAIAQEAAT8QxXTHkgVPEtxisxMqTHuKh7St552fpPkuMtoX4YaZtrwK1MiaJ//Z",aspectRatio:1,src:"/static/9f52353296c3ed12de7ba2e9e954a1fc/3e5d5/rajat.jpg",srcSet:"/static/9f52353296c3ed12de7ba2e9e954a1fc/8bbd3/rajat.jpg 150w,\n/static/9f52353296c3ed12de7ba2e9e954a1fc/03d0a/rajat.jpg 300w,\n/static/9f52353296c3ed12de7ba2e9e954a1fc/3e5d5/rajat.jpg 600w,\n/static/9f52353296c3ed12de7ba2e9e954a1fc/614ba/rajat.jpg 900w,\n/static/9f52353296c3ed12de7ba2e9e954a1fc/07a83/rajat.jpg 1184w",sizes:"(max-width: 600px) 100vw, 600px"}}}}]}}}},389:function(A,e,a){"use strict";var t=a(8);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.styles=void 0;var n=t(a(141)),c=t(a(143)),r=t(a(0)),i=(t(a(4)),t(a(146))),s=t(a(175)),d=t(a(147)),o={root:{overflow:"hidden"}};function f(A){var e=A.classes,a=A.className,t=A.raised,d=(0,c.default)(A,["classes","className","raised"]);return r.default.createElement(s.default,(0,n.default)({className:(0,i.default)(e.root,a),elevation:t?8:1},d))}e.styles=o,f.defaultProps={raised:!1};var E=(0,d.default)(o,{name:"MuiCard"})(f);e.default=E},390:function(A,e,a){"use strict";var t=a(8);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.styles=void 0;var n=t(a(52)),c=t(a(143)),r=t(a(141)),i=t(a(0)),s=(t(a(4)),t(a(146))),d=(t(a(51)),a(144),t(a(147))),o=function(A){var e={};return A.shadows.forEach(function(A,a){e["elevation".concat(a)]={boxShadow:A}}),(0,r.default)({root:{backgroundColor:A.palette.background.paper},rounded:{borderRadius:A.shape.borderRadius}},e)};function f(A){var e=A.classes,a=A.className,t=A.component,d=A.square,o=A.elevation,f=(0,c.default)(A,["classes","className","component","square","elevation"]),E=(0,s.default)(e.root,e["elevation".concat(o)],(0,n.default)({},e.rounded,!d),a);return i.default.createElement(t,(0,r.default)({className:E},f))}e.styles=o,f.defaultProps={component:"div",elevation:2,square:!1};var E=(0,d.default)(o,{name:"MuiPaper"})(f);e.default=E},391:function(A,e,a){"use strict";var t=a(8);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.styles=void 0;var n=t(a(52)),c=t(a(141)),r=t(a(143)),i=t(a(0)),s=(t(a(4)),t(a(146))),d=(t(a(51)),a(144),t(a(147))),o={root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"}};e.styles=o;var f=["video","audio","picture","iframe","img"];function E(A){var e=A.classes,a=A.className,t=A.component,d=A.image,o=A.src,E=A.style,l=(0,r.default)(A,["classes","className","component","image","src","style"]),g=-1!==f.indexOf(t),u=!g&&d?(0,c.default)({backgroundImage:'url("'.concat(d,'")')},E):E;return i.default.createElement(t,(0,c.default)({className:(0,s.default)(e.root,(0,n.default)({},e.media,g),a),style:u,src:g?d||o:void 0},l))}E.defaultProps={component:"div"};var l=(0,d.default)(o,{name:"MuiCardMedia"})(E);e.default=l},392:function(A,e,a){"use strict";var t=a(8);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.styles=void 0;var n=t(a(141)),c=t(a(143)),r=t(a(0)),i=(t(a(4)),t(a(146))),s=(a(144),t(a(147))),d={root:{padding:16,"&:last-child":{paddingBottom:24}}};function o(A){var e=A.classes,a=A.className,t=A.component,s=(0,c.default)(A,["classes","className","component"]);return r.default.createElement(t,(0,n.default)({className:(0,i.default)(e.root,a)},s))}e.styles=d,o.defaultProps={component:"div"};var f=(0,s.default)(d,{name:"MuiCardContent"})(o);e.default=f},393:function(A,e,a){"use strict";var t=a(8);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.styles=void 0;var n=t(a(52)),c=t(a(143)),r=t(a(141)),i=t(a(0)),s=(t(a(4)),t(a(146))),d=(a(144),t(a(147))),o=a(198),f=(t(a(394)),[0,8,16,24,32,40]),E=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var l=function(A){return(0,r.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(A,e){var a={};return f.forEach(function(A,t){0!==t&&(a["spacing-".concat(e,"-").concat(A)]={margin:-A/2,width:"calc(100% + ".concat(A,"px)"),"& > $item":{padding:A/2}})}),a}(0,"xs"),o.keys.reduce(function(e,a){return function(A,e,a){var t={};E.forEach(function(A){var e="grid-".concat(a,"-").concat(A);if(!0!==A)if("auto"!==A){var n="".concat(Math.round(A/12*1e8)/1e6,"%");t[e]={flexBasis:n,flexGrow:0,maxWidth:n}}else t[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else t[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===a?(0,r.default)(A,t):A[e.breakpoints.up(a)]=t}(e,A,a),e},{}))};function g(A){var e,a=A.alignContent,t=A.alignItems,d=A.classes,o=A.className,f=A.component,E=A.container,l=A.direction,u=A.item,B=A.justify,j=A.lg,Q=A.md,p=A.sm,b=A.spacing,x=A.wrap,m=A.xl,h=A.xs,w=A.zeroMinWidth,Y=(0,c.default)(A,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),N=(0,s.default)((e={},(0,n.default)(e,d.container,E),(0,n.default)(e,d.item,u),(0,n.default)(e,d.zeroMinWidth,w),(0,n.default)(e,d["spacing-xs-".concat(String(b))],E&&0!==b),(0,n.default)(e,d["direction-xs-".concat(String(l))],l!==g.defaultProps.direction),(0,n.default)(e,d["wrap-xs-".concat(String(x))],x!==g.defaultProps.wrap),(0,n.default)(e,d["align-items-xs-".concat(String(t))],t!==g.defaultProps.alignItems),(0,n.default)(e,d["align-content-xs-".concat(String(a))],a!==g.defaultProps.alignContent),(0,n.default)(e,d["justify-xs-".concat(String(B))],B!==g.defaultProps.justify),(0,n.default)(e,d["grid-xs-".concat(String(h))],!1!==h),(0,n.default)(e,d["grid-sm-".concat(String(p))],!1!==p),(0,n.default)(e,d["grid-md-".concat(String(Q))],!1!==Q),(0,n.default)(e,d["grid-lg-".concat(String(j))],!1!==j),(0,n.default)(e,d["grid-xl-".concat(String(m))],!1!==m),e),o);return i.default.createElement(f,(0,r.default)({className:N},Y))}e.styles=l,g.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var u=(0,d.default)(l,{name:"MuiGrid"})(g);e.default=u},394:function(A,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(A){return function(){return null}};e.default=t}}]);
//# sourceMappingURL=component---src-pages-team-js-f0cb1f0c4068b2ad11be.js.map