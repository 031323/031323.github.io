var swP=new Array();

function css( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property );
}
function getTextWidth(text, font) {
	if(text==='kck')return getTextWidth(' ',font);
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}
function S8(glt,ss)
{
	var khchk;
	var sw;
	var dvv,wow;
	var L1=new Array(),L2=new Array(),Lw=new Array();
	
	
	glt.style.marginLeft=0;
	glt.style.marginRight=0;
	glt.style.textAlignLast="justify";
	glt.style.wordSpacing="-.25em";
	//document.fonts.ready.then(function(){
	var i;
		//document.title="88";
		sw=new Array();
		for(i=0;i<ss.length;i++)
		{
			//khchk.innerHTML=ss[i];
			//sw.push(khchk.offsetWidth);
			sw.push(getTextWidth(ss[i],css(glt,'font-weight')+" "+css(glt,'font-size')+" "+css(glt,'font-family')))
		}
		//swP.push(sw);

	
	
	/*var ks="";
	for(i=1;i<=150;i++)
		ks+=i.toString()+"<br>";
	glt.innerHTML=ks;*/
	dvv=glt.offsetWidth-1;
	
	var wl=0,wW=0;
	for(i=0;i<sw.length;i++)
	{
		wl+=sw[i];
		if(sw[i]>wW)wW=sw[i];
	}
	
	var H=0;
	var chil=1;
	var M1=dvv-wW;//wl/sw.length;
	M1/=chil;
	var nL=Math.ceil(wl/M1);
	var JnL=dvv/(getTextWidth("ॐ",css(glt,'font-weight')+" "+css(glt,'font-size')+" "+css(glt,'font-family'))*2.0);
	if(nL>JnL)H=1;
	//if(wl/nL>dvv*nL/(nL+1))nL++;
	/*function ty(n)
	{
		if(n==JnL)return dvv*(JnL-1)/JnL;
	}*/
	
	var M=wl/nL;
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
		ddocument.body.style.backgroundColor="Cyan";
		return;
	}
	
	wow=0;wou=dvv;
	for(i=0;i<Lw.length;i++)
	{
		if(Lw[i]>wow)wow=Lw[i];
		if(Lw[i]<wou)wou=Lw[i];
	}
	
	wow=Math.min(wow*chil,dvv);
	var II=dvv-wow;
	//if(H==1)II=0;
	glt.style.marginLeft=Math.floor(II/2).toString()+"px";
	glt.style.marginRight=(II-Math.floor(II/2)).toString()+"px";
	var j;
	ks="";
	for(i=0;i<L1.length;i++)
	{
		var w=0;
		for(j=L1[i];j<L2[i];j++)
		{	
			if(ss[j]==='kck')ss[j]='';
			ks+="<span style=\"position:relative;display:inline-block;width:"+sw[j].toString()+
			";left:"+((wow-Lw[i])*(j-L1[i])/(L2[i]-L1[i]))+
			";\">"+" "+ss[j]+"</span>";
			//ks+=ss[j]+" ";
			w+=sw[j];
		}
		ks+="<br>";
		
	}
	glt.innerHTML=ks;
	//})
}
