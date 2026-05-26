//
function script1973(int0: number, int1: number, int2: number): void {
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