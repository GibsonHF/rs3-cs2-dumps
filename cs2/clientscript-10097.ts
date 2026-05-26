//
function script10097(int0: number): void {
    var int1 = IF_GETTRANS(99287052);
    if ((int1 != int0)) {
        if ((int1 < int0)) {
            IF_SETTRANS((int1 + 5), 99287052);
        } else {
            IF_SETTRANS((int1 - 5), 99287052);
        };
    } else {
        IF_SETONTIMER(callback(), 99287052);
    };
    return;
}