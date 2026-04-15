//
function script3012(int0: int, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = CAM2_GETPOSITIONENTITY_ANGLEOFFSETS();
    if ((int0 != 0)) {
        int2 = (int2 + int0);
    };
    if ((int1 != 0)) {
        int3 = (int3 + int1);
    };
    int2 = MAX(MIN(int2, 3500), 10);
    int3 = script686(MODULO(int3, 16284), 16284);
    CAM2_SETPOSITIONENTITY_PLAYER(0, 0, varclient_4719, int2, int3, 0, 0, 100);
    return;
}