//
function script6120(int0: component, int1: boolean, int2: int, int3: int): void {
    if ((++int3 > int2)) {
        IF_SETHIDE(int1, int0);
        IF_SETONTIMER(callback(), int0);
    } else {
        IF_SETONTIMER(callback(script6120, -2147483645, int1, int2, int3), int0);
    };
    return;
}