//
function script1162(int0: quest): string {
    var string0 = "";
    var int1 = -1;
    var int2 = 1;
    while ((int2 <= 12)) {
        int1 = -1;
        switch (int2) {
            case 1: {
                int1 = quest_getparam(int0, 7840);
                break;
            }
            case 2: {
                int1 = quest_getparam(int0, 7841);
                break;
            }
            case 3: {
                int1 = quest_getparam(int0, 7842);
                break;
            }
            case 4: {
                int1 = quest_getparam(int0, 7843);
                break;
            }
            case 5: {
                int1 = quest_getparam(int0, 7844);
                break;
            }
            case 6: {
                int1 = quest_getparam(int0, 7845);
                break;
            }
            case 7: {
                int1 = quest_getparam(int0, 7846);
                break;
            }
            case 8: {
                int1 = quest_getparam(int0, 7847);
                break;
            }
            case 9: {
                int1 = quest_getparam(int0, 7848);
                break;
            }
            case 10: {
                int1 = quest_getparam(int0, 7849);
                break;
            }
            case 11: {
                int1 = quest_getparam(int0, 7850);
                break;
            }
            case 12: {
                int1 = quest_getparam(int0, 7851);
                break;
            }
        };
        if ((int1 > -1)) {
            string0 = strconcat(string0, `${script1164(script7073(int1), 2, script2103(enum_getvalue(0, 3, 2252 as cs2enum, int1)))}<br>`);
        };
        int2 = (int2 + 1);
    };
    return string0;
}