
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

/*MAP API */
var view;
var map;
var ourLoc;
function init(){
  ourLoc = ol.proj.fromLonLat([0, 0]);
     view = new ol.View({
       center: ourLoc,
       zoom: 4
     });
     var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
     loadTilesWhileAnimating: true,
     view: view
   });
   //pins();
var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
    anchor: new Microsoft.Maps.Point(12, 39) });
map.entities.push(pushpin);

}

(function() {
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			this.action();
			this.stopStart();
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
			}, 4000);
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();
			}, false);
		}
	};
	document.addEventListener( "DOMContentLoaded", function() {
		var slider = new Slideshow( "#main-slider" );
	});
})();
