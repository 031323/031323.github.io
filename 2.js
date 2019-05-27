var bl,cursor;

function flow()
{
	console.log("laoded");
	bl=document.getElementById("bl");
	
	
	cursor=document.getElementById("cursor");	
	var nl=bl.offsetHeight/cursor.offsetHeight;
	bl.style.marginLeft=Math.floor((bl.offsetWidth+bl.offsetLeft-cursor.offsetLeft)/(bl.offsetHeight/cursor.offsetHeight)+1).toString()+"px";
	while(bl.offsetHeight/cursor.offsetHeight>nl)
	{
		console.log("t");
		bl.style.marginLeft=(parseInt(bl.style.marginLeft)-1).toString()+"px";
	}
	var ml=parseInt(bl.style.marginLeft);
	var m2l=Math.floor(ml/2);
	bl.style.marginLeft=(m2l).toString()+"px";
	bl.style.marginRight=(ml-m2l).toString()+"px";
	bl.style.color="black";
}
