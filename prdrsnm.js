const color1='#115555',//"#900000",
color2='cornsilk',
color3='#115555';//'#905555';
color4='#004444';
function abort()
{
	//setTimeout(function(){location.reload()},5000);
}
var c=document.createElement('Canvas');
document.body.style.margin=0;
document.body.style.textAlign='center';

var flex=document.createElement('Div');
flex.style.display='flex';
flex.style.height='100%';
flex.style.width='100vmin';
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
logo.src='1.svg'
logo.style.height='28vh';
//logo.style.width='20em';
//logo.style.height='33vh';
//logo.style.width='100vw';
logo.style.maxHeight='50vw';
//logo.style.maxWidth='100vw';
//logo.style.objectFit='contain';

var ld=document.createElement('Div');
ld.style.flexGrow=1;
ld.style.display='flex';
ld.style.alignItems='center';
ld.style.justifyContent='center';
ld.style.backgroundColor=color4;
ld.style.width='100%';
ld.style.textAlign='center';

logo.onload=()=>{
	flex.appendChild(ld);
	ld.appendChild(logo);
	flex.appendChild(c);
	document.body.appendChild(flex);
}
c.style.imageRendering='crisp-edges';
c.style.imageRendering='pixelated';
c.height=18;
c.width=26;
//c.style.height='9em';
//c.style.width='13em';
c.style.height='69vw';
//c.style.width='100vw';
c.style.maxHeight='39vh';
//c.style.maxWidth='100vw';
//c.style.objectFit='contain';
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
var i=0;
var arbdh=false;
function cb(n)
{
	let ctx=c.getContext("2d");
	ctx.clearRect(0, 0,c.width,c.height);
	const bmp=[[2,2,3,2],[2,2,2,3],[1,2,3,2],[2,2,3,2],[2,1,2,3],[1,2,3,2]];
	for(let i=0;i<6;i++)
	{
		let bg=color1,fg=color2;
		if(i+1==n)
		{
			[bg,fg]=[fg,bg];
			ctx.fillStyle=bg;
			ctx.fillRect(1+(i%3)*8,1+Math.floor(i/3)*8,8,8);
		}
		ctx.fillStyle=fg;
		ctx.fillRect(2+(i%3)*8,2+Math.floor(i/3)*8,6,6);
		ctx.fillStyle=bg;
		if(i==0||i==2)
		{
			ctx.fillRect(3+(i%3)*8,4+Math.floor(i/3)*8,4,2);
			if(i==2)
				ctx.fillRect(4+(i%3)*8,3+Math.floor(i/3)*8,2,4);
		}
		else
		{
			ctx.fillRect(3+(i%3)*8,3+Math.floor(i/3)*8,4,4);
			ctx.fillStyle=fg;
			ctx.fillRect(2+(i%3)*8+bmp[i][0],2+Math.floor(i/3)*8+bmp[i][1],bmp[i][2],bmp[i][3]);
		}
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
				if(x>1+(i%3)*8&&x<9+(i%3)*8&&y>1+Math.floor(i/3)*8&&y<9+Math.floor(i/3)*8)
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
else suvagarmbh(()=>{arbdh=true;},abort);
var text='\
a 23 4 .\
b 67 .\
';
