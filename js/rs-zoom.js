    //////////////////////////////////////////////////////////////////////////
    // Scene 2: Toate rezervațiile științifice

    function style2(feature) {
        return {
            fillColor: '#ffffff',
            fillOpacity: 0.2,
            weight: 2,
            opacity: 1.0,
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

    var toate_rs_legend = '<p><b>Rezervații Științifice</b></p><br>' +
        '<i style="background: #A44512; opacity: 1.0"></i><p>Hotarul RM</p><br>';


    //////////////////////////////////////////////////////////////////////////
    // Scene 3: Codrii

    function style3(feature) {
        return {
            fillColor: '#4daf4a',
            fillOpacity: 0.1,
            weight: 3,
            opacity: 1.0,
            color: '#78BE21',
            dashArray: '6'
        };
    }




    var codrii = L.geoJson.ajax('assets/aps_codrii.geojson', {
        style: style3,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip(href = "Rezervația Științifică: <br>" + feature.properties.name, {
                className: 'feature-label',
                permanent: false,
                direction: 'center'
            });
        }
    });

    var codrii_legend = '<p><b>Codrii</b></p>' +
        '<i style="background: #78BE21; opacity: 1.0"></i><p>Hotarul RS</p><br>';


    //////////////////////////////////////////////////////////////////////////
    // Scene 4: Padurea Domneasca


    function style4(feature) {
        return {
            fillColor: '#4daf4a',
            fillOpacity: 0.1,
            weight: 3,
            opacity: 1.0,
            color: '#ff7f00',
            dashArray: '4'
        };
    }

    var domneasca = L.geoJson.ajax('assets/aps_padurea_domneasca.geojson', {
        style: style4,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip("Rezervația Științifică: <br>" + feature.properties.name, {
                className: 'feature-label',
                permanent: false,
                direction: 'center'
            });
        }
    });


    var domneasca_legend = '<p><b>Pădurea Domnească</b></p>' +
        '<i style="background: #ff7f00; opacity: 1.0"></i><p>Hotarul RS</p><br>';

    //////////////////////////////////////////////////////////////////////////
    // Scene 5: Pădurea Domnească

    function style5(feature) {
        return {
            fillColor: '#4daf4a',
            fillOpacity: 0.1,
            weight: 3,
            opacity: 1.0,
            color: '#984ea3',
            dashArray: '4'
        };
    }

    var fagul = L.geoJson.ajax('assets/aps_plaiul_fagului.geojson', {
        style: style5,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip("Rezervația Științifică: <br>" + feature.properties.name, {
                className: 'feature-label',
                permanent: false,
                direction: 'center'
            });
        }
    });


    var fagul_legend = '<p><b>Plaiul Fagului</b></p>' +
        '<i style="background: #984ea3; opacity: 1.0"></i><p>Hotarul RS</p><br>';

    //////////////////////////////////////////////////////////////////////////
    // Scene 6: Prutul de Jos

    function style6(feature) {
        return {
            fillColor: '#4daf4a',
            fillOpacity: 0.1,
            weight: 3,
            opacity: 1.0,
            color: '#377eb8',
            dashArray: '4'
        };
    }

    var prutul = L.geoJson.ajax('assets/aps_prutul_jos.geojson', {
        style: style6,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip("Rezervația Științifică: <br>" + feature.properties.name, {
                className: 'feature-label',
                permanent: false,
                direction: 'center'
            });
        }
    });


    var prutul_legend = '<p><b>Prutul de Jos</b></p>' +
        '<i style="background: #377eb8; opacity: 1.0"></i><p>Hotarul RS</p><br>';

    //////////////////////////////////////////////////////////////////////////
    // Scene 7: Iagorlic

    function style7(feature) {
        return {
            fillColor: '#4daf4a',
            fillOpacity: 0.1,
            weight: 3,
            opacity: 1.0,
            color: '#e41a1c',
            dashArray: '4'
        };
    }


    var iagorlic = L.geoJson.ajax('assets/aps_iagorlic.geojson', {
        style: style7,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip("Rezervația Științifică: <br>" + feature.properties.name, {
                className: 'feature-label',
                permanent: false,
                direction: 'center'
            });
        }
    });


    var iagorlic_legend = '<p><b>Iagorlîc</b></p>' +
        '<i style="background: #e41a1c; opacity: 1.0"></i><p>Hotarul RS</p><br>';

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
        },

        OpenStreetMap_Mapnik: {
            layer: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        }

    };

    var scenes = {
        start: {
            lat: 47.10,
            lng: 28.50,
            zoom: 5,
            name: 'Început',
            layers: []
        },
        toate_rs: {
            lat: 47.00,
            lng: 27.00,
            zoom: 8,
            name: 'Toate RȘ',
            layers: [layers.toate_rs, layers.codrii, layers.domneasca, layers.fagul, layers.prutul, layers.iagorlic]
        },
        codrii: {
            lat: 47.07,
            lng: 28.30,
            zoom: 12,
            name: 'RȘ Codrii',
            layers: [layers.codrii]
        },
        domneasca: {
            lat: 47.61,
            lng: 27.22,
            zoom: 11,
            name: 'RȘ Pădurea Domnească',
            layers: [layers.domneasca]
        },
        fagul: {
            lat: 47.28,
            lng: 27.95,
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
            lat: 47.38,
            lng: 29.12,
            zoom: 13,
            name: 'RȘ Iagorlîc',
            layers: [layers.iagorlic]
        },
        sfarsit: {
            lat: 47.00,
            lng: 27.00,
            zoom: 7.5,
            name: 'Sfârșit'
        }
    };

    $('#storymap').storymap({
        scenes: scenes,
        baselayer: layers.cartodb_light,
        legend: true,
        credits: "",
        loader: true,
        scalebar: true,
        flyto: true,
        navwidget: false,
        navbar: false,
        mapinteraction: true,

        createMap: function () {
            var map = L.map($(".storymap-map")[0], {
                zoomControl: false,
                fadeAnimation: true,
                zoomAnimation: true,
                dragging: true,
                scrollWheelZoom: false,
                minZoom: 7,
                maxZoom: 13
            }).setView([47, 27], 7.5);

            new L.Control.GlobeMiniMap({
                marker: 'red',
                position: 'bottomright'
            }).addTo(map);

            return map;
        }
    });