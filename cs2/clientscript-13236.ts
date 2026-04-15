//
function script13236(int0: int, int1: unknown_int): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 0: {
            int2 = comp(1845, 32);
            int3 = comp(1845, 15);
            break;
        }
        case 1: {
            int2 = comp(1845, 31);
            int3 = comp(1845, 14);
            break;
        }
        case 2: {
            int2 = comp(1845, 30);
            int3 = comp(1845, 13);
            break;
        }
        case 3: {
            int2 = comp(1845, 29);
            int3 = comp(1845, 12);
            break;
        }
        case 4: {
            int2 = comp(1845, 28);
            int3 = comp(1845, 11);
            break;
        }
        case 5: {
            int2 = comp(1845, 27);
            int3 = comp(1845, 10);
            break;
        }
        case 6: {
            int2 = comp(1845, 26);
            int3 = comp(1845, 9);
            break;
        }
        case 7: {
            int2 = comp(1845, 25);
            int3 = comp(1845, 8);
            break;
        }
        case 8: {
            int2 = comp(1845, 24);
            int3 = comp(1845, 7);
            break;
        }
        case 9: {
            int2 = comp(1845, 23);
            int3 = comp(1845, 6);
            break;
        }
        case 10: {
            int2 = comp(1845, 22);
            int3 = comp(1845, 5);
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