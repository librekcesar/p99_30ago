var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cuadricula_cdmx_dos_columnas_utm_1 = new ol.format.GeoJSON();
var features_cuadricula_cdmx_dos_columnas_utm_1 = format_cuadricula_cdmx_dos_columnas_utm_1.readFeatures(json_cuadricula_cdmx_dos_columnas_utm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuadricula_cdmx_dos_columnas_utm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuadricula_cdmx_dos_columnas_utm_1.addFeatures(features_cuadricula_cdmx_dos_columnas_utm_1);
var lyr_cuadricula_cdmx_dos_columnas_utm_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cuadricula_cdmx_dos_columnas_utm_1, 
                style: style_cuadricula_cdmx_dos_columnas_utm_1,
                interactive: true,
    title: 'cuadricula_cdmx_dos_columnas_utm<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_0.png" /> 0 - 6<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_1.png" /> 6 - 19<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_2.png" /> 19 - 37<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_3.png" /> 37 - 61<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_4.png" /> 61 - 87<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_5.png" /> 87 - 118<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_6.png" /> 118 - 149<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_7.png" /> 149 - 186<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_8.png" /> 186 - 280<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_9.png" /> 280 - 357<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_10.png" /> 357 - 521<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_11.png" /> 521 - 638<br />'
        });
var format_p99_30ago_2 = new ol.format.GeoJSON();
var features_p99_30ago_2 = format_p99_30ago_2.readFeatures(json_p99_30ago_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_p99_30ago_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_p99_30ago_2.addFeatures(features_p99_30ago_2);
var lyr_p99_30ago_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_p99_30ago_2, 
                style: style_p99_30ago_2,
                interactive: false,
                title: '<img src="styles/legend/p99_30ago_2.png" /> p99_30ago'
            });
var format_Hechobuffer_3 = new ol.format.GeoJSON();
var features_Hechobuffer_3 = format_Hechobuffer_3.readFeatures(json_Hechobuffer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hechobuffer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hechobuffer_3.addFeatures(features_Hechobuffer_3);
var lyr_Hechobuffer_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hechobuffer_3, 
                style: style_Hechobuffer_3,
                interactive: false,
                title: '<img src="styles/legend/Hechobuffer_3.png" /> Hecho buffer'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_cuadricula_cdmx_dos_columnas_utm_1.setVisible(true);lyr_p99_30ago_2.setVisible(true);lyr_Hechobuffer_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cuadricula_cdmx_dos_columnas_utm_1,lyr_p99_30ago_2,lyr_Hechobuffer_3];
lyr_cuadricula_cdmx_dos_columnas_utm_1.set('fieldAliases', {'id': 'id', 'NUMPOINTS': 'NUMPOINTS', 'estacion': 'estacion', });
lyr_p99_30ago_2.set('fieldAliases', {'ID': 'ID', 'Estación': 'Estación', 'Zonificación': 'Zonificación', 'Nombre del punto99': 'Nombre del punto99', 'Dirección': 'Dirección', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Nombre del responsable': 'Nombre del responsable', 'Número celular del responsable': 'Número celular del responsable', 'Colonia': 'Colonia', 'Correo electrónico': 'Correo electrónico', 'CP': 'CP', 'Estado': 'Estado', });
lyr_Hechobuffer_3.set('fieldAliases', {'ID': 'ID', 'Estación': 'Estación', 'Zonificación': 'Zonificación', 'Nombre del punto99': 'Nombre del punto99', 'Dirección': 'Dirección', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Nombre del responsable': 'Nombre del responsable', 'Número celular del responsable': 'Número celular del responsable', 'Colonia': 'Colonia', 'Correo electrónico': 'Correo electrónico', 'CP': 'CP', 'Estado': 'Estado', });
lyr_cuadricula_cdmx_dos_columnas_utm_1.set('fieldImages', {'id': 'Range', 'NUMPOINTS': 'TextEdit', 'estacion': 'TextEdit', });
lyr_p99_30ago_2.set('fieldImages', {'ID': 'Range', 'Estación': 'TextEdit', 'Zonificación': 'TextEdit', 'Nombre del punto99': 'TextEdit', 'Dirección': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Nombre del responsable': 'TextEdit', 'Número celular del responsable': 'TextEdit', 'Colonia': 'TextEdit', 'Correo electrónico': 'TextEdit', 'CP': 'Range', 'Estado': 'TextEdit', });
lyr_Hechobuffer_3.set('fieldImages', {'ID': 'Range', 'Estación': 'TextEdit', 'Zonificación': 'TextEdit', 'Nombre del punto99': 'TextEdit', 'Dirección': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Nombre del responsable': 'TextEdit', 'Número celular del responsable': 'TextEdit', 'Colonia': 'TextEdit', 'Correo electrónico': 'TextEdit', 'CP': 'Range', 'Estado': 'TextEdit', });
lyr_cuadricula_cdmx_dos_columnas_utm_1.set('fieldLabels', {'id': 'header label', 'NUMPOINTS': 'header label', 'estacion': 'header label', });
lyr_p99_30ago_2.set('fieldLabels', {'ID': 'no label', 'Estación': 'no label', 'Zonificación': 'no label', 'Nombre del punto99': 'no label', 'Dirección': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Nombre del responsable': 'no label', 'Número celular del responsable': 'no label', 'Colonia': 'no label', 'Correo electrónico': 'no label', 'CP': 'no label', 'Estado': 'no label', });
lyr_Hechobuffer_3.set('fieldLabels', {'ID': 'no label', 'Estación': 'no label', 'Zonificación': 'no label', 'Nombre del punto99': 'no label', 'Dirección': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Nombre del responsable': 'no label', 'Número celular del responsable': 'no label', 'Colonia': 'no label', 'Correo electrónico': 'no label', 'CP': 'no label', 'Estado': 'no label', });
lyr_Hechobuffer_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});