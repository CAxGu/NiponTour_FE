function load_travels() {
    var jqxhr = $.get("modules/travels/controller/controllerFE_Travels.class.php?load=true", function (data) {
        var json = JSON.parse(data);
        console.log(json);
        pintar_travel(json);
        //alert( "success" );
    }).done(function () {
        //alert( "second success" );
    }).fail(function () {
        //alert( "error" );
    }).always(function () {
        //alert( "finished" );
    });
    jqxhr.always(function () {
        //alert( "second finished" );
    });
}

$(document).ready(function () {
    load_travels ();
});


function pintar_travel(data) {
    //alert(data.user.avatar);
    
    var travelsEl = document.getElementById("lista_travels");        
        
        data.forEach(function(travelItem) {
          var liEl = document.createElement("li");
          liEl.setAttribute('id',travelItem.id);
  
          var avatarEL = document.createElement("div");
          var html = '<img src="' + travelItem.avatar + '" height=250 width="250"> ';
          avatarEL.innerHTML = html;
          liEl.appendChild(avatarEL);

          var nameEl = document.createElement("h3");
          var nametext = document.createTextNode(travelItem.name);
          nameEl.innerHTML = '<strong>'+'Name:  '+' </strong>';
          nameEl.appendChild(nametext);
          liEl.appendChild(nameEl);

          var priceEl = document.createElement("h2");
          var pricetext = document.createTextNode(travelItem.price);
          priceEl.innerHTML = 'Precio: ';
          priceEl.appendChild(pricetext);
          liEl.appendChild(priceEl);

        var separationEl = document.createElement("hr");
        liEl.appendChild(separationEl);

          travelsEl.appendChild(liEl);

          nameEl.addEventListener("click", function() {
              var idtravel = travelItem.id;
              console.log(idtravel);
              $.ajax({
                data:  idtravel, //datos que se envian a traves de ajax
                url:   "modules/travels/controller/controllerFE_Travels.class.php?loadtravel=true&idtravel="+idtravel, //archivo que recibe la peticion
                type:  "get", //método de envio
                success: function(data)
                {
                   window.location.href = 'index.php?module=travels&view=DetailTravel';
                },
                fail: function(data){
                    window.location.href = 'view/inc/404.php';
                }

        });
     
          });
        });
}
