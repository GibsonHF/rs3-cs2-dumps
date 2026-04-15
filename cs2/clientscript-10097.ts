//
function script10097(int0: int): void {
    var int1 = IF_GETTRANS(comp(1515, 12));
    if ((int1 != int0)) {
        if ((int1 < int0)) {
            IF_SETTRANS((int1 + 5), comp(1515, 12));
        } else {
            IF_SETTRANS((int1 - 5), comp(1515, 12));
        };
    } else {
        IF_SETONTIMER(callback(), comp(1515, 12));
    };
    return;
}