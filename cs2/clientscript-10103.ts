//
function script10103(int0: number, int1: number): void {
    var int2 = IF_GETWIDTH(int0);
    if ((int1 == 0)) {
        IF_SETHIDE(1, 99287070);
        int2 = SCALE(int2, 230, 100);
        if ((IF_GETCOLOUR(99287069) == 16757760)) {
            IF_SETTEXT(`Burn: ${inttostring(int2, 10)}%`, 99287070);
        } else if ((IF_GETCOLOUR(99287069) == 51455)) {
            IF_SETTEXT(`Wall health: ${inttostring((int2 * 2), 10)}%`, 99287070);
        } else {
            IF_SETTEXT(`Acidity level: ${inttostring(varclient_4274, 10)}%`, 99287070);
        };
    } else {
        IF_SETHIDE(1, 99287070);
    };
    return;
}