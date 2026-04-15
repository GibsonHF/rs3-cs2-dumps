//
function script13909(): void {
    IF_SETHIDE(true, comp(517, 198));
    IF_SETHIDE(true, comp(517, 196));
    script9303();
    script10239();
    varclient_6711 = "";
    script9511(1);
    varclient_6684 = false;
    if ((CC_FIND(comp(517, 311), 14) == 1)) {
        CC_SETTEXT("Bank of Gielinor");
    };
    IF_SETONTIMER(callback(), comp(517, 231));
    IF_SETONTIMER(callback(), 33882345);
    IF_SETHIDE(1, 33882314);
    if (((varclient_2236 == 8) && (varclient_2235 == comp(517, 234)))) {
        script9(comp(517, 235), comp(517, 236), comp(517, 237), comp(517, 239), "Search...");
        script8841(11, 0);
    };
    IF_SETHIDE(true, comp(517, 257));
    return;
}