//
function script417(int0: number): void {
    var int1 = IF_GETTRANS(int0);
    if ((varclient_1387 == 1)) {
        int1 = (int1 + 2);
        if ((int1 < 255)) {
            IF_SETTRANS(int1, int0);
        } else {
            IF_SETHIDE(true, int0);
        };
    };
    return;
}