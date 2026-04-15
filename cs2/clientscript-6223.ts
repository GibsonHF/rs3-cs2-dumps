//
function script6223(int0: int, int1: int, int2: component, int3: int, int4: int): void {
    if ((int0 <= int1)) {
        CAM_MOVEALONG(0, int0, int3, int4, 1, int0);
        IF_SETONCAMFINISHED(callback(script6223, (int0 + 1), int1, int2, int3, int4), int2);
    } else {
        IF_SETONCAMFINISHED(callback(), int2);
    };
    return;
}