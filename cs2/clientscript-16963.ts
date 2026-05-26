//
function script16963(int0: number, int1: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16963, int0, int1), 69926935);
        return;
    };
    IF_SETMODELANIM(24302, int1);
    IF_SETONTIMER(callback(), 69926935);
    return;
}