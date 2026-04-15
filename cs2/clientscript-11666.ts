//
function script11666(int0: component, int1: component): void {
    switch (RANDOM(3)) {
        case 0: {
            SOUND_VORBIS_VOLUME(2541 as vorbis, 1, 0, 150);
            break;
        }
        case 1: {
            SOUND_VORBIS_VOLUME(2542 as vorbis, 1, 0, 150);
            break;
        }
        case 2: {
            SOUND_VORBIS_VOLUME(2543 as vorbis, 1, 0, 150);
            break;
        }
    };
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    var int2 = IF_GETX(int0);
    var int3 = IF_GETY(int0);
    var int4 = IF_GETX(int1);
    var int5 = IF_GETY(int1);
    IF_SETPOSITION(int4, int5, 0, 0, int0);
    IF_SETPOSITION(int2, int3, 0, 0, int1);
    return;
}