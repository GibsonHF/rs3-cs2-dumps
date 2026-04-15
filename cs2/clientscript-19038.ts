//
function script19038(int0: boolean, int1: component, int2: component, int3: int): void {
    IF_SETHIDE(int0, int1);
    if ((int0 == true)) {
        IF_SETPOSITION(0, 242, 1, 0, int2);
        IF_SETSIZE(230, 34, 0, 0, int2);
    } else {
        IF_SETPOSITION(int3, 242, 1, 0, int2);
        IF_SETSIZE(112, 34, 0, 0, int2);
    };
    return;
}