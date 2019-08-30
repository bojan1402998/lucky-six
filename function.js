var array=[];
var comb=[];
function clear_field(){
	document.getElementById('br1').value="";
	document.getElementById('br2').value="";
	document.getElementById('br3').value="";
	document.getElementById('br4').value="";
	document.getElementById('br5').value="";
	document.getElementById('br6').value="";
}
function validate(){
	var br1, br2, br3, br4, br5, br6;
	br1=document.getElementById('br1').value;
	br2=document.getElementById('br2').value;
	br3=document.getElementById('br3').value;
	br4=document.getElementById('br4').value;
	br5=document.getElementById('br5').value;
	br6=document.getElementById('br6').value;
	var uslov1=false, uslov2=false;
	var i, j;
	var niz=[br1, br2, br3, br4, br5, br6];
	array=niz;
	for (i=0;i<6;i++)
		{
			if (niz[i]<0||niz[i]>49)
			{
				uslov2=true;
				break;
			}
			var br=0;
			for(j=0;j<6;j++)
			{ 
				if(niz[i]==niz[j])
					br++;
			}
			if (br>1)
			{uslov1=true;break;}	

		}
		if (uslov1)
		document.getElementById('error_space').innerHTML=""+error_array(0);
		else if(uslov2)
			document.getElementById('error_space').innerHTML=""+error_array(1);
		else
		{
			document.getElementById('error_space').innerHTML="";
			var xmlhttp=new XMLHttpRequest();
			xmlhttp.open("GET","s2db.php?br1="+niz[0]+"&br2="+niz[1]+"&br3="+niz[2]+"&br4="+niz[3]+"&br5="+niz[4]+"&br6="+niz[5], true);
			xmlhttp.send();
		}	
		get_combination();
}
function error_array(num){
	var errors=["Brojevi moraju biti razliciti!", "Brojevi moraju biti u intervalu od 1 do 49!"];
	return errors[num];
}
function get_combination(){
	for(var i=0;i<35;i++)
		{
			var x=Math.floor(1+Math.random() * 50);
			if (exist(x))
				i--;
			else
				comb[i]=x;
		}
	var award=[0,0,0,0,0,10000,7500,5000,2500,1000,500,300,200,150,100,90,80,70,60,50,40,30,25,20,15,10,9,8,7,6,5,4,3,2,1];
	var brojevi="brojevi";
	for (var i =0; i <35; i++) {
		brojevi=brojevi+"<tr >"+
		" <td style='min-width:80px;'>"+award[i]+"</td>"+
		" <td style='min-width:80px;'>"+comb[i]+"</td>"+
		"</tr>";
	}
	var sum=0;
	//array=[comb[0],comb[1],comb[2],comb[3],comb[4],comb[5]];
	var final_award=0;
	for (var i =0; i <35; i++)
		{
			for(var j=0;j<6;j++)
			if (comb[i]==array[j])
				sum++;
			if (sum==6)
				{
					final_award=award[i];
					break;
				}
		}
	brojevi="<table >"+brojevi+"</table> <br> Tvoja nagrada:"+final_award;
	document.getElementById('izvlacenje').innerHTML=""+brojevi;
	

}
function exist(num){
	for(var i=0;i<35;i++)
		if (comb[i]==num)
			return true;
	return false;
}
