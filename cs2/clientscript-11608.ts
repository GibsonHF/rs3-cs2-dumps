//
function script11608(): [unknown_int, int, string, int, int] {
    var string0 = "";
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    switch (varbitplayer_525) {
        case 1: {
            if ((varbitplayer_11754 == 0)) {
                string0 = `Special assignment for Turael:<br>${inttostring(varbitplayer_527, 10)}/15 of the creatures in the cellar.`;
            } else {
                string0 = `Special assignment for Spria.<br>${inttostring(varbitplayer_527, 10)}/15 of the creatures in the cellar.`;
            };
            int2 = 15;
            int1 = varbitplayer_527;
            int0 = (int2 - int1);
            break;
        }
        case 2: {
            if ((varbitplayer_11754 != 1)) {
                string0 = "Special assignment: Investigate strange activity by activating your Enchanted gem at the Fairy rings in the Haunted Woods, Mort Myre and west of Canifis on Mazchna's behalf.";
            } else {
                string0 = "Special assignment: Investigate strange activity by activating your Enchanted gem at the Fairy rings in the Haunted Woods, Mort Myre and west of Canifis on Achtryn's behalf.";
            };
            int2 = 3;
            if ((varbitplayer_528 >= 3)) {
                int1 = (int1 + 1);
            };
            if ((varbitplayer_529 >= 3)) {
                int1 = (int1 + 1);
            };
            if ((varbitplayer_530 >= 3)) {
                int1 = (int1 + 1);
            };
            int0 = (int2 - int1);
            break;
        }
        case 12: {
            int2 = varbitplayer_52820;
            int1 = varbitplayer_52821;
            int0 = (int2 - int1);
            string0 = `Special assignment: Cull the area surrounding the fort of undead.<br>You have killed: ${inttostring(int1, 10)}/${inttostring(int2, 10)} undead.`;
            break;
        }
        case 3: {
            string0 = "Special assignment: Bring perfect scales from green, blue, red and black dragons back to Vannaka.";
            int2 = 4;
            if ((script259(18639 as obj) > 0)) {
                int1 = (int1 + 1);
            };
            if ((script259(18640 as obj) > 0)) {
                int1 = (int1 + 1);
            };
            if ((script259(18641 as obj) > 0)) {
                int1 = (int1 + 1);
            };
            if ((script259(18642 as obj) > 0)) {
                int1 = (int1 + 1);
            };
            break;
        }
        case 4: {
            string0 = `Special assignment for Chaeldar.<br>${inttostring(varbitplayer_531, 10)}/10 of the required zygomites.`;
            int2 = 10;
            int1 = varbitplayer_531;
            int0 = (int2 - int1);
            break;
        }
        case 5: {
            string0 = "Special Assignment: Defeat the Kalphite Queen on behalf of Sumona.";
            break;
        }
        case 6: {
            if ((varbitplayer_11754 == 0)) {
                string0 = "Special assignment for Duradel.<br>You have slain the following creatures in the Canifis Slayer tower:";
            } else {
                string0 = "Special assignment for Lapalok.<br>You have slain the following creatures in the Canifis Slayer tower:";
            };
            string0 = strconcat(string0, `<br>${inttostring(varbitplayer_532, 10)}/${inttostring(17, 10)} crawling hands<br>${inttostring(varbitplayer_533, 10)}/${inttostring(12, 10)} banshees<br>${inttostring(varbitplayer_534, 10)}/${inttostring(9, 10)} infernal mages<br>${inttostring(varbitplayer_535, 10)}/${inttostring(7, 10)} bloodvelds<br>${inttostring(varbitplayer_536, 10)}/${inttostring(7, 10)} aberrant spectres<br>${inttostring(varbitplayer_537, 10)}/${inttostring(5, 10)} gargoyles<br>${inttostring(varbitplayer_538, 10)}/${inttostring(6, 10)} nechryaels<br>${inttostring(varbitplayer_539, 10)}/${inttostring(6, 10)} abyssal demons`);
            int2 = (((((((17 + 12) + 9) + 7) + 7) + 5) + 6) + 6);
            int1 = (((((((varbitplayer_532 + varbitplayer_533) + varbitplayer_534) + varbitplayer_535) + varbitplayer_536) + varbitplayer_537) + varbitplayer_538) + varbitplayer_539);
            int0 = ((((((((17 - varbitplayer_532) + (12 - varbitplayer_533)) + (9 - varbitplayer_534)) + (7 - varbitplayer_535)) + (7 - varbitplayer_536)) + (5 - varbitplayer_537)) + (6 - varbitplayer_538)) + (6 - varbitplayer_539));
            break;
        }
        case 11: {
            string0 = "Special Assignment: Defeat Dragith Nurn on behalf of Jacquelyn.";
            break;
        }
        default: {
            if ((varbitplayer_24968 == 1)) {
                string0 = "Special assignment: Obtain Dark crystals from the King Black Dragon, Kalphite Queen, Dagannoth Kings, Commander Zilyana, Kree'arra, General Graardor, K'ril Tsutsaroth, Queen Black Dragon, Araxxi and the hard mode Giant Mole on Morvran's behalf.";
                int2 = 10;
                int1 = script2409();
                int0 = (int2 - int1);
            } else if ((varbitplayer_44233 == 1)) {
                string0 = "Special assignment for Laniakea: Obtain vials of poison from luminous snagglers, devil's snare, liverworts and lampenflora.";
                int2 = 4;
                int1 = (((varbitplayer_44234 + varbitplayer_44236) + varbitplayer_44235) + varbitplayer_44237);
                int0 = (int2 - int1);
            } else {
                return [0, int0, string0, int1, int2];
            };
            break;
        }
    };
    return [1, int0, string0, int1, int2];
}