//
function script1610(): void {
    IF_SETHIDE(false, comp(549, 66));  // boothpreview:confirm_layer_container
    if ((script133(52432000, 53464255, COORD()) == 1)) {
        IF_SETTEXT("This won't send your photo to the web.<br><br> Are you sure you want to continue?", comp(549, 3));  // boothpreview:confirm_text
    };
    return;
}