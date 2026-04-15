//
function script11140(int0: component, int1: int, int2: int, int3: int, int4: int, int5: unknown_int, string0: string): void {
    var int6 = 17;
    var int7 = ((int3 - 4) / 2);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETGRAPHIC(19375 as graphic);
    CC_SETSIZE(int3, int6, 0, 0);
    CC_SETPOSITION(int1, int2, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script3876, string0, int0, CC_GETID()));
    var int8 = SCALE(int4, 500, 16);
    if ((int8 > int7)) {
        int8 = int7;
    };
    if ((int8 < (0 - int7))) {
        int8 = (0 - int7);
    };
    if ((int8 == 0)) {
        if ((int4 < 0)) {
            int8 = -1;
        };
        if ((int4 > 0)) {
            int8 = 1;
        };
    };
    var int9 = 0;
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    if ((int8 < 0)) {
        int9 = int8;
        int8 = (0 - int8);
        CC_SETGRAPHIC(24904 as graphic);
    } else {
        CC_SETGRAPHIC(24903 as graphic);
    };
    CC_SETTILING(true);
    CC_SETSIZE(int8, (int6 - 6), 0, 0);
    CC_SETPOSITION((((int1 + 2) + int7) + int9), (int2 + 3), 0, 0);
    return;
}