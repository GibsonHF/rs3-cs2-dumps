//
function script11921(int0: number): void {
    IF_SETHIDE(true, comp(1692, 11));  // multichoice:button1_button_selected_layer
    IF_SETHIDE(true, comp(1692, 21));  // multichoice:button2_button_selected_layer
    IF_SETHIDE(true, comp(1692, 31));  // multichoice:button3_button_selected_layer
    IF_SETHIDE(true, comp(1692, 41));  // multichoice:button4_button_selected_layer
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(1692, 11));  // multichoice:button1_button_selected_layer
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1692, 21));  // multichoice:button2_button_selected_layer
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1692, 31));  // multichoice:button3_button_selected_layer
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1692, 41));  // multichoice:button4_button_selected_layer
            break;
        }
    };
    return;
}