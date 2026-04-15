//
function script12698(): void {
    var int0 = 0;
    var int1 = 0;
    var string0 = "Are you sure you want to catch these crablets for XP?";
    var int2 = script12690();
    var int3 = 188;
    var int4 = 0;
    var int5 = -1 as stat;
    var int6 = -1 as cs2enum;
    var int7 = 1;
    while ((int4 < 5)) {
        [int0, int1] = script12691(int4);
        if ((TESTBIT(varbitplayer_33674, int4) == 1)) {
            switch (int0) {
                case 1: {
                    int5 = script2179(int1);
                    string0 = strconcat(string0, `<br>${TOSTRING_LOCALISED((script12692(int5, int2) / 10), 1)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} XP`);
                    int3 = (int3 + 12);
                    break;
                }
                case 2: {
                    int6 = enum_getvalue(0, 26, 11545 as cs2enum, int1);
                    while ((int7 <= ENUM_GETOUTPUTCOUNT(int6))) {
                        int5 = script2179(enum_getvalue(0, 0, int6, int7));
                        if (((int5 == 26 as stat) && (varbitplayer_30233 == 0))) {
                            string0 = strconcat(string0, "<br><col=ff0000>You are not eligible to gain Invention XP.</col>");
                        } else {
                            string0 = strconcat(string0, `<br><col=ffcb05>${TOSTRING_LOCALISED((script12692(int5, int2) / 10), 1)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} XP</col>`);
                        };
                        int7 = (int7 + 1);
                        int3 = (int3 + 12);
                    };
                    break;
                }
            };
        };
        int7 = 1;
        int4 = (int4 + 1);
    };
    IF_SETSIZE(356, int3, 0, 0, comp(1785, 63));
    IF_SETTEXT(string0, comp(1785, 65));
    IF_SETHIDE(false, comp(1785, 15));
    return;
}