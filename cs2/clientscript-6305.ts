//
function script6305(int0: int, string0: string): [string, int, int] {
    if ((int0 >= 300)) {
        return [string0, -1, -1];
    };
    var int1 = -1;
    var string1 = "";
    var int2 = -1;
    var string2 = "";
    var int3 = -1;
    var int4 = -1;
    var string3 = "";
    stack(WORLDLIST_SPECIFIC(int0));
    [int1, string1, int2, string2, int3, int4, string3] = stack();
    if ((int1 == -1)) {
        switch (int0) {
            case 102:
            case 121:
            case 122:
            case 183:
            case 185:
            case 221: {
                if ((MAP_LANG() != 1)) {
                    var string0 = `${string0}<br><br>World details:<br>Language: German`;
                    int2 = 56;
                } else {
                    int2 = -1;
                };
                break;
            }
            case 55:
            case 118:
            case 182:
            case 184:
            case 220: {
                if ((MAP_LANG() != 2)) {
                    string0 = `${string0}<br><br>World details:<br>Language: French`;
                    int2 = 74;
                } else {
                    int2 = -1;
                };
                break;
            }
            case 47:
            case 75:
            case 94:
            case 101:
            case 146:
            case 147:
            case 188:
            case 189: {
                if ((MAP_LANG() != 3)) {
                    string0 = `${string0}<br><br>World details:<br>Language: Portuguese`;
                    int2 = 31;
                } else {
                    int2 = -1;
                };
                break;
            }
            default: {
                if ((MAP_LANG() != 0)) {
                    string0 = `${string0}<br><br>World details:<br>Language: English`;
                    int2 = 77;
                } else {
                    int2 = -1;
                };
                break;
            }
        };
    } else {
        string0 = `${string0}<br><br>World details:`;
        string0 = `${string0}<br>${inttostring(int3, 10)} online.`;
        if ((MAP_LANG() == 0)) {
            if ((STRING_LENGTH(string1) > 1)) {
                string0 = `${string0}<br>Activity: ${string1}`;
            };
            string0 = `${string0}<br>Location: ${string2}`;
        } else {
            switch (MAP_LANG()) {
                case 1: {
                    string0 = `${string0}<br>Language: German`;
                    int2 = 56;
                    break;
                }
                case 2: {
                    string0 = `${string0}<br>Language: French`;
                    int2 = 74;
                    break;
                }
                case 3: {
                    string0 = `${string0}<br>Language: Portuguese`;
                    int2 = 31;
                    break;
                }
            };
        };
        if ((TESTBIT(int1, 0) == 1)) {
            string0 = `${string0}<br>Members world.`;
        } else {
            string0 = `${string0}<br>Free world.`;
        };
        if ((TESTBIT(int1, 1) == 1)) {
            string0 = `${string0}<br>Quickchat only.`;
        };
        if ((TESTBIT(int1, 3) == 1)) {
            string0 = `${string0}<br>Lootshare available.`;
        };
        if ((TESTBIT(int1, 7) == 1)) {
            switch (enum_getvalue(0, 0, 201 as cs2enum, int0)) {
                case 1500: {
                    string0 = `${string0}<br>High level only (1500)`;
                    break;
                }
                case 2000: {
                    string0 = `${string0}<br>High level only (2000).`;
                    break;
                }
                case 2600: {
                    string0 = `${string0}<br>High level only (2600).`;
                    break;
                }
            };
        } else if ((TESTBIT(int1, 8) == 1)) {
            string0 = `${string0}<br>Veterans world.`;
        } else if ((TESTBIT(int1, 18) == 1)) {
            string0 = `${string0}<br>High level only (2000).`;
        } else if ((TESTBIT(int1, 19) == 1)) {
            string0 = `${string0}<br>High level only (2600).`;
        };
        if ((TESTBIT(int1, 22) == 1)) {
            string0 = `${string0}<br>Classic Combat Mode only.`;
        } else if ((TESTBIT(int1, 23) == 1)) {
            string0 = `${string0}<br>EoC only.`;
        };
    };
    return [string0, int1, int2];
}