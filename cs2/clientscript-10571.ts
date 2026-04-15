//
function script10571(): void {
    if ((varbitplayer_24847 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 1000)) {
        return;
    };
    if ((INV_FREESPACE(93 as inv) == 0)) {
        return;
    };
    varbitplayer_24852 = 6;
    stack(23965);
    stack(100466693);
    IF_SETGRAPHIC();
    IF_SETTEXT("A set of peg legs (left, right and both legs) to help your pirate look.", 100466721);
    IF_SETTEXT("Buy pirate peglegs?", 100466722);
    IF_SETHIDE(0, 100466717);
    return;
}