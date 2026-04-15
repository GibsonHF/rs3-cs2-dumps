//
function script4095(): void {
    var int0 = IF_GETTRANS(comp(1202, 0));
    if ((int0 > 75)) {
        IF_SETTRANS(80, comp(1202, 0));
        IF_SETTRANS(40, comp(1202, 2));
        IF_SETONTIMER(callback(), comp(1202, 0));
        return;
    };
    IF_SETTRANS((int0 + 4), comp(1202, 0));
    IF_SETTRANS(((int0 + 4) / 2), comp(1202, 2));
    return;
}