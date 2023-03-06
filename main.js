var i=1;
var j=1;
function no(){
    if(i==1){
    alert("are you sure");}
    else if(i==2){
    alert("See, it'll be fun");
    }
    else if(i==3){
        alert("I didn't wanted to do this.......");
        window.location.href = "why_out.html";
    }
    i++;
    
};

function yes(){
    if(j<2){
        alert("See it's really sweet of you that you accepted it in first try only ,but I really spent a lot of time making this, so please click no");
        j++;
    }
    else{
        alert("yes yes yes yes yes yes yes yes yes!!!");
        window.location.href = "where.html";
    }
}