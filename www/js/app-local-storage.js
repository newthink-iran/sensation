angular.module('appLocalStorage', [])

.factory('FeedStorage_akhbar', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_akhbar'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_akhbar'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_akhbar');
    }
  }
})

.factory('FeedStorage_akhbar_cities', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_akhbarr_cities'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_akhbarr_cities'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_akhbarr_cities');
    }
  }
})

