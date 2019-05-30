function S4(glt,s)
{
	//var khchk;
	//var ss,sw,l1,l2,lw;
	//var L1,L2,Lw;
	//var dvv,wow;
	//var con,cow,LW;	
	let khchk = document.createElement('span');
	glt.appendChild(khchk);	
	glt.style.marginLeft=0;
	glt.style.marginRight=0;
	glt.style.textAlignLast="left";
	glt.style.wordSpacing="-0.25em";

	document.fonts.ready.then(function(){
	ss=s.split(' ');
	sw=new Array();
	var i;
	for(i=0;i<ss.length;i++)
	{
		khchk.innerText=ss[i];
		sw.push(khchk.offsetWidth);
	}
	khchk.innerText="";
	for(i=1;i<=150;i++)
		khchk.innerHTML+=i.toString()+"<br>";
	
	
	dvv=glt.offsetWidth-1;
	khchk.innerText="";
	
	l1=new Array();
	l2=new Array();
	lw=new Array();

		
	i=0;
	while(i<sw.length)
	{
		var w=0;
		l1.push(i);
		while(i<sw.length)
		{
			if(w+sw[i]<dvv)w+=sw[i];
			else break;
			i++;
		}
		l2.push(i);
		lw.push(w);
	}
	
	var kn=false;
	
	while(!kn)
	{
		wow=0;
		con=0;cow=0;
		for(i=0;i<l1.length;i++)
		{
			if(lw[i]-sw[l2[i]-1]>=cow)
			{
				cow=lw[i]-sw[l2[i]-1];
				con=i;
			}
			if(lw[i]>wow)
				wow=lw[i];
		}
		L1=l1.slice();
		L2=l2.slice();
		Lw=lw.slice();
	
		l1.splice(con+1,l1.length-con-1);
		l2.splice(con+1,l2.length-con-1);
		lw.splice(con+1,lw.length-con-1);
		l2[con]-=1;
		lw[con]-=sw[l2[con]];
		i=l2[con];
		//dvv=wow;
		while(i<sw.length)
		{
			var w=0;
			l1.push(i);
			while(i<sw.length)
			{
				if(w+sw[i]<=dvv)w+=sw[i];
				else break;
				i++;
			}
			l2.push(i);
			lw.push(w);
		}
		if(l1.length>L1.length)kn=true;
	}
	
	var II=dvv-wow;
	glt.style.marginLeft=Math.floor(II/2).toString()+"px";
	glt.style.marginRight=(II-Math.floor(II/2)).toString()+"px";
	var ks="";
	var j;
	for(i=0;i<L1.length;i++)
	{
		ks="";
		var w=0;
		//var newSpan = document.createElement('span');
		//glt.appendChild(newSpan);
		for(j=L1[i];j<L2[i];j++)
		{	
			ks+="<span style=\"position:relative;display:inline-block;width:"+sw[j].toString()+";left:"+Math.floor((wow-Lw[i])*(j-L1[i])/(L2[i]-L1[i]))+";\">"+" "+ss[j]+"</span>";
			w+=sw[j];
		}
		//newSpan.innerHTML=ks;
		//if(w!=Lw[i]||newSpan.offsetWidth>Lw[i])console.log(i.toString()+":"+newSpan.offsetWidth.toString()+","+Lw[i].toString()+","+w.toString());
		glt.innerHTML+=ks+"<br>";
		//glt.innerHTML+=ks+"<br>";
		
	}
		//glt.style.width=glt.offsetWidth;
	})
}
