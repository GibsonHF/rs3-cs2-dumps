//
function script1108(): void {
    if ((unk10996() == 2)) {
        IF_SETTEXT("The Marketplace is currently unavailable. Please try again soon.", comp(1494, 26));
        IF_SETHIDE(true, comp(1494, 25));
    } else {
        IF_SETTEXT("The Marketplace is currently initialising. Please wait.", comp(1494, 26));
        IF_SETHIDE(false, comp(1494, 25));
        unk10997(comp(1494, 0));
        unk11010(50, callback(script1114), 97910784);
        unk11009();
    };
    return;
}