//
function script7987(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        var int0 = enum_getvalue(0, 9, 10364 as cs2enum, 0);
    };
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int1 = IF_GETLAYER(int0);
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    var int2 = -1;
    var int3 = 0;
    if ((enum_getreversecount(9, 10364 as cs2enum, int0) == 1)) {
        int2 = enum_getreverseindex(9, 0, 10364 as cs2enum, int0, 0);
        int3 = (IF_GETY(int0) + IF_GETHEIGHT(int0));
        while ((++int2 < ENUM_GETOUTPUTCOUNT(10364 as cs2enum))) {
            int0 = enum_getvalue(0, 9, 10364 as cs2enum, int2);
            if ((int0 != comp(-1, 65535))) {
                if (((int0 == comp(1444, 3)) && (script19316() == false))) {
                    IF_SETHIDE(true, int0);
                } else if (((int0 == comp(1444, 4)) && (varplayer_12314 <= 0))) {
                    IF_SETHIDE(true, int0);
                } else {
                    IF_SETPOSITION(0, int3, 0, 0, int0);
                    int3 = (int3 + IF_GETHEIGHT(int0));
                };
            };
        };
        IF_CALLONRESIZE(int1);
    };
    return;
}