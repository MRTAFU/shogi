<?php 
include("functions.php");

if(
    !isset($_POST["lid"]) || $_POST["lid"]=='' ||
    !isset($_POST["lpw"]) || $_POST["lpw"]==''
){
  exit('ParamError');
};


$lid = $_POST["lid"];
$lpw = $_POST["lpw"];
$kanri_flg = $_POST["kanri_flg"];


//DB接続処理
$pdo = db_con();

$sql = "SELECT id, lpw, kanri_flg FROM gs_user_table WHERE lid=:lid";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':lid', $lid,  PDO::PARAM_STR);  //Integer（数値の場合 PDO::PARAM_INT)
$status = $stmt->execute();
// var_dump($stmt);


//４．データ登録処理後
if($status==false){
  //SQL実行時にエラーがある場合（エラーオブジェクト取得して表示）
    $error = $stmt->errorInfo();
    exit("QueryError:".$error[2]);
}else{
    $row = $stmt->fetch();
    // var_dump($row);
    // echo $row["lpw"];
    if($row["lpw"]==$lpw){
        if($row["kanri_flg"]==$kanri_flg){
            if($kanri_flg==0){
                header('Location: main.php?id='.$row["id"]);
            }else if($kanri_flg==1){
                header('Location: adminmain.php?id='.$row["id"]);
            }else{
                exit('admin_flg error');
            };
        }else{
            exit('administration error');
        };
    }else{
        exit('password incorrect');
    };
    exit;
};


 ?>