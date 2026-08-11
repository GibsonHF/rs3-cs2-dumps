//
function script6128(): void {
    if ((IF_GETHIDE(comp(1270, 47)) == true)) {  // fremsaga_bilrach_mind:help_bg_layer
        IF_SETHIDE(false, comp(1270, 47));  // fremsaga_bilrach_mind:help_bg_layer
    } else {
        IF_SETHIDE(true, comp(1270, 47));  // fremsaga_bilrach_mind:help_bg_layer
    };
    return;
}