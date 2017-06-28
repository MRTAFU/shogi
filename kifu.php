<?php 
session_start();
include("functions.php");
chkSSID();



//1.  DB接続します
$pdo = db_con();

//２．データ登録SQL作成
$stmt = $pdo->prepare("SELECT * FROM gs_user_table");
$status = $stmt->execute();

//３．データ表示
$view="";
$username="";
if($status==false){
  queryError($stmt);
}else{
  //Selectデータの数だけ自動でループしてくれる
  while( $result = $stmt->fetch(PDO::FETCH_ASSOC)){
    $view .= '<p>';
    $view .= '<a href="select.php?id='.$result["id"].'">';
    $view .= h($result["name"]);
    $view .= '</a>　';
    $view .= '</p>';
  }
}
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
<script src="js/oute.js"></script> 
<script src="js/koma_reborn.js"></script> 
<script src="js/koma_movement.js"></script> 
<script src="js/koma_highlight.js"></script> 
<script src="js/turn.js"></script>
<script src="js/counter.js"></script> 
<script src="js/kifu.js"></script> 
<header>
  <a href="select.php">棋譜一覧に戻る</a>
</header>
<main>
<div id="wrap">
<div id="itembox1">
<div class="grave" id="grave2"></div>
<!-- <div id="p2turntime">(ここに対局時間が表示されます)</div> -->
<!-- <div id="p2totaltime">(ここに対局時間が表示されます)</div> -->
</div>
<div id="itembox2">
<div id="kibanbox">
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
</div>
</div>
<div id="itembox3">
<div class="grave" id="grave1"></div>
<button>次に進む</button>
<button>一手前に戻る</button>
<button>自動再生する</button>
<button>一時停止する</button>
<button>停止する</button>
<!-- <div id="p1turntime">(ここに対局時間が表示されます)</div> -->
<!-- <div id="p1totaltime">(ここに対局時間が表示されます)</div> -->
</div>
</div>


</main>
<script>
//x:0~8, y:0~8, koma_flg:[0->off, 1->on], koma_own:[1->player1, 2->player2], 
// koma_type:[0->歩,1->飛車,2->角行,3->香車,4->桂馬,5->銀,6->金,7->玉,8->と金,9->龍王,10->龍馬,11->成香,12->成桂,13->成銀],cand_flg:[0->on, 1->off]
  let cell = [];



let movementarray = [
                          [//fu
                            [[-1,0]]
                          ],
                          [//hisya
                            [[-1,0],[-2,0],[-3,0],[-4,0],[-5,0],[-6,0],[-7,0],[-8,0]],
                            [[0,-1],[0,-2],[0,-3],[0,-4],[0,-5],[0,-6],[0,-7],[0,-8]],
                            [[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0]],
                            [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8]]
                          ],
                          [//kaku
                            [[-1,-1],[-2,-2],[-3,-3],[-4,-4],[-5,-5],[-6,-6],[-7,-7],[-8,-8]],
                            [[-1,1],[-2,2],[-3,3],[-4,4],[-5,5],[-6,6],[-7,7],[-8,8]],
                            [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8]],
                            [[1,-1],[2,-2],[3,-3],[4,-4],[5,-5],[6,-6],[7,-7],[8,-8]],
                          ],
                          [//kyo
                            [[-1,0],[-2,0],[-3,0],[-4,0],[-5,0],[-6,0],[-7,0],[-8,0]],
                          ],
                          [//kei
                            [[-2,-1]],
                            [[-2,1]]
                          ],
                          [//gin
                            [[-1,-1]],
                            [[-1,0]],
                            [[-1,1]],
                            [[1,-1]],
                            [[1,1]],
                          ],
                          [//kin
                            [[0,-1]],
                            [[-1,-1]],
                            [[-1,0]],
                            [[-1,1]],
                            [[0,1]],
                            [[1,0]]
                          ],
                          [//gyoku
                            [[0,-1]],
                            [[-1,-1]],
                            [[-1,0]],
                            [[-1,1]],
                            [[0,1]],
                            [[1,1]],
                            [[1,0]],
                            [[1,-1]]
                          ],
                          [//tokin
                            [[0,-1]],
                            [[-1,-1]],
                            [[-1,0]],
                            [[-1,1]],
                            [[0,1]],
                            [[1,0]]
                          ],
                          [//ryusya
                            [[-1,0],[-2,0],[-3,0],[-4,0],[-5,0],[-6,0],[-7,0],[-8,0]],
                            [[0,-1],[0,-2],[0,-3],[0,-4],[0,-5],[0,-6],[0,-7],[0,-8]],
                            [[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0]],
                            [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8]],
                            [[-1,-1]],
                            [[-1,1]],
                            [[1,1]],
                            [[1,-1]]
                          ],
                          [//ryuuma
                            [[-1,-1],[-2,-2],[-3,-3],[-4,-4],[-5,-5],[-6,-6],[-7,-7],[-8,-8]],
                            [[-1,1],[-2,2],[-3,3],[-4,4],[-5,5],[-6,6],[-7,7],[-8,8]],
                            [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8]],
                            [[1,-1],[2,-2],[3,-3],[4,-4],[5,-5],[6,-6],[7,-7],[8,-8]],
                            [[-1,0]],
                            [[0,-1]],
                            [[1,0]],
                            [[0,1]]
                          ],
                          [//narikyo
                            [[0,-1]],
                            [[-1,-1]],
                            [[-1,0]],
                            [[-1,1]],
                            [[0,1]],
                            [[1,0]]
                          ],
                          [//narikei
                            [[0,-1]],
                            [[-1,-1]],
                            [[-1,0]],
                            [[-1,1]],
                            [[0,1]],
                            [[1,0]]
                          ],
                          [//narigin
                            [[0,-1]],
                            [[-1,-1]],
                            [[-1,0]],
                            [[-1,1]],
                            [[0,1]],
                            [[1,0]]
                          ]
                        ];


  // console.log(cell["koma_type"]);

  // console.log(cell["koma_flg"]);

// let countup = 0;
// function totaltimecounter(){

//   // $("#totaltime").html(countup);
//   console.log(countup++);
// };
// // let timenow = totaltimecounter();
// setInterval(timenow, 1000);





showkoma();
let firstturnplayer = 1;
let turn = firstturnplayer;


$("#kiban td").bind('click', function(){
    $tag_td = $(this)[0];
    $tag_tr = $(this).parent()[0];
    console.log("x:%s, y:%s", $tag_tr.rowIndex, $tag_td.cellIndex);

    function select(x,y){
        for(let i=0; i<=80; i++){
            if(cell[i]["x"]==x && cell[i]["y"]==y){
                turncheck();
                activate(i);
                oute();
                gyokucantmove(i);
                move(i);
                oute();
                highlight(i);
                showkoma();
            };
        };
    };

    select($tag_tr.rowIndex,$tag_td.cellIndex);

});



  


</script>
<?php  ?>
</body>
</html>