// var count = 0;
//   var countup = function(){
//     $("#totaltime").html(count++);
//   } 
//   setInterval(countup, 1000);

let alltotalcountup = 0;
function alltotalcount(){
  alltotalcountup++;
  $("#alltotaltime").html(alltotalcountup);
  // if(all)
};
setInterval('alltotalcount()', 1000);


let p1totalcountup = 0;
function p1totalcount(){
  p1totalcountup++;
  $("#p1totaltime").html(p1totalcountup);
};
setInterval('p1totalcount()', 1000);

let p2totalcountup = 0;
function p2totalcount(){
  p2totalcountup++;
  $("#p2totaltime").html(p2totalcountup);
};
setInterval('p2totalcount()', 1000);


let p1turncountup = 0;
function p1turncount(){
  p1turncountup++;
  $("#p1turntime").html(p1turncountup);
};
setInterval('p1turncount()', 1000);

let p2turncountup = 0;
function p2turncount(){
  p2turncountup++;
  $("#p2turntime").html(p2turncountup);
};
setInterval('p2turncount()', 1000);
