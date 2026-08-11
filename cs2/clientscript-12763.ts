//
function script12763(): void {
    IF_SETHIDE(false, comp(1789, 28));  // cruc_signup_board:checkbox_deselected_layer
    IF_SETHIDE(false, comp(1789, 33));  // cruc_signup_board:checkbox_deselected_layer_1
    IF_SETHIDE(false, comp(1789, 40));  // cruc_signup_board:checkbox_deselected_layer_2
    IF_SETHIDE(false, comp(1789, 47));  // cruc_signup_board:checkbox_deselected_layer_3
    IF_SETHIDE(false, comp(1789, 54));  // cruc_signup_board:checkbox_deselected_layer_4
    IF_SETHIDE(false, comp(1789, 61));  // cruc_signup_board:checkbox_deselected_layer_5
    switch (varbitplayer_33741) {
        case 1: {
            IF_SETHIDE(true, comp(1789, 28));  // cruc_signup_board:checkbox_deselected_layer
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(1789, 33));  // cruc_signup_board:checkbox_deselected_layer_1
            break;
        }
        case 3: {
            IF_SETHIDE(true, comp(1789, 40));  // cruc_signup_board:checkbox_deselected_layer_2
            break;
        }
        case 4: {
            IF_SETHIDE(true, comp(1789, 47));  // cruc_signup_board:checkbox_deselected_layer_3
            break;
        }
        case 5: {
            IF_SETHIDE(true, comp(1789, 54));  // cruc_signup_board:checkbox_deselected_layer_4
            break;
        }
        case 6: {
            IF_SETHIDE(true, comp(1789, 61));  // cruc_signup_board:checkbox_deselected_layer_5
            break;
        }
    };
    return;
}