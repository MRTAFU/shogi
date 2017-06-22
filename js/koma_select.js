function select(x,y){
    for(let i=0; i<=80; i++){
        if(cell[i]["x"]==x && cell[i]["y"]==y){
            if(cell[i]["koma_flg"]==1){
                if(cell[i]["cand_flg"]==0){
                    console.log("koma_type：" + cell[i]["koma_type"]);
                    if(cell[i]["koma_type"]==0){
                        // var Obj1 = document.getElementById('kiban');
                        // var Obj2 = Obj1.getElementsByTagName("td");
                        // Obj2[i].style.color = "red";
                        // }
                        // document.getElementById("tr1").style.backgroundColor="red";
                         // fu();
    
                        console.log("歩移動");
                        console.log("駒所有者：" + cell[i]["koma_own"]);
                        if(cell[i]["koma_own"]==1){
                            if(cell[i-9]["koma_flg"]==0){
                                if(cell[i-9]["cand_flg"]==0){
                                    cell[i-9]["cand_flg"]=1;
                                    cell[i-9]["koma_own"]=cell[i]["koma_own"];
                                }else if(cell[i-9]["cand_flg"]==1){
                                    cell[i-9]["cand_flg"]=0;
                                };
    
    
                                function redhighlight(){
                                    if(cell[i]["koma_own"]==1){
                                        j = i-9;
                                    }else if(cell[i]["koma_own"]==2){
                                        j = i+9;
                                    };
                                    if(cell[j]["cand_flg"]==1){
                                        console.log("movement candidate:" + "x:" + cell[j]["x"] + ", y:" + cell[j]["y"]);
                                        var t = document.getElementById('kiban');
                                        var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                                        console.log("cell turns red");
                                        // c.innerHTML = '<div class="red"></div>';
                                        c.className="red"
                                    }else if(cell[j]["cand_flg"]==0){
                                        console.log("erase candidate:" + "x:" + cell[j]["x"] + ", y:" + cell[j]["y"]);
                                        var t = document.getElementById('kiban');
                                        var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                                        console.log("cell turns default");
                                        // c.innerHTML = '';
                                        c.className="";
                                    };
                                };
                                redhighlight();
                            }else if(cell[i-9]["koma_flg"]==1){
                                if(cell[i-9]["koma_own"]==cell[i]["koma_own"]){
                                    alert("この駒は動けません");
                                }else if(cell[i-9]["koma_own"]!=cell[i]["koma_own"]){
                                    if(cell[i-9]["cand_flg"]==0){
                                        cell[i-9]["cand_flg"]=1;
                                    }else if(cell[i-9]["cand_flg"]==1){
                                        cell[i-9]["cand_flg"]=0;
                                    };
    
                                    function greenhighlight(){
                                        if(cell[i]["koma_own"]==1){
                                            j = i-9;
                                        }else if(cell[i]["koma_own"]==2){
                                            j = i+9;
                                        };
                                        if(cell[j]["cand_flg"]==1){
                                            console.log("movement candidate:" + "x:" + cell[j]["x"] + ", y:" + cell[j]["y"]);
                                            var t = document.getElementById('kiban');
                                            var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                                            console.log("cell turns green");
                                            // c.innerHTML = '<div class="green"></div>';
                                            c.className="green";
                                        }else if(cell[j]["cand_flg"]==0){
                                            console.log("erase candidate:" + "x:" + cell[j]["x"] + ", y:" + cell[j]["y"]);
                                            var t = document.getElementById('kiban');
                                            var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                                            console.log("cell turns default");
                                            // c.innerHTML = '';
                                            c.className="";
                                        };
                                    };
                                    greenhighlight();
                                };
                                
                                
                            };
                        }else if(cell[i]["koma_own"]==2){
                            if(cell[i+9]["koma_flg"]==0){
                                if(cell[i+9]["cand_flg"]==0){
                                    cell[i+9]["cand_flg"]=1;
                                    cell[i+9]["koma_own"]=cell[i]["koma_own"];
                                }else if(cell[i+9]["cand_flg"]==1){
                                    cell[i+9]["cand_flg"]=0;
                                };
    
    
                                function redhighlight(){
                                    if(cell[i]["koma_own"]==1){
                                        j = i-9;
                                    }else if(cell[i]["koma_own"]==2){
                                        j = i+9;
                                    };
                                    if(cell[j]["cand_flg"]==1){
                                        console.log("movement candidate:" + "x:" + cell[j]["x"] + ", y:" + cell[j]["y"]);
                                        var t = document.getElementById('kiban');
                                        var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                                        console.log("cell turns red");
                                        // c.innerHTML = '<div class="red"></div>';
                                        c.className="red";
                                    }else if(cell[j]["cand_flg"]==0){
                                        console.log("erase candidate:" + "x:" + cell[j]["x"] + ", y:" + cell[j]["y"]);
                                        var t = document.getElementById('kiban');
                                        var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                                        console.log("cell turns default");
                                        // c.innerHTML = '';
                                        c.className="";
                                    };
                                };
                                redhighlight();
                            }else if(cell[i+9]["koma_flg"]==1){
                                if(cell[i+9]["koma_own"]==cell[i]["koma_own"]){
                                }else if(cell[i+9]["koma_own"]!=cell[i]["koma_own"]){
                                    if(cell[i+9]["cand_flg"]==0){
                                        cell[i+9]["cand_flg"]=1;
                                    }else if(cell[i+9]["cand_flg"]==1){
                                        cell[i+9]["cand_flg"]=0;
                                    };
    
                                    function greenhighlight(){
                                        if(cell[i]["koma_own"]==1){
                                            j = i-9;
                                        }else if(cell[i]["koma_own"]==2){
                                            j = i+9;
                                        };
                                        if(cell[j]["cand_flg"]==1){
                                            console.log("movement candidate:" + "x:" + cell[j]["x"] + ", y:" + cell[j]["y"]);
                                            var t = document.getElementById('kiban');
                                            var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                                            console.log("cell turns green");
                                            // c.innerHTML = '<div class="green"></div>';
                                            c.className="green";
                                        }else if(cell[j]["cand_flg"]==0){
                                            console.log("erase candidate:" + "x:" + cell[j]["x"] + ", y:" + cell[j]["y"]);
                                            var t = document.getElementById('kiban');
                                            var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                                            console.log("cell turns default");
                                            // c.innerHTML = '';
                                            c.className="";
                                        };
                                    }; 
                                    greenhighlight();   
                                };
                            };
                        };
    
    
                    }else if(cell[i]["koma_type"]==1){
                        alert("飛車移動実装中");
                    }else if(cell[i]["koma_type"]==2){
                        alert("角行移動実装中");
                    }else if(cell[i]["koma_type"]==3){
                        alert("香車移動実装中");
                    }else if(cell[i]["koma_type"]==4){
                        alert("桂馬移動実装中");
                    }else if(cell[i]["koma_type"]==5){
                        alert("銀移動実装中");
                    }else if(cell[i]["koma_type"]==6){
                        alert("金移動実装中");
                    }else if(cell[i]["koma_type"]==7){
                        alert("玉移動実装中");
                    }else if(cell[i]["koma_type"]==8){
                        alert("と金移動実装中");
                    }else if(cell[i]["koma_type"]==9){
                        alert("龍王移動実装中");
                    }else if(cell[i]["koma_type"]==10){
                        alert("龍馬移動実装中");
                    }else if(cell[i]["koma_type"]==11){
                        alert("成香移動実装中");
                    }else if(cell[i]["koma_type"]==12){
                        alert("成桂移動実装中");
                    }else if(cell[i]["koma_type"]==13){
                        alert("成銀移動実装中");
                    };
                }else if(cell[i]["cand_flg"]==1){
                    if(cell[i]["koma_own"]==1){
                        let m = 121;
                        let set = 0;
                        do{
                            if(cell[m]["koma_flg"]==0　){
                                // alert("koma_flg:" + cell[m]["koma_flg"]);
                                // alert("koma_type:" + cell[m]["koma_type"]);
                                cell[m]["koma_flg"]=1;
                                cell[m]["koma_type"]=cell[i]["koma_type"];
                                // alert("after koma_flg:" + cell[m]["koma_flg"]);
                                // alert("after koma_type:" + cell[m]["koma_type"]);
                                set++;
                            };
                            m++;
                        }while(m<=160 && set==0);
                        if(i>=54){
                            if(i>=72 && i<=80){
                                cell[i-9]["koma_type"]=8;
                            }else if(i<=71){
                                let result = confirm('成りますか？');
                                if(result){
                                    cell[i-9]["koma_type"]=8;
                                };
                            };
                        };
                        cell[i]["koma_own"]=cell[i-9]["koma_own"];
                        cell[i-9]["koma_flg"]=0;
                        cell[i]["cand_flg"]=0;
                        cell[i]["koma_type"]=cell[i-9]["koma_type"];
                        var t = document.getElementById('kiban');
                        var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                        c.className="";
                        showkoma();
                    }else if(cell[i]["koma_own"]==2){
                        let m = 81;
                        let set = 0;
                        do{
                            if(cell[m]["koma_flg"]==0){
                                // alert("koma_flg:" + cell[m]["koma_flg"]);
                                // alert("koma_type:" + cell[m]["koma_type"]);
                                cell[m]["koma_flg"]=1;
                                cell[m]["koma_type"]=cell[i]["koma_type"];
                                // alert("after koma_flg:" + cell[m]["koma_flg"]);
                                // alert("after koma_type:" + cell[m]["koma_type"]);
                                set++;
                            };
                            m++;
                        }while(m<=120 && set==0);
                        if(i<=26){
                            if(i>=0 && i<=8){
                                cell[i+9]["koma_type"]=8;
                            }else if(i>=9){
                                let result = confirm('成りますか？');
                                if(result){
                                    cell[i+9]["koma_type"]=8;
                                };
                            };
                        };
                        cell[i]["koma_own"]=cell[i+9]["koma_own"];
                        cell[i+9]["koma_flg"]=0;
                        cell[i]["cand_flg"]=0;
                        cell[i]["koma_type"]=cell[i+9]["koma_type"];
                        var t = document.getElementById('kiban');
                        var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                        c.className="";
                        showkoma();
                    }
                };
            }else if(cell[i]["koma_flg"]==0){
                function naru(){
                    if(cell[i]["cand_flg"]==1){
                        if(cell[i]["koma_own"]==1){
                            if(i<=26){
                                if(i>=0 && i<=8){
                                    cell[i+9]["koma_type"]=8;
                                }else if(i>=9){
                                    let result = confirm('成りますか？');
                                    if(result){
                                        cell[i+9]["koma_type"]=8;
                                    };
                                };
                            };
                        }else if(cell[i]["koma_own"]==2){
                            if(i>=54){
                                if(i>=72 && i<=80){
                                    cell[i-9]["koma_type"]=8;
                                }else if(i<=71){
                                    let result = confirm('成りますか？');
                                    if(result){
                                        cell[i-9]["koma_type"]=8;
                                    };
                                };
                            };
                        };
                    }else if(cell[i]["cand_flg"]==0){
                        console.log("cell is empty");
                    };
                };
                function move(){
                    if(cell[i]["cand_flg"]==1){
                        if(cell[i]["koma_own"]==1){
                            cell[i]["cand_flg"]=0;
                            cell[i+9]["koma_flg"]= 0;
                            cell[i]["koma_flg"]= 1;
                            cell[i]["koma_type"]= cell[i+9]["koma_type"];
                            console.log("after [koma_flg:" + cell[i]["koma_flg"] + "koma_type:" + cell[i]["koma_type"] + "]");
                            var t = document.getElementById('kiban');
                            var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                            c.className="";
                        }else if(cell[i]["koma_own"]==2){
                            cell[i]["cand_flg"]=0;
                            cell[i-9]["koma_flg"]= 0;
                            cell[i]["koma_flg"]= 1;
                            cell[i]["koma_type"]= cell[i-9]["koma_type"];
                            console.log("after [koma_flg:" + cell[i]["koma_flg"] + "koma_type:" + cell[i]["koma_type"] + "]");
                            var t = document.getElementById('kiban');
                            var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                            c.className="";
                        };
                    }else if(cell[i]["cand_flg"]==0){
                        console.log("cell is empty");
                    };
                };
                
                naru();
                move();
                showkoma();
                console.log("cand_flg:" + cell[i]["cand_flg"]);
                console.log("end of movement");
            };
        }
    }
}

