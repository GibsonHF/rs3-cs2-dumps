//
function script2533(int0: obj, int1: obj, int2: unknown_int, int3: unknown_int): int {
    if ((OC_UNCERT(int1) != -1 as obj)) {
        var int1 = OC_UNCERT(int1);
    };
    if ((script2536(int0, int1, int2, int3) == 0)) {
        return 0;
    };
    var int4 = 100;
    var int5 = STAT(14 as stat);
    var int6 = 0;
    if ((ACHIEVEMENT_REQSTATE(2783 as achievement) == -2)) {
        int6 = 20;
    };
    if ((ACHIEVEMENT_REQSTATE(3517 as achievement) == -2)) {
        int6 = (int6 + 10);
    };
    switch (int1) {
        case 436:
        case 438: {
            if ((int5 >= 7)) {
                int4 = (int4 + 20);
            };
            int4 = (int4 + int6);
            break;
        }
        case 440: {
            if ((int5 >= 18)) {
                int4 = (int4 + 20);
            };
            int4 = (int4 + int6);
            break;
        }
        case 453: {
            if ((int5 >= 29)) {
                int4 = (int4 + 20);
            };
            int4 = (int4 + int6);
            break;
        }
        case 447: {
            if ((int5 >= 37)) {
                int4 = (int4 + 20);
            };
            int4 = (int4 + int6);
            break;
        }
        case 449:
        case 44820: {
            if ((int5 >= 41)) {
                int4 = (int4 + 20);
            };
            int4 = (int4 + int6);
            break;
        }
        case 451: {
            if ((int5 >= 55)) {
                int4 = (int4 + 20);
            };
            int4 = (int4 + int6);
            break;
        }
        case 44822:
        case 44824: {
            if ((int5 >= 66)) {
                int4 = (int4 + 20);
            };
            int4 = (int4 + int6);
            break;
        }
        case 44826:
        case 44828: {
            if ((int5 >= 72)) {
                int4 = (int4 + 20);
            };
            int4 = (int4 + int6);
            break;
        }
        case 21778: {
            if ((int5 >= 85)) {
                int4 = (int4 + 20);
            };
            int4 = (int4 + int6);
            break;
        }
        case 44830:
        case 44832: {
            if ((int5 >= 95)) {
                int4 = (int4 + 20);
            };
            int4 = (int4 + int6);
            break;
        }
        case 57175:
        case 57177:
        case 57179:
        case 57181:
        case 57183:
        case 57185:
        case 57187:
        case 57189:
        case 57191:
        case 57193: {
            if ((int5 >= 102)) {
                int4 = (int4 + 20);
            };
            int4 = (int4 + int6);
            break;
        }
        case 44799:
        case 44800:
        case 44801:
        case 44804:
        case 44802:
        case 44803:
        case 44805:
        case 44807:
        case 44808:
        case 44806:
        case 44809:
        case 44810:
        case 44811:
        case 44812:
        case 44813:
        case 44814:
        case 44815:
        case 57174:
        case 59209: {
            int4 = 2147483647;
            break;
        }
    };
    return int4;
}