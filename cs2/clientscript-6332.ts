//
function script6332(int0: number, int1: number, int2: number, int3: number): void {
    if ((script6431() == 1)) {
        IF_SETHIDE(1, 85458960);
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