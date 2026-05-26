//
function script13909(): void {
    IF_SETHIDE(1, 33882310);
    IF_SETHIDE(1, 33882308);
    script9303();
    script10239();
    varclient_6711 = "";
    script9511(1);
    varclient_6684 = false;
    if ((CC_FIND(33882423, 14) == 1)) {
        CC_SETTEXT("Bank of Gielinor");
    };
    IF_SETONTIMER(callback(), 33882343);
    IF_SETONTIMER(callback(), 33882345);
    IF_SETHIDE(1, 33882314);
    if (((varclient_2236 == 8) && (varclient_2235 == comp(517, 234)))) {
        script9(33882347, 33882348, 33882349, 33882351, "Search...");
        script8841(11, 0);
    };
    IF_SETHIDE(1, 33882369);
    return;
}