//
function script16702(int0: component, int1: boolean): void {
    if ((varclient_7070 == 1)) {
        if ((int0 == comp(998, 25))) {
            IF_SETHIDE(int1, comp(998, 27));
        } else if ((int0 == comp(998, 9))) {
            IF_SETHIDE(int1, comp(998, 16));
        };
    };
    if (((int0 != varclient_7071) && (int1 == false))) {
        varclient_7071 = int0;
    } else if ((int1 == true)) {
        varclient_7071 = comp(-1, 65535);
    };
    return;
}