    //////////////////////////////////////////////////////////////////////////
    // Scene 2: Toate rezervațiile științifice

    function style2(feature) {
        return {
            fillColor: '#ffffff',
            fillOpacity: 0.1,
            weight: 2,
            opacity: 0.8,
            color: '#A44512',
            dashArray: '4'
        };
    }

    var toate_rs = L.geoJson.ajax('assets/rm.geojson', {
        style: style2,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip('Republica Moldova', {
                    className: 'feature-label',
                    permanent: false,
                    direction: 'center'
                });
        }
    });

    var toate_rs_legend = '<p><b>Legenda</b></p><br>' +
        '<i style="background: #A44512; opacity: 0.8"></i><p><b>Hotarele RM</b></p><br><br>';


        //////////////////////////////////////////////////////////////////////////
    // Scene 3: Codrii

    function style3(feature) {
        return {
            fillColor: 'green',
            fillOpacity: 0.1,
            weight: 3,
            opacity: 0.8,
            color: '#78BE21',
            dashArray: '6'
        };
    }

    var codrii = L.geoJson.ajax('assets/aps_codrii.geojson', {
        style: style3,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip("Rezervația Științifică: <br>" + feature.properties.name, {
                className: 'feature-label',
                permanent: false,
                direction: 'center'
            });
        }
    });

    var codrii_legend = '<p><b>RS Codrii</b></p><br>' +
    '<i style="background: #78BE21; opacity: 0.8"></i><p><b>Hotarele RS</b></p><br>' +
    '<i style="background: green; opacity: 0.1"></i><p><b>Suprafața RS</b></p><br>';


    //////////////////////////////////////////////////////////////////////////
    // Scene 4: Plaiul Fagului


    function style4(feature) {
        return {
            fillColor: '#ffffff',
            fillOpacity: 0.1,
            weight: 2,
            opacity: 0.8,
            color: '#605f5f',
            dashArray: '4'
        };
    }

    var domneasca = L.geoJson.ajax('assets/aps_padurea_domneasca.geojson', {
        style: style3,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip("Rezervația Științifică: <br>" + feature.properties.name, {
                className: 'feature-label',
                permanent: false,
                direction: 'center'
            });
        }
    });


    var domneasca_legend = '<p><b>RS Pădurea Domnească</b></p>' +
    '<i style="background: #78BE21; opacity: 0.8"></i><p><b>Hotarele RS</b></p><br>' +
    '<i style="background: green; opacity: 0.1"></i><p><b>Suprafața RS</b></p><br>';

    //////////////////////////////////////////////////////////////////////////
    // Scene 5: Pădurea Domnească

    function style5(feature) {
        return {
            fillColor: '#ffffff',
            fillOpacity: 0.1,
            weight: 2,
            opacity: 0.8,
            color: '#605f5f',
            dashArray: '4'
        };
    }

    var fagul = L.geoJson.ajax('assets/aps_plaiul_fagului.geojson', {
        style: style3,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip("Rezervația Științifică: <br>" + feature.properties.name, {
                className: 'feature-label',
                permanent: false,
                direction: 'center'
            });
        }
    });


    var fagul_legend = '<p><b>RS Plaiul Fagului</b></p>' +
    '<i style="background: #78BE21; opacity: 0.8"></i><p><b>Hotarele RS</b></p><br>' +
    '<i style="background: green; opacity: 0.1"></i><p><b>Suprafața RS</b></p><br>';

    //////////////////////////////////////////////////////////////////////////
    // Scene 6: Prutul de Jos

    function style6(feature) {
        return {
            fillColor: '#ffffff',
            fillOpacity: 0.1,
            weight: 2,
            opacity: 0.8,
            color: '#605f5f',
            dashArray: '4'
        };
    }

    var prutul = L.geoJson.ajax('assets/aps_prutul_jos.geojson', {
        style: style3,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip("Rezervația Științifică: <br>" + feature.properties.name, {
                className: 'feature-label',
                permanent: false,
                direction: 'center'
            });
        }
    });


    var prutul_legend = '<p><b>RS Prutul de Jos</b></p>' +
    '<i style="background: #78BE21; opacity: 0.8"></i><p><b>Hotarele RS</b></p><br>' +
    '<i style="background: green; opacity: 0.1"></i><p><b>Suprafața RS</b></p><br>';

    //////////////////////////////////////////////////////////////////////////
    // Scene 7: Iagorlic




    var iagorlic = L.geoJson.ajax('assets/aps_iagorlic.geojson', {
        style: style3,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip("Rezervația Științifică: <br>" + feature.properties.name, {
                className: 'feature-label',
                permanent: false,
                direction: 'center'
            });
        }
    });


    var iagorlic_legend = '<p><b>RS Iagorlîc</b></p>' +
    '<i style="background: #78BE21; opacity: 0.8"></i><p><b>Hotarele RS</b></p><br>' +
    '<i style="background: green; opacity: 0.1"></i><p><b>Suprafața RS</b></p><br>';

    //////////////////////////////////////////////////////////////////////////


    var layers = {
        ESRI: {
            layer: L.tileLayer(
                'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            )
        },
        toate_rs: {
            layer: toate_rs,
            legend: toate_rs_legend
        },
        codrii: {
            layer: codrii,
            legend: codrii_legend
        },
        domneasca: {
            layer: domneasca,
            legend: domneasca_legend
        },
        fagul: {
            layer: fagul,
            legend: fagul_legend
        },
        prutul: {
            layer: prutul,
            legend: prutul_legend
        },
        iagorlic: {
            layer: iagorlic,
            legend: iagorlic_legend
        },
        GEE: {
            layer: L.tileLayer('http://earthengine.google.org/static/hansen_2013/tree_alpha/{z}/{x}/{y}.png'),

        },
        satellite: {
            layer: L.tileLayer(
                'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw', {
                    id: 'mapbox.satellite'
                })
        },
        cartodb_light: {
            layer: L.tileLayer('http://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png')
        }
    };

    var scenes = {
        start: {
            lat: 47.06666667,
            lng: 28.5,
            zoom: 7.5,
            name: 'Început',
            layers: []
        },
        toate_rs: {
            lat: 47.00,
            lng: 27.00,
            zoom: 7.5,
            name: 'Toate RȘ',
            layers: [layers.toate_rs,layers.codrii, layers.domneasca, layers.fagul, layers.prutul, layers.iagorlic]
        },
        codrii: {
            lat: 47.0666667,
            lng: 28.3,
            zoom: 12,
            name: 'RȘ Codrii',
            layers: [layers.codrii]
        },
        domneasca: {
            lat: 47.6097222,
            lng: 27.22,
            zoom: 11,
            name: 'RȘ Pădurea Domnească',
            layers: [layers.domneasca]
        },
        fagul: {
            lat: 47.2800000,
            lng: 27.9500000,
            zoom: 12,
            name: 'RȘ Plaiul Fagului',
            layers: [layers.fagul]
        },
        prutul: {
            lat: 45.59,
            lng: 28.08,
            zoom: 13,
            name: 'RȘ Prutul de Jos',
            layers: [layers.prutul]
        },
        iagorlic: {
            lat: 47.370000,
            lng: 29.100000,
            zoom: 12,
            name: 'RȘ Iagorlîc',
            layers: [layers.iagorlic]
        },
        sfarsit: {
            lat: 47.0000000,
            lng: 27.0000000,
            zoom: 7.5,
            name: 'Sfârșit'
        }
    };

    $('#storymap').storymap({
        scenes: scenes,
        baselayer: layers.cartodb_light,
        legend: true, // if you do not want a legend feature, you can simply not define the createLegend function.
        credits: "",
        loader: true,
        scalebar: true,
        flyto: true,
        navwidget: true,

        createMap: function () {
            // create a map in the "map" div, set the view to a given place and zoom
            var map = L.map($(".storymap-map")[0], {
                zoomControl: false,
                fadeAnimation: true,
                zoomAnimation: true,
                dragging: true, scrollWheelZoom: true, maxZoom: 14
            }).setView([47, 27], 7.5);

            //add an miniglobe
            new L.Control.GlobeMiniMap({
                marker: 'red',
                position: 'bottomright'
            }).addTo(map);

            return map;
        }
    });