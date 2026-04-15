//
function script3439(int0: int, int1: unknown_int): void {
    if ((int1 == 0)) {
        if ((int0 > 150)) {
            var int0 = (int0 - 1);
        } else {
            var int1 = 1;
        };
    } else if ((int0 < 255)) {
        int0 = (int0 + 1);
    } else {
        IF_SETONTIMER(callback(), comp(1625, 0));
        int1 = 1;
    };
    IF_SETTRANS(int0, comp(1625, 0));
    IF_SETTRANS(int0, comp(1625, 1));
    IF_SETTRANS(int0, comp(1625, 3));
    IF_SETTRANS(int0, comp(1625, 2));
    IF_SETONTIMER(callback(script3439, int0, int1), comp(1625, 0));
    return;
}