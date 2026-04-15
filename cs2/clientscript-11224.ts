//
function script11224(int0: struct): void {
    IF_SETTEXT(struct_getparam(int0, 4950), comp(1139, 27));
    IF_SETTEXT(struct_getparam(int0, 4951), comp(1139, 30));
    var string0 = "general";
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
    IF_SETTEXT(`Type: ${string0}`, comp(1139, 22));
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
    IF_SETTEXT(`Difficulty: ${string0}`, comp(1139, 24));
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var string1 = "";
    int1 = struct_getparam(int0, 4955);
    if ((int1 > 0)) {
        int2 = (int1 / 100);
        if ((int2 == 1)) {
            string1 = "Time limit: 1 minute";
        } else {
            string1 = `Time limit: ${inttostring(int2, 10)} minutes`;
        };
        int3 = MODULO(int1, 100);
        if ((int3 > 0)) {
            int3 = SCALE(60, 100, int3);
            if ((int3 == 1)) {
                string1 = strconcat(string1, " 1 second");
            } else {
                string1 = strconcat(string1, ` ${inttostring(int3, 10)} seconds`);
            };
        };
        IF_SETTEXT(string1, comp(1139, 26));
    };
    IF_SETTEXT(strconcat("Rewards: ", struct_getparam(int0, 4956)), comp(1139, 25));
    return;
}