//
function script5606(): void {
    IF_SETTEXT(inttostring(varclient_1747, 10), comp(290, 9));
    IF_SETTEXT(inttostring(varclient_1746, 10), comp(290, 10));
    if ((varclient_1748 == true)) {
        IF_SETTEXT("Whitezag", comp(290, 7));
    } else {
        IF_SETTEXT("Grayzag", comp(290, 7));
    };
    return;
}