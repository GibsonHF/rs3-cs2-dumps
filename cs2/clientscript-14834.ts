//
function script14834(): void {
    script14839();
    varclient_2250 = "";
    varclient_2235 = comp(685, 96);
    varclient_2236 = 8;
    varclient_2237 = 20;
    varclient_1029 = script1553(103, varclient_1029, varclient_2250);
    script14829(varclient_2250);
    script14836(varclient_2250, CLIENTCLOCK());
    script9833(comp(685, 96), comp(685, 97), comp(685, 98), comp(685, 99), comp(685, 102), 0, 0);
    script13967(comp(685, 95), comp(-1, 65535), 28549 as struct, 1);
    IF_SETHIDE(false, comp(685, 101));
    IF_SETCOLOUR(16777215, comp(685, 99));
    script3376(comp(685, 90), comp(685, 91), 0, 0, IF_GETWIDTH(comp(685, 90)), -1, 14072 as cs2enum, -1, (ENUM_GETOUTPUTCOUNT(14072 as cs2enum) - 1), "Select a filter", varclient_6762, 0, 0, "All", true);
    return;
}