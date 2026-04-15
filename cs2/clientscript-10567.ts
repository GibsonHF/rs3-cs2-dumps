//
function script10567(): void {
    if ((varbitplayer_24919 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 3000)) {
        return;
    };
    varbitplayer_24852 = 1;
    stack(24007);
    stack(100466693);
    IF_SETGRAPHIC();
    IF_SETTEXT("A pirate sheep companion pet, who keeps calm even when things get woolly out at sea.", 100466721);
    IF_SETTEXT("Buy pirate sheep?", 100466722);
    IF_SETHIDE(0, 100466717);
    return;
}