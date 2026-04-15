//
function script5600(int0: component, int1: int, int2: int, int3: int): void {
    if ((int1 < 3)) {
        CAM_MOVEALONG(0, int1, int2, int3, 1, int1);
    };
    if ((int1 == 3)) {
        IF_SETONCAMFINISHED(callback(), int0);
    } else {
        var int1 = (int1 + 1);
        IF_SETONCAMFINISHED(callback(script5600, -2147483645, int1, 800, 800), int0);
    };
    return;
}