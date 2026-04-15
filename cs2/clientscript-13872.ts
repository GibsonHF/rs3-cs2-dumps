//
function script13872(int0: component, int1: int, int2: int): void {
    if ((int2 > 0)) {
        IF_SETONTIMER(callback(script13872, -2147483645, int1, (int2 - 1)), int0);
    } else {
        script8059(int1);
        IF_SETONTIMER(callback(), int0);
    };
    return;
}