//
function script15629(int0: component, int1: component, int2: component, int3: component): void {
    if ((script13749() == true)) {
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