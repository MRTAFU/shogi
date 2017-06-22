<?php 
session_start();
include("functions.php");
chkSSID();
 ?>


<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/style.css" rel="stylesheet">
    <!-- <link href="css/reset.css" rel="stylesheet"> -->
    <title>shogi</title>
</head>
<body>
<script src="js/jquery-2.1.3.min.js"></script> 
<script src="js/koma_set.js"></script> 
<script src="js/koma_select.js"></script> 
<script src="js/koma_reborn.js"></script> 
<!-- <script src="js/koma_movement.js"></script>  -->
<header>
  <a href="logout.php">log out</a>
</header>
<main>
<div id="wrap">
<div class="grave" id="grave2"></div>
<table id="kiban" rules="all">
<tr>
<td>0-0</td>
<td>0-1</td>
<td>0-2</td>
<td>0-3</td>
<td>0-4</td>
<td>0-5</td>
<td>0-6</td>
<td>0-7</td>
<td>0-8</td>
</tr>
<tr>
<td>1-0</td>
<td>1-1</td>
<td>1-2</td>
<td>1-3</td>
<td>1-4</td>
<td>1-5</td>
<td>1-6</td>
<td>1-7</td>
<td>1-8</td>
</tr>
<tr>
<td>2-0</td>
<td>2-1</td>
<td>2-2</td>
<td>2-3</td>
<td>2-4</td>
<td>2-5</td>
<td>2-6</td>
<td>2-7</td>
<td>2-8</td>
</tr>
<tr>
<td>3-0</td>
<td>3-1</td>
<td>3-2</td>
<td>3-3</td>
<td>3-4</td>
<td>3-5</td>
<td>3-6</td>
<td>3-7</td>
<td>3-8</td>
</tr>
<tr>
<td>4-0</td>
<td>4-1</td>
<td>4-2</td>
<td>4-3</td>
<td>4-4</td>
<td>4-5</td>
<td>4-6</td>
<td>4-7</td>
<td>4-8</td>
</tr>
<tr>
<td>5-0</td>
<td>5-1</td>
<td>5-2</td>
<td>5-3</td>
<td>5-4</td>
<td>5-5</td>
<td>5-6</td>
<td>5-7</td>
<td>5-8</td>
</tr>
<tr>
<td>6-0</td>
<td>6-1</td>
<td>6-2</td>
<td>6-3</td>
<td>6-4</td>
<td>6-5</td>
<td>6-6</td>
<td>6-7</td>
<td>6-8</td>
</tr>
<tr>
<td>7-0</td>
<td>7-1</td>
<td>7-2</td>
<td>7-3</td>
<td>7-4</td>
<td>7-5</td>
<td>7-6</td>
<td>7-7</td>
<td>7-8</td>
</tr>
<tr>
<td>8-0</td>
<td>8-1</td>
<td>8-2</td>
<td>8-3</td>
<td>8-4</td>
<td>8-5</td>
<td>8-6</td>
<td>8-7</td>
<td>8-8</td>
</tr>
</table>
<div class="grave" id="grave1"></div>
</div>


</main>
<script>
//x:0~8, y:0~8, koma_flg:[0->off, 1->on], koma_own:[1->player1, 2->player2], 
// koma_type:[0->歩,1->飛車,2->角行,3->香車,4->桂馬,5->銀,6->金,7->玉,8->と金,9->龍王,10->龍馬,11->成香,12->成桂,13->成銀],cand_flg:[0->on, 1->off]
  let cell = [{x:0, y:0, koma_flg:1, koma_own:2, koma_type:3, cand_flg:0},
              {x:0, y:1, koma_flg:1, koma_own:2, koma_type:4, cand_flg:0},
              {x:0, y:2, koma_flg:1, koma_own:2, koma_type:5, cand_flg:0},
              {x:0, y:3, koma_flg:1, koma_own:2, koma_type:6, cand_flg:0},
              {x:0, y:4, koma_flg:1, koma_own:2, koma_type:7, cand_flg:0},
              {x:0, y:5, koma_flg:1, koma_own:2, koma_type:6, cand_flg:0},
              {x:0, y:6, koma_flg:1, koma_own:2, koma_type:5, cand_flg:0},
              {x:0, y:7, koma_flg:1, koma_own:2, koma_type:4, cand_flg:0},
              {x:0, y:8, koma_flg:1, koma_own:2, koma_type:3, cand_flg:0},

              {x:1, y:0, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:1, y:1, koma_flg:1, koma_own:2, koma_type:1, cand_flg:0},
              {x:1, y:2, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:1, y:3, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:1, y:4, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:1, y:5, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:1, y:6, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:1, y:7, koma_flg:1, koma_own:2, koma_type:2, cand_flg:0},
              {x:1, y:8, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},

              {x:2, y:0, koma_flg:1, koma_own:2, koma_type:0, cand_flg:0},
              {x:2, y:1, koma_flg:1, koma_own:2, koma_type:0, cand_flg:0},
              {x:2, y:2, koma_flg:1, koma_own:2, koma_type:0, cand_flg:0},
              {x:2, y:3, koma_flg:1, koma_own:2, koma_type:0, cand_flg:0},
              {x:2, y:4, koma_flg:1, koma_own:2, koma_type:0, cand_flg:0},
              {x:2, y:5, koma_flg:1, koma_own:2, koma_type:0, cand_flg:0},
              {x:2, y:6, koma_flg:1, koma_own:2, koma_type:0, cand_flg:0},
              {x:2, y:7, koma_flg:1, koma_own:2, koma_type:0, cand_flg:0},
              {x:2, y:8, koma_flg:1, koma_own:2, koma_type:0, cand_flg:0},

              {x:3, y:0, koma_flg:0, koma_own:2, koma_type:1, cand_flg:0},
              {x:3, y:1, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:3, y:2, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:3, y:3, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:3, y:4, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:3, y:5, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:3, y:6, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:3, y:7, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:3, y:8, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},

              {x:4, y:0, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:4, y:1, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:4, y:2, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:4, y:3, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:4, y:4, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:4, y:5, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:4, y:6, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:4, y:7, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:4, y:8, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},

              {x:5, y:0, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:5, y:1, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:5, y:2, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:5, y:3, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:5, y:4, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:5, y:5, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:5, y:6, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:5, y:7, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:5, y:8, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},

              {x:6, y:0, koma_flg:1, koma_own:1, koma_type:0, cand_flg:0},
              {x:6, y:1, koma_flg:1, koma_own:1, koma_type:0, cand_flg:0},
              {x:6, y:2, koma_flg:1, koma_own:1, koma_type:0, cand_flg:0},
              {x:6, y:3, koma_flg:1, koma_own:1, koma_type:0, cand_flg:0},
              {x:6, y:4, koma_flg:1, koma_own:1, koma_type:0, cand_flg:0},
              {x:6, y:5, koma_flg:1, koma_own:1, koma_type:0, cand_flg:0},
              {x:6, y:6, koma_flg:1, koma_own:1, koma_type:0, cand_flg:0},
              {x:6, y:7, koma_flg:1, koma_own:1, koma_type:0, cand_flg:0},
              {x:6, y:8, koma_flg:1, koma_own:1, koma_type:0, cand_flg:0},

              {x:7, y:0, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:7, y:1, koma_flg:1, koma_own:1, koma_type:2, cand_flg:0},
              {x:7, y:2, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:7, y:3, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:7, y:4, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:7, y:5, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:7, y:6, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:7, y:7, koma_flg:1, koma_own:1, koma_type:1, cand_flg:0},
              {x:7, y:8, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},

              {x:8, y:0, koma_flg:1, koma_own:1, koma_type:3, cand_flg:0},
              {x:8, y:1, koma_flg:1, koma_own:1, koma_type:4, cand_flg:0},
              {x:8, y:2, koma_flg:1, koma_own:1, koma_type:5, cand_flg:0},
              {x:8, y:3, koma_flg:1, koma_own:1, koma_type:6, cand_flg:0},
              {x:8, y:4, koma_flg:1, koma_own:1, koma_type:7, cand_flg:0},
              {x:8, y:5, koma_flg:1, koma_own:1, koma_type:6, cand_flg:0},
              {x:8, y:6, koma_flg:1, koma_own:1, koma_type:5, cand_flg:0},
              {x:8, y:7, koma_flg:1, koma_own:1, koma_type:4, cand_flg:0},
              {x:8, y:8, koma_flg:1, koma_own:1, koma_type:3, cand_flg:0},

// プレーヤー１墓地
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
              {x:11, y:11, koma_flg:0, koma_own:1, koma_type:0, cand_flg:0},
// プレーヤー２墓地
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
              {x:12, y:12, koma_flg:0, koma_own:2, koma_type:0, cand_flg:0},
  ];





  // console.log(cell["koma_type"]);

  // console.log(cell["koma_flg"]);

  showkoma();

  $("#kiban td").bind('click', function(){
    $tag_td = $(this)[0];
    $tag_tr = $(this).parent()[0];
    console.log("x:%s, y:%s", $tag_tr.rowIndex, $tag_td.cellIndex);

    select($tag_tr.rowIndex,$tag_td.cellIndex);

  });



  


</script>




<?php  ?>
</body>
</html>