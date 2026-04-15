//
function script6109(int0: inv, int1: component, int2: component, int3: component, int4: component): void {
    IF_SETSIZE(0, 0, 1, 1, int1);
    IF_SETSIZE(16, 0, 0, 1, int4);
    var int5 = INV_SIZE(int0);
    var int6 = int5;
    if ((int0 == 530 as inv)) {
        int6 = MIN(int6, varplayer_8404);
    };
    var int7 = IF_GETWIDTH(int1);
    var int8 = IF_GETHEIGHT(int1);
    var int9 = (36 + 2);
    var int10 = ((32 + 4) + 2);
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    [int14, int13, int11, int12, int15] = script1899(int7, int8, int9, int10, 16, int6);
    var int16 = (int10 * int14);
    if ((int15 == 1)) {
        IF_SETSIZE(16, 0, 1, 1, int1);
    } else {
        CC_DELETEALL(int4);
    };
    define_array(int13);
    var int17 = 0;
    while ((int17 < int13)) {
        pop_array(int17, script8108(int11, int12, int17));
        int17 = (int17 + 1);
    };
    int17 = 0;
    var int18 = 0;
    if ((int15 == 1)) {
        IF_SETSCROLLSIZE(0, int16, int1);
        script31(int4, int1, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    } else {
        IF_SETSCROLLSIZE(0, 0, int1);
    };
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = -1 as obj;
    var int25 = 0;
    while ((int19 < int6)) {
        int20 = MODULO(int19, int13);
        int21 = (int19 / int13);
        int22 = push_array(int20);
        int23 = ((int21 * int10) + 2);
        if ((CC_FIND(int2, int19) == 1)) {
            CC_SETPOSITION((int22 - 1), (int23 - 1), 0, 0);
            CC_SETHIDE(false);
        };
        if ((CC_FIND(int3, int19) == 1)) {
            CC_SETPOSITION((int22 + 3), (int23 + 1), 0, 0);
            CC_CLEAROPS();
            int24 = INVOTHER_GETOBJ(int0, int19);
            int25 = INVOTHER_GETNUM(int0, int19);
            switch (int24) {
                case 2472:
                case 2462:
                case 2464:
                case 2466:
                case 2468:
                case 2470:
                case 2460:
                case 2474:
                case 2476: {
                    int24 = 299 as obj;
                    break;
                }
            };
            if ((int24 != -1 as obj)) {
                CC_SETOBJECT(int24, int25);
                CC_SETOPBASE(OC_NAME(int24));
                CC_SETHIDE(false);
                CC_SETOP(10, "Examine<col=ff9040>");
                CC_SETONMOUSEREPEAT(callback(script12093, int24, 93, int6));
                CC_SETONMOUSELEAVE(callback(script5495, -1));
                CC_SETOUTLINE(1);
            } else {
                CC_SETOBJECT(-1 as obj, 0);
                CC_SETHIDE(true);
                CC_SETOPBASE("");
            };
        };
        int19 = (int19 + 1);
    };
    while ((int19 < int5)) {
        if ((CC_FIND(int3, int19) == 1)) {
            CC_SETOBJECT(-1 as obj, 0);
            CC_SETHIDE(true);
            CC_SETOPBASE("");
        };
        if ((CC_FIND(int2, int19) == 1)) {
            CC_SETHIDE(true);
        };
        int19 = (int19 + 1);
    };
    return;
}