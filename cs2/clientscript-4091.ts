//
function script4091(int0: int): void {
    var int1 = IF_GETTRANS(comp(1202, 0));
    if ((int1 > (255 - (int0 + 1)))) {
        IF_SETTRANS(255, comp(1202, 0));
        IF_SETTRANS(125, comp(1202, 2));
        IF_SETONTIMER(callback(), comp(1202, 0));
        return;
    };
    IF_SETTRANS((int1 + int0), comp(1202, 0));
    IF_SETTRANS(((int1 + int0) / 2), comp(1202, 2));
    return;
}