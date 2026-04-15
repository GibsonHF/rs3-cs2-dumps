//
function script9832(int0: component, string0: string): void {
    var int1 = -1 as obj;
    var int2 = IF_GETWIDTH(int0);
    var string1 = LOWERCASE(string0);
    var int3 = ENUM_GETOUTPUTCOUNT(6245 as cs2enum);
    var int4 = (int3 + ENUM_GETOUTPUTCOUNT(8842 as cs2enum));
    var int5 = 6245 as cs2enum;
    if ((varplayer_9167 == 1)) {
        int5 = 14535 as cs2enum;
        int4 = ENUM_GETOUTPUTCOUNT(14535 as cs2enum);
        int3 = int4;
    };
    var int6 = 0;
    var int7 = 8;
    var int8 = 5;
    var int9 = 0;
    var int10 = 44;
    var int11 = 0;
    var int12 = 36;
    if ((script6431() == true)) {
        int12 = 44;
        int10 = 64;
    };
    if ((varclient_6684 == true)) {
        int8 = 20;
    };
    while ((int6 < int4)) {
        if ((CC_FIND(int0, int6) == 1)) {
            if ((int6 < int3)) {
                int1 = enum_getvalue(0, 33, int5, int6);
            } else {
                int9 = 1;
                int1 = enum_getvalue(0, 33, 8842 as cs2enum, (int6 - int3));
            };
            if (((script14437(int1, int9) == 1) && (STRING_INDEXOF_STRING(LOWERCASE(OC_NAME(script13794(int1))), string1, 0) > -1))) {
                int11 = (int11 + 1);
                CC_SETPOSITION(int7, int8, 0, 0);
                CC_SETHIDE(false);
                int7 = (int7 + int10);
                if (((int7 + int12) >= int2)) {
                    int7 = 8;
                    int8 = (int8 + int10);
                };
            } else {
                CC_SETPOSITION(0, 0, 0, 0);
                CC_SETHIDE(true);
            };
        };
        int6 = (int6 + 1);
    };
    if ((int7 > 8)) {
        int8 = (int8 + int10);
    };
    var int13 = 0;
    if ((varclient_6684 == true)) {
        int13 = IF_GETY(comp(517, 202));
        if ((int11 > 0)) {
            if ((int13 == 0)) {
                int13 = (int13 + 5);
            };
            script9328(1, int13, "Search Results: Diango");
            script15434(int11);
        } else if ((int11 == 0)) {
            if ((int13 == 0)) {
                IF_SETHIDE(false, comp(517, 198));
            };
            script10186(1, 1);
        };
        script13828((int13 + int8));
        return;
    };
    if ((int8 > IF_GETHEIGHT(comp(1387, 38)))) {
        IF_SETSCROLLSIZE(0, int8, comp(1387, 38));
        script72(comp(1387, 39), comp(1387, 38), IF_GETSCROLLY(comp(1387, 38)));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1387, 38));
        script72(comp(1387, 39), comp(1387, 38), 0);
    };
    return;
}