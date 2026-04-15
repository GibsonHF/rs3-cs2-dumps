//
function script6237(): void {
    var int0 = IF_GETTRANS(comp(1285, 35));
    if ((int0 >= 243)) {
        IF_SETHIDE(true, comp(1285, 35));
        IF_SETONTIMER(callback(), comp(1285, 34));
    } else {
        IF_SETTRANS((int0 + 2), comp(1285, 35));
    };
    return;
}