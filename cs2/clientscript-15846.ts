//
function script15846(): void {
    var int0 = enum_getvalue(0, 0, 10155 as cs2enum, varbitplayer_49443);
    if ((int0 == -1)) {
        return;
    };
    if ((script383(int0) == 31)) {
        if ((int0 == 14)) {
            int0 = 19;
        } else {
            int0 = 18;
        };
    };
    script10428(comp(229, 6), comp(229, 7), 10679 as cs2enum, 25, "Choose a Channel", int0, 0);
    script15848(int0);
    script15893();
    return;
}