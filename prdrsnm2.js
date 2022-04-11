var ahrta=new Object();
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

function ekahrnm(url)
{
	return new Promise((resolve,reject)=>{
	
	let xhr = new XMLHttpRequest();
	let punh=()=>{setTimeout(()=>{xhr.open('GET',url);xhr.send();},2000);};
	xhr.open('GET',url);
	xhr.onload = function() {
  	  if (xhr.status === 200) {
				resolve(xhr.responseText);  
  	  }
			else punh();
		};
		xhr.onerror=punh;
		xhr.send();
		
		});
}

//ahrta.snkya++;
//import('./lv.js').then((m)=>{lv=m.lv;ahrta.krmnm();}).catch(abort);

function anknm(prtikrm)
{
	document.body.appendChild(tnknm);
	tnknm.svrclk=0;
	tnknm.lekh='';
	tnknm.vrnah=[];
	tnknm.svrah=[];
	tnknm.prtikrm=prtikrm;
	tnknm.kriyte=true;
}
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

function krmankah(snkya)
{
	krmankh=new Object();
	for(let i=0;i<snkya;i++)
	{
		krmankh[i]=[];
		for(let j=0;j<10;j++)
		{
			krmankh[i][j]=new Image();
			krmankh[i][j].style.objectFit='contain';
			krmankh[i][j].style.borderRadius='calc(var(--iw) * 0.01)';
			krmankh[i][j].style.width='9%';
			krmankh[i][j].style.marginLeft='1%';
			//if(i==0)krmankh[i].style.marginLeft=(1+10*(8-krmsnkya))+'%';
			krmankh[i][j].style.height='50%';
			krmankh[i][j].style.backgroundColor='white';
			ahrta.ahrnm(krmankh[i][j],'ankah/'+j.toString()+'.svg');
		}
	}
	return krmankh;
}
var krmankh=krmankah(krmsnkya);
for(let i=0;i<krmsnkya;i++)krmdrsnm.appendChild(krmankh[i][0]);

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

var smpadkh=document.createElement('Div');
smpadkh.style.height='30%';
smpadkh.style.width='100%';
smpadkh.style.margin='auto';
smpadkh.style.display='flex';
smpadkh.style.flexDirection='row';
smpadkh.style.flexWrap='wrap';
smpadkh.style.justifyContent='flex-start';
smpadkh.style.alignContent='space-evenly';

var ankah=document.createElement('Div');
ankah.style.margin='auto';
ankah.style.height='30%';
ankah.style.width='100%';
ankah.style.display='flex';
ankah.style.flexDirection='row';
ankah.style.flexWrap='wrap';
ankah.style.justifyContent='flex-start';
ankah.style.alignContent='space-evenly';
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
	//ankh[i].style.filter='invert(1)'
	ahrta.ahrnm(ankh[i],'ankah/'+i.toString()+'.svg');
	ankah.appendChild(ankh[i]);
}
ptlm.appendChild(krmdrsnm);
ptlm.appendChild(ankah);

var tnknm=new Image();
tnknm.style.imageRendering='crisp-edges';
tnknm.style.imageRendering='pixelated';
tnknm.style.height='100%';
tnknm.style.width='100%';
tnknm.style.position='absolute';
tnknm.style.objectFit='contain';
tnknm.style.backgroundColor='black';
tnknm.prtivacnm=function(l)
{
	suvacnarmbh(l,()=>{},()=>{
		document.body.removeChild(tnknm);
		tnknm.kriyte=false;
		tnknm.prtikrm(l);
	});
}
tnknm.onclick=(e)=>
{
	let c=tnknm;
	let R=c.getBoundingClientRect();
	let cx=0,cy=0,cw=R.width,ch=R.height;
	let c_w=7,c_h=8;
	let r=c_w/R.width*R.height/c_h;
	if(r<1)
	{
		cx=R.width*(1-r)/2;
		cw=R.width*r;
	}
	else if(r>1)
	{
		cy=R.height*(1-1/r)/2;
		ch=R.height/r;
	}
	let x=Math.floor((e.clientX-R.left-cx)*c_w/cw);
	let y=Math.floor((e.clientY-R.top-cy)*c_h/ch);
	if(x==6&&y==7)
	{
		tnknm.prtivacnm(devnagri());
	}
	else if(x>1&&y<5)
	{
		tnknm.vrnah.push('कखगघङचछजझञटठडढणतथदधनपफबभम'[y*5+x-2]);
		tnknm.svrah.push(0);
		tnknm.svrclk=0;
	}
	else if(x>1&&y>4&&x<6&&y<7)
	{
		tnknm.vrnah.push('यरलवशषसह'[(y-5)*4+x-2]);
		tnknm.svrah.push(0);
		tnknm.svrclk=0;
	}
	else if(x==6&&y>4&&y<7)
	{
		tnknm.vrnah.push('ंः'[y-5]);
		tnknm.svrah.push(0);
		tnknm.svrclk=0;
	}
	else if(x<2&&y<7)
	{
		if(tnknm.vrnah.length>0&&'अआइईऋॠऌॡउऊएऐओऔ'[y*2+x]!=tnknm.vrnah[tnknm.vrnah.length-1])tnknm.svrclk=0;
		if(tnknm.svrclk==0)
		{
			tnknm.vrnah.push('अआइईऋॠऌॡउऊएऐओऔ'[y*2+x]);
			tnknm.svrah.push(1);
			tnknm.svrclk++;
		}
		else if(tnknm.svrclk==1){{tnknm.svrah[tnknm.svrah.length-1]=2;tnknm.svrclk++;}}
		else if(tnknm.svrclk==2){tnknm.svrah[tnknm.svrah.length-1]=3;tnknm.svrclk++;}
	}
	else if(x<6&&y==7)
	{
		tnknm.svrclk=0;
	}
	console.log(devnagri());
}
function devnagri()
{
	let lekh='';
	let purvanudattah=0;
	for(let i=0;i<tnknm.svrah.length;i++)
	{
		if(tnknm.svrah[i]==2||tnknm.svrah[i]==3)break;
		else purvanudattah=i;
	}
	//let svraksrah='अआइईऋॠऌॡउऊएऐओऔ';
	//let svrcihnani=["","ा", "ि", "ी", "ृ", "ॄ", "ॢ", "ॣ", "ु", "ू", "े", "ै", "ो", "ौ"];
	for(let i=0;i<tnknm.vrnah.length;i++)
	{
		if('कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह'.includes(tnknm.vrnah[i]))lekh+=tnknm.vrnah[i]+'्';
		else if('ंः'.includes(tnknm.vrnah[i]))
		{
			let j=lekh.length-1;
			if(lekh[j]=='॒'||lekh[j]=='॑')
				lekh=lekh.slice(0,-1)+tnknm.vrnah[i]+lekh.slice(-1);
			else lekh+=tnknm.vrnah[i];
		}
		else if('अआइईऋॠऌॡउऊएऐओऔ'.includes(tnknm.vrnah[i]))
		{
			if(lekh[lekh.length-1]=='्')
			{
				lekh=lekh.substring(0,lekh.length-1);
				lekh+=["","ा", "ि", "ी", "ृ", "ॄ", "ॢ", "ॣ", "ु", "ू", "े", "ै", "ो", "ौ"]['अआइईऋॠऌॡउऊएऐओऔ'.indexOf(tnknm.vrnah[i])];
			}
			else lekh+=tnknm.vrnah[i];
			let svrhL=-1,svrhR=-1;
			for(let j=i-1;j>=0;j--)
				if(tnknm.svrah[j]!=0){svrhL=tnknm.svrah[j];break;}
			for(let j=i+1;j<tnknm.svrah.length;j++)
				if(tnknm.svrah[j]!=0){svrhR=tnknm.svrah[j];break;}
			if(tnknm.svrah[i]==2){}
			else if(tnknm.svrah[i]==3)
			{
				if(svrhL!=2&&svrhR==2)
				{
					if('आईॠॡऊएऐओऔ'.includes(tnknm.vrnah[i]))lekh+='३॒॑';
					else lekh+='१॒॑';
				}
				else lekh+='॑';
			}
			else if(tnknm.svrah[i]==1)
			{
				if(svrhR==2||svrhR==3||i<=purvanudattah)lekh+='॒';
				else if(svrhL==2)lekh+='॑';
			}
		}
	}
	return lekh;
}
ahrta.ahrnm(tnknm,'df.png');
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
//ankah.appendChild(citrm);
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


var nvm=false;
var cx=0;
function cb()
{
	nodnm[cx-1].style.filter='';
	if(nvm){prkasnm();nvm=false;}
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
	let src='';
	let vaksrc=ktah[ktakrmankh-1][0];
	if(ktah[ktakrmankh-1].length>1)src=ktah[ktakrmankh-1][1];
	if(ktah[ktakrmankh-1].length>2)eval(ktah[ktakrmankh-1][2]);
	
	if(arbdh)
	{
		ahrta.snkya=0;
		ahrta.prtikrm=()=>{
			if(vkta.vdti){nvm=true;}
			else prkasnm();
			if(ktanam==k&&src!='')citrm.style.opacity=1;
		};
	}
	function vagahrnm(src)
	{
		function punh(){setTimeout(()=>{if(ktanam==k)vagahrnm(src);},2000);}
		let xhr = new XMLHttpRequest();
		xhr.open('GET',src);
		xhr.onload = function() {
  	  if (xhr.status === 200) {
  	  	if(ktanam==k)
  	  	{
	  	  	ktnm.nvkta=xhr.responseText.split('\n');
  		  	ahrta.krmnm();
  		  }
  	  }
			else punh();
		};
		xhr.onerror=punh;
		xhr.send();
	}
	ahrta.snkya++;vagahrnm(vaksrc);
	console.log('src:'+src);
	citrm.style.opacity=0;
	if(src!='')
	{
		ahrta.snkya++;
		citrm.onload=()=>{ahrta.krmnm();};
		citrm.onerror=()=>{setTimeout(()=>{if(ktanam==k)citrm.src=src;},2000)};
		citrm.src=src;
	}
	ptlm.replaceChild(citrm,ptlm.children[2]);
}
function vktapriskarh()
{
	vkta.krmh=0;
	smpadnsjja();
	vkta.anvesnani=[];
	vkta.purvkalh=-Infinity;
	vkta.purvkrmh=0;
	vkta.nodnani=[];
	vkta.prsnkrmh=[];
}
function prkasnm()
{
	vkta.vak=ktnm.nvkta;
	vktapriskarh();
	nodnm[5].style.boxShadow='0 0 calc(var(--iw) * 0.0) calc(var(--iw) * 0.02) Orange';
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
			krmdrsnm.replaceChild(krmankh[i][ktanam[i]],krmdrsnm.children[i]);
			krmdrsnm.children[i].style.opacity=1;
		}
		else krmdrsnm.children[i].style.opacity=0;
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
function krm(){if(cx){nodnm[cx-1].style.filter='invert(1)';nodnm[5].style.boxShadow='';vkta.krm(cx);}}
function bkkrm(){
	if(ptlm.children[2]==smpadkh){if(!vkta.vdti)ptlm.replaceChild(citrm,ptlm.children[2]);}
	else {ktanam=ktanam.substring(0,ktanam.length-1);cynm();}
}
function ankdown(i){ankh[i].style.filter='invert(1)';}
function ankout(i){ankh[i].style.filter='';}
function ankkrm(i){ankout(i);if(ankh[i].style.opacity==='1'){ktanam+=i;cynm();}}
function cr()
{
	window.onhashchange=hash;
	arbdh=true;
	if(nvhash){hash();nvhash=false;}
	bk.onpointerdown=bkkrm;
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
	if(citrm.src)citrm.style.opacity=1;
	if(ktanam.length==krmsnkya)prkasnm();
	for(let i=0;i<6;i++)
		nodnm[i].onpointerdown=(e)=>{
			if(i==5&&vkta.vdti&&cx==6&&!vkta.anvrtm){tyktvym=true;vrttih();}
			if(vkta.vdti||nvm)return;cx=i+1;krm();
		};
	crkey();
}
function crkey()
{
	window.onkeyup=(e)=>
	{
		if (e.getModifierState("Fn") ||
    e.getModifierState("Hyper") ||
    e.getModifierState("OS") ||
    e.getModifierState("Super") ||
    e.getModifierState("Win") /* hack for IE */ ||
    e.getModifierState("Control") ||
    e.getModifierState("Alt")
    	)return;
		e.preventDefault();
		for(let i=0;i<10;i++)
			if(e.key==i&&key[i]){key[i]=false;ankkrm(i);}
			
		if(tnknm.kriyte)return;
		if(e.code=='Enter')smpadnm();
		
		
			smpadnankah.forEach((m,i)=>{
				if(e.code=='Key'+smpadncitrani[i])
				{
					if(ptlm.children[2]==smpadkh)m.onpointerup();
				}
			});
		
	}
	window.onkeydown=(e)=>{
		console.log(e.key+' '+e.code);
		if (e.getModifierState("Fn") ||
    e.getModifierState("Hyper") ||
    e.getModifierState("OS") ||
    e.getModifierState("Super") ||
    e.getModifierState("Win") /* hack for IE */ ||
    e.getModifierState("Control") ||
    e.getModifierState("Alt")
    )return;
		e.preventDefault();
		

    for(let i=0;i<10;i++)
    	if(key[i]&&e.key!=i){key[i]=false;ankkrm(i);}
		
    if(tnknm.kriyte)
		{
			if(e.code=='Enter')
				tnknm.prtivacnm(tnknm.lekh);
  	  for(let i=2304;i<=2431;i++)
  	  	if(String.fromCharCode(i)==e.key)
		  	  tnknm.lekh+=e.key;
  	  return;
		}
		
		if(e.code=='Backspace'||e.code=='Delete')bkkrm();
		for(let i=0;i<10;i++)
			if(e.key==i){key[i]=true;ankdown(i);}
		if(e.key=='ArrowRight'&&vkta.vdti&&cx==6&&!vkta.anvrtm)vrttih();
		else nivrttih();
		
		if(ptlm.children[2]==smpadkh)
		{
			smpadnankah.forEach((m,i)=>{
				if(e.code=='Key'+smpadncitrani[i])m.style.filter='invert(1)';
			});
		}
    
		if(vkta.vdti||nvm)return;
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
vkta.vak=[' 0 0 0 0 0 0'];
if(typeof suvagarmbh==="undefined")abort();
else suvagarmbh(()=>{
	ahrta.krmnm();
}
,abort,(x)=>{srh.style.width=100*x+'%';});

var tyktvym=false;
document.body.onclick=()=>{console.log('click');context.resume();}
document.body.onpointerdown=()=>{if(tyktvym)tyktvym=false;else nivrttih();}

vkta.anvrtm=false;
vktapriskarh();

vkta.krm=function(x)
{
	if(this.suvdti){this.vdti=true;this.nx=x;return;}
	if(x<5&&vkta.prsnkrmh.length>0){vkta.krmh=vkta.prsnkrmh[0];vkta.prsnkrmh=[];}
	let krmh=parseInt(this.vak[this.krmh].split(' ')[x]);
	if(typeof(krmh)==='undefined'){cb();return;}
	this.nodnani.push(x);
	this.purvkrmh=this.krmh;
	let vakym='';
	if(x==6&&krmh==0)
	{	
		let purvkrmh=this.prsnkrmh.pop();
		if(purvkrmh)krmh=purvkrmh;
	}
	if(x==2&&krmh==0)krmh=this.krmh;
	if(krmh==0||krmh>=this.vak.length){
		nivrttih();
		vakym=this.uttrah[x];
	}
	else
	{
		if(Date.now()/1000-this.purvkalh>10&&this.vak[this.purvkrmh].split(' ')[2]!='0')
			krmh=parseInt(this.vak[this.purvkrmh].split(' ')[2]);
		this.krmh=krmh;
		let s=this.vak[krmh].split(' ')[0].split('/');
		if(x==6&&this.vak[krmh].split(' ')[2]!=this.purvkrmh)vakym=s[0];
		else vakym=s[s.length-1];
		if(x==5)this.prsnkrmh.push(this.purvkrmh);
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
				if(this.vak[krmh].split(' ')[6]!='0'&&this.prsnkrmh.length==0)this.purvkalh=Date.now()/1000;
				this.suvdti=false;
				if(this.nx){this.krm(this.nx);this.nx=0;}
				else smpadnsjja();
			});
		bagkrmh++;
	}
	vacnm();
}
function smpadnsjja()
{
	if(ptlm.children[2]!=smpadkh)return;
	if(vkta.vak[vkta.krmh].split(' ')[0][0]=='H')
		smpadkh.replaceChild(smrtvymU,smpadkh.children[9]);
	else if(vkta.vak[vkta.krmh].split(' ')[0][0]=='J')
		smpadkh.replaceChild(smrtvymH,smpadkh.children[9]);
	else
		smpadkh.replaceChild(smrtvymJ,smpadkh.children[9]);
}
function smpadnm()
{
	//let k=Date.now()/1000;
	//if(k-smpadnm.k<0.5||smpadnm.k==0)
	smpadnm.n++;
	//smpadnm.k=k;
	let p=new Promise((resolve,reject)=>resolve());
	if(smpadnm.n==7)p=ekahrnm('vak/0.vak');
	if(smpadnm.n>=7&&ptlm.children[2]==citrm)
	{
		p.then((r)=>{
			if(typeof(r)!='undefined')
			{
				vkta.kosh=r.split('\n');
				vkta.privrtnani=[vkta.kosh];
			}
			ptlm.replaceChild(smpadkh,ptlm.children[2]);
			smpadnsjja();
		})
	}
}
/*
	#ahrnm
	krmh!=0#vakyanth
	krmh!=0#vakytnknm +cynm+nvvakym+vakyprivrtnm+upvakyprivrtnm+nvvarta
	cynm(MN)[tnkith,prinamh1,prinamh2,...] i=0? +nvvakym+vakyprivrtnm+upvakyprivrtnm-snketprivrtnm-nvvarta
																				 else -nvvakym-vakyprivrtnm-upvakyprivrtnm+snketprivrtnm-nvvarta
	
	(nvvarta,nvvakym,vakyprivrtnm,upvakyprivrtnm,snketprivrtnm)
		-cynm-nvvakym-vakyprivrtnm-upvakyprivrtnm+snketprivrtnm-nvvarta
*/
smpadnm.n=0;
//smpadnm.k=0;
citrm.onclick=smpadnm;
var ahrnm=new Image(),vakytnknm=new Image(),cynmN=new Image(),cynmM=new Image(),nvvakym=new Image(),vakyprivrtnm=new Image(),upvakyprivrtnm=new Image(),nvvarta=new Image(),nirakrnm=new Image(),smrtvymU=new Image(),smrtvymJ=new Image(),smrtvymH=new Image();
const smpadncitrani='AVNMYPOKXUJH';
var smpadnankah=[ahrnm,vakytnknm,cynmN,cynmM,nvvakym,vakyprivrtnm,upvakyprivrtnm,nvvarta,nirakrnm,smrtvymU,smrtvymJ,smrtvymH];
smpadnankah.forEach((m,i)=>{
	m.style.objectFit='contain';
	m.style.borderRadius='calc(var(--iw) * 0.02)';
	m.style.width='18%';
	m.style.marginLeft='2%';
	if(i==0||i==5)m.style.marginLeft='1%';
	m.style.height='44%';
	m.style.backgroundColor='white';
	//m.style.filter='invert(1)'
	ahrta.ahrnm(m,'ankah/'+smpadncitrani[i]+'_LiberationMono-Bold.svg');
	m.style.opacity=1;
	m.onpointerdown=()=>{m.style.filter='invert(1)';};
	m.onpointerout=()=>{m.style.filter='';}
	m.onpointerup=m.onpointerout;
	if(i<10)smpadkh.appendChild(m);
});

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

ahrnm.onpointerup=()=>{
	ahrnm.style.filter='';
	download(parseInt(ktanam)+'.vak',vkta.vak.join('\n'))
}
nvvakym.onpointerup=()=>{
	console.log('nvvakym');
	nvvakym.style.filter='';
	if(vkta.suvdti||vkta.vdti)return;
	if(vkta.nodnani.length==0)return;
	vkta.vdti=true;
	console.log('nv2');
	anknm((l)=>{
		let c=vkta.vak[vkta.purvkrmh].split(' ');
		c[vkta.nodnani[vkta.nodnani.length-1]]=(vkta.vak.length).toString();
		vkta.vak[vkta.purvkrmh]=c.join(' ');
		vkta.krmh=vkta.vak.length;
		if(vkta.nodnani[vkta.nodnani.length-1]==2)
			vkta.vak.push(l+' 0 0 0 0 0 '+vkta.purvkrmh.toString());
		else vkta.vak.push(l+' 0 0 0 0 0 0');
		smpadnsjja();
		vkta.vdti=false;
	});
}

vakytnknm.onpointerup=()=>{
	console.log('nvvakym');
	vakytnknm.style.filter='';
	if(vkta.suvdti||vkta.vdti)return;
	vkta.vdti=true;
	anknm((l)=>{
		vkta.krmh=vkta.vak.length;
		vkta.vak.push(l+' 0 0 0 0 0 0');
		smpadnsjja();
		vkta.vdti=false;
	});
}


vakyprivrtnm.onpointerup=()=>{
	vakyprivrtnm.style.filter='';
	if(vkta.suvdti||vkta.vdti)return;
	vkta.vdti=true;
	anknm((l)=>{
		let c=vkta.vak[vkta.krmh].split(' ');
		if(c[0][0]=='J')c[0]='J'+l;
		if(c[0][0]=='H')c[0]='H'+l;
		else c[0]=l;
		vkta.vak[vkta.krmh]=c.join(' ');
		vkta.vdti=false;
	});
}

upvakyprivrtnm.onpointerup=()=>{
	upvakyprivrtnm.style.filter='';
	if(vkta.suvdti||vkta.vdti)return;
	vkta.vdti=true;
	anknm((l)=>{
		let c=vkta.vak[vkta.krmh].split(' ');
		if(c[0].includes('/'))c[0]=c[0].split('/')+'/'+l;
		else	c[0]+='/'+l;
		vkta.vak[vkta.krmh]=c.join(' ');
		vkta.vdti=false;
	});
}

nirakrnm.onpointerup=()=>{
	if(vkta.suvdti||vkta.vdti){nirakrnm.style.filter='';return;}
	if(vkta.krmh==vkta.purvkrmh){nirakrnm.style.filter='';return;}
	let c=vkta.vak[vkta.purvkrmh].split(' ');
	c[vkta.nodnani[vkta.nodnani.length-1]]='0';
	vkta.vak[vkta.purvkrmh]=c.join(' ');
	vkta.krmh=vkta.purvkrmh;
	cx=0;
	vkta.vdti=true;
	suvacnarmbh('नैवम्',()=>{},()=>{vkta.vdti=false;nirakrnm.style.filter='';smpadnsjja();});
}

smrtvymJ.onpointerup=()=>{
	smrtvymJ.style.filter='';
	if(vkta.suvdti||vkta.vdti)return;
	if(smpadkh.children[9]!=smrtvymJ)return;
	let c=vkta.vak[vkta.krmh].split(' ');
	if(c[0]=='')return;
	c[0]='J'+c[0];
	vkta.vak[vkta.krmh]=c.join(' ');
	console.log(vkta.vak);
	smpadkh.replaceChild(smrtvymH,smpadkh.children[9]);
}

smrtvymH.onpointerup=()=>{
	smrtvymH.style.filter='';
	if(vkta.suvdti||vkta.vdti)return;
	if(smpadkh.children[9]!=smrtvymH)return;
	let c=vkta.vak[vkta.krmh].split(' ');
	if(c[0][0]!='J'){console.log('!J');return;}
	c[0]='H'+c[0].substring(1);
	vkta.vak[vkta.krmh]=c.join(' ');
	console.log(vkta.vak);
	smpadkh.replaceChild(smrtvymU,smpadkh.children[9]);
}

smrtvymU.onpointerup=()=>{
	smrtvymU.style.filter='';
	if(vkta.suvdti||vkta.vdti)return;
	if(smpadkh.children[9]!=smrtvymU)return;
	let c=vkta.vak[vkta.krmh].split(' ');
	if(c[0][0]!='H'){console.log('!H');return;}
	c[0]=c[0].substring(1);
	vkta.vak[vkta.krmh]=c.join(' ');
	console.log(vkta.vak);
	smpadkh.replaceChild(smrtvymJ,smpadkh.children[9]);
}

cynmM.onpointerup=()=>{
	if(vkta.suvdti||vkta.vdti){cynmM.style.filter='';return;}
	if(vkta.anvesnani.length==0||vkta.krmh!=vkta.anvesnani[vkta.cynkrmh])
	{
		if(vkta.purvkrmh==vkta.krmh){cynmM.style.filter='';return;}
		vkta.anvesnani=[vkta.krmh];
		vkta.cynstanm=vkta.purvkrmh;
		vkta.cynkrmh=0;
		vkta.cynnodnm=vkta.nodnani[vkta.nodnani.length-1];
		anvesi.postMessage([vkta.vak[vkta.anvesnani[0]].split(' ')[0],vkta.vak]);
	}
	let p=new Promise((resolve,reject)=>resolve());
	vkta.vdti=true;
	if(vkta.cynkrmh+1>=vkta.anvesnani.length)
	{
		vkta.vdti=true;
		if(vkta.cynkrmh!=0)anvesi.postMessage('M');
		p=new Promise((resolve,reject)=>{
			anvesi.onmessage=(e)=>{
				if(typeof(e.data)!='undefined'){vkta.anvesnani.push(e.data);resolve();}
				else {vkta.vdti=false;cynmM.style.filter='';reject();return;}
			}
		});
	}
	p.then(()=>{
		vkta.cynkrmh+=1;
		console.log('cynkrmh '+vkta.cynkrmh);
		if(vkta.cynkrmh==1)
		{
			vkta.vikrtvym=vkta.vak[vkta.anvesnani[0]];
			if(
				vkta.anvesnani[0]==vkta.vak.length-1
				&&vkta.vak[vkta.anvesnani[0]].split(' ').reduce((a,c,i)=>{
					if(i==0||i==2)return true;
					else return a&&(c=='0');
				},true)
			){vkta.vak.pop();}
		}
		vakcynm(vkta.cynkrmh).then(()=>{cynmM.style.filter='';});
	}).catch(()=>{});
}
cynmN.onpointerup=()=>{
	if(vkta.suvdti||vkta.vdti){cynmN.style.filter='';return;}
	if(vkta.cynkrmh>0)
	{
		vkta.cynkrmh-=1;
		vkta.vdti=true;
		vakcynm(vkta.cynkrmh).then(()=>{cynmN.style.filter='';});
	}
	else cynmN.style.filter='';
}
function vakcynm(krmh)
{
	console.log('NM '+krmh);
	return new Promise((resolve,reject)=>{
		let c=vkta.vak[vkta.cynstanm].split(' ');
		if(krmh==0&&vkta.vak[vkta.anvesnani[krmh]]!=vkta.vikrtvym)
		{
			vkta.vak.push(vkta.vikrtvym);
			vkta.anvesnani[krmh]=vkta.vak.length-1;
		}
		if(c[vkta.cynnodnm]==vkta.krmh)
		{
			c[vkta.cynnodnm]=vkta.anvesnani[krmh];
			vkta.vak[vkta.cynstanm]=c.join(' ');
		}
		vkta.krmh=vkta.anvesnani[krmh];
		smpadnsjja();
		suvacnarmbh(vkta.vak[vkta.krmh].split(' ')[0].split('/')[0],()=>{},()=>{vkta.vdti=false;resolve();});
	});
}
vkta.prsnah=[null,'किम॒न्यत्','किमु॑च्यते','किम॒स्मिन्','किम्प्रागु॒क्तम्','किम्',null];
vkta.uttrah=[null,'ए॒तदे॒व','ए॒तदे॒व','कस्मि॑न्','नकिमपि॑','किम्',''];//शम्
const ktah=[
	['vak/1.vak','krnh.png','citrm.style.imageRendering="crisp-edges";citrm.style.imageRendering="pixelated";'],
	//[0,'',''],
];

var arbdh=false;
hash();
var nvhash=false;
window.onhashchange=()=>{nvhash=true;};
ahrta.snkya++;
var anvesi=new Worker('./anvesi.js');
anvesi.onerror=abort;
anvesi.onmessage=()=>{
	ahrta.krmnm();
	anvesi.onmessage=undefined;
}
window.onblur=()=>{nivrttih();vkta.purvkalh=-Infinity;}
