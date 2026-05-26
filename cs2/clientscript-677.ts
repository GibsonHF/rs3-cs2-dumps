//[clientscript,letter_lj_setscrollpos]
function script677(int0: number): void {
    if ((int0 <= 9)) {
        IF_SETSCROLLSIZE(358, 225, 10223618);
        IF_SETHIDE(1, 10223617);
    } else {
        IF_SETHIDE(0, 10223617);
        IF_SETSCROLLSIZE(358, ((int0 * 20) + 30), 10223618);
        script72(10223617, 10223618, 0);
    };
    return;
}