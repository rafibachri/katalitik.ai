import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import indonesiaGeo from "../indonesia-province-simple.json";

const IndonesiaMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ left: 0, top: 0 });
  const [zoom, setZoom] = useState(1);
  const [translate, setTranslate] = useState([120, -5]); // State untuk posisi geser


  const handleZoomIn = () => setZoom((prev) => Math.min(prev * 1.2, 5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev / 1.2, 1)); 

  const handleRegionClick = (geo, evt) => {
    setSelectedRegion(geo.properties.Propinsi);
    const boundingRect = evt.currentTarget.getBoundingClientRect();
    setPopupPosition({
      left: evt.clientX - boundingRect.left,
      top: evt.clientY - boundingRect.top,
    });
  };

  return (
    <div className="relative flex flex-col items-center" style={{height:'350px'}} >
      {/* Peta */}
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 900, center: [120, -10] }} className="map-container">
        <ZoomableGroup
          zoom={zoom}
          center={[120, -5]}
          translateExtent={[
            [50, 50], 
            [700, 500],
          ]}onMoveEnd={(position) => setTranslate(position.coordinates)}>
          <Geographies geography={indonesiaGeo}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={(evt) => handleRegionClick(geo, evt)}
                  style={{
                    default: { fill: "#E57373", outline: "none" },
                    hover: { fill: "#D32F2F", outline: "none" },
                    pressed: { fill: "#D32F2F", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      <div className="zoom-controls">
        <button className="zoom-btn" onClick={handleZoomIn}>+</button>
        <button className="zoom-btn" onClick={handleZoomOut}>-</button>
      </div>

      {selectedRegion && (
        <div
          className="map-popup"
          onClick={() => setSelectedRegion(null)}
        >
          <div className="map-popup-name">{selectedRegion}</div>
          <div className="map-popup-row">
            <div className="map-popup-content">Total Procurement</div>
            <div className="map-popup-content2">12.121</div>
          </div>
          <div className="map-popup-row">
            <div className="map-popup-content">Total Budget</div>
            <div className="map-popup-content2">Rp.360.128.128</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndonesiaMap;

// import React, { useState } from 'react';
// import { VectorMap } from '@react-jvectormap/core';
// import { idnMerc } from '@react-jvectormap/indonesia';

// const IndonesiaMap = () => {
//   const [selectedMarker, setSelectedMarker] = useState(null);


//   const regionColors = {
//     'id-jk': '#a83232',
//     'id-ji': '#d9534f',
//     'id-ki': '#b52b2b',
//     'id-ss': '#e57373',
//   };

//   const markers = [
//     { latLng: [-6.2088, 106.8456], name: 'DKI Jakarta' },
//     { latLng: [-7.2575, 112.7521], name: 'Surabaya' },
//     { latLng: [-1.2654, 116.8312], name: 'Balikpapan' },
//     { latLng: [-3.3194, 114.5908], name: 'Banjarmasin' },
//     { latLng: [1.4748, 124.8421], name: 'Manado' },
//     { latLng: [-1.6101, 103.6131], name: 'Jambi' },
//   ];

//   return (
//     <div style={{ width: '100%', height: '350px', backgroundColor: 'white', padding: '10px', position: 'relative' }} > 
//       <VectorMap
//         map={idnMerc}
//         backgroundColor="white"
//         containerStyle={{
//           width: "100%",
//           height: "100%",
//         }}
//         regionStyle={{
//           initial: {
//             fill: '#FFC1BD',
//             'fill-opacity': 1,
//             stroke: 'black',
//             'stroke-width': 0.5,
//             'stroke-opacity': 0.5,
//           },
//         }}
//         series={{
//           regions: [
//             {
//               values: regionColors,
//               attribute: 'fill',
//             },
//           ],
//         }}
//         markers={markers}
//         markerStyle={{
//           initial: {
//             fill: 'black',
//             stroke: '#fff',
//             'stroke-width': 2,
//             r: 5,
//           },
//         }}
//         onMarkerClick={(e, index) => {
//           setSelectedMarker(markers[index]);
//         }}
//       />

//       {selectedMarker && (
//         <div className='map-popup' onClick={() => setSelectedMarker(null)}>
//           <div className='map-popup-name'>{selectedMarker.name}</div>
//           <div className='map-popup-row'>
//             <div className='map-popup-content'>Total Procurement</div>
//             <div className='map-popup-content2'>12.121</div>
//           </div>
//           <div className='map-popup-row'>
//             <div className='map-popup-content'>Total Budget</div>
//             <div className='map-popup-content2'>Rp.360.128.128</div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IndonesiaMap;