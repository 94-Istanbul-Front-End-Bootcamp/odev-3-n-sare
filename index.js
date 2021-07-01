function usernameFunction(){
    let kullaniciinput = document.getElementById("kullaniciAdi").value;
    if(kullaniciinput.length>0){
        document.getElementById("kullaniciUyari").innerHTML=""
        
    }
}

function passwordFunction(){
    let sifreinput = document.getElementById("sifre").value;
    if(sifreinput.length>0&&sifreinput.length<8){
        document.getElementById("parolaUyari").innerHTML="Şifre en az 8 karakter içermelidir."
    }else{
        document.getElementById("parolaUyari").innerHTML=""
    }
}

function emailFunction(){
    let emailinput = document.getElementById("eposta").value;
    if(ValidateEmail(emailinput)==true){
        document.getElementById("mailUyari").innerHTML=""
        
    }
}

function checkboxFunction(){
    if(document.querySelector('#checkbox:checked') != null){
        let p4 = document.getElementById("checkboxUyari").innerHTML=""
        
        
    }
}


function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    
    return (false)
}


function Fonksiyon(){
   
    let kullaniciinput = document.getElementById("kullaniciAdi").value;
    let sifreinput = document.getElementById("sifre").value;
    let mailinput = document.getElementById("eposta").value;    
    
    let kullaniciuyari = document.getElementById("kullaniciUyari").innerHTML;
    let sifreuyari = document.getElementById("parolaUyari").innerHTML;
    let checkboxuyari = document.getElementById("checkboxUyari").innerHTML;
    let mailuyari = document.getElementById("mailUyari").innerHTML;
    

    if(kullaniciinput==""&&kullaniciuyari.length==0){
        let p1 = document.getElementById("kullaniciUyari")
        let uyari = document.createTextNode("Lütfen kullanıcı adını giriniz.");
        p1.appendChild(uyari) 
        
    }
    if(sifreinput==""&&sifreuyari.length==0){
        let p2 = document.getElementById("parolaUyari")
        let uyari = document.createTextNode("Lütfen şifre alanını boş bırakmayınız.");
        p2.appendChild(uyari) 
     
    }
    else if(sifreinput.length>0 && sifreinput.length<8 && sifreuyari.length==0){
        let p3 = document.getElementById("parolaUyari")
        let uyari = document.createTextNode("Şifre en az 8 karakter içermelidir.");
        p3.appendChild(uyari)
    }
    if(document.querySelector('#checkbox:checked') == null&&checkboxuyari.length==0){
        let p4 = document.getElementById("checkboxUyari")
        let uyari = document.createTextNode("Şartları kabul etmeniz gerekmektedir.");
        p4.appendChild(uyari) 
    }
    if(ValidateEmail(mailinput)==false&&mailuyari.length==0){
        let p5 = document.getElementById("mailUyari")
        let uyari = document.createTextNode("Geçerli bir mail adresi giriniz.")
        p5.appendChild(uyari)

    }
    
    document.appendChild(p1,p2,p3,p4,p5);



    
}