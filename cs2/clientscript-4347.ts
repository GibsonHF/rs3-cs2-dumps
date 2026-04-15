//
function script4347(): void {
    if ((varplayer_2072 == 0)) {
        script14141(comp(1097, 29), comp(1097, 30), 3702 as cs2enum, 9, "Select the keyword category", 0, 0, false, "Select a category");
        IF_SETHIDE(true, comp(1097, 32));
        script13971(comp(1097, 29), comp(-1, 65535), 28619 as struct, "No Category Selected", true);
        return;
    };
    var int0 = enum_getvalue(0, 26, 3703 as cs2enum, varplayer_2072);
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    script10428(comp(1097, 29), comp(1097, 30), 3702 as cs2enum, 9, "Select the keyword category", varplayer_2072, 0);
    IF_SETHIDE(false, comp(1097, 32));
    if ((varplayer_2073 > 0)) {
        script10428(comp(1097, 31), comp(1097, 32), int0, ENUM_GETOUTPUTCOUNT(int0), "Select the keyword", varplayer_2073, 0);
    } else {
        script14141(comp(1097, 31), comp(1097, 32), int0, ENUM_GETOUTPUTCOUNT(int0), "Select the keyword", 0, 0, false, "Select a keyword");
    };
    return;
}