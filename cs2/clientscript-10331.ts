//
function script10331(int0: unknown_int, int1: unknown_int): void {
    var int2 = 0;
    switch (int1) {
        case 1: {
            int2 = MODULO((varbitplayer_24596 + 1), 4);
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
            int2 = 3;
            break;
        }
    };
    script10332(int2);
    return;
}