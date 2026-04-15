//
function script13579(int0: component, int1: component, int2: unknown_int, int3: int, int4: int): void {
    if (((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535)))) {
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