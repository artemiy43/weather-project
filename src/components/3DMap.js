import React, { useRef } from "react";
import { loadModules } from "esri-loader";

function ZDMap(props) {
  const num = props.num;
  const mapRef = useRef(null);
  
  React.useEffect(()=> {
    loadModules(
      [
        "esri/widgets/Search",
        "esri/Map",
        "esri/views/SceneView",
        "esri/config",
        "esri/geometry/support/webMercatorUtils",
        "esri/Graphic",
        "esri/geometry/Polyline",
        "esri/symbols/SimpleLineSymbol",
        "esri/geometry/Point"
      ],
      {
        css: true
      }
    ).then(
      ([
        Search,
        Map,
        SceneView,
        esriConfig,
        webMercatorUtils,
        Graphic,
        Polyline,
        SimpleLineSymbol,
        Point
        ]) => {

        const map = new Map({
          basemap: "topo-vector",
          ground: "world-elevation"
        });

        esriConfig.apiKey = "AAPKc299fdea835641dd9348a853988d63168l5eW0o90eVgK6I5TXTdV1beR8AfCAhpfVYB9Mn9jE7VsTkoi_bv6yZkMzg4TUaX";

        const view = new SceneView({
          container: "webmap", // Reference to the scene div created in step 5
          map: map, // Reference to the map object created before the scene
          scale: 50000000, // Sets the initial scale to 1:50,000,000
          center: [0, 0],
        });
        

        const search = new Search({  //Add Search widget
          view: view
        });
        
        view.ui.add(search, "top-leading");

        function showCoordinates(evt) {
          
          var point = view.toMap({x: evt.x, y: evt.y});
          
          if (point!==null) {
            var mp = webMercatorUtils.webMercatorToGeographic(point);

            view.popup.open({
                title: "Широта: " + mp.y.toFixed(3) + "   Долгота:" + mp.x.toFixed(3),
                location: point
            });
          }
        }
  
        view.when(function(){
          view.on("pointer-move", showCoordinates);
        });


        view.on("click", function(event) {
          var point = view.toMap({x: event.x, y: event.y});
          
          if (point!==null) {
            props.onClick(event.mapPoint.latitude.toFixed(12), event.mapPoint.longitude.toFixed(12));
            props.isOnGlobe(true);
            props.setInfoTooltipOpened(false);
          }
          else {
            props.isOnGlobe(false);
            props.setInfoTooltipOpened(true);
          }
        });
      })
    },[num]);

    return (
      <div id="webmap" className="webmap" ref={mapRef} />
    );
}
export default ZDMap;