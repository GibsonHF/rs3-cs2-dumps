//
function script7052(int0: unknown_int, int1: int, int2: struct): void {
    var int3 = script7975(int0, int1);
    if ((varbitplayer_43 == struct_getparam(int2, 2793))) {
        IF_SETTRANS(0, int3);
        IF_SETONTIMER(callback(script7054, int0, int1, 1, int2, 0), int3);
    } else {
        IF_SETCOLOUR(9868950, int3);
        IF_SETTRANS(255, int3);
        IF_SETONTIMER(callback(), int3);
    };
    return;
}