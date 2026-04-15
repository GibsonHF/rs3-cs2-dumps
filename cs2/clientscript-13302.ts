//
function script13302(int0: int): [int, string] {
    var int1 = 0;
    var int2 = 0;
    var int3 = -1;
    var int4 = -1;
    var string0 = "";
    var int5 = 1;
    var int6 = 0;
    var int7 = varplayer_1297;
    var int8 = varplayer_423;
    var string1 = "";
    var int9 = enum_getvalue(0, 73, 12251 as cs2enum, int0);
    if ((int9 == -1 as struct)) {
        script12478(`Achievement #${inttostring(int0, 10)} needs to be added to [cheevo_id_to_struct_enum].`);
        return [0, ""];
    };
    if ((struct_getparam(int9, 1346) > 0)) {
        [int5, string0] = script16089(int9);
        return [int5, string0];
    };
    switch (int0) {
        case 23:
        case 249:
        case 1213:
        case 1094:
        case 167:
        case 961:
        case 147:
        case 294:
        case 1737: {
            [int5, string0] = script13291(int5, string0, varbitplayer_12058, "Access to the fairy ring network");
            break;
        }
        case 12: {
            [int5, string0] = script13291(int5, string0, varbitplayer_4165, "Larry or Chuck must explain the purpose of Penguin Hide and Seek");
            break;
        }
        case 49: {
            [int5, string0] = script13291(int5, string0, varbitplayer_1181, "Unlock 500 music tracks in order to perform the Air Guitar emote");
            break;
        }
        case 1105: {
            if ((varbitplayer_3730 >= 450)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Kill at least 450 monsters in the Dominion Tower");
            [int5, string0] = script13291(int5, string0, varbitplayer_3735, "Spectate a match in the Dominion Tower");
            break;
        }
        case 1107: {
            if ((varbitplayer_9740 >= 30)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(39));
            break;
        }
        case 1117: {
            [int5, string0] = script13291(int5, string0, script7472(1), "Complete all non-Rumble achievements in the Dominion Tower, including killing Sunfreet");
            break;
        }
        case 1181: {
            if ((varbitplayer_9602 >= 75)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(181));
            break;
        }
        case 1146: {
            if (((STAT_BASE_ACTUAL(13 as stat) >= 7) || (STAT_BASE_ACTUAL(12 as stat) >= 8))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13295(7, 14, 8, 11));
            break;
        }
        case 1168: {
            if ((script4148() == true)) {
                if ((STAT_BASE_ACTUAL(24 as stat) >= 35)) {
                    int6 = 1;
                };
                [int5, string0] = script13291(int5, string0, int6, script13294(35, 25));
                int6 = 0;
                if ((script2193(93 as quest) == 2)) {
                    int6 = 1;
                };
                [int5, string0] = script13291(int5, string0, int6, script13298(50));
            };
            break;
        }
        case 177:
        case 1835: {
            if ((varbitplayer_1623 > 0)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Begin the Firemaking section of Otto Godblessed's barbarian training");
            break;
        }
        case 178: {
            if ((varbitplayer_1616 > 0)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Begin the Fishing section of Otto Godblessed's barbarian training");
            break;
        }
        case 180:
        case 1795: {
            if ((varbitplayer_1623 > 0)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Begin the Firemaking section of Otto Godblessed's barbarian training");
            break;
        }
        case 316: {
            if ((varbitplayer_1616 > 0)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Begin the Fishing section of Otto Godblessed's barbarian training");
            break;
        }
        case 321: {
            if ((varbitplayer_1623 > 0)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Begin the Firemaking section of Otto Godblessed's barbarian training");
            break;
        }
        case 322: {
            if ((varbitplayer_1622 > 0)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Begin the Smithing section of Otto Godblessed's barbarian training");
            break;
        }
        case 323: {
            if ((varbitplayer_1620 > 0)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Begin the Herblore section of Otto Godblessed's barbarian training");
            break;
        }
        case 417: {
            if ((script13303(1) > 0)) {
                int6 = 1;
            };
            if ((INV_TOTAL(94 as inv, 15403 as obj) > 0)) {
                int6 = 1;
            };
            if ((varbitplayer_18023 >= 5)) {
                string1 = "Wield Balmung. Obtain Balmung from Kharshai. (";
                string1 = strconcat(string1, script13301("Koschei's Troubles"));
                string1 = strconcat(string1, ")");
                [int5, string0] = script13291(int5, string0, int6, string1);
            } else if ((varbitplayer_10871 >= 126)) {
                string1 = "Wield Balmung. Obtain Balmung from Queen Sigrid. (";
                string1 = strconcat(string1, script13299(49));
                string1 = strconcat(string1, ")");
                [int5, string0] = script13291(int5, string0, int6, string1);
            } else {
                string1 = "Wield Balmung. Obtain Balmung from Brundt the Chieftain. (";
                string1 = strconcat(string1, script13299(163));
                string1 = strconcat(string1, ")");
                [int5, string0] = script13291(int5, string0, int6, string1);
            };
            break;
        }
        case 107: {
            if ((((varplayer_2268 >= 2) && (varbitplayer_10420 == 0)) || (varplayer_2268 >= 10))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(4));
            break;
        }
        case 980: {
            if ((((STAT_BASE_ACTUAL(0 as stat) >= 70) || (STAT_BASE_ACTUAL(4 as stat) >= 70)) || (STAT_BASE_ACTUAL(6 as stat) >= 70))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13296(70, 1, 70, 3, 70, 4));
            break;
        }
        case 982: {
            if ((varbitplayer_11020 >= 110)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(184));
            break;
        }
        case 991: {
            if ((script6034() >= 500)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Achieve a combined level of at least 500 for your Temple Trekking companions");
            break;
        }
        case 990: {
            if ((varbitplayer_1616 > 0)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Begin the relevant section of Otto Godblessed's barbarian training");
            int6 = 0;
            if ((varbitplayer_11498 >= 50)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(64));
            break;
        }
        case 248:
        case 1707: {
            if ((varbitplayer_11319 >= 8)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Complete the Knight Waves in Camelot");
            break;
        }
        case 1205:
        case 1210:
        case 1211:
        case 1212:
        case 1219:
        case 1220:
        case 1222:
        case 1223:
        case 1227: {
            if ((varplayer_2102 >= 9)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(89));
            break;
        }
        case 1207: {
            if ((varplayer_2102 > 12)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(89));
            break;
        }
        case 1209: {
            [int5, string0] = script13291(int5, string0, varbitplayer_18528, "Unlock the Tirannwn lodestone");
            break;
        }
        case 1217: {
            [int5, string0] = script13291(int5, string0, varbitplayer_26594, "Claim the rewards from the easy Tirannwn achievement");
            break;
        }
        case 1218:
        case 1224: {
            if ((varplayer_2777 >= 2)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(76));
            break;
        }
        case 1249: {
            if (((script13271(99) == 1) || (int7 >= int8))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Achieve 99 in a skill or complete all quests");
            break;
        }
        case 1251: {
            [int5, string0] = script13291(int5, string0, varbitplayer_21848, "Earn the Crest of Seren");
            break;
        }
        case 1253:
        case 1927:
        case 1888: {
            [int5, string0] = script13291(int5, string0, script13273(90), "Have at least 90 in every non-elite skill");
            break;
        }
        case 1258: {
            [int5, string0] = script13291(int5, string0, varbitplayer_25955, "Unlock this recipe");
            break;
        }
        case 1226: {
            if ((varbitplayer_29077 < 95)) {
                string1 = "Talk to Eluned after completing ";
                string1 = strconcat(string1, script13293(161));
                [int5, string0] = script13291(int5, string0, varbitplayer_10542, string1);
            } else {
                string1 = "Talk to Islwyn, in Prifddinas, after completing ";
                string1 = strconcat(string1, script13293(215));
                [int5, string0] = script13291(int5, string0, varbitplayer_10542, string1);
            };
            break;
        }
        case 276:
        case 1792: {
            if ((varplayer_1297 >= 33)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Quest Points: 33 (to enter the Champions' Guild)");
            break;
        }
        case 281: {
            if ((varbitplayer_35381 >= 15)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Unlock all four emotes by completing levels of the Stronghold of Security");
            break;
        }
        case 285: {
            [int5, string0] = script13291(int5, string0, varbitplayer_16309, "Learn the secret of the Senntisten necklace");
            break;
        }
        case 1704: {
            if ((varbitplayer_11610 >= 140)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(176));
            break;
        }
        case 1981: {
            if ((varbitplayer_9712 > 12)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(45));
            break;
        }
        case 1975: {
            if ((((STAT_BASE_ACTUAL(14 as stat) >= 65) || (STAT_BASE_ACTUAL(16 as stat) >= 65)) || (STAT_BASE_ACTUAL(25 as stat) >= 65))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13296(65, 13, 65, 8, 65, 26));
            break;
        }
        case 1973: {
            [int5, string0] = script13291(int5, string0, script13274(50), "50 in all F2P skills");
            break;
        }
        case 1961: {
            if ((script13280(35953 as struct) == -2)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Complete the Stronghold of Security");
            break;
        }
        case 1956: {
            int6 = 0;
            if ((varbitplayer_21841 >= 35)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(10));
            break;
        }
        case 1955: {
            if ((varbitplayer_22270 >= 80)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(202));
            break;
        }
        case 1953: {
            if ((varbitplayer_1623 > 0)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Access to the Ancient Cavern");
            int6 = 0;
            if ((varbitplayer_12059 >= 2)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Permission to use the fairy ring network");
            break;
        }
        case 1945: {
            if ((varbitplayer_10459 > 0)) {
                int6 = 1;
            };
            string1 = "Learn from Sithik Ints how to cure disease during the ";
            string1 = strconcat(string1, script13293(25));
            string1 = strconcat(string1, " quest");
            [int5, string0] = script13291(int5, string0, int6, string1);
            break;
        }
        case 1944: {
            if ((varbitplayer_11858 >= 150)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(145));
            break;
        }
        case 1924: {
            if ((varbitplayer_4291 >= 70)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(203));
            break;
        }
        case 1918: {
            if ((varbitplayer_13639 >= 6)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(55));
            break;
        }
        case 1917: {
            if (((((STAT_BASE_ACTUAL(0 as stat) >= 75) || (STAT_BASE_ACTUAL(4 as stat) >= 75)) || (STAT_BASE_ACTUAL(6 as stat) >= 75)) || (STAT_BASE_ACTUAL(3 as stat) >= 91))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13297(75, 1, 75, 3, 75, 4, 91, 6));
            break;
        }
        case 1903: {
            if ((varbitplayer_13876 >= 20)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(148));
            break;
        }
        case 1902: {
            if ((varplayer_2762 >= 4)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(73));
            break;
        }
        case 1863: {
            if ((varbitplayer_1623 > 0)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Access to the Ancient Cavern");
            break;
        }
        case 1837: {
            if ((((STAT_BASE_ACTUAL(0 as stat) >= 55) || (STAT_BASE_ACTUAL(4 as stat) >= 55)) || (STAT_BASE_ACTUAL(2 as stat) >= 55))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13296(55, 1, 55, 3, 55, 2));
            int6 = 0;
            if (((STAT_BASE_ACTUAL(7 as stat) >= 13) || (STAT_BASE_ACTUAL(13 as stat) >= 14))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13295(13, 16, 14, 14));
            int6 = 0;
            if ((((STAT_BASE_ACTUAL(10 as stat) >= 30) || (STAT_BASE_ACTUAL(14 as stat) >= 30)) || (STAT_BASE_ACTUAL(8 as stat) >= 30))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13296(30, 15, 30, 13, 30, 18));
            int6 = 0;
            if (((STAT_BASE_ACTUAL(11 as stat) >= 40) || (STAT_BASE_ACTUAL(12 as stat) >= 40))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13295(40, 17, 40, 11));
            int6 = 0;
            if (((STAT_BASE_ACTUAL(17 as stat) >= 45) || (STAT_BASE_ACTUAL(21 as stat) >= 50))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13295(45, 10, 50, 23));
            int6 = 0;
            if (((((STAT_BASE_ACTUAL(23 as stat) + STAT_BASE_ACTUAL(6 as stat)) + STAT_BASE_ACTUAL(5 as stat)) + STAT_BASE_ACTUAL(20 as stat)) >= 200)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "A combined total of 200 Summoning, Magic, Prayer and Runecrafting");
            int6 = 0;
            if ((STAT_BASE_ACTUAL(8 as stat) >= 30)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13294(30, 18));
            int6 = 0;
            if ((STAT_BASE_ACTUAL(10 as stat) >= 30)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13294(30, 15));
            int6 = 0;
            if ((STAT_BASE_ACTUAL(14 as stat) >= 30)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13294(30, 13));
            int6 = 0;
            if ((((STAT_BASE_ACTUAL(8 as stat) >= 60) || (STAT_BASE_ACTUAL(10 as stat) >= 60)) || (STAT_BASE_ACTUAL(14 as stat) >= 60))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13296(60, 18, 60, 15, 60, 13));
            break;
        }
        case 380: {
            if ((script2761() >= 40)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Total skill level: 40 or above");
            break;
        }
        case 410: {
            if ((script2761() >= 60)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Total skill level: 60 or above");
            break;
        }
        case 3165:
        case 3167:
        case 3164:
        case 3126:
        case 3135:
        case 3137:
        case 3141:
        case 3146:
        case 3147:
        case 3154:
        case 3157: {
            if (((STAT_BASE_ACTUAL(2 as stat) >= 60) || (STAT_BASE_ACTUAL(16 as stat) >= 60))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Access to the God Wars dungeon");
            break;
        }
        case 3133:
        case 3153: {
            if (((script259(37614 as obj) > 0) || (varbitplayer_32608 == 1))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "You must have found all parts and assembled the Ancient Sigil");
            break;
        }
        case 3184: {
            if (((STAT_BASE_ACTUAL(13 as stat) >= 70) || (STAT_BASE_ACTUAL(22 as stat) >= 59))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13295(70, 14, 59, 22));
            break;
        }
        case 3271:
        case 3276:
        case 3281: {
            if (((varbitplayer_27265 >= 35) || (varbitplayer_27266 >= 45))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(210));
            break;
        }
        case 3278: {
            if (((STAT_BASE_ACTUAL(13 as stat) >= 10) || (STAT_BASE_ACTUAL(12 as stat) >= 12))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13295(10, 14, 12, 11));
            break;
        }
        case 3275: {
            if ((varbitplayer_27300 == 1)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(213));
            int6 = 0;
            if ((script259(34394 as obj) > 0)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "Cadava potion");
            break;
        }
        case 3288: {
            if ((varbitplayer_27300 == 1)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(213));
            break;
        }
        case 3277: {
            if ((varbitplayer_27284 >= 25)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(212));
            break;
        }
        case 3279: {
            if ((varbitplayer_27291 >= 40)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(213));
            break;
        }
        case 3287: {
            if ((varbitplayer_27284 >= 100)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, script13299(213));
            break;
        }
        case 818:
        case 819:
        case 820:
        case 822: {
            if ((script1432() >= struct_getparam(int9, 2233))) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, `You need a combat level of at least ${inttostring(struct_getparam(int9, 2233), 10)}`);
            break;
        }
        case 928:
        case 933: {
            if ((varbitplayer_4759 >= 3)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "You need to find and free Skaldrun from the frozen floors in Daemonheim.");
            break;
        }
        case 4037: {
            if ((script3550() == false)) {
                int6 = 1;
            } else if ((varbitplayer_44800 == 1)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "You need to pick up coins dropped by a monster defeated by you.");
            break;
        }
        case 4038:
        case 4039:
        case 4040: {
            if ((script3550() == false)) {
                int6 = 1;
            } else if ((varbitplayer_44801 == 1)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "You need to pick up bones dropped by a monster defeated by you.");
            break;
        }
        case 4041:
        case 4042:
        case 4043:
        case 4044:
        case 4045:
        case 4046:
        case 4047: {
            if ((script3550() == false)) {
                int6 = 1;
            } else if ((varbitplayer_44823 == 1)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "You need to complete the Burthorpe introduction path or start a lap of the Burthorpe agility course.");
            break;
        }
        case 4051:
        case 4052:
        case 4053: {
            if ((script3550() == false)) {
                int6 = 1;
            } else if ((varbitplayer_44826 == 1)) {
                int6 = 1;
            };
            [int5, string0] = script13291(int5, string0, int6, "You need to complete the Burthorpe introduction path or buy a bird snare.");
            break;
        }
        default: {
            if ((struct_getparam(int9, 1345) > 0)) {
                string0 = script13293(struct_getparam(int9, 1345));
                script12478(`Achievement #${inttostring(int0, 10)} (.quest: ${string0}) has param=quest_requires_special,true but no case in [proc,cheevo_special_requirements].`);
            } else {
                string0 = struct_getparam(int9, 6410);
                script12478(`Achievement #${inttostring(int0, 10)} (${string0})'s special requirement case is missing from [proc,cheevo_special_requirements].`);
            };
            return [0, ""];
        }
    };
    if ((STRING_LENGTH(string0) > 0)) {
        string0 = `${string0}<br>`;
    };
    return [int5, string0];
}