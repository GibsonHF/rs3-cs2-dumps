//
function script10568(): void {
    if ((varbitplayer_24844 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 3000)) {
        return;
    };
    varbitplayer_24852 = 2;
    IF_SETGRAPHIC(23964 as graphic, comp(1533, 5));
    IF_SETTEXT("Be made to walk the plank by an enraged pirate.", comp(1533, 33));
    IF_SETTEXT("Buy Walk the Plank emote?", comp(1533, 34));
    IF_SETHIDE(false, comp(1533, 29));
    return;
}