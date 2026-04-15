//
function script7005(int0: int): void {
    switch (int0) {
        case 0: {
            switch (RANDOM(4)) {
                case 0: {
                    SOUND_VORBIS_VOLUME(39621 as vorbis, 1, 0, 200);
                    break;
                }
                case 1: {
                    SOUND_VORBIS_VOLUME(39619 as vorbis, 1, 0, 200);
                    break;
                }
                case 2: {
                    SOUND_VORBIS_VOLUME(39620 as vorbis, 1, 0, 200);
                    break;
                }
                case 3: {
                    SOUND_VORBIS_VOLUME(39623 as vorbis, 1, 0, 200);
                    break;
                }
            };
            break;
        }
        case 1: {
            SOUND_VORBIS_VOLUME(15381 as vorbis, 1, 0, 150);
            break;
        }
        case 2: {
            switch (RANDOM(5)) {
                case 0: {
                    SOUND_VORBIS_VOLUME(33855 as vorbis, 1, 0, 150);
                    break;
                }
                case 1: {
                    SOUND_VORBIS_VOLUME(33856 as vorbis, 1, 0, 150);
                    break;
                }
                case 2: {
                    SOUND_VORBIS_VOLUME(33857 as vorbis, 1, 0, 150);
                    break;
                }
                case 3: {
                    SOUND_VORBIS_VOLUME(33860 as vorbis, 1, 0, 150);
                    break;
                }
                case 4: {
                    SOUND_VORBIS_VOLUME(33862 as vorbis, 1, 0, 150);
                    break;
                }
            };
            break;
        }
    };
    return;
}