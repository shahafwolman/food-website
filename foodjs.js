
/*navigation bar*/
function makeGray(a){
    a.style.backgroundColor= "#c4bfaf";
    a.style.color = "black";
}
function makeBlack(b){
  b.style.backgroundColor = "black";
  b.style.color = "white";
}

          /*map.setView;{(
           center): new Microsoft.Maps.Location(42.877742, -97.380979),
           zoom = 4
         };*/


var map, infobox;
var lat = ["47.750717", "47.744189", "47.01971", "47.745978 ", "47.64225", "47.278928", "48.517722", "48.51429", "48.15278",
 "48.194622", "48.194315" , "48.187093", "48.01305", "48.009382", "47.306701", "47.307505", "47.624827", "45.780731",
"47.618702", "48.71852", "46.271106", "45.72", "47.3085", "48.994266", "47.594434", "47.139373",
"47.53972", "47.420273", "47.59", "47.594401", "47.202499", "47.523741", "46.610385", "46.550507", "46.209251",
"47.67582", "48.062915 ","47.483603", "47.486653","47.490431","47.486547"];

var long = ["-122.562177", "-122.575892", "-123.798449", "-122.577684", "-117.58811", "-122.24966","-122.612551", "-122.612621", "-122.1804",
 "-122.12607", "-122.12607", "-122.13515", "-122.53807", "-122.52883", "-122.23071", "-122.22134", "-122.516546", "-122.531",
"-122.20189", "-122.50199", "-119.48949", "-121.47", "-122.00654", "-122.75191", "-120.66297", "-119.28556",
"-122.04259", "-120.3099", "-120.66", "-120.66197", "-121.98583", "-120.46981", "-120.55817", "-120.47564", "-119.16836",
"-122.12469", "-122.865949", "-117.5807","-117.57592","-117.571165","-117.576001"];

var titles = ["The Pink Door", "Pick Place Chowder", "Ocean Palace Resturant ", "Zig Zag Cafe", "Wolffys Hamburgers", "Tacos El Tajin",
"Adrift", "Dads Diner", "Moose Creek BBQ", "Bistro San Martin", "The Stilly Diner", "Hubbs Pizza & Pasta", "Gordon's On Blueberry Hill",
"Rocket Taco", "Sun Break Cafe", "Gor Gai Thai Street Food", "Streamliner Diner", "Barrel Mountain Brewing", "Black Bottle Postern",
"Pizzazza", "Hacienda De Sol", "Gonzalez Mexican Restaurant", "Black Diamond Pizza & Deli",
"Drayton Harbor Oyster Company", "Munchen Haus", "Chicos Pizza Parlor", "The Black Duck Cask and Bottle",
"Wild Huckleberry", "Good Mood Food", "Watershed Cafe", "The Kettle", "Country Boys BBQ", "White HOuse Cafe", "Los Hernandez",
"Masala Indian Cuisine", "Five Stone Cafe", "Tipsy Cow Burger Bar", "bene's cheney", "Monterey Pub & Grub","
Zip's Drive In","Copper hana"]

var descriptions = ["20820 Miller Bay Rd NE, Poulsbo, WA 98370, USA", "20235 Robin Ln NE, Suquamish, WA 98392, USA", "112 E Wishkah, Aberdeen, WA 98520", "20329 Robin Ln NE, Suquamish, WA 98392, USA", "12807 W 14th Ave, Airway Heights, WA 99001", "400 1st Ave N, Algona, WA 98001",
"510 Commercial Ave, Anacortes, WA 98221", " 906 Commercial Ave, Anacortes, WA 98221", "3617 - 172nd St NE Ste 5, Arlington, WA 98223", "231 N Olympic Ave, Arlington, WA 98223", " 223 N Olympic Ave, Arlington, WA 98223", "21102 67th Ave NE, Arlington, WA 98223", "5438 Woodard Ave, Freeland, WA 98249",
"1594 Main St, Freeland, WA 98249 ", "22 A St SW, Auburn, WA 98001", "614 E Main St, Auburn, WA 98002 ", "397 Winslow Way E, Bainbridge Island, WA 98110", "607 E Main St, Battle Ground, WA 98604",
"919 Bellevue Way NE, Bellevue, WA 98004", "1501 12th St, Bellingham, WA 98225", "1002 Grace, Benton City, WA 99320-9788", "107 W Humbolt St Ste A, Bingen, WA 98605", "32700 Railroad Ave, Black Diamond, WA 98010 ",
"677 Peace Portal Dr, Blaine, WA 98230", "709 Front St, Leavenworth, WA 98826 ", "530 W Valley Rd, Moses Lake, WA 98837",
"317 NW Gilman Blvd Ste 31b, Issaquah, WA 98027 ", "302 S Mission St, Wenatchee, WA 98801", "285 W Us Highway 2, Leavenworth, WA 98826 ", "221 8th St, Leavenworth, WA 98826",
"1666 Garrett St, Enumclaw, WA 98022", "400 Aplets Way, Cashmere, WA 98815", " 3602 Kern Way, Yakima, WA 98902",
"3321 W Kennewick Ave, Kennewick, WA 99336", "8102 161st Ave NE, Redmond, WA 98052", "583 Lane De Chantal, Port Townsend, WA 98368, USA", "24 W 1st St, Cheney, WA 99004, USA","321 1st St, Cheney, WA 99004, USA", "911 1st St, Cheney, WA 99004, USA","313 1st St, Cheney, WA 99004, USA"]

var website = ["https://www.thepinkdoor.net/","http://www.pikeplacechowder.com/", "http://oceanpalaceaberdeen.com/", "http://zigzagseattle.com/",
"https://www.wolffyshamburgers.com/", "https://www.wolffyshamburgers.com/", "https://www.adriftrestaurant.com/", "https://www.facebook.com/Dads-Diner-494325663922039/",
"http://moosecreekbbq.com/","http://www.bistrosanmartin.com/","https://www.facebook.com/thestillydiner","http://hubbspizza.com/", "http://www.gordonsonblueberryhill.com/",
 "http://rocket-taco.com/","https://sunbreakcafe.com/", "http://gorgaithai.com/", "http://streamlinerdiner.com/", "http://barrelmountainbrewing.com/", "http://www.blackbottlebellevue.com/",
"http://www.pizzazza.com/", "https://www.facebook.com/pages/Hacienda-Del-Sol/966483533446785?utm_source=tripadvisor&utm_medium=referral", "https://www.facebook.com/González-Mexican-Restaurant-111336179652531/",
"http://blackdiamondpizzaanddeli.com/", "http://draytonharboroysters.com/", "http://munchenhaus.com/", "https://www.facebook.com/Chicos-Pizza-Parlor-308096769219277/",
"https://www.theblackduckcaskandbottle.com/", "http://wildhuck.com/", "http://goodmoodfoodcafe.com/", "https://www.watershedpnw.com/",
"http://www.thekettleclearwater.com/menu/", "http://www.countryboysbbq.com/", "http://www.whitehouseinyakima.com/Menus.html", "http://www.loshernandeztamales.com/",
"https://masala-indiancuisine.com/", "https://5stonescoffeeco.com/", "https://www.tipsycowburgerbar.com/","https://www.benesamfix.com/", "https://www.bing.com/search?q=monterey+pub+%26+grub&form=EDGTCT&qs=PF&cvid=43328f2e0dd343cd813e289aad046c32&cc=US&setlang=en-US&elv=AXXfrEiqqD9r3GuelwApulpwCFumYXTAVpvNYLrY7N*0VWgg%21ZZc7CMyrkC2J8kla5lHuhQoFF%21Bb88OBwGImoM5MO3Y2qLtgO36aK95g4Ql&PC=SSJS","http://www.zipsdrivein.com/","http://copperhana.com/"]


function GetMap() {
    map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'AoYDlUxB1n_Wkk8nKDVnVCFD_SzWWkxX5NoAiYNYhILk2ZXTrYLfe7LMgYash4y1'
    });

    map.setView({
     center: new Microsoft.Maps.Location(47.751076, -120.740135),
     zoom: 7});

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
        website[i] = "<a href = " + website[i] + ">Website Link</a>";
        pin.metadata = {
            title: titles[i],
            description: descriptions[i] + website[i]
          };





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


$(function(){
    $('#main-slider img:gt(0)').hide();
    setInterval(function(){
      $('#main-slider :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('#main-slider');},
      3000);
});



	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();

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
  }
}

	document.addEventListener( "DOMContentLoaded", function() {
		var slider = new Slideshow( "#main-slider" );
	});



                              // Extra things to add to bottom
  // filterSelection("all") // Execute the function and show all columns
                    // function filterSelection(c) {
                    //   var x, i;
                    //   x = document.getElementsByClassName("column");
                    //   if (c == "all") c = "";
                    //   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
                    //   for (i = 0; i < x.length; i++) {
                    //     w3RemoveClass(x[i], "show");
                    //     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
                    //   }
                    // }
                    //
                    // // Show filtered elements
                    // function w3AddClass(element, name) {
                    //   var i, arr1, arr2;
                    //   arr1 = element.className.split(" ");
                    //   arr2 = name.split(" ");
                    //   for (i = 0; i < arr2.length; i++) {
                    //     if (arr1.indexOf(arr2[i]) == -1) {
                    //       element.className += " " + arr2[i];
                    //     }
                    //   }
                    // }
                    //
                    // // Hide elements that are not selected
                    // function w3RemoveClass(element, name) {
                    //   var i, arr1, arr2;
                    //   arr1 = element.className.split(" ");
                    //   arr2 = name.split(" ");
                    //   for (i = 0; i < arr2.length; i++) {
                    //     while (arr1.indexOf(arr2[i]) > -1) {
                    //       arr1.splice(arr1.indexOf(arr2[i]), 1);
                    //     }
                    //   }
                    //   element.className = arr1.join(" ");
                    // }
                    //
                    // // Add active class to the current button (highlight it)
                    // var btnContainer = document.getElementById("myBtnContainer");
                    // var btns = btnContainer.getElementsByClassName("btn");
                    // for (var i = 0; i < btns.length; i++) {
                    //   btns[i].addEventListener("click", function(){
                    //     var current = document.getElementsByClassName("active");
                    //     current[0].className = current[0].className.replace(" active", "");
                    //     this.className += " active";
                    //   });
                    // }
