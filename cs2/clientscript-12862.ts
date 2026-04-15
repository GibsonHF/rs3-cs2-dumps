//
function script12862(int0: unknown_int): void {
    var string0 = "";
    switch (int0) {
        case 118030427: {
            string0 = "How many times you have completed you card.";
            break;
        }
        case 118030428: {
            string0 = "Use brain stickers to complete tasks immediately!";
            break;
        }
        case 118030349: {
            string0 = "Find and talk to Zrik.";
            break;
        }
        case 118030352: {
            string0 = `Telegrab 15 pickled brain jars from the pub in Canifis - ${inttostring(varbitplayer_34152, 10)}/15`;
            break;
        }
        case 118030355: {
            string0 = `Gather 100 Mort Myre Fungus - ${inttostring(varbitplayer_34153, 10)}/100`;
            break;
        }
        case 118030358: {
            string0 = `Kill 50 experiments - ${inttostring(varbitplayer_34154, 10)}/50`;
            break;
        }
        case 118030362: {
            string0 = "Create an Evil Turnip pouch at the Obelisk within the Nature grotto.";
            break;
        }
        case 118030365: {
            string0 = `Complete 3 maximum length slayer contracts of Infernal Mages or higher (not including Wilderness contracts) - ${inttostring(varbitplayer_34155, 10)}/3`;
            break;
        }
        case 118030368: {
            string0 = `Mine 300 Daeyalt ore - ${inttostring(varbitplayer_34156, 10)}/300`;
            break;
        }
        case 118030371: {
            string0 = `Complete 25 laps of the Werewolf Agility course - ${inttostring(varbitplayer_34157, 10)}/25`;
            break;
        }
        case 118030375: {
            string0 = `Cremate 200 Vyres with the Sunspear - ${inttostring(varbitplayer_34158, 10)}/200`;
            break;
        }
        case 118030509: {
            string0 = `Fletch from Blisterwood logs 150 times - ${inttostring(varbitplayer_34159, 10)}/150`;
            break;
        }
        case 118030512: {
            string0 = `Harvest 36 poison ivy - ${inttostring(varbitplayer_34160, 10)}/36`;
            break;
        }
        case 118030515: {
            string0 = `Complete 5 Occult or Warped, medium or large dungeoneering floors - ${inttostring(varbitplayer_34161, 10)}/5`;
            break;
        }
        case 118030379: {
            string0 = `Burn 100 Tortured souls - ${inttostring(varbitplayer_34162, 10)}/100`;
            break;
        }
        case 118030518: {
            string0 = `Catch 5 Zombie Implings - ${inttostring(varbitplayer_34163, 10)}/5`;
            break;
        }
        case 118030521: {
            string0 = `Deposit 50 Manifest Shadow Cores in Prifddinas - ${inttostring(varbitplayer_34164, 10)}/50`;
            break;
        }
        case 118030524: {
            string0 = `Open 5 gold chests in the Shades of Mort'ton minigame - ${inttostring(varbitplayer_34165, 10)}/5`;
            break;
        }
        case 118030383: {
            string0 = "Complete this line to get a medium cash bag.";
            break;
        }
        case 118030387: {
            string0 = "Complete this line to get a large cash bag.";
            break;
        }
        case 118030391: {
            string0 = "Complete this line to get a huge prismatic star.";
            break;
        }
        case 118030395: {
            string0 = "Complete this line to get a huge prismatic lamp.";
            break;
        }
        case 118030400: {
            switch (varbitplayer_34150) {
                case 0: {
                    string0 = "Complete this column to receive the hands and feet of the Zombie outfit with the Infected appearance.";
                    break;
                }
                case 2: {
                    string0 = "Complete this column to receive the Decaying appearance for your Zombie outfit hands and feet.";
                    break;
                }
                case 4: {
                    string0 = "Complete this column to receive the Rotten appearance for your Zombie outfit hands and feet.";
                    break;
                }
                default: {
                    string0 = "Complete this column to receive a large cash bag.";
                    break;
                }
            };
            break;
        }
        case 118030406: {
            switch (varbitplayer_34150) {
                case 0: {
                    string0 = "Complete this column to receive the legs of the Zombie outfit with the Infected appearance.";
                    break;
                }
                case 2: {
                    string0 = "Complete this column to receive the Decaying appearance for your Zombie outfit legs.";
                    break;
                }
                case 4: {
                    string0 = "Complete this column to receive the Rotten appearance for your Zombie outfit legs.";
                    break;
                }
                default: {
                    string0 = "Complete this column to receive a Huge Prismatic Star.";
                    break;
                }
            };
            break;
        }
        case 118030411: {
            switch (varbitplayer_34150) {
                case 0: {
                    string0 = "Complete this column to receive the torso of the Zombie outfit with the Infected appearance.";
                    break;
                }
                case 2: {
                    string0 = "Complete this column to receive the Decaying appearance for your Zombie outfit torso.";
                    break;
                }
                case 4: {
                    string0 = "Complete this column to receive the Rotten appearance for your Zombie outfit torso.";
                    break;
                }
                default: {
                    string0 = "Complete this column to receive a Huge Prismatic Lamp.";
                    break;
                }
            };
            break;
        }
        case 118030416: {
            switch (varbitplayer_34150) {
                case 0: {
                    string0 = "Complete this column to receive the head of the Zombie outfit with the Infected appearance.";
                    break;
                }
                case 2: {
                    string0 = "Complete this column to receive the Decaying appearance for your Zombie outfit head.";
                    break;
                }
                case 4: {
                    string0 = "Complete this column to receive the Rotten appearance for your Zombie outfit head.";
                    break;
                }
                default: {
                    string0 = "Complete this column to receive 2 Huge Prismatic Stars.";
                    break;
                }
            };
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, int0, -1), int0);
    return;
}