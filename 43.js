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

function f43(x1,x2,x3,d)
{
	x1=x1.concat(["","",""]);
	var n=x1.length/4;
	if(n==1)return x1[0];
	var i,r="",R="";
	var x4=x2;
	if(x3!=0)
	{
		if(getTextWidth(x1[0]+x1[1],css(d,'font-weight')+" "+css(d,'font-size')+" "+css(d,'font-family'))>x2-x3)R+="<br>";
		else x4=x2-x3;
	}
	r+=x1[0];
	for(i=1;i<n;i++)
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
	R+=r+x1[i*4-3];
	return R;
}
