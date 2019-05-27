var al,h,m,observer;
var d=0.02;
// Select the node that will be observed for mutations
var targetNode = document.getElementById('al');

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type == 'attributes') {
            //console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
    if(al.offsetHeight==h)
	{
		m+=d;
		al.style.marginLeft=m.toString()+"em";
		al.style.marginRight=m.toString()+"em";
	}
	else
	{
		m-=d;
		al.style.marginLeft=m.toString()+"em";
		al.style.marginRight=m.toString()+"em";
		al.style.color="black";
		observer.disconnect();
	}
};

// Create an observer instance linked to the callback function


// Start observing the target node for configured mutations

function flow()
{
	console.log("laoded");
	al=document.getElementById("al");
	h=al.offsetHeight;
	m=parseFloat(al.style.marginRight);
	observer = new MutationObserver(callback);
	observer.observe(targetNode, config);
	m+=d;
	al.style.marginLeft=m.toString()+"em";
	al.style.marginRight=m.toString()+"em";
}
