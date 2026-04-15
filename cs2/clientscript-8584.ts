//
function script8584(int0: stat, int1: int, int2: quest): [string, unknown_int] {
    if ((int2 == -1 as quest)) {
        script12478(`$quest for ${inttostring(int1, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int0)} is null`);
        return ["", 0];
    };
    if ((script2156(int2) == true)) {
        return ["", 0];
    };
    var int3 = STAT_BASE(int0);
    var int4 = 0;
    var int5 = 0;
    if (((int2 == 86 as quest) && ((int0 == 2 as stat) || (int0 == 0 as stat)))) {
        if ((int0 == 0 as stat)) {
            int4 = STAT_BASE_ACTUAL(2 as stat);
            int5 = varclient_1470;
        } else {
            int4 = STAT_BASE_ACTUAL(0 as stat);
            int5 = varclient_1469;
        };
        if ((((int1 + int5) < 130) && ((int3 + int4) >= 130))) {
            return script8583(int0, int3, int2);
        };
        return ["", 0];
    };
    var int6 = QUEST_STATREQ_COUNT(int2);
    var int7 = -1 as stat;
    var int8 = 0;
    var int9 = 0;
    while ((int9 < int6)) {
        [int7, int8] = script2112(int2, (int9 + 1));
        if ((int7 == -1 as stat)) {
            return ["", 0];
        };
        if ((((int7 == int0) && (int3 >= int8)) && (int1 < int8))) {
            return script8582(int0, int8, int2);
        };
        int9 = (int9 + 1);
    };
    return ["", 0];
}