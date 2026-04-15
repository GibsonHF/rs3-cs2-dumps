//
function script3695(int0: inv): void {
    if ((INV_TOTALCAT(int0, 4359) <= 1)) {
        IF_SETHIDE(true, comp(90, 114));
        IF_SETHIDE(true, comp(90, 115));
    } else {
        IF_SETHIDE(false, comp(90, 114));
        IF_SETHIDE(false, comp(90, 115));
    };
    return;
}