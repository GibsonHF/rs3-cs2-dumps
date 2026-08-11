//
function script9854(): void {
    IF_SETHIDE(false, comp(1487, 4));  // bonds_namechange_change:input_confirm_instructions
    if ((script6431() == 1)) {
        IF_SETTEXT("Tap 'Done' to continue", comp(1487, 0));  // bonds_namechange_change:confirm_text
    } else {
        IF_SETTEXT("Press 'Enter' to continue", comp(1487, 0));  // bonds_namechange_change:confirm_text
    };
    return;
}