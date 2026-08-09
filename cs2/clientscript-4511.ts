//
function script4511(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    var int8 = 0;
    var int9 = -1;
    var int10 = 0;
    var int11 = -1;
    var int12 = -1;
    stack(int0);
    int9 = (int9 + 1);
    while ((CC_FIND(int9) == 1)) {
        if ((cc_getparam(7188) == int3)) {
            if ((cc_getparam(7193) != -1)) {
                int8 = cc_getparam(7193);
                cc_setparam(7193, (int8 + 1));
            };
            if ((cc_getparam(7191) == 1)) {
                int10 = 1;
            };
        };
    };
    var int13 = -1;
    var int14 = -1;
    var int15 = -1;
    [int13, int14, int15] = script6195(int2);
    if ((int13 != -1)) {
        if ((int8 < 4)) {
            if (((int5 == -1) && (int14 != -1))) {
                var int5 = int14;
            };
            if (((int6 == -1) && (int15 != -1))) {
                var int6 = int15;
            };
            script4490(int13, int5, int6, int3, int4, int8, 0, int2, int7);
        } else {
            [int11, int12] = script4492(int4);
            if ((int10 == 1)) {
                script5155(48496641, int11, (int8 - 1), 0);
            } else {
                script5155(48496641, int11, (int8 - 2), 1);
            };
        };
    };
    return;
}