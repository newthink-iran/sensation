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
            if (navigator.notification.confirm("آیا مایل به خروج از برنامه هستید؟", 
                function(index) {
                    if (index == 1) { // OK button*/
                        navigator.app.exitApp(); // Close the app
                    }
                }
            ));
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
            $scope.appNavigator.pushPage(selectedItem.page, {title: selectedItem.title, animation: 'slide'});
        }
        
    });
    
    // Home Products Controller
    app.controller('ProductsCategoriesController', function($scope, DataProducts) {
        
        $scope.items = DataProducts.items;

        $scope.showDetail = function(index){
            var selectedItem = $scope.items[index];
            DataProducts.selectedItem = selectedItem;
            $scope.appNavigator.pushPage(selectedItem.page, {title: selectedItem.title, animation: 'slide'});
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
    
    // RSS: Antique Controller
    app.controller('AntiqueController', function($scope, $http, FeedData_antique, FeedStorage_antique) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_antique.url) + String("&t=") + String(randomNum);
            FeedData_antique.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_antique.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_antique.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_antique.clear();
                    FeedStorage_antique.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_antique.get();
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
    
    // RSS: Travertan Controller
    app.controller('TravController', function($scope, $http, FeedData_trav, FeedStorage_trav) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_trav.url) + String("&t=") + String(randomNum);
            FeedData_trav.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_trav.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_trav.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_trav.clear();
                    FeedStorage_trav.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_trav.get();
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
    
    // RSS: Travonix Controller
    app.controller('TravonixController', function($scope, $http, FeedData_travonix, FeedStorage_travonix) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_travonix.url) + String("&t=") + String(randomNum);
            FeedData_travonix.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_travonix.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_travonix.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_travonix.clear();
                    FeedStorage_travonix.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_travonix.get();
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
    
    // RSS: Tazini Controller
    app.controller('TaziniController', function($scope, $http, FeedData_tazini, FeedStorage_tazini) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_tazini.url) + String("&t=") + String(randomNum);
            FeedData_tazini.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_tazini.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_tazini.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_tazini.clear();
                    FeedStorage_tazini.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_tazini.get();
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
    
    // RSS: Chini Controller
    app.controller('ChiniController', function($scope, $http, FeedData_chini, FeedStorage_chini) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_chini.url) + String("&t=") + String(randomNum);
            FeedData_chini.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_chini.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_chini.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_chini.clear();
                    FeedStorage_chini.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_chini.get();
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
    
    // RSS: Granit Controller
    app.controller('GranitController', function($scope, $http, FeedData_granit, FeedStorage_granit) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_granit.url) + String("&t=") + String(randomNum);
            FeedData_granit.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_granit.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_granit.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_granit.clear();
                    FeedStorage_granit.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_granit.get();
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
    
    // RSS: Giotin Controller
    app.controller('GiotinController', function($scope, $http, FeedData_giotin, FeedStorage_giotin) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_giotin.url) + String("&t=") + String(randomNum);
            FeedData_giotin.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_giotin.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_giotin.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_giotin.clear();
                    FeedStorage_giotin.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_giotin.get();
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
    
    // RSS: Limestone Controller
    app.controller('LimestoneController', function($scope, $http, FeedData_limestone, FeedStorage_limestone) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_limestone.url) + String("&t=") + String(randomNum);
            FeedData_limestone.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_limestone.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_limestone.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_limestone.clear();
                    FeedStorage_limestone.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_limestone.get();
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
    
    // RSS: Malon Controller
    app.controller('MalonController', function($scope, $http, FeedData_malon, FeedStorage_malon) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_malon.url) + String("&t=") + String(randomNum);
            FeedData_malon.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_malon.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_malon.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_malon.clear();
                    FeedStorage_malon.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_malon.get();
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
    
    // RSS: Marmar Controller
    app.controller('MarmarController', function($scope, $http, FeedData_marmar, FeedStorage_marmar) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_marmar.url) + String("&t=") + String(randomNum);
            FeedData_marmar.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_marmar.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_marmar.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_marmar.clear();
                    FeedStorage_marmar.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_marmar.get();
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
    
    // RSS: Marmarit Controller
    app.controller('MarmaritController', function($scope, $http, FeedData_marmarit, FeedStorage_marmarit) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_marmarit.url) + String("&t=") + String(randomNum);
            FeedData_marmarit.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_marmarit.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_marmarit.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_marmarit.clear();
                    FeedStorage_marmarit.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_marmarit.get();
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
    
    // RSS: Varedati Controller
    app.controller('VaredatiController', function($scope, $http, FeedData_varedati, FeedStorage_varedati) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_varedati.url) + String("&t=") + String(randomNum);
            FeedData_varedati.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_varedati.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_varedati.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_varedati.clear();
                    FeedStorage_varedati.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_varedati.get();
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
    
    // RSS: Abnama Controller
    app.controller('AbnamaController', function($scope, $http, FeedData_abnama, FeedStorage_abnama) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_abnama.url) + String("&t=") + String(randomNum);
            FeedData_abnama.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_abnama.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_abnama.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_abnama.clear();
                    FeedStorage_abnama.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_abnama.get();
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
    
    // RSS: Shomine Controller
    app.controller('ShomineController', function($scope, $http, FeedData_shomine, FeedStorage_shomine) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_shomine.url) + String("&t=") + String(randomNum);
            FeedData_shomine.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_shomine.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_shomine.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_shomine.clear();
                    FeedStorage_shomine.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_shomine.get();
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
    
     // RSS: Sotoon Controller
    app.controller('SotoonController', function($scope, $http, FeedData_sotoon, FeedStorage_sotoon) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_sotoon.url) + String("&t=") + String(randomNum);
            FeedData_sotoon.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_sotoon.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_sotoon.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_sotoon.clear();
                    FeedStorage_sotoon.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_sotoon.get();
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
    
     // RSS: Sayer Controller
    app.controller('SayerController', function($scope, $http, FeedData_sayer, FeedStorage_sayer) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_sayer.url) + String("&t=") + String(randomNum);
            FeedData_sayer.url = newURL;*/

            $http({method: 'JSONP', url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(FeedData_sayer.url)}).
            success(function(data, status, headers, config) {

                if ($done) { $done(); }

                if (!data.responseData) {
                    $scope.data = FeedStorage_sayer.get();
                    $scope.title = $scope.data.feed.entries[0].title;
                    $scope.description = $scope.data.feed.entries[0].content;
                    
                } else {
                    $scope.title = data.responseData.feed.entries[0].title;
                    $scope.description = data.responseData.feed.entries[0].content;
                    // Save feeds to the local storage
                    //FeedStorage_sayer.clear();
                    FeedStorage_sayer.save(data.responseData);
                }

            }).
            error(function(data, status, headers, config) {

            if ($done) { $done(); }

            $scope.data = FeedStorage_sayer.get();
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
    
    // RSS: Akhbar Controller
    app.controller('AkhbarController', function($scope, $http, FeedData_akhbar, FeedStorage_akhbar) {
        
        $scope.feeds = "";
        
        var getData = function ($done) {
            
            //add datetime for refreshing google api
            /*var randomNum = Math.floor(Date.now() / 1000);
            var newURL = "";
            newURL = String(FeedData_akhbar.url) + String("&t=") + String(randomNum);
            FeedData_akhbar.url = newURL;*/

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
    
     // Gallery Trav Controller
    app.controller('GalleryTravController', function($scope, GalleryTravData) {

        var items = GalleryTravData.items;

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
    
      // Gallery Trav Controller
    app.controller('GalleryTravonixController', function($scope, GalleryTravonixData) {

        var items = GalleryTravonixData.items;

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
    
      // Gallery Trav Controller
    app.controller('GalleryAbnamaController', function($scope, GalleryAbnamaData) {

        var items = GalleryAbnamaData.items;

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
    
       // Gallery Trav Controller
    app.controller('GalleryMalonController', function($scope, GalleryMalonData) {

        var items = GalleryMalonData.items;

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
    
     // Gallery Trav Controller
    app.controller('GallerySotoonController', function($scope, GallerySotoonData) {

        var items = GallerySotoonData.items;

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
    
     // Gallery Trav Controller
    app.controller('GalleryTaziniController', function($scope, GalleryTaziniData) {

        var items = GalleryTaziniData.items;

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
    
    // Gallery Trav Controller
    app.controller('GalleryShomineController', function($scope, GalleryShomineData) {

        var items = GalleryShomineData.items;

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