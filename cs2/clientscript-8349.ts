//
function script8349(int0: int, int1: int, int2: unknown_int): void {
    var int3 = 0;
    var int4 = script10405(int0);
    var int5 = struct_getparam(int4, 3511);
    var int6 = struct_getparam(int4, 3505);
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    switch (int2) {
        case 0: {
            int7 = IF_GETSCROLLWIDTH(int6);
            int3 = (int7 / 10);
            int9 = (0 - int3);
            break;
        }
        case 2: {
            int7 = IF_GETSCROLLWIDTH(int6);
            int3 = (int7 / 10);
            int9 = int3;
            break;
        }
        case 1: {
            int7 = IF_GETSCROLLHEIGHT(int6);
            int3 = (int7 / 10);
            int8 = int3;
            break;
        }
        case 3: {
            int7 = IF_GETSCROLLHEIGHT(int6);
            int3 = (int7 / 10);
            int8 = (0 - int3);
            break;
        }
    };
    if ((CC_FIND(int5, int1) == 1)) {
        CC_SETPOSITION((CC_GETX() + int8), (CC_GETY() + int9), 0, 0);
    };
    script8332(int0);
    return;
}