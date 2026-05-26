//
function script13579(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if (((int0 == -1) || (int1 == -1))) {
        return;
    };
    if ((int4 == 0)) {
        IF_SETPOSITION(0, 0, 0, 0, int1);
    } else {
        IF_SETPOSITION(0, 0, 0, 2, int1);
    };
    script13311(int0, int2, int3, int4);
    IF_SETONTIMER(callback(script13315, int0, int1), int0);
    return;
}