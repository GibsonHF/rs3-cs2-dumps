//
function script8768(int0: int, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    if (((CAM2_GETPOSITIONMODE() != 1) || (CAM2_GETLOOKATMODE() != 1))) {
        return;
    };
    [int2, int3] = CAM2_GETPOSITIONENTITY_ANGLEOFFSETS();
    if ((int0 != 0)) {
        int2 = (int2 + int0);
    };
    if ((int1 != 0)) {
        int3 = (int3 + int1);
    };
    [int2, int3] = script15712(int2, int3);
    varclient_1971 = script15713(varclient_1971);
    varclient_5114 = int2;
    varclient_5115 = int3;
    if ((IF_HASSUBOVERLAY(comp(1477, 45), 244 as overlayinterface) == 0)) {
        CAM2_SETPOSITIONANGULARINTERPOLATION(300);
        CAM2_SETPOSITIONENTITY_PLAYER(0, 0, script8769(int2), int2, int3, 0, 0, 100);
    };
    return;
}