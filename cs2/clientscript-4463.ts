//
function script4463(int0: component, int1: struct): string {
    switch (int0) {
        case 77201413: {
            return "The amount of times you have prestiged your Plague Doctor task list.";
        }
        case 77201414: {
            return "Use Plague Doctor mask stamps to instantly complete tasks.";
        }
        case 77201429: {
            return "Knock knock - Interact with the Ardougne wall door.";
        }
        case 77201432: {
            return "Doctor's visit - Talk to Hans while wearing the gas mask.";
        }
        case 77201435: {
            return "Cure the infection - Create an antipoison.";
        }
        case 77201438: {
            return `Right to the source -  Kill 30 giant rats in the Stronghold of Security - ${inttostring(script5542(int1, 3), 10)}/${inttostring(30, 10)}`;
        }
        case 77201442: {
            return "An apple a day - Harvest an apple from an apple tree.";
        }
        case 77201445: {
            return `Animal Clinic - Feed animals medicinal honeycomb at the Manor Farm - ${inttostring(script5542(int1, 5), 10)}/${inttostring(5, 10)}`;
        }
        case 77201448: {
            return `This sucks - Create 24 bloated leech pouches - ${inttostring(script5542(int1, 6), 10)}/${inttostring(24, 10)}`;
        }
        case 77201451: {
            return "You should probably get that checked - Defeat the Giant mole.";
        }
        case 77201455: {
            return "Ahead of the Game - Complete a soul reaper assignment.";
        }
        case 77201458: {
            return `Medical logs - Cut 50 blisterwood logs - ${inttostring(script5542(int1, 9), 10)}/${inttostring(50, 10)}`;
        }
        case 77201461: {
            return `Chief Sturgeon - Catch 50 leaping sturgeon - ${inttostring(script5542(int1, 10), 10)}/${inttostring(50, 10)}`;
        }
        case 77201464: {
            return `Just part of the job - Burn 25 vyre corpses - ${inttostring(script5542(int1, 11), 10)}/${inttostring(25, 10)}`;
        }
        case 77201468: {
            return `Regular exercise - ${inttostring(script5542(int1, 12), 10)}/${inttostring(25, 10)} laps of Hefin Agility Course completed.`;
        }
        case 77201471: {
            return "Always read the label - Create a Strong Cure Potion in Daemonheim.";
        }
        case 77201474: {
            return "Home Remedy - Fetch items for the Plague Doctor :<br>1x 6 dose Overload Salve<br>1x Divine herb patch III<br>1x Empty Birds Nest<br>200x Harmonic Dust<br>10x Wallasalkibanite ore<br>1x Sack full of Potatoes";
        }
        case 77201477: {
            return `Crimson Skillchompas : Catch 200 Crimson Skillchompas - ${inttostring(script5542(int1, 15), 10)}/${inttostring(200, 10)}`;
        }
        case 77201481: {
            return "Complete this line to get a medium cash bag.";
        }
        case 77201486: {
            return "Complete this line to get a large cash bag.";
        }
        case 77201491: {
            return "Complete this line to get a huge prismatic star.";
        }
        case 77201496: {
            return "Complete this line to get a huge prismatic lamp.";
        }
        case 77201502: {
            switch (varbitplayer_42277) {
                case 0:
                case 2:
                case 4: {
                    return "Complete this column to receive the Plague Doctor gloves and boots.";
                }
                case 1:
                case 3: {
                    return "Complete this column to receive a large cash bag.";
                }
            };
            break;
        }
        case 77201509: {
            switch (varbitplayer_42277) {
                case 0:
                case 2:
                case 4: {
                    return "Complete this column to receive the Plague Doctor legs.";
                }
                case 1:
                case 3: {
                    return "Complete this column to receive a huge prismatic star.";
                }
            };
            break;
        }
        case 77201515: {
            switch (varbitplayer_42277) {
                case 0:
                case 2:
                case 4: {
                    return "Complete this column to receive the Plague Doctor coat.";
                }
                case 1:
                case 3: {
                    return "Complete this column to receive a huge prismatic lamp.";
                }
            };
            break;
        }
        case 77201521: {
            switch (varbitplayer_42277) {
                case 0:
                case 2:
                case 4: {
                    return "Complete this column to receive the Plague Doctor mask.";
                }
                case 1:
                case 3: {
                    return "Complete this column to receive 2 huge prismatic stars.";
                }
            };
            break;
        }
        case 77201553: {
            return "Plague Doctor syringe daggers.";
        }
        case 77201561: {
            return "Plague Doctor rest animation.";
        }
        case 77201568: {
            return "Plague Doctor staff.";
        }
        case 77201575: {
            return "Plague Doctor teleport animation.";
        }
        case 77201582: {
            return "Plague Doctor walk override.";
        }
    };
    return "";
}