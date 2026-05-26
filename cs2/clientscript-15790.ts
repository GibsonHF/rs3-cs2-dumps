//
function script15790(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    switch (varbitplayer_49044) {
        case 10: {
            if (((varclient_1971 > (int0 + 250)) || (varclient_1971 < (int0 - 250)))) {
                IF_TRIGGEROP(55377928, -1, 1);
                IF_SETONTIMER(callback(), 55377927);
                return;
            };
            break;
        }
        case 15: {
            [int1, int2] = CAM2_GETPOSITIONENTITY_ANGLEOFFSETS();
            if (((int2 >= 7000) && (int2 <= 10000))) {
                IF_TRIGGEROP(55377928, -1, 1);
                IF_SETONTIMER(callback(), 55377927);
                return;
            };
            break;
        }
    };
    IF_SETONTIMER(callback(script15790, int0), 55377927);
    return;
}