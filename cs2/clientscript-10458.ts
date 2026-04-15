//
function script10458(int0: component, int1: component, int2: component, int3: component, int4: component, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: int): void {
    var int9 = 0;
    if (((int7 == -1) && (int2 != comp(-1, 65535)))) {
        int9 = MAX(50, MIN(int8, (IF_GETHEIGHT(int0) - IF_GETHEIGHT(int2))));
    } else {
        switch (int7) {
            case 0:
            case 1: {
                int9 = MAX(50, MIN(int8, IF_GETHEIGHT(int0)));
                break;
            }
            case 2:
            case 3: {
                int9 = MAX(50, MIN(int8, IF_GETWIDTH(int0)));
                break;
            }
        };
    };
    if ((int4 != comp(-1, 65535))) {
        if ((int8 <= int9)) {
            IF_SETSCROLLSIZE(0, 0, int3);
        } else {
            IF_SETSCROLLSIZE(0, int8, int3);
        };
        script31(int4, int3, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    };
    var int10 = -1;
    var int11 = MIN(int8, 25);
    if ((int7 == -1)) {
        var int7 = script10460(int2);
    };
    if ((IF_FIND(int1) == 1)) {
        if ((IF_GETHIDE(int1) == true)) {
            IF_SETHIDE(false, int1);
            if ((int4 != comp(-1, 65535))) {
                IF_SETHIDE(false, int4);
            };
            switch (int7) {
                case 0:
                case 1: {
                    IF_SETSIZE(IF_GETWIDTH(int1), 0, 0, 0, int1);
                    break;
                }
                case 2:
                case 3: {
                    IF_SETSIZE(0, IF_GETHEIGHT(int1), 0, 0, int1);
                    break;
                }
            };
            cc_setparam(4522, 0);
            cc_setparam(4520, 1);
            if (((cc_getparam(4521) <= 0) || (cc_getparam(4521) >= int11))) {
                cc_setparam(4521, 0);
            };
            if ((int7 == 1)) {
                int10 = 21722;
            } else if ((int7 == 0)) {
                int10 = 21770;
            };
        } else if ((cc_getparam(4520) <= 0)) {
            cc_setparam(4520, 1);
            if (((cc_getparam(4521) <= 0) || (cc_getparam(4521) >= int11))) {
                cc_setparam(4521, 0);
            };
            if ((int7 == 1)) {
                int10 = 21722;
            } else if ((int7 == 0)) {
                int10 = 21770;
            };
        } else {
            cc_setparam(4520, 0);
            if ((cc_getparam(4521) <= 0)) {
                cc_setparam(4521, MIN(int11, int9));
            };
            if ((int7 == 0)) {
                int10 = 21722;
            } else if ((int7 == 1)) {
                int10 = 21770;
            };
        };
        cc_setparam(6568, int7);
        if ((int5 != -1)) {
            stack(int10);
            stack(int5);
            IF_SETGRAPHIC();
        };
        if ((int6 != -1)) {
            stack(int10);
            stack(int6);
            IF_SETGRAPHIC();
        };
        IF_SETONTIMER(callback(script10467, int0, int1, int2, int3, int4, int5, int6, int9, int11), int0);
        script10444();
    };
    return;
}