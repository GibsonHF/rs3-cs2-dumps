//
function script16451(int0: dbrow, int1: unknown_int, int2: int, string0: string): [unknown_int, string, int] {
    var string1 = "";
    var int3 = 0;
    switch (int0) {
        case 5768: {
            [int3, string1] = script16453(int3, string1, varbitplayer_36906, 1, varbitplayer_36904, 255, "Help Zahra build the cactus patch.");
            break;
        }
        case 5769: {
            [int3, string1] = script16453(int3, string1, varbitplayer_45325, 1, varbitplayer_45326, 255, "Help Goob build the cactus patch.");
            break;
        }
        case 5778: {
            [int3, string1] = script16452(int3, string1, script7073(79), 2, script13298(79));
            break;
        }
        case 5785: {
            [int3, string1] = script16452(int3, string1, varbitplayer_16374, 11, "Unlock all livid farm spells.");
            [int3, string1] = script16452(int3, string1, varbitplayer_16389, 1, "Purchase a wish.");
            break;
        }
        case 7388: {
            [int3, string1] = script16452(int3, string1, varbitplayer_52991, 2, `Grove Cabin tier ${inttostring(2, 10)}.`);
            break;
        }
        case 17447:
        case 17737: {
            [int3, string1] = script16452(int3, string1, varbitplayer_60562, 6, "Craft a lute for Dalia the lumberjack.");
            break;
        }
        default: {
            return [int1, string0, int2];
        }
    };
    if ((int3 == 1)) {
        var int1 = 0;
        var int2 = script10495(6);
    };
    if ((STRING_LENGTH(string0) > 0)) {
        var string0 = `${string0}<br>${string1}`;
    } else {
        string0 = string1;
    };
    return [int1, string0, int2];
}