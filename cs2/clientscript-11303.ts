//
function script11303(int0: component, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    define_array(9);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 65280;
    [int2, int3] = script11304(int1);
    if ((varplayer_5228 > 0)) {
        int6 = lc_getparam(enum_getvalue(0, 30, 9969 as cs2enum, varplayer_5228), 5025);
        int7 = int6;
        int5 = (int7 * int6);
    } else {
        return;
    };
    while ((int9 < int7)) {
        while ((int8 < int6)) {
            pop_array(int10, ((int1 + (16 * int9)) + int8));
            int8 = (int8 + 1);
            int10 = (int10 + 1);
        };
        int8 = 0;
        int9 = (int9 + 1);
    };
    while ((int10 < 9)) {
        pop_array(int10, -1);
        int10 = (int10 + 1);
    };
    var int12 = 0;
    var int13 = 0;
    int10 = 0;
    while ((int10 < int5)) {
        [int12, int13] = script11304(push_array(int10));
        if (((((int12 < int2) || (int13 > 15)) || (push_array(int10) < -1)) || (script11306(push_array(int10)) == 1))) {
            int4 = 1;
            pop_array(int10, -1);
        };
        int10 = (int10 + 1);
    };
    int10 = 0;
    if ((int4 == 1)) {
        int11 = 16711680;
    };
    while ((int10 < int5)) {
        if (((push_array(int10) != -1) && (CC_FIND(int0, push_array(int10)) == 1))) {
            if (((int4 == 0) && (push_array(int10) == int1))) {
                CC_SETOP(1, "Build");
            };
            CC_SETTRANS(0);
            CC_SETCOLOUR(int11);
        };
        int10 = (int10 + 1);
    };
    return;
}