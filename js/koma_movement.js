function fu(){
    console.log("歩移動");
    console.log("駒所有者：" + cell[i]["koma_own"]);
    if(cell[i]["koma_own"]==1){
        cell[i]["koma_flg"]= 0;
        cell[i-9]["koma_flg"]= 1;
        cell[i-9]["koma_type"]= 0;
        cell[i-9]["koma_own"] = cell[i]["koma_own"];
        console.log("koma_flg:" + cell[i-9]["koma_flg"] + "koma_type:" + cell[i-9]["koma_type"]);
    }else if(cell[i]["koma_own"]==2){
        cell[i]["koma_flg"]= 0;
        cell[i+9]["koma_flg"]= 1;
        cell[i+9]["koma_type"]= 0;
        cell[i+9]["koma_own"] = cell[i]["koma_own"];
        console.log("koma_flg:" + cell[i+9]["koma_flg"] + "koma_type:" + cell[i+9]["koma_type"]);
    }
};

function hisya(){
    console.log("飛車移動");

    cell[i]["koma_flg"]= 0;
    cell[i-9]["koma_flg"]= 1;
    cell[i-9]["koma_type"]= 0;
    cell[i-9]["koma_own"] = cell[i]["koma_own"];
    console.log("koma_flg:" + cell[i-9]["koma_flg"] + "koma_type:" + cell[i-9]["koma_type"]);
};

function kaku(){

};

function kyo(){

};

function kei(){

};

function gin(){

};

function kin(){

};

function ou(){

};

function tokin(){

};

function ryuou(){

};

function ryuma(){

};

function narikyo(){

};

function narikei(){

};

function narigin(){

};