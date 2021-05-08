//import {lv} from './lv.js'

function abort()
{
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
	krmankh[i].style.height='50%';
	krmankh[i].style.backgroundColor='white';
	//krmankh[i].style.boxShadow='0 0 5px 5px gray';
	//krmankh[i].style.filter='invert(1)';
	ahrta.ahrnm(krmankh[i],'ankah/'+Math.floor((i+1)/8).toString()+'.svg');
	krmdrsnm.appendChild(krmankh[i]);
}
var	bk=new Image();
bk.style.objectFit='contain';
bk.style.margin='auto';
bk.style.marginRight=0;
bk.style.borderRadius='0%';
bk.style.width='18%';
bk.style.height='60%';
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
citrm.style.height='100%';
citrm.style.width='100%';
citrm.style.objectFit='cover';
citrm.style.objectPosition='bottom';
citrm.style.borderRadius='calc(var(--iw) * 0.01)';
//ahrta.ahrnm(citrm,'1.jpg');
//ankah.appendChild(citrm);
ptlm.appendChild(ankah);
var suckh=document.createElement('Div');
suckh.style.marginTop='0%';
suckh.style.height='1.5%';
suckh.style.width='100%';
suckh.style.backgroundColor='gray';
var srh=document.createElement('Div');
srh.style.height='100%';
srh.style.width='0%';
srh.style.backgroundColor='white';
suckh.appendChild(srh);
ptlm.appendChild(suckh);
var nodnani=document.createElement('Div');
nodnani.style.height='50%';
nodnani.style.margin='auto';
nodnani.style.width='100%';
nodnani.style.display='flex';
nodnani.style.flexDirection='row';
nodnani.style.flexWrap='wrap';
nodnani.style.justifyContent='space-evenly';
nodnani.style.alignContent='space-evenly'
nodnani.style.opacity='0';
const nudynamani=['Iminus.svg','Iup.svg','Iplus.svg','Ileft.svg','Idown.svg','Iright.svg'];
var nodnm=[]
const riktih=0.2;
for(let i=0;i<6;i++)
{
	nodnm[i]=new Image();
	nodnm[i].style.objectFit='contain';
	nodnm[i].style.borderRadius='calc(var(--iw) * 0.02)';
	nodnm[i].style.width=33.3333*(1-riktih)+'%';
	nodnm[i].style.height=50*(1-riktih*3/4*3/2)+'%';
	nodnm[i].style.backgroundColor='white';
	//nodnm[i].style.boxShadow='0px 0px 0px 5px black';
	//nodnm[i].style.filter='invert(1)'
	ahrta.ahrnm(nodnm[i],'ankah/'+nudynamani[i]);
	nodnani.appendChild(nodnm[i]);
}
ptlm.appendChild(nodnani);
function vhs()
{
	let w=480;
	if(window.innerWidth<w)w=window.innerWidth;
	if(window.innerHeight<w*4/3)w=Math.floor(window.innerHeight*3/4);
	w*=.95;
	ptlm.style.width=w;
	ptlm.style.height=w*4/3;
	document.documentElement.style.setProperty('--iw',w+'px');
}
vhs();
window.onresize=vhs;

document.body.appendChild(ptlm);

var ca=[false,false,false,false,false,false];
var cl=[false,false,false,false,false,false];


var cx=0;
function cb()
{
	nodnm[cx-1].style.filter='';
}
function cr()
{
	suckh.style.opacity=0;
	krmdrsnm.style.opacity=1;
	ankah.style.opacity=1;
	nodnani.style.opacity=1;
	function krm(){if(cx){cl[2]=false;cl[5]=false;nodnm[cx-1].style.filter='invert(1)';vkta.krm(cx);}}
	for(let i=0;i<6;i++)
		nodnm[i].onpointerdown=(e)=>{if(vkta.vdti)return;cx=i+1;krm();};
	document.body.onkeydown=(e)=>{if(vkta.vdti)return;
		cx=0;
		if(e.key=='ArrowLeft')cx=4;
		if(e.key=='ArrowRight')cx=6;
		if(e.key=='ArrowDown')cx=5;
		if(e.key=='ArrowUp')cx=2;
		if(e.key=='+')cx=3;
		if(e.key=='-')cx=1;			
		krm();
	}
	for(let i=0;i<6;i++)ca[i]=true;
	cl[5]=true;
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

document.body.onclick=()=>{console.log('click');context.resume();}

vkta.krmh=0;
vkta.prsnkrmh=[];
vkta.krm=function(x)
{
	if(this.suvdti){this.vdti=true;this.nx=x;return;}
	let krmh=this.vak[this.krmh].split(' ')[x];
	if(typeof(krmh)==='undefined'){cb();return;}
	let vakym='';
	if(x==6&&krmh==0)
	{	
		let purvkrmh=this.prsnkrmh.pop();
		if(purvkrmh)krmh=purvkrmh;
	}
	if(!parseInt(krmh)||krmh>=this.vak.length){
		vakym=this.uttrah[x];
	}
	else
	{
		vakym=this.vak[krmh].split(' ')[0]
		this.krmh=krmh;
		if(vakym.includes('&'))this.prsnkrmh.push(krmh);
	}
	this.suvdti=true;
	this.vdti=true;
	if(x==6)
		suvacnarmbh(vakym,(k)=>{setTimeout(()=>{this.vdti=false;cb();},Math.max(k-0.6,0)*1000);},
			()=>{this.suvdti=false;if(this.nx){this.krm(this.nx);this.nx=0;}});
	else
		suvacnarmbh(this.prsnah[x],()=>{},()=>{
		suvacnarmbh(vakym,(k)=>{setTimeout(()=>{this.vdti=false;cb();},Math.max(k-0.6,0)*1000);},
			()=>{this.suvdti=false;if(this.nx){this.krm(this.nx);this.nx=0;}});
		});
}
vkta.prsnah=[null,'किम॒न्यत्','किमु॑च्यते','किम॒स्मिन्','किम्प्रागु॒क्तम्','किम्',null];
vkta.uttrah=[null,'ए॒तदे॒व','ए॒तदे॒व','कस्मि॑न्','नकिमपि॑','किम्','शम्'];
