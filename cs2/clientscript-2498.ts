//
function script2498(int0: number, int1: number, string0: string): void {
    IF_SETMODELANIM(int1, int0);
    switch (RANDOM(2)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(57283, 1, 0, 130, 20, 20));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(57284, 1, 0, 130, 20, 20));
            break;
        }
    };
    return;
}