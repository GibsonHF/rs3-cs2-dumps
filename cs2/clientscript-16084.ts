//
function script16084(int0: int): [int, obj, graphic, string] {
    var int1 = 1;
    var int2 = -1 as obj;
    var int3 = -1 as graphic;
    var string0 = "";
    var int4 = -1 as quest;
    switch (int0) {
        case 1: {
            string0 = "This boss is located in the Wilderness.";
            int3 = 18714 as graphic;
            int1 = 1;
            break;
        }
        case 2: {
            int4 = 85 as quest;
            string0 = script2103(int4);
            string0 = `Defeat Dad ('${string0}' quest) to access Trollheim.`;
            int3 = script2107(int4);
            if ((varplayer_2347 < 20)) {
                int1 = 0;
            };
            break;
        }
        case 3: {
            string0 = `${inttostring(60, 10)} Strength or ${inttostring(60, 10)} Agility to push the boulder.`;
            if ((script6431() == true)) {
                int3 = struct_getparam(28493, 2802);
            } else {
                int3 = struct_getparam(28493, 8120);
            };
            if (((STAT_BASE(2 as stat) < 60) && (STAT_BASE(16 as stat) < 60))) {
                int1 = 0;
            };
            break;
        }
        case 4: {
            string0 = "Obtain the dying knight's notes at the God Wars dungeon entrance.";
            int2 = 11734 as obj;
            if ((varbitplayer_15158 == 0)) {
                int1 = 0;
            };
            break;
        }
        case 5: {
            string0 = "You must first travel to Anachronia, via the boat at the dig site east of Varrock.";
            int3 = 10371 as graphic;
            if ((varbitplayer_44469 != 50)) {
                int1 = 0;
            };
            break;
        }
        case 17: {
            int4 = 512 as quest;
            string0 = script2103(int4);
            string0 = `You must have completed the ${string0} quest in order to access Osseous.`;
            int3 = script2107(int4);
            break;
        }
        case 6: {
            string0 = `You must own a frozen key which has charges remaining, or sacrifice one ('${ACHIEVEMENT_GETNAME(1364 as achievement)}' achievement).`;
            int2 = 20120 as obj;
            if (((script259(int2) == 0) && (varbitplayer_48239 == 0))) {
                int1 = 0;
            };
            break;
        }
        case 7: {
            string0 = "You need a Barrows totem.";
            int2 = 30004 as obj;
            if ((script259(int2) == 0)) {
                int1 = -1;
            };
            break;
        }
        case 8: {
            string0 = "You need an Ascension Keystone to enter an Ascension Laboratory.";
            int2 = 28445 as obj;
            if ((script259(28445 as obj) > 0)) {
                int1 = 1;
            } else {
                int1 = -1;
            };
            break;
        }
        case 9: {
            string0 = "You must have previously sacrificed a fire cape.";
            int2 = 6570 as obj;
            if ((varbitplayer_3910 == 0)) {
                int1 = 0;
            };
            break;
        }
        case 10: {
            string0 = "You must have found all parts and assembled the Ancient Sigil.";
            int2 = 37614 as obj;
            if ((varbitplayer_32608 == 0)) {
                int1 = 0;
            };
            break;
        }
        case 11: {
            string0 = "You need a Key to the Crossing.";
            int2 = 40310 as obj;
            if ((script259(int2) == 0)) {
                int1 = -1;
            };
            break;
        }
        case 12: {
            int4 = 276 as quest;
            string0 = script2103(int4);
            string0 = `This boss is located in Morytania, accessed during the '${string0}' quest.`;
            int3 = script13286(37209 as struct);
            if ((varbitplayer_9663 == 0)) {
                int1 = -1;
            };
            break;
        }
        case 13: {
            int4 = 194 as quest;
            string0 = script2103(int4);
            string0 = `Optional quest: '${string0}' to face Akrisae.`;
            int3 = script2107(int4);
            if ((script2156(int4) == false)) {
                int1 = -1;
            };
            break;
        }
        case 14: {
            int4 = 384 as quest;
            string0 = script2103(int4);
            string0 = `Optional quest: '${string0}' to face Linza.`;
            int3 = script2107(int4);
            if ((script2156(int4) == false)) {
                int1 = -1;
            };
            break;
        }
        case 15: {
            int4 = 352 as quest;
            string0 = script2103(int4);
            string0 = `Optional quest: '${string0}' to reduce incoming damage from the Queen Black Dragon.`;
            int3 = script2107(int4);
            if ((script2156(int4) == false)) {
                int1 = -1;
            };
            break;
        }
        case 16: {
            int4 = 287 as quest;
            string0 = script2103(int4);
            string0 = `Partial completion of the quest '${string0}' and 88 Slayer to access the Sophanem Slayer dungeon.`;
            int3 = script2107(int4);
            if (((varbitplayer_10987 < 15) || (STAT_BASE(18 as stat) < 88))) {
                int1 = 0;
            };
            break;
        }
        case 18: {
            int4 = 521 as quest;
            string0 = script2103(int4);
            string0 = `You must complete the quest: '${string0}'.`;
            int3 = script2107(int4);
            if (((script2156(int4) == false) && (script20163() == 0))) {
                int1 = 0;
            };
            break;
        }
        case 19: {
            int4 = 514 as quest;
            string0 = script2103(int4);
            string0 = `You must complete the quest: '${string0}'.`;
            int3 = script2107(int4);
            if (((script2156(int4) == false) && (script20164() == 0))) {
                int1 = 0;
            };
            break;
        }
        case 20: {
            int4 = 507 as quest;
            string0 = script2103(int4);
            string0 = `You must complete the quest: '${string0}'.`;
            int3 = script2107(int4);
            if (((script2156(int4) == false) && (script20165() == 0))) {
                int1 = 0;
            };
            break;
        }
        case 21: {
            int4 = 496 as quest;
            string0 = script2103(int4);
            string0 = `You must complete the quest: '${string0}'.`;
            int3 = script2107(int4);
            if (((script2156(int4) == false) && (script1858(13) == 0))) {
                int1 = 0;
            };
            break;
        }
        case 22: {
            int4 = 499 as quest;
            string0 = script2103(int4);
            string0 = `You must complete the quest: '${string0}'.`;
            int3 = script2107(int4);
            if (((script2156(int4) == false) && (script1858(14) == 0))) {
                int1 = 0;
            };
            break;
        }
        case 23: {
            int4 = 526 as quest;
            string0 = script2103(int4);
            string0 = `You must complete the quest: '${string0}'.`;
            int3 = script2107(int4);
            if ((script2156(int4) == false)) {
                int1 = 0;
            };
            break;
        }
        case 24: {
            int4 = 527 as quest;
            string0 = script2103(int4);
            string0 = `You must complete the quest: '${string0}'.`;
            int3 = script2107(int4);
            if ((script2156(int4) == false)) {
                int1 = 0;
            };
            break;
        }
    };
    return [int1, int2, int3, string0];
}