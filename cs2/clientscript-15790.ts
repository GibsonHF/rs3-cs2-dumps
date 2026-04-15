//
function script15790(int0: int): void {
    var int1 = 0;
    var int2 = 0;
    switch (varbitplayer_49044) {
        case 10: {
            if (((varclient_1971 > (int0 + 250)) || (varclient_1971 < (int0 - 250)))) {
                IF_TRIGGEROP(comp(845, 8), -1, 1);
                IF_SETONTIMER(callback(), comp(845, 7));
                return;
            };
            break;
        }
        case 15: {
            [int1, int2] = CAM2_GETPOSITIONENTITY_ANGLEOFFSETS();
            if (((int2 >= 7000) && (int2 <= 10000))) {
                IF_TRIGGEROP(comp(845, 8), -1, 1);
                IF_SETONTIMER(callback(), comp(845, 7));
                return;
            };
            break;
        }
    };
    IF_SETONTIMER(callback(script15790, int0), comp(845, 7));
    return;
}