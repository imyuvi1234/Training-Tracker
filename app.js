const d = new Date();
let day = d.getDay();

const x = day;
function displaycontent(x){
    // document.getElementById("sunday").style.display="block";
    if (x == 1) {
        document.getElementById("monday").style.display="block";
    }
    else if (x == 2) {
        document.getElementById("tuesday").style.display="block";
    }
    else if (x == 3) {
        document.getElementById("wednesday").style.display="block";
    }
    else if (x == 4) {
        document.getElementById("thursday").style.display="block";
    }
    else if (x == 5) {
        document.getElementById("friday").style.display="block";
    }
    else if (x == 6) {
        document.getElementById("saturday").style.display="block";
    }
    else{
        document.getElementById("sunday").style.display="block";
    }
};



document.addEventListener("DOMContentLoaded", displaycontent(x) );