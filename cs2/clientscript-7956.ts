//
function script7956(int0: int, int1: unknown_int): void {
    var int2 = 25;
    var int3 = varclient_172;
    varclient_172 = int0;
    switch (varclient_172) {
        case 25: {
            varclient_3522 = 500000;
            break;
        }
        case 37: {
            varclient_3522 = 338000;
            break;
        }
        case 50: {
            varclient_3522 = 250000;
            break;
        }
        case 75: {
            varclient_3522 = 167000;
            break;
        }
        case 100: {
            varclient_3522 = 125000;
            break;
        }
        default: {
            varclient_3522 = 62500;
            break;
        }
    };
    if ((int1 == 1)) {
        varclient_3521 = varclient_3522;
        script7952();
    } else if ((int3 != int0)) {
        if ((varclient_3521 < varclient_3522)) {
            varclient_3523 = ((varclient_3522 - varclient_3521) / int2);
        } else {
            varclient_3523 = ((varclient_3521 - varclient_3522) / int2);
        };
    };
    return;
}