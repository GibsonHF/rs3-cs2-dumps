//
function script11130(int0: graphic): void {
    switch (int0) {
        case 25110: {
            SOUND_VORBIS_RATE(4176 as vorbis, 1, 0, 120, 512);
            break;
        }
        case 25109: {
            SOUND_VORBIS_RATE(39524 as vorbis, 1, 0, 120, 512);
            break;
        }
        case 25112: {
            SOUND_VORBIS_RATE(45075 as vorbis, 1, 0, 120, 512);
            break;
        }
        case 25114: {
            SOUND_VORBIS_RATE(4166 as vorbis, 1, 0, 120, 255);
            break;
        }
        default: {
            SOUND_VORBIS_RATE(4166 as vorbis, 1, 0, 120, 512);
            break;
        }
    };
    return;
}