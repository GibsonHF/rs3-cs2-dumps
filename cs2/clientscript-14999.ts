//
function script14999(int0: component, int1: component, int2: int): void {
    if ((varplayer_8745 == 5617 as dbrow)) {
        return;
    };
    var string0 = "null";
    var int3 = (IF_GETX(int0) - 101);
    var int4 = IF_GETY(int0);
    var int5 = script6003(IF_GETGRAPHIC(int0));
    int3 = MAX(int3, 20);
    int3 = MIN(int3, 230);
    if ((int4 <= 150)) {
        int4 = (int4 + 40);
    } else {
        int4 = (int4 - 50);
    };
    var int6 = 0;
    var int7 = 1;
    var int8 = 0;
    var string1 = "";
    switch (int0) {
        case 71565320: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,50,46,56,11));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,50,46,56,11));
            if ((varbitplayer_9482 == 15)) {
                int6 = 1;
            } else {
                int8 = 1;
            };
            break;
        }
        case 71565321: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,32,61,32,8));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,32,61,32,8));
            if ((varbitplayer_10236 == 190)) {
                int6 = 1;
            } else {
                int8 = 2;
            };
            break;
        }
        case 71565322: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,51,49,4,49));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,51,49,4,49));
            int6 = varbitplayer_28;
            int7 = 0;
            break;
        }
        case 71565323: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,41,52,40,21));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,41,52,40,21));
            int6 = varbitplayer_29;
            break;
        }
        case 71565324: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,45,55,12,25));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,45,55,12,25));
            int6 = varbitplayer_30;
            int7 = 0;
            break;
        }
        case 71565325: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,43,53,44,58));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,43,53,44,58));
            int6 = varbitplayer_31;
            break;
        }
        case 71565326: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,48,51,4,35));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,48,51,4,35));
            int6 = varbitplayer_32;
            int7 = 0;
            break;
        }
        case 71565327: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,47,54,44,50));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,47,54,44,50));
            int6 = varbitplayer_33;
            int7 = 0;
            break;
        }
        case 71565328: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,46,53,28,12));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,46,53,28,12));
            int6 = varbitplayer_34;
            int7 = 0;
            break;
        }
        case 71565329: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,50,50,4,22));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,50,50,4,22));
            int6 = varbitplayer_35;
            int7 = 0;
            break;
        }
        case 71565330: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,47,50,12,16));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,47,50,12,16));
            int6 = varbitplayer_36;
            int7 = 0;
            break;
        }
        case 71565331: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,42,54,4,27));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,42,54,4,27));
            int6 = varbitplayer_37;
            break;
        }
        case 71565332: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,44,53,56,51));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,44,53,56,51));
            int6 = varbitplayer_38;
            int7 = 0;
            break;
        }
        case 71565333: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,50,52,56,49));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,50,52,56,49));
            int6 = varbitplayer_39;
            int7 = 0;
            break;
        }
        case 71565337: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,39,48,4,23));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,39,48,4,23));
            int6 = varbitplayer_40;
            break;
        }
        case 71565338: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,54,54,52,60));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,54,54,52,60));
            int6 = varbitplayer_18523;
            break;
        }
        case 71565339: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,36,54,56,24));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,36,54,56,24));
            int6 = varbitplayer_18524;
            break;
        }
        case 71565340: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,42,57,32,30));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,42,57,32,30));
            int6 = varbitplayer_18525;
            break;
        }
        case 71565341: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,43,49,36,12));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,43,49,36,12));
            int6 = varbitplayer_18526;
            break;
        }
        case 71565342: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,39,44,16,56));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,39,44,16,56));
            int6 = varbitplayer_18527;
            break;
        }
        case 71565343: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,35,49,56,14));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,35,49,56,14));
            int6 = varbitplayer_18528;
            if ((varplayer_2102 < 15)) {
                int8 = 3;
            };
            break;
        }
        case 71565344: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,49,56,28,52));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,49,56,28,52));
            int6 = varbitplayer_18529;
            int7 = 0;
            break;
        }
        case 71565345: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(2,38,42,40,21));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(2,38,42,40,21));
            int6 = varbitplayer_22430;
            int7 = 0;
            break;
        }
        case 71565346: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(1,34,52,0,33));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(1,34,52,0,33));
            int6 = varbitplayer_24967;
            if ((varbitplayer_23198 < 400)) {
                int8 = 4;
            };
            break;
        }
        case 71565335: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,50,42,0,29));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,50,42,0,29));
            int6 = varbitplayer_36173;
            if ((varbitplayer_36140 < 100)) {
                int8 = 5;
            };
            break;
        }
        case 71565336: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,84,36,28,35));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,84,36,28,35));
            int6 = varbitplayer_44270;
            break;
        }
        case 71565334: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,51,55,8,6));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,51,55,8,6));
            int6 = varbitplayer_52518;
            break;
        }
        case 71565347: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(1,16,27,44,40));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(1,16,27,44,40));
            int6 = varbitplayer_53270;
            int7 = 0;
            break;
        }
        case 71565348: {
            string0 = "Teleport to J-Mod";
            string1 = "";
            int6 = 1;
            int7 = 0;
            break;
        }
        case 71565349: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,81,153,14,29));
            string1 = "";
            int7 = 0;
            int6 = 1;
            break;
        }
        case 71565350: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,59,77,57,59));
            string1 = "";
            int7 = 0;
            int6 = 1;
            break;
        }
        case 71565351: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,9,26,0,41));
            string1 = "";
            int7 = 0;
            int6 = 1;
            break;
        }
        case 71565352: {
            string0 = enum_getvalue(22, 36, 5726 as cs2enum, pos(0,54,23,20,48));
            string1 = enum_getvalue(22, 36, 16805 as cs2enum, pos(0,54,23,20,48));
            int7 = 0;
            int6 = varbitplayer_60739;
            break;
        }
    };
    var string2 = "";
    if (((int7 == 1) && (MAP_MEMBERS() == 0))) {
        int6 = 0;
        if ((PLAYERMEMBER() == false)) {
            string2 = script2519("Members' only area.<br>Tap to subscribe.", "Members' only area.<br>Click to subscribe.");
        } else {
            string2 = "This lodestone is unavailable<br>on free worlds.";
        };
    } else if ((int6 == 1)) {
        string2 = script2519("Tap to teleport to this lodestone.", `Click to teleport to<br>this lodestone.<br>${string1}`);
    } else if ((int8 == 0)) {
        string2 = script2519("This lodestone is not yet active.", "This lodestone is<br>not yet active.");
    } else {
        switch (int8) {
            case 1: {
                string2 = "Requires completing Desert Treasure.";
                break;
            }
            case 2: {
                string2 = "Requires completing Lunar Diplomacy.";
                break;
            }
            case 3: {
                string2 = "Requires starting Regicide.";
                break;
            }
            case 4: {
                string2 = "Requires completing Plague's End.";
                break;
            }
            case 5: {
                string2 = "Requires completing The Jack of Spades.";
                break;
            }
        };
    };
    if ((script6431() == true)) {
        script14996(int6, string0, string2, int0, int1, int2);
    } else {
        script9087(int6, string0, string2, int0, -1);
    };
    stack(int5);
    stack(71565355);
    IF_SETGRAPHIC();
    IF_SETPOSITION((IF_GETX(int0) - 5), (IF_GETY(int0) - 5), 0, 0, 71565354);
    IF_SETHIDE(0, 71565354);
    return;
}