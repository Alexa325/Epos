function validateform(){  
    let Ime = document.getElementById('ime').value;
    let Prezime = document.getElementById('prezime').value;
    let Brojtelefona = document.getElementById('brojtelefona').value;
    let Email = document.getElementById('email').value;
    let Datum = document.getElementById('datum').value;
      
    if (Ime==null || Ime==""){  
      alert("Niste lepo uneli ime");  
      return false;  
    }
    if(Prezime.length<6){  
      alert("Niste lepo uneli prezime");  
      return false;  
    }
    if (Email.indexOf("@")<1 || Email.lastIndexOf(".")<Email.indexOf("@")+2 || Email.lastIndexOf(".")+2>=Email.length){  
        alert("Niste lepo uneli email");  
        return false;  
    } 
    if(Brojtelefona.length==9||Brojtelefona.length==10){
        alert("Uspesna prijava");
        return true;
    }else{
            alert("Niste lepo uneli broj telefona")
            return false;
    }
 }  




