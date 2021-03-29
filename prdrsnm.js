const color1="#900000",color2="cornsilk";
function abort()
{
	setTimeout(function(){location.reload()},5000);
}
var c=document.createElement('Canvas');
document.body.style.margin=0;
var flex=document.createElement('Div');
flex.style.display='flex';
flex.style.height='100%';
flex.style.alignItems='center';
flex.style.flexDirection='column';
var ld=document.createElement('Div');
var cd=document.createElement('Div');
var logo=new Image();
logo.onerror=(e)=>{console.log(e);abort();}
logo.src='1.svg'
logo.style.maxHeight='50vmin';
logo.style.height='10em';
ld.style.flexGrow=1;
ld.style.display='flex';
ld.style.alignItems='center';
ld.style.justifyContent='center';
ld.style.backgroundColor=color1;
ld.style.width='100%';
ld.style.textAlign='center';
logo.onload=()=>{
	flex.appendChild(ld);
	ld.appendChild(logo);
	cd.appendChild(c);
	flex.appendChild(cd);
	document.body.appendChild(flex);
}
c.style.imageRendering='crisp-edges';
c.style.imageRendering='pixelated';
c.width=32;
c.height=16;
c.style.height='8em';
c.style.maxHeight='50vmin';
function cn(n)
{
	let ctx=c.getContext("2d");
	ctx.clearRect(0, 0,c.width,c.height);
	ctx.fillStyle = color2;
	for(let i=0;i<3;i++)
	{
		if(n!=i+1)
			ctx.fillRect(6+i*8,6,4,4);
		else
		{
			ctx.fillRect(5+i*8,5,6,6);
			ctx.fillStyle = color1;
			ctx.fillRect(6+i*8,6,4,4);
			ctx.fillStyle = color2;
		}
	}
}
var i=0;
var arbdh=false;
function cb(n)
{
	let ctx=c.getContext("2d");
	ctx.clearRect(0, 0,c.width,c.height);
	const bmp=[[2,2,3,2],[2,1,2,3],[1,2,3,2]];
	for(let i=0;i<3;i++)
	{
		let bg=color1,fg=color2;
		if(i+1==n)
		{
			[bg,fg]=[fg,bg];
			ctx.fillStyle=bg;
			ctx.fillRect(4+i*8,4,8,8);
		}
		ctx.fillStyle=fg;
		ctx.fillRect(5+i*8,5,6,6);
		ctx.fillStyle=bg;
		ctx.fillRect(6+i*8,6,4,4);
		ctx.fillStyle=fg;
		ctx.fillRect(5+i*8+bmp[i][0],5+bmp[i][1],bmp[i][2],bmp[i][3]);
	}
}
var cx=0;
function cr()
{
	if(arbdh)
	{
		function cp(e)
		{
			let R=c.getBoundingClientRect();
			let x=(e.clientX-R.left)*c.width/R.width;
			let y=(e.clientY-R.top)*c.height/R.height;
			for(let i=0;i<3;i++)
				if(x>4+i*8&&x<12+i*8&&y>4&&y<12)
				{return i+1;}
			return 0;
		}
		c.onpointerdown=(e)=>{cx=cp(e);cb(cx);};
		c.onpointermove=(e)=>{if(cp(e)!=cx){cx=0;cb(0);}}
		c.onpointerout=()=>{cb(0);}
		c.onpointerup=()=>{cb(0);}
		cb(0);
		return;
	}
	i+=1;
	let t=0;
	if(i>6)i=1;
	if(i%2==0){cn(i/2);t=4;}
	else {cn(0);t=1;}
	setTimeout(cr,t*100);
}
cr();
if(typeof suvagarmbh==="undefined")abort();
suvagarmbh(()=>{arbdh=true;},abort);
