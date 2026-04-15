//
function script3746(int0: int, int1: int): void {
    script3748();
    varclient_6409 = int0;
    if ((int1 == varclient_6410)) {
        varclient_6410 = 0;
        return;
    };
    varclient_6410 = int1;
    var int2 = 0;
    var int3 = 0;
    switch (varclient_6410) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9: {
            IF_SETHIDE(false, comp(746, 13));
            IF_SETPOSITION((50 * (varclient_6410 - 1)), -5, 0, 0, comp(746, 13));
            break;
        }
        case 10:
        case 11:
        case 12:
        case 13: {
            IF_SETHIDE(false, comp(746, 12));
            IF_SETPOSITION(0, (-5 + (50 * (varclient_6410 - 10))), 1, 0, comp(746, 12));
            break;
        }
        case 20:
        case 21:
        case 22:
        case 23: {
            IF_SETHIDE(false, comp(746, 14));
            switch (varclient_6408) {
                case 1: {
                    int2 = 0;
                    int3 = 0;
                    break;
                }
                case 6: {
                    int2 = 50;
                    int3 = 0;
                    break;
                }
                case 13: {
                    int2 = 100;
                    int3 = 0;
                    break;
                }
                case 2: {
                    int2 = 150;
                    int3 = 0;
                    break;
                }
                case 8: {
                    int2 = 200;
                    int3 = 0;
                    break;
                }
                case 14: {
                    int2 = 250;
                    int3 = 0;
                    break;
                }
                case 5: {
                    int2 = 300;
                    int3 = 0;
                    break;
                }
                case 9: {
                    int2 = 350;
                    int3 = 0;
                    break;
                }
                case 15: {
                    int2 = 400;
                    int3 = 0;
                    break;
                }
                case 3: {
                    int2 = 0;
                    int3 = 50;
                    break;
                }
                case 10: {
                    int2 = 50;
                    int3 = 50;
                    break;
                }
                case 16: {
                    int2 = 100;
                    int3 = 50;
                    break;
                }
                case 7: {
                    int2 = 150;
                    int3 = 50;
                    break;
                }
                case 11: {
                    int2 = 200;
                    int3 = 50;
                    break;
                }
                case 17: {
                    int2 = 250;
                    int3 = 50;
                    break;
                }
                case 4: {
                    int2 = 300;
                    int3 = 50;
                    break;
                }
                case 19: {
                    int2 = 350;
                    int3 = 50;
                    break;
                }
                case 18: {
                    int2 = 400;
                    int3 = 50;
                    break;
                }
                case 12: {
                    int2 = 0;
                    int3 = 100;
                    break;
                }
                case 20: {
                    int2 = 50;
                    int3 = 100;
                    break;
                }
                case 21: {
                    int2 = 100;
                    int3 = 100;
                    break;
                }
                case 22: {
                    int2 = 150;
                    int3 = 100;
                    break;
                }
                case 23: {
                    int2 = 200;
                    int3 = 100;
                    break;
                }
                case 24: {
                    int2 = 250;
                    int3 = 100;
                    break;
                }
                case 25: {
                    int2 = 300;
                    int3 = 100;
                    break;
                }
                case 26: {
                    int2 = 350;
                    int3 = 100;
                    break;
                }
                case 27: {
                    int2 = 400;
                    int3 = 100;
                    break;
                }
            };
            switch (varclient_6410) {
                case 20: {
                    int2 = (int2 - 50);
                    int3 = (int3 - 50);
                    break;
                }
                case 21: {
                    int3 = (int3 - 50);
                    break;
                }
                case 22: {
                    int2 = (int2 - 50);
                    break;
                }
                case 23: {
                    break;
                }
            };
            IF_SETPOSITION(int2, (int3 - 5), 0, 0, comp(746, 14));
            break;
        }
    };
    script3868();
    return;
}