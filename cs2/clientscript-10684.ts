//
function script10684(int0: dbrow): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int1 = varbitplayer_22875;
    if ((DB_GETFIELDCOUNT(int0, 540672) <= int1)) {
        int1 = 0;
    };
    switch (dbrow_getfield(int0, 540672, int1)) {
        case 12: {
            CC_SETCOLOUR(3024933);
            CC_SETFILL(1);
            break;
        }
        case 63: {
            CC_SETCOLOUR(1775893);
            CC_SETFILL(1);
            break;
        }
        case 400: {
            CC_SETCOLOUR(1449531);
            CC_SETFILL(1);
            break;
        }
        case 13: {
            CC_SETCOLOUR(2367774);
            CC_SETFILL(1);
            break;
        }
        case 64: {
            CC_SETCOLOUR(3682602);
            CC_SETFILL(1);
            break;
        }
        case 401: {
            CC_SETCOLOUR(1386056);
            CC_SETFILL(1);
            break;
        }
        case 173: {
            CC_SETCOLOUR(3219480);
            CC_SETFILL(1);
            break;
        }
        case 174: {
            CC_SETCOLOUR(3682602);
            CC_SETFILL(1);
            break;
        }
        case 402: {
            CC_SETCOLOUR(1650263);
            CC_SETFILL(1);
            break;
        }
        case 269: {
            CC_SETCOLOUR(1029);
            CC_SETFILL(1);
            break;
        }
        case 65: {
            CC_SETCOLOUR(4209721);
            CC_SETFILL(1);
            break;
        }
        case 66: {
            CC_SETCOLOUR(4141604);
            CC_SETFILL(1);
            break;
        }
        case 403: {
            CC_SETCOLOUR(2695463);
            CC_SETFILL(1);
            break;
        }
        case 270: {
            CC_SETCOLOUR(4209721);
            CC_SETFILL(0);
            break;
        }
        case 271: {
            CC_SETCOLOUR(4141604);
            CC_SETFILL(0);
            break;
        }
        case 404: {
            CC_SETCOLOUR(2695463);
            CC_SETFILL(0);
            break;
        }
        case 67: {
            CC_SETCOLOUR(9732984);
            CC_SETFILL(0);
            break;
        }
        case 68: {
            CC_SETCOLOUR(5126439);
            CC_SETFILL(0);
            break;
        }
        case 405: {
            CC_SETCOLOUR(2695463);
            CC_SETFILL(0);
            break;
        }
        case 288: {
            CC_SETCOLOUR(15413039);
            CC_SETFILL(0);
            break;
        }
        case 289: {
            CC_SETCOLOUR(12201236);
            CC_SETFILL(0);
            break;
        }
        case 406: {
            CC_SETCOLOUR(15413039);
            CC_SETFILL(0);
            break;
        }
        case 290: {
            CC_SETCOLOUR(15777401);
            CC_SETFILL(0);
            break;
        }
        case 291: {
            CC_SETCOLOUR(16750623);
            CC_SETFILL(0);
            break;
        }
        case 407: {
            CC_SETCOLOUR(14277545);
            CC_SETFILL(0);
            break;
        }
        case 69: {
            CC_SETCOLOUR(9732984);
            CC_SETFILL(1);
            break;
        }
        case 70: {
            CC_SETCOLOUR(5126439);
            CC_SETFILL(1);
            break;
        }
        case 408: {
            CC_SETCOLOUR(2695463);
            CC_SETFILL(1);
            break;
        }
        case 17: {
            CC_SETCOLOUR(script10495(11));
            CC_SETFILL(1);
            CC_SETTRANS(125);
            break;
        }
        case 18: {
            CC_SETCOLOUR(script10495(14));
            CC_SETFILL(1);
            CC_SETTRANS(125);
            break;
        }
        case 272: {
            CC_SETCOLOUR(4927014);
            CC_SETFILL(1);
            break;
        }
        case 273: {
            CC_SETCOLOUR(3682602);
            CC_SETFILL(1);
            break;
        }
        case 409: {
            CC_SETCOLOUR(1386056);
            CC_SETFILL(1);
            break;
        }
        default: {
            CC_SETCOLOUR(16777215);
            CC_SETFILL(0);
            break;
        }
    };
    CC_SETONVARTRANSMIT(callback(script10701, -2147483645, -2147483643, int0, varbitplayer_22875, int1, 3814, 1));
    return;
}