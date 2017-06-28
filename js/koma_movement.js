function naru(i){
    if( cell[i]["koma_type"]==0 || 
        cell[i]["koma_type"]==1 || 
        cell[i]["koma_type"]==2 || 
        cell[i]["koma_type"]==3 || 
        cell[i]["koma_type"]==4 || 
        cell[i]["koma_type"]==5
      ){
        let result = false;
        if(cell[i]["koma_own"]==1){
            if(cell[i]["x"]==2){
                    result = confirm('成りますか？');
            }else if(cell[i]["x"]==1){
                if(cell[i]["koma_type"]==4){
                    result = true;
                }else{
                  result = confirm('成りますか？');
                };
            }else if(cell[i]["x"]==0){
                if(cell[i]["koma_type"]==0 || cell[i]["koma_type"]==3 || cell[i]["koma_type"]==4){
                    result = true;
                }else{
                  result = confirm('成りますか？');
                };
            };
        }else if(cell[i]["koma_own"]==2){
            if(cell[i]["x"]==6){
                    result = confirm('成りますか？');
            }else if(cell[i]["x"]==7){
                if(cell[i]["koma_type"]==4){
                    result = true;
                }else{
                  result = confirm('成りますか？');
                };
            }else if(cell[i]["x"]==8){
                if(cell[i]["koma_type"]==0 || cell[i]["koma_type"]==3 || cell[i]["koma_type"]==4){
                    result = true;
                }else{
                  result = confirm('成りますか？');
                };
            };
        };
        if(result){
            switch (cell[i]["koma_type"]){
                case 0:
                    cell[i]["koma_type"]=8;
                    // console.log("naru komatype:" + cell[i]["koma_type"]);
                    break;
                case 1:
                    cell[i]["koma_type"]=9;
                    // console.log("naru komatype:" + cell[i]["koma_type"]);
                    break;
                case 2:
                    cell[i]["koma_type"]=10;
                    // console.log("naru komatype:" + cell[i]["koma_type"]);
                    break;
                case 3:
                    cell[i]["koma_type"]=11;
                    // console.log("naru komatype:" + cell[i]["koma_type"]);
                    break;
                case 4:
                    cell[i]["koma_type"]=12;
                    // console.log("naru komatype:" + cell[i]["koma_type"]);
                    break;
                case 5:
                    cell[i]["koma_type"]=13;
                    // console.log("naru komatype:" + cell[i]["koma_type"]);
                    break;        
            };

        };
    };
};




function komadori(i){
    if(cell[i]["koma_flg"]==1){
        //駒を取った時に成り駒を元に戻して、墓地に移す。
        let komatype = cell[i]["koma_type"];
        switch (komatype){
            case 8:
                cell[i]["koma_type"] = 0;
                break;
            case 9:
                cell[i]["koma_type"] = 1;
                break;
            case 10:
                cell[i]["koma_type"] = 2;
                break;
            case 11:
                cell[i]["koma_type"] = 3;
                break;
            case 12:
                cell[i]["koma_type"] = 4;
                break;
            case 13:
                cell[i]["koma_type"] = 5;
                break;
        };
        if(cell[i]["koma_own"]==1){
            let m = 121;
            let set = 0;
            do{
                if(cell[m]["koma_flg"]==0　){
                    cell[m]["koma_flg"]=1;
                    cell[m]["koma_type"]=cell[i]["koma_type"];
                    set++;
                };
                m++;
            }while(m<=160 && set==0);
        }else if(cell[i]["koma_own"]==2){
            let m = 81;
            let set = 0;
            do{
                if(cell[m]["koma_flg"]==0){
                    cell[m]["koma_flg"]=1;
                    cell[m]["koma_type"]=cell[i]["koma_type"];
                    set++;
                };
                m++;
            }while(m<=120 && set==0);
        };
    };
};





function move(i){
    if(cell[i]["cand_flg"]==1){
        komadori(i);
        for(let j=0;j<=160;j++){

            if(cell[j]["pre_flg"]==1){

                cell[i]["koma_type"]=cell[j]["koma_type"];
                cell[i]["koma_own"]=cell[j]["koma_own"];
                cell[i]["koma_flg"]=1;
                cell[i]["cand_flg"]=0;

                cell[j]["koma_flg"]=0;
                cell[j]["pre_flg"]=0;
                // console.log("moved to (x,y):" + cell[i]["x"] + "," + cell[i]["y"]);
                if(j<=80){
                    naru(i);
                };
            };
        };
        shiftdeactivate(i);
        oute();
        outecheck();
        addkifulist();
        turn++;
        console.log("turn: " + turn);

    };
};




function shiftdeactivate(i){
    if(cell[i]["koma_flg"]==1 && cell[i]["cand_flg"]==0){
        for(let j=0;j<=160;j++){
            if(cell[j]["cand_flg"]==1){
                cell[j]["cand_flg"]=0;
            };
            if(cell[j]["pre_flg"]==1){
                cell[j]["pre_flg"]=0;
            };
        };
    };
};



function activate(i){

    if(cell[i]["koma_flg"]==1){
        if(cell[i]["cand_flg"]==0){
            if(cell[i]["pre_flg"]==0){
                shiftdeactivate(i);
                cell[i]["pre_flg"] = 1;
                // console.log("pre_flg: " + cell[i]["pre_flg"] + "  (x,y): " + cell[i]["x"] + "," + cell[i]["y"]);
                let k = cell[i]["koma_type"];
                // console.log("k:koma_type:"+k);
                patternamnt = movementarray[k].length
                // console.log("k要素の構成パターン数:"+ patternamnt);
                let patternarrayno = patternamnt -1;                   //配列の要素を指定するためにひとつ減らす。
                // console.log("パターンの要素max.no." + patternarrayno);
                    for(let pattern = 0; pattern<=patternarrayno; pattern++){
                      // console.log("pattern:"+ pattern);
                        let length = movementarray[k][pattern].length; //これが移動する可能性がある座標の総数。
                        // console.log("length:"+length);
                        let coordno = length - 1;                      //配列の要素を指定する時に、0スタートだから一つ多い。
                        // console.log("length" + coordno);
                        //的に当たるまで候補フラグを立て続ける処理
                        let end_flg=0;
                        let j=0;
                        while(end_flg==0){
                            // console.log(end_flg);
                            // console.log(movementarray[k][pattern][j]);
                            let x = null;
                            let y = null;
                            // console.log("whoseturn: " + whoseturn);
                            if(cell[i]["koma_own"]==1 && whoseturn==1){
                                // console.log(cell[i]);
                                x = cell[i]["x"] + movementarray[k][pattern][j][0];
                                y = cell[i]["y"] + movementarray[k][pattern][j][1];
                                // console.log("cand_flagを立てる　x:"+ x + ",y:" + y);
                            }else if(cell[i]["koma_own"]==2 && whoseturn==2){
                                x = cell[i]["x"] - movementarray[k][pattern][j][0];
                                y = cell[i]["y"] + movementarray[k][pattern][j][1];
                                // console.log("cand_flagを立てる　x:"+ x + ",y:" + y);
                            };
                            // console.log("coordno before:" + coordno);
                            if(j==coordno){
                                end_flg = 1;
                                // console.log("これ以上動くパターンないよ");
                            };
                            if(x>=0 && x<=8 && y>=0 && y<=8){
                            j++;
                            //cand_flagを立てるセルを盤面から探す
                                for(let l=0; l<=80; l++){
                                    if(cell[l]["x"]== x && cell[l]["y"]==y){
                                        //選駒移動候補フラグ判定処理-オフの時に立てる=======================================
                                        if(cell[l]["cand_flg"]==0){
                                            if(cell[l]["koma_flg"]==0){
                                                cell[l]["cand_flg"]=1;
                                            }else if(cell[l]["koma_flg"]==1){
                                                end_flg = 1;
                                                // console.log("駒にぶつかったよend:" + end_flg);
                                                if(cell[l]["koma_own"]!=cell[i]["koma_own"]){
                                                     cell[l]["cand_flg"]=1;
                                                     // console.log("敵駒だよcand:" + cell[l]["cand_flg"]);
                                                };
                                            };
                                        };
                                    };
                                };
                            }else{
                                end_flg = 1;
                                // console.log("盤の外だからエンドフラグがたったよ");
                            };
                        }
                    };
            }else if(cell[i]["pre_flg"]==1){
                shiftdeactivate(i);
                // console.log("deactivate preselection");
            };
        };
        // console.log("pre_flg: " + cell[i]["pre_flg"] + "  (x,y): " + cell[i]["x"] + "," + cell[i]["y"]);
    };
};