//
function script7098(): void {
    var int0 = -1;
    var int1 = 120;
    if ((varclient_2229 != 0)) {
        switch (RANDOM(3)) {
            case 0: {
                int0 = 21234;
                break;
            }
            case 1: {
                int0 = 21250;
                break;
            }
            case 2: {
                int0 = 21240;
                break;
            }
        };
        int1 = 50;
    } else {
        switch (RANDOM(4)) {
            case 0: {
                int0 = 21230;
                break;
            }
            case 1: {
                int0 = 21254;
                break;
            }
            case 2: {
                int0 = 21235;
                break;
            }
            case 3: {
                int0 = 21238;
                break;
            }
        };
    };
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(int0, 1, 0, int1, 5, 10));
    IF_SETONTIMER(callback(), 81985539);
    IF_SETTEXT("Done", 81985546);
    IF_SETONTIMER(callback(), 81985546);
    IF_SETHIDE(1, 81985549);
    if ((script6431() == 0)) {
        IF_SETHIDE(0, 81985550);
    };
    return;
}