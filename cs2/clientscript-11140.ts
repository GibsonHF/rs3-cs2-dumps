//
function script11140(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, string0: string): void {
    var int6 = 17;
    var int7 = ((int3 - 4) / 2);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETGRAPHIC(19375);
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
        CC_SETGRAPHIC(24904);
    } else {
        CC_SETGRAPHIC(24903);
    };
    CC_SETTILING(1);
    CC_SETSIZE(int8, (int6 - 6), 0, 0);
    CC_SETPOSITION((((int1 + 2) + int7) + int9), (int2 + 3), 0, 0);
    return;
}