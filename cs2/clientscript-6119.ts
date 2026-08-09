//
function script6119(int0: number, int1: number, int2: number, int3: number): void {
    var int3 = (int3 + 1);
    if ((int3 > int2)) {
        IF_SETTRANS(int1, int0);
        IF_SETONTIMER(callback(), int0);
    } else {
        IF_SETONTIMER(callback(script6119, -2147483645, int1, int2, int3), int0);
    };
    return;
}