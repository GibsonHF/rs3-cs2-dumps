//
function script6332(int0: number, int1: number, int2: number, int3: number): void {
    if ((script6431() == 1)) {
        IF_SETHIDE(true, comp(1304, 16));
    };
    if ((int0 == 1)) {
        IF_SETGRAPHIC(11512 as graphic, int1);
        IF_SETHIDE(false, int2);
        IF_SETTRANS(255, int3);
        IF_SETONTIMER(callback(script6333, -2147483645), int3);
        return;
    };
    IF_SETGRAPHIC(11511 as graphic, int1);
    IF_SETHIDE(true, int2);
    IF_SETONTIMER(callback(), int3);
    return;
}