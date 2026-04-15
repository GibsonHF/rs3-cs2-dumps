//
function script10227(int0: int): [unknown_int, string] {
    var string0 = "";
    var int1 = 1;
    if (((MAP_MEMBERS() == 0) && (script10755(int0) == 0))) {
        return [0, "You need to be a member to teleport here."];
    };
    switch (int0) {
        case 17: {
            if (((((((varplayer_2347 < 20) || (varbitplayer_15158 == 0)) || (STAT(16 as stat) < 70)) || (STAT(4 as stat) < 70)) || (STAT(3 as stat) < 70)) || (STAT(2 as stat) < 70))) {
                int1 = 0;
            };
            break;
        }
        case 16: {
            if (((((varplayer_2347 < 20) || (varbitplayer_15158 == 0)) || (STAT(3 as stat) < 70)) || ((STAT(16 as stat) < 60) && (STAT(2 as stat) < 60)))) {
                int1 = 0;
            };
            break;
        }
        case 14: {
            if ((((varplayer_2347 < 20) || (varbitplayer_15158 == 0)) || (STAT(2 as stat) < 70))) {
                int1 = 0;
            };
            break;
        }
        case 13: {
            if ((((varplayer_2347 < 20) || (varbitplayer_15158 == 0)) || (STAT(16 as stat) < 70))) {
                int1 = 0;
            };
            break;
        }
        case 15: {
            if (((((varplayer_2347 < 20) || (varbitplayer_15158 == 0)) || (STAT(4 as stat) < 70)) || ((STAT(16 as stat) < 60) && (STAT(2 as stat) < 60)))) {
                int1 = 0;
            };
            break;
        }
        case 1: {
            if ((varbitplayer_15344 < 10)) {
                int1 = 0;
            };
            break;
        }
        case 2: {
            if ((varbitplayer_11610 < 400)) {
                int1 = 0;
            };
            break;
        }
        case 3: {
            if ((varbitplayer_11858 < 910)) {
                int1 = 0;
            };
            break;
        }
        case 4: {
            break;
        }
        case 5: {
            break;
        }
        case 6: {
            if ((varbitplayer_9663 == 0)) {
                int1 = 0;
            };
            break;
        }
        case 7: {
            break;
        }
        case 8: {
            if ((varbitplayer_11428 < 35)) {
                int1 = 0;
            };
            break;
        }
        case 9: {
            break;
        }
        case 10: {
            if ((varbitplayer_12689 < 75)) {
                int1 = 0;
            };
            break;
        }
        case 11: {
            break;
        }
        case 12: {
            break;
        }
        case 18: {
            break;
        }
        case 19: {
            if ((varbitplayer_9663 == 0)) {
                int1 = 0;
            };
            break;
        }
        case 20: {
            break;
        }
        case 21: {
            break;
        }
        case 22: {
            break;
        }
        case 23: {
            break;
        }
        case 24: {
            break;
        }
        case 25: {
            break;
        }
        case 26: {
            break;
        }
        case 27: {
            break;
        }
        case 28: {
            if ((script680() == 0)) {
                int1 = 0;
            };
            break;
        }
        case 29: {
            break;
        }
        case 30: {
            break;
        }
        case 31: {
            break;
        }
        case 32: {
            break;
        }
        case 33: {
            break;
        }
        case 34: {
            if ((varbitplayer_48704 < 100)) {
                int1 = 0;
            };
            break;
        }
        case 35: {
            if ((varbitplayer_44469 < 50)) {
                int1 = 0;
            };
            break;
        }
        case 38: {
            break;
        }
        case 41: {
            if (((varbitplayer_53503 < 40) && (script1858(16) == 0))) {
                int1 = 0;
            };
            break;
        }
        case 42: {
            if (((script2156(507 as quest) == false) && (script20165() == 0))) {
                int1 = 0;
            };
            break;
        }
        case 43: {
            if ((script2156(513 as quest) == false)) {
                int1 = 0;
            };
            break;
        }
        case 44: {
            if (((script2156(514 as quest) == false) && (script20164() == 0))) {
                int1 = 0;
            };
            break;
        }
        case 45: {
            if (((script2156(521 as quest) == false) && (script20163() == 0))) {
                int1 = 0;
            };
            if ((script20180() == 0)) {
                int1 = 0;
            };
            break;
        }
        case 46: {
            if ((STAT(24 as stat) < 40)) {
                int1 = 0;
            };
            break;
        }
        case 47: {
            if ((script2156(526 as quest) == false)) {
                int1 = 0;
            };
            break;
        }
        case 48: {
            if ((script2156(527 as quest) == false)) {
                int1 = 0;
            };
            break;
        }
    };
    if ((int1 == 0)) {
        string0 = enum_getvalue(0, 36, 6202 as cs2enum, int0);
        if (((int0 == 45) && (script20180() == 0))) {
            string0 = "This focus requires access to Menaphos.";
        };
    };
    return [int1, string0];
}