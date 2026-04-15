//
function script2854(int0: int): void {
    var int1 = IF_GETTRANS(comp(1563, 0));
    if ((int1 == int0)) {
        IF_SETONTIMER(callback(), comp(1563, 0));
    } else if ((int1 < int0)) {
        IF_SETTRANS((int1 + 1), comp(1563, 0));
    } else {
        IF_SETTRANS((int1 - 1), comp(1563, 0));
    };
    return;
}