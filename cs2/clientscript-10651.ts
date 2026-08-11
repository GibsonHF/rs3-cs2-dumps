//
function script10651(): void {
    if ((varbitplayer_678 == 1)) {
        IF_SETHIDE(false, comp(1311, 499));  // mtxmgt:show_all_toggle_button_off_icon
        IF_SETHIDE(true, comp(1311, 500));  // mtxmgt:show_all_toggle_button_on_icon
    } else {
        IF_SETHIDE(true, comp(1311, 499));  // mtxmgt:show_all_toggle_button_off_icon
        IF_SETHIDE(false, comp(1311, 500));  // mtxmgt:show_all_toggle_button_on_icon
    };
    if ((varbitplayer_673 == 2)) {
        script10653(varclient_4618, 1);
    } else {
        script7494();
        script7491(varclient_2699, varbitplayer_678, 0, varclient_6786);
        script6481(varclient_1964, varclient_1965);
    };
    return;
}