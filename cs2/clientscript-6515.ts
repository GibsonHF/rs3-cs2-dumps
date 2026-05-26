//
function script6515(int0: number): void {
    var int1 = IF_GETTRANS(3211265);
    if ((int0 == 1)) {
        if ((int1 > 0)) {
            int1 = (int1 - 1);
        };
        IF_SETTRANS(int1, 3211265);
    } else {
        if ((int1 < 100)) {
            int1 = (int1 + 1);
        };
        IF_SETTRANS(int1, 3211265);
    };
    if (((int1 == 0) || (int1 == 100))) {
        var int0 = (1 - int0);
        IF_SETONTIMER(callback(script6515, int0), 3211265);
    };
    return;
}