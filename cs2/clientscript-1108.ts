//
function script1108(): void {
    if ((unk10996() == 2)) {
        IF_SETTEXT("The Marketplace is currently unavailable. Please try again soon.", 97910810);
        IF_SETHIDE(1, 97910809);
    } else {
        IF_SETTEXT("The Marketplace is currently initialising. Please wait.", 97910810);
        IF_SETHIDE(0, 97910809);
        unk10997(97910784);
        unk11010(50, callback(script1114), 97910784);
        unk11009();
    };
    return;
}