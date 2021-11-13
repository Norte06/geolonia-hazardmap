
const GSI_Hazardmap_Source = {
  'type': 'raster',
  'tiles': ['https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_data/{z}/{x}/{y}.png'],
  'tileSize': 256,
  'bounds': [128.0, 30.0, 149.0, 46.0],
};
const GSI_Hazardmap_Layer = {
  'id': 'GSI-Hazardmap-layer',
  'type': 'raster',
  'source': 'GSI-Hazardmap-source',
  'paint': {
    'raster-opacity': 0.8,
  },
}

const map1 = new geolonia.Map('#map1',{
  style:{
    version: 8,
    sources:{},
    layers:[{
      id:'background',
      type:'background',
      paint:{'background-color': 'white'}
    }]
  },
});
map1.on('load', function () {
  map1.addSource('GSI-pale-source', {
    'type': 'raster',
    'tiles': ['https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'],
    'tileSize': 256,
  });
  map1.addLayer({
    'id': 'GSI-pale-layer',
    'type': 'raster',
    'source': 'GSI-pale-source',
  });
  map1.addSource('GSI-Hazardmap-source', GSI_Hazardmap_Source);
  map1.addLayer(GSI_Hazardmap_Layer);
});

const map2 = new geolonia.Map('#map2');
map2.on('load', function () {
  map2.addSource('GSI-Hazardmap-source', GSI_Hazardmap_Source);
  map2.addLayer(GSI_Hazardmap_Layer);
});

const map3 = new geolonia.Map('#map3',{
  style:{
    version: 8,
    sources:{},
    layers:[{
      id:'background',
      type:'background',
      paint:{'background-color': 'white'}
    }]
  },
});
map3.on('load', function () {
  map3.addSource('GSI-hillshade-source', {
    'type': 'raster',
    'tiles': ['https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png'],
    'tileSize': 256,
  });
  map3.addLayer({
    'id': 'GSI-hillshade-layer',
    'type': 'raster',
    'source': 'GSI-hillshade-source',
  });
  map3.addSource('GSI-Hazardmap-source', GSI_Hazardmap_Source);
  map3.addLayer(GSI_Hazardmap_Layer);
});

const map4 = new geolonia.Map('#map4');
map4.on('load', function () {
  map4.addSource('GSI-Hazardmap-source', GSI_Hazardmap_Source);
  map4.addLayer(GSI_Hazardmap_Layer);
});


syncMaps(map1, map2);
syncMaps(map1, map3);
syncMaps(map1, map4);


var opacitySlider = document.getElementById('opacitySlider');
opacitySlider.addEventListener('input', ()=>{
  var opacityValue = Number(opacitySlider.value);
  map1.setPaintProperty('GSI-Hazardmap-layer', 'raster-opacity', opacityValue);
  map2.setPaintProperty('GSI-Hazardmap-layer', 'raster-opacity', opacityValue);
  map3.setPaintProperty('GSI-Hazardmap-layer', 'raster-opacity', opacityValue);
  map4.setPaintProperty('GSI-Hazardmap-layer', 'raster-opacity', opacityValue);
});

