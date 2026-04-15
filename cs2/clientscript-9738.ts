//
function script9738(): void {
    var int0 = 0;
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = 500;
    while ((int0 < 60)) {
        int1 = enum_getvalue(0, 9, 8823 as cs2enum, int0);
        if ((int1 != comp(-1, 65535))) {
            int3 = MAX(500, ((int0 + 1) * (STAT_BASE(24 as stat) * (STAT_BASE(24 as stat) / 20))));
            if ((script1282() == 5)) {
                int3 = ADDPERCENT(int3, -7);
            };
            IF_SETTEXT(inttostring(int3, 10), int1);
        };
        if ((((((MAP_MEMBERS() == 0) && (int0 > 34)) || (varbitplayer_2363 < (int0 + 1))) || (script9743((int0 + 1)) == 1)) || (((STAT_BASE(24 as stat) + 1) / 2) < (int0 + 1)))) {
            int2 = enum_getvalue(0, 9, 8824 as cs2enum, int0);
            if ((int2 != comp(-1, 65535))) {
                IF_SETHIDE(false, int2);
                IF_CLEAROPS(enum_getvalue(0, 9, 696 as cs2enum, (int0 + 1)));
            };
        };
        int0 = (int0 + 1);
    };
    script7791(comp(940, 145), comp(940, 15));
    return;
}