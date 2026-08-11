//
function script4183(int0: number): void {
    var string0 = enum_getvalue(0, 36, 7158 as cs2enum, int0);
    var string1 = IF_GETTEXT(comp(1377, 117));  // pop_map:map_island_name
    if ((strcmp(string0, string1) == 0)) {
        IF_SETTEXT("Island Information", comp(1377, 117));  // pop_map:map_island_name
        IF_SETTEXT("", comp(1377, 118));  // pop_map:map_island_details
    };
    var int1 = enum_getvalue(0, 0, 6178, int0);
    script2853(int1);
    return;
}