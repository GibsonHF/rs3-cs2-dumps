//
function script1115(): void {
    if ((unk10996() == 2)) {
        IF_SETTEXT("The Marketplace is currently unavailable. Please try again soon.", comp(1498, 11));  // marketplace_store:unavailable_text
        IF_SETHIDE(true, comp(1498, 10));  // marketplace_store:spinner_layer
    } else {
        IF_SETTEXT("The Marketplace is currently initialising. Please wait.", comp(1498, 11));  // marketplace_store:unavailable_text
        IF_SETHIDE(false, comp(1498, 10));  // marketplace_store:spinner_layer
        unk10997(98172928);
        stack(50);
        unk11010(1422, "", 98172928);
        unk11009();
    };
    return;
}