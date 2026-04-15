//
function script11750(int0: unknown_int): void {
    var string0 = "";
    switch (int0) {
        case 108789823: {
            string0 = "Skip a task by using a stamp.";
            break;
        }
        case 108789826: {
            string0 = "How many stamps you have left. Use them to skip tasks.";
            break;
        }
        case 108789797: {
            string0 = "To complete this task, kill 10 enemies with throwing knives.";
            break;
        }
        case 108789802: {
            string0 = "To complete this task, kill an enemy of at least your combat level.";
            break;
        }
        case 108789807: {
            string0 = "To complete this task, find and talk to the Ninja Master.";
            break;
        }
        case 108789812: {
            string0 = "To complete this task, open the chest at the end of The Pit.";
            break;
        }
        case 108789918: {
            string0 = "To complete this task, pick up 15 items using the telegrab spell.";
            break;
        }
        case 108789923: {
            string0 = "To complete this task, complete a complexity level 6, medium sized dungeoneering floor on your own.";
            break;
        }
        case 108789928: {
            string0 = "To complete this task, successfully trap 30 creatures with a pit fall trap.";
            break;
        }
        case 108789932: {
            string0 = "To complete this task, complete 10 rounds of Pyramid Plunder.";
            break;
        }
        case 108789868: {
            string0 = "To complete this task, complete Flash Powder Factory twice.";
            break;
        }
        case 108789935: {
            string0 = "To complete this task, complete 20 laps of the Wilderness or Ape Atoll agility courses.";
            break;
        }
        case 108789937: {
            string0 = "To complete this task, kill K'ril Tsutsaroth, Commander Zilyana, Kree'arra and General Graardor at least once.";
            break;
        }
        case 108789939: {
            string0 = "To complete this task, obtain at least one Barrows item drop.";
            break;
        }
        case 108789873: {
            string0 = "To complete this task, create the following items; adamant claws main hand, adamant claws off-hand, 10 adamant knives, adamant sword main hand, adamant sword off-hand, adamant dagger main hand, adamant dagger off-hand and a full set of black dragonhide armour.";
            break;
        }
        case 108789945: {
            string0 = "To complete this task, kill one of the following; Kalphite King, Nex or Araxxi. This can be done solo or in a group.";
            break;
        }
        case 108789949: {
            string0 = "To complete this task, finish a Reaper task.";
            break;
        }
        case 108789953: {
            string0 = "To complete this task, kill TzTok-Jad.";
            break;
        }
        case 108789877: {
            string0 = "Complete this line to get a medium cash bag.";
            break;
        }
        case 108789881: {
            string0 = "Complete this line to get a large cash bag.";
            break;
        }
        case 108789885: {
            string0 = "Complete this line to get a huge prismatic star.";
            break;
        }
        case 108789889: {
            string0 = "Complete this line to get a huge prismatic lamp.";
            break;
        }
        case 108789897: {
            if ((varbitplayer_28942 == 0)) {
                string0 = "Complete this column to unlock the Death Lotus Disciple boots and gloves cosmetic outfit pieces.";
            } else {
                string0 = "Complete this column to get a large cash bag.";
            };
            break;
        }
        case 108789902: {
            if ((varbitplayer_28942 == 0)) {
                string0 = "Complete this column to unlock the Death Lotus Disciple head wrap cosmetic outfit piece.";
            } else {
                string0 = "Complete this column to get a huge prismatic star.";
            };
            break;
        }
        case 108789907: {
            if ((varbitplayer_28942 == 0)) {
                string0 = "Complete this column to unlock the Death Lotus Disciple legs cosmetic outfit piece.";
            } else {
                string0 = "Complete this column to get a huge prismatic lamp.";
            };
            break;
        }
        case 108789911: {
            if ((varbitplayer_28942 == 0)) {
                string0 = "Complete this column to unlock the Death Lotus Disciple torso cosmetic outfit piece.";
            } else {
                string0 = "Complete this column to get two huge prismatic stars.";
            };
            break;
        }
        case 108789894: {
            string0 = "Complete the entire card to unlock some awesome weapon overrides!";
            break;
        }
        case 108789837: {
            if ((varbitplayer_28961 == 0)) {
                string0 = "Unlock the Acid Flask ranged weapon override.";
            } else {
                string0 = "You have already unlocked this override.";
            };
            break;
        }
        case 108789838: {
            if ((varbitplayer_28960 == 0)) {
                string0 = "Unlock the Sai sword override.";
            } else {
                string0 = "You have already unlocked this override.";
            };
            break;
        }
        case 108789846: {
            if ((varbitplayer_28962 == 0)) {
                string0 = "Unlock the Glaive spear override.";
            } else {
                string0 = "You have already unlocked this override.";
            };
            break;
        }
        case 108789857: {
            if ((varbitplayer_28963 == 0)) {
                string0 = "Unlock the Dragon Staff staff override.";
            } else {
                string0 = "You have already unlocked this override.";
            };
            break;
        }
        default: {
            string0 = "I am supposed to have some information here.... honest!!";
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, int0, -1), int0);
    return;
}