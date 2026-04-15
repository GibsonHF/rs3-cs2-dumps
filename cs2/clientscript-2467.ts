//
function script2467(int0: component, int1: unknown_int): void {
    var int2 = varbitplayer_30173;
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
    varbitplayer_30173 = int2;
    script2470(int0, int2, varclient_5113);
    return;
}