var bl,cursor,observer;

var targetNode = document.getElementById('bl');

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

var callback = function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type == 'attributes') {
            //console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
    flow();
	observer.disconnect();
};

observer = new MutationObserver(callback);

function flow()
{
	//console.log("laoded");
	bl=document.getElementById("bl");
	if(bl.style.marginLeft!==""||bl.style.marginRight!=="")
	{
		//console.log(bl.style.marginLeft+","+bl.style.marginRight);
		observer.observe(targetNode, config);
		//console.log("ow");
		bl.style.marginLeft="";
		bl.style.marginRight="";
		return;
	}
	cursor=document.getElementById("cursor");	
	var nl=bl.offsetHeight/cursor.offsetHeight;
	bl.style.marginLeft=Math.floor((bl.offsetWidth+bl.offsetLeft-cursor.offsetLeft)/(bl.offsetHeight/cursor.offsetHeight)+1).toString()+"px";
	while(bl.offsetHeight/cursor.offsetHeight>nl)
	{
		//console.log("t");
		bl.style.marginLeft=(parseInt(bl.style.marginLeft)-1).toString()+"px";
	}
	var ml=parseInt(bl.style.marginLeft);
	var m2l=Math.floor(ml/2);
	bl.style.marginLeft=(m2l).toString()+"px";
	bl.style.marginRight=(ml-m2l).toString()+"px";
	bl.style.color="black";
}

