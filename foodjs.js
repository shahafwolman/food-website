
/*navigation bar*/
function makeGray(a){
    a.style.backgroundColor= "#c4bfaf";
    a.style.color = "black";
}
function makeBlack(b){
  b.style.backgroundColor = "black";
  b.style.color = "white";
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
