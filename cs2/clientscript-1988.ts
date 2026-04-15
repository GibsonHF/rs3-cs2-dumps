//
function script1988(int0: int): void {
    var int1 = ((int0 - CLIENTCLOCK()) / 50);
    if ((int1 < 0)) {
        IF_SETONTIMER(callback(), comp(1037, 25));
        return;
    };
    var string0 = "<col=EBE1BE>";
    if ((int1 < 3)) {
        string0 = "<col=EB3232>";
    } else if ((int1 < 7)) {
        string0 = "<col=EB9632>";
    };
    IF_SETTEXT(`Select next map: ${string0}${inttostring(int1, 10)}</col>`, comp(1037, 25));
    return;
}