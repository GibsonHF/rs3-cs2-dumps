//
function script1943(): void {
    if ((STRING_LENGTH(varclient_2455) == 0)) {
        IF_SETHIDE(true, comp(802, 6));
        return;
    };
    IF_SETHIDE(false, comp(802, 6));
    IF_SETTEXT(varclient_2455, comp(802, 5));
    varclient_581 = 1;
    return;
}