//
function script11587(int0: number): void {
    if ((int0 == true)) {
        IF_SETHIDE(int0, comp(1635, 25));  // mtx91_challenge_setup:mode_select
        IF_SETHIDE(false, comp(1635, 29));  // mtx91_challenge_setup:data_layer
        IF_SETHIDE(false, comp(1635, 30));  // mtx91_challenge_setup:button_layer
    } else {
        IF_SETHIDE(int0, comp(1635, 25));  // mtx91_challenge_setup:mode_select
        IF_SETHIDE(true, comp(1635, 29));  // mtx91_challenge_setup:data_layer
        IF_SETHIDE(true, comp(1635, 30));  // mtx91_challenge_setup:button_layer
        IF_SETHIDE(false, comp(1635, 0));  // mtx91_challenge_setup:start_button_layer
        IF_SETHIDE(true, comp(1635, 31));  // mtx91_challenge_setup:confirm_button_layer
    };
    return;
}