//
function script3715(int0: int, int1: int, int2: unknown_int): string {
    var string0 = "";
    var int3 = -1;
    if ((int2 == 0)) {
        int3 = 0;
    };
    if ((int2 == 1)) {
        int3 = 1;
    };
    switch (int0) {
        case 3011: {
            if ((int1 == 1)) {
                string0 = "You require 33 Quest Points to enter the Champions' Guild.";
                if ((varplayer_1297 >= 33)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3000: {
            if ((int1 == 2)) {
                if (((varplayer_1297 >= varbitplayer_4915) || (script4218() <= 0))) {
                    int3 = 1;
                };
                string0 = "You must have gained a Quest Point or 100,000 total experience since last entering Juna's cavern.";
            };
            break;
        }
        case 3001:
        case 3013:
        case 3031:
        case 912:
        case 914:
        case 913: {
            if ((int1 == 1)) {
                string0 = "You must have a <col=ffffff>combat level</col> of at least <col=ffffff>55</col>.";
                if ((COMLEVEL_ACTIVE() >= 55)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3052: {
            if ((int1 == 1)) {
                string0 = "You need an active or sealed <col=ffffff>clue scroll</col> in your inventory or bank. You can have one active clue from each tier at a time.";
                if ((varclient_5212 > 0)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3002: {
            if ((int1 == 1)) {
                string0 = "You need to visit <col=ffffff>Larry</col> or <col=ffffff>Chuck</col> in <col=ffffff>Ardougne Zoo</col> before you can begin penguin spying.";
                if ((varbitplayer_4165 == 1)) {
                    int3 = 1;
                };
            } else if ((int1 == 2)) {
                string0 = "You must have spied on fewer than ten penguins already this week.";
                if ((varbitplayer_4164 < 10)) {
                    int3 = 1;
                };
            } else if ((int1 == 3)) {
                string0 = `You may spy on penguins if your total Penguin Points are less than the maximum of ${inttostring(250, 10)}.`;
                if ((varbitplayer_4163 < 250)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3003: {
            if ((int1 == 1)) {
                string0 = "You may not chop down more than two evil trees per day.";
                if ((varbitplayer_5331 < 2)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3004: {
            if ((int1 == 1)) {
                string0 = `You may not mine more than ${inttostring(3, 10)} crashed stars per day.`;
                if ((varbitplayer_57006 < 3)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3047: {
            if ((int1 == 1)) {
                string0 = "You must have completed or manually turned off the tutorial.";
                if ((((varbitplayer_3617 == 0) || (varbitplayer_3584 >= 60)) || (varbitplayer_13240 == 40))) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3007: {
            if ((int1 == 1)) {
                string0 = "You may attempt the Agility, Magic and Ranged performances after a week has passed since your last show.";
                if ((((varbitplayer_5479 == 0) || (varbitplayer_5480 == 0)) || (varbitplayer_5481 == 0))) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3035: {
            if ((int1 == 1)) {
                string0 = "You may not help catch more than two Plutonial chinchompas per day.";
                if ((varbitplayer_4882 == 0)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3072: {
            if ((int1 == 2)) {
                string0 = "You must complete the Rag and Bone Man's wishlist mini-quest to face the Skeletal Horror.";
                if ((varbitplayer_9902 >= 10)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3010: {
            if ((int1 == 2)) {
                string0 = "At least a week must pass since you last faced the Skeletal Horror.";
                if ((varbitplayer_26628 == 0)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3012: {
            if ((int1 == 1)) {
                string0 = "You require <col=ffffff>50 Runecrafting</col> to enter the Runecrafters' Guild.";
                if ((STAT_BASE(20 as stat) >= 50)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3015: {
            if ((int1 == 2)) {
                string0 = "You must have at least <col=ffffff>65 Attack</col> or <col=ffffff>Defence</col> in order to take on a case.";
                if (((STAT_BASE(0 as stat) >= 65) || (STAT_BASE(1 as stat) >= 65))) {
                    int3 = 1;
                };
            } else if ((int1 == 3)) {
                string0 = "You need to have a <col=ffffff>court summons</col> in your inventory or bank";
                if (((INV_TOTAL(93 as inv, 18757 as obj) > 0) || (INV_TOTAL(95 as inv, 18757 as obj) > 0))) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3034: {
            if ((int1 == 1)) {
                string0 = "To enter the Warriors' Guild your Attack or Strength level must be 99, or your combined Attack and Strength levels must total 130 or more.";
                if (((((STAT_BASE(2 as stat) + STAT_BASE(0 as stat)) >= 130) || (STAT_BASE(0 as stat) >= 99)) || (STAT_BASE(2 as stat) >= 99))) {
                    int3 = 1;
                };
            };
            break;
        }
        case 610: {
            if ((int1 == 2)) {
                string0 = "You need to have made some progress in the Icthlarin's Little Helper quest to enter Sophanem.";
                if ((varbitplayer_10987 >= 3)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 858: {
            if ((int1 == 2)) {
                string0 = "You must have either entered Keldagrim or completed Priest in Peril to complete this task.";
                if (((varplayer_2171 >= 60) || (varbitplayer_13266 >= 5))) {
                    int3 = 1;
                };
            };
            break;
        }
        case 881: {
            if ((int1 == 2)) {
                string0 = "You must have finished the gnome cooking and gnome cocktail tutorials to complete this task.";
                if (((varplayer_3202 >= 7) && (varplayer_3197 >= 7))) {
                    int3 = 1;
                };
            };
            break;
        }
        case 911: {
            if ((int1 == 1)) {
                string0 = `You should have a combat level of at least ${inttostring(struct_getparam(script6798(int0), 2233), 10)}.`;
                if ((script1432() >= struct_getparam(script6798(int0), 2233))) {
                    int3 = 1;
                };
            };
            break;
        }
        case 916:
        case 915: {
            if ((int1 == 1)) {
                string0 = `You should have a combat level of at least ${inttostring(struct_getparam(script6798(int0), 2233), 10)}.`;
                if ((script1432() >= struct_getparam(script6798(int0), 2233))) {
                    int3 = 1;
                };
            };
            break;
        }
        case 656: {
            if ((int1 == 2)) {
                string0 = "You need to have partially completed the Zogre Flesh Eaters quest (learning how to cure disease from Sithik Ints).";
                if ((varbitplayer_10459 == 1)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 818: {
            if ((int1 == 2)) {
                string0 = `You need a combat level of at least ${inttostring(struct_getparam(script6798(int0), 2233), 10)}.`;
                if ((script1432() >= struct_getparam(script6798(int0), 2233))) {
                    int3 = 1;
                };
            };
            break;
        }
        case 819: {
            if ((int1 == 2)) {
                string0 = `You need a combat level of at least ${inttostring(struct_getparam(script6798(int0), 2233), 10)}.`;
                if ((script1432() >= struct_getparam(script6798(int0), 2233))) {
                    int3 = 1;
                };
            };
            break;
        }
        case 820: {
            if ((int1 == 3)) {
                string0 = `You need a combat level of at least ${inttostring(struct_getparam(script6798(int0), 2233), 10)}.`;
                if ((script1432() >= struct_getparam(script6798(int0), 2233))) {
                    int3 = 1;
                };
            };
            break;
        }
        case 822: {
            if ((int1 == 3)) {
                string0 = `You need a combat level of at least ${inttostring(struct_getparam(script6798(int0), 2233), 10)}.`;
                if ((script1432() >= struct_getparam(script6798(int0), 2233))) {
                    int3 = 1;
                };
            };
            break;
        }
        case 928:
        case 933: {
            if ((int1 == 2)) {
                string0 = "You need to find and free Skaldrun from the frozen floors in Daemonheim.";
                if ((varbitplayer_4759 >= 3)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 908: {
            if ((int1 == 1)) {
                string0 = `You need a combat level of at least ${inttostring(struct_getparam(script6798(int0), 2233), 10)}.`;
                if ((script1432() >= struct_getparam(script6798(int0), 2233))) {
                    int3 = 1;
                };
            };
            break;
        }
        case 659: {
            if ((int1 == 2)) {
                string0 = "You need to learn how to brew this during the In Aid of the Myreque quest.";
                if ((varbitplayer_11498 >= 280)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3042: {
            if ((int1 == 1)) {
                string0 = `You must have defeated at least <col=ffffff>${inttostring(20, 10)} bosses</col>`;
                int3 = script6787();
            };
            break;
        }
        case 3065: {
            if ((int1 == 1)) {
                string0 = "You must wait at least a day since you last used the Rune Goldberg Machine.";
                if ((varbitplayer_24907 == 0)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3074: {
            if ((int1 == 2)) {
                string0 = "You must complete the Beneath Cursed Tides quest in order to gain access to the oyster.";
                if ((varbitplayer_30071 >= 200)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3085: {
            if ((int1 == 2)) {
                string0 = "You must complete Sins of the Father in order to gain access to The Effigy Incubator.";
                if ((varbitplayer_15817 >= 10)) {
                    int3 = 1;
                };
            };
            break;
        }
        case 3087: {
            if ((int1 == 2)) {
                string0 = "You must complete Kili Row in order to gain access to Thalmund's Wares.";
                if ((script18522(500 as quest) == true)) {
                    int3 = 1;
                };
            };
            break;
        }
        default: {
            string0 = "";
            int3 = 0;
            break;
        }
    };
    if ((int3 == -1)) {
        int3 = 0;
    };
    if ((int3 == 1)) {
        string0 = strconcat("<str=FFFFFE>", string0);
    };
    return string0;
}