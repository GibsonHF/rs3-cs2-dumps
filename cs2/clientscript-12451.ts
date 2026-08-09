//
function script12451(int0: number, int1: number): void {
    if ((script7942() == 0)) {
        script12447();
    };
    if ((int0 == 0)) {
        CAM2_GETPOSITIONPOINT_POINT();
        MOVECOORD_FINE(0, 0, (((varclient_4667 * int1) / 30) * -1), 0);
        CAM2_SETPOSITIONPOINT_POINT();
    } else if ((int0 == 1)) {
        CAM2_GETPOSITIONPOINT_POINT();
        MOVECOORD_FINE(0, 0, ((varclient_4667 * int1) / 30), 0);
        CAM2_SETPOSITIONPOINT_POINT();
    } else {
        return;
    };
    return;
}