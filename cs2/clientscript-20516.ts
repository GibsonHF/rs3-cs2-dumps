//
function script20516(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(9825 as cs2enum);
    var int2 = -1 as cs2enum;
    var string0 = "";
    var int3 = 4;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    while ((int0 < int1)) {
        if (((CC_FIND(96665600, int0) == 1) && (IF_FIND[1](96665600) == 1))) {
            CC_SETPOSITION(0, int3, 2, 0);
            if ((cc_getparam[1](9396) == int0)) {
                CC_SETOP(1, "Close");
                script7872(1, 1, 1, 1);
                int4 = 0;
            } else {
                CC_SETOP(1, "Open");
                script7872(1, 1, 1, 0);
                int4 = 1;
            };
            int3 = (int3 + CC_GETHEIGHT());
            int3 = (int3 + 4);
        };
        int2 = enum_getvalue(0, 26, 9825 as cs2enum, int0);
        int5 = 0;
        int6 = ENUM_GETOUTPUTCOUNT(int2);
        while ((int5 < int6)) {
            int7 = enum_getvalue(0, 0, int2, int5);
            if ((CC_FIND(96665603, int7) == 1)) {
                CC_SETHIDE(int4);
                if ((int4 == 0)) {
                    CC_SETPOSITION(0, int3, 2, 0);
                    int3 = (int3 + CC_GETHEIGHT());
                    int3 = (int3 + 4);
                };
            };
            int5 = (int5 + 1);
        };
        int0 = (int0 + 1);
    };
    script19620(96665622, 96665604, (int3 + 4), -1, -1, 0, 0, 0);
    return;
}