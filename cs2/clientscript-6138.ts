//
function script6138(int0: unknown_int): void {
    var int1 = 30;
    var int2 = 180;
    var int3 = 0;
    var int4 = 14;
    var int5 = ((int2 - int1) / int4);
    var int6 = (IF_GETWIDTH(comp(1270, 13)) + int1);
    var int7 = (IF_GETHEIGHT(comp(1270, 13)) + int1);
    var int8 = comp(-1, 65535);
    var int9 = -1 as graphic;
    var int10 = (int6 / 2);
    var int11 = (int7 / 2);
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 212;
    var int16 = 324;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = true;
    var int21 = true;
    while ((int3 <= int4)) {
        int8 = script6139(int3);
        IF_SETSIZE(int6, int7, 0, 0, int8);
        if ((RANDOM(2) == 0)) {
            int9 = 19418 as graphic;
        } else {
            int9 = 19419 as graphic;
        };
        int14 = (int15 + SCALE(int3, int4, (int16 - int15)));
        int14 = SCALE((75 + RANDOM(50)), 100, int14);
        int17 = (int14 - (int14 / 20));
        int18 = (int14 + (int14 / 20));
        int19 = (4 + RANDOM(4));
        if ((RANDOM(2) == 0)) {
            int19 = (0 - int19);
        };
        if ((RANDOM(2) == 1)) {
            int20 = false;
        };
        if ((RANDOM(2) == 1)) {
            int21 = false;
        };
        switch (int3) {
            case 0: {
                CC_CREATE(int8, 5, 0);
                CC_SETSIZE(768, 512, 0, 0);
                CC_SETPOSITION(0, 0, 0, 0);
                CC_SETGRAPHIC(19421 as graphic);
                break;
            }
            case 4:
            case 8:
            case 12: {
                CC_CREATE(int8, 5, 0);
                CC_SETSIZE(int14, int14, 0, 0);
                CC_SETGRAPHIC(19420 as graphic);
                IF_SETHIDE(true, int8);
                break;
            }
            default: {
                CC_CREATE(int8, 5, 0);
                CC_SETSIZE(int14, int14, 0, 0);
                int12 = (int10 - RANDOM(int6));
                int13 = (int11 - RANDOM(int7));
                CC_SETPOSITION(int12, int13, 1, 1);
                IF_SETONTIMER(callback(script6141, -2147483645, int3, int12, int13, 0, 0, 0, 0, 0, 0, int0), int8);
                if ((int0 == 1)) {
                    CC_SETCOLOUR(script693((128 + RANDOM(120)), 0, 0));
                };
                CC_SETHFLIP(int20);
                CC_SETVFLIP(int21);
                CC_SETGRAPHIC(int9);
                break;
            }
        };
        int6 = (int6 + int5);
        int7 = (int7 + int5);
        int10 = (int6 / 2);
        int11 = (int7 / 2);
        int3 = (int3 + 1);
    };
    int10 = (IF_GETWIDTH(comp(1270, 13)) / 2);
    int11 = (IF_GETHEIGHT(comp(1270, 13)) / 2);
    script6142(int10, int11);
    varclient_1886 = (int10 * 100);
    varclient_1887 = (int11 * 100);
    return;
}