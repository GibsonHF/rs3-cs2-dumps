//
function script19304(int0: unknown_int): void {
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36961 as vorbis, 1, 0, 160, 10, 10));
    var int1 = script16161();
    switch (int1) {
        case 50555: {
            switch (MAP_LANG()) {
                case 0: {
                    stack(34449);
                    stack(84541544);
                    IF_SETGRAPHIC();
                    break;
                }
                case 1: {
                    stack(34450);
                    stack(84541544);
                    IF_SETGRAPHIC();
                    break;
                }
                case 2: {
                    stack(34451);
                    stack(84541544);
                    IF_SETGRAPHIC();
                    break;
                }
                case 3: {
                    stack(34452);
                    stack(84541544);
                    IF_SETGRAPHIC();
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
            script19269(comp(1290, 220), comp(1290, 222));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1290, 130));
            script19269(comp(1290, 223), comp(1290, 225));
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