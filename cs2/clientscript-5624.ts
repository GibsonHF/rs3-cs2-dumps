//
function script5624(int0: number, int1: number, int2: number): void {
    if ((int2 == 1)) {
        IF_SETMODELANIM(15702 as seq, int1);
    } else {
        IF_SETMODELANIM(15700 as seq, int1);
    };
    IF_SETONTIMER(callback(script5625, int0, int1), int0);
    return;
}