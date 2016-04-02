var sensationApp = angular.module('sensationApp');

// Home Data: Home page configuration
sensationApp.factory('Data', function(){
    var data = {};
    
    data.items = [
        { 
            title: '',
            icon: '',
            image: 'img/akhbar.png',
            page: 'news.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/mahsolat.png',
            page: 'products.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/darbare.png',
            page: 'about.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/takhfifat.png',
            page: 'takhfifs.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/khadamat.png',
            page: 'Services.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/gallery.png',
            page: 'gallery.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/mofid.png',
            page: 'Mofids.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/gavahi.png',
            page: 'Certs.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/ertebat.png',
            page: 'Ertebat.html'
        },
       
    ]; 
    
    return data;
});

// Products Data: Product categories
sensationApp.factory('DataProducts', function(){
    var data = {};
    
    data.items = [
        { 
            title: '',
            icon: '',
            image: 'img/marmar.png',
            page: 'Marmar.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/marmarit.png',
            page: 'Marmarit.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/travertine.png',
            page: 'Trav.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/tazeeni.png',
            page: 'Tazini.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/chini.png',
            page: 'Chini.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/granit.png',
            page: 'Granit.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/antik.png',
            page: 'Antique.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/varedati.png',
            page: 'Varedati.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/giotine.png',
            page: 'Giotin.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/malon.png',
            page: 'Malon.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/limestone.png',
            page: 'Limestone.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/travenix.png',
            page: 'Travonix.html'
        },
       
    ]; 
    
    return data;
});


// Services Data: Services
sensationApp.factory('DataServices', function(){
    var data = {};
    
    data.items = [
        { 
            title: '',
            icon: '',
            image: 'img/shomine.png',
            page: 'Shomine.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/Boreshkari.png',
            page: 'Sotoon.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/Sayer.png',
            page: 'Sayer.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/Abnama.png',
            page: 'Abnama.html'
        }
    ]; 
    
    return data;
});

// Menu Data: Menu configuration
sensationApp.factory('MenuData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Home',
            icon: 'home',
            page: 'home.html'
        },
        { 
            title: 'My Favorites',
            icon: 'square-o',
            page: 'favorites.html'
        },
        { 
            title: 'About Us',
            icon: 'fa-copy',
            page: 'about.html'
        }
        ,
        { 
            title: 'Contact us',
            icon: 'th',
            page: 'contact.html'
        }/*,
        { 
            title: 'Login',
            icon: 'sign-in',
            page: 'login.html'
        }*/

    ]; 
    
    return data;
});

// Map Data: Map configuration
sensationApp.factory('MapData', function(){
    var data = {};
    
    data.map = {
        zoom: 12,
        center: {
            latitude: 40.74,
            longitude: -74.18
        },
        markers: [
        {
            id: 1,
            icon: 'img/blue_marker.png',
            latitude: 40.71,
            longitude: -74.21,
            title: 'This is our main store'
        }, 
        {
            id: 2,
            latitude: 40.72,
            longitude: -74.20,
            title: 'This is our second store'
        },
        {
            id: 3,
            latitude: 40.73,
            longitude: -74.19,
            title: 'This is our third store'
        },
        {
            id: 4,
            latitude: 40.74,
            longitude: -74.18,
            title: 'This is our fourth store'
        },
        {
            id: 5,
            latitude: 40.75,
            longitude: -74.17,
            title: 'This is our fifth store'
        },
        {
            id: 6,
            latitude: 40.76,
            longitude: -74.16,
            title: 'This is our sixth store'
        },
        {
            id: 7,
            icon: 'img/plane.png',
            latitude: 40.77,
            longitude: -74.15,
            title: 'Airport'
        }]
    };

    return data;
});

// Gallery Data: Gallery configuration
sensationApp.factory('GalleryData', function(){
    var data = {};
    
    data.items = [
        { 
            label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            src: 'img/gallery-1.jpg',
            location: 'New York, June 2014'
        },
        { 
            label: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            src: 'img/gallery-2.jpg',
            location: 'Athens, August 2013'
        },
        { 
            label: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            src: 'img/gallery-3.jpg',
            location: 'Tokyo, May 2013'
        }
    ]; 
    
    return data;
});

// Products Data: JSON Products configuration
sensationApp.factory('ProductsData', function(){
    
    var data = { url: 'json/products.json', letterLimit: 100 };
    
    return data;
});

// News Data: JSON News configuration
sensationApp.factory('NewsData', function(){
    
    var data = { url: 'json/news.json', letterLimit: 100 };
    
    return data;
});

// Posts Data: JSON Wordpress Posts configuration
sensationApp.factory('PostsData', function(){
    
    /* (For DEMO purposes) Local JSON data */
    var data = { url: 'json/wordpress.json' };
    
    /* Set your URL as you can see in the following example */
    // var data = { url: 'YourWordpressURL/?json=get_recent_posts' };
    
    /* With user-friendly permalinks configured */
    // var data = { url: 'YourWordpressURL/api/get_recent_posts' };
    
    return data;
});

// Server Posts Data (Server side pagination with AngularJS)
sensationApp.factory('ServerPostsData', function(){
    
    /* (For DEMO purposes) Local JSON data */
    var data = { url: 'json/serverposts&' };
    
    /* Set your URL as you can see in the following example */
    /* NOTE: In case of the default permalinks, you should add '&' at the end of the url */
    // var data = { url: 'YourWordpressURL/?json=get_recent_posts&' };
    
    /* With user-friendly permalinks configured */
    /* NOTE: In case of the user-friendly permalinks, you should add '?' at the end of the url */
    // var data = { url: 'YourWordpressURL/api/get_recent_posts?' };
    
    return data;
});

// Categories Data: JSON Categories configuration
sensationApp.factory('CategoriesData', function(){
    
    /* (For DEMO purposes) Local JSON data */
    var data = { url: 'json/categories.json',
                 category_url: 'json/category' };
    
    /* Set your URL as you can see in the following example */
    // var data = { url: 'YourWordpressURL/?json=get_category_index',
    //             category_url: 'YourWordpressURL/?json=get_category_posts&' };
    
    /* With user-friendly permalinks configured */
    // var data = { url: 'YourWordpressURL/api/get_category_index',
    //             category_url: 'YourWordpressURL/api/get_category_posts?' };
    
    return data;
});

// About Data: JSON News configuration
sensationApp.factory('AboutData', function(){
    
    var data = { url: 'json/about.json' };
    
    return data;
});

// NVD3Data Data: JNVD3Data configuration
sensationApp.factory('NVD3Data', function(){
    
    var data = {};
    
    data.options = {
            chart: {
                type: 'discreteBarChart',
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 65
                },
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 30
                }
            }
        };

    data.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "A" ,
                        "value" : -29.765957771107
                    } ,
                    {
                        "label" : "B" ,
                        "value" : 0
                    } ,
                    {
                        "label" : "C" ,
                        "value" : 32.807804682612
                    } ,
                    {
                        "label" : "D" ,
                        "value" : 196.45946739256
                    } ,
                    {
                        "label" : "E" ,
                        "value" : 0.19434030906893
                    } ,
                    {
                        "label" : "F" ,
                        "value" : -98.079782601442
                    } ,
                    {
                        "label" : "G" ,
                        "value" : -13.925743130903
                    } ,
                    {
                        "label" : "H" ,
                        "value" : -5.1387322875705
                    }
                ]
            }
        ];
    
    return data;
});

// Plugins Data: Mobile Plugins configuration
sensationApp.factory('PluginsData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Device Plugin',
            icon: 'mobile',
            page: 'device.html'
        },
        { 
            title: 'Notifications Plugin',
            icon: 'exclamation',
            page: 'notifications.html'
        },
        { 
            title: 'Geolocation Plugin',
            icon: 'location-arrow',
            page: 'geolocation.html'
        },
        { 
            title: 'Barcode Scanner',
            icon: 'barcode',
            page: 'barcodescanner.html'
        }
    ]; 
    
    return data;
});

// Settings Data: Settings configuration
sensationApp.factory('SettingsData', function(){
    var data = {};
    
    data.items = {
        options: [
        {
           name: 'First Setting',
           value: true
        }, 
        {
           name: 'Second Setting',
           value: false
        }, 
        {
           name: 'Third Setting',
           value: false
        }, 
        {
           name: 'Fourth Setting',
           value: false
        }, 
        {
           name: 'Fifth Setting',
           value: false
        }],
        range:30
    };

    return data;
});

// RSS Data: Feeds configuration
sensationApp.factory('FeedData', function(){
    
    var data = { url: 'http://radioogle.ir/feed' };
    
    return data;
});

// RSS Data: Antique Feeds configuration
sensationApp.factory('FeedData_antique', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=8' };
    
    return data;
});

// RSS Data: Travertan Feeds configuration
sensationApp.factory('FeedData_trav', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=7' };
    
    return data;
});

// RSS Data: Travonix Feeds configuration
sensationApp.factory('FeedData_travonix', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=9' };
    
    return data;
});

// RSS Data: Tazini Feeds configuration
sensationApp.factory('FeedData_tazini', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=10' };
    
    return data;
});

// RSS Data: Chini Feeds configuration
sensationApp.factory('FeedData_chini', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=11' };
    
    return data;
});

// RSS Data: Granit Feeds configuration
sensationApp.factory('FeedData_granit', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=12' };
    
    return data;
});

// RSS Data: Giotin Feeds configuration
sensationApp.factory('FeedData_giotin', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=13' };
    
    return data;
});

// RSS Data: Limestone Feeds configuration
sensationApp.factory('FeedData_limestone', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=14' };
    
    return data;
});

// RSS Data: Malon Feeds configuration
sensationApp.factory('FeedData_malon', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=15' };
    
    return data;
});

// RSS Data: Marmar Feeds configuration
sensationApp.factory('FeedData_marmar', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=16' };
    
    return data;
});

// RSS Data: Marmarit Feeds configuration
sensationApp.factory('FeedData_marmarit', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=17' };
    
    return data;
});

// RSS Data: Varedati Feeds configuration
sensationApp.factory('FeedData_varedati', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=18' };
    
    return data;
});

// RSS Data: Sotoon Feeds configuration
sensationApp.factory('FeedData_sotoon', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=20' };
    
    return data;
});

// RSS Data: Shomine Feeds configuration
sensationApp.factory('FeedData_shomine', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=21' };
    
    return data;
});

// RSS Data: Abnama Feeds configuration
sensationApp.factory('FeedData_abnama', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=22' };
    
    return data;
});

// RSS Data: Sayer Feeds configuration
sensationApp.factory('FeedData_sayer', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=23' };
    
    return data;
});

// RSS Data: Akhbar Feeds configuration
sensationApp.factory('FeedData_akhbar', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=19' };
    
    return data;
});

// RSS Data: Darbare Feeds configuration
sensationApp.factory('FeedData_darbare', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=24' };
    
    return data;
});

// RSS Data: Takhfif Feeds configuration
sensationApp.factory('FeedData_takhfif', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=26' };
    
    return data;
});

// RSS Data: Ertebat Feeds configuration
sensationApp.factory('FeedData_ertebat', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=27' };
    
    return data;
});

// RSS Data: Gavahi Feeds configuration
sensationApp.factory('FeedData_gavahi', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=18' };
    
    return data;
});

// RSS Data: Mofid Feeds configuration
sensationApp.factory('FeedData_mofid', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=5' };
    
    return data;
});

// RSS Data: Gallery Feeds configuration
sensationApp.factory('FeedData_gallery', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=25' };
    
    return data;
});

// RSS Data: Certs Feeds configuration
sensationApp.factory('FeedData_certs', function(){
    
    var data = { url: 'http://mehregansang.com/feed/?cat=28' };
    
    return data;
});

// FEED Data Structure: JSON FEED Data Structure configuration
sensationApp.factory('FeedPluginData', function(){
    
    var data = { url: 'json/structure.json' };
    
    return data;
});