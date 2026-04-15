//
function script4635(int0: component, int1: component): void {
    if ((IF_HASSUBOVERLAY(int0, 848 as overlayinterface) == 0)) {
        return;
    };
    CC_DELETEALL(int1);
    script4636(int0, int1, comp(848, 32), "Close");
    script4636(int0, int1, comp(848, 21), "Select");
    script4636(int0, int1, comp(848, 12), "Select");
    script4636(int0, int1, comp(848, 5), "Toggle");
    IF_SETHIDE(true, comp(848, 21));
    IF_SETHIDE(true, comp(848, 12));
    return;
}