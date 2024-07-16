import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
export const placingRoute = (map, start, end) => {

  if (map.routingControl) {
    map.removeControl(map.routingControl);
    map.routingControl = null; 
  }

  if (map.customControl) {
    map.removeControl(map.customControl);
    map.customControl = null; 
  }

  const waypoints = [L.latLng(start.lat, start.lng), L.latLng(end.lat, end.lng)];
  
  const control = L.Routing.control({
    waypoints: waypoints,
    routeWhileDragging: true,
    showAlternatives: false,
    fitSelectedRoutes: true,
    createMarker:()=>{
        return null
    },
    lineOptions: {
      styles: [{ color: "blue", weight: 2 }]
    },
    position:"topleft",
    collapsible:true
  }).addTo(map);
  let customControl = L.control({position:"topleft"})
  customControl.onAdd = function(){
    const div = L.DomUtil.create('div','remove-route')
    div.innerHTML=`
    <span id="remove-route" class="p-2 cursor-pointer">
    <i class="fa-solid fa-thumbtack-slash fa-lg"></i>
    </span>
    `
    return div
  }
  
  customControl.addTo(map)

  const removeRouteBtn = document.querySelector(".remove-route");
  removeRouteBtn.addEventListener("click",()=>{
    if (map.routingControl) {
      map.removeControl(map.routingControl);
      map.removeControl(customControl);
      customControl=null
    }
  });

  map.routingControl = control;
  map.customControl = customControl;
};

;
