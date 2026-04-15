//
function script10618(int0: unknown_int, int1: unknown_int): void {
    var string0 = "";
    var string1 = "";
    switch (int0) {
        case 0: {
            string0 = "Combat";
            string1 = "Train any of the following combat skills for a chance to receive a golden partyhat shard: <br><br>Attack, Strength, Ranged, Magic, Necromancy, Constitution, Defence, Prayer and Summoning.";
            break;
        }
        case 1: {
            string0 = "Gathering";
            string1 = "Train any of the following gathering skills for a chance to receive a golden partyhat shard: <br><br>Fishing, Mining, Woodcutting, Farming, Hunter, Divination and Archaeology.";
            break;
        }
        case 2: {
            string0 = "Artisan";
            string1 = "Train any of the following artisan skills for a chance to receive a golden partyhat shard: <br><br>Herblore, Crafting, Fletching, Smithing, Cooking, Firemaking, Construction and Runecrafting.";
            break;
        }
        case 3: {
            string0 = "Support";
            string1 = "Train any of the following support skills for a chance to receive a golden partyhat shard: <br><br>Agility, Thieving, completing Slayer tasks and completing Dungeoneering floors.";
            break;
        }
        case 4: {
            string0 = "Clue Scrolls";
            string1 = "Complete clue scrolls for a chance to receive a golden partyhat shard. Only clues completed during the event will count towards this.";
            break;
        }
        case 5: {
            string0 = "Boss";
            string1 = "Defeat bosses to earn Marks of War for a chance to receive a golden partyhat shard.";
            break;
        }
        case 6: {
            string0 = "Host";
            string1 = "Talk to the Wise Old Man outside the Grand Exchange in Varrock for a free golden partyhat shard.";
            break;
        }
        case 7: {
            string0 = "Quest";
            string1 = "Complete all four parts of the Once Upon a Time quest for a golden partyhat shard.";
            break;
        }
        case 8: {
            string0 = "Yak Track";
            string1 = "Complete Tier 15 of the free track on the Wintumber Aurora Yak Track to receive a golden partyhat shard : <br><br>The Yak Track will be active between 29th November 2021 and 9th January 2022.";
            break;
        }
        case 9: {
            string0 = "Premier Membership";
            string1 = "Become a Premier member for a free golden partyhat shard. This shard will be available until January 16th 2022.";
            break;
        }
        case 10: {
            string0 = "Gold";
            string1 = "There's a shady salesman hiding in the Grand Exchange who is selling a golden partyhat shard.";
            break;
        }
        default: {
            return;
        }
    };
    script11847(string1);
    IF_SETTEXT(string1, comp(1802, 327));
    IF_SETTEXT(string0, comp(1802, 328));
    script10983(int1);
    return;
}