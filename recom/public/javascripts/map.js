var canvas = document.getElementById( 'map' ) ;
var latlng = new google.maps.LatLng( 35.792621 , 139.806513 );

var mapOptions = {
	zoom: 15 ,				// ズーム値
	center: latlng ,		// 中心座標 [latlng]
};
var map = new google.maps.Map( canvas , mapOptions ) ;
var markers = [] ;
markers[0] = new google.maps.Marker({
	map: map ,
	position: new google.maps.LatLng( 35.792621 , 139.806513 ) ,
}) ;
markers[1] = new google.maps.Marker({
	map: map ,
	position: new google.maps.LatLng( 35.791521 , 139.803513 ) ,
}) ;