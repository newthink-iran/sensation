/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        ons.setDefaultDeviceBackButtonListener(function() {
            /*if (navigator.notification.confirm("Are you sure to close the app?", 
                function(index) {
                    if (index == 1) { // OK button*/
                        navigator.app.exitApp(); // Close the app
                    /*}
                }
            ));*/
			//window.plugins.sim.getSimInfo(function(result){ alert(result);}, function(error){ alert(error);});
        });

        // Open any external link with InAppBrowser Plugin
        $(document).on('click', 'a[href^=http], a[href^=https]', function(e){

            e.preventDefault();
            var $this = $(this); 
            var target = $this.data('inAppBrowser') || '_blank';

            window.open($this.attr('href'), target);

        });
        
        // Initialize Push Notifications
        // Uncomment the following initialization when you have made the appropriate configuration for iOS - http://goo.gl/YKQL8k and for Android - http://goo.gl/SPGWDJ
        app.initPushwoosh();
        console.log("salam");
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    // Register device for Push Notifications
    initPushwoosh: function() {
        var pushNotification = window.plugins.pushNotification;

		if(device.platform == "Android") {
			registerPushwooshAndroid();
		}
        if (device.platform == "iPhone" || device.platform == "iOS") {
            registerPushwooshIOS();
        }
    }
    
};

(function() {
    var app = angular.module('sensationApp', ['onsen.directives', 'ngTouch', 'ngSanitize', 'angular-carousel', 'google-maps'.ns(), 'appLocalStorage', 'LocalStorageModule', 'ui.map', 'ui.event', 'nvd3']);
    
    app.config(['$httpProvider', function($httpProvider) {

        $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.cache = false;

    }]);
    
    // Home Controller
    app.controller('HomeController', function($scope, Data) {
        
        $scope.items = Data.items;

        $scope.showDetail = function(index){
            var selectedItem = $scope.items[index];
            Data.selectedItem = selectedItem;
            
            switch(index){
                case 0:
                    window.open("http://isf-maliat.ir/%D9%87%D9%85%D8%A7%DB%8C%D8%B4-%D9%87%D8%A7/",'_system');
                    break;
                case 6:
                    navigator.app.exitApp();
                    break;
                default:
                    $scope.appNavigator.pushPage(selectedItem.page, {title: selectedItem.title, animation: 'slide'});
                    break;
            }
   
            
        }
        
        /*$scope.showCopyright = function(){
            var selectedItem = $scope.items[10];
            Data.selectedItem = selectedItem;
            $scope.appNavigator.pushPage(selectedItem.page, {title: selectedItem.title, animation: 'slide'});
        }*/
        
    });
    
    // Moadian Category Controller
    app.controller('MoadianCategoriesController', function($scope, DataMoadian) {
        
        $scope.items = DataMoadian.items;

        $scope.showDetail = function(index){
             var selectedItem = $scope.items[index];
            DataMoadian.selectedItem = selectedItem;
            
            switch(index){
                case 0: // amozesh
                    $scope.appNavigator.pushPage(selectedItem.page, {title: selectedItem.title, animation: 'slide'});
                    break;
                case 1: // tarhe maliati
                   $scope.appNavigator.pushPage(selectedItem.page, {title: selectedItem.title, animation: 'slide'});
                    break;
                case 2: // dafater pishkhan
                    window.open("http://isf-maliat.ir/%D9%84%DB%8C%D8%B3%D8%AA-%D8%AF%D9%81%D8%A7%D8%AA%D8%B1-%D9%BE%DB%8C%D8%B4%D8%AE%D9%88%D8%A7%D9%86/","_system");
                    break;
                case 3: // porsesh matadavel
                    window.open("http://isf-maliat.ir/%D8%AB%D8%A8%D8%AA-%D9%86%D8%A7%D9%85-%D8%A7%D8%B4%D8%AE%D8%A7%D8%B5-%D8%AD%D9%82%D9%8A%D9%82%DB%8C-%D9%88-%D8%AD%D9%82%D9%88%D9%82%DB%8C/",'_system');
                    break;
                case 4: // edarat shahrestan ha
                    window.open("http://isf-maliat.ir/%D8%A7%D8%AF%D8%A7%D8%B1%D8%A7%D8%AA-%D8%B4%D9%87%D8%B1%D8%B3%D8%AA%D8%A7%D9%86-%D9%87%D8%A7/","_system");
                    break;
                case 5: // tamas ba ma
                    $scope.appNavigator.pushPage(selectedItem.page, {title: selectedItem.title, animation: 'slide'});
                    break;
            }

        }
        
    });
    
    // Cities Category Controller
    app.controller('CitiesCategoriesController', function($scope, DataCities) {
        
        $scope.items = DataCities.items;

        $scope.showDetail = function(index){
            switch(index){
                case 0: // amozesh
                    window.open("http://isf-maliat.ir/category/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%85%D9%88%D8%AF%DB%8C%D8%A7%D9%86","_system");
                    break;
                case 1: // tarhe maliati
                    window.open("http://isf-maliat.ir/%D9%86%DA%AF%D8%A7%D9%87%DB%8C-%D8%B7%D8%B1%D8%AD-%D8%AC%D8%A7%D9%85%D8%B9-%D9%85%D8%A7%D9%84%DB%8C%D8%A7%D8%AA%DB%8C/","_system");
                    break;
                case 2: // dafater pishkhan
                    window.open("http://isf-maliat.ir/%D9%84%DB%8C%D8%B3%D8%AA-%D8%AF%D9%81%D8%A7%D8%AA%D8%B1-%D9%BE%DB%8C%D8%B4%D8%AE%D9%88%D8%A7%D9%86/","_system");
                    break;
                case 3: // porsesh matadavel
                    window.open("http://isf-maliat.ir/%D8%AB%D8%A8%D8%AA-%D9%86%D8%A7%D9%85-%D8%A7%D8%B4%D8%AE%D8%A7%D8%B5-%D8%AD%D9%82%D9%8A%D9%82%DB%8C-%D9%88-%D8%AD%D9%82%D9%88%D9%82%DB%8C/",'_system');
                    break;
                case 4: // edarat shahrestan ha
                    window.open("http://isf-maliat.ir/%D8%A7%D8%AF%D8%A7%D8%B1%D8%A7%D8%AA-%D8%B4%D9%87%D8%B1%D8%B3%D8%AA%D8%A7%D9%86-%D9%87%D8%A7/","_system");
                    break;
                case 5: // tamas ba ma
                    window.open("http://isf-maliat.ir/%D8%AA%D9%85%D8%A7%D8%B3-%D8%A8%D8%A7-%D9%85%D8%A7/","_system");
                    break;
            }

        }
        
    });
    
    
    // Ghavanin Eslahi Category Controller
    app.controller('GhavaninEslahiController', function($scope, DataEslahi) {
        
        $scope.items = DataEslahi.items;

        $scope.showDetail = function(index){
            var selectedItem = $scope.items[index];
            DataEslahi.selectedItem = selectedItem;
            $scope.appNavigator.pushPage(selectedItem.page, {title: selectedItem.title, animation: 'slide'});
        }
        
    });
    
    // Links Category Controller
    app.controller('LinksController', function($scope, DataLinks) {
        
        $scope.items = DataLinks.items;

        $scope.showDetail = function(index){
            var selectedItem = $scope.items[index];
            window.open(selectedItem.page,"_system");

        }
        
    });
    
    // Ghavanin Category Controller
    app.controller('GhavaninCategoriesController', function($scope, DataGhavanin) {
        
        $scope.items = DataGhavanin.items;

        $scope.showDetail = function(index){
            var selectedItem = $scope.items[index];
            DataGhavanin.selectedItem = selectedItem;
            
            switch(index){
                case 0: // paygah ghavanin
                    window.open("http://www.intamedia.ir/Laws/ShowSearch.aspx","_system");
                    break;
                case 1: // samane ghavanin
                    window.open("http://e4.tax.gov.ir/Pages/action/show/2","_system");
                    break;       
                case 2: // maliat mostaghim 
                    $scope.appNavigator.pushPage(selectedItem.page, {title: selectedItem.title, animation: 'slide'});
                    break;
                case 3: // arzesh afzode
                    window.open("http://isf-maliat.ir/%D9%82%D8%A7%D9%86%D9%88%D9%86-%D9%85%D8%A7%D9%84%D9%8A%D8%A7%D8%AA-%D8%A8%D8%B1-%D8%A7%D8%B1%D8%B2%D8%B4-%D8%A7%D9%81%D8%B2%D9%88%D8%AF%D9%87/","_system")
                    break;
                case 4: // arzesh moamelati
                    window.open("http://isf-maliat.ir/%D8%A7%D8%B1%D8%B2%D8%B4-%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A7%D8%AA%DB%8C/","_system")
                    break;
                    
            }

        }
        
    });
    
    // Electronics Category Controller
    app.controller('ElectronicCategoriesController', function($scope, DataElectronics) {
        
        $scope.items = DataElectronics.items;

        $scope.showDetail = function(index){
            switch(index){
                case 0: // sabte nam
                    window.open("http://e4.tax.gov.ir/Pages/action/show/2","_system");
                    break;
                case 1: // ezhar name
                    window.open("http://e3.tax.gov.ir/Pages/action/show/4","_system")
                    break;
                case 2: // fasli
                    window.open("http://e4.tax.gov.ir/Pages/action/show/8",'_system');
                    break;
                case 3: // ghabz maliat
                    window.open("http://e3.tax.gov.ir/Pages/action/show/9","_system")
                    break;
                case 4: // fehrest
                    window.open("http://e4.tax.gov.ir/Pages/action/show/16","_system")
                    break;
                    
            }

        }
        
    });
    
    // Home Services Controller
    app.controller('ServicesController', function($scope, DataServices) {
        
        $scope.items = DataServices.items;

        $scope.showDetail = function(index){
            var selectedItem = $scope.items[index];
            DataServices.selectedItem = selectedItem;
            $scope.appNavigator.pushPage(selectedItem.page, {title: selectedItem.title, animation: 'slide'});
        }
        
    });
    
    // Menu Controller
    app.controller('MenuController', function($scope, MenuData) {
        
        $scope.items = MenuData.items;

        $scope.showDetail = function(index){
            var selectedItem = $scope.items[index];
            MenuData.selectedItem = selectedItem;
            $scope.menu.setMainPage(selectedItem.page, {closeMenu: true})
            
        }
        
    });
    
    // Plugins Controller
    app.controller('PluginsController', function($scope, PluginsData) {
        $scope.items = PluginsData.items;
            
        $scope.showDetail = function(index){
            var selectedItem = $scope.items[index];
            PluginsData.selectedItem = selectedItem;
            $scope.appNavigator.pushPage('plugins/' + selectedItem.page, {title: selectedItem.title, animation: 'slide'});

        }
        
    });
    
    // Parameters Controller
    app.controller('ParametersController', function($scope) {
        var page = $scope.appNavigator.getCurrentPage();
        $scope.param1 = page.options.param1;
    });
    
    // Map Controller
    app.controller('MapController', function($scope, MapData) {
        
        $scope.windowOptions = false;

        $scope.onClick = function () {
        this.windowOptions = !this.windowOptions;
        };

        $scope.closeClick = function () {
        this.windowOptions = false;
        };
        
        $scope.map = MapData.map;
        

        
    });
    
    // Contact Controller
    app.controller('ContactController', function($scope) {

        
        $scope.submitForm = function() {
            
            window.plugin.email.open({
                to:      ['username@company.com'],
                cc:      ['username1@company.com'],
                bcc:     ['username2@company.com'],
                subject: $scope.subject,
                body:    $scope.message
            });

        };

    });
    
    // News Controller
    app.controller('NewsController', function($scope, $http, NewsData) {
        
        $scope.news = [];
        
        var getData = function ($done) {
        
            $http({method: 'GET', url: NewsData.url}).
            success(function(data, status, headers, config) {
                
                if ($done) { $done(); }
                
                $scope.news = data.result;
                $scope.letterLimit = NewsData.letterLimit;
                
            }).
            error(function(data, status, headers, config) {
                
                if ($done) { $done(); }

            });
        
        }
            
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };
        
        $scope.showDetail = function(index) {
        var selectedItem = $scope.news[index];
        NewsData.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('new.html', selectedItem);
        }
        
        // getNews() function()
        $scope.getNews = function() {
            // Filter News by $scope.search
            return $scope.news.filter(function(item) {
                
                // Filter News by Title
                var itemDoesMatch = !$scope.search ||
                item.title.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;
                
                // Filter News by Title or Body
                //var itemDoesMatch = !$scope.search ||
                //item.title.toLowerCase().indexOf($scope.search.toLowerCase()) > -1 || 
                //item.body.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;
                
                return itemDoesMatch;
            });
        };

        // Search Detail function()
        $scope.showSearchDetail = function(index) {
        var items = $scope.getNews();
        var selectedItem = items[index];
        NewsData.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('new.html', selectedItem);
        }
        
    });
    
    // New Controller
    app.controller('NewController', function($scope, NewsData) {
        $scope.item = NewsData.selectedItem;
     });
    
    // Products Controller
    app.controller('ProductsController', function($scope, $http, ProductsData) {
        
        var getData = function ($done) {
        
            $http({method: 'GET', url: ProductsData.url}).
            success(function(data, status, headers, config) {
                
                if ($done) { $done(); }
                
                $scope.products = data.result;
                $scope.letterLimit = ProductsData.letterLimit;
                
                
            }).
            error(function(data, status, headers, config) {
                
                if ($done) { $done(); }

            });
            
        }
        
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };
        
        $scope.showDetail = function(index) {
        var selectedItem = $scope.products[index];
        ProductsData.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('product.html', selectedItem);
        }
        
    });

    // Product Controller
    app.controller('ProductController', function($scope, ProductsData) {
        $scope.item = ProductsData.selectedItem;
     });
    
    // Posts Controller
    app.controller('PostsController', function($scope, $http, PostsData) {
        
        $('.loading').show();
        
        var getData = function ($done) {
        
            $http({method: 'GET', url: PostsData.url}).
            success(function(data, status, headers, config) {
                $scope.posts = data.posts;

                $('.loading').hide();
                if ($done) { $done(); }

                if ($scope.posts.length < 1)
                {
                    $scope.msg = "Nothing found.";
                }else{
                    $scope.msg = undefined;
                }

                var page = 1;
                // Define the number of the posts in the page
                var pageSize = 3;

                $scope.paginationLimit = function(data) {
                return pageSize * page;
                };

                $scope.hasMoreItems = function() {
                return page < ($scope.posts.length / pageSize);
                };

                $scope.showMoreItems = function() {
                page = page + 1;       
                }; 

            }).
            error(function(data, status, headers, config) {
            $('.loading').hide();
            $scope.msg = 'An error occured:' + status;
            if ($done) { $done(); }
            });
        
        }
            
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };
        
        $scope.showDetail = function(index) {
        var selectedItem = $scope.posts[index];
        PostsData.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('post.html', selectedItem);
        }
        
    });
    
    // Post Controller
    app.controller('PostController', function($scope, PostsData, $sce) {
        $scope.item = PostsData.selectedItem;

        $scope.content = $sce.trustAsHtml($scope.item.content);

        $scope.loadURL = function (url) {
            //target: The target in which to load the URL, an optional parameter that defaults to _self. (String)
            //_self: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
            //_blank: Opens in the InAppBrowser.
            //_system: Opens in the system's web browser.
            window.open(url,'_blank');
        }

        $scope.sharePost = function () {

            var subject = $scope.item.title;
            var message = $scope.item.content;
            message = message.replace(/(<([^>]+)>)/ig,"");

            var link = $scope.item.url;

            //Documentation: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
            //window.plugins.socialsharing.share('Message', 'Subject', 'Image', 'Link');
            window.plugins.socialsharing.share(message, subject, null, link);
        }

     });
    
    // Server Posts Controller (Server side pagination with AngularJS)
    app.controller('ServerPostsController', function($scope, $http, $filter, ServerPostsData) {
        
        $('.loading').show();
        
        var getData = function ($done) {
            $scope.page = 1;
            $scope.more = false;
            $scope.status_bar = "";
            $scope.posts = [];
            $scope.loadData($done);
        }
        
        $scope.loadData = function ($done) {
            
            $http({method: 'GET', url: ServerPostsData.url + 'page=' + $scope.page}).
            success(function(data, status, headers, config) {
                
                $('.loading').hide();
                if ($done) { $done(); }
                
                $scope.more = data.pages !== $scope.page;
                $scope.posts = $scope.posts.concat(data.posts);
                $scope.status_bar = "Showing " + ($scope.posts.length === 0 ? "0" : "1") + " to " + $filter('number')($scope.posts.length) + " of " + $filter('number')(data.count_total) + " entries";

            }).
            error(function(data, status, headers, config) {
            $('.loading').hide();
            $scope.msg = 'An error occured:' + status;
            if ($done) { $done(); }
            });
            
        }
        
        $scope.load = function($done) {
            getData($done);
        };

        $scope.showMoreItems = function () {
            $scope.page += 1;
            $('.loading').show();
            $scope.loadData();
        }

        $scope.hasMoreItems = function () {
            return $scope.more;
        }

        $scope.page = 1;
        $scope.posts = [];
        $scope.more = true;
        $scope.status_bar = "";
        $scope.loadData();
        
        // getServerPosts() function()
        $scope.getServerPosts = function() {
            // Filter Server Posts by $scope.search
            return $scope.posts.filter(function(item) {
                
                // Filter Server Posts by Title
                var itemDoesMatch = !$scope.search ||
                item.title.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;
                
                // Filter Server Posts by Title or Body
                //var itemDoesMatch = !$scope.search ||
                //item.title.toLowerCase().indexOf($scope.search.toLowerCase()) > -1 || 
                //item.body.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;
                
                return itemDoesMatch;
            });
        };

        // Search Detail function()
        $scope.showSearchDetail = function(index) {
        var items = $scope.getServerPosts();
        var selectedItem = items[index];
        ServerPostsData.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('serverpost.html', selectedItem);
        }
        
    });
    
    // Server Post Controller
    app.controller('ServerPostController', function($scope, ServerPostsData, $sce) {
        $scope.item = ServerPostsData.selectedItem;
        
        $scope.content = $sce.trustAsHtml($scope.item.content);
        
        $scope.loadURL = function (url) {
            //target: The target in which to load the URL, an optional parameter that defaults to _self. (String)
            //_self: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
            //_blank: Opens in the InAppBrowser.
            //_system: Opens in the system's web browser.
            window.open(url,'_blank');
        }
        
        $scope.sharePost = function () {
            
            var subject = $scope.item.title;
            var message = $scope.item.content;
            message = message.replace(/(<([^>]+)>)/ig,"");

            var link = $scope.item.url;
            
            //Documentation: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
            //window.plugins.socialsharing.share('Message', 'Subject', 'Image', 'Link');
            window.plugins.socialsharing.share(message, subject, null, link);
        }
        
    });
    
    // Categories Controller
    app.controller('CategoriesController', function($scope, $http, CategoriesData) {
        
        $('.loading').show();
        
        $http({method: 'GET', url: CategoriesData.url}).
        success(function(data, status, headers, config) {
            $scope.categories = data.categories;
            
            $('.loading').hide();
            
            if ($scope.categories.length < 1)
            {
                $scope.msg = "Nothing found.";
            }else{
                $scope.msg = undefined;
            }

            var page = 1;
            // Define the initial number of the categories in the page
            var pageSize = 10;

            $scope.paginationLimit = function(data) {
            return pageSize * page;
            };

            $scope.hasMoreItems = function() {
            return page < ($scope.categories.length / pageSize);
            };

            $scope.showMoreItems = function() {
            page = page + 1;       
            }; 
            
        }).
        error(function(data, status, headers, config) {
        $('.loading').hide();
        $scope.msg = 'An error occured:' + status;
        });
        
        $scope.showDetail = function(index) {
        var selectedItem = $scope.categories[index];
        CategoriesData.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('category-posts.html', selectedItem);
        }
        
    });
    
    // Category Posts Controller
    app.controller('CategoryPostsController', function($scope, $http, $filter, CategoriesData) {
        
        $('.loading').show();
        
        var getData = function ($done) {
            $scope.page = 1;
            $scope.more = false;
            $scope.status_bar = "";
            $scope.posts = [];
            $scope.loadData($done);
        }
        
        $scope.loadData = function ($done) {

            $http({method: 'GET', url: CategoriesData.category_url + 'id=' + CategoriesData.selectedItem.id + '&page=' + $scope.page}).
            success(function(data, status, headers, config) {
                
                $('.loading').hide();
                if ($done) { $done(); }
                
                $scope.title = CategoriesData.selectedItem.title;
                $scope.more = data.pages !== $scope.page;
                $scope.posts = $scope.posts.concat(data.posts);
                $scope.status_bar = "Showing " + ($scope.posts.length === 0 ? "0" : "1") + " to " + $filter('number')($scope.posts.length);

            }).
            error(function(data, status, headers, config) {
            $('.loading').hide();
            if ($done) { $done(); }
            $scope.msg = 'An error occured:' + status;
            });
            
        }
        
        $scope.load = function($done) {
            getData($done);
        };

        $scope.showMoreItems = function () {
            $scope.page += 1;
            $('.loading').show();
            $scope.loadData();
        }

        $scope.hasMoreItems = function () {
            return $scope.more;
        }

        $scope.page = 1;
        $scope.posts = [];
        $scope.title="";
        $scope.more = true;
        $scope.status_bar = "";
        $scope.loadData();
        
        // getCategoryPosts() function()
        $scope.getCategoryPosts = function() {
            // Filter Category Posts by $scope.search
            return $scope.posts.filter(function(item) {
                
                // Filter Category Posts by Title
                var itemDoesMatch = !$scope.search ||
                item.title.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;
                
                // Filter Category Posts by Title or Body
                //var itemDoesMatch = !$scope.search ||
                //item.title.toLowerCase().indexOf($scope.search.toLowerCase()) > -1 || 
                //item.body.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;
                
                return itemDoesMatch;
            });
        };

        // Search Detail function()
        $scope.showSearchDetail = function(index) {
        var items = $scope.getCategoryPosts();
        var lastSelectedItem = items[index];
        CategoriesData.lastSelectedItem = lastSelectedItem;
        $scope.appNavigator.pushPage('category-post.html', lastSelectedItem);
        }
        
    });
    
    // Category Post Controller
    app.controller('CategoryPostController', function($scope, CategoriesData, $sce) {
        $scope.item = CategoriesData.lastSelectedItem;
        
        $scope.content = $sce.trustAsHtml($scope.item.content);
        
        $scope.loadURL = function (url) {
            //target: The target in which to load the URL, an optional parameter that defaults to _self. (String)
            //_self: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
            //_blank: Opens in the InAppBrowser.
            //_system: Opens in the system's web browser.
            window.open(url,'_blank');
        }
        
        $scope.sharePost = function () {
            
            var subject = $scope.item.title;
            var message = $scope.item.content;
            message = message.replace(/(<([^>]+)>)/ig,"");

            var link = $scope.item.url;
            
            //Documentation: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
            //window.plugins.socialsharing.share('Message', 'Subject', 'Image', 'Link');
            window.plugins.socialsharing.share(message, subject, null, link);
        }
        
     });
    
   // RSS: Feeds Controller
    app.controller('FeedsController', function($scope, $http, FeedData, FeedStorage) {
        
        $('.loading').show();
        $scope.feeds = "";
        
        var getData = function ($done) {

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData.url)}).
            success(function(data, status, headers, config) {

                $('.loading').hide();
                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage.get();
                    $scope.msg = "Offline Mode - The device is unable to get the data.";

                    $scope.title = $scope.data.feed.title;
                    $scope.description = $scope.data.feed.description;
                    $scope.link = $scope.data.feed.link;
                    $scope.feeds = $scope.data.feed.entries;
                } else {
                    $scope.title = data.responseData.feed.title;
                    $scope.description = data.responseData.feed.description;
                    $scope.link = data.responseData.feed.link;
                    $scope.feeds = data.responseData.feed.entries;

                    // Save feeds to the local storage
                    FeedStorage.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            $('.loading').hide();
            if ($done) { $done(); }

            $scope.data = FeedStorage.get();
            $scope.msg = 'Offline Mode - An error occured:' + status;

            $scope.title = $scope.data.feed.title;
            $scope.description = $scope.data.feed.description;
            $scope.link = $scope.data.feed.link;
            $scope.feeds = $scope.data.feed.entries; 

            });
        }
        
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };
        
        var page = 1;
        // Define the number of the feed results in the page
        var pageSize = 5;

        $scope.paginationLimit = function(data) {
        return pageSize * page;
        };

        $scope.hasMoreItems = function() {
        return page < ($scope.feeds.length / pageSize);
        };

        $scope.showMoreItems = function() {
        page = page + 1;       
        }; 

        $scope.showDetail = function(index) {
        var selectedItem = $scope.feeds[index];
        FeedData.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('feed.html', selectedItem);
        }

        $scope.getImage = function(index) {
        var selectedItem = $scope.feeds[index];
        var content = selectedItem.content;
        var element = $('<div>').html(content);
        var source = element.find('img').attr("src");
        return source;
        }

    });
    
    // RSS: Feed Controller
    app.controller('FeedController', function($scope, FeedData, $sce) {
        $scope.item = FeedData.selectedItem;
        
        $scope.content = $sce.trustAsHtml($scope.item.content);
        
        $scope.loadURL = function (url) {
            //target: The target in which to load the URL, an optional parameter that defaults to _self. (String)
            //_self: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
            //_blank: Opens in the InAppBrowser.
            //_system: Opens in the system's web browser.
            window.open(url,'_blank');
        }
        
        $scope.sharePost = function () {
            
            var subject = $scope.item.title;
            var message = $scope.item.content;
            message = message.replace(/(<([^>]+)>)/ig,"");

            var link = $scope.item.link;
            
            //Documentation: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
            //window.plugins.socialsharing.share('Message', 'Subject', 'Image', 'Link');
            window.plugins.socialsharing.share(message, subject, null, link);
        }
        
     });
    
   
    
        // RSS: GalleryRss Controller
    app.controller('GalleryRssController', function($scope, $http, FeedData_gallery, FeedStorage_gallery) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_gallery.url) + String("&t=") + String(randomNum);
            FeedData_gallery.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_gallery.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_gallery.get();
                    $scope.feeds = $scope.data.feed.entries;
                    
                } else {
                    $scope.feeds = data.responseData.feed.entries;
                    // Save feeds to the local storage
                    //FeedStorage_gallery.clear();
                    FeedStorage_gallery.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_gallery.get();
            $scope.feeds = $scope.data.feed.entries; 
            });
        }
        
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };

        $scope.getImage = function(index) {
        var selectedItem = $scope.feeds[index];
        var content = selectedItem.content;
        var element = $('<div>').html(content);
        var source = element.find('img').attr("src");
        return source;
        }
        
    });
    
    
    // RSS: Certs Controller
    app.controller('CertsController', function($scope, $http, FeedData_certs, FeedStorage_certs) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            
            newURL = String(FeedData_certs.url) + String("&t=") + String(randomNum);
            FeedData_certs.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_certs.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_certs.get();
                    $scope.feeds = $scope.data.feed.entries;
                    
                } else {
                    $scope.feeds = data.responseData.feed.entries;
                    
                    // Save feeds to the local storage
                    //FeedStorage_certs.clear();
                    FeedStorage_certs.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_certs.get();
            $scope.feeds = $scope.data.feed.entries;
            });
        }
        
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };
        

        $scope.getImage = function(index) {
        var selectedItem = $scope.feeds[index];
        var content = selectedItem.content;
        var element = $('<div>').html(content);
        var source = element.find('img').attr("src");
        return source;
        }

    });
    
    
    
    // RSS: Akhbar Controller
    app.controller('AkhbarController', function($scope, $http, FeedData_akhbar, FeedStorage_akhbar) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api elyas
            var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_akhbar.url) + String("&t=") + String(randomNum);
            FeedData_akhbar.url = newURL;

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_akhbar.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_akhbar.get();
                    $scope.feeds = $scope.data.feed.entries;
                    
                } else {
                    $scope.feeds = data.responseData.feed.entries;
                    // Save feeds to the local storage
                    //FeedStorage_akhbar.clear();
                    FeedStorage_akhbar.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_akhbar.get();
            $scope.feeds = $scope.data.feed.entries; 
            });
        }
        
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };
        
        $scope.showDetail = function(index) {
        var selectedItem = $scope.feeds[index];
        FeedData_akhbar.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('new.html', selectedItem);
        }

        $scope.getImage = function(index) {
        var selectedItem = $scope.feeds[index];
        var content = selectedItem.content;
        var element = $('<div>').html(content);
        var source = element.find('img').attr("src");
        return source;
        }
        
    });
    
     // RSS: Akhbar Moadi Controller
    app.controller('AkhbarMoadiController', function($scope, $http, FeedData_akhbar_moadi, FeedStorage_akhbar_moadi) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api elyas
            var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_akhbar_moadi.url) + String("&t=") + String(randomNum);
            FeedData_akhbar_moadi.url = newURL;

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_akhbar_moadi.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_akhbar_moadi.get();
                    $scope.feeds = $scope.data.feed.entries;
                    
                } else {
                    $scope.feeds = data.responseData.feed.entries;
                    // Save feeds to the local storage
                    //FeedStorage_akhbar.clear();
                    FeedStorage_akhbar_moadi.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_akhbar_moadi.get();
            $scope.feeds = $scope.data.feed.entries; 
            });
        }
        
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };
        
        $scope.showDetail = function(index) {
        var selectedItem = $scope.feeds[index];
        FeedData_akhbar_moadi.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('new_moadi.html', selectedItem);
        }

        $scope.getImage = function(index) {
        var selectedItem = $scope.feeds[index];
        var content = selectedItem.content;
        var element = $('<div>').html(content);
        var source = element.find('img').attr("src");
        return source;
        }
        
    });
    
    // RSS: Akhbar Cities Controller
    app.controller('AkhbarCitiesController', function($scope, $http, FeedData_akhbar_cities, FeedStorage_akhbar_cities) {
        
        $scope.items = FeedData_akhbar_cities.items;
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_akhbar_cities.url) + String("&t=") + String(randomNum);
            FeedData_akhbar_cities.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_akhbar_cities.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_akhbar_cities.get();
                    $scope.feeds = $scope.data.feed.entries;
                    
                } else {
                    $scope.feeds = data.responseData.feed.entries;
                    // Save feeds to the local storage
                    //FeedStorage_akhbar.clear();
                    FeedStorage_akhbar_cities.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_akhbar_cities.get();
            $scope.feeds = $scope.data.feed.entries; 
            });
        }
        
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };
        
        
        $scope.showDetail = function(index) {
        //var selectedItem = $scope.feeds[index];
        FeedData_akhbar_cities.selectedIndex = index;
        $scope.appNavigator.pushPage('news_cities.html');
        }
        
    });
    
    // RSS: Akhbar City Controller
    app.controller('AkhbarCityController', function($scope, $http, FeedData_akhbar_cities, FeedStorage_akhbar_cities) {
        
        $scope.feeds = [];
        
        var getData = function ($done) {
            
            $scope.data = FeedStorage_akhbar_cities.get();
            var city = "";
            
            switch(parseInt(FeedData_akhbar_cities.selectedIndex)){
                case 0:
                    city = 'آران و بیدگل';
                    break;
                case 1:
                     city = 'اردستان';
                    break;
                case 2:
                    city = 'اصفهان';
                    break;
                case 3:
                    city = 'برخوار';
                    break;
                case 4:
                    city = 'تیران و کرون';
                    break;
                case 5:
                    city = 'چادگان';
                    break;
                case 6:
                    city = 'خوانسار';
                    break;
                case 7:
                    city = 'خور و بیابانک';
                    break;
                case 8:
                    city = 'خمینی شهر';
                    break;
                case 9:
                    city = 'دهاقان';
                    break;
                case 10:
                    city = 'سمیرم';
                    break;
                case 11:
                    city = 'شاهین شهر و میمه';
                    break;
                case 12:
                    city = 'شهرضا';
                    break;
                case 13:
                    city = 'فریدن';
                    break;
                case 14:
                    city = 'فریدونشهر';
                    break;
                case 15:
                    city = 'فلاورجان';
                    break;
                case 16:
                    city = 'کاشان';
                    break;
                case 17:
                    city = 'گلپایگان';
                    break;
                case 18:
                    city = 'لنجان';
                    break;
                case 19:
                    city = 'مبارکه';
                    break;
                case 20:
                    city = 'نایین';
                    break;
                case 21:
                    city = 'نجف آباد';
                    break;
                case 22:
                    city = 'نطنز';
                    break;
            }
            
            for(var i=0 ; i< $scope.data.feed.entries.length ; ++i){
                if($scope.data.feed.entries[i].categories[0] == city)
                    $scope.feeds.push($scope.data.feed.entries[i]);
            }
            
            $scope.city = city;

        }
        
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };
        
        
        $scope.showDetail = function(index) {
        var selectedItem = $scope.feeds[index];
        FeedData_akhbar_cities.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('new_cities.html', selectedItem);
        }

        $scope.getImage = function(index) {
        var selectedItem = $scope.feeds[index];
        var content = selectedItem.content;
        var element = $('<div>').html(content);
        var source = element.find('img').attr("src");
        return source;
        }
        
        
    });
    
    
    // RSS: Khabar Controller
    app.controller('KhabarController', function($scope, FeedData_akhbar, $sce) {
        $scope.item = FeedData_akhbar.selectedItem;
        
        $scope.content = $sce.trustAsHtml($scope.item.content);
        
        $scope.loadURL = function (url) {
            //target: The target in which to load the URL, an optional parameter that defaults to _self. (String)
            //_self: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
            //_blank: Opens in the InAppBrowser.
            //_system: Opens in the system's web browser.
            window.open(url,'_blank');
        }
        
     });
    
     // RSS: Khabar Moadi Controller
    app.controller('KhabarMoadiController', function($scope, FeedData_akhbar_moadi, $sce) {
        $scope.item = FeedData_akhbar_moadi.selectedItem;
        
        $scope.content = $sce.trustAsHtml($scope.item.content);
        
        $scope.loadURL = function (url) {
            //target: The target in which to load the URL, an optional parameter that defaults to _self. (String)
            //_self: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
            //_blank: Opens in the InAppBrowser.
            //_system: Opens in the system's web browser.
            window.open(url,'_blank');
        }
        
     });
    
    // RSS: Khabar city Controller
    app.controller('KhabarCityController', function($scope, FeedData_akhbar_cities, $sce) {
        $scope.item = FeedData_akhbar_cities.selectedItem;
        
        $scope.content = $sce.trustAsHtml($scope.item.content);
        
        $scope.loadURL = function (url) {
            //target: The target in which to load the URL, an optional parameter that defaults to _self. (String)
            //_self: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
            //_blank: Opens in the InAppBrowser.
            //_system: Opens in the system's web browser.
            window.open(url,'_blank');
        }
        
     });
    
    
    // RSS: Darbare Controller
    app.controller('DarbareController', function($scope, $http, FeedData_darbare, FeedStorage_darbare) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_darbare.url) + String("&t=") + String(randomNum);
            FeedData_darbare.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_darbare.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_darbare.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_darbare.clear();
                    FeedStorage_darbare.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_darbare.get();
            $scope.title = $scope.data.feed.entries[0].title;
            $scope.description = $scope.data.feed.entries[0].content;
            });
        }
        
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };
    });
    
   
    
    // RSS: Ertebat Controller
    app.controller('ErtebatController', function($scope, $http, FeedData_ertebat, FeedStorage_ertebat) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_ertebat.url) + String("&t=") + String(randomNum);
            FeedData_ertebat.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_ertebat.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_ertebat.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_ertebat.clear();
                    FeedStorage_ertebat.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_ertebat.get();
            $scope.title = $scope.data.feed.entries[0].title;
            $scope.description = $scope.data.feed.entries[0].content;
            });
        }
        
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };
    });
    
    // RSS: Gavahi Controller
    app.controller('GavahiController', function($scope, $http, FeedData_gavahi, FeedStorage_gavahi) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_gavahi.url) + String("&t=") + String(randomNum);
            FeedData_gavahi.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_gavahi.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_gavahi.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_gavahi.clear();
                    FeedStorage_gavahi.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_gavahi.get();
            $scope.title = $scope.data.feed.entries[0].title;
            $scope.description = $scope.data.feed.entries[0].content;
            });
        }
        
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };
    });
    
    // RSS: Mofids Controller
    app.controller('MofidsController', function($scope, $http, FeedData_mofid, FeedStorage_mofid) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_mofid.url) + String("&t=") + String(randomNum);
            FeedData_mofid.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_mofid.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_mofid.get();
                    $scope.feeds = $scope.data.feed.entries;
                    
                } else {
                    $scope.feeds = data.responseData.feed.entries;
                    // Save feeds to the local storage
                    //FeedStorage_akhbar.clear();
                    FeedStorage_mofid.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_mofid.get();
            $scope.feeds = $scope.data.feed.entries; 
            });
        }
        
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };
        
        $scope.showDetail = function(index) {
        var selectedItem = $scope.feeds[index];
        FeedData_mofid.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('Mofid.html', selectedItem);
        }

        $scope.getImage = function(index) {
        var selectedItem = $scope.feeds[index];
        var content = selectedItem.content;
        var element = $('<div>').html(content);
        var source = element.find('img').attr("src");
        return source;
        }
        
    });
    
    // RSS: Mofid Controller
    app.controller('MofidController', function($scope, FeedData_mofid, $sce) {
        $scope.item = FeedData_mofid.selectedItem;
        
        $scope.content = $sce.trustAsHtml($scope.item.content);
        
        $scope.loadURL = function (url) {
            //target: The target in which to load the URL, an optional parameter that defaults to _self. (String)
            //_self: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
            //_blank: Opens in the InAppBrowser.
            //_system: Opens in the system's web browser.
            window.open(url,'_blank');
        }
        
     });
    
     // RSS: Takhfifs Controller
    app.controller('TakhfifsController', function($scope, $http, FeedData_takhfif, FeedStorage_takhfif) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_akhbar.url) + String("&t=") + String(randomNum);
            FeedData_akhbar.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_takhfif.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_takhfif.get();
                    $scope.feeds = $scope.data.feed.entries;
                    
                } else {
                    $scope.feeds = data.responseData.feed.entries;
                    // Save feeds to the local storage
                    //FeedStorage_akhbar.clear();
                    FeedStorage_takhfif.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_takhfif.get();
            $scope.feeds = $scope.data.feed.entries; 
            });
        }
        
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };
        
        $scope.showDetail = function(index) {
        var selectedItem = $scope.feeds[index];
        FeedData_takhfif.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('takhfif.html', selectedItem);
        }

        $scope.getImage = function(index) {
        var selectedItem = $scope.feeds[index];
        var content = selectedItem.content;
        var element = $('<div>').html(content);
        var source = element.find('img').attr("src");
        return source;
        }
        
    });
    
    // RSS: Takhfif Controller
    app.controller('TakhfifController', function($scope, FeedData_takhfif, $sce) {
        $scope.item = FeedData_takhfif.selectedItem;
        
        $scope.content = $sce.trustAsHtml($scope.item.content);
        
        $scope.loadURL = function (url) {
            //target: The target in which to load the URL, an optional parameter that defaults to _self. (String)
            //_self: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
            //_blank: Opens in the InAppBrowser.
            //_system: Opens in the system's web browser.
            window.open(url,'_blank');
        }
        
     });
    
    // About: About Controller
    app.controller('AboutController', function($scope, $http, AboutData) {
        
        $http({method: 'GET', url: AboutData.url}).
        success(function(data, status, headers, config) {
            $scope.about = data.result;
        }).
        error(function(data, status, headers, config) {

        });
        
        $scope.showDetail = function(index) {
        var selectedItem = $scope.about[index];
        AboutData.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('member.html', selectedItem);
        }
        
    });
    
    // About: Member Controller
    app.controller('MemberController', function($scope, AboutData) {
        $scope.item = AboutData.selectedItem;
     });
    
    // Gallery Controller
    app.controller('GalleryController', function($scope, GalleryData) {

        var items = GalleryData.items;

        function addSlides(target) {
            angular.forEach(items,function(item,index){
                target.push({
                    label: item.label,
                    picture: item.src,
                    location: item.location,
                    item: (index + 1)
                });
            });
         };

        $scope.slides = [];
        addSlides($scope.slides);

    });

    // Settings Controller
    app.controller('SettingsController', function($scope, SettingsData, localStorageService, FeedStorage) {
        $scope.settings = SettingsData.items;

        if (localStorageService.get('settings')) {
            $scope.settings = localStorageService.get('settings');
        }
        
        $scope.saveSettings = function() {
            localStorageService.clearAll();
            localStorageService.add('settings',$scope.settings);
        };
        
        $scope.clearLocalStorage = function() {
        FeedStorage.clear();
        }
        
    });
    
    // Modal View: Modal Controller
    app.controller('ModalController', function($scope) {
        
        $scope.show = function () {
            modal.show();
        }
        
        $scope.hide = function () {
            modal.hide();
        }
        
     });
    
    // Feed Plugin: Categories Controller
    app.controller('FeedPluginCategoriesController', function($scope, $http, FeedPluginData) {

        $http({method: 'GET', url: FeedPluginData.url}).
        success(function(data, status, headers, config) {
            $scope.categories = data.categories; 
        }).
        error(function(data, status, headers, config) {

        });

        $scope.showDetail = function(index) {
        var selectedItem = $scope.categories[index];
        FeedPluginData.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('feed-category.html', {title : selectedItem.title});
        }

    });
    
    // Feed Plugin: Category Controller
    app.controller('FeedPluginCategoryController', function($scope, FeedPluginData) {

        $scope.title = FeedPluginData.selectedItem.title;
        $scope.items = FeedPluginData.selectedItem.items;

        $scope.showDetail = function(index) {
        var selectedItem = $scope.items[index];
        FeedPluginData.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('feed-master.html', {title : selectedItem.title});
        }

    });
    
    // Feed Plugin: Master Controller
    app.controller('FeedPluginMasterController', function($scope, $http, FeedPluginData) {
        
        $('.loading').show();
        $scope.feeds = "";
        $scope.url = FeedPluginData.selectedItem.url;
        
        var getData = function ($done) {

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent($scope.url)}).
            success(function(data, status, headers, config) {

                $('.loading').hide();
                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.msg = "The device is unable to get the data.";
                } else {
                    $scope.title = data.responseData.feed.title;
                    $scope.description = data.responseData.feed.description;
                    $scope.link = data.responseData.feed.link;
                    $scope.feeds = data.responseData.feed.entries;
                }

            }).
            error(function(data, status, headers, config) {
            $('.loading').hide();
            if ($done) { $done(); }
            $scope.msg = 'An error occured:' + status;
            });
            
        }
        
        // Initial Data Loading
        getData();

        $scope.load = function($done) {
            getData($done);
        };

        var page = 1;
        // Define the number of the feed results in the page
        var pageSize = 4;

        $scope.paginationLimit = function(data) {
        return pageSize * page;
        };
        
        $scope.hasMoreItems = function() {
        return page < ($scope.feeds.length / pageSize);
        };

        $scope.showMoreItems = function() {
        page = page + 1;       
        }; 
        
        $scope.showDetail = function(index) {
        var selectedItem = $scope.feeds[index];
        FeedPluginData.selectedItem = selectedItem;
        $scope.appNavigator.pushPage('feed-detail.html', selectedItem);
        }
        
		$scope.mediaObject = function(item) {
			return (item && item.mediaGroups) ? item.mediaGroups[0].contents[0] : {url:''};
		}

		$scope.hasVideo = function(item) {
			var media = $scope.mediaObject(item);
            
            //JAVASCRIPT: condition ? val1 : val2
            //return media.type ? (media.type == "video/mp4") : (media.url ? (media.url.indexOf(".mp4") != -1) : false);
			return media.type ? (media.type == "video/mp4") : false;
		}
        
		$scope.hasAudio = function(item) {
			var media = $scope.mediaObject(item);
            
            //JAVASCRIPT: condition ? val1 : val2
			return media.type ? (media.type == "audio/mp3") : false;
		}
        
        $scope.getImage = function(index) {
        var selectedItem = $scope.feeds[index];
        var content = selectedItem.content;
        var element = $('<div>').html(content);
        var source = element.find('img').attr("src");
        return source;
        }
        
    });

    // Feed Plugin: Detail Controller
    app.controller('FeedPluginDetailController', function($scope, $sce, FeedPluginData) {
        $scope.item = FeedPluginData.selectedItem;
        
        $scope.content = $sce.trustAsHtml($scope.item.content);
        
		$scope.mediaObject = function(item) {
			return (item && item.mediaGroups) ? item.mediaGroups[0].contents[0] : {url:''};
		}

		$scope.hasVideo = function(item) {
			var media = $scope.mediaObject(item);
            
            //JAVASCRIPT: condition ? val1 : val2
            //return media.type ? (media.type == "video/mp4") : (media.url ? (media.url.indexOf(".mp4") != -1) : false);
			return media.type ? (media.type == "video/mp4") : false;
		}
        
		$scope.hasAudio = function(item) {
			var media = $scope.mediaObject(item);
            
            //JAVASCRIPT: condition ? val1 : val2
			return media.type ? (media.type == "audio/mp3") : false;
		}
        
        $scope.getTrustedResourceUrl = function(src) {
            return $sce.trustAsResourceUrl(src);
        }
        
        $scope.loadURL = function () {
            //target: The target in which to load the URL, an optional parameter that defaults to _self. (String)
            //_self: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
            //_blank: Opens in the InAppBrowser.
            //_system: Opens in the system's web browser.
            window.open($scope.item.link,'_blank');
        }
        
        $scope.shareFeed = function () {
            
            var subject = $scope.item.title;
            var message = $scope.item.content;
            message = message.replace(/(<([^>]+)>)/ig,"");

            var link = $scope.item.link;
            
            //Documentation: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
            //window.plugins.socialsharing.share('Message', 'Subject', 'Image', 'Link');
            window.plugins.socialsharing.share(message, subject, null, link);
        }
        
     });
    
    // NVD3 View: NVD3 Controller
    app.controller('NVD3Controller', function($scope, NVD3Data) {
        
        var data = NVD3Data;
        
        /* Chart options */
        $scope.options = data.options;

        /* Chart data */
        $scope.data = data.data;
        
     });
    
    // PLUGINS: Device Controller
    app.controller('DeviceController', function($scope) {
        
        $scope.device = device;
        
    });
    
    // PLUGINS: Geolocation Controller
    app.controller('GeolocationController', function($scope) {

        $scope.latitude = '0';
        $scope.longitude = '0';
        $scope.accuracy = '0';
        $scope.altitude = '0';
        $scope.altitudeAccuracy = '0';
        $scope.heading = '0';
        $scope.speed = '0';
        $scope.timestamp = '0';
        $scope.error = '';
        $scope.model = { map: undefined };
        $scope.markers = [];
 
        $scope.showResult = function () {
            return $scope.error == '';
        }
 
        $scope.mapOptions = {
            center: new google.maps.LatLng($scope.latitude, $scope.longitude),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        $scope.showPosition = function (position) {
            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
            $scope.accuracy = position.coords.accuracy;
            $scope.altitude = position.coords.altitude;
            $scope.altitudeAccuracy = position.coords.altitudeAccuracy;
            $scope.heading = position.coords.heading;
            $scope.speed = position.coords.speed;
            $scope.timestamp = position.timestamp;
            $scope.$apply();
 
            var latlng = new google.maps.LatLng($scope.latitude, $scope.longitude);
            $scope.model.map.setCenter(latlng);
            $scope.markers.push(new google.maps.Marker({ map: $scope.model.map, position: latlng }));
        }
 
        $scope.showError = function (error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    $scope.error = "User does not allow the app to retrieve position information."
                    break;
                case error.POSITION_UNAVAILABLE:
                    $scope.error = "The device is unable to retrieve a position. In general, this means the device is not connected to a network or can't get a satellite fix."
                    break;
                case error.TIMEOUT:
                    $scope.error = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    $scope.error = "An unknown error occurred."
                    break;
            }
            $scope.$apply();
        }
 
        $scope.getLocation = function () {
            if (navigator.geolocation) {
                var options = { enableHighAccuracy: true };
                navigator.geolocation.getCurrentPosition($scope.showPosition, $scope.showError, options);
            }
            else {
                $scope.error = "Geolocation is not supported by this browser.";
            }
        }
 
        $scope.getLocation();

    });
    
    // PLUGINS: Notifications Controller
    app.controller('NotificationsController', function($scope) {
        
        $scope.alertNotify = function() {
        navigator.notification.alert("Sample Alert",function() {console.log("Alert success")},"My Alert","Close");
        };

        $scope.beepNotify = function() {
        navigator.notification.beep(1);
        };

        $scope.vibrateNotify = function() {
        navigator.notification.vibrate(3000);
        };

        $scope.confirmNotify = function() {
        navigator.notification.confirm("My Confirmation",function(){console.log("Confirm Success")},"Are you sure?",["Ok","Cancel"]);
        };
        
    });
    
    // Barcodescanner Controller
    app.controller('BarcodescannerController', function($scope) {
        
        $scope.scan = function() {
            cordova.plugins.barcodeScanner.scan(function(result) {
                $scope.result = result;
                $scope.$apply();
            }, function(error) {
                $scope.error = error;
                $scope.$apply();
            });
        }
        
    });
    
    // Filter
    app.filter('partition', function($cacheFactory) {
          var arrayCache = $cacheFactory('partition');
          var filter = function(arr, size) {
            if (!arr) { return; }
            var newArr = [];
            for (var i=0; i<arr.length; i+=size) {
                newArr.push(arr.slice(i, i+size));        
            }
            var cachedParts;
            var arrString = JSON.stringify(arr);
            cachedParts = arrayCache.get(arrString+size); 
            if (JSON.stringify(cachedParts) === JSON.stringify(newArr)) {
              return cachedParts;
            }
            arrayCache.put(arrString+size, newArr);
            return newArr;
          };
          return filter;
        });


})();