//
function script4635(int0: number, int1: number): void {
    if ((IF_HASSUBOVERLAY(int0, 848 as overlayinterface) == 0)) {
        return;
    };
    CC_DELETEALL(int1);
    script4636(int0, int1, 55574560, "Close");
    script4636(int0, int1, 55574549, "Select");
    script4636(int0, int1, 55574540, "Select");
    script4636(int0, int1, 55574533, "Toggle");
    IF_SETHIDE(true, comp(848, 21));  // modal_confirm_overlay:yes_button_active_layer
    IF_SETHIDE(true, comp(848, 12));  // modal_confirm_overlay:no_button_active_layer
    return;
}