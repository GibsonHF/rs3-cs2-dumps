//
function script14476(int0: cs2enum): void {
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    switch (int0) {
        case 6518: {
            [int1, int2] = [comp(655, 82), comp(655, 83)];
            break;
        }
        case 6519: {
            [int1, int2] = [comp(655, 84), comp(655, 85)];
            break;
        }
        case 6520: {
            [int1, int2] = [comp(655, 94), comp(655, 95)];
            break;
        }
        default: {
            return;
        }
    };
    script10416(int1, int2, "", "", "", (1 - script14451(int0)));
    return;
}