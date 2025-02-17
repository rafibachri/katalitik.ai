import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import indonesiaGeoJSON from "../maps/Indonesia.js";

const IndonesiaMap = () => {
  return (
    <div className="customer-chart">
      <div className="dashboard-title">Regional Procurement and Budget Summary</div>
      <p className="dashboard-sub">Ringkasan pengadaan dan anggaran di daerah Indonesia</p>
      
      <ComposableMap projection="geoMercator" width={500} height={400}>
        <Geographies geography={indonesiaGeoJSON}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#F93C65"
                stroke="#FFF"
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#861A14", outline: "none" },
                  pressed: { fill: "#FF0000", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default IndonesiaMap;
