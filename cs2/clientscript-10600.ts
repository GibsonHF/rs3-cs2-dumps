//
function script10600(int0: unknown_int, int1: component): void {
    var int2 = comp(1536, 3);
    if ((int0 == 2)) {
        int2 = comp(1536, 4);
    };
    var string0 = "";
    switch (IF_GETGRAPHIC(int2)) {
        case 24209: {
            string0 = "+20% Thieving XP from pickpocketing Cadarn<br>+200 Ranged XP from killing Cadarn ranged elf warriors<br>+200 Magic XP from killing Cadarn magic elf warriors";
            break;
        }
        case 24206: {
            string0 = "+20% Thieving XP from pickpocketing Crwys<br>+20% Woodcutting XP from Crwys trees and ivy<br>+20% Farming XP from Crwys farming patches<br>- All bird's nest drops are replaced by Crystal Geodes.<br>- Crops in the district have a chance of skipping growth stages.<br>- Chance to spawn a Guthixian butterfly when harvesting or checking the health of crops.";
            break;
        }
        case 24205: {
            string0 = "+20% Thieving XP from pickpocketing Iorwerth<br>+200 XP split between Attack and Strength from killing Iorwerth elves<br>- When defeating monsters in Rush of Blood you will gain Slayer experience for all monsters.";
            break;
        }
        case 24211: {
            string0 = "+20% Thieving XP from pickpocketing Trahaearn<br>+20% Farming XP from Trahaearn farming patches<br>- Trees planted in the district will have a chance of skipping growth stages.<br>+20% Smithing XP when smelting corrupted ore in the district.<br>+20% chance to award extra ore when mining rocks in the district.<br>At the start of the hour, each ore rock in the district has a chance to be replaced with light animica or dark animica. If replaced on this world, they will yield this ore until the end of the hour.";
            break;
        }
        case 24207: {
            string0 = "+20% Thieving XP from pickpocketing Hefin<br>+20% Agility XP from the Hefin agility course<br>+20% Prayer XP from cleansing Seren Stones<br>- Velocity rate is increased when on the Agility course.<br>- Additional experience is gained in the Prayer skill on the Agility course.<br>- Increased chance of shortcuts appearing on the Agility course.";
            break;
        }
        case 24204: {
            string0 = "+20% Thieving XP from pickpocketing Amlodd<br>+20% Divination XP from converting shadow cores<br>+20% Summoning XP from making pouches or scrolls in the Amlodd district<br>+20% scrolls created in the Amlodd district<br>- 12 scrolls created per pouch instead of 10.<br>- Chance for a chronicle to spawn after killing any of the shadows.";
            break;
        }
        case 24210: {
            string0 = "+20% Thieving XP from pickpocketing Meilyr<br>+20% Farming XP from Meilyr farming patches<br>+20% Herblore XP from making combination potions in the Meilyr district<br>- Trees planted in the district will have a chance of skipping growth stages.";
            break;
        }
        case 24208: {
            string0 = "+20% Thieving XP from pickpocketing Ithell<br>+20% Crafting XP from playing harps<br>+20% Construction XP from tuning harps<br>+20% Crafting XP from crafting crystal flasks in the Ithell district<br>- The harps have a lower chance of losing tune while playing.<br>- The shop stock for the Sawmill operator is doubled.<br>- Each soft clay you mine in the Ithell district has a 50% chance to be transported directly to your bank.";
            break;
        }
        default: {
            string0 = "The voice of Seren is not affecting any of the clans.";
            break;
        }
    };
    if ((script6431() == true)) {
        switch (IF_GETGRAPHIC(int2)) {
            case 24209: {
                string0 = strconcat("Cadarn<br><br>", string0);
                break;
            }
            case 24206: {
                string0 = strconcat("Crwys<br><br>", string0);
                break;
            }
            case 24205: {
                string0 = strconcat("Iorwerth<br><br>", string0);
                break;
            }
            case 24211: {
                string0 = strconcat("Trahaearn<br><br>", string0);
                break;
            }
            case 24207: {
                string0 = strconcat("Hefin<br><br>", string0);
                break;
            }
            case 24204: {
                string0 = strconcat("Amlodd<br><br>", string0);
                break;
            }
            case 24210: {
                string0 = strconcat("Meilyr<br><br>", string0);
                break;
            }
            case 24208: {
                string0 = strconcat("Ithell<br><br>", string0);
                break;
            }
        };
    };
    string0 = strconcat(string0, "<br>- Increased chance of golden rocks and crystal implings in the clan's district.");
    if ((script6431() == true)) {
        script426(string0, int1, 0, 0);
    } else {
        script8800(string0, int1, -1);
    };
    return;
}