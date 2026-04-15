//
function script12984(int0: unknown_int): void {
    var string0 = "";
    switch (int0) {
        case 119079003: {
            string0 = "How many times you have completed your list.";
            break;
        }
        case 119079004: {
            string0 = "Use gold star stickers to complete tasks immediately!";
            break;
        }
        case 119078925: {
            string0 = "Saturday Night: Find Party Pete's lost Wig. It's in a Field after a crazy Saturday Night.";
            break;
        }
        case 119078928: {
            string0 = "Go for a run: Run to the north most part of the Wilderness! (beyond the north-eastern volcano)";
            break;
        }
        case 119078931: {
            string0 = "A New look: Change something about your appearance for that '2017' look, whatever that is in the 6th age.";
            break;
        }
        case 119078934: {
            string0 = "Jan-u-dry: Visit the following - Blue Moon Inn, Blurberry's bar, Dead Man's Chest, Dragon Inn, Poison Arrow, Forester's Arms, Jolly Boar Inn, Karamja Spirits Bar, Rising Sun Inn and the Rusty Anchor Inn.";
            break;
        }
        case 119078938: {
            string0 = "Respect the Law: Play a game of Heist.";
            break;
        }
        case 119078941: {
            string0 = "Grown your own: Harvest a pineapple.";
            break;
        }
        case 119078944: {
            string0 = "Delia-cious: Cook healthier food by making Tangled Toad's Legs using your gnome cooking skills.";
            break;
        }
        case 119078947: {
            string0 = `Give up smoking: Kill 60 dust devils in the Smoke Dungeon - ${inttostring(varbitplayer_34569, 10)}/60`;
            break;
        }
        case 119078951: {
            string0 = "Here we go around the barberry bush: Harvest a Barberry bush.";
            break;
        }
        case 119079088: {
            string0 = "Social-light: complete a medium or large occult or warped Dungeoneering floor.";
            break;
        }
        case 119079091: {
            string0 = `Join a Gym-Kaan-a: Complete 10 Laps of the Dorgesh-Kaan Agility Course - ${inttostring(varbitplayer_34570, 10)}/10`;
            break;
        }
        case 119079094: {
            string0 = "Stop biting your nails: Finish a Reaper task.";
            break;
        }
        case 119078955: {
            string0 = "It's a new dawn, it's a new day...: Change the lighting in your Player Owned House to Day, then Dusk, then Night.";
            break;
        }
        case 119079097: {
            string0 = `Go on holiday: Gather some rare resources 100 times from an uncharted isle - ${inttostring(varbitplayer_34582, 10)}/100`;
            break;
        }
        case 119079100: {
            if ((script4148() == true)) {
                string0 = "Detox: Bring Party Pete the following - Replenishment Potion, Divine Simulacrum II, a Crystal Geode, 120 Harmonic Dust, 1 Phoenix Quill and a Basket of Tomatoes to make his detox drink.";
            } else {
                string0 = "Detox: Bring Party Pete the following - Replenishment Potion, Divine Simulacrum II, a Crystal Geode, 120 Harmonic Dust, 1 Silverhawk Feather (or Silverhawk Down) and a Basket of Tomatoes to make his detox drink.";
            };
            break;
        }
        case 119079103: {
            string0 = "You're Kil'n me!: Take on a new challenge and obtain a TokHaar-Kal cape of your choice or an uncut onyx from the Fight Kiln.";
            break;
        }
        case 119078959: {
            string0 = "Complete this line to get a medium cash bag.";
            break;
        }
        case 119078963: {
            string0 = "Complete this line to get a large cash bag.";
            break;
        }
        case 119078967: {
            string0 = "Complete this line to get a huge prismatic star.";
            break;
        }
        case 119078971: {
            string0 = "Complete this line to get a huge prismatic lamp.";
            break;
        }
        case 119078976: {
            switch (varbitplayer_34526) {
                case 0: {
                    string0 = "Disco feet.";
                    break;
                }
                case 2: {
                    string0 = "Cool Disco feet.";
                    break;
                }
                case 4:
                case 5: {
                    string0 = "Super Disco feet.";
                    break;
                }
                default: {
                    string0 = "Complete this column to receive a large cash bag.";
                    break;
                }
            };
            break;
        }
        case 119078982: {
            switch (varbitplayer_34526) {
                case 0: {
                    string0 = "Disco hands.";
                    break;
                }
                case 2: {
                    string0 = "Cool Disco hands.";
                    break;
                }
                case 4:
                case 5: {
                    string0 = "Super Disco hands.";
                    break;
                }
                default: {
                    string0 = "Complete this column to receive a Huge Prismatic Star.";
                    break;
                }
            };
            break;
        }
        case 119078987: {
            switch (varbitplayer_34526) {
                case 0: {
                    string0 = "Disco legs.";
                    break;
                }
                case 2: {
                    string0 = "Cool Disco legs.";
                    break;
                }
                case 4:
                case 5: {
                    string0 = "Super Disco legs.";
                    break;
                }
                default: {
                    string0 = "Complete this column to receive a Huge Prismatic Lamp.";
                    break;
                }
            };
            break;
        }
        case 119078992: {
            switch (varbitplayer_34526) {
                case 0: {
                    string0 = "Disco top.";
                    break;
                }
                case 2: {
                    string0 = "Cool Disco top.";
                    break;
                }
                case 4:
                case 5: {
                    string0 = "Super Disco top.";
                    break;
                }
                default: {
                    string0 = "Complete this column to receive 2 Huge Prismatic Stars.";
                    break;
                }
            };
            break;
        }
        case 119079018: {
            string0 = "Do the robot? Emote.";
            break;
        }
        case 119079027: {
            string0 = "Can I get a Whoop Whoop? Emote";
            break;
        }
        case 119079036: {
            string0 = "Shimmy shake! Emote.";
            break;
        }
        case 119079046: {
            string0 = "Jazz splits Emote.";
            break;
        }
        case 119079055: {
            string0 = "Conga Walk Override.";
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, int0, -1), int0);
    return;
}