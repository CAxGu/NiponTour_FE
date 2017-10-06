function load_travel() {
    var jqxhr = $.get("modules/travels/controller/controllerFE_Travels.class.php?idtravel=true",function (data) {
        var json = JSON.parse(data);
        console.log(data);
        pintar_travel(json,0);
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
    load_travel ();
});


function pintar_travel(data,i) {
    //alert(data.user.avatar);
    
    var travelEl = document.getElementById("details_travel");        

          var divEl = document.createElement("div");
          divEl.setAttribute('id',data[i].id);

          
          var avatarEL = document.createElement("div");
          var html = '<img src="' + data[i].avatar + '" height=250 width="250"> ';
          avatarEL.innerHTML = html;
          divEl.appendChild(avatarEL);


          var idEl = document.createElement("h2");
          var idtext = document.createTextNode(data[i].id);
          idEl.innerHTML = 'ID: ';
          idEl.appendChild(idtext);
          divEl.appendChild(idEl);

          var nameEl = document.createElement("h3");
          var nametext = document.createTextNode(data[i].name);
          nameEl.innerHTML = '<strong>'+'Name:  '+' </strong>';
          nameEl.appendChild(nametext);
          divEl.appendChild(nameEl);

          var priceEl = document.createElement("h2");
          var pricetext = document.createTextNode(data[i].price);
          priceEl.innerHTML = 'Precio: ';
          priceEl.appendChild(pricetext);
          divEl.appendChild(priceEl);


          var descriptionEl = document.createElement("text");
          var descriptiontext = document.createTextNode(data[i].description);
          descriptionEl.appendChild(descriptiontext);
          divEl.appendChild(descriptionEl);


        travelEl.appendChild(divEl);

        var buttonEL = document.createElement("div");
        var backEl = document.createElement("button");
        var backtext = document.createTextNode('Back to List');
        backEl.appendChild(backtext);
        backEl.addEventListener("click", function() {
          window.location.href = 'index.php?module=travels&view=ListTravels';
       });
       buttonEL.appendChild(backEl);
       travelEl.appendChild(buttonEL);
}
