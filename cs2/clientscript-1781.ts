//
function script1781(): void {
    var int0 = 0;
    var int1 = 0;
    while ((int0 <= 4)) {
        if ((CC_FIND(comp(791, 139), (int0 * 3)) == 1)) {  // clanwars_setup:arena_layer
            int1 = 0;
            if (((MAP_MEMBERS() == 0) && (struct_getparam(enum_getvalue(0, 73, 1604 as cs2enum, int0), 557) == true))) {
                int1 = 1;
            };
            script10020(script9670(int0, varclient_257), int1, 0);
            if ((varclient_257 == int0)) {
                script1783(51839115, 51839116, 51839115, ((int0 * 3) + 2));
            };
        };
        int0 = (int0 + 1);
    };
    script1784();
    return;
}