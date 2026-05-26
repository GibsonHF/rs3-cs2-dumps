//
function script13151(): void {
    script13249();
    if ((IF_FIND(comp(1843, 183)) == 1)) {
        cc_setparam(6356, -1);
        cc_setparam(6357, -1);
        cc_setparam(6358, -1);
        cc_setparam(6359, -1);
        cc_setparam(6362, 0);
        cc_setparam(6364, 0);
        cc_setparam(6365, 0);
        cc_setparam(6366, 0);
        cc_setparam(6367, 0);
        cc_setparam(6368, 0);
        cc_setparam(6369, 0);
        cc_setparam(6370, 0);
        if ((varbitclient_35136 == 0)) {
            cc_setparam(6371, script13250());
            cc_setparam(6372, 12858);
        } else {
            cc_setparam(6371, AND(varclient_5934, script13250()));
            cc_setparam(6372, AND(varclient_5935, 12858));
            if (((cc_getparam(6371) == script13250()) && (cc_getparam(6372) == 12858))) {
                varbitclient_35136 = 0;
            };
        };
    };
    var string0 = "Recolour Outfit<br><br>SHIFT+Click to recolour individual slots";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), 120783119);
    string0 = "This outfit is not recolourable";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), 120783120);
    string0 = "Undo All Changes<br><br>CTRL+Click to undo individual slots";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), 120783127);
    string0 = "Clear All Customisations<br><br>Right click to clear individual slots";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), 120783171);
    string0 = "Hide All Equipment<br><br>This will show your base clothing.<br>Right click to hide individual slots.";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), 120783134);
    string0 = "Save as preset";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), 120783150);
    var int0 = -1;
    CC_DELETEALL(120783032);
    while ((++int0 < 19)) {
        CC_CREATE(comp(1843, 184), 5, int0);
    };
    varclient_1968 = 0;
    script13163();
    script13182();
    if ((IF_FIND(comp(1843, 251)) == 1)) {
        cc_setparam(5945, -1);
        CC_SETONTIMER(callback(script13183));
    };
    IF_SETCOLOUR(script10495(3), comp(1843, 244));
    if ((IF_FIND(comp(1843, 183)) == 1)) {
        CC_SETPARAM_STRING(5441, "");
    };
    varclient_5938 = script441(1);
    varclient_5938 = MAX(MIN(varclient_5938, 2), 2);
    varclient_5939 = (INV_SIZE(675 as inv) - INV_FREESPACE(675 as inv));
    if ((varclient_5938 == 2)) {
        IF_SETONINVTRANSMIT(callback(script13158, 28519, 675, 1), comp(1843, 1));
        IF_SETONVARCSTRTRANSMIT(callback(script13158, 35654, 5940, 5941, 5942, 5943, 4), 120782849);
        IF_SETONVARTRANSMIT(callback(script13158, -1, 6808, 1), 120782849);
    };
    IF_SETONTIMER(callback(script13157, -2147483645), comp(1843, 1));
    script13166(-1);
    var int1 = script13165(script13160());
    if (((script13169(-1, int1) == 0) && (IF_FIND(comp(1843, 0)) == 1))) {
        cc_setparam(5945, CLIENTCLOCK());
        CC_SETONTIMER(callback(script13152, int1));
    };
    return;
}