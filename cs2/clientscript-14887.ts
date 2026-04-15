//
function script14887(int0: unknown_int, int1: int): void {
    if ((varplayer_9290 != 0)) {
        return;
    };
    var int2 = script14649(int1);
    switch (int0) {
        case 1: {
            if ((int2 == 0)) {
                return;
            };
            break;
        }
        case 2: {
            if ((IF_GETHIDE(comp(693, 30)) == false)) {
                script14890();
            };
            if ((int2 != 2)) {
                return;
            };
            break;
        }
    };
    script14880(varclient_6757, -2, 0);
    return;
}