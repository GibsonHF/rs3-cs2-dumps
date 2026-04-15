//
function script7064(int0: component): void {
    var string0 = "0";
    switch (IF_GETGRAPHIC(int0)) {
        case 197: {
            string0 = "Weakness: Melee";
            break;
        }
        case 202: {
            string0 = "Weakness: Magic";
            break;
        }
        case 200: {
            string0 = "Weakness: Ranged";
            break;
        }
        case 9286: {
            string0 = "Weakness: None";
            break;
        }
        case 14364: {
            string0 = "Weakness: Air Spells";
            break;
        }
        case 14365: {
            string0 = "Weakness: Water Spells";
            break;
        }
        case 14366: {
            string0 = "Weakness: Earth Spells";
            break;
        }
        case 14367: {
            string0 = "Weakness: Fire Spells";
            break;
        }
        case 240: {
            string0 = "Weakness: Stab";
            break;
        }
        case 234: {
            string0 = "Weakness: Slash";
            break;
        }
        case 256: {
            string0 = "Weakness: Crush";
            break;
        }
        case 14405: {
            string0 = "Weakness: Arrows";
            break;
        }
        case 14370: {
            string0 = "Weakness: Bolts";
            break;
        }
        case 251: {
            string0 = "Weakness: Thrown";
            break;
        }
        default: {
            script8808();
            return;
        }
    };
    script8800(string0, int0, -1);
    return;
}