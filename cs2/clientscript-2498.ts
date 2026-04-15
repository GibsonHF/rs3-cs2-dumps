//
function script2498(int0: component, int1: seq, string0: unknown_string): void {
    IF_SETMODELANIM(int1, int0);
    switch (RANDOM(2)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(57283 as vorbis, 1, 0, 130, 20, 20));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(57284 as vorbis, 1, 0, 130, 20, 20));
            break;
        }
    };
    return;
}