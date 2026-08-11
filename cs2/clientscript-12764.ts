//
function script12764(int0: number): void {
    if ((int0 == varbitplayer_33741)) {
        return;
    };
    IF_SETHIDE(false, comp(1789, 28));  // cruc_signup_board:checkbox_deselected_layer
    IF_SETHIDE(false, comp(1789, 33));  // cruc_signup_board:checkbox_deselected_layer_1
    IF_SETHIDE(false, comp(1789, 40));  // cruc_signup_board:checkbox_deselected_layer_2
    IF_SETHIDE(false, comp(1789, 47));  // cruc_signup_board:checkbox_deselected_layer_3
    IF_SETHIDE(false, comp(1789, 54));  // cruc_signup_board:checkbox_deselected_layer_4
    IF_SETHIDE(false, comp(1789, 61));  // cruc_signup_board:checkbox_deselected_layer_5
    var int1 = comp(1789, 26);  // cruc_signup_board:checkbox_selected_layer
    switch (int0) {
        case 1: {
            int1 = comp(1789, 28);  // cruc_signup_board:checkbox_deselected_layer
            break;
        }
        case 2: {
            int1 = comp(1789, 33);  // cruc_signup_board:checkbox_deselected_layer_1
            break;
        }
        case 3: {
            int1 = comp(1789, 40);  // cruc_signup_board:checkbox_deselected_layer_2
            break;
        }
        case 4: {
            int1 = comp(1789, 47);  // cruc_signup_board:checkbox_deselected_layer_3
            break;
        }
        case 5: {
            int1 = comp(1789, 54);  // cruc_signup_board:checkbox_deselected_layer_4
            break;
        }
        case 6: {
            int1 = comp(1789, 61);  // cruc_signup_board:checkbox_deselected_layer_5
            break;
        }
    };
    IF_SETHIDE(true, int1);
    return;
}