//
function script7283(int0: unknown_int): void {
    if ((int0 == 1)) {
        if ((varclient_2611 != 0)) {
            printmessage("You cannot currently edit the crew.");
            return;
        };
        IF_SETHIDE(true, comp(916, 107));
        IF_SETHIDE(true, comp(916, 334));
        IF_SETHIDE(false, comp(916, 178));
        IF_SETHIDE(false, comp(916, 146));
        IF_SETHIDE(true, comp(916, 322));
        IF_SETHIDE(false, comp(916, 321));
    } else {
        IF_SETHIDE(false, comp(916, 322));
        IF_SETHIDE(true, comp(916, 178));
        IF_SETHIDE(true, comp(916, 146));
        IF_SETHIDE(true, comp(916, 334));
    };
    return;
}