//
function script10905(int0: component): void {
    var string0 = "";
    switch (varbitplayer_41) {
        case 1: {
            string0 = "Bandit Camp";
            break;
        }
        case 2: {
            string0 = "Lunar Isle";
            break;
        }
        case 3: {
            string0 = "Al Kharid";
            break;
        }
        case 4: {
            string0 = "Ardougne";
            break;
        }
        case 5: {
            string0 = "Burthorpe";
            break;
        }
        case 6: {
            string0 = "Catherby";
            break;
        }
        case 7: {
            string0 = "Draynor";
            break;
        }
        case 8: {
            string0 = "Edgeville";
            break;
        }
        case 9: {
            string0 = "Falador";
            break;
        }
        case 10: {
            string0 = "Lumbridge";
            break;
        }
        case 11: {
            string0 = "Port Sarim";
            break;
        }
        case 12: {
            string0 = "Seers' Village";
            break;
        }
        case 13: {
            string0 = "Taverley";
            break;
        }
        case 14: {
            string0 = "Varrock";
            break;
        }
        case 15: {
            string0 = "Yanille";
            break;
        }
        case 16: {
            string0 = "Canifis";
            break;
        }
        case 17: {
            string0 = "Eagles' Peak";
            break;
        }
        case 18: {
            string0 = "Fremennik Province";
            break;
        }
        case 19: {
            string0 = "Karamja";
            break;
        }
        case 20: {
            string0 = "Oo'glog";
            break;
        }
        case 21: {
            string0 = "Tirannwn";
            break;
        }
        case 22: {
            string0 = "Wilderness Crater";
            break;
        }
        case 23: {
            string0 = "Ashdale";
            break;
        }
        case 24: {
            string0 = "Prifddinas";
            break;
        }
        case 26: {
            string0 = "Menaphos";
            break;
        }
        case 27: {
            string0 = "Anachronia";
            break;
        }
        case 28: {
            string0 = "Fort Forinthry";
            break;
        }
        case 29: {
            string0 = "City of Um";
            break;
        }
        case 30: {
            string0 = "Christmas Village";
            break;
        }
        case 31: {
            string0 = "Blooming Burrow";
            break;
        }
        case 32: {
            string0 = "Harvest Hollow";
            break;
        }
        case 33: {
            string0 = "Wendlewick";
            break;
        }
        default: {
            string0 = "Previous Destination";
            break;
        }
    };
    IF_SETOP(2, `Teleport ${string0}`, int0);
    return;
}