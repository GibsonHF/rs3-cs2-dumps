//
function script12033(int0: component, int1: unknown_int): void {
    var int2 = varbitplayer_47452;
    switch (int1) {
        case 1: {
            int2 = MODULO((int2 + 1), (2 + 1));
            break;
        }
        case 2: {
            int2 = 0;
            break;
        }
        case 3: {
            int2 = 1;
            break;
        }
        case 4: {
            int2 = 2;
            break;
        }
        case 5: {
            return;
        }
    };
    varbitplayer_47452 = int2;
    script12036(int0, int2, varclient_5113);
    return;
}