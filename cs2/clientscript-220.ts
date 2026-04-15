//
function script220(): void {
    script217();
    if ((strcmp(varclient_2578, "") == 0)) {
        IF_SETTEXT("No Player Selected", comp(594, 24));
        script12724("You need to select a player to report!", 0, 1);
        return;
    };
    if ((strcmp(varclient_4669, varclient_2578) != 0)) {
        script13994(comp(594, 49), comp(594, 50), 28556 as struct, "Offensive examine<br>information", true);
        script13994(comp(594, 57), comp(594, 58), 28556 as struct, "Offensive clan name", true);
        script13994(comp(594, 59), comp(594, 60), 28556 as struct, "Offensive group name", true);
    };
    varclient_790 = 2;
    IF_SETHIDE(true, comp(594, 1));
    IF_SETHIDE(true, comp(594, 80));
    IF_SETHIDE(true, comp(594, 88));
    IF_SETHIDE(true, comp(594, 95));
    IF_SETHIDE(false, comp(594, 28));
    IF_SETHIDE(true, comp(594, 70));
    IF_SETSCROLLSIZE(IF_GETWIDTH(comp(594, 40)), 195, comp(594, 40));
    script31(comp(594, 39), comp(594, 40), -1 as graphic, -1 as graphic, -1 as graphic, -1 as graphic, -1 as graphic, -1 as graphic);
    return;
}