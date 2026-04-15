//
function script1973(int0: unknown_int, int1: component, int2: unknown_int): void {
    if ((int2 != 1)) {
        return;
    };
    SOUND_SYNTH(33341, 1, 0);
    switch (int0) {
        case 0: {
            varclient_618 = script686((varclient_618 - 1), 26);
            break;
        }
        case 1: {
            varclient_619 = script686((varclient_619 - 1), 26);
            break;
        }
        case 2: {
            varclient_620 = script686((varclient_620 - 1), 26);
            break;
        }
        case 3: {
            varclient_621 = script686((varclient_621 - 1), 26);
            break;
        }
    };
    script1971(int0, int1);
    return;
}