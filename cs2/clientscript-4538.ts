//
function script4538(int0: int, int1: component, int2: component): void {
    var int3 = 0;
    if (((CLIENTCLOCK() > int0) || (IF_GETHIDE(int2) == true))) {
        IF_SETONTIMER(callback(), int1);
        IF_SETTEXT("", int1);
    } else {
        int3 = (1 + ((int0 - CLIENTCLOCK()) / 50));
        if ((int3 > 60)) {
            IF_SETTEXT(`${inttostring((int3 / 60), 10)}m`, int1);
        } else {
            IF_SETTEXT(inttostring(int3, 10), int1);
        };
    };
    return;
}