//
function script12758(int0: number): void {
    if ((int0 > 30000)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script12758, int0), 117112856);
        return;
    };
    var int1 = (int0 / 50);
    var int2 = (int1 / 60);
    int1 = MODULO(int1, 60);
    if ((int1 > 9)) {
        IF_SETTEXT(`${inttostring(int2, 10)}:${inttostring(int1, 10)}`, 117112859);
    } else {
        IF_SETTEXT(`${inttostring(int2, 10)}:0${inttostring(int1, 10)}`, 117112859);
    };
    if (((int2 == 0) && (int1 <= 10))) {
        if ((MODULO((int0 / 20), 2) > 0)) {
            IF_SETHIDE(1, 117112859);
        } else {
            IF_SETHIDE(0, 117112859);
        };
    };
    if ((--int0 <= 0)) {
        IF_SETONTIMER(callback(), 117112856);
        IF_SETHIDE(1, 117112856);
    } else {
        IF_SETONTIMER(callback(script12758, int0), 117112856);
    };
    return;
}