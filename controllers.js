  var app = angular.module('BDAP', ["ngAnimate"]);

  app.controller('PMTController', function( ){
    this.pmt = pmtList;
    this.list = addedList;
    this.cool=0;
    this.addItem = function(pmtnumber, tech){
      this.list.push({pmt: pmtnumber, category: tech})
    }
  });

  app.controller('modal', function(){

  });

  app.filter('sort', function () {
    // function to invoke by Angular each time
    // Angular passes in the `items` which is our Array
    return function (items, tech) {
      // Create a new Array
      var filtered = [];
      // loop through existing Array
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        // check if the individual Array element begins with `a` or not
        if (item.Category === tech || tech==="All" ) {
          // push it into the Array if it does!
          filtered.push(item);
        }
      }
      // boom, return the Array after iteration's complete
      return filtered;
    };
  });




var pmtList = [
{ PMT: 078945, Category: "Web Development",  IterationPts: "58", AvgTime: "15.00"},
{ PMT: 395783, Category: "Mobile Applications Development",  IterationPts:"27", AvgTime: "08.30"},  
{ PMT: 148764, Category: "Performance Testing",  IterationPts:"64", AvgTime: "24.86"},
{ PMT: 034620, Category: "Web Design",  IterationPts:"58", AvgTime: "14.65"},
{ PMT: 947638, Category: "Leadership Training",  IterationPts:"32", AvgTime: "07.54"},
{ PMT: 349730, Category: "Web Development",  IterationPts:"85", AvgTime: "37.10"},  
{ PMT: 455893, Category: "Web Development",  IterationPts:"46", AvgTime: "11.08"},
{ PMT: 340847, Category: "Performance Testing",  IterationPts:"53", AvgTime: "12.97"},
{ PMT: 349028, Category: "Mobile Applications Development",  IterationPts:"34", AvgTime: "10.12"},
{ PMT: 087487, Category: "Mobile Applications Design",  IterationPts:"58", AvgTime: "16.73"},  
{ PMT: 936044, Category: "U2L",  IterationPts:"54", AvgTime: "15.88"},
{ PMT: 457266, Category: "Server Maintenance",  IterationPts:"76", AvgTime: "17.95"},
{ PMT: 338432, Category: "Cloud Computing",  IterationPts:"72", AvgTime: "25.02"},
{ PMT: 284009, Category: "Big Data Initiative",  IterationPts:"34", AvgTime: "19.45"},  
{ PMT: 247678, Category: "Big Data Initiative",  IterationPts:"67", AvgTime: "28.86"},
{ PMT: 346897, Category: "Mobile Applications Design",  IterationPts:"44", AvgTime: "45.23"},
  ];  

  var addedList = [
    {pmt: '85105', Category: "Web Development"},
    {pmt: '23535', Category: "U2L"}
  ];