import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GGMap';

  mapZoom = 18;
  mapCenter: google.maps.LatLngLiteral = { lat: 19.4357169, lng: -99.1439294 };
  mapOptions: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDoubleClickZoom: true,
    draggable: true,
    maxZoom: 20,
    minZoom: 5,
  };

  markerInfoContent = '';
  markerOptions: google.maps.MarkerOptions = {
    draggable: true,
    animation: google.maps.Animation.DROP,
  };

  updateMarker(map: any){
    const lat = map.latLng.lat();
    const lng = map.latLng.lng();
    this.mapCenter = { lat: lat, lng: lng }
  }
}
