//
function script5920(): void {
    var int0 = IF_GETHEIGHT(14614528);
    IF_SETSCROLLSIZE(0, 405, 14614529);
    script7791(14614562, 14614529);
    if ((int0 >= 405)) {
        IF_SETSIZE(0, 0, 1, 1, 14614529);
        IF_SETHIDE(1, 14614562);
    } else {
        IF_SETHIDE(0, 14614562);
        IF_SETSIZE(20, 0, 1, 1, 14614529);
    };
    return;
}