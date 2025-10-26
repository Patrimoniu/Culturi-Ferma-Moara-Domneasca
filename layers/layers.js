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
    title: 'Cultura 2015-2016<br />\
    <img src="styles/legend/Cultura20152016_1_0.png" /> alte culturi<br />\
    <img src="styles/legend/Cultura20152016_1_1.png" /> alte plante industrale<br />\
    <img src="styles/legend/Cultura20152016_1_2.png" /> alti arbusti fructiferi<br />\
    <img src="styles/legend/Cultura20152016_1_3.png" /> caisi si zarzari<br />\
    <img src="styles/legend/Cultura20152016_1_4.png" /> ciresi si visini<br />\
    <img src="styles/legend/Cultura20152016_1_5.png" /> ciresi si zarzari<br />\
    <img src="styles/legend/Cultura20152016_1_6.png" /> floarea-soarelui<br />\
    <img src="styles/legend/Cultura20152016_1_7.png" /> grau<br />\
    <img src="styles/legend/Cultura20152016_1_8.png" /> lucerna<br />\
    <img src="styles/legend/Cultura20152016_1_9.png" /> mazare boabe<br />\
    <img src="styles/legend/Cultura20152016_1_10.png" /> meri<br />\
    <img src="styles/legend/Cultura20152016_1_11.png" /> nuci si aluni<br />\
    <img src="styles/legend/Cultura20152016_1_12.png" /> orz<br />\
    <img src="styles/legend/Cultura20152016_1_13.png" /> pajiste<br />\
    <img src="styles/legend/Cultura20152016_1_14.png" /> peri<br />\
    <img src="styles/legend/Cultura20152016_1_15.png" /> piersici<br />\
    <img src="styles/legend/Cultura20152016_1_16.png" /> plante de nutret<br />\
    <img src="styles/legend/Cultura20152016_1_17.png" /> porumb<br />\
    <img src="styles/legend/Cultura20152016_1_18.png" /> pruni<br />\
    <img src="styles/legend/Cultura20152016_1_19.png" /> triticale<br />' });
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
    title: 'Cultura 2022-2023<br />\
    <img src="styles/legend/Cultura20222023_2_0.png" /> borceag<br />\
    <img src="styles/legend/Cultura20222023_2_1.png" /> caisi<br />\
    <img src="styles/legend/Cultura20222023_2_2.png" /> campuri experimentale<br />\
    <img src="styles/legend/Cultura20222023_2_3.png" /> ciresi si visini<br />\
    <img src="styles/legend/Cultura20222023_2_4.png" /> floarea soarelui<br />\
    <img src="styles/legend/Cultura20222023_2_5.png" /> grau<br />\
    <img src="styles/legend/Cultura20222023_2_6.png" /> inchiriat<br />\
    <img src="styles/legend/Cultura20222023_2_7.png" /> lucerna<br />\
    <img src="styles/legend/Cultura20222023_2_8.png" /> meri<br />\
    <img src="styles/legend/Cultura20222023_2_9.png" /> nuci<br />\
    <img src="styles/legend/Cultura20222023_2_10.png" /> pajiste<br />\
    <img src="styles/legend/Cultura20222023_2_11.png" /> peri<br />\
    <img src="styles/legend/Cultura20222023_2_12.png" /> porumb<br />\
    <img src="styles/legend/Cultura20222023_2_13.png" /> porumb consum<br />\
    <img src="styles/legend/Cultura20222023_2_14.png" /> porumb siloz<br />\
    <img src="styles/legend/Cultura20222023_2_15.png" /> pruni<br />\
    <img src="styles/legend/Cultura20222023_2_16.png" /> rapita<br />' });
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
    title: 'Cultura 2023-2024<br />\
    <img src="styles/legend/Cultura20232024_3_0.png" /> borceag<br />\
    <img src="styles/legend/Cultura20232024_3_1.png" /> caisi<br />\
    <img src="styles/legend/Cultura20232024_3_2.png" /> campuri experimentale<br />\
    <img src="styles/legend/Cultura20232024_3_3.png" /> ciresi si visini<br />\
    <img src="styles/legend/Cultura20232024_3_4.png" /> floarea soarelui<br />\
    <img src="styles/legend/Cultura20232024_3_5.png" /> grau<br />\
    <img src="styles/legend/Cultura20232024_3_6.png" /> inchiriat<br />\
    <img src="styles/legend/Cultura20232024_3_7.png" /> lot demo-floarea soarelui<br />\
    <img src="styles/legend/Cultura20232024_3_8.png" /> lot demo-porumb<br />\
    <img src="styles/legend/Cultura20232024_3_9.png" /> lucerna<br />\
    <img src="styles/legend/Cultura20232024_3_10.png" /> lucerna an II<br />\
    <img src="styles/legend/Cultura20232024_3_11.png" /> lucerna an III<br />\
    <img src="styles/legend/Cultura20232024_3_12.png" /> meri<br />\
    <img src="styles/legend/Cultura20232024_3_13.png" /> nelucrat<br />\
    <img src="styles/legend/Cultura20232024_3_14.png" /> nuci<br />\
    <img src="styles/legend/Cultura20232024_3_15.png" /> pajiste<br />\
    <img src="styles/legend/Cultura20232024_3_16.png" /> peri<br />\
    <img src="styles/legend/Cultura20232024_3_17.png" /> plante industriale<br />\
    <img src="styles/legend/Cultura20232024_3_18.png" /> porumb consum<br />\
    <img src="styles/legend/Cultura20232024_3_19.png" /> porumb siloz<br />\
    <img src="styles/legend/Cultura20232024_3_20.png" /> pruni<br />\
    <img src="styles/legend/Cultura20232024_3_21.png" /> rapita<br />' });



// === De aici e nou ===

	
// === Make Cultura layers behave like radio buttons ===
var culturaLayers = [
    lyr_Cultura20152016_1,
    lyr_Cultura20222023_2,
    lyr_Cultura20232024_3
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
    fold: 'close', // start collapsed (use 'open' if you want it expanded)
    layers: [
        lyr_Cultura20152016_1,
        lyr_Cultura20222023_2,
        lyr_Cultura20232024_3
    ]
});


// === Pana aici e nou ===


lyr_WorldImagery_0.setVisible(true);lyr_Cultura20152016_1.setVisible(false);lyr_Cultura20222023_2.setVisible(false);lyr_Cultura20232024_3.setVisible(true);
var layersList = [lyr_WorldImagery_0,lyr_Cultura20152016_1,lyr_Cultura20222023_2,lyr_Cultura20232024_3];
lyr_Cultura20152016_1.set('fieldAliases', {'Id': 'Id', 'Denumire': 'Nume parcela', 'Suprafata': 'Suprafata (ha)', '2015_2016': 'Cultura', });
lyr_Cultura20222023_2.set('fieldAliases', {'Id': 'Id', 'Denumire': 'Nume parcela', 'Suprafata': 'Suprafata (ha)', '2015_2016': 'Cultura 2015-216', 'Culturi': 'Cultura', });
lyr_Cultura20232024_3.set('fieldAliases', {'Id': 'Id', 'Denumire': 'Nume parcela', 'Suprafata': 'Suprafata (ha)', '2015_2016': 'Cultura 2015-2016', 'Culturi': 'Cultura 2022-2023', 'Cult_23_24': 'Cultura', });
lyr_Cultura20152016_1.set('fieldImages', {'Id': 'Hidden', 'Denumire': 'TextEdit', 'Suprafata': 'TextEdit', '2015_2016': 'TextEdit', });
lyr_Cultura20222023_2.set('fieldImages', {'Id': 'Range', 'Denumire': 'TextEdit', 'Suprafata': 'TextEdit', '2015_2016': 'TextEdit', 'Culturi': 'TextEdit', });
lyr_Cultura20232024_3.set('fieldImages', {'Id': 'Hidden', 'Denumire': 'TextEdit', 'Suprafata': 'TextEdit', '2015_2016': 'TextEdit', 'Culturi': 'TextEdit', 'Cult_23_24': 'TextEdit', });
lyr_Cultura20152016_1.set('fieldLabels', {'Denumire': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', '2015_2016': 'inline label - visible with data', });
lyr_Cultura20222023_2.set('fieldLabels', {'Id': 'no label', 'Denumire': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', '2015_2016': 'no label', 'Culturi': 'inline label - visible with data', });
lyr_Cultura20232024_3.set('fieldLabels', {'Denumire': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', '2015_2016': 'hidden field', 'Culturi': 'hidden field', 'Cult_23_24': 'inline label - visible with data', });
lyr_Cultura20232024_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});