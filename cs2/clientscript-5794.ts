//
function script5794(): void {
    if ((STRING_LENGTH(varclient_2758) < 1)) {
        script426("You need to enter bug information before you can continue.", comp(1405, 9), -1, 0);
        return;
    };
    IF_SETHIDE(false, comp(1405, 7));
    IF_SETHIDE(true, comp(1405, 9));
    IF_SETHIDE(false, comp(1405, 10));
    IF_SETHIDE(true, comp(1405, 4));
    IF_SETHIDE(false, comp(1405, 5));
    IF_SETHIDE(false, comp(1405, 7));
    IF_SETHIDE(true, comp(1405, 6));
    return;
}