//
function script3463(int0: component, int1: coordgrid): void {
    if ((varclient_1007 != 22)) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    if ((COORD() == int1)) {
        return;
    };
    SOUND_SYNTH(33328, 1, 0);
    CAM_MOVETO(MOVECOORD(COORD(), 0, 0, -3), 1500, 1, 75);
    CAM_LOOKAT(COORD(), 0, 1, 15);
    IF_SETONTIMER(callback(script3463, -2147483645, COORD()), int0);
    return;
}