//
function script7098(): void {
    var int0 = -1 as vorbis;
    var int1 = 120;
    if ((varclient_2229 != 0)) {
        switch (RANDOM(3)) {
            case 0: {
                int0 = 21234 as vorbis;
                break;
            }
            case 1: {
                int0 = 21250 as vorbis;
                break;
            }
            case 2: {
                int0 = 21240 as vorbis;
                break;
            }
        };
        int1 = 50;
    } else {
        switch (RANDOM(4)) {
            case 0: {
                int0 = 21230 as vorbis;
                break;
            }
            case 1: {
                int0 = 21254 as vorbis;
                break;
            }
            case 2: {
                int0 = 21235 as vorbis;
                break;
            }
            case 3: {
                int0 = 21238 as vorbis;
                break;
            }
        };
    };
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(int0, 1, 0, int1, 5, 10));
    IF_SETONTIMER(callback(), comp(1251, 3));  // makex2012_progress_dialogue:cancel_layer
    IF_SETTEXT("Done", comp(1251, 10));  // makex2012_progress_dialogue:time_text
    IF_SETONTIMER(callback(), comp(1251, 10));  // makex2012_progress_dialogue:time_text
    IF_SETHIDE(true, comp(1251, 13));  // makex2012_progress_dialogue:cancel_button
    if ((script6431() == 0)) {
        IF_SETHIDE(false, comp(1251, 14));  // makex2012_progress_dialogue:done_button
    };
    return;
}