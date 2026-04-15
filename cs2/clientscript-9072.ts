//
function script9072(int0: component, int1: int, int2: int): void {
    if ((varclient_6746 != int2)) {
        if ((int1 <= 0)) {
            IF_SETMODELANIM(-1 as seq, int0);
            IF_SETMODELANIM(32989 as seq, int0);
            IF_SETONTIMER(callback(), int0);
        } else {
            var int1 = (int1 - 1);
            IF_SETONTIMER(callback(script9072, int0, int1, int2), int0);
        };
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}