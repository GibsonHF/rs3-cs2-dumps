//
function script6958(int0: unknown_int): void {
    if ((HAS_NXT() == 0)) {
        CAM2_SETDEPTHPLANES(50, int0);
    } else {
        CAM2_SETDEPTHPLANES(-1, -1);
    };
    return;
}