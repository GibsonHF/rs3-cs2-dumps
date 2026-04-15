//
function script9330(): void {
    var int0 = 44;
    if ((script6431() == true)) {
        int0 = 52;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 8;
    var int4 = 5;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = IF_GETWIDTH(comp(517, 199));
    var int11 = IF_GETHEIGHT(comp(517, 199));
    [int1, int2] = script5788();
    var int12 = int2;
    var int13 = 0;
    var string0 = "";
    while ((int12 < 1820)) {
        if ((CC_FIND(comp(517, 201), int12) == 1)) {
            CC_SETHIDE(true);
        };
        int12 = (int12 + 1);
    };
    while ((int5 <= 15)) {
        int12 = int1;
        if ((int5 != 0)) {
            script9340(int5, int3, int4);
        };
        int8 = int3;
        int9 = int4;
        while ((int12 < int2)) {
            if (((CC_FIND(comp(517, 201), int12) == 1) && (CC_FIND[1](comp(517, 217), int12) == 1))) {
                CC_SETPOSITION(int3, int4, 0, 0);
                CC_SETHIDE(false);
                CC_SETPOSITION[1]((int3 - 8), int4, 0, 0);
                CC_SETHIDE[1](false);
                int3 = (int3 + int0);
                if (((int3 + 36) >= int10)) {
                    int3 = 8;
                    int4 = (int4 + int0);
                };
            };
            int12 = (int12 + 1);
        };
        if ((int3 == 8)) {
            script9338((8 + ((int10 / int0) * int0)), (int4 - int0), int5, 0, 1);
        } else {
            script9338(int3, int4, int5, 0, 1);
            int3 = 8;
            int4 = (int4 + int0);
        };
        int7 = int5;
        if ((int5 == 0)) {
            int5 = 2;
        } else {
            int5 = (int5 + 1);
        };
        int6 = script14372(int5);
        [int1, int2] = script5787(int6);
        if ((int1 == int2)) {
            script9338(int3, (int4 - int0), int7, 1, 0);
            int5 = 100;
        } else if ((int5 > 15)) {
            script9338(int3, (int4 - int0), int5, 1, 0);
            int5 = 100;
        } else {
            string0 = `Tab ${inttostring(int5, 10)}`;
            int13 = script5883(int6);
            if ((int13 != 0)) {
                string0 = `${string0} - ${enum_getvalue(0, 36, 8657 as cs2enum, int13)}`;
            };
            script9328(int5, int4, string0);
            int4 = (int4 + 20);
            int3 = 8;
        };
    };
    IF_SETSCROLLPOS(0, MIN(varclient_6691, int4), comp(517, 199));
    script13828(int4);
    return;
}