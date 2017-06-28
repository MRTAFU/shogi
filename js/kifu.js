let kifu = [];
function addkifulist(){
  let player1 = "taro";
  let player2 = "yamada";

  let round = [];
  round.push(player1);
  round.push(player2);
  round.push(turn);
  round.push(whoseturn);
  round.push(alltotalcountup);
  round.push(cell);
  console.log(round);

  kifu.push(round);
  console.dir(kifu);
};