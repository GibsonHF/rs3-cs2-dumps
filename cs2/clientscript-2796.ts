//
function script2796(int0: component, int1: unknown_int): void {
    var int2 = IF_GETWIDTH(int0);
    var int3 = IF_GETHEIGHT(int0);
    var int4 = (script11319() + 1);
    var int5 = MAX(1, (int2 / int4));
    var int6 = MAX(1, (int3 / int4));
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = comp(-1, 65535);
    var int11 = comp(-1, 65535);
    var int12 = -1 as struct;
    var int13 = 50;
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int14 = 0;
    if (((int0 == comp(284, 18)) && (script6431() == true))) {
        int14 = 2;
    };
    if ((IF_FIND(int0) == 1)) {
        int10 = cc_getparam(8100);
        while (((int10 != comp(-1, 65535)) && (int13 > 0))) {
            if ((IF_FIND[1](int10) == 1)) {
                int8 = (MODULO(int7, int5) * int4);
                int9 = ((int7 / int5) * int4);
                int12 = cc_getparam[1](8106);
                if (((((int8 + int4) <= int2) && ((int9 + int4) <= int3)) && ((int0 == comp(1204, 2)) || ((int0 != comp(1204, 2)) && (script11295(int12) == 0))))) {
                    CC_SETPOSITION[1](int8, int9, int14, 0);
                    cc_setparam[1](8107, 1);
                    int7 = (int7 + 1);
                } else {
                    cc_setparam[1](8107, 0);
                };
                int11 = cc_getparam[1](8105);
                if ((int1 == 1)) {
                    CC_DELETEALL(int10);
                    script2921(int10, int12);
                };
                script10883(int10);
                int10 = int11;
            } else {
                int10 = comp(-1, 65535);
            };
            int13 = (int13 - 1);
        };
    };
    return;
}