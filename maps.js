
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

  var contentString = '<img src="testimage.png" width="250px" class=fouroneone>'+
  '<div class="fouroneone">'+
  '<h1>Student Name &#39;16 </h1>'+
  '<h2>Student Major</h2>'+
  '<p>This student did some cool stuff in Boston</p>'+
  '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var image = 'blue.png';
  var marker = new google.maps.Marker({
    position: marker1,
    map: map,
    title: 'Hello World!',
    icon: image
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });



}
