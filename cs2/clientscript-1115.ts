//
function script1115(): void {
    if ((unk10996() == 2)) {
        IF_SETTEXT("The Marketplace is currently unavailable. Please try again soon.", 98172939);
        IF_SETHIDE(1, 98172938);
    } else {
        IF_SETTEXT("The Marketplace is currently initialising. Please wait.", 98172939);
        IF_SETHIDE(0, 98172938);
        unk10997(98172928);
        unk11010(50, callback(script1422), 98172928);
        unk11009();
    };
    return;
}