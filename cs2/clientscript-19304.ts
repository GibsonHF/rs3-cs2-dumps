//
function script19304(int0: number): void {
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36961, 1, 0, 160, 10, 10));
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
    IF_SETHIDE(1, 84541545);
    IF_SETHIDE(1, 84541570);
    IF_SETHIDE(1, 84541575);
    switch (int0) {
        case 1: {
            IF_SETHIDE(0, 84541545);
            script19269(84541660, 84541662);
            break;
        }
        case 2: {
            IF_SETHIDE(0, 84541570);
            script19269(84541663, 84541665);
            break;
        }
        case 3: {
            IF_SETHIDE(0, 84541575);
            script19305();
            break;
        }
    };
    return;
}