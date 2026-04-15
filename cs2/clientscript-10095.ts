//
function script10095(int0: int): void {
    var int1 = IF_GETTRANS(comp(1515, 13));
    if ((int1 == int0)) {
        IF_SETONTIMER(callback(), comp(1515, 13));
    } else if ((int1 < int0)) {
        IF_SETTRANS((int1 + 1), comp(1515, 13));
    } else {
        IF_SETTRANS((int1 - 1), comp(1515, 13));
    };
    return;
}