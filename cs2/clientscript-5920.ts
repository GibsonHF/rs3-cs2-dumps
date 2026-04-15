//
function script5920(): void {
    var int0 = IF_GETHEIGHT(comp(223, 0));
    IF_SETSCROLLSIZE(0, 405, comp(223, 1));
    script7791(comp(223, 34), comp(223, 1));
    if ((int0 >= 405)) {
        IF_SETSIZE(0, 0, 1, 1, comp(223, 1));
        IF_SETHIDE(true, comp(223, 34));
    } else {
        IF_SETHIDE(false, comp(223, 34));
        IF_SETSIZE(20, 0, 1, 1, comp(223, 1));
    };
    return;
}