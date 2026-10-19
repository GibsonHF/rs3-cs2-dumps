//
function script21197(): void {
    stack(int0);
    stack(1);
    stack(-1);
    unk11539();
    var int2 = [];
    if ((int2 == 1)) {
        IF_TRIGGEROP(comp(1589, 21), -1, 1);
        return;
    };
    stack(int0);
    stack(10);
    stack(-1);
    unk11849();
    var string0 = [];
    IF_SETSIZE(0, 72, 1, 0, comp(1589, 7));  // plugin_hub_parent_manage_settings:settings_scrollbar
    var int3 = 104136711;
    script14391(int3, 0, 0, 0, 0, 0, 0, 72, 1, 0);
    var int4 = (2500 * 10);
    stack(int3);
    stack(0);
    stack(int0);
    script21190();
    if ((CC_FIND(int3, int4) == 1)) {
        CC_DELETE();
    };
    CC_DELETEALL(comp(1589, 18));
    CC_DELETEALL(comp(1589, 19));
    IF_SETTEXT("", comp(1589, 17));
    IF_SETSCROLLSIZE(0, 0, comp(1589, 18));
    if ((int1 == 1)) {
        IF_SETTEXT("Install Update", comp(1589, 11));
    };
    varclient_8507 = -1;
    stack(21198);
    stack(int0);
    stack(int1);
    IF_SETONTIMER("ii", 104136705);
    stack(int0);
    stack(int1);
    script21199();
    return;
}