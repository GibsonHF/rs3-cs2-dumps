//
function script2128(int0: quest): [unknown_int, string] {
    var string0 = "";
    var int1 = 0;
    var int2 = QUEST_STATREQ_COUNT(int0);
    var int3 = -1 as stat;
    var int4 = 0;
    var int5 = 0;
    while ((int5 < int2)) {
        [int3, int4] = script2112(int0, (int5 + 1));
        if ((int3 != -1 as stat)) {
            int1 = 1;
            string0 = strconcat(string0, script1164(STAT_BASE(int3), int4, `Level ${inttostring(int4, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int3)}`));
            string0 = strconcat(string0, "<br>");
        };
        int5 = (int5 + 1);
    };
    return [int1, string0];
}