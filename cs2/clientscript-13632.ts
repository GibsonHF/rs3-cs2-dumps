//
function script13632(): void {
    IF_SETHIDE(true, comp(1865, 0));  // sworld_end:sworlds_end_skip_button_layer
    if ((varbitplayer_47414 == 0)) {
        IF_SETHIDE(false, comp(1865, 1));  // sworld_end:sworlds_end_continue_button_layer
    } else {
        IF_SETHIDE(false, comp(1865, 26));  // sworld_end:sworlds_end_leave_button_layer
    };
    return;
}