//
function script10383(int0: component, int1: unknown_int): void {
    var int2 = IF_GETTRANS(int0);
    if ((int1 == 0)) {
        if ((int2 < 100)) {
            IF_SETTRANS(MIN(100, (int2 + 4)), int0);
        } else {
            var int1 = 1;
        };
    } else if ((int2 > 0)) {
        IF_SETTRANS(MAX(0, (int2 - 4)), int0);
    } else {
        int1 = 0;
    };
    IF_SETONTIMER(callback(script10383, int0, int1), int0);
    return;
}