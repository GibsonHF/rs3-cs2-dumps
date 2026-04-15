//
function script2772(int0: component, int1: int): void {
    var int2 = (SPLINE_LENGTH(0) - 2);
    if (((varclient_1007 != 2) || (int1 > int2))) {
        IF_SETONCAMFINISHED(callback(), int0);
        return;
    };
    switch (RANDOMINC(2)) {
        case 0: {
            SOUND_SYNTH(34529, 1, 0);
            break;
        }
        case 1: {
            SOUND_SYNTH(28132, 1, 0);
            break;
        }
        case 2: {
            SOUND_SYNTH(31092, 1, 0);
            break;
        }
    };
    CAM_MOVEALONG(0, int1, 2500, 2400, 1, int1);
    if ((int1 < int2)) {
        IF_SETONCAMFINISHED(callback(script2772, int0, (int1 + 1)), int0);
    };
    return;
}