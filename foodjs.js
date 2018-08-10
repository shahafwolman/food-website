
/*navigation bar*/
function makeGray(a){
    a.style.backgroundColor= "#c4bfaf";
    a.style.color = "black";
}

function makeBlack(b){
  b.style.backgroundColor = "black";
  b.style.color = "white";
}


/*var view;
var map, infobox;
var ourLoc;
var Lats = [30.5423159,30.5219341,30.5224853,	30.6035039];
var Long = [-87.90039519999999, -87.9031948,-87.90536859999997,-87.90292649999998];*/



          /*map.setView;{(
           center): new Microsoft.Maps.Location(42.877742, -97.380979),
           zoom = 4
         };*/


var map, infobox;
var lat = [30.5423159,30.5219341,30.5224853,	30.6035039];
var long = [-87.90039519999999, -87.9031948,-87.90536859999997,-87.90292649999998];

function GetMap() {
    map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'AoYDlUxB1n_Wkk8nKDVnVCFD_SzWWkxX5NoAiYNYhILk2ZXTrYLfe7LMgYash4y1'
    });

    map.setView({
     center: new Microsoft.Maps.Location(42.877742, -97.380979),
     zoom: 4});

    //Create an infobox at the center of the map but don't show it.
    infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
        visible: false
    });

    //Assign the infobox to a map instance.
    infobox.setMap(map);



    for (var i = 0; i < lat.length; i++) {
        var latLon = new Microsoft.Maps.Location(lat[i], long[i]);
        var pin = new Microsoft.Maps.Pushpin(latLon);


        //Store some metadata with the pushpin.
        pin.metadata = {
            title: 'Pin ' + (i+1),
            description: 'Description for pin ' + (i+1)

          }


        //Add a click event handler to the pushpin.
        Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);


        //Add pushpin to the map.
        map.entities.push(pin);

    }

}

function pushpinClicked(e) {
    //Make sure the infobox has metadata to display.
    if (e.target.metadata) {
        //Set the infobox options with the metadata of the pushpin.
        infobox.setOptions({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visible: true
        });
    }
}
