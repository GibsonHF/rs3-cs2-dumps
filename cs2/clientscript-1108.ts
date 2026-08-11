//
function script1108(): void {
    if ((unk10996() == 2)) {
        IF_SETTEXT("The Marketplace is currently unavailable. Please try again soon.", comp(1494, 36));  // marketplace_featured:unavailable_text
        IF_SETHIDE(true, comp(1494, 35));  // marketplace_featured:spinner_layer
    } else {
        IF_SETTEXT("The Marketplace is currently initialising. Please wait.", comp(1494, 36));  // marketplace_featured:unavailable_text
        IF_SETHIDE(false, comp(1494, 35));  // marketplace_featured:spinner_layer
        unk10997(97910784);
        stack(50);
        unk11010(1114, "", 97910784);
        unk11009();
    };
    return;
}