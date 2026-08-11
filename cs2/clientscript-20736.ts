//
function script20736(int0: number): void {
    if (((int0 == 0) && (script16260() == 0))) {
        return;
    };
    if ((varbitclient_61229 == 1)) {
        switch (RANDOM(3)) {
            case 0: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59910 as vorbis, 1, 0, 170, 15, 15));
                break;
            }
            case 1: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59911 as vorbis, 1, 0, 170, 15, 15));
                break;
            }
            case 2: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59912 as vorbis, 1, 0, 170, 15, 15));
                break;
            }
        };
    } else {
        switch (RANDOM(3)) {
            case 0: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59900 as vorbis, 1, 0, 170, 15, 15));
                break;
            }
            case 1: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59901 as vorbis, 1, 0, 170, 15, 15));
                break;
            }
            case 2: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59902 as vorbis, 1, 0, 170, 15, 15));
                break;
            }
        };
    };
    varbitclient_61229 = (1 - varbitclient_61229);
    IF_SETONTIMER(callback(script20737), comp(1512, 24));  // house_furniture_catalogue:toggle_button_align
    script20738();
    return;
}