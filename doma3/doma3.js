window.addEventListener("load",init,false);

function init(){
zborovi = ["torta","tiramisu","macka","zmija","advokat"];
indeks =  Math.floor(Math.random()*6);
zbor=zborovi[indeks];
bukvi = new Array(zbor.length);
for(i=0;i<zbor.length;i++){
    bukvi[i]=0;
}
for(i=0;i<3;i++){
    t=Math.floor(Math.random()*(zbor.length+1));
    if(bukvi[t]==0)
    bukvi[t]=1;
else{
    i--;
}
}
pretstavi();
tries=0;
}

function godi(){
    tries++;
    for( i=0;i<bukvi.length;i++){
        if(bukvi[i]==1){continue;}
        el =document.getElementById("field"+i);
        input=el.value;
        if(input==zbor[i]){
            bukvi[i]=1;}
    }
    pretstavi();
    flag=1;
    for(i=0;i<bukvi.length;i++){
        if(bukvi[i]==0){
            flag=0;
             break;}
    }
    if(flag==1){
    prozorec=document.createElement('p');
    prozorec.textContent="Pobedivte!";
    igra=document.getElementById('igra');
    igra.appendChild(prozorec);
    }
    else if(tries==5)
        odgovor = alert("Izgubivte");
       
    


}

function pretstavi(){
    igra=document.getElementById("igra");
    content="";
for(i=0;i<zbor.length;i++){
    if(bukvi[i]==0){
        content+='<input id="field'+i+'" type="text" maxlength=1>';
    }else{
        content+='<span>'+zbor[i]+'</span>';
    }
    igra.innerHTML=content;
}
}