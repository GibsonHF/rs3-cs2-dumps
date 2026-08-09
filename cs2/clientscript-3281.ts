//
function script3281(): string {
    var int0 = 0;
    var string0 = "Someone in Amberfell sent a message asking for help from Wendlewick.<br><br>   The message was sent last night, by someone who left the village and went to the river.<br><br>   I need to look for clues and talk to the villagers to work out who it was.<br><br>   If I find out that someone is lying about their actions last night, it's likely that they're my contact.<br><br>CLUES:<br><br>";
    var int1 = script2248();
    if ((int1 == 0)) {
        string0 = strconcat(string0, "I've not found any clues yet.");
        return string0;
    };
    var int2 = 1;
    var int3 = -1;
    while ((int2 <= int1)) {
        CC_SETPARAM_STRING(unk11050(1490960, int2, 3, 0), 1490944, 1, -1, 0);
        int3 = dbrow_findnext();
        if ((int3 == -1)) {
            unk11016(`No clue has order index: ${inttostring(int2, 10)}. $total_clues_found was ${inttostring(int1, 10)}.`);
        } else {
            string0 = strconcat(string0, dbrow_getfield(int3, 1490976, 0));
        };
        int2 = (int2 + 1);
    };
    return string0;
}