//
function script16543(int0: unknown_int): void {
    var int1 = script7799(int0, comp(34, 12));
    var int2 = script7799(int0, comp(34, 5));
    var int3 = script7799(int0, comp(34, 14));
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var string0 = "";
    var int9 = 207 as fontmetrics;
    IF_SETSIZE(24, 8, 1, 1, int2);
    var int10 = (IF_GETWIDTH(int1) - 4);
    if ((varbitplayer_38842 == 1)) {
        int6 = 40;
    };
    if ((CC_FINDBYCATEGORY(int1, 0, 2) == 1)) {
        int9 = CC_GETFONTMETRICS();
    };
    while ((int5 < 30)) {
        string0 = script2452(int5);
        if ((strcmp(string0, "") != 0)) {
            int7 = MAX(int6, script15891(string0, int10, int9, 0));
            int7 = (int7 + 4);
            if ((CC_FINDBYCATEGORY(int1, int5, 0) == 1)) {
                CC_SETPOSITION(0, int4, 0, 0);
                CC_SETSIZE(0, int7, 1, 0);
                int4 = (int4 + (int7 + 4));
                int8 = (int8 + 1);
            };
        };
        int5 = (int5 + 1);
    };
    if (((int4 < IF_GETHEIGHT(int1)) && (int8 > 0))) {
        if ((CC_FINDBYCATEGORY(int1, (int8 - 1), 0) == 1)) {
            IF_SETSIZE(CC_GETWIDTH(), (IF_GETHEIGHT(int1) - (CC_GETY() + CC_GETHEIGHT())), 0, 0, int3);
            IF_SETPOSITION(CC_GETX(), (CC_GETY() + CC_GETHEIGHT()), 0, 0, int3);
            IF_SETHIDE(false, int3);
        };
    } else {
        IF_SETHIDE(true, int3);
    };
    script6944(int0, int4);
    return;
}