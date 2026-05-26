//
function script19128(): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 180);
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(30039 as graphic, comp(1256, 12));
            break;
        }
        case 1: {
            IF_SETGRAPHIC(30070 as graphic, comp(1256, 12));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(30068 as graphic, comp(1256, 12));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(30069 as graphic, comp(1256, 12));
            break;
        }
    };
    return;
}