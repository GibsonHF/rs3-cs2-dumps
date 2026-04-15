//
function script2194(int0: quest): unknown_int {
    var int1 = 1;
    var string0 = "";
    if ((int0 != -1 as quest)) {
        [int1, string0] = script7087(int0);
        if ((int1 == 0)) {
            return 0;
        };
    } else {
        string0 = script2103(int0);
        script12478(`Special quest ${string0} is missing from [ql4_quests] enum.`);
        return 0;
    };
    return 1;
}