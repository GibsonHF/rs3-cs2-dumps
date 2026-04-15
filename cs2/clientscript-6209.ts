//
function script6209(): void {
    var int0 = IF_GETWIDTH(comp(1110, 74));
    if ((int0 < 210)) {
        IF_SETHIDE(true, comp(1110, 124));
    } else {
        IF_SETHIDE(false, comp(1110, 124));
    };
    if ((int0 < 153)) {
        script7816(comp(1110, 0), 0);
    } else if ((script7769() == -1 as struct)) {
        script7816(comp(1110, 0), 0);
    } else {
        script7816(comp(1110, 0), 1);
    };
    return;
}