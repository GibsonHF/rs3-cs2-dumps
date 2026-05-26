//
function script12760(int0: number): void {
    var int1 = (int0 / 50);
    var int2 = (int1 / 60);
    int1 = MODULO(int1, 60);
    if ((int1 > 9)) {
        IF_SETTEXT(`${inttostring(int2, 10)}:${inttostring(int1, 10)}`, 117112850);
    } else {
        IF_SETTEXT(`${inttostring(int2, 10)}:0${inttostring(int1, 10)}`, 117112850);
    };
    if (((int2 == 0) && (int1 <= 5))) {
        if ((MODULO((int0 / 20), 2) > 0)) {
            IF_SETHIDE(1, 117112850);
        } else {
            IF_SETHIDE(0, 117112850);
        };
    };
    if ((--int0 <= 0)) {
        IF_SETONTIMER(callback(), 117112861);
    } else {
        IF_SETONTIMER(callback(script12760, int0), 117112861);
    };
    return;
}