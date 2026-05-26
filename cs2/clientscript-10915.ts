//
function script10915(int0: number): void {
    if ((varclient_4703 > int0)) {
        IF_SETCOLOUR(15741490, 103481412);
        varclient_4703 = (varclient_4703 - 1);
        IF_SETTEXT(inttostring(varclient_4703, 10), 103481412);
    } else if ((varclient_4703 < int0)) {
        IF_SETCOLOUR(3338290, 103481412);
        varclient_4703 = (varclient_4703 + 1);
        IF_SETTEXT(inttostring(varclient_4703, 10), 103481412);
    } else {
        IF_SETCOLOUR(15785140, 103481412);
        IF_SETTEXT(inttostring(varclient_4703, 10), 103481412);
        IF_SETONTIMER(callback(), 103481412);
    };
    return;
}