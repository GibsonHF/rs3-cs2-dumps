//
function script2854(int0: number): void {
    var int1 = IF_GETTRANS(102432768);
    if ((int1 == int0)) {
        IF_SETONTIMER(callback(), 102432768);
    } else if ((int1 < int0)) {
        IF_SETTRANS((int1 + 1), 102432768);
    } else {
        IF_SETTRANS((int1 - 1), 102432768);
    };
    return;
}