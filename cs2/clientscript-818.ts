//
function script818(int0: number): void {
    var string0 = "No information is available about this beacon.";
    var int1 = -1;
    switch (int0) {
        case 1: {
            int1 = 37683203;
            break;
        }
        case 2: {
            int1 = 37683204;
            break;
        }
        case 3: {
            int1 = 37683205;
            break;
        }
        case 4: {
            int1 = 37683206;
            break;
        }
        case 5: {
            int1 = 37683207;
            break;
        }
        case 6: {
            int1 = 37683208;
            break;
        }
        case 7: {
            int1 = 37683209;
            break;
        }
        case 8: {
            int1 = 37683210;
            break;
        }
        case 9: {
            int1 = 37683211;
            break;
        }
        case 10: {
            int1 = 37683212;
            break;
        }
        case 11: {
            int1 = 37683213;
            break;
        }
        case 12: {
            int1 = 37683214;
            break;
        }
        case 13: {
            int1 = 37683215;
            break;
        }
        case 14: {
            int1 = 37683216;
            break;
        }
        default: {
            return;
        }
    };
    IF_SETMODEL(41805, int1);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int1);
    return;
}