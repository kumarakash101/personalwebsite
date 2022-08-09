function valid(){

    var uemail = document.getElementById('email');
    var usubject = document.getElementById('subject');
    var uquery = document.getElementById('query');
    

    if(uemail.value.trim() == ""){
        alert("Please enter Email");
        return false;

    }
   else if(usubject.value.trim() == ""){
        alert("Please enter Subject");
        return false;
        
    }
    else if(uquery.value.trim() == ""){
        alert("Please enter your Query");
        return false;
        
    }
    else{
        return true;
    }
    
    
}