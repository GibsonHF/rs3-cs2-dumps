//
function script11137(int0: component, int1: int): void {
    if ((int1 > 0)) {
        var int1 = (int1 - 1);
        IF_SETONTIMER(callback(script11137, int0, int1), int0);
        return;
    };
    IF_SETTEXT("", int0);
    IF_SETONTIMER(callback(), int0);
    return;
}