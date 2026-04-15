//
function script1115(): void {
    if ((unk10996() == 2)) {
        IF_SETTEXT("The Marketplace is currently unavailable. Please try again soon.", comp(1498, 11));
        IF_SETHIDE(true, comp(1498, 10));
    } else {
        IF_SETTEXT("The Marketplace is currently initialising. Please wait.", comp(1498, 11));
        IF_SETHIDE(false, comp(1498, 10));
        unk10997(comp(1498, 0));
        unk11010(50, callback(script1422), 98172928);
        unk11009();
    };
    return;
}