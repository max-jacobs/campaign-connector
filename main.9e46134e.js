!function(e){function t(t){for(var o,E,l=t[0],s=t[1],i=t[2],u=0,d=[];u<l.length;u++)E=l[u],Object.prototype.hasOwnProperty.call(n,E)&&n[E]&&d.push(n[E][0]),n[E]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(h&&h(t);d.length;)d.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,l=1;l<r.length;l++){var s=r[l];0!==n[s]&&(o=!1)}o&&(a.splice(t--,1),e=E(E.s=r[0]))}return e}var o={},n={1:0},a=[];function E(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,E),r.l=!0,r.exports}E.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,E.nc&&l.setAttribute("nonce",E.nc),l.src=function(e){return E.p+"templates/"+({0:"home/runner/work/campaign-comparator/campaign-comparator/node_modules/react-static/lib/browser/components/Default404"}[e]||e)+"."+{0:"848157de"}[e]+".js"}(e);var s=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(i);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,r[1](s)}n[e]=void 0}};var i=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},E.m=e,E.c=o,E.d=function(e,t,r){E.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},E.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.t=function(e,t){if(1&t&&(e=E(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(E.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)E.d(r,o,function(t){return e[t]}.bind(null,o));return r},E.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return E.d(t,"a",t),t},E.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},E.p="https://max-jacobs.github.io/campaign-comparator/",E.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var h=s;a.push([64,2,3]),r()}({111:function(e,t,r){"use strict";r.r(t),function(e){var o=r(0),n=r.n(o),a=r(10),E=r.n(a),l=r(60),s=r(25);if(t.default=s.a,"undefined"!=typeof document){var i=document.getElementById("root"),h=i.hasChildNodes()?E.a.hydrate:E.a.render,u=function(e){h(n.a.createElement(l.AppContainer,null,n.a.createElement(e,null)),i)};u(s.a),e&&e.hot&&e.hot.accept("./App",(function(){u(s.a)}))}}.call(this,r(112)(e))},25:function(e,t,r){"use strict";var o=r(53),n=r.n(o),a=r(54),E=r.n(a),l=r(55),s=r.n(l),i=r(56),h=r.n(i),u=r(15),d=r.n(u),c=r(57),m=r.n(c),S=r(20),f=r.n(S),p=r(0),y=r.n(p),g=r(61),W=r(29),w=r.n(W),N=r(27),b=r.n(N),C=(r(117),r(126)),B=r(125),k=[],v={};Object.keys(w.a.constituencies).sort().forEach((function(e){k.push({value:e,label:e}),v[e]=w.a.constituencies[e]}));var H=function(e){function t(e){var r;return n()(this,t),r=s()(this,h()(t).call(this,e)),f()(d()(r),"handleChange",(function(e){null!=e&&(r.setState({dropDownSelection:e.value}),r.getResults(e.value))})),f()(d()(r),"getResults",(function(e){b.a.post("https://constituency-comparator.herokuapp.com/search",{id:v[e]}).then((function(e){r.setState({results:e.data,resultSelection:e.data.results[0].name})}),(function(e){r.setState({results:null,resultSelection:null})}))})),f()(d()(r),"handleClick",(function(e){null!=e&&r.setState({resultSelection:e})})),r.handleChange=r.handleChange.bind(d()(r)),r.handleClick=r.handleClick.bind(d()(r)),r.getResults=r.getResults.bind(d()(r)),r.state={dropDownSelection:null,results:null,resultSelection:null},r}return m()(t,e),E()(t,[{key:"render",value:function(){var e,t;this.handleClick;return null!=this.state.results&&(e=this.state.results.results.map((function(e,t){return function(e,t,r){return y.a.createElement(C.a,{key:e,className:"App-result"},y.a.createElement("div",{className:"App-result-table"},y.a.createElement("div",{className:"App-result-column-1"},y.a.createElement("p",{className:"App-result-title"},t),y.a.createElement("p",{className:"App-result-score"},"Match: ",r,"%")),y.a.createElement("div",{className:"App-result-column-2"},y.a.createElement("div",{className:"App-result-button"},y.a.createElement(B.a,{className:"Button"},"info")))))}(t,e.name,e.similarity)})),t=y.a.createElement("p",null," Showing info for ",this.state.resultSelection)),y.a.createElement("div",{className:"App"},y.a.createElement("header",{className:"App-header"},y.a.createElement("h1",null,"Campaign ",y.a.createElement("br",null)," Comparator"),y.a.createElement("h4",null,"Select your constituency to see what's working for others around the country...")),y.a.createElement("div",{className:"App-select"},y.a.createElement(g.a,{placeholder:"Select your constituency",options:k,isClearable:"true",isSearchable:"true",onChange:this.handleChange})),y.a.createElement("div",{className:"App-results"},e),y.a.createElement("div",{className:"App-info"},t))}}]),t}(p.Component);t.a=H},29:function(e,t){t.constituencies={"Houghton & Sunderland South":"E14000754","Newcastle upon Tyne Central":"E14000831","Newcastle upon Tyne East":"E14000832","Newcastle upon Tyne North":"E14000833","Sunderland Central":"E14000982","Washington & Sunderland West":"E14001020",Halton:"E14000725","Basildon & Billericay":"E14000544",Broxbourne:"E14000606",Jarrow:"E14000765",Makerfield:"E14000805",Middlesbrough:"E14000819","South Shields":"E14000944",Wigan:"E14001039",Workington:"E14001053","Down North":"N06000013","Rutherglen & Hamilton West":"S14000056",Darlington:"E14000658",Nuneaton:"E14000868","Kilmarnock & Loudoun":"S14000040","Swansea West":"W07000047",Battersea:"E14000549",Birkenhead:"E14000559",Blackburn:"E14000570",Blaydon:"E14000574",Bootle:"E14000581",Bracknell:"E14000586",Burnley:"E14000609",Burton:"E14000610","Bury North":"E14000611","Bury South":"E14000612","Cannock Chase":"E14000618",Carlisle:"E14000620","Castle Point":"E14000622","Surrey East":"E14000681","Folkestone & Hythe":"E14000704",Fylde:"E14000706",Gateshead:"E14000709",Harlow:"E14000729",Hartlepool:"E14000733",Hertsmere:"E14000745",Huntingdon:"E14000757",Kettering:"E14000769","Hull North":"E14000772",Knowsley:"E14000775",Leigh:"E14000785","Swindon North":"E14000851","Tyneside North":"E14000853","Warwickshire North":"E14000854","Leicestershire North West":"E14000858",Putney:"E14000887",Rugby:"E14000905","Runnymede & Weybridge":"E14000907",Rushcliffe:"E14000908","Sefton Central":"E14000916","Basildon South & Thurrock East":"E14000933","Norfolk South":"E14000941","St Helens North":"E14000962","St Helens South & Whiston":"E14000963","Stockton North":"E14000970","Stockton South":"E14000971",Tamworth:"E14000986",Thurrock:"E14000995",Tooting:"E14000998",Tynemouth:"E14001006",Wallasey:"E14001010",Warley:"E14001016",Wellingborough:"E14001025","West Bromwich East":"E14001029","West Bromwich West":"E14001030","Wirral South":"E14001043","Wirral West":"E14001044","Wolverhampton North East":"E14001049",Wycombe:"E14001056",Yeovil:"E14001060","Belfast West":"N06000004","Londonderry East":"N06000006","Lagan Valley":"N06000009",Strangford:"N06000016","East Kilbride, Strathaven & Lesmahagow":"S14000019","Lanark & Hamilton East":"S14000042",Midlothian:"S14000045","Dunbartonshire West":"S14000059",Wrexham:"W07000044",Llanelli:"W07000045","Swansea East":"W07000048",Aberavon:"W07000049",Torfaen:"W07000053","Newport East":"W07000055","Newport West":"W07000056",Arfon:"W07000057","Dwyfor Meirionnydd":"W07000061","Clwyd South":"W07000062","Blaenau Gwent":"W07000072",Pontypridd:"W07000075",Caerphilly:"W07000076",Islwyn:"W07000077","Vale of Glamorgan":"W07000078","Barnsley Central":"E14000541","Barnsley East":"E14000542",Chichester:"E14000633",Chorley:"E14000637",Dover:"E14000670","Epping Forest":"E14000693",Gainsborough:"E14000707","Harrogate & Knaresborough":"E14000730",Havant:"E14000736","Ribble Valley":"E14000894","Stratford-on-Avon":"E14000977",Torbay:"E14000999",Watford:"E14001021",Angus:"S14000004","Dundee East":"S14000015","Dundee West":"S14000016",Falkirk:"S14000028",Inverclyde:"S14000038","Paisley & Renfrewshire North":"S14000052","Paisley & Renfrewshire South":"S14000053",Gower:"W07000046",Neath:"W07000069",Aldershot:"E14000530","Aldridge-Brownhills":"E14000531","Amber Valley":"E14000533",Ashford:"E14000536",Barking:"E14000540",Bath:"E14000547",Beaconsfield:"E14000550",Bedford:"E14000552","Birmingham Edgbaston":"E14000560","Birmingham Erdington":"E14000561","Birmingham Ladywood":"E14000564","Birmingham Northfield":"E14000565","Birmingham Yardley":"E14000568","Bishop Auckland":"E14000569","Blackpool North & Cleveleys":"E14000572","Blackpool South":"E14000573","Bolton North East":"E14000578","Bolton South East":"E14000579","Bolton West":"E14000580","Brentwood & Ongar":"E14000594","Bristol East":"E14000599","Bristol North West":"E14000600","Bristol South":"E14000601","Bristol West":"E14000602",Cambridge:"E14000617","Devon Central":"E14000623","Chelsea & Fulham":"E14000629","Chesham & Amersham":"E14000631","Chingford & Woodford Green":"E14000634",Christchurch:"E14000638","Cities of London & Westminster":"E14000639","Durham, City of":"E14000641",Clacton:"E14000642",Cleethorpes:"E14000643","Coventry North East":"E14000649","Coventry North West":"E14000650","Coventry South":"E14000651",Crawley:"E14000652","Dagenham & Rainham":"E14000657",Dartford:"E14000659","Don Valley":"E14000667","Doncaster Central":"E14000668","Doncaster North":"E14000669","Ealing Central & Acton":"E14000674","Ealing North":"E14000675","Ealing Southall":"E14000676",Easington:"E14000677",Eastbourne:"E14000684",Eastleigh:"E14000685",Edmonton:"E14000687","Epsom & Ewell":"E14000694",Erewash:"E14000695","Esher & Walton":"E14000697",Fareham:"E14000699","Forest of Dean":"E14000705","Garston & Halewood":"E14000708",Gedling:"E14000710",Gloucester:"E14000712","Grantham & Stamford":"E14000714","Great Grimsby":"E14000716","Great Yarmouth":"E14000717",Guildford:"E14000719",Hammersmith:"E14000726","Hemel Hempstead":"E14000739","Heywood & Middleton":"E14000747","High Peak":"E14000748","Hornchurch & Upminster":"E14000751",Hyndburn:"E14000758","Isle of Wight":"E14000762","Islington North":"E14000763","Islington South & Finsbury":"E14000764","Kenilworth & Southam":"E14000767","Hull East":"E14000771","Hull West & Hessle":"E14000773","Leeds East":"E14000778","Leeds West":"E14000781","Leicester South":"E14000783","Lewisham East":"E14000787","Lewisham West & Penge":"E14000788","Lewisham Deptford":"E14000789","Leyton & Wanstead":"E14000790","Liverpool Riverside":"E14000793","Liverpool Walton":"E14000794","Liverpool Wavertree":"E14000795","Liverpool West Derby":"E14000796","Luton North":"E14000800","Luton South":"E14000801","Middlesbrough South & Cleveland East":"E14000820","Mitcham & Morden":"E14000823","New Forest East":"E14000827","New Forest West":"E14000828",Newbury:"E14000830","Newcastle-under-Lyme":"E14000834","Newton Abbot":"E14000835","Durham North":"E14000840","Somerset North":"E14000850","Cambridgeshire North West":"E14000855","Durham North West":"E14000856","Norfolk North West":"E14000859","Norwich North":"E14000863","Norwich South":"E14000864",Pendle:"E14000875",Peterborough:"E14000878",Preston:"E14000885",Redcar:"E14000891",Reigate:"E14000893",Rochdale:"E14000897","Rochford & Southend East":"E14000899",Romford:"E14000900","Saffron Walden":"E14000910","Salford & Eccles":"E14000911",Sedgefield:"E14000915",Sevenoaks:"E14000918","Sheffield Central":"E14000919","Sheffield South East":"E14000920","Sheffield Brightside & Hillsborough":"E14000921","Sheffield Hallam":"E14000922","Sheffield Heeley":"E14000923","Shrewsbury & Atcham":"E14000926","Sittingbourne & Sheppey":"E14000927","Cambridgeshire South":"E14000934","Derbyshire South":"E14000935","South Holland & The Deepings":"E14000939","South Ribble":"E14000943","Southend West":"E14000957",Southport:"E14000958",Stafford:"E14000965","Staffordshire Moorlands":"E14000966",Stevenage:"E14000968",Stroud:"E14000980","Suffolk Coastal":"E14000981","Surrey Heath":"E14000983","Sutton Coldfield":"E14000985",Telford:"E14000989","Cotswolds, The":"E14000991","Wrekin, The":"E14000992","Tonbridge & Malling":"E14000997","Tunbridge Wells":"E14001004","Walsall North":"E14001011","Walsall South":"E14001012",Walthamstow:"E14001013",Wealden:"E14001023","Welwyn Hatfield":"E14001027","Suffolk West":"E14001034","Westminster North":"E14001036","Weston-Super-Mare":"E14001038",Wimbledon:"E14001040",Wokingham:"E14001048","Wolverhampton South East":"E14001050","Wolverhampton South West":"E14001051",Worcester:"E14001052","Worsley & Eccles South":"E14001054","Wyre Forest":"E14001058","Belfast East":"N06000001","Belfast North":"N06000002","Belfast South":"N06000003","Antrim East":"N06000005",Foyle:"N06000008","Ulster Mid":"N06000010","Antrim North":"N06000012","Antrim South":"N06000014","Down South":"N06000015","Aberdeen North":"S14000001","Aberdeen South":"S14000002","Airdrie & Shotts":"S14000003","Ayr, Carrick & Cumnock":"S14000006","Dunfermline & Fife West":"S14000017","Dunbartonshire East":"S14000018","East Lothian":"S14000020","Renfrewshire East":"S14000021","Na h-Eileanan an Iar":"S14000027","Glasgow Central":"S14000029","Glasgow East":"S14000030","Glasgow North":"S14000031","Glasgow North East":"S14000032","Glasgow North West":"S14000033","Glasgow South":"S14000034","Glasgow South West":"S14000035",Glenrothes:"S14000036","Kirkcaldy & Cowdenbeath":"S14000041","Linlithgow & Falkirk East":"S14000043",Livingston:"S14000044","Ayrshire North & Arran":"S14000048","Ochil & Perthshire South":"S14000050",Stirling:"S14000057","Ynys Mon":"W07000041",Delyn:"W07000042","Alyn & Deeside":"W07000043","Cardiff Central":"W07000050","Cardiff North":"W07000051",Rhondda:"W07000052","Vale of Clwyd":"W07000060",Montgomeryshire:"W07000063","Carmarthen East & Dinefwr":"W07000067","Brecon & Radnorshire":"W07000068","Cynon Valley":"W07000070",Bridgend:"W07000073",Ogmore:"W07000074","Bexleyheath & Crayford":"E14000558",Bromsgrove:"E14000605",Chesterfield:"E14000632",Colchester:"E14000644",Eltham:"E14000690","Greenwich & Woolwich":"E14000718","Harwich & Essex North":"E14000734","Hastings & Rye":"E14000735","Hertford & Stortford":"E14000744","Kingston & Surbiton":"E14000770","Leeds Central":"E14000777",Lewes:"E14000786",Meriden:"E14000812","Worcestershire Mid":"E14000818","Devon North":"E14000838","Portsmouth North":"E14000883","Portsmouth South":"E14000884",Solihull:"E14000931",Totnes:"E14001001","Worcestershire West":"E14001035","Westmorland & Lonsdale":"E14001037",Moray:"S14000046","Perth & Perthshire North":"S14000054",Aberconwy:"W07000058","Clwyd West":"W07000059","Altrincham & Sale West":"E14000532",Aylesbury:"E14000538",Banbury:"E14000539",Bassetlaw:"E14000546","Batley & Spen":"E14000548",Beckenham:"E14000551","Berwick-upon-Tweed":"E14000554","Bexhill & Battle":"E14000557","Birmingham Hall Green":"E14000562","Birmingham Hodge Hill":"E14000563","Birmingham Perry Barr":"E14000566","Birmingham Selly Oak":"E14000567","Blackley & Broughton":"E14000571","Boston & Skegness":"E14000582",Bosworth:"E14000583","Bournemouth East":"E14000584","Bournemouth West":"E14000585",Braintree:"E14000590","Brent Central":"E14000591","Brent North":"E14000592","Brentford & Isleworth":"E14000593","Brigg & Goole":"E14000596","Bromley & Chislehurst":"E14000604","Bury St Edmunds":"E14000613",Canterbury:"E14000619","Carshalton & Wallington":"E14000621","Suffolk Central & Ipswich North":"E14000624",Charnwood:"E14000625",Chelmsford:"E14000628",Cheltenham:"E14000630",Chippenham:"E14000635",Congleton:"E14000646",Copeland:"E14000647","Crewe & Nantwich":"E14000653","Croydon Central":"E14000654","Croydon North":"E14000655","Croydon South":"E14000656",Daventry:"E14000660","Dudley South":"E14000672","Dulwich & West Norwood":"E14000673","East Ham":"E14000679","Hampshire East":"E14000680","Ellesmere Port & Neston":"E14000688","Enfield North":"E14000691","Erith & Thamesmead":"E14000696",Exeter:"E14000698","Feltham & Heston":"E14000701",Gosport:"E14000713","Hackney North & Stoke Newington":"E14000720","Hackney South & Shoreditch":"E14000721","Haltemprice & Howden":"E14000724",Harborough:"E14000728","Harrow East":"E14000731","Harrow West":"E14000732","Hayes & Harlington":"E14000737",Henley:"E14000742","Hereford & Herefordshire South":"E14000743",Hexham:"E14000746","Hitchin & Harpenden":"E14000749","Hornsey & Wood Green":"E14000752",Horsham:"E14000753",Huddersfield:"E14000756","Ilford North":"E14000759","Ilford South":"E14000760",Ipswich:"E14000761","Lancaster & Fleetwood":"E14000776","Leeds North West":"E14000780","Leicester East":"E14000782","Leicester West":"E14000784",Lichfield:"E14000791",Lincoln:"E14000792",Loughborough:"E14000797","Louth & Horncastle":"E14000798",Maidenhead:"E14000803",Maldon:"E14000806","Manchester Central":"E14000807","Manchester Gorton":"E14000808","Manchester Withington":"E14000809","Bedfordshire Mid":"E14000813","Dorset Mid & Poole North":"E14000815","Milton Keynes South":"E14000822","Mole Valley":"E14000824","Morley & Outwood":"E14000826",Newark:"E14000829","Bedfordshire North East":"E14000841","Cambridgeshire North East":"E14000842","Hampshire North East":"E14000844","Hertfordshire North East":"E14000845","Somerset North East":"E14000846","Herefordshire North":"E14000847","Norfolk North":"E14000848","Hampshire North West":"E14000857","Wiltshire North":"E14000860","Nottingham East":"E14000865","Nottingham North":"E14000866","Nottingham South":"E14000867","Old Bexley & Sidcup":"E14000869","Oldham East & Saddleworth":"E14000870","Oldham West & Royton":"E14000871",Orpington:"E14000872","Oxford East":"E14000873","Penistone & Stocksbridge":"E14000876","Penrith & The Border":"E14000877","Plymouth Moor View":"E14000879","Plymouth Sutton & Devonport":"E14000880",Poole:"E14000881","Rayleigh & Wickford":"E14000888","Reading East":"E14000889","Reading West":"E14000890",Redditch:"E14000892","Richmond (Yorks)":"E14000895","Romsey & Southampton North":"E14000901","Rossendale & Darwen":"E14000902","Rother Valley":"E14000903",Rotherham:"E14000904","Ruislip, Northwood & Pinner":"E14000906","Rutland & Melton":"E14000909",Salisbury:"E14000912","Scarborough & Whitby":"E14000913",Scunthorpe:"E14000914","Selby & Ainsty":"E14000917",Sherwood:"E14000924",Shipley:"E14000925","Sleaford & North Hykeham":"E14000929",Slough:"E14000930","Leicestershire South":"E14000940","Northamptonshire South":"E14000942","Staffordshire South":"E14000945","Suffolk South":"E14000946","Swindon South":"E14000947","Bedfordshire South West":"E14000949","Devon South West":"E14000950","Norfolk South West":"E14000952","Surrey South West":"E14000953","Wiltshire South West":"E14000954",Spelthorne:"E14000959","St Albans":"E14000960",Stone:"E14000975",Stourbridge:"E14000976",Streatham:"E14000978","Stretford & Urmston":"E14000979","Sutton & Cheam":"E14000984",Tatton:"E14000987","Taunton Deane":"E14000988","Thornbury & Yate":"E14000994",Tottenham:"E14001002",Vauxhall:"E14001008",Wakefield:"E14001009","Warrington North":"E14001017","Warrington South":"E14001018","Warwick & Leamington":"E14001019",Waveney:"E14001022","Wentworth & Dearne":"E14001028","West Ham":"E14001032","Lancashire West":"E14001033",Windsor:"E14001042",Witham:"E14001045",Witney:"E14001046",Woking:"E14001047","Wyre & Preston North":"E14001057","Wythenshawe & Sale East":"E14001059","Fermanagh & South Tyrone":"N06000007","Newry & Armagh":"N06000011","Upper Bann":"N06000017","Tyrone West":"N06000018","Berwickshire, Roxburgh & Selkirk":"S14000008","Caithness, Sutherland & Easter Ross":"S14000009","Ayrshire Central":"S14000010","Coatbridge, Chryston & Bellshill":"S14000011","Cumbernauld, Kilsyth & Kirkintilloch East":"S14000012","Inverness, Nairn, Badenoch & Strathspey":"S14000039","Motherwell & Wishaw":"S14000047","Fife North East":"S14000049",Monmouth:"W07000054",Ceredigion:"W07000064","Merthyr Tydfil & Rhymney":"W07000071","Cardiff West":"W07000079","Cardiff South & Penarth":"W07000080","Beverley & Holderness":"E14000556","Bognor Regis & Littlehampton":"E14000576","Chester, City of":"E14000640","Derbyshire Dales":"E14000664","Yorkshire East":"E14000683","Elmet & Rothwell":"E14000689",Kensington:"E14000768",Mansfield:"E14000810","Dorset North":"E14000839","Dorset South":"E14000936","Uxbridge & Ruislip South":"E14001007","Weaver Vale":"E14001024","Dorset West":"E14001031","Preseli Pembrokeshire":"W07000065","Carmarthen West & Pembrokeshire South":"W07000066","Arundel & South Downs":"E14000534",Ashfield:"E14000535","Ashton Under Lyne":"E14000537",Basingstoke:"E14000545","Bermondsey & Old Southwark":"E14000553","Bethnal Green & Bow":"E14000555","Blyth Valley":"E14000575",Bolsover:"E14000577","Bradford East":"E14000587","Bradford South":"E14000588","Bradford West":"E14000589","Bridgwater & Somerset West":"E14000595",Broadland:"E14000603",Broxtowe:"E14000607",Buckingham:"E14000608","Calder Valley":"E14000614","Camberwell & Peckham":"E14000615","Camborne & Redruth":"E14000616",Cheadle:"E14000627","Colne Valley":"E14000645",Corby:"E14000648","Denton & Reddish":"E14000661","Derby North":"E14000662","Derby South":"E14000663",Dewsbury:"E14000666","Dudley North":"E14000671","Worthing East & Shoreham":"E14000682",Eddisbury:"E14000686","Enfield Southgate":"E14000692","Faversham & Kent Mid":"E14000700","Filton & Bradley Stoke":"E14000702",Gravesham:"E14000715","Halesowen & Rowley Regis":"E14000722",Halifax:"E14000723","Hampstead & Kilburn":"E14000727","Hazel Grove":"E14000738",Hemsworth:"E14000740","Holborn & St Pancras":"E14000750",Keighley:"E14000766",Kingswood:"E14000774","Leeds North East":"E14000779",Ludlow:"E14000799",Macclesfield:"E14000802","Maidstone & The Weald":"E14000804","Meon Valley":"E14000811","Derbyshire Mid":"E14000814","Norfolk Mid":"E14000816","Milton Keynes North":"E14000821","Morecambe & Lunesdale":"E14000825","Normanton, Pontefract & Castleford":"E14000836","Derbyshire North East":"E14000843","Shropshire North":"E14000849","Thanet North":"E14000852","Northampton North":"E14000861","Northampton South":"E14000862","Oxford West & Abingdon":"E14000874","Poplar & Limehouse":"E14000882",Pudsey:"E14000886","Somerton & Frome":"E14000932","Cambridgeshire South East":"E14000937","Thanet South":"E14000948","Hertfordshire South West":"E14000951","Southampton Itchen":"E14000955","Stalybridge & Hyde":"E14000967",Stockport:"E14000969","Stoke-on-Trent Central":"E14000972","Stoke-on-Trent North":"E14000973","Stoke-on-Trent South":"E14000974",Tewkesbury:"E14000990","Thirsk & Malton":"E14000993","Tiverton & Honiton":"E14000996","Devon West & Torridge":"E14001000",Wantage:"E14001015",Winchester:"E14001041","Worthing West":"E14001055","York Central":"E14001061","York Outer":"E14001062","Argyll & Bute":"S14000005","Banff & Buchan":"S14000007","Dumfries & Galloway":"S14000013","Dumfriesshire, Clydesdale & Tweeddale":"S14000014","Edinburgh East":"S14000022","Edinburgh North & Leith":"S14000023","Edinburgh South":"S14000024","Edinburgh South West":"S14000025","Edinburgh West":"S14000026",Gordon:"S14000037","Ross, Skye & Lochaber":"S14000055","Aberdeenshire West & Kincardine":"S14000058","Barrow & Furness":"E14000543","Chipping Barnet":"E14000636","Finchley & Golders Green":"E14000703",Hendon:"E14000741","Chatham & Aylesford":"E14000626",Devizes:"E14000665","Devon East":"E14000678","Gillingham & Rainham":"E14000711","Sussex Mid":"E14000817","Richmond Park":"E14000896","Rochester & Strood":"E14000898","Skipton & Ripon":"E14000928","Southampton Test":"E14000956",Twickenham:"E14001005",Wansbeck:"E14001014",Wells:"E14001026","Orkney & Shetland":"S14000051","Brighton Kemptown":"E14000597","Brighton Pavilion":"E14000598",Hove:"E14000755","Truro & Falmouth":"E14001003","St Ives":"E14000964","St Austell & Newquay":"E14000961","Cornwall North":"E14000837","Cornwall South East":"E14000938"}},30:function(e,t,r){"use strict";r.r(t);t.default=[{location:"/home/runner/work/campaign-comparator/campaign-comparator",plugins:[],hooks:{}}]},45:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"notFoundTemplate",(function(){return c}));var o=r(51),n=r.n(o),a=r(52),E=r.n(a),l=r(0),s=r.n(l),i=r(18),h=r.n(i);Object(i.setHasBabelPlugin)();var u={loading:function(){return null},error:function(e){return console.error(e.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},d=h()(E()({id:"/home/runner/work/campaign-comparator/campaign-comparator/node_modules/react-static/lib/browser/components/Default404",load:function(){return Promise.all([r.e(0).then(r.t.bind(null,62,7))]).then((function(e){return e[0]}))},path:function(){return n.a.join(e,"/home/runner/work/campaign-comparator/campaign-comparator/node_modules/react-static/lib/browser/components/Default404")},resolve:function(){return 62},chunkName:function(){return"home/runner/work/campaign-comparator/campaign-comparator/node_modules/react-static/lib/browser/components/Default404"}}),u);d.template="/home/runner/work/campaign-comparator/campaign-comparator/node_modules/react-static/lib/browser/components/Default404",t.default={"/home/runner/work/campaign-comparator/campaign-comparator/node_modules/react-static/lib/browser/components/Default404":d};var c="/home/runner/work/campaign-comparator/campaign-comparator/node_modules/react-static/lib/browser/components/Default404"}.call(this,"/")},64:function(e,t,r){r(65),r(93),e.exports=r(104)},96:function(e,t,r){var o={".":19,"./":19,"./index":19,"./index.js":19};function n(e){var t=a(e);return r(t)}function a(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=a,e.exports=n,n.id=96}});