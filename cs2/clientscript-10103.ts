//
function script10103(int0: component, int1: unknown_int): void {
    var int2 = IF_GETWIDTH(int0);
    if ((int1 == 0)) {
        IF_SETHIDE(true, comp(1515, 30));
        int2 = SCALE(int2, 230, 100);
        if ((IF_GETCOLOUR(comp(1515, 29)) == 16757760)) {
            IF_SETTEXT(`Burn: ${inttostring(int2, 10)}%`, comp(1515, 30));
        } else if ((IF_GETCOLOUR(comp(1515, 29)) == 51455)) {
            IF_SETTEXT(`Wall health: ${inttostring((int2 * 2), 10)}%`, comp(1515, 30));
        } else {
            IF_SETTEXT(`Acidity level: ${inttostring(varclient_4274, 10)}%`, comp(1515, 30));
        };
    } else {
        IF_SETHIDE(true, comp(1515, 30));
    };
    return;
}