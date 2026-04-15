//
function script7087(int0: quest): [int, string] {
    var string0 = "";
    var int1 = 1;
    var int2 = 0;
    var string1 = "";
    var string2 = "";
    if ((int0 == -1 as quest)) {
        return [0, ""];
    };
    switch (int0) {
        case 410: {
            [int1, string0] = script13291(int1, string0, varbitplayer_12058, "Access to the fairy ring network");
            int2 = 0;
            if ((varbitplayer_9482 > 12)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, script13299(30));
            break;
        }
        case 56: {
            if ((varbitplayer_16333 > 0)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Claim Kudos from Historian Minas in Varrock Museum for completing Shield of Arrav");
            break;
        }
        case 75: {
            [int1, string0] = script13291(int1, string0, varbitplayer_10909, "Rescue Mad Eadgar from the Troll Stronghold");
            break;
        }
        case 117: {
            if ((varplayer_2347 >= 20)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Access Trollheim by defeating Dad");
            int2 = 0;
            if ((script165() >= 100)) {
                int2 = 1;
            };
            string1 = "Fully restore Senliten from the ";
            string1 = strconcat(string1, script13293(155));
            string1 = strconcat(string1, ` quest (${inttostring(MIN(script165(), 100), 10)}%)`);
            [int1, string0] = script13291(int1, string0, int2, string1);
            break;
        }
        case 170: {
            if ((varbitplayer_11319 >= 8)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Complete the Knight Waves in Camelot");
            int2 = 0;
            [int1, string0] = script13291(int1, string0, varbitplayer_5143, "Complete the Soul Wars tutorial");
            break;
        }
        case 343: {
            if ((script165() >= 100)) {
                int2 = 1;
            };
            string1 = "Fully restore Senliten from the ";
            string1 = strconcat(string1, script13293(155));
            string1 = strconcat(string1, ` quest (${inttostring(MIN(script165(), 100), 10)}%)`);
            [int1, string0] = script13291(int1, string0, int2, string1);
            int2 = 0;
            if ((varbitplayer_9312 >= 5)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Bring Leela to Senliten's tomb");
            break;
        }
        case 391: {
            if ((varbitplayer_9312 >= 5)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Bring Leela to Senliten's tomb");
            int2 = 0;
            if ((script165() >= 100)) {
                int2 = 1;
            };
            string1 = "Fully restore Senliten from the ";
            string1 = strconcat(string1, script13293(155));
            string1 = strconcat(string1, ` quest (${inttostring(MIN(script165(), 100), 10)}%)`);
            [int1, string0] = script13291(int1, string0, int2, string1);
            break;
        }
        case 377: {
            int2 = MIN(varbitplayer_1623, 1);
            [int1, string0] = script13291(int1, string0, int2, "Access to the Ancient Cavern from Barbarian Training");
            break;
        }
        case 86: {
            if (((((STAT_BASE_ACTUAL(0 as stat) + STAT_BASE_ACTUAL(2 as stat)) >= 130) || (STAT_BASE_ACTUAL(0 as stat) >= 99)) || (STAT_BASE_ACTUAL(2 as stat) >= 99))) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Ability to enter the Warriors' Guild");
            break;
        }
        case 442: {
            if ((varbitplayer_17007 > 0)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Complete the 'Meet the Assassin' voyage in Player Owned Ports");
            break;
        }
        case 444: {
            if ((script5257(0) == 1)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Discover the island of Cyclosis in Player Owned Ports");
            break;
        }
        case 188: {
            if ((varbitplayer_1548 > 0)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Own a Player Owned House");
            break;
        }
        case 415: {
            if ((varbitplayer_9712 > 12)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, script13299(45));
            break;
        }
        case 405: {
            if ((varbitplayer_9507 >= 3)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, script13299(30));
            break;
        }
        case 409: {
            if ((varbitplayer_13194 >= 20)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, script13299(128));
            break;
        }
        case 432: {
            if ((varbitplayer_9482 > 12)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, script13299(30));
            break;
        }
        case 435: {
            if (((STAT_BASE_ACTUAL(2 as stat) >= 60) || (STAT_BASE_ACTUAL(16 as stat) >= 60))) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Access to the God Wars dungeon");
            break;
        }
        case 416:
        case 417:
        case 418:
        case 419:
        case 420: {
            if ((varbitplayer_4759 >= 3)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "You need to find and free Skaldrun from the frozen floors in Daemonheim");
            break;
        }
        case 465: {
            if ((varbitplayer_44292 == 30)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Complete the base camp tutorial on Anachronia");
            break;
        }
        case 466: {
            if (((((STAT_BASE(26 as stat) >= 85) || (STAT_BASE(12 as stat) >= 85)) || (STAT_BASE(20 as stat) >= 85)) || (STAT_BASE(13 as stat) >= 85))) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "You need a level of at least 85 in Crafting, Runecrafting, Smithing or Invention");
            break;
        }
        case 464: {
            if ((varbitplayer_41815 == 7)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Complete the introduction to the player-owned farm with Granny Potterington");
            break;
        }
        case 473: {
            if ((varbitplayer_46463 >= 100)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Complete the Archaeology tutorial by speaking to Acting Guildmaster Reiniger at the Varrock dig site.");
            break;
        }
        case 481: {
            if ((varbitplayer_47082 == 6)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Complete the Eyes in Their Stars mystery");
            int2 = 0;
            if ((varbitplayer_49743 == 1)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Meet Naressa in Senntisten");
            break;
        }
        case 487: {
            if ((script4253() >= 5)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Infernal Puzzle Box Tier 5");
            break;
        }
        case 490: {
            if ((script15809(2) >= 1)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Town Hall Tier 1");
            int2 = 0;
            if ((script15809(3) >= 1)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Command Centre Tier 1");
            int2 = 0;
            if ((script15809(1) >= 1)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Workshop Tier 1");
            int2 = 0;
            if ((script15809(4) >= 1)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Chapel Tier 1");
            break;
        }
        case 500: {
            if ((varbitplayer_53611 == 1)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Collect a set of necromancer robes from Sostratus");
            break;
        }
        case 496: {
            if ((varbitplayer_53627 >= 3000)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, `${TOSTRING_LOCALISED(3000, 1)} City of Um vessel souls.`);
            break;
        }
        case 499: {
            if ((varbitplayer_53627 >= 30000)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, `${TOSTRING_LOCALISED(30000, 1)} City of Um vessel souls.`);
            break;
        }
        case 507: {
            if ((script15809(20) >= 1)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Grove Cabin Tier 1");
            int2 = 0;
            if ((script15809(24) >= 1)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Botanist's Workbench Tier 1");
            int2 = 0;
            break;
        }
        case 522: {
            if ((varbitplayer_46650 == 1)) {
                int2 = 1;
            };
            [int1, string0] = script13291(int1, string0, int2, "Complete the Wing Out mystery");
            break;
        }
        default: {
            string2 = script2103(int0);
            script12478(`(.quest: ${string0}) has param=quest_requires_special,true but no case in [proc,ql4_special_requirements_string].`);
            return [0, ""];
        }
    };
    if ((STRING_LENGTH(string0) > 0)) {
        string0 = `${string0}<br>`;
    };
    return [int1, string0];
}