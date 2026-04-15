//
function script5624(int0: component, int1: component, int2: unknown_int): void {
    if ((int2 == 1)) {
        IF_SETMODELANIM(15702 as seq, int1);
    } else {
        IF_SETMODELANIM(15700 as seq, int1);
    };
    IF_SETONTIMER(callback(script5625, int0, int1), int0);
    return;
}