//
function script16783(int0: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16783, int0), 67043345);
        return;
    };
    IF_SETHIDE(0, 67043424);
    IF_SETONTIMER(callback(), 67043345);
    return;
}