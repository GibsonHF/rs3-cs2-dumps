//
function script1108(): void {
    var int0 = 0;
    var int1 = 0;
    if ((script3825() == 1)) {
        IF_SETTEXT("", comp(1494, 38));
        IF_SETGRAPHIC(script10060(), comp(1494, 36));  // marketplace_featured:unavailable_text
        [int0, int1] = IF_GETGRAPHICDIMENSIONS(comp(1494, 36));  // marketplace_featured:unavailable_text
        IF_SETASPECT(int0, int1, comp(1494, 36));  // marketplace_featured:unavailable_text
        IF_SETSIZE(1, 450, 4, 0, comp(1494, 36));  // marketplace_featured:unavailable_text
        IF_SETHIDE(true, comp(1494, 35));  // marketplace_featured:spinner_layer
        IF_SETHIDE(false, comp(1494, 37));
        IF_SETPOSITION(-75, 60, 1, 2, comp(1494, 37));
        IF_SETSIZE(300, 30, 0, 0, comp(1494, 37));
        IF_SETTEXT("Open world select", comp(1494, 37));
        return;
    };
    IF_SETGRAPHIC(-1 as graphic, comp(1494, 36));  // marketplace_featured:unavailable_text
    IF_SETHIDE(true, comp(1494, 37));
    if ((unk10996() == 2)) {
        IF_SETTEXT("The Marketplace is currently unavailable. Please try again soon.", comp(1494, 38));
        IF_SETHIDE(true, comp(1494, 35));  // marketplace_featured:spinner_layer
    } else {
        IF_SETTEXT("The Marketplace is currently initialising. Please wait.", comp(1494, 38));
        IF_SETHIDE(false, comp(1494, 35));  // marketplace_featured:spinner_layer
        unk10997(97910784);
        stack(50);
        unk11010(1114, "", 97910784);
        unk11009();
    };
    return;
}