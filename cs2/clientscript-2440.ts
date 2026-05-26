//
function script2440(): void {
    var int0 = (varclient_819 / 2);
    if ((int0 < 1)) {
        IF_SETTEXT("Catch: <col=FFFFFF>Nothing", comp(15, 7));
    } else {
        IF_SETTEXT(`Catch: <col=FFFFFF>${inttostring(int0, 10)} Fish`, comp(15, 7));
    };
    return;
}