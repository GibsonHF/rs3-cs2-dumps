//
function script1952(int0: component, int1: int): void {
    if ((varbitplayer_44635 == 1)) {
        return;
    };
    var int2 = script12452(int1, 50, 0, 130, 0);
    if ((IF_FIND(int0) == 1)) {
        IF_SETTRANS((255 - int2), int0);
        if ((int1 >= 50)) {
            IF_SETONTIMER(callback(), int0);
            return;
        };
        var int1 = (int1 + 1);
        IF_SETONTIMER(callback(script1952, int0, int1), int0);
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}