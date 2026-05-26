//
function script11396(int0: number): void {
    if ((varbitplayer_27926 == 0)) {
        IF_SETONTIMER(callback(), 106233879);
        return;
    };
    varclient_4797 = (varclient_4797 + int0);
    if ((varclient_4797 >= 105)) {
        var int0 = -2;
    } else if ((varclient_4797 <= 1)) {
        int0 = 2;
    };
    IF_SETONTIMER(callback(script11396, int0), 106233879);
    return;
}