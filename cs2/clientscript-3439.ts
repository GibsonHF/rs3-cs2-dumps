//
function script3439(int0: number, int1: number): void {
    if ((int1 == 0)) {
        if ((int0 > 150)) {
            var int0 = (int0 - 1);
        } else {
            var int1 = 1;
        };
    } else if ((int0 < 255)) {
        int0 = (int0 + 1);
    } else {
        IF_SETONTIMER(callback(), 106496000);
        int1 = 1;
    };
    IF_SETTRANS(int0, 106496000);
    IF_SETTRANS(int0, 106496001);
    IF_SETTRANS(int0, 106496003);
    IF_SETTRANS(int0, 106496002);
    IF_SETONTIMER(callback(script3439, int0, int1), 106496000);
    return;
}