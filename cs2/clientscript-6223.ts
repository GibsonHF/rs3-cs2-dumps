//
function script6223(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int0 <= int1)) {
        CAM_MOVEALONG(0, int0, int3, int4, 1, int0);
        IF_SETONCAMFINISHED(callback(script6223, (int0 + 1), int1, int2, int3, int4), int2);
    } else {
        IF_SETONCAMFINISHED(callback(), int2);
    };
    return;
}