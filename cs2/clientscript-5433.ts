//
function script5433(int0: int, int1: int): void {
    var int2 = 8154 as graphic;
    switch (varclient_1664) {
        case 1: {
            int2 = 8154 as graphic;
            break;
        }
        case 2: {
            int2 = 8160 as graphic;
            break;
        }
        case 3: {
            int2 = 8161 as graphic;
            break;
        }
        case 4: {
            int2 = 8157 as graphic;
            break;
        }
        case 5: {
            int2 = 8163 as graphic;
            break;
        }
        case 6: {
            int2 = 8164 as graphic;
            break;
        }
        case 7: {
            int2 = 8162 as graphic;
            break;
        }
        case 8: {
            int2 = 8155 as graphic;
            break;
        }
        case 9: {
            int2 = 8167 as graphic;
            break;
        }
        case 10: {
            int2 = 8175 as graphic;
            break;
        }
        case 11: {
            int2 = 8169 as graphic;
            break;
        }
        case 12: {
            int2 = 8166 as graphic;
            break;
        }
        case 13: {
            int2 = 8156 as graphic;
            break;
        }
        case 14: {
            int2 = 8168 as graphic;
            break;
        }
        case 15: {
            int2 = 8171 as graphic;
            break;
        }
        case 16: {
            int2 = 8159 as graphic;
            break;
        }
        case 17: {
            int2 = 8172 as graphic;
            break;
        }
        case 18: {
            int2 = 8165 as graphic;
            break;
        }
        case 19: {
            int2 = 8158 as graphic;
            break;
        }
        case 20: {
            int2 = 8173 as graphic;
            break;
        }
        case 21: {
            int2 = 8170 as graphic;
            break;
        }
        case 22: {
            int2 = 8174 as graphic;
            break;
        }
        default: {
            int2 = 8154 as graphic;
            break;
        }
    };
    CC_CREATE(comp(1167, 1), 5, int0);
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