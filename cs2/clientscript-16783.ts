//
function script16783(int0: int): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16783, int0), comp(1023, 17));
        return;
    };
    IF_SETHIDE(false, comp(1023, 96));
    IF_SETONTIMER(callback(), comp(1023, 17));
    return;
}