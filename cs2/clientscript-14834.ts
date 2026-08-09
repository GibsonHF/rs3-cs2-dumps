//
function script14834(): void {
    script14839();
    varclient_2250 = "";
    varclient_2235 = 44892257;
    varclient_2236 = 8;
    varclient_2237 = 20;
    varclient_1029 = script1553(103, varclient_1029, varclient_2250);
    script14829(varclient_2250);
    script14836(varclient_2250, CLIENTCLOCK());
    script9833(44892257, 44892258, 44892259, 44892260, 44892263, 0, 0);
    script13967(44892256, -1, 28549, 1);
    IF_SETHIDE(false, comp(685, 102));
    IF_SETCOLOUR(16777215, comp(685, 100));
    script3376(44892251, 44892252, 0, 0, IF_GETWIDTH(comp(685, 91)), -1, 14072, -1, (ENUM_GETOUTPUTCOUNT(14072 as cs2enum) - 1), "Select a filter", varclient_6762, 0, 0, "All", 1);
    return;
}