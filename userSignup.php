<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>POSTデータ登録</title>
  <link href="css/reset.css" rel="stylesheet">
  <link href="css/style.css" rel="stylesheet">
</head>
<body>

<!-- Head[Start] -->
<header>
    <nav class="navbar navbar-default">
        <div class="container-fluid"></div> 
    </nav>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->
<main>
<form method="post" action="insert.php">
  <div class="jumbotron">
   <fieldset>
    <legend>Sign Up</legend>
     <label>Name：<input type="text" name="name" placeholder="名前を入力してください"></label><br>
     <label>User ID：<input type="text" name="lid" placeholder="ID名を入力してください"></label><br>
     <label>User Password：<input type="text" name="lpw" placeholder="パスワードを入力してください"></label><br>
     <button type="submit" value="登録する">登録する</button>
    </fieldset>
  </div>
</form>
</main>
<!-- Main[End] -->


</body>
</html>
