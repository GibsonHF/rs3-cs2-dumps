//
function script2853(int0: number): void {
    var string0 = enum_getvalue(0, 36, 7156 as cs2enum, int0);
    var string1 = IF_GETTEXT(comp(1377, 5));  // pop_map:map_zone_name
    if ((strcmp(string0, string1) == 0)) {
        IF_SETTEXT("Region Information", comp(1377, 5));  // pop_map:map_zone_name
        IF_SETTEXT("", comp(1377, 114));  // pop_map:map_zone_details
    };
    return;
}