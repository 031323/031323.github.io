//import {lv} from './lv.js'

function abort()
{
	console.log('aborted');
	document.body.innerHTML="";
	setTimeout(function(){location.reload()},2000);
}

document.body.style.margin=0;
document.body.style.display='flex';
document.body.style.height='100%';
document.body.style.alignItems='center';
document.body.style.justifyContent='center';
document.body.style.flexDirection='column';

var c=new Object();

var ptlm=document.createElement('Div');
ptlm.style.maxWidth='100%';
ptlm.style.maxHeight='100%';
ptlm.style.backgroundColor='black';'rgb(50,50,50)';
ptlm.style.textAlign='center';
ahrta={snkya:0,
	krmnm:function()
	{
		this.snkya--;
		if(this.snkya==0)this.prtikrm();
	},
	ahrnm:function(stanm,prapyh)
	{
		this.snkya++;
		stanm.onload=()=>{this.krmnm();};
		stanm.onerror=abort;
		stanm.src=prapyh;
	}
}
ahrta.prtikrm=()=>{
	console.log('ptlm');
	cr();
}

var suckh=document.createElement('Div');
suckh.style.marginTop=(1*4/3)+'%';
suckh.style.height='2%';
suckh.style.marginBottom='0%';
suckh.style.width='100%';
suckh.style.backgroundColor='gray';
suckh.style.borderRadius='calc(var(--iw) * 0.02)';
var srh=document.createElement('Div');
srh.style.height='100%';
srh.style.width='0%';
srh.style.backgroundColor='white';
srh.style.borderRadius='calc(var(--iw) * 0.02)';
suckh.appendChild(srh);
ptlm.appendChild(suckh);

const krmsnkya=8;
var krmdrsnm=document.createElement('Div');
krmdrsnm.style.margin='auto';
krmdrsnm.style.height='15%';
krmdrsnm.style.width='100%';
krmdrsnm.style.display='flex';
krmdrsnm.style.flexDirection='row';
krmdrsnm.style.justifyContent='flex-start';
krmdrsnm.style.alignItems='center';
krmdrsnm.style.backgroundColor='black';
krmdrsnm.style.opacity='0';
var krmankh=[];
for(let i=0;i<krmsnkya;i++)
{
	krmankh[i]=new Image();
	krmankh[i].style.objectFit='contain';
	krmankh[i].style.borderRadius='calc(var(--iw) * 0.01)';
	krmankh[i].style.width='9%';
	krmankh[i].style.marginLeft='1%';
	//if(i==0)krmankh[i].style.marginLeft=(1+10*(8-krmsnkya))+'%';
	krmankh[i].style.height='50%';
	krmankh[i].style.backgroundColor='white';
	//krmankh[i].style.boxShadow='0 0 5px 5px gray';
	//krmankh[i].style.filter='invert(1)';
	krmdrsnm.appendChild(krmankh[i]);
}
var	bk=new Image();
bk.style.objectFit='contain';
bk.style.margin='auto';
//bk.style.marginRight=0;
bk.style.marginLeft=0;
//bk.style.borderRadius='0%';
bk.style.width='20%';
bk.style.height='100%';
bk.style.filter='invert(1)';
bk.style.backgroundColor='white';
ahrta.ahrnm(bk,'ankah/bk.svg');
krmdrsnm.appendChild(bk);
	
ptlm.appendChild(krmdrsnm);
var ankah=document.createElement('Div');
ankah.style.margin='auto';
ankah.style.height='30%';
ankah.style.width='100%';
ankah.style.display='flex';
ankah.style.flexDirection='row';
ankah.style.flexWrap='wrap';
ankah.style.justifyContent='flex-start';
ankah.style.alignContent='space-evenly'
ankah.style.opacity='0';
var ankh=[];
const brnm=0.9;
for(let i=0;i<10;i++)
{
	ankh[i]=new Image();
	ankh[i].style.objectFit='contain';
	ankh[i].style.borderRadius='calc(var(--iw) * 0.02)';
	ankh[i].style.width='18%';
	ankh[i].style.marginLeft='2%';
	if(i%5==0)ankh[i].style.marginLeft='1%';
	ankh[i].style.height='44%';
	ankh[i].style.backgroundColor='white';
	//ankh[i].style.boxShadow='0px 0px 0px 2px black';
	//ankh[i].style.filter='invert(1)'
	ahrta.ahrnm(ankh[i],'ankah/'+i.toString()+'.svg');
	ankah.appendChild(ankh[i]);
}
var citrm=new Image();
citrm.style.height='30%';
citrm.style.width='100%';
citrm.style.objectFit='cover';
citrm.style.objectPosition='center';
citrm.style.backgroundColor='white';
citrm.style.borderRadius='calc(var(--iw) * 0.02)';
citrm.style.opacity=0;
//ahrta.ahrnm(citrm,'1.jpg');
//citrm.onload=()=>{ptlm.replaceChild(citrm,ankah)};
//citrm.src='https://physicsworld.com/wp-content/uploads/2020/11/snake-pitviper-843686628-iStock_TommyIX.jpg';
//ankah.appendChild(citrm);
ptlm.appendChild(ankah);
var nodnani=document.createElement('Div');
const nodnvistarh=1;
nodnani.style.height=50*nodnvistarh+'%';
nodnani.style.margin='auto';
nodnani.style.marginTop=2*4/3+'%';
nodnani.style.width=100*nodnvistarh+'%';
//nodnani.style.display='flex';
nodnani.style.flexDirection='row';
nodnani.style.flexWrap='wrap';
nodnani.style.justifyContent='flex-start';
nodnani.style.alignContent='flex-start';
nodnani.style.opacity='0';
const nudynamani=['Iminus.svg','Iup.svg','Iplus.svg','Ileft.svg','Idown.svg','Iright.svg'];
var nodnm=[]
const riktih=4;
for(let i=0;i<6;i++)
{
	nodnm[i]=new Image();
	nodnm[i].style.objectFit='contain';
	nodnm[i].style.borderRadius='calc(var(--iw) * 0.02)';
	nodnm[i].margin='auto';
	if(i!=0&&i!=3)nodnm[i].style.marginLeft=riktih+'%';
	if(i/3>=1)nodnm[i].style.marginTop=riktih+'%';
	else nodnm[i].style.marginTop=2*2/3+'%';
	nodnm[i].style.width=(33.3333-riktih*2/3)+'%';
	nodnm[i].style.height=(49-riktih*3/2*1/2)+'%';
	nodnm[i].style.backgroundColor='white';
	//nodnm[i].style.boxShadow='0px 0px 0px 5px black';
	//nodnm[i].style.filter='invert(1)'
	ahrta.ahrnm(nodnm[i],'ankah/'+nudynamani[i]);
	nodnani.appendChild(nodnm[i]);
}
ptlm.appendChild(nodnani);
const ptlpurnm=0.93;
function vhs()
{
	let w=360;
	if(window.innerHeight>window.innerWidth)w=480;
	if(window.innerWidth<w)w=window.innerWidth;
	if(window.innerHeight<w*4/3)w=Math.floor(window.innerHeight*3/4);
	w*=ptlpurnm;
	ptlm.style.width=w;
	ptlm.style.height=w*4/3;
	ptlm.style.paddingTop=w*(1-ptlpurnm)*(4/3-1);
	document.documentElement.style.setProperty('--iw',w+'px');
}
vhs();
window.onresize=vhs;

document.body.appendChild(ptlm);



var cx=0;
function cb()
{
	nodnm[cx-1].style.filter='';
}
var ktanam='';
var svprivrtnm=false;
function hash()
{
	if(svprivrtnm){svprivrtnm=false;return;}
	console.log('hash');
	let ktakrmh=parseInt(location.hash.substring(1));
	if(ktah.length==1)ktakrmh=1;
	if(!(ktakrmh<=ktah.length)||ktakrmh==0){
		ktanam='';
	}
	else if(!(ktanam.length==krmsnkya&&parseInt(ktanam)==ktakrmh))
	{
		ktanam=ktakrmh.toString();
		while(ktanam.length<krmsnkya)ktanam='0'+ktanam;
		cynm();
	}
	if(ktanam==='')cynm();
}
function ktnm()
{
	let ktakrmankh=parseInt(ktanam);
	if(!(location.hash==='#'+ktakrmankh))
	{
		svprivrtnm=true;
		location.hash=ktakrmankh;
	}
	let k=ktanam;
	if(ktah[ktakrmankh-1]==0)return;
	let src='';
	if(typeof(ktah[ktakrmankh-1])=='string')src=ktah[ktakrmankh-1];
	else
	{
		src=ktah[ktakrmankh-1][0];
		eval(ktah[ktakrmankh-1][1]);
	}
	
	if(arbdh)
	{
		citrm.style.opacity=0;
		citrm.onload=()=>{if(ktanam==k)citrm.style.opacity=1};
		citrm.onerror=()=>{setTimeout(()=>{if(ktanam==k)citrm.src=ktah[parseInt(ktanam)-1];},2000)};
		citrm.src=src;
	}
	else {ahrta.ahrnm(citrm,src);}
	//if(citrm.src.includes('EiGBmms-alk'))citrm.style.objectPosition='bottom';
	//else citrm.style.objectPosition='center';
	ptlm.replaceChild(citrm,ptlm.children[2]);
}
var key=[false,false,false,false,false,false,false,false,false,false];
function cynm()
{
	console.log(ktanam);
	while(ktanam.length+ktah.length.toString().length<krmsnkya)ktanam+='0';
	for(let i=0;i<10;i++)
	{
		ankh[i].style.opacity=0;
		if(ktanam.length<krmsnkya)
		{
			let nyunh=parseInt(ktanam+i)*Math.pow(10,krmsnkya-ktanam.length-1);
			if(!(nyunh==0&&ktanam.length+1==krmsnkya)&&nyunh<=ktah.length)ankh[i].style.opacity=1;
		}
	}
	for(let i=0;i<krmsnkya;i++)
	{
		if(i<ktanam.length){
			if(krmankh[i].src[krmankh[i].src.length-5]!=ktanam[i])
			{
				console.log(i);
				if(arbdh)
				{
					krmankh[i].style.opacity=0;
					krmankh[i].onload=()=>{if(krmankh[i].src[krmankh[i].src.length-5]==ktanam[i])krmankh[i].style.opacity=1;}
					krmankh[i].onerror=abort;
					krmankh[i].src='ankah/'+ktanam[i]+'.svg';
				}
				else ahrta.ahrnm(krmankh[i],'ankah/'+ktanam[i]+'.svg');
			}
			else krmankh[i].style.opacity=1;
		}
		else krmankh[i].style.opacity=0;
	}
	ptlm.replaceChild(ankah,ptlm.children[2]);
	if(ktanam.length==krmsnkya)ktnm();
}
function vrttih()
{
	if(vkta.vdti&&cx==6&&!vkta.anvrtm)
	{
		vkta.anvrtm=true;
		nodnm[5].style.boxShadow='0 0 0px calc(var(--iw) * 0.02) black';
	}
}
function nivrttih()
{
	if(vkta.anvrtm)
	{
		nodnm[5].style.boxShadow='';
		vkta.anvrtm=false;
		if(vkta.nx)
		{
			vkta.nx=0;
			vkta.vdti=false;
			cb();
		}
	}
}
function cr()
{
	window.onhashchange=hash;
	arbdh=true;
	if(nvhash)hash();
	function bkkrm(){
		ktanam=ktanam.substring(0,ktanam.length-1);cynm();
	}
	bk.onpointerdown=bkkrm;
	function ankdown(i){ankh[i].style.filter='invert(1)';}
	function ankout(i){ankh[i].style.filter='';}
	function ankkrm(i){ankout(i);if(ankh[i].style.opacity==='1'){ktanam+=i;cynm();}}
	for(let i=0;i<10;i++)
	{
		//ankh[i].onpointerdown=()=>{ankkrm(i);};
		ankh[i].onpointerdown=()=>{ankdown(i);};
		ankh[i].onpointerout=()=>{ankout(i);};
		ankh[i].onclick=()=>{ankkrm(i);};
	}
	suckh.style.opacity=0;
	krmdrsnm.style.opacity=1;
	ankah.style.opacity=1;
	nodnani.style.opacity=1;
	citrm.style.opacity=1;
	function krm(){if(cx){nodnm[cx-1].style.filter='invert(1)';vkta.krm(cx);}}
	for(let i=0;i<6;i++)
		nodnm[i].onpointerdown=(e)=>{
			if(i==5&&vkta.vdti&&cx==6&&!vkta.anvrtm){tyktvym=true;vrttih();}
			if(vkta.vdti)return;cx=i+1;krm();
		};
	document.body.onkeyup=(e)=>
	{
		if (e.getModifierState("Fn") ||
    e.getModifierState("Hyper") ||
    e.getModifierState("OS") ||
    e.getModifierState("Super") ||
    e.getModifierState("Win") /* hack for IE */ ||
    e.getModifierState("Control") ||
    e.getModifierState("Alt")
    	)return;
		for(let i=0;i<10;i++)
			if(e.key==i&&key[i]){key[i]=false;ankkrm(i);}
	}
	document.body.onkeydown=(e)=>{
		console.log(e.key+' '+e.code);
		if (e.getModifierState("Fn") ||
    e.getModifierState("Hyper") ||
    e.getModifierState("OS") ||
    e.getModifierState("Super") ||
    e.getModifierState("Win") /* hack for IE */ ||
    e.getModifierState("Control") ||
    e.getModifierState("Alt")
    )return;
    for(let i=0;i<10;i++)
    	if(key[i]&&e.key!=i){key[i]=false;ankkrm(i);}
		if(e.code=='Backspace'||e.code=='Delete'||e.code=='Escape')bkkrm();
		for(let i=0;i<10;i++)
			if(e.key==i){key[i]=true;ankdown(i);}
		if(e.key=='ArrowRight'&&vkta.vdti&&cx==6&&!vkta.anvrtm)vrttih();
		else nivrttih();
		if(vkta.vdti)return;
		cx=0;
		if(e.key=='ArrowLeft')cx=4;
		if(e.key=='ArrowRight')cx=6;
		if(e.key=='ArrowDown')cx=5;
		if(e.key=='ArrowUp')cx=2;
		if(e.key=='+')cx=3;
		if(e.key=='-')cx=1;			
		krm();
	}
}
ahrta.snkya++;
var vkta=new Object();
if(typeof suvagarmbh==="undefined")abort();
else suvagarmbh(()=>{
	let xhr = new XMLHttpRequest();
	xhr.open('GET','suvak.vak');
	xhr.onload = function() {
    if (xhr.status === 200) {
    	vkta.vak=xhr.responseText.split('\n');
    	setTimeout(()=>{ahrta.krmnm();},0);
    }
		else abort();
	};
	xhr.onerror=abort;
	xhr.send();
}
,abort,(x)=>{srh.style.width=100*x/suvaggaurvm+'%';});

var tyktvym=false;
document.body.onclick=()=>{console.log('click');context.resume();}
document.body.onpointerdown=()=>{if(tyktvym)tyktvym=false;else nivrttih();}

vkta.krmh=0;
vkta.prsnkrmh=[];
vkta.anvrtm=false;
vkta.krm=function(x)
{
	if(this.suvdti){this.vdti=true;this.nx=x;return;}
	let krmh=parseInt(this.vak[this.krmh].split(' ')[x]);
	if(typeof(krmh)==='undefined'){cb();return;}
	let vakym='';
	if(x==6&&krmh==0)
	{	
		let purvkrmh=this.prsnkrmh.pop();
		if(purvkrmh)krmh=purvkrmh;
	}
	if(krmh==0||krmh>=this.vak.length){
		nivrttih();
		vakym=this.uttrah[x];
	}
	else
	{
		vakym=this.vak[krmh].split(' ')[0]
		this.krmh=krmh;
		if(vakym.includes('&'))this.prsnkrmh.push(krmh);
	}
	if(x!=6)vakym=this.prsnah[x]+','+vakym;
	this.suvdti=true;
	this.vdti=true;
	let bagkrmh=0;
	let bagah=vakym.split(',');
	let vacnm=()=>{
		if(bagkrmh<bagah.length-1)
			suvacnarmbh(bagah[bagkrmh],()=>{},vacnm);
		else suvacnarmbh(bagah[bagkrmh],
			(k)=>{setTimeout(()=>{
				if(!this.anvrtm){this.vdti=false;cb();}
				else if(krmh==0){this.vdti=false;cb();nivrttih();}
				else this.nx=x;
				},Math.max(k-0.6,0.5)*1000);},
			()=>{
				this.suvdti=false;
				if(this.nx){this.krm(this.nx);this.nx=0;};
			});
		bagkrmh++;
	}
	vacnm();
}
vkta.prsnah=[null,'किम॒न्यत्','किमु॑च्यते','किम॒स्मिन्','किम्प्रागु॒क्तम्','किम्',null];
vkta.uttrah=[null,'ए॒तदे॒व','ए॒तदे॒व','कस्मि॑न्','नकिमपि॑','किम्','शम्'];
const ktah=[
	['https://i.pinimg.com/originals/db/28/8a/db288ada74b24d2d18d904975b99afc2.jpg','citrm.style.objectPosition="bottom"'],
	//'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tiger_in_the_water.jpg/330px-Tiger_in_the_water.jpg',
	//'https://source.unsplash.com/2pSK9oOgCmQ/500x200',
	//'https://www.publicdomainpictures.net/pictures/390000/nahled/tiger-malerei-kunst-alt.jpg',
	//['https://images.assettype.com/freepressjournal%2F2020-04%2Ff5dc88ed-ad80-4ba9-bdd1-507c78ad5dec%2F_27DEC19BLSONI_SULTAN_01.jpg?rect=0%2C38%2C1540%2C866&w=500','citrm.style.filter="brightness(2)"'],
	//['https://thumbs-prod.si-cdn.com/WAFsoVKzLtcUGiK-GuDTMExXtuQ=/fit-in/1600x0/https://public-media.si-cdn.com/filer/20130731112159tiger-470x251.jpg','citrm.style.filter=""']
];
var arbdh=false;
hash();
var nvhash=false;
window.onhashchange=()=>{nvhash=true;};
