document.getElementById("kitapSerisi").addEventListener("change", kitaplar);
let sonuc=document.getElementById("sonucBaslik");

function kitaplar(){
    sonuc.classList.remove("kk", "sc", "kp", "şp", "rj",  "normal");
    kitaplar=document.getElementById("listeKitaplar").selectedIndex;
    console.log(kitaplar);

    if(kitaplar==0){
        document.body.style.backgroundColor="rgb(156, 11, 11)";
        sonuc.innerHTML="' Benim içimde sevgi kalmadı. İçimdeki her şeyi söküp aldılar.Ona verebileceğim tek şey, boş bir kalp. İçini kendi doldurması gerek.";
        sonuc.classList.add("kk");
        document.getElementById("resim").setAttribute("src", "kk.jpg");
    }
    else if(kitaplar==1){
        document.body.style.backgroundColor="rgb(156, 11, 11)";
        sonuc.innerHTML="' İnsan bazen öyle bir sınıra gelir ki, onu aşamaz mutsuz olur; aşar bu kez belki daha mutsuz olur!..";
        sonuc.classList.add("sc");
        document.getElementById("resim").setAttribute("src", "sc.jpg");
    }
    else if(kitaplar==2){
        document.body.style.backgroundColor="rgb(156, 11, 11)";
        sonuc.innerHTML="' Müzik dinleyemeyecek kadar kafam karışıksa bittim demektir.";
        sonuc.classList.add("kpj");
        document.getElementById("resim").setAttribute("src", "kp.jpg");
    }    
    else if(kitaplar==3){
        document.body.style.backgroundColor="rgb(156, 11, 11)";
        sonuc.innerHTML="' Masalın nerede bittiğini, hayatın nerede başladığını fark edemiyorum.";
        sonuc.classList.add("şkpj");
        document.getElementById("resim").setAttribute("src", "şk.jpg");
    }
    else if(kitaplar==4){
        document.body.style.backgroundColor="rgb(156, 11, 11)";
        sonuc.innerHTML="' Hissedemediğin bir şeyi anlayamazsın.";
        sonuc.classList.add("rjpj");
        document.getElementById("resim").setAttribute("src", "rj.jpg");
    }
}    

function kaydet(){
    let ad, soyad, yas;
    ad=document.getElementById("txtAd").value;
    soyad=document.getElementById("txtSoyad").value;
    yas=document.getElementById("numberYas").value;
    console.log(ad);
    console.log(soyad);
    console.log(yas);
                        
    if(yas<13){
        sonuc.innerHTML="Sitemiz 13 yaş küçüklere Çocuklara Uygun Değildir!";
    }
    else{
    sonuc.innerHTML="kütüphanemize Hoşgeldiniz";
    }
}    