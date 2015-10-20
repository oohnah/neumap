
function initMap() {
/*..........change what this map looks like.......................*/  
  var mapStyle = new google.maps.StyledMapType([
    {
      featureType: 'roads',
      stylers: [
        {visibility: 'simplified'}
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        {visibility: 'off'}
      ]
    },
    {
      featureType: 'landscapes',
      stylers: [
        {hue: '#cc0000'},
        {saturation: 20},
        {lightness: -30}
      ]
    },
    {
      featureType: 'water',
      stylers: [
        {color: '#eeeeee'}

      ]
    }

  ], {
    name: 'Custom Style'
  });

  var mapStyleId ='custom_style';

/*-------------------put some sort of data here--------------------*/
var data={
  "students":[
    {
      "name":"John Doe",
      "major":"computer science",
      "about":"paragraph of info?",
      "image":"testimage.png",
      "lat":42.339807,
      "lng":-71.089172,
      "icon":"blue.png",
    },
    {
      "name":"Jane Doe",
      "major":"graphic design",
      "about":"another paragraph",
      "image":"testimage.png",
      "lat": 51.5072,
      "lng": 0.1275,
      "icon":"green.png",
    },
    {
      "name":"Jon Deaux",
      "major":"theatre",
      "about":"yet anther paragraph",
      "image":"testimage.png",
      "lat":31.2000,
      "lng":29.9167,
      "icon":"blue.png",
    }
]};




/*------------------make the map with markers and stuff----------------*/


  var origin = {lat: 0, lng: 0};
  var marker1 ={lat: 42.339807, lng: -71.089172}

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: origin,
    mapTypeControlOptions:{
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, mapStyleId]
    }
  });

  map.mapTypes.set(mapStyleId, mapStyle);
  map.setMapTypeId(mapStyleId);





var markers=[];
var contentString=[];
var infowindow=[]
for (var i = 0; i < data.students.length; i++) {

    markers[i] = new google.maps.Marker({
    position: {lat: data.students[i].lat, lng: data.students[i].lng},
    map:map,
    title: 'hello',
    icon: data.students[i].icon,
    id: i
  });

   var infowindow = new google.maps.InfoWindow();
   markers[i].html = '<img src="'+data.students[i].image+'" width="250px" class=fouroneone>'+
                    '<div class="fouroneone">'+
                    '<h1>'+data.students[i].name+'</h1>'+
                    '<h2>'+data.students[i].major+'</h2>'+
                    '<p>'+data.students[i].about+'</p>'+
                    '</div>';

  markers[i].addListener('click', function(){
    infowindow.setContent(this.html);
    infowindow.open(map, this);
  });



};





}/*end curly brace for the init map*/
