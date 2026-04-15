//
function script8487(int0: component, int1: int, int2: component): void {
    if ((CC_FIND(int0, int1) == 1)) {
        IF_SETONTIMER(callback(), int2);
        script8844(1, script8825(20, 0), int0, int1);
    };
    return;
}