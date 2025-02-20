import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const IndonesiaMap = () => {
  const [geoData, setGeoData] = useState(null); 

  useEffect(() => {
    fetch("/indonesia.geojson")
      .then((response) => response.json())
      .then((data) => {
        console.log("GeoJSON Data Loaded:", data); 
        setGeoData(data);
      })
      .catch((error) => console.error("Error loading GeoJSON:", error));
  }, []);
  

  return (
    <ComposableMap projection="geoMercator" projectionConfig={{ scale: 900 }}>
      {geoData && (
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#D3D3D3", stroke: "#FFF" },
                  hover: { fill: "#F53", stroke: "#FFF" },
                  pressed: { fill: "#E42", stroke: "#FFF" },
                }}
              />
            ))
          }
        </Geographies>
      )}
    </ComposableMap>
  );
};
console.log("map", fetch("/indonesia.geojson") )

export default IndonesiaMap;
