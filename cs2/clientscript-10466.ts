//
function script10466(int0: component, int1: component, int2: component, int3: component, int4: component, int5: int): void {
    var int6 = 0;
    var int7 = -1;
    if ((IF_FIND(int1) == 1)) {
        int7 = cc_getparam(6568);
        cc_setparam(4522, 1);
        cc_setparam(4520, 1);
    };
    if ((int2 != comp(-1, 65535))) {
        int6 = MIN(int5, (IF_GETHEIGHT(int0) - IF_GETHEIGHT(int2)));
        IF_SETPOSITION(0, ((IF_GETHEIGHT(int0) - int6) - IF_GETHEIGHT(int2)), 0, 0, int1);
        IF_SETSIZE(IF_GETWIDTH(int1), int6, 0, 0, int1);
    } else {
        switch (int7) {
            case 0:
            case 1: {
                int6 = MIN(int5, IF_GETHEIGHT(int0));
                IF_SETPOSITION(0, (IF_GETHEIGHT(int0) - int6), 0, 0, int1);
                IF_SETSIZE(IF_GETWIDTH(int1), int6, 0, 0, int1);
                break;
            }
            case 2:
            case 3: {
                int6 = MIN(int5, IF_GETWIDTH(int0));
                IF_SETPOSITION((IF_GETWIDTH(int0) - int6), 0, 0, 0, int1);
                IF_SETSIZE(int6, IF_GETHEIGHT(int1), 0, 0, int1);
                break;
            }
        };
    };
    if ((int4 != comp(-1, 65535))) {
        if ((int5 <= int6)) {
            IF_SETSCROLLSIZE(0, 0, int3);
        } else {
            IF_SETSCROLLSIZE(0, int5, int3);
        };
        script31(int4, int3, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    };
    IF_SETHIDE(false, int1);
    if ((int4 != comp(-1, 65535))) {
        IF_SETHIDE(false, int4);
    };
    script10468(int0, 1);
    return;
}