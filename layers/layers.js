ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32736").setExtent([85495.265288, 8210312.481567, 1139618.776670, 9031101.361523]);
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
var format_Malawi_Districts_1 = new ol.format.GeoJSON();
var features_Malawi_Districts_1 = format_Malawi_Districts_1.readFeatures(json_Malawi_Districts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Malawi_Districts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malawi_Districts_1.addFeatures(features_Malawi_Districts_1);
var lyr_Malawi_Districts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Malawi_Districts_1, 
                style: style_Malawi_Districts_1,
                interactive: true,
                title: '<img src="styles/legend/Malawi_Districts_1.png" /> Malawi_Districts'
            });
var format_Akule_FEED_Districts_2 = new ol.format.GeoJSON();
var features_Akule_FEED_Districts_2 = format_Akule_FEED_Districts_2.readFeatures(json_Akule_FEED_Districts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Akule_FEED_Districts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Akule_FEED_Districts_2.addFeatures(features_Akule_FEED_Districts_2);
var lyr_Akule_FEED_Districts_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Akule_FEED_Districts_2, 
                style: style_Akule_FEED_Districts_2,
                interactive: true,
    title: 'Akule_FEED_Districts<br />\
    <img src="styles/legend/Akule_FEED_Districts_2_0.png" /> Chitipa<br />\
    <img src="styles/legend/Akule_FEED_Districts_2_1.png" /> Dowa<br />\
    <img src="styles/legend/Akule_FEED_Districts_2_2.png" /> Karonga<br />\
    <img src="styles/legend/Akule_FEED_Districts_2_3.png" /> Lilongwe<br />\
    <img src="styles/legend/Akule_FEED_Districts_2_4.png" /> Nkhata Bay<br />\
    <img src="styles/legend/Akule_FEED_Districts_2_5.png" /> Nkhotakota<br />\
    <img src="styles/legend/Akule_FEED_Districts_2_6.png" /> Rumphi<br />\
    <img src="styles/legend/Akule_FEED_Districts_2_7.png" /> Salima<br />'
        });
var format_Akule_CBCCs_3 = new ol.format.GeoJSON();
var features_Akule_CBCCs_3 = format_Akule_CBCCs_3.readFeatures(json_Akule_CBCCs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Akule_CBCCs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Akule_CBCCs_3.addFeatures(features_Akule_CBCCs_3);
var lyr_Akule_CBCCs_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Akule_CBCCs_3, 
                style: style_Akule_CBCCs_3,
                interactive: true,
                title: '<img src="styles/legend/Akule_CBCCs_3.png" /> Akule_CBCCs'
            });
var format_Akule_Water_Points_4 = new ol.format.GeoJSON();
var features_Akule_Water_Points_4 = format_Akule_Water_Points_4.readFeatures(json_Akule_Water_Points_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Akule_Water_Points_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Akule_Water_Points_4.addFeatures(features_Akule_Water_Points_4);
var lyr_Akule_Water_Points_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Akule_Water_Points_4, 
                style: style_Akule_Water_Points_4,
                interactive: true,
                title: '<img src="styles/legend/Akule_Water_Points_4.png" /> Akule_Water_Points'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Malawi_Districts_1.setVisible(true);lyr_Akule_FEED_Districts_2.setVisible(true);lyr_Akule_CBCCs_3.setVisible(true);lyr_Akule_Water_Points_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Malawi_Districts_1,lyr_Akule_FEED_Districts_2,lyr_Akule_CBCCs_3,lyr_Akule_Water_Points_4];
lyr_Malawi_Districts_1.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'COUNT': 'COUNT', 'AREA_SQ_M': 'AREA_SQ_M', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'REGION': 'REGION', 'FRDP': 'FRDP', });
lyr_Akule_FEED_Districts_2.set('fieldAliases', {'id': 'id', 'Dist_Code': 'Dist_Code', 'DISTRICT': 'DISTRICT', 'AREA_SQ_M': 'AREA_SQ_M', 'AREA': 'AREA', 'HECTARES': 'HECTARES', 'REGION': 'REGION', });
lyr_Akule_CBCCs_3.set('fieldAliases', {'Date_Mappe': 'Date_Mappe', 'CBCC_Name': 'CBCC_Name', 'CBCC_REF': 'CBCC_REF', 'District': 'District', 'T/A': 'T/A', 'GVH': 'GVH', 'Village': 'Village', 'Number of': 'Number of', 'Number o_1': 'Number o_1', 'Total numb': 'Total numb', 'Total nu_1': 'Total nu_1', 'Structure': 'Structure', 'Type of St': 'Type of St', 'Kitchen Av': 'Kitchen Av', 'Does the C': 'Does the C', 'Toilet Ava': 'Toilet Ava', 'Are there': 'Are there', 'Does the t': 'Does the t', 'Does the_1': 'Does the_1', 'Type of wa': 'Type of wa', 'Distance t': 'Distance t', 'Is there a': 'Is there a', 'Acres': 'Acres', 'CBCC GPS C': 'CBCC GPS C', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'CBCC GPS_1': 'CBCC GPS_1', 'CBCC GPS_2': 'CBCC GPS_2', 'Eligibilit': 'Eligibilit', 'Overalp': 'Overalp', });
lyr_Akule_Water_Points_4.set('fieldAliases', {'District': 'District', 'T/A': 'T/A', 'Site Name': 'Site Name', 'Waterpoint': 'Waterpoint', 'Site_Type': 'Site_Type', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Malawi_Districts_1.set('fieldImages', {'DISTRICT': 'TextEdit', 'COUNT': 'Hidden', 'AREA_SQ_M': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'HECTARES': 'Hidden', 'REGION': 'TextEdit', 'FRDP': 'Hidden', });
lyr_Akule_FEED_Districts_2.set('fieldImages', {'id': 'Hidden', 'Dist_Code': 'Hidden', 'DISTRICT': 'TextEdit', 'AREA_SQ_M': 'Hidden', 'AREA': 'Hidden', 'HECTARES': 'Hidden', 'REGION': 'TextEdit', });
lyr_Akule_CBCCs_3.set('fieldImages', {'Date_Mappe': 'Hidden', 'CBCC_Name': 'TextEdit', 'CBCC_REF': 'TextEdit', 'District': 'TextEdit', 'T/A': 'TextEdit', 'GVH': 'TextEdit', 'Village': 'TextEdit', 'Number of': 'Hidden', 'Number o_1': 'Hidden', 'Total numb': 'Hidden', 'Total nu_1': 'Hidden', 'Structure': 'Hidden', 'Type of St': 'Hidden', 'Kitchen Av': 'Hidden', 'Does the C': 'Hidden', 'Toilet Ava': 'Hidden', 'Are there': 'Hidden', 'Does the t': 'Hidden', 'Does the_1': 'Hidden', 'Type of wa': 'Hidden', 'Distance t': 'Hidden', 'Is there a': 'Hidden', 'Acres': 'Hidden', 'CBCC GPS C': 'Hidden', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'CBCC GPS_1': 'Hidden', 'CBCC GPS_2': 'Hidden', 'Eligibilit': 'Hidden', 'Overalp': 'Hidden', });
lyr_Akule_Water_Points_4.set('fieldImages', {'District': 'TextEdit', 'T/A': 'TextEdit', 'Site Name': 'TextEdit', 'Waterpoint': 'TextEdit', 'Site_Type': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Malawi_Districts_1.set('fieldLabels', {'DISTRICT': 'inline label', 'REGION': 'inline label', });
lyr_Akule_FEED_Districts_2.set('fieldLabels', {'DISTRICT': 'inline label', 'REGION': 'inline label', });
lyr_Akule_CBCCs_3.set('fieldLabels', {'CBCC_Name': 'inline label', 'CBCC_REF': 'inline label', 'District': 'inline label', 'T/A': 'inline label', 'GVH': 'inline label', 'Village': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_Akule_Water_Points_4.set('fieldLabels', {'District': 'inline label', 'T/A': 'inline label', 'Site Name': 'inline label', 'Waterpoint': 'inline label', 'Site_Type': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_Akule_Water_Points_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});