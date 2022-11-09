    document.addEventListener("DOMContentLoaded", function() 
    {
        let btn = document.getElementById("btn");

        btn.addEventListener("click", function(event)
        {
            event.preventDefault();

            fetch('http://localhost/comp2245-assignment4/superheroes.php')
            .then(response => response.text())
            .then(data => {

                alert(data);
            })
            .catch(error =>
                {
                    alert(error);
                })
        })
    })

/*window.onload= function(){

    let button= document.getElementById("btn");

    button.addEventListener("click", function(e){
        
        httpReq= new XMLHttpRequest();
        let url ="http://localhost/comp2245-assignment4/superheroes.php?query="+searchAct.value+"";
        httpReq.open('GET',url);
        httpReq.send();
        httpReq.onreadystatechange= reply;
    });

    function reply(){
        if(httpReq.readyState=== XMLHttpRequest.DONE){
            if(httpReq.status===200){
                result.innerHTML=httpReq.responseText;
            }else{
                alert('There was an Error')
                }
            }
            
    }
}*/
/*$(document).ready(function() {
    var loadBtn = $('#theBtn');

    loadBtn.on('click', function() {

        $.ajax('superheroes.php', {
            method: "GET",
            dataType: 'json'
        }).done(function(response) {
            var superheroes = response.superheroes;

            $('#results').append("<ul></ul>");
            $(superheroes).each(function() {
                $('#results ul').append('<li><h3>' + this.name + ' (a.k.a ' + this.alias + ')</h3><p>' + this.email + '</p></li>');
            });
        }).fail(function() {
            alert('There was a problem with the request.');
        });
    });
});*/