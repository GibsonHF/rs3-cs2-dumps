//
function script220(): void {
    script217();
    if ((strcmp(varclient_2578, "") == 0)) {
        IF_SETTEXT("No Player Selected", 38928408);
        script12724("You need to select a player to report!", 0, 1);
        return;
    };
    if ((strcmp(varclient_4669, varclient_2578) != 0)) {
        script13994(38928433, 38928434, 28556, "Offensive examine<br>information", 1);
        script13994(38928441, 38928442, 28556, "Offensive clan name", 1);
        script13994(38928443, 38928444, 28556, "Offensive group name", 1);
    };
    varclient_790 = 2;
    IF_SETHIDE(1, 38928385);
    IF_SETHIDE(1, 38928464);
    IF_SETHIDE(1, 38928472);
    IF_SETHIDE(1, 38928479);
    IF_SETHIDE(0, 38928412);
    IF_SETHIDE(1, 38928454);
    IF_SETSCROLLSIZE(IF_GETWIDTH(38928424), 195, 38928424);
    script31(38928423, 38928424, -1, -1, -1, -1, -1, -1);
    return;
}