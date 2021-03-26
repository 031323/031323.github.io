var c=document.createElement('Canvas');
document.body.style.margin=0;
document.body.style.display='flex';
document.body.style.justifyContent='center';
document.body.style.alignItems='center';
c.style.imageRendering='crisp-edges';
c.style.imageRendering='pixelated';
c.width=16;
c.height=16;
c.style.width='8em';
c.style.height='8em';
c.style.maxWidth='100vmin';
c.style.maxHeight='100vmin';
function cn(n)
{
	let ctx=c.getContext("2d");
	ctx.clearRect(0, 0,c.width,c.height);
	ctx.fillStyle = "#FFFFFF";
	let i=0;
	for(i=1;i<=3;i++)
	{
		if(n!=i)
			ctx.fillRect(-1+i*4,7,2,2);
		else
		{
			ctx.fillRect(-2+i*4,6,4,4);
			ctx.fillStyle = "#000000";
			ctx.fillRect(-1+i*4,7,2,2);
			ctx.fillStyle = "#FFFFFF";
		}
	}
}
document.body.appendChild(c);
var i=0;
function cr()
{
	i+=1;
	let t=0;
	if(i>6)i=1;
	if(i%2==0){cn(i/2);t=4;}
	else {cn(0);t=1;}
	setTimeout(cr,t*100);
}
cr();
