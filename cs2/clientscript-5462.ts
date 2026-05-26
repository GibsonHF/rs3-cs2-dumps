//
function script5462(int0: number, int1: number): void {
    var int2 = -1;
    var string0 = "";
    switch (int0) {
        case 1: {
            int2 = 8178;
            string0 = "Reduced melee attack";
            break;
        }
        case 2: {
            int2 = 8184;
            string0 = "No shield";
            break;
        }
        case 3: {
            int2 = 8185;
            string0 = "No food";
            break;
        }
        case 4: {
            int2 = 8181;
            string0 = "Reduced melee defence";
            break;
        }
        case 5: {
            int2 = 8187;
            string0 = "Random freeze";
            break;
        }
        case 6: {
            int2 = 8188;
            string0 = "Halved HP";
            break;
        }
        case 7: {
            int2 = 8186;
            string0 = "No body armour";
            break;
        }
        case 8: {
            int2 = 8179;
            string0 = "Reduced ranged attack";
            break;
        }
        case 9: {
            int2 = 8191;
            string0 = "No familiar";
            break;
        }
        case 10: {
            int2 = 8199;
            string0 = "Monster stun";
            break;
        }
        case 11: {
            int2 = 8193;
            string0 = "No prayers";
            break;
        }
        case 12: {
            int2 = 8190;
            string0 = "Slippery fingers";
            break;
        }
        case 13: {
            int2 = 8180;
            string0 = "Reduced magic attack";
            break;
        }
        case 14: {
            int2 = 8192;
            string0 = "Reduced adrenaline gain";
            break;
        }
        case 15: {
            int2 = 8195;
            string0 = "No ultimate abilities";
            break;
        }
        case 16: {
            int2 = 8183;
            string0 = "Reduced magic defence";
            break;
        }
        case 17: {
            int2 = 8196;
            string0 = "Random daze";
            break;
        }
        case 18: {
            int2 = 8189;
            string0 = "Poisoned";
            break;
        }
        case 19: {
            int2 = 8182;
            string0 = "Reduced ranged defence";
            break;
        }
        case 20: {
            int2 = 8197;
            string0 = "No powerups";
            break;
        }
        case 21: {
            int2 = 8194;
            string0 = "No potions";
            break;
        }
        case 22: {
            int2 = 8198;
            string0 = "Life saver";
            break;
        }
        default: {
            int2 = 8178;
            break;
        }
    };
    CC_CREATE(75956255, 5, int1);
    CC_SETGRAPHIC(int2);
    CC_SETSIZE(23, 23, 0, 0);
    CC_SETPOSITION(varclient_1670, varclient_1671, 2, 2);
    varclient_1670 = (varclient_1670 + 24);
    if ((varclient_1670 > 180)) {
        varclient_1670 = 0;
        varclient_1671 = (varclient_1671 + 24);
    };
    script5464();
    script3537(string0);
    return;
}