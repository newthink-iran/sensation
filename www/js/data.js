var sensationApp = angular.module('sensationApp');

// Home Data: Home page configuration
sensationApp.factory('Data', function(){
    var data = {};
    
    data.items = [
        { 
            title: '',
            icon: '',
            image: 'img/10.png',
            page: ''
        },
        { 
            title: '',
            icon: '',
            image: 'img/2.png',
            page: 'news.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/1.png',
            page: 'Ghavanins.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/3.png',
            page: 'Moadians.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/4.png',
            page: 'Cities.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/5.png',
            page: 'Electronics.html'
        },
        { 
            title: '',
            icon: '',
            image: 'img/6.png',
            page: 'Links.html'
        },
        
    ]; 
    
    return data;
});

// ghavanin menu
sensationApp.factory('DataGhavanin', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'پایگاه قوانین و مقررات مالیاتی',
            icon: '',
            image: 'img/ahdaf.png',
            page: 'Moadians.html'
        },
        { 
            title: 'سامانه قوانین و مقررات',
            icon: '',
            image: 'img/news.jpg',
            page: 'Trav.html'
        },
        { 
            title: 'قانون مالیات های مستقیم',
            icon: '',
            image: 'img/ahdaf.png',
            page: 'Marmar.html'
        },
        { 
            title: 'قانون مالیات بر ارزش افزوده',
            icon: '',
            image: 'img/ahdaf.png',
            page: 'Granit.html'
        },
        { 
            title: 'ارزش معاملاتی و اجاره املاک',
            icon: '',
            image: 'img/ahdaf.png',
            page: 'Chini.html'
        },
    ]; 
    
    return data;
});


// moadian menu
sensationApp.factory('DataMoadian', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'آموزش مودیان',
            icon: '',
            image: 'img/Boreshkari.png',
            page: 'Sotoon.html'
        },
        { 
            title: 'طرح جامع مالیاتی',
            icon: '',
            image: 'img/Boreshkari.png',
            page: 'Sotoon.html'
        },
        { 
            title: 'لیست دفاتر پیشخوان',
            icon: '',
            image: 'img/Boreshkari.png',
            page: 'Sotoon.html'
        },
        { 
            title: 'پرسش های متداول',
            icon: '',
            image: 'img/shomine.png',
            page: 'Shomine.html'
        },
        { 
            title: 'ادارات شهرستان ها',
            icon: '',
            image: 'img/Sayer.png',
            page: 'Sayer.html'
        },
        { 
            title: 'تماس با ما',
            icon: '',
            image: 'img/Sayer.png',
            page: 'Sayer.html'
        },
    ]; 
    
    return data;
});


// electronics menu
sensationApp.factory('DataElectronics', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'ثبت نام و صدور شماره اقتصادی',
            icon: '',
            image: 'img/Boreshkari.png',
            page: 'Sotoon.html'
        },
        { 
            title: 'اظهارنامه مالیاتی الکترونیکی',
            icon: '',
            image: 'img/shomine.png',
            page: 'Shomine.html'
        },
        { 
            title: 'صورت معاملات فصلی',
            icon: '',
            image: 'img/Sayer.png',
            page: 'Sayer.html'
        },
        { 
            title: 'صدور قبض مالیات و پرداخت الکترونیک',
            icon: '',
            image: 'img/Sayer.png',
            page: 'Sayer.html'
        },
         { 
            title: 'فهرست مالیات حقوق الکترونیکی',
            icon: '',
            image: 'img/Sayer.png',
            page: 'Sayer.html'
        },
    ]; 
    
    return data;
});

// Cities menu
sensationApp.factory('FeedData_akhbar_cities', function(){
    var data = {};
    
    data.items = [
        { title: 'آران و بیدگل'},
        { title: 'اردستان'},
        { title: 'اصفهان'},
        { title: 'برخوار'},
        { title: 'تیران و کرون'},
        { title: 'چادگان'},
        { title: 'خوانسار'},
        { title: 'خور و بیابانک'},
        { title: 'خمینی شهر'},
        { title: 'دهاقان'},
        { title: 'سمیرم'},
        { title: 'شاهین شهر و میمه'},
        { title: 'شهرضا'},
        { title: 'فریدن'},
        { title: 'فریدونشهر'},
        { title: 'فلاورجان'},
        { title: 'کاشان'},
        { title: 'گلپایگان'},
        { title: 'لنجان'},
        { title: 'مبارکه'},
        { title: 'نایین'},
        { title: 'نجف آباد'},
        { title: 'نطنز'},
    ];
    data.url = 'http://isf-maliat.ir/feed/?cat=21';
    
    return data;
});



// Menu Data: Menu configuration
sensationApp.factory('MenuData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'خانه',
            icon: 'home',
            page: 'home.html'
        },
        { 
            title: 'ویژه مودیان',
            icon: 'chevron-left',
            page: 'Moadians.html'
        },
        { 
            title: 'قوانین مالیاتی',
            icon: 'chevron-left',
            page: 'Ghavanins.html'
        },
        { 
            title: 'خدمات الکترونیک',
            icon: 'chevron-left',
            page: 'Electronics.html'
        },
        { 
            title: 'کپی رایت',
            icon: 'fa-copy',
            page: 'copyright.html'
        }/*,
        { 
            title: 'Modal View',
            icon: 'square-o',
            page: 'modal.html'
        },
        { 
            title: 'Grid',
            icon: 'th',
            page: 'grid.html'
        },
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
    
    var data = { url: 'http://www.huffingtonpost.com/feeds/news.xml' };
    
    return data;
});


// RSS Data: Akhbar Feeds configuration
sensationApp.factory('FeedData_akhbar', function(){
    
    var data = { url: 'http://isf-maliat.ir/feed/?cat=15' };
    
    return data;
});

// RSS Data: Akhbar Tasviri Feeds configuration
sensationApp.factory('FeedData_akhbar_tasv', function(){
    
    var data = { url: 'http://isf-maliat.ir/feed/?cat=4' };
    
    return data;
});

// RSS Data: Akhbar Aza Feeds configuration
sensationApp.factory('FeedData_akhbar_aza', function(){
    
    var data = { url: 'http://salmandfarzanegan.com/feed/?cat=8' };
    
    return data;
});

// RSS Data: Akhbar Aza Feeds configuration
sensationApp.factory('FeedData_akhbar_arts', function(){
    
    var data = { url: 'http://salmandfarzanegan.com/feed/?cat=9' };
    
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