//
function script6515(int0: int): void {
    var int1 = IF_GETTRANS(comp(49, 1));
    if ((int0 == 1)) {
        if ((int1 > 0)) {
            int1 = (int1 - 1);
        };
        IF_SETTRANS(int1, comp(49, 1));
    } else {
        if ((int1 < 100)) {
            int1 = (int1 + 1);
        };
        IF_SETTRANS(int1, comp(49, 1));
    };
    if (((int1 == 0) || (int1 == 100))) {
        var int0 = (1 - int0);
        IF_SETONTIMER(callback(script6515, int0), comp(49, 1));
    };
    return;
}