//
function script9502(int0: unknown_int, int1: unknown_int): void {
    var int2 = comp(-1, 65535);
    var int3 = 0;
    var int4 = -1 as graphic;
    switch (int1) {
        case 1: {
            int4 = 18993 as graphic;
            int2 = comp(749, 61);
            break;
        }
        case 2: {
            int4 = 18997 as graphic;
            int2 = comp(749, 61);
            break;
        }
        case 3: {
            int4 = 18996 as graphic;
            int2 = comp(749, 60);
            break;
        }
        case 4: {
            int4 = 18998 as graphic;
            int2 = comp(749, 60);
            break;
        }
        case 5: {
            int4 = 19000 as graphic;
            int2 = comp(749, 59);
            break;
        }
        case 6: {
            int4 = 18999 as graphic;
            int2 = comp(749, 59);
            break;
        }
        case 7: {
            int4 = 18994 as graphic;
            int2 = comp(749, 58);
            break;
        }
        case 8: {
            int4 = 18995 as graphic;
            int2 = comp(749, 58);
            break;
        }
        case 9: {
            int4 = 18985 as graphic;
            int2 = comp(749, 56);
            break;
        }
        case 10: {
            int4 = 18989 as graphic;
            int2 = comp(749, 56);
            break;
        }
        case 11: {
            int4 = 18988 as graphic;
            int2 = comp(749, 55);
            break;
        }
        case 12: {
            int4 = 18990 as graphic;
            int2 = comp(749, 55);
            break;
        }
        case 13: {
            int4 = 18992 as graphic;
            int2 = comp(749, 54);
            break;
        }
        case 14: {
            int4 = 18991 as graphic;
            int2 = comp(749, 54);
            break;
        }
        case 15: {
            int4 = 18986 as graphic;
            int2 = comp(749, 53);
            break;
        }
        case 16: {
            int4 = 18987 as graphic;
            int2 = comp(749, 53);
            break;
        }
    };
    IF_SETHIDE(false, int2);
    CC_CREATE(int2, 5, 0);
    CC_SETPOSITION(0, 0, int3, 0);
    CC_SETGRAPHIC(int4);
    CC_SETSIZE(18, 18, 0, 0);
    return;
}