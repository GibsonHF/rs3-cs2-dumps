//
function script17887(int0: obj, int1: struct, int2: dbrow, int3: int, int4: int, int5: graphic): string {
    var string0 = "";
    var string1 = "";
    var int6 = -1 as struct;
    if ((int1 != -1 as struct)) {
        string1 = script17935(int1);
    };
    switch (int4) {
        case 0: {
            string0 = OC_DESC(int0);
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = item_getparam(int0, 4085);
            };
            break;
        }
        case 1: {
            if ((int1 == -1 as struct)) {
                return string0;
            };
            switch (struct_getparam(int1, 2531)) {
                case 2: {
                    string0 = `Unlocks the '${string1}' cosmetic override.`;
                    break;
                }
                case 5: {
                    switch (struct_getparam(int1, 2532)) {
                        case 2: {
                            string0 = `Unlocks the '${string1}' companion pet.`;
                            break;
                        }
                        case 3: {
                            string0 = `Unlocks the '${string1}' follower pet.`;
                            break;
                        }
                        default: {
                            string0 = `Unlocks the '${string1}' pet.`;
                            break;
                        }
                    };
                    break;
                }
                case 4: {
                    switch (struct_getparam(int1, 2532)) {
                        case 7: {
                            int6 = struct_getparam(int1, 8950);
                            if ((int6 != -1 as struct)) {
                                string0 = `Unlocks the '${string1}' ability override for the ${struct_getparam(int6, 2794)} ability.`;
                            } else {
                                string0 = `Unlocks the '${string1}' ability override.`;
                            };
                            if ((struct_getparam(int1, 5166) != -1 as cs2enum)) {
                                string0 = strconcat(string0, "<br>This override has multiple variants. You are viewing a random variant.");
                            };
                            break;
                        }
                        case 0: {
                            string0 = `Unlocks the '${string1}' tool override.`;
                            break;
                        }
                        case 4: {
                            string0 = `Unlocks the '${string1}' overhead skilling icon.`;
                            break;
                        }
                    };
                    break;
                }
                case 3: {
                    string0 = strconcat(`Unlocks the '${string1}' title.<br>`, script4693(struct_getparam(int1, 2543), GENDER()));
                    break;
                }
                default: {
                    script12478("Unsupported mtxmgt reward");
                    break;
                }
            };
            break;
        }
        case 3: {
            return "A currency used to purchase items within the Hero Store.";
        }
        case 4:
        case 5: {
            if ((int2 == -1 as dbrow)) {
                return string0;
            };
            string0 = `${script17916(int2)}<br>`;
            string0 = strconcat(string0, "Expires at the end of this pass.");
            if ((int4 == 4)) {
                string0 = strconcat(string0, "<br>Can be activated in the buffs tab.");
            } else {
                string0 = strconcat(string0, "<br>Find out more in the buffs tab.");
            };
            break;
        }
        case 6: {
            return `Boosts you by ${inttostring(10, 10)} levels in the next Hero Pass. This reward will automatically be applied when you login to the next Hero Pass for the first time.`;
        }
        default: {
            script12478("No name specified for data.");
            break;
        }
    };
    return string0;
}