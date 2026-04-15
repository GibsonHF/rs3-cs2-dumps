//
function script19521(int0: int, int1: unknown_int): void {
    var int2 = 44;
    if ((script6431() == true)) {
        int2 = 52;
    };
    var int3 = MAX(1, (IF_GETWIDTH(comp(1313, 74)) / int2));
    var int4 = 0;
    var int5 = -1 as cs2enum;
    switch (int0) {
        case 4: {
            int4 = 19;
            int5 = 974 as cs2enum;
            break;
        }
        case 1: {
            int4 = ENUM_GETOUTPUTCOUNT(15583 as cs2enum);
            int5 = 15583 as cs2enum;
            break;
        }
        default: {
            return;
        }
    };
    define_array(int4);
    var int6 = 0;
    var int7 = 0;
    switch (int0) {
        case 4: {
            int6 = script19505(0, int1);
            break;
        }
        case 1: {
            int6 = script19506(0, int1);
            break;
        }
        default: {
            return;
        }
    };
    if ((int6 == 0)) {
        IF_SETHIDE(false, comp(1313, 72));
        while ((int7 < 200)) {
            if ((CC_FIND(comp(1313, 75), int7) == 1)) {
                CC_SETHIDE(true);
            };
            int7 = (int7 + 1);
        };
        IF_SETSCROLLPOS(0, 0, comp(1313, 74));
        script19503(0);
        return;
    };
    define_array[65536](int4);
    define_array[131072](int4);
    var int8 = 0;
    var int9 = 5;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var string0 = "";
    while ((int7 < int4)) {
        int11 = push_array(int7);
        if ((int11 > 0)) {
            if ((int5 != -1 as cs2enum)) {
                string0 = enum_getvalue(0, 36, int5, int7);
            };
            script19522(int7, int9, string0);
            pop_array[2](int7, (int9 + 20));
            int10 = (int11 / int3);
            if ((MODULO(int11, int3) > 0)) {
                int10 = (int10 + 1);
            };
            int9 = ((int9 + 15) + (int10 * int2));
        };
        int8 = int9;
        int7 = (int7 + 1);
    };
    int7 = 0;
    var int13 = script19579();
    var int14 = -1;
    var int15 = 8;
    while ((int7 < int13)) {
        if ((CC_FIND(comp(1313, 75), int7) == 1)) {
            int14 = cc_getparam(3844);
            if ((int14 != -1)) {
                int9 = (push_array[2](int14) + ((push_array[1](int14) / int3) * int2));
                int15 = (8 + (MODULO(push_array[1](int14), int3) * int2));
                CC_SETPOSITION(int15, int9, 0, 0);
                CC_SETHIDE(false);
                pop_array[1](int14, (push_array[1](int14) + 1));
            } else {
                CC_SETHIDE(true);
            };
        };
        int7 = (int7 + 1);
    };
    script19544(int8);
    IF_SETHIDE(true, comp(1313, 72));
    script19503(int6);
    return;
}