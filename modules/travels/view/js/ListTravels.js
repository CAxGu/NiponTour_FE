function load_travels() {
    var jqxhr = $.get("modules/travels/controller/controllerFE_Travels.class.php?load=true", function (data) {
        var json = JSON.parse(data);
        //console.log(json['totalresults']);
        //console.log(data);
       pintar_travel(json['limitresults']);
       scroll(json['totalresults']);
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
          liEl.setAttribute('id',travelItem.referencia);
  
          var avatarEL = document.createElement("div");
          var html = '<img src="' + travelItem.avatar + '" height=150 width="250"> ';
          avatarEL.innerHTML = html;
          liEl.appendChild(avatarEL);

          var ciudadEl = document.createElement("h3");
          var ciudadtext = document.createTextNode(travelItem.ciudad+ ", " + travelItem.pais);
          ciudadEl.innerHTML = '<strong>'+'Lugar:  '+' </strong>';
          ciudadEl.appendChild(ciudadtext);
          liEl.appendChild(ciudadEl);

          var priceEl = document.createElement("h2");
          var pricetext = document.createTextNode(travelItem.precio);
          priceEl.innerHTML = 'Precio: ';
          priceEl.appendChild(pricetext);
          liEl.appendChild(priceEl);

        var separationEl = document.createElement("hr");
        liEl.appendChild(separationEl);

          travelsEl.appendChild(liEl);

          ciudadEl.addEventListener("click", function() {
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



function scroll (data){

    var track_load = 0; //total loaded record group(s)
    var loading  = false;
    var items_per_group = 5;  
    
    var totalResults = data[0].totalviajes;    
    console.log('Totalres: '+ totalResults);
    var total_groups = totalResults/items_per_group;
    console.log('Totalgroups: '+ total_groups);
    var redirect= 'modules/travels/controller/controllerFE_Travels.class.php?load=true';
   
    $.ajax({
        data:  {'group_no':track_load}, //datos que se envian a traves de ajax
        url:   redirect, //archivo que recibe la peticion
        type:  "POST", //método de envio
        success: function()
        {
            track_load++;
        }

    }); 

    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()){
            if(track_load < total_groups && loading==false){ //there's more data to load
            loading = true; //prevent further ajax loading
            $('.animation_image').show(); //show loading image
            
            //load data from the server using a HTTP POST request
            $.post(redirect,{'group_no':track_load}, function(data){
                var json = JSON.parse(data);
                var news = json['limitresults'];
                //console.log(news);
                pintar_travel(news);
                //$("#lista_travels").append(hola); //append received data into the element
                track_load++; //loaded group increment
                console.log('Tracks: '+ track_load);
                loading = false; 
            }).fail(function(xhr, ajaxOptions, thrownError) { //any errors?
                console.log('sacabao!!!');
                alert(thrownError); //alert with HTTP error
                loading = false;
            });
        }
         }
    })
};
