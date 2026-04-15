//
function script20140(int0: int): int {
    var int1 = enum_getvalue(0, 209, 9082 as cs2enum, int0);
    if ((int1 == -1 as var_reference)) {
        script12478(`Tier ${inttostring(int0, 10)} does not have a variable. Remove a tier or add a variable!`);
        return 0;
    };
    return WORLDMAP_GETDISPLAYCOORD(int1);
}