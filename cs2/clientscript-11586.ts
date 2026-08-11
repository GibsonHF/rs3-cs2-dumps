//
function script11586(): void {
    if ((IF_GETHIDE(comp(1635, 36)) == false)) {  // mtx91_challenge_setup:noclickthrough_layer
        IF_SETHIDE(true, comp(1635, 36));  // mtx91_challenge_setup:noclickthrough_layer
        IF_SETHIDE(false, comp(1635, 0));  // mtx91_challenge_setup:start_button_layer
        IF_SETHIDE(true, comp(1635, 31));  // mtx91_challenge_setup:confirm_button_layer
        IF_SETTEXT("Back", comp(1635, 120));  // mtx91_challenge_setup:back_button_text
    } else {
        script11587(0);
    };
    return;
}