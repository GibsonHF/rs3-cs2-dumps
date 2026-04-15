//
function script4865(int0: component, int1: int): void {
    if (((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1)))) {
        CC_SETSIZE(0, SCALE(9, 10, 16384), 4, 2);
        CC_SETASPECT(214, 336);
    };
    return;
}