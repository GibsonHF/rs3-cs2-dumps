//
function script13217(): void {
    var string0 = "";
    if ((IF_FIND(comp(1843, 183)) == 1)) {
        string0 = cc_getparam(5441);
    };
    if (((varclient_2236 == 8) && (varclient_2235 == comp(517, 234)))) {
        script13909();
    };
    if ((varclient_2236 <= 0)) {
        varclient_2250 = string0;
        varclient_2235 = comp(1843, 241);
        varclient_2236 = 8;
        varclient_2237 = 18;
        varclient_1029 = script1553(103, varclient_1029, varclient_2250);
        script13223(string0, CLIENTCLOCK());
        script9833(comp(1843, 241), comp(1843, 242), comp(1843, 243), comp(1843, 244), comp(1843, 247), 1, 0);
        script7796(comp(1843, 240), script9984(28549 as struct, 4));
        IF_SETHIDE(false, comp(1843, 246));
        IF_SETCOLOUR(16777215, comp(1843, 244));
    };
    return;
}