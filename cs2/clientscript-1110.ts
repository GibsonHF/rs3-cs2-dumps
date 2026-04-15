//[clientscript,bankpin_button]
function script1110(int0: unknown_int): void {
    if ((int0 != 1)) {
        return;
    };
    varbitplayer_446 = MIN((varbitplayer_446 + 1), 3);
    switch (RANDOM(4)) {
        case 0: {
            SOUND_VORBIS_VOLUME(39599 as vorbis, 1, 0, 150);
            break;
        }
        case 1: {
            SOUND_VORBIS_VOLUME(39604 as vorbis, 1, 0, 150);
            break;
        }
        case 2: {
            SOUND_VORBIS_VOLUME(39606 as vorbis, 1, 0, 150);
            break;
        }
        case 3: {
            SOUND_VORBIS_VOLUME(39600 as vorbis, 1, 0, 150);
            break;
        }
    };
    script1271(1);
    return;
}