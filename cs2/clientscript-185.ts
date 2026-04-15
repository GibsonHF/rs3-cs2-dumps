//
function script185(int0: int, int1: int, int2: int): void {
    if ((CAM2_GETCONTROLMODE() != 1)) {
        return;
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = varclient_1971;
    if ((CAM2_GETLOOKATMODE() != 1)) {
        CAM2_SETLOOKATMODE(1);
    };
    if ((CAM2_GETPOSITIONMODE() != 1)) {
        CAM2_SETPOSITIONMODE(1);
    };
    [int3, int4] = CAM2_GETPOSITIONENTITY_ANGLEOFFSETS();
    if ((int0 > 0)) {
        int3 = int0;
    };
    if ((int1 > 0)) {
        int4 = int1;
    };
    if ((int2 > 0)) {
        int5 = int2;
    };
    varclient_1971 = int5;
    varclient_5114 = int3;
    varclient_5115 = int4;
    CAM2_SETPOSITIONENTITY_PLAYER(0, 0, script8769(int0), int3, int4, 0, 0, 100);
    return;
}