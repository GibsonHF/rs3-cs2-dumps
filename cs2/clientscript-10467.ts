//
function script10467(int0: component, int1: component, int2: component, int3: component, int4: component, int5: unknown_int, int6: unknown_int, int7: int, int8: int): void {
    var int9 = -1;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1;
    var int14 = 0;
    if ((int2 != comp(-1, 65535))) {
        int14 = IF_GETHEIGHT(int2);
    };
    if ((IF_FIND(int1) == 1)) {
        int9 = cc_getparam(6568);
        int10 = cc_getparam(4521);
        if ((cc_getparam(4520) <= 0)) {
            int10 = (int10 - 1);
            if ((int9 == 1)) {
                int13 = 21770;
            } else if ((int9 == 0)) {
                int13 = 21722;
            };
        } else {
            int10 = (int10 + 1);
            if ((int9 == 0)) {
                int13 = 21770;
            } else if ((int9 == 1)) {
                int13 = 21722;
            };
        };
        if ((int10 < 0)) {
            script10461(int0, int1, int2, int4);
        } else if ((int10 > MIN(int8, int7))) {
            cc_setparam(4522, 1);
            IF_SETONTIMER(callback(), int0);
            script10468(int0, 1);
        } else {
            cc_setparam(4521, int10);
            int12 = SCALE(int7, MIN(int8, int7), int10);
            int11 = (int7 - int12);
            switch (int9) {
                case 0:
                case 1: {
                    var int7 = (IF_GETHEIGHT(int0) - int7);
                    int11 = ((int7 + int11) - int14);
                    IF_SETSIZE(IF_GETWIDTH(int1), int12, 0, 0, int1);
                    IF_SETPOSITION(0, int11, 0, 0, int1);
                    break;
                }
                case 2:
                case 3: {
                    int7 = (IF_GETWIDTH(int0) - int7);
                    int11 = ((int7 + int11) - int14);
                    IF_SETSIZE(int12, IF_GETHEIGHT(int1), 0, 0, int1);
                    IF_SETPOSITION(int11, 0, 0, 0, int1);
                    break;
                }
            };
            if ((int4 != comp(-1, 65535))) {
                script72(int4, int3, 0);
            };
        };
    };
    return;
}