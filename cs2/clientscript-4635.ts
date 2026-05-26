//
function script4635(int0: number, int1: number): void {
    if ((IF_HASSUBOVERLAY(int0, 848) == 0)) {
        return;
    };
    CC_DELETEALL(int1);
    script4636(int0, int1, 55574560, "Close");
    script4636(int0, int1, 55574549, "Select");
    script4636(int0, int1, 55574540, "Select");
    script4636(int0, int1, 55574533, "Toggle");
    IF_SETHIDE(1, 55574549);
    IF_SETHIDE(1, 55574540);
    return;
}