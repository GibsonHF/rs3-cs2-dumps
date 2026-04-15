//
function script4093(): void {
    var int0 = IF_GETTRANS(comp(1199, 0));
    if ((int0 < 11)) {
        IF_SETTRANS(10, comp(1199, 0));
        IF_SETTRANS(20, comp(1199, 13));
        IF_SETONTIMER(callback(), comp(1199, 0));
        return;
    };
    IF_SETTRANS((int0 - 10), comp(1199, 0));
    IF_SETTRANS(((int0 - 10) / 2), comp(1199, 13));
    return;
}