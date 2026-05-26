//
function script4347(): void {
    if ((varplayer_2072 == 0)) {
        script14141(71893021, 71893022, 3702 as cs2enum, 9, "Select the keyword category", 0, 0, 0, "Select a category");
        IF_SETHIDE(1, 71893024);
        script13971(71893021, -1, 28619, "No Category Selected", 1);
        return;
    };
    var int0 = enum_getvalue(0, 26, 3703 as cs2enum, varplayer_2072);
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    script10428(71893021, 71893022, 3702 as cs2enum, 9, "Select the keyword category", varplayer_2072, 0);
    IF_SETHIDE(0, 71893024);
    if ((varplayer_2073 > 0)) {
        script10428(71893023, 71893024, int0, ENUM_GETOUTPUTCOUNT(int0), "Select the keyword", varplayer_2073, 0);
    } else {
        script14141(71893023, 71893024, int0, ENUM_GETOUTPUTCOUNT(int0), "Select the keyword", 0, 0, 0, "Select a keyword");
    };
    return;
}