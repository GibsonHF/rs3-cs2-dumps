//
function script7532(int0: component, int1: component): void {
    IF_SETHIDE(true, comp(1394, 4));
    IF_SETONCLICK(callback(script7540, 1), comp(1394, 9));
    var int2 = -1;
    if ((script133(55578048, 861916671, COORD()) == 1)) {
        int2 = 7320 as cs2enum;
    } else if ((script133(pos(0,48,55,40,3), pos(0,48,54,8,60), COORD()) == 1)) {
        int2 = 11507 as cs2enum;
    };
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    IF_SETSCROLLPOS(0, 0, int0);
    if ((int2 == -1 as cs2enum)) {
        return;
    };
    var int3 = (IF_GETWIDTH(int0) / 2);
    var int4 = 0;
    var int5 = 0;
    var int6 = enum_getvalue(0, 73, int2, int5);
    while ((int6 != -1 as struct)) {
        CC_CREATE(int0, 3, int5);
        CC_SETSIZE(int3, 90, 0, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETTRANS(255);
        CC_SETOP(1, "Select");
        if ((MODULO(int5, 2) == 0)) {
            CC_SETONTIMER(callback(script7533, int0, int5, int4, 0, int2, int6));
        } else {
            CC_SETONTIMER(callback(script7533, int0, int5, int4, 2, int2, int6));
        };
        int5 = (int5 + 1);
        int6 = enum_getvalue(0, 73, int2, int5);
        if ((int6 != -1 as struct)) {
            if ((MODULO(int5, 2) == 0)) {
                int4 = (int4 + CC_GETHEIGHT());
            };
        } else {
            int4 = (int4 + CC_GETHEIGHT());
        };
    };
    if ((int4 > IF_GETHEIGHT(int0))) {
        IF_SETSCROLLSIZE(0, (int4 + 5), int0);
    } else {
        IF_SETSCROLLSIZE(0, 0, int0);
    };
    script7791(int1, int0);
    return;
}