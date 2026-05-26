//
function script19128(): void {
    SOUND_VORBIS_VOLUME(36961, 1, 0, 180);
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(30039, 82313228);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(30070, 82313228);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(30068, 82313228);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(30069, 82313228);
            break;
        }
    };
    return;
}