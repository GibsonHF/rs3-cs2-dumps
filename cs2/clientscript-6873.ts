//
function script6873(): void {
    var int0 = 2345 as cs2enum;
    var int1 = 2343 as cs2enum;
    var int2 = 2344;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    if (((int0 != -1 as cs2enum) && (int1 != -1 as cs2enum))) {
        int4 = ENUM_GETOUTPUTCOUNT(int0);
        while ((int3 < int4)) {
            CC_CREATE(comp(1311, 504), 3, int5);
            CC_SETSIZE(18, 18, 0, 0);
            if ((MODULO(int3, 2) == 0)) {
                CC_SETPOSITION(5, (35 + (int3 * 12)), 0, 0);
            } else {
                CC_SETPOSITION(5, (35 + ((int3 - 1) * 12)), 2, 0);
            };
            CC_SETFILL(1);
            CC_SETCOLOUR(enum_getvalue(0, 0, int1, int3));
            CC_SETOP(1, "Select-primary-colour");
            if ((varbitplayer_688 == 1)) {
                CC_SETOP(2, "Select-secondary-colour");
            };
            int5 = (int5 + 1);
            CC_CREATE(comp(1311, 504), 5, int5);
            if ((MODULO(int3, 2) == 0)) {
                CC_SETPOSITION(4, (34 + (int3 * 12)), 0, 0);
            } else {
                CC_SETPOSITION(4, (34 + ((int3 - 1) * 12)), 2, 0);
            };
            CC_SETSIZE(20, 20, 0, 0);
            script14990(0, string0);
            int5 = (int5 + 1);
            int3 = (int3 + 1);
        };
        script6875();
    };
    return;
}