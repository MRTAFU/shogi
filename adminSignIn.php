<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/reset.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> 
<title>adminSignIn</title>

<header>
  <nav class="navbar navbar-default">
    <div class="container-fluid"></div>
    <!-- <div class="navbar-header"><a class="navbar-brand" href="select.php">データ一覧</a></div> -->
  </nav>
</header>
<main>
<form method="POST" action="gate.php">
    <legend>Administrator sign in</legend>
        <fieldset>
              <label>ID:<input type="text" name="lid" placeholder="IDを入力してください"></label><br>
              <label>パスワード:<input type="text" name="lpw" placeholder="パスワードを入力してください"></label><br>
              <input type="hidden" name="kanri_flg" value="1">
              <button type="submit" value="send">sign in</button><br>
        </fieldset>
</form>
</main>
<div class="link"><a href="login.php">User Sign In</a></div>

<script></script>

<?php  ?>
</body>
</html>