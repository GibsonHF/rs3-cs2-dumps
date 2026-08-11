//
function script2541(): void {
    if ((IF_GETHIDE(comp(38, 11)) == true)) {  // msrework_beta:smithing_big
        IF_SETTEXT("About Mining", comp(38, 21));  // msrework_beta:toggle_button_text
        IF_SETHIDE(true, comp(38, 10));  // msrework_beta:mining_big
        IF_SETHIDE(true, comp(38, 1));  // msrework_beta:mining_icon
        IF_SETHIDE(false, comp(38, 11));  // msrework_beta:smithing_big
        IF_SETHIDE(false, comp(38, 3));  // msrework_beta:smithing_icon
    } else {
        IF_SETTEXT("About Smithing", comp(38, 21));  // msrework_beta:toggle_button_text
        IF_SETHIDE(false, comp(38, 10));  // msrework_beta:mining_big
        IF_SETHIDE(false, comp(38, 1));  // msrework_beta:mining_icon
        IF_SETHIDE(true, comp(38, 11));  // msrework_beta:smithing_big
        IF_SETHIDE(true, comp(38, 3));  // msrework_beta:smithing_icon
    };
    return;
}