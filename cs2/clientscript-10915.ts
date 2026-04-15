//
function script10915(int0: int): void {
    if ((varclient_4703 > int0)) {
        IF_SETCOLOUR(15741490, comp(1579, 68));
        varclient_4703 = (varclient_4703 - 1);
        IF_SETTEXT(inttostring(varclient_4703, 10), comp(1579, 68));
    } else if ((varclient_4703 < int0)) {
        IF_SETCOLOUR(3338290, comp(1579, 68));
        varclient_4703 = (varclient_4703 + 1);
        IF_SETTEXT(inttostring(varclient_4703, 10), comp(1579, 68));
    } else {
        IF_SETCOLOUR(15785140, comp(1579, 68));
        IF_SETTEXT(inttostring(varclient_4703, 10), comp(1579, 68));
        IF_SETONTIMER(callback(), comp(1579, 68));
    };
    return;
}