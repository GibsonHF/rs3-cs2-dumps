//
function script14025(): void {
    if ((IF_GETHIDE(comp(1934, 19)) == true)) {  // trail17_skyscrapers:example_puzzle
        IF_SETHIDE(false, comp(1934, 19));  // trail17_skyscrapers:example_puzzle
        IF_SETHIDE(true, comp(1934, 16));  // trail17_skyscrapers:check_button_layer
        IF_SETHIDE(true, comp(1934, 15));  // trail17_skyscrapers:reset_button_layer
    } else {
        IF_SETHIDE(true, comp(1934, 19));  // trail17_skyscrapers:example_puzzle
        IF_SETHIDE(false, comp(1934, 16));  // trail17_skyscrapers:check_button_layer
        IF_SETHIDE(false, comp(1934, 15));  // trail17_skyscrapers:reset_button_layer
    };
    return;
}