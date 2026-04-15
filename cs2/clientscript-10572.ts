//
function script10572(): void {
    if ((varbitplayer_24848 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 500)) {
        return;
    };
    varbitplayer_24852 = 7;
    stack(24010);
    stack(100466693);
    IF_SETGRAPHIC();
    IF_SETTEXT("Pirate titles: Peg Leg, Cutthroat, Swashbuckler, One-Eyed and Dread Pirate.", 100466721);
    IF_SETTEXT("Buy the first set of pirate titles?", 100466722);
    IF_SETHIDE(0, 100466717);
    return;
}