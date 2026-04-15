//
function script20036(): void {
    switch (MAP_LANG()) {
        case 0: {
            stack(17141);
            stack(87818242);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(17142);
            stack(87818242);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(17145);
            stack(87818242);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(17468);
            stack(87818242);
            IF_SETGRAPHIC();
            break;
        }
    };
    IF_SETHIDE(false, comp(1340, 0));
    IF_SETHIDE(true, comp(1340, 27));
    IF_SETHIDE(true, comp(1253, 8));
    script20039(comp(1340, 19));
    script20039(comp(1340, 11));
    script20039(comp(1340, 112));
    IF_SETTEXT("Gather and spend <col=89CFF0>Loot</col> to choose between <col=89CFF0>Bonuses</col>.<br><br>These increase the <col=FF00>multipliers</col> or <col=8d52e5>rarities</col> of your prizes on the trail!<br><br>Multipliers can be increased to a maximum of <col=FF00>x4</col> and rarities to a maximum of <col=8d52e5>purple rarity</col>.", comp(1340, 3));
    return;
}