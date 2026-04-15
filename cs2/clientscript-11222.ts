//
function script11222(int0: struct, int1: int, int2: unknown_int): int {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    var string1 = "";
    CC_CREATE(comp(1139, 11), 4, int1);
    CC_SETSIZE(0, 10, 1, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETCOLOUR(script10495(3));
    if ((int0 != -1 as struct)) {
        switch (struct_getparam(int0, 4952)) {
            case 0: {
                string0 = "General";
                break;
            }
            case 1: {
                string0 = "Combat";
                break;
            }
            case 2: {
                string0 = "Gathering";
                break;
            }
            case 3: {
                string0 = "Crafting";
                break;
            }
            case 4: {
                string0 = "Lore";
                break;
            }
            case 5: {
                string0 = "Puzzle";
                break;
            }
            case 6: {
                string0 = "Race";
                break;
            }
            case 7: {
                string0 = "Skilling";
                break;
            }
            case 8: {
                string0 = "Cryptic Clue";
                break;
            }
            case 9: {
                string0 = "Celebration";
                break;
            }
        };
        CC_SETTEXT(`Event type: ${string0}`);
        if ((script11226(int0, int2) == 1)) {
            CC_SETTEXT("");
            CC_SETHIDE(true);
        };
    } else {
        CC_SETTEXT("");
        CC_SETHIDE(true);
    };
    CC_CREATE(comp(1139, 12), 4, int1);
    CC_SETSIZE(0, 10, 1, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETCOLOUR(script10495(3));
    if ((int0 != -1 as struct)) {
        switch (struct_getparam(int0, 4954)) {
            case 0: {
                string0 = "Novice";
                break;
            }
            case 1: {
                string0 = "Intermediate";
                break;
            }
            case 2: {
                string0 = "Master";
                break;
            }
            case 3: {
                string0 = "Grandmaster";
                break;
            }
        };
        CC_SETTEXT(`Difficulty: ${string0}`);
        if ((script11226(int0, int2) == 1)) {
            CC_SETTEXT("");
            CC_SETHIDE(true);
        };
    } else {
        CC_SETTEXT("");
        CC_SETHIDE(true);
    };
    return ++int1;
}