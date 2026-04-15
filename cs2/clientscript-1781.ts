//
function script1781(): void {
    var int0 = 0;
    var int1 = false;
    while ((int0 <= 4)) {
        if ((CC_FIND(comp(791, 139), (int0 * 3)) == 1)) {
            int1 = false;
            if (((MAP_MEMBERS() == 0) && (struct_getparam(enum_getvalue(0, 73, 1604 as cs2enum, int0), 557) == true))) {
                int1 = true;
            };
            script10020(script9670(int0, varclient_257), int1, 0);
            if ((varclient_257 == int0)) {
                script1783(comp(791, 139), comp(791, 140), comp(791, 139), ((int0 * 3) + 2));
            };
        };
        int0 = (int0 + 1);
    };
    script1784();
    return;
}