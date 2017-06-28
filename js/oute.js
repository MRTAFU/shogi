// function tsumi(){
//   if()
// }
// function outeblock


function outecheck(){
    for(let i=0;i<=80;i++){
        if(cell[i]["p1bomb_flg"]==1 && cell[i]["koma_type"]==7 && cell[i]["koma_own"]==2){
            alert("player" + cell[i]["koma_own"] + "に王手がかかってます。" );
        }else if(cell[i]["p2bomb_flg"]==1 && cell[i]["koma_type"]==7 && cell[i]["koma_own"]==1){
            alert("player" + cell[i]["koma_own"] + "に王手がかかってます。" );
        };
    };
};

function gyokucantmove(i){
    if(cell[i]["koma_flg"]==1 && cell[i]["koma_type"]==7){
        let k = cell[i]["koma_type"];
        patternamnt = movementarray[k].length
        let patternarrayno = patternamnt -1;                   //配列の要素を指定するためにひとつ減らす。
        for(let pattern = 0; pattern<=patternarrayno; pattern++){
            let length = movementarray[k][pattern].length; //これが移動する可能性がある座標の総数。
            let coordno = length - 1;                      //配列の要素を指定する時に、0スタートだから一つ多い。
            //的に当たるまで候補フラグを立て続ける処理
            let end_flg=0;
            let j=0;
            while(end_flg==0){
                let x = 0;
                let y = 0;
                if(cell[i]["koma_own"]==1){
                    x = cell[i]["x"] + movementarray[k][pattern][j][0];
                    y = cell[i]["y"] + movementarray[k][pattern][j][1];
                }else if(cell[i]["koma_own"]==2){
                    x = cell[i]["x"] - movementarray[k][pattern][j][0];
                    y = cell[i]["y"] + movementarray[k][pattern][j][1];
                };
                if(j==coordno){
                    end_flg = 1;
                };
                if(x>=0 && x<=8 && y>=0 && y<=8){
                j++;
                //cand_flagを立てるセルを盤面から探す
                    for(let l=0; l<=80; l++){
                        if(cell[l]["x"]== x && cell[l]["y"]==y){
                            if(cell[i]["koma_own"]==1){
                                if(cell[l]["p2bomb_flg"]==1){
                                    cell[l]["cand_flg"] = 0;
                                    var t = document.getElementById('kiban');
                                    var c = t.rows[cell[l]["x"]].cells[cell[l]["y"]];
                                    c.className="";
                                };
                            }else if(cell[i]["koma_own"]==2){
                                if(cell[l]["p1bomb_flg"]==1){
                                    cell[l]["cand_flg"] = 0;
                                    var t = document.getElementById('kiban');
                                    var c = t.rows[cell[l]["x"]].cells[cell[l]["y"]];
                                    c.className="";
                                };
                            };
                        };
                    };
                }else{
                    end_flg = 1;
                };
            };
        };
    };
};



function outedeactivate(){
    for(let i=0;i<=80;i++){
        cell[i]["p1bomb_flg"]=0;
        cell[i]["p2bomb_flg"]=0;
    };
};


function oute(){
    outedeactivate();
    for(let i=0;i<=80;i++){
        if(cell[i]["koma_flg"]==1){
            let k = cell[i]["koma_type"];
            patternamnt = movementarray[k].length
            let patternarrayno = patternamnt -1;                   //配列の要素を指定するためにひとつ減らす。
            for(let pattern = 0; pattern<=patternarrayno; pattern++){
                let length = movementarray[k][pattern].length; //これが移動する可能性がある座標の総数。
                let coordno = length - 1;                      //配列の要素を指定する時に、0スタートだから一つ多い。
                //的に当たるまで候補フラグを立て続ける処理
                let end_flg=0;
                let j=0;
                while(end_flg==0){
                    let x = 0;
                    let y = 0;
                    if(cell[i]["koma_own"]==1){
                        x = cell[i]["x"] + movementarray[k][pattern][j][0];
                        y = cell[i]["y"] + movementarray[k][pattern][j][1];
                    }else if(cell[i]["koma_own"]==2){
                        x = cell[i]["x"] - movementarray[k][pattern][j][0];
                        y = cell[i]["y"] + movementarray[k][pattern][j][1];
                    };
                    if(j==coordno){
                        end_flg = 1;
                    };
                    if(x>=0 && x<=8 && y>=0 && y<=8){
                    j++;
                    //cand_flagを立てるセルを盤面から探す
                        for(let l=0; l<=80; l++){
                            if(cell[l]["x"]== x && cell[l]["y"]==y){
                                if(cell[i]["koma_own"]==1){
                                    if(cell[l]["koma_flg"]==0){
                                        cell[l]["p1bomb_flg"] = 1;
                                        // console.log("p1bomb_flg on (x,y): "+ cell[l]["x"] + "," + cell[l]["y"] );
                                    }else if(cell[l]["koma_flg"]==1){
                                        end_flg = 1;
                                        cell[l]["p1bomb_flg"] = 1;
                                        // console.log("p1bomb_flg on (x,y): "+ cell[l]["x"] + "," + cell[l]["y"] );
                                    };
                                }else if(cell[i]["koma_own"]==2){
                                    if(cell[l]["koma_flg"]==0){
                                        cell[l]["p2bomb_flg"] = 1;
                                    }else if(cell[l]["koma_flg"]==1){
                                        end_flg = 1;
                                        cell[l]["p2bomb_flg"] = 1;
                                    };
                                };
                            };
                        };
                    }else{
                        end_flg = 1;
                    };
                }
            };
        };
    };

};