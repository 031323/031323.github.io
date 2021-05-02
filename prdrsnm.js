const color1='black'//'#115555',//"#900000",
const color2='white'//'cornsilk',
const color3='black'//'#115555'//'#905555';
const color4='black'//'#004444'
function abort()
{
	document.body.innerHTML="";
	setTimeout(function(){location.reload()},2000);
}

var c=document.createElement('Canvas');
document.body.style.margin=0;
document.body.style.textAlign='center';

var flex=document.createElement('Div');
flex.style.display='flex';
flex.style.height='100%';
//flex.style.width='100vmin';
flex.style.margin='auto';
flex.style.alignItems='center';
flex.style.flexDirection='column';
flex.style.backgroundColor=color3;
const box=false;
if(box)
{
	flex.style.maxWidth='40em';
	flex.style.maxHeight='40em';
	flex.style.marginLeft='auto';
	flex.style.marginRight='auto';
	flex.style.marginTop='max(calc(50vh - 20em),0px)';
}
var logo=new Image();
logo.onerror=(e)=>{console.log(e);abort();}
//logo.src='jurassic-park-2.svg';
logo.src="https://forums.macrumors.com/attachments/ideal-2d-version-gif.336684/";
//logo.style.boxShadow='0 0 0 2% #F4AAB9';
//logo.src='1.jpg';
//logo.style.borderRadius='2%';
//logo.style.borderStyle='solid';
//logo.style.borderWidth='20';
//logo.style.borderColor='white';
/*var logo=document.createElementNS("http://www.w3.org/2000/svg","svg");
logo.setAttribute("viewBox", "0 0 3 3")
logo.innerHTML=`
  <rect x="0" y="0" rx="0.25" ry="0.25" width="3" height="3" fill="rgb(171,171,171)" />
  <rect x="0" y="1" width="1" height="1.5" fill="rgb(85,85,85)" />
  <rect x="0.5" y="2" width="1.5" height="1" fill="rgb(85,85,85)" />
  <rect x="0" y="2" rx="0.25" ry="0.25" width="1" height="1" fill="rgb(85,85,85)" />
`
*/


c.style.imageRendering='crisp-edges';
c.style.imageRendering='pixelated';

//c.style.backgroundColor='red';
//c.style.height='9em';
//c.style.width='13em';
const ar=(c.width+c.height)/c.width;
const margin=0.05;
function vhs(){
	c.height=10;
	c.width=50;
	c.dr=false;
	let chr=(1-c.height/(c.height+c.width))*.95;
	let vh = Math.floor(window.innerHeight) * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	logo.style.margin='auto';
	if(window.innerHeight*chr<window.innerWidth)
		logo.style.marginTop=Math.min((window.innerWidth-window.innerHeight*chr)/2,window.innerHeight*margin/2);
	else 
	{
		logo.style.marginTop='0';
		if((window.innerHeight*.95-window.innerWidth)/window.innerWidth>18/50)
		{
			c.dr=true;
			c.height=18;
			c.width=26;
		}
	}
	logo.style.width='calc( var(--vh,1vh) * '+(chr*100).toString()+' )';
	c.style.width='calc(calc(calc(var(--vh,1vh) * 95) - min(100vw, '+logo.style.width+')) * '+(c.width/c.height).toString()+')';
	if(arbdh){if(vkta.vdti)cb(cx);else cb(0);}
}
vhs();
window.onresize=vhs;
//c.style.height=Math.ceil(100*c.height/c.width/ar).toString()+'%';
//c.style.width='calc( var(--vh,1vh) * '+Math.floor((1-chr-margin)*100*c.width/c.height)+' )';
//c.style.maxHeight=Math.floor(c.height*100/c.width)+'vw';
c.style.maxWidth='100vw';
//c.style.objectFit='contain';

var ld=document.createElement('Div');
ld.style.flexGrow=1;
//ld.style.height='calc(99% - min('+c.style.height+','+c.style.maxHeight+'))';
//ld.style.height='calc(99% - '+c.style.height+')';
//ld.style.minHeight='calc(99% - '+c.style.maxHeight+')';
ld.style.display='flex';
ld.style.alignItems='center';
ld.style.justifyContent='center';
ld.style.backgroundColor=color4;
//ld.style.width='100%';
ld.style.textAlign='center';
const logorw=100*(c.width-4)/c.width;
//logo.style.height=(100/ar*logorw/(100-Math.ceil(100*c.height/c.width/ar))).toString()+'%';
//logo.style.width='50%';
//logo.style.height='33vh';
//logo.style.maxHeight=logorw.toString()+'vw';
logo.style.display='inline-block';
logo.style.maxWidth='100vw';
//logo.style.objectFit='contain';


logo.onload=()=>
{
	flex.appendChild(ld);
	//var d1=document.createElement('Div');
	//d1.style.width='10%';
	//d1.appendChild(logo);
	ld.appendChild(logo);
	flex.appendChild(c);
	document.body.appendChild(flex);
}
function cn(n)
{
	let ctx=c.getContext("2d");
	ctx.clearRect(0, 0,c.width,c.height);
	ctx.fillStyle = color2;
	for(let i=0;i<3;i++)
	{
		if(n!=i+1)
			ctx.fillRect(3+i*8,c.height/2-2,4,4);
		else
		{
			ctx.fillRect(2+i*8,c.height/2-3,6,6);
			ctx.fillStyle = color1;
			ctx.fillRect(3+i*8,c.height/2-2,4,4);
			ctx.fillStyle = color2;
		}
	}
}
var cni=0;
var arbdh=false;
var ca=[false,false,false,false,false,false];
var cl=[false,false,false,false,false,false];
function bxy(i)
{
	if(c.dr)
		return [(i%3)*8,Math.floor(i/3)*8];
	else
	{
		if(i==1)i=3;
		else if(i==2)i=1;
		else if(i==3)i=2;
		return [i*8,0];
	}
}
function cb(n)
{
	let ctx=c.getContext("2d");
	ctx.clearRect(0, 0,c.width,c.height);
	const bmp=[[2,2,3,2],[2,2,2,3],[1,2,3,2],[2,2,3,2],[2,1,2,3],[1,2,3,2]];
	for(let i=0;i<6;i++)
	{
		let [bx,by]=bxy(i);
		let bg=color1,fg=color2;
		let lg='80';
		let hg=(256-parseInt(lg)).toString();
		let s1='rgb('+lg+','+lg+','+lg+')';
		let s2='rgb('+hg+','+hg+','+hg+')';
		if(cl[i])
		{
			ctx.fillStyle='orange';
			ctx.fillRect(1+bx,1+by,1,1);
			ctx.fillRect(8+bx,1+by,1,1);
			ctx.fillRect(1+bx,8+by,1,1);
			ctx.fillRect(8+bx,8+by,1,1);
		}
		if(!ca[i])
		{
			//console.log(fg,bg);
			ctx.fillStyle='rgb(128,128,128)';
			//ctx.fillRect(3+bx,3+by,4,4);
			//ctx.fillStyle=bg;
			ctx.fillRect(4+bx,4+by,2,2);
			continue;
		}
		if(i+1==n)
		{
			[bg,fg]=[fg,bg];
			[s1,s2]=[s2,s1];
			ctx.fillStyle=bg;
			ctx.fillRect(1+bx,1+by,8,8);
		}
		ctx.fillStyle=fg;
		ctx.fillRect(2+bx,2+by,6,6);
		ctx.fillStyle=bg;
		if(i==0||i==2)
		{
			ctx.fillStyle=s1;
			ctx.fillRect(3+bx,4+by,4,2);
			if(i==2)
				ctx.fillRect(4+bx,3+by,2,4);
		}
		else
		{
			ctx.fillRect(3+bx,3+by,4,4);
			ctx.fillStyle=s2;
			ctx.fillRect(2+bx+bmp[i][0],2+by+bmp[i][1],bmp[i][2],bmp[i][3]);
		}
	}
}
var cx=0;
function cr()
{
	if(arbdh)
	{
		let ctx=c.getContext("2d");
		cb(0);
		setTimeout(()=>{
		function cp(e)
		{
			let R=c.getBoundingClientRect();
			let cx=0,cy=0,cw=R.width,ch=R.height;
			let r=c.width/R.width*R.height/c.height;
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
			let x=(e.clientX-R.left-cx)*c.width/cw;
			let y=(e.clientY-R.top-cy)*c.height/ch;
			for(let i=0;i<6;i++)
			{
				let [bx,by]=bxy(i)
				if(x>1+bx&&x<9+bx&&y>1+by&&y<9+by)
				{return i+1;}
			}
			return 0;
		}
		/*c.onpointerdown=(e)=>{vkta.t0=Date.now();console.log('down');cx=cp(e);cb(cx);};
		c.onpointermove=(e)=>{if(cp(e)!=cx){cx=0;cb(0);}}
		c.onpointerout=()=>{cb(0);}
		c.onpointerup=()=>{console.log('up '+((Date.now()-vkta.t0)/1000).toString());if(cx)vkta.krm(cx);cb(0);}
		*/
		c.onpointerup=()=>{context.resume();}
		c.onpointerout=()=>{context.resume();}
		c.onpointerdown=(e)=>{if(vkta.vdti)return;cx=cp(e);if(cx){cl[2]=false;cl[5]=false;cb(cx);vkta.krm(cx);}};
		for(let i=0;i<6;i++)ca[i]=true;
		cl[5]=true;
		//ca[5]=true;
		cb(0);
		//logo.style.display='';
		},0);
		return;
	}
	let pb=true;
	if(!pb)
	{
		cni+=1;
		let t=0;
		if(cni>6)cni=1;
		if(cni%2==0){cn(cni/2);t=4;}
		else {cn(0);t=1;}
		setTimeout(cr,t*100);
	}
	else
	{
		cb(0);
		let ctx=c.getContext("2d");
		let w=8,x0=5;
		//ctx.clearRect(0, 0,c.width,c.height);
		ctx.fillStyle=color2;
		ctx.fillRect(x0+Math.max(0,cni-w),0,Math.max(0,Math.min(cni,w,c.width-2*x0-cni+w)),1);
		cni+=1;
		if(cni==c.width-2*x0+w)cni=0;
		setTimeout(cr,30);
	}
}
cr();
var vkta=new Object();
if(typeof suvagarmbh==="undefined")abort();
else suvagarmbh(()=>{
	let xhr = new XMLHttpRequest();
	xhr.open('GET','suvak.vak');
	xhr.onload = function() {
    if (xhr.status === 200) {
    	vkta.vak=xhr.responseText.split('\n');
    	setTimeout(()=>{arbdh=true;},0);
    }
		else abort();
	};
	xhr.onerror=abort;
	xhr.send();
}
,abort);
vkta.krmh=0;
vkta.krm=function(x)
{
	if(this.suvdti){this.vdti=true;this.nx=x;return;}
	let krmh=this.vak[this.krmh].split(' ')[x];
	if(typeof(krmh)==='undefined'){cb(0);return;}
	let vakym='';
	if(!parseInt(krmh)||krmh>=this.vak.length)vakym=this.uttrah[x];
	else
	{
		vakym=this.vak[krmh].split(' ')[0]
		this.krmh=krmh;
	}
	this.suvdti=true;
	this.vdti=true;
	if(x==6)
		suvacnarmbh(vakym,(k)=>{setTimeout(()=>{this.vdti=false;cb(0);},Math.max(k-0.6,0)*1000);},
			()=>{this.suvdti=false;if(this.nx){this.krm(this.nx);this.nx=0;}});
	else
		suvacnarmbh(this.prsnah[x],()=>{},()=>{
		suvacnarmbh(vakym,(k)=>{setTimeout(()=>{this.vdti=false;cb(0);},Math.max(k-0.6,0)*1000);},
			()=>{this.suvdti=false;if(this.nx){this.krm(this.nx);this.nx=0;}});
		});
}
vkta.prsnah=[null,'किमन्य॑त्।','किमु॑च्यते।','किमस्मि॑न्।','किम्प्रागु॒क्तम्।','किम्।',null];
vkta.uttrah=[null,'ए॒तदे॒व।','ए॒तदे॒व।','कस्मि॑न्।','नकिमपि॑।','','शम्'];
