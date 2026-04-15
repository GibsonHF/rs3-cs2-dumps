//
function script8767(int0: int, int1: int, int2: int): void {
    CAM2_SETLOOKATMODE(1);
    CAM2_SETPOSITIONMODE(1);
    CAM2_SETLOOKATENTITY_PLAYER(0, 300, 0, 0);
    if ((HAS_NXT() == 0)) {
        CAM2_SETDEPTHPLANES(50, 14847);
    } else {
        CAM2_SETDEPTHPLANES(-1, -1);
    };
    script185(int0, int1, int2);
    return;
}