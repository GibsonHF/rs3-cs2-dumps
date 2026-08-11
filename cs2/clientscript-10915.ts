//
function script10915(int0: number): void {
    if ((varclient_4703 > int0)) {
        IF_SETCOLOUR(15741490, comp(1579, 68));  // thedrop:survivor_number
        varclient_4703 = (varclient_4703 - 1);
        IF_SETTEXT(inttostring(varclient_4703, 10), comp(1579, 68));  // thedrop:survivor_number
    } else if ((varclient_4703 < int0)) {
        IF_SETCOLOUR(3338290, comp(1579, 68));  // thedrop:survivor_number
        varclient_4703 = (varclient_4703 + 1);
        IF_SETTEXT(inttostring(varclient_4703, 10), comp(1579, 68));  // thedrop:survivor_number
    } else {
        IF_SETCOLOUR(15785140, comp(1579, 68));  // thedrop:survivor_number
        IF_SETTEXT(inttostring(varclient_4703, 10), comp(1579, 68));  // thedrop:survivor_number
        IF_SETONTIMER(callback(), comp(1579, 68));  // thedrop:survivor_number
    };
    return;
}