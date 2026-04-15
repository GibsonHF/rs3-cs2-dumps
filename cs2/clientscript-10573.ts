//
function script10573(): void {
    if ((varbitplayer_24849 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 500)) {
        return;
    };
    varbitplayer_24852 = 8;
    stack(24011);
    stack(100466693);
    IF_SETGRAPHIC();
    IF_SETTEXT("Pirate titles: Red-Hand, Blackbeard, Runebeard, the Rum Thief and Pirate King/Queen.", 100466721);
    IF_SETTEXT("Buy the second set of pirate titles?", 100466722);
    IF_SETHIDE(0, 100466717);
    return;
}