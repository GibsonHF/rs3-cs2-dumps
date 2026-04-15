//
function script16963(int0: int, int1: component): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16963, int0, int1), comp(1067, 23));
        return;
    };
    IF_SETMODELANIM(24302 as seq, int1);
    IF_SETONTIMER(callback(), comp(1067, 23));
    return;
}