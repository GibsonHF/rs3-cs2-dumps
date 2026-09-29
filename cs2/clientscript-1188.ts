//
function script1188(): void {
    if ((IF_GETHIDE(comp(1420, 183)) == false)) {  // acc_create:tool_bar_vol_slider_backing_1
        IF_SETHIDE(true, comp(1420, 183));  // acc_create:tool_bar_vol_slider_backing_1
        script1217();
    } else if ((IF_GETHIDE(comp(1420, 167)) == true)) {  // acc_create:border_right
        script1217();
    } else {
        script15579();
    };
    return;
}