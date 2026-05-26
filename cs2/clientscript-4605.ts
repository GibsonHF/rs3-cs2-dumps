//
function script4605(): void {
    var int0 = script4606();
    IF_SETPOSITION(0, 95, 1, 1, comp(1802, 13));
    IF_SETHIDE(false, comp(1802, 31));
    if ((int0 < 4)) {
        IF_SETHIDE(false, comp(1802, 38));
        IF_SETHIDE(false, comp(1802, 33));
    } else {
        IF_SETHIDE(true, comp(1802, 38));
        IF_SETHIDE(true, comp(1802, 33));
    };
    if ((int0 < 3)) {
        IF_SETHIDE(false, comp(1802, 45));
        IF_SETHIDE(false, comp(1802, 40));
    } else {
        IF_SETHIDE(true, comp(1802, 45));
        IF_SETHIDE(true, comp(1802, 40));
    };
    if ((int0 < 2)) {
        IF_SETHIDE(false, comp(1802, 51));
        IF_SETHIDE(false, comp(1802, 47));
    } else {
        IF_SETHIDE(true, comp(1802, 51));
        IF_SETHIDE(true, comp(1802, 47));
    };
    script4607();
    return;
}