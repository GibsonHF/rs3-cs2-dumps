//
function script745(int0: int, int1: int, int2: unknown_int): void {
    var string0 = inttostring(int0, 10);
    var string1 = inttostring(int1, 10);
    var int3 = comp(17, 9);
    var int4 = comp(17, 7);
    if ((int2 == 0)) {
        int3 = comp(1630, 205);
        int4 = comp(1630, 46);
    };
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        if ((--int1 < 0)) {
            var int1 = 59;
            var int0 = MAX(0, (int0 - 1));
        };
        string0 = inttostring(int0, 10);
        string1 = inttostring(int1, 10);
        if ((int1 < 10)) {
            string1 = `0${inttostring(int1, 10)}`;
        };
        if ((int0 < 10)) {
            string0 = `0${inttostring(int0, 10)}`;
        };
        IF_SETTEXT(`${string0}:${string1}`, int3);
        IF_SETONTIMER(callback(script745, int0, int1, int2), int3);
        if (((int1 == 0) && (int0 == 0))) {
            IF_SETPOSITION(0, 35, 1, 0, int4);
            IF_SETONTIMER(callback(), int3);
            IF_SENDTOBACK(1114119);
            IF_SENDTOBACK(106823726);
            IF_SETHIDE(1, 1114119);
        };
    };
    return;
}