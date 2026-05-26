//
function script6242(): void {
    var int0 = IF_GETTRANS(comp(1285, 26));
    if ((int0 >= 243)) {
        IF_SETHIDE(true, comp(1285, 24));
        IF_SETONTIMER(callback(), comp(1285, 4));
    } else {
        IF_SETTRANS((int0 + 11), comp(1285, 25));
        IF_SETTRANS((int0 + 11), comp(1285, 26));
        IF_SETTRANS((int0 + 11), comp(1285, 27));
    };
    return;
}