<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<link rel="stylesheet" href="css/style.css" />
<style>div{padding: 10px;font-size:16px;}</style>
<title>ログイン</title>
</head>
<body>

<header>
  <nav class="navbar navbar-default">LOGIN</nav>
</header>

<!-- lLOGINogin_act.php は認証処理用のPHPです。 -->
<div id="login">
<main>
<form name="form1" action="login_act.php" method="post">
<label>ID:</label><br>
<input type="text" name="lid" placeholder="IDを入力してください" /><br>
<label>PW:</label><br>
<input type="password" name="lpw" placeholder="passwordを入力してください"/><br>
<button type="submit" value="LOGIN">LOGIN</button>
</form>

</main>
</div>
<div class="link"><a href="userSignUp.php">Sign Up（新規登録）</a></div>
<div class="link"><a href="adminSignIn.php">Administrator Sign In</a></div>
</body>
</html>