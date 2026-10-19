//
function script21194(): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    IF_OPENSUBCLIENT(int0, 1589);
    var string0 = "Install";
    if ((int2 == 1)) {
        string0 = "Update Plugin";
    };
    script8421(104136709, 104136724, 104136710, 104136725, string0, 1006, -1, 1, -1, -1);
    stack(21195);
    stack(int0);
    IF_SETONOP("i", comp(1589, 2));  // plugin_hub_parent_manage_settings:settings
    stack(21195);
    stack(int0);
    IF_SETONOP("i", comp(1589, 21));
    stack(int1);
    unk11540();
    if ((TESTBIT(0) == 0)) {
        stack(21196);
        stack(int1);
        stack(int2);
        IF_SETONTIMER("ii", comp(1589, 25));
        stack(int1);
        stack(0);
        unk11451();
        return;
    };
    stack(int1);
    stack(int2);
    script21197();
    return;
}