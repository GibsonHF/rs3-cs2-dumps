//
function script14057(int0: unknown_int, int1: int, int2: unknown_int): void {
    if ((int2 == 1)) {
        CAM2_REMOVEALLEFFECTS();
        return;
    };
    if ((int0 == -1)) {
        var int0 = CAM2_ADDEFFECT_ZTILT(0);
    };
    script9193(int0, int1);
    var int1 = MAX(-2000, (int1 - 5));
    IF_SETONTIMER(callback(script14057, int0, int1, int2), 127205376);
    return;
}