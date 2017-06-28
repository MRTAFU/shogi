<?php
include("functions.php");
//入力チェック(受信確認処理追加)
if(
  !isset($_POST["battlename"]) || $_POST["battlename"]=="" ||
  !isset($_POST["memo"]) || $_POST["memo"]==""
){
  exit('ParamError');
}

//1. POSTデータ取得
$userid   = $_POST["userid"];
$battlename   = $_POST["battlename"];
$memo = $_POST["memo"];
$kifu = $_POST["kifu"];

//2. DB接続します(エラー処理追加)
$pdo = db_con();

//３．データ登録SQL作成
$stmt = $pdo->prepare("INSERT INTO gs_kifu_table(id, userid, battlename, memo,
indate, kifu)VALUES(NULL, :a1, :a2, :a3, sysdate(), :a4)");
$stmt->bindValue(':a1', $userid,   PDO::PARAM_STR);  //Integer（数値の場合 PDO::PARAM_INT)
$stmt->bindValue(':a2', $battlename, PDO::PARAM_STR);  //Integer（数値の場合 PDO::PARAM_INT)
$stmt->bindValue(':a3', $memo, PDO::PARAM_STR);  //Integer（数値の場合 PDO::PARAM_INT)
$stmt->bindValue(':a4', $kifu, PDO::PARAM_STR);  //Integer（数値の場合 PDO::PARAM_INT)
$status = $stmt->execute();

//４．データ登録処理後
if($status==false){
  queryError($stmt);

}else{
  //５．index.phpへリダイレクト
  header("Location: main.php");
  exit;
}
?>
