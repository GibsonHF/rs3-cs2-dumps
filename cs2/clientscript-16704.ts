//
function script16704(): void {
    var int0 = comp(1499, 2);  // construction_house_furniture_portal_nexus_configure:listener_var
    var int1 = 0;
    while ((int1 < 12)) {
        if ((CC_FIND(int0, int1) == 1)) {
            cc_setparam(5946, script9742(int1));
        };
        int1 = (int1 + 1);
    };
    return;
}