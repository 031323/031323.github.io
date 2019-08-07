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

function f43(x1,x2,x3,d,G=false)
{
	var w1=new Array();
	var i;
	x1=x1.concat(["","",""]);
	if(G)
	{
		for(i=0;i<x1.length;i++)
			w1.push(getTextWidth(x1[i],css(d,'font-weight')+" "+css(d,'font-size')+" "+css(d,'font-family')));
	}
	
	var n=x1.length/4;
	if(n==1)return x1[0];
	var r="",R="",rw=0;
	var x4=x2;
	if(x3!=0)
	{
		if(G)
		{
			if(w1[0]+w1[1]>x2-x3)R+="<br>";
			else x4=x2-x3;
		}
		else
		{
			if(getTextWidth(x1[0]+x1[1],css(d,'font-weight')+" "+css(d,'font-size')+" "+css(d,'font-family'))>x2-x3)R+="<br>";
			else x4=x2-x3;
		}
	}
	r+=x1[0];
	if(G)rw+=w1[0];
	for(i=1;i<n;i++)
	{
		if(G)
		{
			if(rw+w1[i*4-2]+w1[i*4]+w1[i*4+1]<=x4)
			{
				r+=x1[i*4-2]+x1[i*4];
				rw+=w1[i*4-2]+w1[i*4];
			}
			else
			{
				x4=x2;
				R+=r+x1[i*4-3]+"<br>";
				r=x1[i*4-1]+x1[i*4];
				rw=w1[i*4-1]+w1[i*4];
			}
		}
		else
		{
			if(getTextWidth(r+x1[i*4-2]+x1[i*4]+x1[i*4+1],css(d,'font-weight')+" "+css(d,'font-size')+" "+css(d,'font-family'))<=x4)
				r+=x1[i*4-2]+x1[i*4];
			else
			{
				x4=x2;
				R+=r+x1[i*4-3]+"<br>";
				r=x1[i*4-1]+x1[i*4];
			}
		}
	}
	R+=r+x1[i*4-3];
	return R;
}
