//
function script20895(string0: string): [number, string] {
    if ((STRING_LENGTH(string0) <= 0)) {
        return [string0, 0];
    };
    var int0 = 0;
    var int1 = 0;
    while ((int0 == 0)) {
        stack(int1);
        int1 = (int1 + 1);
        switch () {
            case 0: {
                [string0, int0] = script612(string0, "2a", "second-age", 1);
                break;
            }
            case 1: {
                [string0, int0] = script612(string0, "3a", "third age", 1);
                break;
            }
            case 2: {
                [string0, int0] = script612(string0, "mw", "masterwork", 1);
                break;
            }
            case 3: {
                [string0, int0] = script612(string0, "d ", "dragon", 1);
                break;
            }
            case 4: {
                [string0, int0] = script612(string0, "r ", "rune", 1);
                break;
            }
            case 5: {
                [string0, int0] = script612(string0, "g ", "granite", 1);
                break;
            }
            case 6: {
                [string0, int0] = script612(string0, "tmw", "trimmed masterwork", 1);
                break;
            }
            case 7: {
                [string0, int0] = script612(string0, "gr ", "greater", 1);
                break;
            }
            case 8: {
                [string0, int0] = script612(string0, "abby", "abyssal", 1);
                break;
            }
            case 9: {
                [string0, int0] = script612(string0, "addy", "adamant", 1);
                break;
            }
            case 10: {
                [string0, int0] = script612(string0, "obby", "obsidian", 1);
                break;
            }
            case 11: {
                [string0, int0] = script612(string0, "dhide", "dragonhide", 1);
                break;
            }
            case 12: {
                [string0, int0] = script612(string0, "scimmy", "scimitar", 0);
                break;
            }
            default: {
                return [string0, 0];
            }
        };
    };
    return [string0, int0];
}