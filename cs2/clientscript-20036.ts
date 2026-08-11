//
function script20036(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(17141 as graphic, comp(1340, 2));  // trh210_overlay:title
            break;
        }
        case 1: {
            IF_SETGRAPHIC(17142 as graphic, comp(1340, 2));  // trh210_overlay:title
            break;
        }
        case 2: {
            IF_SETGRAPHIC(17145 as graphic, comp(1340, 2));  // trh210_overlay:title
            break;
        }
        case 3: {
            IF_SETGRAPHIC(17468 as graphic, comp(1340, 2));  // trh210_overlay:title
            break;
        }
    };
    IF_SETHIDE(false, comp(1340, 0));  // trh210_overlay:splash_screen
    IF_SETHIDE(true, comp(1340, 27));  // trh210_overlay:universe
    IF_SETHIDE(true, comp(1253, 8));  // wheel_of_fortune:chests_layer
    script20039(87818259);
    script20039(87818251);
    script20039(87818352);
    IF_SETTEXT("Gather and spend <col=89CFF0>Loot</col> to choose between <col=89CFF0>Bonuses</col>.<br><br>These increase the <col=FF00>multipliers</col> or <col=8d52e5>rarities</col> of your prizes on the trail!<br><br>Multipliers can be increased to a maximum of <col=FF00>x4</col> and rarities to a maximum of <col=8d52e5>purple rarity</col>.", comp(1340, 3));  // trh210_overlay:desc
    return;
}