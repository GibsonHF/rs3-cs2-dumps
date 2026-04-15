//
function script2127(int0: quest): [unknown_int, string] {
    var int1 = -1;
    var string0 = "";
    var int2 = 0;
    if ((int0 == -1 as quest)) {
        script12478("null .quest.");
        return [0, ""];
    };
    var string1 = "";
    var int3 = -1 as quest;
    var int4 = QUEST_QUESTREQ_COUNT(int0);
    var int5 = 1;
    while ((int5 <= int4)) {
        int1 = script2111(int0, int5);
        if ((int1 > -1)) {
            int2 = 1;
            int3 = enum_getvalue(0, 3, 2252 as cs2enum, int1);
            string1 = script2103(int3);
            string0 = `${string0}${script1164(script2193(int3), 2, string1)}<br>`;
        };
        int5 = (int5 + 1);
    };
    return [int2, string0];
}