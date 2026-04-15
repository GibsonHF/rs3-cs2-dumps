//
function script13381(int0: int): [int, int, int, string] {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = enum_getvalue(0, 0, 12584 as cs2enum, int0);
    while ((int4 < 6)) {
        switch (int4) {
            case 0: {
                int2 = varbitplayer_35859;
                int3 = varbitplayer_35856;
                break;
            }
            case 1: {
                int2 = varbitplayer_35860;
                int3 = varbitplayer_35857;
                break;
            }
            case 2: {
                int2 = varbitplayer_35861;
                int3 = varbitplayer_35858;
                break;
            }
            case 3: {
                int2 = varbitplayer_35865;
                int3 = varbitplayer_35862;
                break;
            }
            case 4: {
                int2 = varbitplayer_35866;
                int3 = varbitplayer_35863;
                break;
            }
            case 5: {
                int2 = varbitplayer_35867;
                int3 = varbitplayer_35864;
                break;
            }
            case 6: {
                int2 = varbitplayer_35871;
                int3 = varbitplayer_35868;
                break;
            }
            case 7: {
                int2 = varbitplayer_35872;
                int3 = varbitplayer_35869;
                break;
            }
            case 8: {
                int2 = varbitplayer_35873;
                int3 = varbitplayer_35870;
                break;
            }
            case 9: {
                int2 = varbitplayer_35875;
                int3 = varbitplayer_35874;
                break;
            }
        };
        if (((int5 == int2) && (int3 != 0))) {
            int1 = (int1 + 1);
        };
        int4 = (int4 + 1);
    };
    var int6 = enum_getvalue(0, 33, 12586 as cs2enum, int5);
    var string0 = "";
    if ((int6 != -1 as obj)) {
        string0 = item_getparam(int6, 4085);
    };
    switch (int0) {
        case 0: {
            return [int1, varbitplayer_35876, int5, string0];
        }
        case 1: {
            return [int1, varbitplayer_35877, int5, string0];
        }
        case 2: {
            return [int1, varbitplayer_35878, int5, string0];
        }
        case 3: {
            return [int1, varbitplayer_35879, int5, string0];
        }
        case 4: {
            return [int1, varbitplayer_42514, int5, string0];
        }
        case 5: {
            return [int1, varbitplayer_27437, int5, string0];
        }
    };
    return [0, 0, 0, ""];
}