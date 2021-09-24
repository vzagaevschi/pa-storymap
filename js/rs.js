    //////////////////////////////////////////////////////////////////////////
    // Scene 2: Total Population Choropleth
    // Set function for color ramp
    function setColor1(density) {
        //Tenary operation: condition ? valueIfTrue : valueIfFalse
        // condition ? value1 : value2
        return density > 564088 ? '#b30000' :
            density > 210916 ? '#e34a33' :
            density > 87455 ? '#fc8d59' :
            density > 37660 ? '#fdcc8a' :
            '#fef0d9';
    }

    function style1(feature) {
        return {
            fillColor: '#ffffff',
            fillOpacity: 0.1,
            weight: 2,
            opacity: 0.8,
            color: '#605f5f',
            dashArray: '4'
        };
    }

    var toate_rs = L.geoJson.ajax('assets/rm.geojson', {
        style: style1,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip(feature.properties.gid_0 + "<br> Denumirea: " + feature.properties
                .name_0, {
                    className: 'feature-label',
                    permanent: false,
                    direction: 'center'
                });
        }
    });


    var toate_rs_legend = '<p><b>Total Population</b></p>' +
        '<i style="background: #fef0d9; opacity: 0.5"></i><p><b>0 - 37,660</b></p>' +
        '<i style="background: #fdcc8a; opacity: 0.5"></i><p><b>37,661 - 87,455</b></p>' +
        '<i style="background: #fc8d59; opacity: 0.5"></i><p><b>87,456 - 210,916</b></p>' +
        '<i style="background: #e34a33; opacity: 0.5"></i><p><b>210,917 - 564,088</b></p>' +
        '<i style="background: #b30000; opacity: 0.5"></i><p><b>>564,088</b></p>';



    //////////////////////////////////////////////////////////////////////////
    // Scene 3: Rural Population Percentage

    // Set function for color ramp
    function setColor2(density) {
        //Tenary operation: condition ? valueIfTrue : valueIfFalse
        // condition ? value1 : value2
        return density > 100 ? '#b30000' :
            density > 75 ? '#e34a33' :
            density > 50 ? '#fc8d59' :
            density > 25 ? '#fdcc8a' :
            '#fef0d9';
    }


    function style2(feature) {
        return {
            fillColor: '#ffffff',
            fillOpacity: 0.1,
            weight: 2,
            opacity: 0.8,
            color: '#605f5f',
            dashArray: '4'
        };
    }

    var codrii = L.geoJson.ajax('assets/aps_codrii.geojson', {
        style: style2,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip("Rezervația Științifică: <br>" + feature.properties.name, {
                className: 'feature-label',
                permanent: false,
                direction: 'center'
            });
        }
    });





    var codrii_legend = '<p><b>Rural Population</b></p>' +
        '<i style="background: #fef0d9; opacity: 0.5"></i><p><b>0% - 25%</b></p>' +
        '<i style="background: #fdcc8a; opacity: 0.5"></i><p><b>25.1% - 50%</b></p>' +
        '<i style="background: #fc8d59; opacity: 0.5"></i><p><b>50.1% - 75%</b></p>' +
        '<i style="background: #e34a33; opacity: 0.5"></i><p><b>75.1% - 100%</b></p>';

    //////////////////////////////////////////////////////////////////////////
    // Scene 4: Net Migration

    // Set function for color ramp
    function setColor3(density) {
        //Tenary operation: condition ? valueIfTrue : valueIfFalse
        // condition ? value1 : value2
        return density > 12.91705 ? '#b30000' :
            density > 7.76944 ? '#e34a33' :
            density > 3.193155 ? '#fc8d59' :
            density > -2.927277 ? '#fdcc8a' :
            '#fef0d9';
    }

    // Set style function that sets fill color property equal to net migration
    function style3(feature) {
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


    var domneasca_legend = '<p><b>Net Migration</b></p>' +
        '<i style="background: #fef0d9; opacity: 0.5"></i><p><b>-7.18 - -2.93</b></p>' +
        '<i style="background: #fdcc8a; opacity: 0.5"></i><p><b>-2.92 - 3.19</b></p>' +
        '<i style="background: #fc8d59; opacity: 0.5"></i><p><b>3.20 - 7.77</b></p>' +
        '<i style="background: #e34a33; opacity: 0.5"></i><p><b>7.78 - 12.92</b></p>' +
        '<i style="background: #b30000; opacity: 0.5"></i><p><b>>12.93</b></p>';


    // Scene 5: Housing Cost Burden


    // Set function for color ramp
    function setColor4(density) {
        //Tenary operation: condition ? valueIfTrue : valueIfFalse
        // condition ? value1 : value2
        return density > 38.111159 ? '#b30000' :
            density > 34.546092 ? '#e34a33' :
            density > 31.156108 ? '#fc8d59' :
            density > 26.767134 ? '#fdcc8a' :
            '#fef0d9';
    }

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

    var fagul = L.geoJson.ajax('assets/aps_plaiul_fagului.geojson', {
        style: style4,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip("Rezervația Științifică: <br>" + feature.properties.name, {
                className: 'feature-label',
                permanent: false,
                direction: 'center'
            });
        }
    });


    var fagul_legend = '<p><b>Housing Cost Burden</b></p>' +
        '<i style="background: #fef0d9; opacity: 0.5"></i><p><b>23.02 - 26.77</b></p>' +
        '<i style="background: #fdcc8a; opacity: 0.5"></i><p><b>26.78 - 31.16</b></p>' +
        '<i style="background: #fc8d59; opacity: 0.5"></i><p><b>31.17 - 34.55</b></p>' +
        '<i style="background: #e34a33; opacity: 0.5"></i><p><b>34.56 - 38.11</b></p>' +
        '<i style="background: #b30000; opacity: 0.5"></i><p><b>>38.12</b></p>';

    // Scene 5: Housing Cost Burden


    // Set function for color ramp
    function setColor5(density) {
        //Tenary operation: condition ? valueIfTrue : valueIfFalse
        // condition ? value1 : value2
        return density > 38.111159 ? '#b30000' :
            density > 34.546092 ? '#e34a33' :
            density > 31.156108 ? '#fc8d59' :
            density > 26.767134 ? '#fdcc8a' :
            '#fef0d9';
    }

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

    var prutul = L.geoJson.ajax('assets/aps_prutul_jos.geojson', {
        style: style5,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip("Rezervația Științifică: <br>" + feature.properties.name, {
                className: 'feature-label',
                permanent: false,
                direction: 'center'
            });
        }
    });


    var prutul_legend = '<p><b>Housing Cost Burden</b></p>' +
        '<i style="background: #fef0d9; opacity: 0.5"></i><p><b>23.02 - 26.77</b></p>' +
        '<i style="background: #fdcc8a; opacity: 0.5"></i><p><b>26.78 - 31.16</b></p>' +
        '<i style="background: #fc8d59; opacity: 0.5"></i><p><b>31.17 - 34.55</b></p>' +
        '<i style="background: #e34a33; opacity: 0.5"></i><p><b>34.56 - 38.11</b></p>' +
        '<i style="background: #b30000; opacity: 0.5"></i><p><b>>38.12</b></p>';

    // Scene 5: Housing Cost Burden


    // Set function for color ramp
    function setColor6(density) {
        //Tenary operation: condition ? valueIfTrue : valueIfFalse
        // condition ? value1 : value2
        return density > 38.111159 ? '#b30000' :
            density > 34.546092 ? '#e34a33' :
            density > 31.156108 ? '#fc8d59' :
            density > 26.767134 ? '#fdcc8a' :
            '#fef0d9';
    }

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

    var iagorlic = L.geoJson.ajax('assets/aps_iagorlic.geojson', {
        style: style6,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip("Rezervația Științifică: <br>" + feature.properties.name, {
                className: 'feature-label',
                permanent: false,
                direction: 'center'
            });
        }
    });


    var iagorlic_legend = '<p><b>Housing Cost Burden</b></p>' +
        '<i style="background: #fef0d9; opacity: 0.5"></i><p><b>23.02 - 26.77</b></p>' +
        '<i style="background: #fdcc8a; opacity: 0.5"></i><p><b>26.78 - 31.16</b></p>' +
        '<i style="background: #fc8d59; opacity: 0.5"></i><p><b>31.17 - 34.55</b></p>' +
        '<i style="background: #e34a33; opacity: 0.5"></i><p><b>34.56 - 38.11</b></p>' +
        '<i style="background: #b30000; opacity: 0.5"></i><p><b>>38.12</b></p>';

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
            layers: [layers.toate_rs]
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
                scrollWheelZoom: false,
                fadeAnimation: true,
                zoomAnimation: true
            }).setView([47, 27], 7.5);

            //add an miniglobe
            new L.Control.GlobeMiniMap({
                marker: 'red',
                position: 'bottomright'
            }).addTo(map);

            return map;
        }
    });
