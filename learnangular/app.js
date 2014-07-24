(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });


  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  });

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive("description", function(){
    return {
      restrict: 'E',
      templateUrl: "product-description.html"
    };
  })

  app.directive("specs", function(){
    return {
      restrict: 'E',
      templateUrl: "product-specs.html"
    };
  })

  app.directive("reviews", function(){
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  })

  app.directive("navbar", function(){
    return {
      restrict: 'E',
      templateUrl: "navbar.html"
    };
  })

  app.directive("itemtab", function(){
    return {
      restrict: 'E',
      templateUrl: "itemtab.html",
      controller: function(){
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(setTab) {
          this.tab = setTab;
        };
      },
      controllerAs: "tab"
    };
  })


  var gems = [{
      name: 'Item 1',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      fire: 0,
      images: [
        "images/gem-02.gif",
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Item 2',
      description: "Origin of Item 2 is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      fire: 0,
      images: [
        "images/gem-01.gif",
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Item 3',
      description: "Item 3 is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      fire: 1,
      images: [
        "images/gem-06.gif",
      ],
      reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }];
})();
