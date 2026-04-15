//
function script12440(int0: unknown_int, int1: unknown_int): void {
    if ((CAM2_GETCONTROLMODE() == 1)) {
        CAM2_SETDEPTHPLANES(int0, int1);
    } else {
        printmessage("Camera is in server control mode");
    };
    return;
}