//
function script20200(int0: int): void {
    if ((int0 < 4)) {
        IF_SETONTIMER(callback(script20200, (int0 + 1)), comp(1409, 1));
        return;
    };
    IF_SETONTIMER(callback(), comp(1409, 1));
    IF_SETPARAM_INT(9341, -1, 92340225);
    script20201(-1);
    return;
}