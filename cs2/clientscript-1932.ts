//
function script1932(): void {
    IF_SETHIDE(false, comp(267, 43));
    script14093(comp(267, 43), -1, 227, 0, 0, 1, 15, 2);
    switch (RANDOM(4)) {
        case 0: {
            SOUND_VORBIS_VOLUME(33971 as vorbis, 1, 0, 250);
            break;
        }
        case 1: {
            SOUND_VORBIS_VOLUME(33972 as vorbis, 1, 0, 250);
            break;
        }
        case 2: {
            SOUND_VORBIS_VOLUME(33976 as vorbis, 1, 0, 250);
            break;
        }
        case 3: {
            SOUND_VORBIS_VOLUME(33977 as vorbis, 1, 0, 250);
            break;
        }
    };
    return;
}