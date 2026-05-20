var wms_layers = [];


        var lyr_WorldImagery_0 = new ol.layer.Tile({
            'title': 'World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Cultura20152016_1 = new ol.format.GeoJSON();
var features_Cultura20152016_1 = format_Cultura20152016_1.readFeatures(json_Cultura20152016_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cultura20152016_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cultura20152016_1.addFeatures(features_Cultura20152016_1);
var lyr_Cultura20152016_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cultura20152016_1, 
                style: style_Cultura20152016_1,
                popuplayertitle: 'Cultura 2015-2016',
                interactive: true,
    title: 'Cultura 2015-2016' });
var format_Cultura20222023_2 = new ol.format.GeoJSON();
var features_Cultura20222023_2 = format_Cultura20222023_2.readFeatures(json_Cultura20222023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cultura20222023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cultura20222023_2.addFeatures(features_Cultura20222023_2);
var lyr_Cultura20222023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cultura20222023_2, 
                style: style_Cultura20222023_2,
                popuplayertitle: 'Cultura 2022-2023',
                interactive: true,
    title: 'Cultura 2022-2023' });
var format_Cultura20232024_3 = new ol.format.GeoJSON();
var features_Cultura20232024_3 = format_Cultura20232024_3.readFeatures(json_Cultura20232024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cultura20232024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cultura20232024_3.addFeatures(features_Cultura20232024_3);
var lyr_Cultura20232024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cultura20232024_3, 
                style: style_Cultura20232024_3,
                popuplayertitle: 'Cultura 2023-2024',
                interactive: true,
    title: 'Cultura 2023-2024' });
var format_Cultura20242025_4 = new ol.format.GeoJSON();
var features_Cultura20242025_4 = format_Cultura20242025_4.readFeatures(json_Cultura20242025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cultura20242025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cultura20242025_4.addFeatures(features_Cultura20242025_4);
var lyr_Cultura20242025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cultura20242025_4, 
                style: style_Cultura20242025_4,
                popuplayertitle: 'Cultura 2024-2025',
                interactive: true,
    title: 'Cultura 2024-2025' });
var format_Cultura20252026_5 = new ol.format.GeoJSON();
var features_Cultura20252026_5 = format_Cultura20252026_5.readFeatures(json_Cultura20252026_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cultura20252026_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cultura20252026_5.addFeatures(features_Cultura20252026_5);
var lyr_Cultura20252026_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cultura20252026_5, 
                style: style_Cultura20252026_5,
                popuplayertitle: 'Cultura 2025-2026',
                interactive: true,
    title: 'Cultura 2025-2026'
	});
	
	
	
	// === De aici e nou ===

	
// === Make Cultura layers behave like radio buttons ===
var culturaLayers = [
    lyr_Cultura20152016_1,
    lyr_Cultura20222023_2,
    lyr_Cultura20232024_3,
	lyr_Cultura20242025_4,
	lyr_Cultura20252026_5
];

// Ensure only one can be visible at a time
culturaLayers.forEach(function(layer) {
    layer.on('change:visible', function(e) {
        if (layer.getVisible()) {
            culturaLayers.forEach(function(otherLayer) {
                if (otherLayer !== layer) {
                    otherLayer.setVisible(false);
                }
            });
        }
    });
});

lyr_Cultura20152016_1.setVisible(true);
lyr_Cultura20222023_2.setVisible(false);
lyr_Cultura20232024_3.setVisible(false);
lyr_Cultura20242025_4.setVisible(false);
lyr_Cultura20252026_5.setVisible(false);
	
// === Display active layer name ===
var label = document.getElementById('activeLayerLabel');

function updateActiveLayerLabel() {
    var activeLayer = culturaLayers.find(function(layer) {
        return layer.getVisible();
    });
    if (activeLayer) {
        label.innerHTML = activeLayer.get('popuplayertitle') || 'Active layer';
        label.style.display = 'block';
    } else {
        label.style.display = 'none';
    }
}

// Run once at start
updateActiveLayerLabel();

// Update label whenever visibility changes
culturaLayers.forEach(function(layer) {
    layer.on('change:visible', function() {
        updateActiveLayerLabel();
    });
});	

	
	// --- Group all your culture layers under one collapsible group ---
var group_Cultura = new ol.layer.Group({
    title: 'Cultura Layers',
    fold: 'closed', // start collapsed (use 'open' if you want it expanded)
    layers: [
        lyr_Cultura20152016_1,
        lyr_Cultura20222023_2,
        lyr_Cultura20232024_3,
		lyr_Cultura20242025_4,
		lyr_Cultura20252026_5
    ]
});


// === Pana aici e nou ===
	
	
	
	
	
	
	
	
	
	

lyr_WorldImagery_0.setVisible(true);lyr_Cultura20152016_1.setVisible(false);lyr_Cultura20222023_2.setVisible(false);lyr_Cultura20232024_3.setVisible(false);lyr_Cultura20242025_4.setVisible(false);lyr_Cultura20252026_5.setVisible(true);
var layersList = [lyr_WorldImagery_0,lyr_Cultura20152016_1,lyr_Cultura20222023_2,lyr_Cultura20232024_3,lyr_Cultura20242025_4,lyr_Cultura20252026_5];
lyr_Cultura20152016_1.set('fieldAliases', {'Id': 'Id', 'Denumire': 'Nume parcela', 'Suprafata': 'Suprafata (ha)', '2015_2016': 'Cultura', });
lyr_Cultura20222023_2.set('fieldAliases', {'Id': 'Id', 'Denumire': 'Nume parcela', 'Suprafata': 'Suprafata (ha)', '2015_2016': 'Cultura 2015-216', 'Culturi': 'Cultura', });
lyr_Cultura20232024_3.set('fieldAliases', {'Id': 'Id', 'Denumire': 'Nume parcela', 'Suprafata': 'Suprafata (ha)', '2015_2016': 'Cultura 2015-2016', 'Culturi': 'Cultura 2022-2023', 'Cult_23_24': 'Cultura', });
lyr_Cultura20242025_4.set('fieldAliases', {'Id': 'Id', 'Denumire': 'Nume parcela', 'Suprafata': 'Suprafata (ha)', '2015_2016': 'Cultura 2015-2016', 'Culturi': 'Cultura 2022-2023', 'Cult_23_24': 'Cultura 2023-2024', 'Cult_24_25': 'Cultura', });
lyr_Cultura20252026_5.set('fieldAliases', {'Id': 'Id', 'Denumire': 'Nume parcela', 'Suprafata': 'Suprafata (ha)', '2015_2016': 'Cultura 2015-2016', 'Culturi': 'Culturi', 'Cult_23_24': 'Cult_23_24', 'Cult_24_25': 'Cult_24_25', 'Cult_25_26': 'Cultura', });
lyr_Cultura20152016_1.set('fieldImages', {'Id': 'Hidden', 'Denumire': 'TextEdit', 'Suprafata': 'TextEdit', '2015_2016': 'TextEdit', });
lyr_Cultura20222023_2.set('fieldImages', {'Id': 'Range', 'Denumire': 'TextEdit', 'Suprafata': 'TextEdit', '2015_2016': 'TextEdit', 'Culturi': 'TextEdit', });
lyr_Cultura20232024_3.set('fieldImages', {'Id': 'Hidden', 'Denumire': 'TextEdit', 'Suprafata': 'TextEdit', '2015_2016': 'TextEdit', 'Culturi': 'TextEdit', 'Cult_23_24': 'TextEdit', });
lyr_Cultura20242025_4.set('fieldImages', {'Id': 'Hidden', 'Denumire': 'TextEdit', 'Suprafata': 'TextEdit', '2015_2016': 'TextEdit', 'Culturi': 'TextEdit', 'Cult_23_24': 'TextEdit', 'Cult_24_25': 'TextEdit', });
lyr_Cultura20252026_5.set('fieldImages', {'Id': 'Hidden', 'Denumire': 'TextEdit', 'Suprafata': 'TextEdit', '2015_2016': 'TextEdit', 'Culturi': 'TextEdit', 'Cult_23_24': 'TextEdit', 'Cult_24_25': 'TextEdit', 'Cult_25_26': 'TextEdit', });
lyr_Cultura20152016_1.set('fieldLabels', {'Denumire': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', '2015_2016': 'inline label - visible with data', });
lyr_Cultura20222023_2.set('fieldLabels', {'Id': 'no label', 'Denumire': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', '2015_2016': 'no label', 'Culturi': 'inline label - visible with data', });
lyr_Cultura20232024_3.set('fieldLabels', {'Denumire': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', '2015_2016': 'hidden field', 'Culturi': 'hidden field', 'Cult_23_24': 'inline label - visible with data', });
lyr_Cultura20242025_4.set('fieldLabels', {'Denumire': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', '2015_2016': 'hidden field', 'Culturi': 'hidden field', 'Cult_23_24': 'hidden field', 'Cult_24_25': 'inline label - visible with data', });
lyr_Cultura20252026_5.set('fieldLabels', {'Denumire': 'inline label - always visible', 'Suprafata': 'inline label - always visible', '2015_2016': 'hidden field', 'Culturi': 'hidden field', 'Cult_23_24': 'hidden field', 'Cult_24_25': 'hidden field', 'Cult_25_26': 'inline label - always visible', });
lyr_Cultura20252026_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});