//
function script10068(int0: component, int1: int): void {
    var int2 = (int1 + 1);
    if ((script8284(varbitplayer_18994, int2) == 0)) {
        return;
    };
    switch (RANDOM(5)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59087 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59088 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59089 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59090 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
        case 4: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59091 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
    };
    switch (varbitplayer_18994) {
        case 3: {
            if ((int2 == 3)) {
                IF_TRIGGEROP(comp(1477, 24), -1, 1);
            };
            break;
        }
        case 4: {
            if ((int2 == 6)) {
                IF_TRIGGEROP(comp(1477, 25), -1, 1);
            };
            break;
        }
    };
    script8193();
    script8192();
    IF_SETHIDE(false, comp(1448, 1));
    script445(varbitplayer_18994, int2);
    script8186(int0);
    return;
}