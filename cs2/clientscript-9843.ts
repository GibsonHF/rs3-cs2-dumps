//
function script9843(): void {
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        varclient_4198 = (varclient_4198 - 1);
        if ((varclient_4198 <= 0)) {
            IF_SETONTIMER(callback(), comp(200, 69));
            IF_SETHIDE(1, 88473610);
            IF_SETHIDE(1, 88473634);
            IF_SETHIDE(1, 88473642);
            IF_SETHIDE(1, 88473650);
            IF_SETHIDE(1, 88473658);
            IF_SETHIDE(1, 88473609);
        };
    };
    IF_SETTEXT(`Time remaining until you can try again: ${inttostring(varclient_4198, 10)} seconds`, comp(1350, 10));
    return;
}