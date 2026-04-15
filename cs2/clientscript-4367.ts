//
function script4367(): void {
    var string0 = ESCAPE(GETCLIPBOARD());
    if ((STRING_LENGTH(string0) <= 13)) {
        varclient_2539 = string0;
        varclient_1498 = STRING_LENGTH(varclient_2539);
        varclient_1498 = script1552(varclient_1498, varclient_2539, 26 as fontmetrics, comp(1100, 12), -1);
        IF_SETPOSITION(varclient_1498, IF_GETY(comp(1100, 13)), 0, 0, comp(1100, 13));
        IF_SETTEXT(varclient_2539, comp(1100, 12));
    };
    return;
}