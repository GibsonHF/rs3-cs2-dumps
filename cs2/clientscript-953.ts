//
function script953(): void {
    var int0 = IF_GETHEIGHT(comp(783, 0));
    IF_SETSCROLLSIZE(0, 555, comp(783, 17));
    IF_SETSCROLLSIZE(0, 555, comp(783, 2));
    script7791(comp(783, 29), comp(783, 17));
    script7791(comp(783, 14), comp(783, 2));
    if ((int0 >= 550)) {
        IF_SETSIZE(0, 0, 1, 1, comp(783, 17));
        IF_SETSIZE(0, 0, 1, 1, comp(783, 2));
        IF_SETHIDE(true, comp(783, 29));
        IF_SETHIDE(true, comp(783, 14));
    } else {
        IF_SETHIDE(false, comp(783, 29));
        IF_SETHIDE(false, comp(783, 14));
        IF_SETSIZE(20, 0, 1, 1, comp(783, 17));
        IF_SETSIZE(20, 0, 1, 1, comp(783, 2));
    };
    return;
}