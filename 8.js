var T=0;
var G=false;
var swP=new Array();

function css( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property );
}
function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}
function S8(glt,ss)
{
	G=true;
	var khchk;
	var sw;
	var dvv,wow;
	var L1=new Array(),L2=new Array(),Lw=new Array();
	if(T>=swP.length)
	{
		//khchk = document.createElement('span');
		//glt.appendChild(khchk);
	}
	
	glt.style.marginLeft=0;
	glt.style.marginRight=0;
	glt.style.textAlignLast="justify";
	glt.style.wordSpacing="-.25em";
	//document.fonts.ready.then(function(){
	var i;
	if(T>=swP.length)
	{
		console.log("88");
		//document.title="88";
		sw=new Array();
		for(i=0;i<ss.length;i++)
		{
			//khchk.innerHTML=ss[i];
			//sw.push(khchk.offsetWidth);
			sw.push(getTextWidth(ss[i],css(glt,'font-weight')+" "+css(glt,'font-size')+" "+css(glt,'font-family')))
		}
		//swP.push(sw);
	}
	else {sw=swP[T];}
	
	
	var ks="";
	for(i=1;i<=150;i++)
		ks+=i.toString()+"<br>";
	glt.innerHTML=ks;
	dvv=glt.offsetWidth-1;
	
	var wl=0;
	for(i=0;i<sw.length;i++)
		wl+=sw[i];
	
	var M=dvv-wl/sw.length;
	var nL=Math.ceil(wl/M);
	while(true){
	M=wl/nL;
	i=0;
	var wP=0;
	while(i<sw.length)
	{
		var wL=0;
		L1.push(i);
		while(i<sw.length)
		{
			if(wL+sw[i]>=dvv)break;
			if((wP+wL+sw[i])*nL>wl*(Lw.length+1))break;
			else
			{
				wL+=sw[i];
				i++;
			}
		}
		L2.push(i);
		Lw.push(wL);
		wP+=wL;
	}
	if(Lw.length>nL)
	{
		console.log(142435);
		nL++;
		L1=new Array();
		L2=new Array();
		Lw=new Array();
	}
	else break;
	}
	wow=0;
	for(i=0;i<Lw.length;i++)
		if(Lw[i]>wow)wow=Lw[i];

	var II=dvv-wow;
	glt.style.marginLeft=Math.floor(II/2).toString()+"px";
	glt.style.marginRight=(II-Math.floor(II/2)).toString()+"px";
	var j;
	ks="";
	for(i=0;i<L1.length;i++)
	{
		var w=0;
		for(j=L1[i];j<L2[i];j++)
		{	
			//ks+="<span style=\"position:relative;display:inline-block;width:"+sw[j].toString()+
			//";left:"+((wow-Lw[i])*(j-L1[i])/(L2[i]-L1[i]))+
			//";\">"+" "+ss[j]+"</span>";
			ks+=ss[j]+" ";
			w+=sw[j];
		}
		ks+="<br>";
		
	}
	glt.innerHTML="व";//ks;
	T++;
	G=false;
	//})
}
