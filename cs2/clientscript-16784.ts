//
function script16784(int0: number, int1: number, int2: number): void {
    var int3 = 0;
    if ((int0 == 0)) {
        IF_SETGRAPHIC(-1, int2);
        return;
    };
    var int4 = -1;
    switch (int1) {
        case 1: {
            int3 = 36;
            break;
        }
        case 2: {
            int3 = 31;
            break;
        }
        case 3: {
            int3 = 26;
            break;
        }
        case 4:
        case 5: {
            int3 = 21;
            break;
        }
        case 6: {
            int3 = 16;
            break;
        }
        case 7: {
            int3 = 11;
            break;
        }
        case 8: {
            int3 = 6;
            break;
        }
        case 9:
        case 10: {
            int3 = 1;
            break;
        }
    };
    switch (int0) {
        case 1: {
            int4 = 20663;
            break;
        }
        case 2: {
            int4 = 20664;
            break;
        }
        case 3: {
            int4 = 20665;
            break;
        }
        case 4: {
            int4 = 20666;
            break;
        }
        case 5: {
            int4 = 20667;
            break;
        }
        case 6: {
            int4 = 20668;
            break;
        }
        case 7: {
            int4 = 20669;
            break;
        }
        case 8: {
            int4 = 20670;
            break;
        }
        case 9: {
            int4 = 20671;
            break;
        }
        case 10: {
            int4 = 20672;
            break;
        }
    };
    IF_SETGRAPHIC(int4, int2);
    IF_SETPOSITION(int3, 32, 1, 0, int2);
    return;
}