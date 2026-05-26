//
function script12440(int0: number, int1: number): void {
    if ((CAM2_GETCONTROLMODE() == 1)) {
        CAM2_SETDEPTHPLANES(int0, int1);
    } else {
        printmessage("Camera is in server control mode");
    };
    return;
}