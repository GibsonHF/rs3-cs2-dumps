//
function script7076(int0: number): void {
    if ((IF_GETMODELZOOM(int0) > 100)) {
        IF_SETMODELZOOM((IF_GETMODELZOOM(int0) - 75), int0);
    } else {
        IF_SETMODELZOOM(800, int0);
        IF_SETHIDE(1, int0);
    };
    return;
}