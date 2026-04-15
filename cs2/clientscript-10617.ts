//
function script10617(): [string, string, unknown_int] {
    var int0 = enum_getvalue(0, 3, 2252 as cs2enum, varbitplayer_16570);
    var string0 = "None available";
    var string1 = "Click here to view quests.";
    var int1 = 17483;
    if ((int0 != -1 as quest)) {
        string0 = script2103(int0);
        string1 = quest_getparam(int0, 5968);
    };
    return [string0, string1, int1];
}