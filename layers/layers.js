var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CentrosPoblados_1 = new ol.format.GeoJSON();
var features_CentrosPoblados_1 = format_CentrosPoblados_1.readFeatures(json_CentrosPoblados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentrosPoblados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentrosPoblados_1.addFeatures(features_CentrosPoblados_1);
var lyr_CentrosPoblados_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentrosPoblados_1, 
                style: style_CentrosPoblados_1,
                interactive: true,
    title: 'Centros Poblados<br />\
    <img src="styles/legend/CentrosPoblados_1_0.png" /> CAJABAMBA<br />\
    <img src="styles/legend/CentrosPoblados_1_1.png" /> CAJAMARCA<br />\
    <img src="styles/legend/CentrosPoblados_1_2.png" /> CELENDIN<br />\
    <img src="styles/legend/CentrosPoblados_1_3.png" /> CHOTA<br />\
    <img src="styles/legend/CentrosPoblados_1_4.png" /> CONTUMAZA<br />\
    <img src="styles/legend/CentrosPoblados_1_5.png" /> CUTERVO<br />\
    <img src="styles/legend/CentrosPoblados_1_6.png" /> HUALGAYOC<br />\
    <img src="styles/legend/CentrosPoblados_1_7.png" /> JAEN<br />\
    <img src="styles/legend/CentrosPoblados_1_8.png" /> SAN IGNACIO<br />\
    <img src="styles/legend/CentrosPoblados_1_9.png" /> SAN MARCOS<br />\
    <img src="styles/legend/CentrosPoblados_1_10.png" /> SAN MIGUEL<br />\
    <img src="styles/legend/CentrosPoblados_1_11.png" /> SAN PABLO<br />\
    <img src="styles/legend/CentrosPoblados_1_12.png" /> SANTA CRUZ<br />'
        });
var format_Provincias_2 = new ol.format.GeoJSON();
var features_Provincias_2 = format_Provincias_2.readFeatures(json_Provincias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_2.addFeatures(features_Provincias_2);
var lyr_Provincias_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincias_2, 
                style: style_Provincias_2,
                interactive: true,
                title: '<img src="styles/legend/Provincias_2.png" /> Provincias'
            });
var format_Distritos_3 = new ol.format.GeoJSON();
var features_Distritos_3 = format_Distritos_3.readFeatures(json_Distritos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritos_3.addFeatures(features_Distritos_3);
var lyr_Distritos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Distritos_3, 
                style: style_Distritos_3,
                interactive: true,
                title: '<img src="styles/legend/Distritos_3.png" /> Distritos'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CentrosPoblados_1.setVisible(true);lyr_Provincias_2.setVisible(true);lyr_Distritos_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CentrosPoblados_1,lyr_Provincias_2,lyr_Distritos_3];
lyr_CentrosPoblados_1.set('fieldAliases', {'fid': 'fid', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'Centro Poblado': 'Centro Poblado', 'REGION NATURAL': 'REGION NATURAL', 'ALTITUD': 'ALTITUD', 'Total Poblacion Censada': 'Total Poblacion Censada', 'Hombres censados': 'Hombres censados', 'Mujeres censadas': 'Mujeres censadas', 'Total viviendas particulares': 'Total viviendas particulares', 'Viviendas ocupadas': 'Viviendas ocupadas', 'Viviendas desocupadas': 'Viviendas desocupadas', 'X_UTM': 'X_UTM', 'Y_UTM': 'Y_UTM', 'FUENTE': 'FUENTE', 'OBSERVACIONES': 'OBSERVACIONES', 'X_geo': 'X_geo', 'Y_geo': 'Y_geo', });
lyr_Provincias_2.set('fieldAliases', {'fid': 'fid', 'prov_id': 'prov_id', 'provincia': 'provincia', 'area_km2': 'area_km2', 'area_ha': 'area_ha', '#CPP': '#CPP', 'Perimetro': 'Perimetro', 'Imagen': 'Imagen', });
lyr_Distritos_3.set('fieldAliases', {'fid': 'fid', 'iddpto': 'iddpto', 'depart': 'depart', 'prov_id': 'prov_id', 'provincia': 'provincia', 'dist_id': 'dist_id', 'distrito': 'distrito', 'area_km2': 'area_km2', 'area_ha': 'area_ha', });
lyr_CentrosPoblados_1.set('fieldImages', {'fid': 'Hidden', 'PROVINCIA': 'Hidden', 'DISTRITO': 'Hidden', 'Centro Poblado': 'TextEdit', 'REGION NATURAL': 'Hidden', 'ALTITUD': 'Hidden', 'Total Poblacion Censada': 'Hidden', 'Hombres censados': 'Hidden', 'Mujeres censadas': 'Hidden', 'Total viviendas particulares': 'Hidden', 'Viviendas ocupadas': 'Hidden', 'Viviendas desocupadas': 'Hidden', 'X_UTM': 'Hidden', 'Y_UTM': 'Hidden', 'FUENTE': 'Hidden', 'OBSERVACIONES': 'Hidden', 'X_geo': 'Hidden', 'Y_geo': 'Hidden', });
lyr_Provincias_2.set('fieldImages', {'fid': 'Hidden', 'prov_id': 'Hidden', 'provincia': 'TextEdit', 'area_km2': 'Hidden', 'area_ha': 'TextEdit', '#CPP': 'Hidden', 'Perimetro': 'Hidden', 'Imagen': 'ExternalResource', });
lyr_Distritos_3.set('fieldImages', {'fid': 'Hidden', 'iddpto': 'Hidden', 'depart': 'TextEdit', 'prov_id': 'Hidden', 'provincia': 'Hidden', 'dist_id': 'Hidden', 'distrito': 'TextEdit', 'area_km2': 'Hidden', 'area_ha': 'Hidden', });
lyr_CentrosPoblados_1.set('fieldLabels', {'Centro Poblado': 'no label', });
lyr_Provincias_2.set('fieldLabels', {'provincia': 'inline label', 'area_ha': 'inline label', 'Imagen': 'no label', });
lyr_Distritos_3.set('fieldLabels', {'depart': 'inline label', 'distrito': 'inline label', });
lyr_Distritos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});