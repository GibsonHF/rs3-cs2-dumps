//
function script3469(int0: component, int1: int): void {
    switch (RANDOMINC(2)) {
        case 0: {
            SOUND_SYNTH(34529, 1, RANDOM(15));
            break;
        }
        case 1: {
            SOUND_SYNTH(28132, 1, RANDOM(15));
            break;
        }
        case 2: {
            SOUND_SYNTH(31092, 1, RANDOM(15));
            break;
        }
    };
    if ((int1 < (SPLINE_LENGTH(0) - 2))) {
        CAM_MOVEALONG(0, int1, 3100, 3300, 1, int1);
        IF_SETONCAMFINISHED(callback(script3469, int0, (int1 + 1)), int0);
        return;
    };
    CAM_MOVEALONG(0, int1, 1000, 0, 1, int1);
    IF_SETONCAMFINISHED(callback(), int0);
    return;
}