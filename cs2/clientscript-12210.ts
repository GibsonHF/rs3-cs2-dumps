//
function script12210(int0: unknown_int): void {
    var string0 = "";
    switch (int0) {
        case 112459829: {
            string0 = "Skip a task by using an envelope";
            break;
        }
        case 112459832: {
            string0 = "How many envelopes you have left. Use them to skip tasks.";
            break;
        }
        case 112459807: {
            string0 = "To complete this task, cook 28 items on a player-made fire.";
            break;
        }
        case 112459811: {
            string0 = "To complete this task, catch 15 kebbits.";
            break;
        }
        case 112459815: {
            string0 = "To complete this task, successfully pickpocket 40 H.A.M. Workers.";
            break;
        }
        case 112459819: {
            string0 = "To complete this task, kill 10 NPCs using claws.";
            break;
        }
        case 112459927: {
            string0 = "To complete this task, find and heal the Wounded Snake.";
            break;
        }
        case 112459931: {
            string0 = "To complete this task, get 2 bird's nest drops from cutting trees or ivy.";
            break;
        }
        case 112459935: {
            string0 = "To complete this task, complete 2 Sinkholes.";
            break;
        }
        case 112459938: {
            string0 = "To complete this task, earn 5 Castle Wars tickets (gold or silver).";
            break;
        }
        case 112459873: {
            string0 = "To complete this task, create 3000 broad-tipped bolts.";
            break;
        }
        case 112459941: {
            string0 = "To complete this task, gain 200 Guthixian Cache points.";
            break;
        }
        case 112459943: {
            string0 = "To complete this task, complete 2 Slayer tasks from Sumona or a higher level Slayer Master.";
            break;
        }
        case 112459945: {
            string0 = "To complete this task, defeat 50 Ninja Monkeys or Gorillas in the Ape Atoll.";
            break;
        }
        case 112459877: {
            string0 = "To complete this task, create 140 Saradomin brews.";
            break;
        }
        case 112459950: {
            string0 = "To complete this task, catch 100 Crimson Skillchompas.";
            break;
        }
        case 112459954: {
            string0 = "To complete this task, complete 5 medium or large occult or warped Dungeoneering floors.";
            break;
        }
        case 112459958: {
            string0 = "To complete this task, complete an elite clue scroll.";
            break;
        }
        case 112459881: {
            string0 = "Complete this line to get a medium cash bag.";
            break;
        }
        case 112459885: {
            string0 = "Complete this line to get a large cash bag.";
            break;
        }
        case 112459889: {
            string0 = "Complete this line to get a huge prismatic star.";
            break;
        }
        case 112459893: {
            string0 = "Complete this line to get a huge prismatic lamp.";
            break;
        }
        case 112459901: {
            if ((varbitplayer_30446 == 0)) {
                string0 = "Complete this column to unlock the Artisan Monkey Trinket.";
            } else {
                string0 = "Complete this column to get 3 Artisan Monkey Trinket charges.";
            };
            break;
        }
        case 112459907: {
            if ((varbitplayer_30446 == 0)) {
                string0 = "Complete this column to unlock the Gathering Monkey Trinket.";
            } else {
                string0 = "Complete this column to get 3 Gathering Monkey Trinket charges.";
            };
            break;
        }
        case 112459913: {
            if ((varbitplayer_30446 == 0)) {
                string0 = "Complete this column to unlock the Support Monkey Trinket.";
            } else {
                string0 = "Complete this column to get 3 Support Monkey Trinket charges.";
            };
            break;
        }
        case 112459919: {
            if ((varbitplayer_30446 == 0)) {
                string0 = "Complete this column to unlock the Combat Monkey Trinket.";
            } else {
                string0 = "Complete this column to get 3 Combat Monkey Trinket charges.";
            };
            break;
        }
        case 112459898: {
            string0 = "Complete the entire card to unlock awesome dragon hats!";
            break;
        }
        case 112459839: {
            if ((varbitplayer_30456 == 0)) {
                string0 = "Unlock the Green Zodiac Costume.";
            } else {
                string0 = "You have already unlocked this item.";
            };
            break;
        }
        case 112459845: {
            if ((varbitplayer_30452 == 0)) {
                string0 = "Unlock the Blue Zodiac Costume.";
            } else {
                string0 = "You have already unlocked this item.";
            };
            break;
        }
        case 112459846: {
            if ((varbitplayer_30453 == 0)) {
                string0 = "Unlock the Red Zodiac Costume.";
            } else {
                string0 = "You have already unlocked this item.";
            };
            break;
        }
        case 112459853: {
            if ((varbitplayer_30454 == 0)) {
                string0 = "Unlock the Black Zodiac Costume.";
            } else {
                string0 = "You have already unlocked this item.";
            };
            break;
        }
        case 112459862: {
            if ((varbitplayer_30455 == 0)) {
                string0 = "Unlock the Gold Zodiac Costume.";
            } else {
                string0 = "You have already unlocked this item.";
            };
            break;
        }
        default: {
            string0 = "";
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, int0, -1), int0);
    return;
}