//
function script8469(int0: component, int1: inv): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    [int2, int3, int4, int5, int6, int7, int8, int9, int9, int9, int9, int9] = script8472(int0);
    if (((((int6 == comp(-1, 65535)) || (int7 == comp(-1, 65535))) || (int8 == comp(-1, 65535))) || (int3 == comp(-1, 65535)))) {
        return;
    };
    if ((int3 != comp(-1, 65535))) {
        CC_DELETEALL(int3);
    };
    if ((int4 != comp(-1, 65535))) {
        CC_DELETEALL(int4);
    };
    CC_DELETEALL(int6);
    CC_DELETEALL(int7);
    CC_DELETEALL(int8);
    var int10 = 0;
    var int11 = INV_SIZE(int1);
    var int12 = 0;
    var int13 = 0;
    var int14 = 36;
    var int15 = 36;
    var int16 = script6431();
    while ((int10 < int11)) {
        if ((script8477(int10, int1) == 1)) {
            if ((int16 == true)) {
                int14 = 44;
                int15 = 44;
                int12 = ((int14 - 44) / 2);
                int13 = ((int15 - 39) / 2);
            } else {
                int14 = 36;
                int15 = 36;
            };
        } else {
            int14 = 0;
            int15 = 0;
        };
        script8473(int6, int10, 0, 0, int14, int15, 18269 as graphic);
        CC_SETTRANS(80);
        script9229(int8, int10, int14, int15);
        script8473(int7, int10, int12, int13, int14, int15, -1 as graphic);
        int10 = (int10 + 1);
    };
    if ((int5 != comp(-1, 65535))) {
        IF_SETSIZE(0, 0, 1, 1, int0);
    };
    return;
}