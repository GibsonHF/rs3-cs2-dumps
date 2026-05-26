//
function script19304(int0: number): void {
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36961 as vorbis, 1, 0, 160, 10, 10));
    var int1 = script16161();
    switch (int1) {
        case 50555: {
            switch (MAP_LANG()) {
                case 0: {
                    IF_SETGRAPHIC(34449 as graphic, comp(1290, 104));
                    break;
                }
                case 1: {
                    IF_SETGRAPHIC(34450 as graphic, comp(1290, 104));
                    break;
                }
                case 2: {
                    IF_SETGRAPHIC(34451 as graphic, comp(1290, 104));
                    break;
                }
                case 3: {
                    IF_SETGRAPHIC(34452 as graphic, comp(1290, 104));
                    break;
                }
            };
            break;
        }
    };
    IF_SETHIDE(true, comp(1290, 105));
    IF_SETHIDE(true, comp(1290, 130));
    IF_SETHIDE(true, comp(1290, 135));
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(1290, 105));
            script19269(84541660, 84541662);
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1290, 130));
            script19269(84541663, 84541665);
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1290, 135));
            script19305();
            break;
        }
    };
    return;
}