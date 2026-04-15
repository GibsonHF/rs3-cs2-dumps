//[proc,ignore_update]
function script129(int0: component): void {
    var int1 = 100;
    if ((PLAYERMEMBER() == true)) {
        int1 = 400;
    };
    var int2 = script12023(int0);
    var int3 = script12024(int0);
    var int4 = script12025(int0);
    var int5 = script12026(int0);
    var int6 = script14977(int0);
    var int7 = script14978(int0);
    var int8 = IGNORE_COUNT();
    if ((int8 < 0)) {
        IF_SETTEXT("Loading Ignore List.<br>Please wait.", int5);
        IF_SETHIDE(false, int5);
        IF_SETTEXT("", int4);
        return;
    };
    IF_SETTEXT(`${inttostring(int8, 10)} / ${inttostring(int1, 10)}`, int4);
    IF_SETHIDE(true, int5);
    define_array((int8 + 1));
    var int9 = 0;
    var int10 = script6431();
    var int11 = enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics);
    if ((int10 == true)) {
        int11 = enum_getvalue(25, 0, 8549 as cs2enum, 32 as fontmetrics);
    };
    int11 = (int11 + 4);
    if ((IF_GETWIDTH(int0) < 155)) {
        IF_SETHIDE(true, int4);
    } else {
        IF_SETHIDE(false, int4);
    };
    if ((IF_GETWIDTH(int0) < 125)) {
        IF_SETHIDE(true, int6);
        if ((int7 != comp(-1, 65535))) {
            IF_SETHIDE(false, int7);
        };
    } else {
        IF_SETHIDE(false, int6);
        if ((int7 != comp(-1, 65535))) {
            IF_SETHIDE(true, int7);
        };
    };
    if ((IF_GETNEXTSUBID(int2) == 0)) {
        while ((int9 < 400)) {
            CC_CREATE(int2, 4, int9);
            CC_SETSIZE(0, int11, 1, 0);
            CC_CREATE(int3, 5, int9);
            CC_SETSIZE(14, 14, 0, 0);
            int9 = (int9 + 1);
        };
        int9 = 0;
    };
    while ((int9 < int8)) {
        if ((CC_FIND(int2, int9) == 1)) {
            CC_SETHIDE(false);
            CC_SETONTIMER(callback(script12030, int0, int9));
        };
        pop_array(int9, int9);
        int9 = (int9 + 1);
    };
    while ((int9 < 400)) {
        if ((CC_FIND(int2, int9) == 1)) {
            CC_SETHIDE(true);
            cc_setparam(5434, -1);
            cc_setparam(5435, -1);
        };
        if ((CC_FIND(int3, int9) == 1)) {
            CC_SETHIDE(true);
        };
        int9 = (int9 + 1);
    };
    if ((int8 == 0)) {
        return;
    };
    pop_array(int8, -1);
    script12037(0, 0, (int8 - 1));
    IF_SETPARAM_INT(5434, push_array(0), int0);
    IF_SETPARAM_INT(5435, push_array((int8 - 1)), int0);
    IF_SETPARAM_INT(5433, -2, int0);
    int9 = 0;
    while ((int9 < int8)) {
        if ((CC_FIND(int2, push_array(int9)) == 1)) {
            cc_setparam(5434, push_array((int9 + 1)));
            if ((int9 > 0)) {
                cc_setparam(5435, push_array((int9 - 1)));
            };
        };
        int9 = (int9 + 1);
    };
    IF_SETONTIMER(callback(script12032, int0), int0);
    return;
}