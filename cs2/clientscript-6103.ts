//
function script6103(): void {
    IF_SETTEXT(varclient_2361, comp(1265, 59));
    var string0 = "";
    var string1 = "";
    switch (varclient_1876) {
        case 0:
        case 1:
        case 3:
        case 4:
        case 5:
        case 6: {
            string0 = "This is a piece of apparel.";
            break;
        }
        case 2:
        case 7: {
            string0 = "This is a piece of jewellery.";
            break;
        }
        case 9: {
            string0 = "This is a shield.";
            break;
        }
        case 11:
        case 17:
        case 14: {
            string0 = "This is a melee weapon.";
            break;
        }
        case 12:
        case 18:
        case 15: {
            string0 = "This is a ranged weapon.";
            break;
        }
        case 13:
        case 19:
        case 16: {
            string0 = "This is a weapon for mages.";
            break;
        }
        case 8: {
            string0 = "Ammunition for a ranged weapon.";
            break;
        }
        case 60: {
            string0 = "This is an aura focus.";
            break;
        }
        case 30:
        case 31:
        case 32: {
            string0 = "This is a tool.";
            break;
        }
        case 33:
        case 34: {
            string0 = "This is a piece of food.";
            break;
        }
        case 90:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109: {
            string0 = "This is a usable item.";
            break;
        }
        case 36: {
            string0 = "This is a magic rune.";
            break;
        }
    };
    IF_SETTEXT(string0, comp(1265, 63));
    switch (varclient_1876) {
        case 0: {
            string1 = "It is worn on the head.";
            break;
        }
        case 1: {
            string1 = "It is worn on the back.";
            break;
        }
        case 3: {
            string1 = "It is worn on the torso.";
            break;
        }
        case 4: {
            string1 = "It is worn on the legs.";
            break;
        }
        case 5: {
            string1 = "It is worn on the hands.";
            break;
        }
        case 6: {
            string1 = "It is worn on the feet.";
            break;
        }
        case 9: {
            string1 = "It is held in the left hand.";
            break;
        }
        case 11:
        case 12:
        case 13: {
            string1 = "It is wielded in the right hand.";
            break;
        }
        case 17:
        case 18:
        case 19: {
            string1 = "It is wielded in the left hand.";
            break;
        }
        case 14:
        case 15:
        case 16: {
            string1 = "It is wielded in both hands.";
            break;
        }
        case 2: {
            string1 = "It is worn around the neck.";
            break;
        }
        case 7: {
            string1 = "It is worn on the hand.";
            break;
        }
        case 8: {
            string1 = "It is carried in the quiver.";
            break;
        }
        case 60: {
            string1 = "It imbues you when activated.";
            break;
        }
        case 30: {
            string1 = "You can place it in your tool belt to save space.";
            break;
        }
        case 31: {
            string1 = "You have one in your tool belt already.";
            break;
        }
        case 34: {
            string1 = "It needs cooking to be edible.";
            break;
        }
        case 36: {
            string1 = "Runes are needed to cast spells.";
            break;
        }
        case 90: {
            string1 = "It is mainly used in combat.";
            break;
        }
        case 91: {
            string1 = "It is mainly used in prayer.";
            break;
        }
        case 92: {
            string1 = "It is mainly used in agility.";
            break;
        }
        case 93: {
            string1 = "It is mainly used in herblore.";
            break;
        }
        case 94: {
            string1 = "It is mainly used in thieving.";
            break;
        }
        case 95: {
            string1 = "It is mainly used in crafting.";
            break;
        }
        case 96: {
            string1 = "It is mainly used in runecrafting.";
            break;
        }
        case 97: {
            string1 = "It is mainly used in mining.";
            break;
        }
        case 98: {
            string1 = "It is mainly used in smithing.";
            break;
        }
        case 99: {
            string1 = "It is mainly used in fishing.";
            break;
        }
        case 100: {
            string1 = "It is mainly used in cooking.";
            break;
        }
        case 101: {
            string1 = "It is mainly used in firemaking.";
            break;
        }
        case 102: {
            string1 = "It is mainly used in woodcutting.";
            break;
        }
        case 103: {
            string1 = "It is mainly used in fletching.";
            break;
        }
        case 104: {
            string1 = "It is mainly used in slaying.";
            break;
        }
        case 105: {
            string1 = "It is mainly used in farming.";
            break;
        }
        case 106: {
            string1 = "It is mainly used in construction.";
            break;
        }
        case 107: {
            string1 = "It is mainly used in hunting.";
            break;
        }
        case 108: {
            string1 = "It is mainly used in summoning.";
            break;
        }
        case 109: {
            string1 = "It is mainly used in dungeoneering.";
            break;
        }
        case 70: {
            string1 = "Buying this unlocks mime emotes.";
            break;
        }
        case 71: {
            string1 = "Buying this unlocks zombie emotes.";
            break;
        }
    };
    IF_SETTEXT(string1, comp(1265, 64));
    return;
}