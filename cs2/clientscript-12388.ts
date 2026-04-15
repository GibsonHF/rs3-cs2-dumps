//
function script12388(int0: int, int1: int): void {
    var int2 = 0;
    var int3 = 320;
    var int4 = 0;
    var int5 = 0;
    switch (int1) {
        case 1: {
            int4 = 100;
            break;
        }
        case 2: {
            int4 = 250;
            int5 = 100;
            break;
        }
        case 3: {
            int4 = 500;
            int5 = 250;
            break;
        }
        case 4: {
            int4 = 750;
            int5 = 500;
            break;
        }
        case 5: {
            int4 = 1000;
            int5 = 500;
            break;
        }
        case 6: {
            int4 = 1500;
            int5 = 1000;
            break;
        }
        case 7: {
            int4 = 2000;
            int5 = 1000;
            break;
        }
        case 8: {
            int4 = 2500;
            int5 = 2000;
            break;
        }
        case 9: {
            int4 = 3000;
            int5 = 2500;
            break;
        }
        case 10: {
            int4 = 3500;
            int5 = 3000;
            break;
        }
        case 11: {
            int4 = 4000;
            int5 = 3500;
            break;
        }
        case 12: {
            int4 = 4500;
            int5 = 4000;
            break;
        }
        case 13: {
            int4 = 5000;
            int5 = 4500;
            break;
        }
        case 14: {
            int4 = 20000;
            int5 = 0;
            var int0 = (((varbitplayer_30864 + varbitplayer_30865) + varbitplayer_30871) + varbitplayer_30870);
            break;
        }
    };
    if ((int1 == 0)) {
        int2 = int3;
    } else {
        int2 = MIN(int3, SCALE(int3, (int4 - int5), (int0 - int5)));
    };
    IF_SETSIZE(int2, 25, 0, 0, comp(1747, 38));
    return;
}