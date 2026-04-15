//
function script7192(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int): void {
    var int0 = MAX(MIN(int0, 15000), -15000);
    var int2 = MAX(MIN(int2, 15000), -15000);
    var int1 = MAX(MIN(int1, 10000), 50);
    var int3 = script686(MODULO(int3, 16284), 16284);
    var int4 = MAX(MIN(int4, (3500 / 8)), (0 - 3500));
    CAM2_SETPOSITIONENTITY_PLAYER(int0, int1, int2, 0, 0, 0, 0, 100);
    CAM2_SETLOOKATENTITY_PLAYER(script7193(2500, int0, int1, int2, int3, int4), 0);
    IF_SETONOP(callback(script7194, -2147483644, int0, int1, int2, int3, int4, int5, int6, int7), 31129606);
    IF_SETONMOUSEREPEAT(callback(script7195, -2147483647, -2147483646, int0, int1, int2, int3, int4, int5, int6, int7), 31129607);
    return;
}