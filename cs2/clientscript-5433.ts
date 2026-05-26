//
function script5433(int0: number, int1: number): void {
    var int2 = 8154;
    switch (varclient_1664) {
        case 1: {
            int2 = 8154;
            break;
        }
        case 2: {
            int2 = 8160;
            break;
        }
        case 3: {
            int2 = 8161;
            break;
        }
        case 4: {
            int2 = 8157;
            break;
        }
        case 5: {
            int2 = 8163;
            break;
        }
        case 6: {
            int2 = 8164;
            break;
        }
        case 7: {
            int2 = 8162;
            break;
        }
        case 8: {
            int2 = 8155;
            break;
        }
        case 9: {
            int2 = 8167;
            break;
        }
        case 10: {
            int2 = 8175;
            break;
        }
        case 11: {
            int2 = 8169;
            break;
        }
        case 12: {
            int2 = 8166;
            break;
        }
        case 13: {
            int2 = 8156;
            break;
        }
        case 14: {
            int2 = 8168;
            break;
        }
        case 15: {
            int2 = 8171;
            break;
        }
        case 16: {
            int2 = 8159;
            break;
        }
        case 17: {
            int2 = 8172;
            break;
        }
        case 18: {
            int2 = 8165;
            break;
        }
        case 19: {
            int2 = 8158;
            break;
        }
        case 20: {
            int2 = 8173;
            break;
        }
        case 21: {
            int2 = 8170;
            break;
        }
        case 22: {
            int2 = 8174;
            break;
        }
        default: {
            int2 = 8154;
            break;
        }
    };
    CC_CREATE(76480513, 5, int0);
    CC_SETGRAPHIC(int2);
    CC_SETSIZE(80, 80, 0, 0);
    CC_SETPOSITION(0, int1, 1, 0);
    if ((varclient_1664 < 22)) {
        varclient_1664 = (varclient_1664 + 1);
    } else {
        varclient_1664 = 1;
    };
    return;
}