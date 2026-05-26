//
function script13236(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = -1;
    switch (int0) {
        case 0: {
            int2 = 120913952;
            int3 = 120913935;
            break;
        }
        case 1: {
            int2 = 120913951;
            int3 = 120913934;
            break;
        }
        case 2: {
            int2 = 120913950;
            int3 = 120913933;
            break;
        }
        case 3: {
            int2 = 120913949;
            int3 = 120913932;
            break;
        }
        case 4: {
            int2 = 120913948;
            int3 = 120913931;
            break;
        }
        case 5: {
            int2 = 120913947;
            int3 = 120913930;
            break;
        }
        case 6: {
            int2 = 120913946;
            int3 = 120913929;
            break;
        }
        case 7: {
            int2 = 120913945;
            int3 = 120913928;
            break;
        }
        case 8: {
            int2 = 120913944;
            int3 = 120913927;
            break;
        }
        case 9: {
            int2 = 120913943;
            int3 = 120913926;
            break;
        }
        case 10: {
            int2 = 120913942;
            int3 = 120913925;
            break;
        }
        default: {
            return;
        }
    };
    if ((int1 == 1)) {
        IF_SETSIZE(145, 27, 0, 0, int2);
        IF_SETPOSITION(47, IF_GETY(int2), 2, 0, int2);
        IF_SETPOSITION(18, IF_GETY(int3), 2, 0, int3);
    } else {
        IF_SETSIZE(163, 27, 0, 0, int2);
        IF_SETPOSITION(29, IF_GETY(int2), 2, 0, int2);
        IF_SETPOSITION(0, IF_GETY(int3), 2, 0, int3);
    };
    return;
}