//
function script14128(int0: component, int1: struct): string {
    switch (int0) {
        case 77201413: {
            return "The amount of times you have prestiged your Tribal task list.";
        }
        case 77201414: {
            return "Use Tribal mask stamps to instantly complete tasks.";
        }
        case 77201429: {
            return `Making Music : Listen to the two drummers that can be found in Karamja - ${inttostring(script5542(int1, 0), 10)}/${inttostring(2, 10)}`;
        }
        case 77201432: {
            return `Magical Intervention : Kill 10 enemies with magic - ${inttostring(script5542(int1, 1), 10)}/${inttostring(10, 10)}`;
        }
        case 77201435: {
            return "Idolising : Find and talk to the wandering Tribal idol.";
        }
        case 77201438: {
            return `Exorcism : Burn 15 Mort'Ton shades on pyres - ${inttostring(script5542(int1, 3), 10)}/${inttostring(15, 10)}`;
        }
        case 77201442: {
            return `Laid To Rest : Bury 50 Zogre bones - ${inttostring(script5542(int1, 4), 10)}/${inttostring(50, 10)}`;
        }
        case 77201445: {
            return `Chicken Tiki : Cook 50 chickens on the fires near the cauldron west of the Karamja lodestone - ${inttostring(script5542(int1, 5), 10)}/${inttostring(50, 10)}`;
        }
        case 77201448: {
            return `Nature's Purification : Contribute towards Evil Tree 250 times - ${inttostring(script5542(int1, 6), 10)}/${inttostring(250, 10)}`;
        }
        case 77201451: {
            return `Monkey Madness : Complete Ape Atoll agility course 25 times - ${inttostring(script5542(int1, 7), 10)}/${inttostring(25, 10)}`;
        }
        case 77201455: {
            return `Crafting Juju : Create any five Juju potions - ${inttostring(script5542(int1, 8), 10)}/${inttostring(5, 10)}`;
        }
        case 77201458: {
            return "Exploring the Occult : Solo a medium Occult dungeoneering floor (or hard mode floor) on complexity level 6.";
        }
        case 77201461: {
            return "Grave Robbing : Loot any piece of Barrows equipment.";
        }
        case 77201464: {
            return "Reaping : Complete a soul reaper assignment.";
        }
        case 77201468: {
            return `Preparation : Harvest 30 Fellstalk - ${inttostring(script5542(int1, 12), 10)}/${inttostring(30, 10)}`;
        }
        case 77201471: {
            return "All Fired Up : Light all bonfires in the All Fired Up minigame (they must all be alight at the same time).";
        }
        case 77201474: {
            return `Taming Nihil : Create 25 Nihil summoning pouches - ${inttostring(script5542(int1, 14), 10)}/${inttostring(25, 10)}`;
        }
        case 77201477: {
            return `Habitat : Catch 200 God Jadinkos in Herblore Habitat - ${inttostring(script5542(int1, 15), 10)}/${inttostring(200, 10)}`;
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
            switch (varbitplayer_40139) {
                case 0: {
                    return "Complete this column to receive the Iwi Outfit hand and feet wraps (pink).";
                }
                case 2: {
                    return "Complete this column to receive the Iwi Outfit hand and feet wraps (blue).";
                }
                case 4: {
                    return "Complete this column to receive the Iwi Outfit hand and feet wraps (orange).";
                }
                case 1:
                case 3: {
                    return "Complete this column to receive a large cash bag.";
                }
            };
            break;
        }
        case 77201509: {
            switch (varbitplayer_40139) {
                case 0: {
                    return "Complete this column to receive the Iwi Outfit shin guards (pink).";
                }
                case 2: {
                    return "Complete this column to receive the Iwi Outfit shin guards (blue).";
                }
                case 4: {
                    return "Complete this column to receive the Iwi Outfit shin guards (orange).";
                }
                case 1:
                case 3: {
                    return "Complete this column to receive a huge prismatic star.";
                }
            };
            break;
        }
        case 77201515: {
            switch (varbitplayer_40139) {
                case 0: {
                    return "Complete this column to receive the Iwi Outfit chest piece (pink).";
                }
                case 2: {
                    return "Complete this column to receive the Iwi Outfit chest piece (blue).";
                }
                case 4: {
                    return "Complete this column to receive the Iwi Outfit chest piece (orange).";
                }
                case 1:
                case 3: {
                    return "Complete this column to receive a huge prismatic lamp.";
                }
            };
            break;
        }
        case 77201521: {
            switch (varbitplayer_40139) {
                case 0: {
                    return "Complete this column to receive the Iwi Outfit mask (pink).";
                }
                case 2: {
                    return "Complete this column to receive the Iwi Outfit mask (blue).";
                }
                case 4: {
                    return "Complete this column to receive the Iwi Outfit mask (orange).";
                }
                case 1:
                case 3: {
                    return "Complete this column to receive 2 huge prismatic stars.";
                }
            };
            break;
        }
        case 77201553: {
            return "Iwi Sword main and offhand Overrides.";
        }
        case 77201561: {
            return "Iwi Shield Override.";
        }
        case 77201568: {
            return "Iwi Javelin Override.";
        }
        case 77201575: {
            return "Iwi Staff Override.";
        }
        case 77201582: {
            return "Howie Pet.";
        }
    };
    return "";
}