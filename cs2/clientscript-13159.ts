//
function script13159(int0: unknown_int): void {
    var string0 = "null";
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    if ((int0 == 28519)) {
        varclient_5939 = (INV_SIZE(675 as inv) - INV_FREESPACE(675 as inv));
        if ((IF_FIND(comp(1843, 183)) == 1)) {
            string0 = cc_getparam(5441);
            int1 = cc_getparam(6362);
            int2 = cc_getparam(6364);
            int3 = cc_getparam(6365);
            int4 = cc_getparam(6366);
            int5 = cc_getparam(6367);
            int6 = cc_getparam(6368);
            int7 = cc_getparam(6369);
            int8 = cc_getparam(6370);
            int9 = cc_getparam(6371);
            int10 = cc_getparam(6372);
            CC_SETPARAM_STRING(5441, "");
            cc_setparam(6362, 0);
            cc_setparam(6364, 0);
            cc_setparam(6365, 0);
            cc_setparam(6366, 0);
            cc_setparam(6367, 0);
            cc_setparam(6368, 0);
            cc_setparam(6369, 0);
            cc_setparam(6370, 0);
            cc_setparam(6371, 0);
            cc_setparam(6372, 0);
            script13170(string0, int1, int2, int3, int4, int5, int6, int7, int8, int9, int10);
        };
    } else if ((int0 == 35654)) {
        if ((varbitclient_35134 == 0)) {
            script13177();
        } else {
            script13176();
        };
    } else if ((varbitclient_35134 == 0)) {
        script13177();
    } else {
        script13176();
    };
    return;
}