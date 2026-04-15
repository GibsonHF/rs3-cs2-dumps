//
function script7941(int0: component): void {
    if ((CAM2_GETPOSITIONMODE() == 0)) {
        CAM2_SETPOSITIONPOINTCOLLISION(0);
    };
    IF_SETONVARCTRANSMIT(callback(), int0);
    script8764(96796712, 96796713);
    script7998();
    IF_SETONTIMER(callback(), int0);
    script12447();
    return;
}