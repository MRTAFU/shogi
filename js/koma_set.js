
//koma_typeへ画像割りあてる処理
//showkoma()から呼ばれる。
function komaselector(komatype){
    let k = "";
    switch (komatype){
        case 0:
            k = "fu-f.png";
            break;
        case 1:
            k = "hisya-f.png";
            break;
        case 2:
            k = "kaku-f.png";
            break;
        case 3:
            k = "kyo-f.png";
            break;
        case 4:
            k = "kei-f.png";
            break;
        case 5:
            k = "gin-f.png";
            break;
        case 6:
            k = "kin.png";
            break;
        case 7:
            k = "ou.png";
            break;
        case 8:
            k = "fu-r.png";
            break;
        case 9:
            k = "hisya-r.png";
            break;
        case 10:
            k = "kaku-r.png";
            break;
        case 11:
            k = "kyo-r.png";
            break;
        case 12:
            k = "kei-r.png";
            break;
        case 13:
            k = "gin-r.png";
            break;
        default:
            alert("駒画像の読み込みに失敗しました")
            break;
    };
      return k;
};



//駒表示処理。自駒/敵駒を判定し、上下逆さまcssを呼んでる。
function showkoma(){
    for(let i=0; i<=80; i++){
        if(cell[i]["koma_flg"]==1){
            console.log("flg1")
            //komaselector()で駒種類を判別
            var image = komaselector(cell[i]["koma_type"]);
            console.log("komatype:" + cell[i]["koma_type"]);
            console.log("読み込みイメージ：" + image);
    
            var t = document.getElementById('kiban');
            var c = t.rows[cell[i]["x"]].cells[cell[i]["y"]];
            console.log("which cell:" + c.innerHTML);

            if(cell[i]["koma_own"]==1){
                console.log("プレーヤー：" + cell[i]["koma_own"]);
                c.innerHTML = '<img src="img/koma_img/' + image + '" alt="' + image + '">';
            }else if(cell[i]["koma_own"]==2){
                console.log("プレーヤー：" + cell[i]["koma_own"]);
                c.innerHTML = '<img class="enemy" src="img/koma_img/' + image + '" alt="' + image + '">';
            };
        }else{
            console.log("flg1")
            var c = t.rows[cell[i]["x"]].cells[cell[i]["y"]];
            c.innerHTML = "";
        }
    };
    $("#grave1").html('');
    $("#grave2").html('');
    for(let k=81; k<=160; k++){
        if(cell[k]["koma_flg"]==1){

            //komaselector()で駒種類を判別
            var image = komaselector(cell[k]["koma_type"]);
            console.log("komatype:" + cell[k]["koma_type"]);
            console.log("読み込みイメージ：" + image);

            if(cell[k]["koma_own"]==1){
                console.log("プレーヤー：" + cell[k]["koma_own"]);
                $("#grave1").append('<img id="' + k + '" src="img/koma_img/' + image + '" alt="' + image + '" onclick="reborn(this);">');
            }else if(cell[k]["koma_own"]==2){
                console.log("プレーヤー：" + cell[k]["koma_own"]);
                $("#grave2").append('<img id="' + k + '" class="enemy" src="img/koma_img/' + image + '" alt="' + image + '" onclick="reborn(this);">');
            };
        };
    };
};