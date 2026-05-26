//
function script15629(int0: number, int1: number, int2: number, int3: number): void {
    if ((script13749() == 1)) {
        IF_SETPOSITION(0, 0, 0, 2, int0);
        IF_SETPOSITION(0, 40, 0, 0, int1);
        IF_SETPOSITION(0, 4, 1, 2, int2);
        IF_SETPOSITION(0, 0, 0, 0, int3);
    } else {
        IF_SETPOSITION(0, 40, 0, 0, int0);
        IF_SETPOSITION(0, 0, 0, 2, int1);
        IF_SETPOSITION(0, 4, 1, 0, int2);
        IF_SETPOSITION(0, 0, 0, 2, int3);
    };
    return;
}