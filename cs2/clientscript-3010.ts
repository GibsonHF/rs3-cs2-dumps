//
function script3010(int0: int, int1: component): void {
    if ((int0 == 1)) {
        CAM2_GETPOSITIONPOINT_POINT();
        MOVECOORD_FINE(stack(), 0, 0, 256, 0);
        CAM2_SETPOSITIONPOINT_POINT(stack());
        IF_SETONTIMER(callback(), int1);
    } else {
        IF_SETONTIMER(callback(script3010, (int0 + 1), int1), int1);
    };
    return;
}