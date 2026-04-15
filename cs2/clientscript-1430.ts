//
function script1430(int0: inv, int1: component, int2: component, int3: component, int4: component): void {
    IF_SETSIZE(0, 0, 1, 1, int1);
    IF_SETSIZE(16, 0, 0, 1, int4);
    var int5 = INV_SIZE(int0);
    var int6 = IF_GETWIDTH(int1);
    var int7 = IF_GETHEIGHT(int1);
    var int8 = (36 + 2);
    var int9 = ((32 + 4) + 2);
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    [int13, int12, int10, int11, int14] = script1899(int6, int7, int8, int9, 16, int5);
    var int15 = (int9 * int13);
    if ((int14 == 1)) {
        IF_SETSIZE(16, 0, 1, 1, int1);
    } else {
        CC_DELETEALL(int4);
    };
    define_array(int12);
    var int16 = 0;
    while ((int16 < int12)) {
        pop_array(int16, script8108(int10, int11, int16));
        int16 = (int16 + 1);
    };
    int16 = 0;
    var int17 = 0;
    if ((int14 == 1)) {
        IF_SETSCROLLSIZE(0, int15, int1);
        script31(int4, int1, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    } else {
        IF_SETSCROLLSIZE(0, 0, int1);
    };
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = -1 as obj;
    var int24 = 0;
    while ((int18 < int5)) {
        int19 = MODULO(int18, int12);
        int20 = (int18 / int12);
        int21 = push_array(int19);
        int22 = ((int20 * int9) + 2);
        if ((CC_FIND(int2, int18) == 1)) {
            CC_SETPOSITION((int21 - 1), (int22 - 1), 0, 0);
        };
        if ((CC_FIND(int3, int18) == 1)) {
            CC_SETPOSITION((int21 + 3), (int22 + 1), 0, 0);
            CC_CLEAROPS();
            int23 = INVOTHER_GETOBJ(int0, int18);
            int24 = INVOTHER_GETNUM(int0, int18);
            switch (int23) {
                case 2472:
                case 2462:
                case 2464:
                case 2466:
                case 2468:
                case 2470:
                case 2460:
                case 2474:
                case 2476: {
                    int23 = 299 as obj;
                    break;
                }
            };
            if ((int23 != -1 as obj)) {
                CC_SETOBJECT(int23, int24);
                CC_SETOPBASE(OC_NAME(int23));
                CC_SETHIDE(false);
                CC_SETOP(10, "Examine<col=ff9040>");
                CC_SETOUTLINE(1);
            } else {
                CC_SETOBJECT(-1 as obj, 0);
                CC_SETHIDE(true);
                CC_SETOPBASE("");
            };
        };
        int18 = (int18 + 1);
    };
    return;
}