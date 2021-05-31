//import('./lv.js').then((m)=>{lv=m.lv;ahrta.krmnm();}).catch(abort);
importScripts('./lv.js');
var smta,krmh,snkya,upsnkya;
function anvesnm()
{
	for(let i=1;i<snkya-upsnkya;i++)
		if(smta[i-1]>=smta[i])
		{
			let tmp=smta[i];smta[i]=smta[i-1];smta[i-1]=tmp;
					tmp=krmh[i];krmh[i]=krmh[i-1];krmh[i-1]=tmp;
		}
	upsnkya++;
	return(krmh[snkya-upsnkya]);
}
onmessage=function(e)
{
	console.log('anvesnm');
	if(e.data!='M')
	{
		smta=new Int32Array(e.data[1].length);
		krmh=new Int32Array(e.data[1].length);
		snkya=0;
		upsnkya=0;
		e.data[1].forEach((m,i)=>{
			m=m.split(' ')[0];
			if(m[0]=='J'||m[0]=='H')
			{
				krmh[snkya]=i;
				smta[snkya]=lv(m.substring(1),e.data[0]);
				snkya++;
			}
		});
	}
	postMessage(anvesnm());
}
postMessage(null);
