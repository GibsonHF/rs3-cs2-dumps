//
function script12913(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 0;
    if (((CLIENTCLOCK() > int0) || (IF_GETHIDE(int2) == 1))) {
        IF_SETONTIMER(callback(), int1);
        IF_SETTEXT("", int1);
    } else {
        int4 = (1 + ((int0 - CLIENTCLOCK()) / 50));
        if ((int4 > 60)) {
            IF_SETTEXT(`${inttostring((int4 / 60), 10)}m<br>(${inttostring(int3, 10)})`, int1);
        } else {
            IF_SETTEXT(`${inttostring(int4, 10)}<br>(${inttostring(int3, 10)})`, int1);
        };
    };
    return;
}