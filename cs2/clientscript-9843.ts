//
function script9843(): void {
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        varclient_4198 = (varclient_4198 - 1);
        if ((varclient_4198 <= 0)) {
            IF_SETONTIMER(callback(), comp(200, 69));
            IF_SETHIDE(true, comp(1350, 10));
            IF_SETHIDE(true, comp(1350, 34));
            IF_SETHIDE(true, comp(1350, 42));
            IF_SETHIDE(true, comp(1350, 50));
            IF_SETHIDE(true, comp(1350, 58));
            IF_SETHIDE(true, comp(1350, 9));
        };
    };
    IF_SETTEXT(`Time remaining until you can try again: ${inttostring(varclient_4198, 10)} seconds`, comp(1350, 10));
    return;
}