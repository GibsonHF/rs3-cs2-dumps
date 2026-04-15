//
function script18842(int0: int): quest {
    var int1 = enum_getvalue(0, 3, 2252 as cs2enum, int0);
    if ((int1 == -1 as quest)) {
        switch (int0) {
            case 164: {
                int1 = 354 as quest;
                break;
            }
            default: {
                script12478(`Failed to find quest #${inttostring(int0, 10)} in [ql4_quests] enum.`);
                break;
            }
        };
    };
    return int1;
}