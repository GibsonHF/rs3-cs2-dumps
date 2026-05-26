//
function script10572(): void {
    if ((varbitplayer_24848 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 500)) {
        return;
    };
    varbitplayer_24852 = 7;
    IF_SETGRAPHIC(24010 as graphic, comp(1533, 5));
    IF_SETTEXT("Pirate titles: Peg Leg, Cutthroat, Swashbuckler, One-Eyed and Dread Pirate.", comp(1533, 33));
    IF_SETTEXT("Buy the first set of pirate titles?", comp(1533, 34));
    IF_SETHIDE(false, comp(1533, 29));
    return;
}