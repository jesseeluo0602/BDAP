  var app = angular.module('BDAP', ["ngAnimate"]);

  app.controller('PMTController', function(){
    this.pmt = pmtList;
  });


  var pmtList = [
    { name: 'Holy Dragon', rank: "A",  type:"Fire", imageUrl:"http://img2.wikia.nocookie.net/__cb20131222134656/quiz-rpg-the-world-of-mystic-wiz/images/6/61/Holy_Dragon_Icon.png", wiki:"http://quiz-rpg-the-world-of-mystic-wiz.wikia.com/wiki/Holy_Dragon" },
    { name: 'White Flame Holy Dragon', rank: "A-",  type:"Fire", imageUrl:"http://img1.wikia.nocookie.net/__cb20131222134724/quiz-rpg-the-world-of-mystic-wiz/images/thumb/3/33/White_Flame_Holy_Dragon_Icon.png/100px-White_Flame_Holy_Dragon_Icon.webp", wiki:"http://quiz-rpg-the-world-of-mystic-wiz.wikia.com/wiki/White_Flame_Holy_Dragon"},
    { name: 'Fiery Dragon', rank: "B", type:"Fire", imageUrl:"http://img4.wikia.nocookie.net/__cb20131222112237/quiz-rpg-the-world-of-mystic-wiz/images/thumb/5/5f/Fiery_Dragon_Icon.png/100px-Fiery_Dragon_Icon.png", wiki:"http://quiz-rpg-the-world-of-mystic-wiz.wikia.com/wiki/Fiery_Dragon" },
    { name: 'Riel', rank: "A", type:"Water", imageUrl:"http://img2.wikia.nocookie.net/__cb20140106070142/quiz-rpg-the-world-of-mystic-wiz/images/thumb/9/9e/Riel_%28Aqua_Pistol%29_Icon.png/100px-Riel_%28Aqua_Pistol%29_Icon.webp", wiki:"http://quiz-rpg-the-world-of-mystic-wiz.wikia.com/wiki/Riel_(Aqua_Pistol)" },

  ];