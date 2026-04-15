//
function script6332(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void {
    if ((script6431() == true)) {
        IF_SETHIDE(true, comp(1304, 16));
    };
    if ((int0 == 1)) {
        stack(11512);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, int2);
        IF_SETTRANS(255, int3);
        IF_SETONTIMER(callback(script6333, -2147483645), int3);
        return;
    };
    stack(11511);
    stack(int1);
    IF_SETGRAPHIC();
    IF_SETHIDE(1, int2);
    IF_SETONTIMER(callback(), int3);
    return;
}