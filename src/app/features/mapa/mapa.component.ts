onMapReady(event: any) {

    const map = event.object;

    // Configuración del mapa
}
const marker = new Marker();

marker.position = Position.positionFromLatLng(
    32.5149,
    -117.0382
);

marker.title = 'Mi ubicación';

map.addMarker(marker);
