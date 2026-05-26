//
function script20036(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(17141, 87818242);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(17142, 87818242);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(17145, 87818242);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(17468, 87818242);
            break;
        }
    };
    IF_SETHIDE(0, 87818240);
    IF_SETHIDE(1, 87818267);
    IF_SETHIDE(1, 82116616);
    script20039(87818259);
    script20039(87818251);
    script20039(87818352);
    IF_SETTEXT("Gather and spend <col=89CFF0>Loot</col> to choose between <col=89CFF0>Bonuses</col>.<br><br>These increase the <col=FF00>multipliers</col> or <col=8d52e5>rarities</col> of your prizes on the trail!<br><br>Multipliers can be increased to a maximum of <col=FF00>x4</col> and rarities to a maximum of <col=8d52e5>purple rarity</col>.", 87818243);
    return;
}