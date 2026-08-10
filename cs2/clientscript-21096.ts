//
function script21096(): void {
    var int3 = ((CLIENTCLOCK() - int0) / 50);
    if ((int3 >= 5)) {
        IF_SETHIDE(true, int2);
        IF_SETTEXT(string0, int1);
        IF_SETENABLED(true, int1);
        IF_SETONTIMER(callback(), int1);
        return;
    };
    IF_SETTEXT(`${inttostring((5 - int3), 10)}...`, int1);
    return;
}