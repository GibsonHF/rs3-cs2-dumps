//[clientscript,conq_skull_swapper]
function script409(): void {
    varclient_1364 = (varclient_1364 + 1);
    if ((varclient_1364 == 50)) {
        IF_SETTEXT("Opponent's Turn", comp(1010, 30));
    } else if ((varclient_1364 == 100)) {
        IF_SETTEXT("Opponent's Turn.", comp(1010, 30));
    } else if ((varclient_1364 == 150)) {
        IF_SETTEXT("Opponent's Turn..", comp(1010, 30));
    } else if ((varclient_1364 >= 200)) {
        IF_SETTEXT("Opponent's Turn...", comp(1010, 30));
        varclient_1364 = 0;
    };
    return;
}