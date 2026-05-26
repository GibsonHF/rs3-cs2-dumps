//
function script20200(int0: number): void {
    if ((int0 < 4)) {
        IF_SETONTIMER(callback(script20200, (int0 + 1)), 92340225);
        return;
    };
    IF_SETONTIMER(callback(), 92340225);
    IF_SETPARAM_INT(9341, -1, 92340225);
    script20201(-1);
    return;
}