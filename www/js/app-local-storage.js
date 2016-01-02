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

.factory('FeedStorage_sotoon', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_sotoon'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_sotoon'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_sotoon');
    }
  }
})

.factory('FeedStorage_shomine', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_shomine'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_shomine'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_shomine');
    }
  }
})

.factory('FeedStorage_abnama', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_abnama'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_abnama'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_abnama');
    }
  }
})

.factory('FeedStorage_sayer', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_sayer'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_sayer'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_sayer');
    }
  }
})

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

.factory('FeedStorage_darbare', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_darbare'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_darbare'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_darbare');
    }
  }
})

.factory('FeedStorage_takhfif', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_takhfif'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_takhfif'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_takhfif');
    }
  }
})

.factory('FeedStorage_ertebat', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_ertebat'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_ertebat'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_ertebat');
    }
  }
})

.factory('FeedStorage_gavahi', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_gavahi'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_gavahi'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_gavahi');
    }
  }
})

.factory('FeedStorage_mofid', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_mofid'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_mofid'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_mofid');
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

.factory('FeedStorage_certs', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_certs'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_certs'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_certs');
    }
  }
})