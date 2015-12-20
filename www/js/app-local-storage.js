angular.module('appLocalStorage', [])

.factory('FeedStorage', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds');
    }
  }
})

.factory('FeedStorage_antique', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_antique'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_antique'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_antique');
    }
  }
})

.factory('FeedStorage_travertan', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_travertan'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_travertan'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_travertan');
    }
  }
})

.factory('FeedStorage_travonix', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_travonix'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_travonix'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_travonix');
    }
  }
})

.factory('FeedStorage_tazini', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_tazini'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_tazini'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_tazini');
    }
  }
})

.factory('FeedStorage_chini', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_chini'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_chini'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_chini');
    }
  }
})

.factory('FeedStorage_granit', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_granit'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_granit'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_granit');
    }
  }
})

.factory('FeedStorage_giotin', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_giotin'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_giotin'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_giotin');
    }
  }
})

.factory('FeedStorage_limestone', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_limestone'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_limestone'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_limestone');
    }
  }
})

.factory('FeedStorage_malon', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_malon'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_malon'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_malon');
    }
  }
})

.factory('FeedStorage_marmar', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_marmar'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_marmar'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_marmar');
    }
  }
})

.factory('FeedStorage_marmarit', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_marmarit'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_marmarit'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_marmarit');
    }
  }
})

.factory('FeedStorage_varedati', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_varedati'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_varedati'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_varedati');
    }
  }
})


.factory('FeedStorage_gallery', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_gallery'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_gallery'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_gallery');
    }
  }
})