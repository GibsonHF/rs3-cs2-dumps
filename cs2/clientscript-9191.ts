//
function script9191(int0: int, int1: unknown_int): void {
    var int2 = ((int0 - CLIENTCLOCK()) / 50);
    if ((int2 < 0)) {
        IF_SETONTIMER(callback(), comp(312, 10));
        return;
    };
    var string0 = "<col=EBE1BE>";
    if ((int2 < 11)) {
        string0 = "<col=EB3232>";
    } else if ((int2 < 21)) {
        string0 = "<col=EB9632>";
    };
    IF_SETTEXT(`Total collapse in: ${string0}${inttostring(int2, 10)}</col>`, comp(312, 10));
    IF_SETONTIMER(callback(script9191, int0, int1), comp(312, 10));
    return;
}