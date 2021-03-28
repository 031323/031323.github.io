var c=document.createElement('Canvas');
var s=document.createElementNS("http://www.w3.org/2000/svg",'svg');
document.body.style.margin=0;
document.body.style.display='flex';
document.body.style.justifyContent='center';
document.body.style.alignItems='center';
c.style.imageRendering='crisp-edges';
c.style.imageRendering='pixelated';
c.width=32;
c.height=16;
c.style.width='16em';
c.style.height='8em';
c.style.maxWidth='100vmin';
c.style.maxHeight='50vmin';
function cn(n)
{
	let ctx=c.getContext("2d");
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0,c.width,c.height);
	ctx.fillStyle = "#FFFFFF";
	for(let i=0;i<3;i++)
	{
		if(n!=i+1)
			ctx.fillRect(6+i*8,6,4,4);
		else
		{
			ctx.fillRect(5+i*8,5,6,6);
			ctx.fillStyle = "#000000";
			ctx.fillRect(6+i*8,6,4,4);
			ctx.fillStyle = "#FFFFFF";
		}
	}
}
document.body.appendChild(c);
var i=0;
var arbdh=false;
function cb(n)
{
	let ctx=c.getContext("2d");
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0,c.width,c.height);
	const bmp=[[2,2,2,2],[1,2,3,2],[2,2,3,2]];
	for(let i=0;i<3;i++)
	{
		let bg='#000000',fg='#FFFFFF';
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
function abort()
{
	document.body.removeChild(c);
	document.body.style.backgroundColor='red';
	setTimeout(function(){location.reload()},5000);
}
if(typeof suvagarmbh==="undefined")abort();
suvagarmbh(()=>{arbdh=true;},abort);
