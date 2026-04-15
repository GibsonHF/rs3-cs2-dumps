//
function script9712(int0: component): void {
    var int1 = IF_GETTRANS(int0);
    if ((int1 <= 96)) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    IF_SETTRANS((IF_GETTRANS(int0) - 2), int0);
    return;
}