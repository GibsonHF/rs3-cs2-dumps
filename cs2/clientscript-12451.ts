//
function script12451(int0: unknown_int, int1: unknown_int): void {
    if ((script7942() == 0)) {
        script12447();
    };
    if ((int0 == 0)) {
        CAM2_GETPOSITIONPOINT_POINT();
        MOVECOORD_FINE(stack(), 0, 0, (((varclient_4667 * int1) / 30) * -1), 0);
        CAM2_SETPOSITIONPOINT_POINT(stack());
    } else if ((int0 == 1)) {
        CAM2_GETPOSITIONPOINT_POINT();
        MOVECOORD_FINE(stack(), 0, 0, ((varclient_4667 * int1) / 30), 0);
        CAM2_SETPOSITIONPOINT_POINT(stack());
    } else {
        return;
    };
    return;
}