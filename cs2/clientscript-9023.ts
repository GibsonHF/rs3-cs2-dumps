//
function script9023(): void {
    if ((IF_GETHIDE(comp(1345, 73)) == true)) {
        IF_SETHIDE(false, comp(1345, 73));
        IF_SETGRAPHIC(31348 as graphic, comp(1345, 232));
    } else {
        IF_SETHIDE(true, comp(1345, 73));
        IF_SETGRAPHIC(31347 as graphic, comp(1345, 232));
    };
    return;
}