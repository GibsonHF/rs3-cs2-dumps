//
function script20140(int0: number): number {
    script20941();
    var int1 = [];
    var int2 = enum_getvalue(0, 209, int1, int0);
    if ((int2 == -1)) {
        script12478(`Tier ${inttostring(int0, 10)} does not have a variable. Remove a tier or add a variable!`);
        return 0;
    };
    return WORLDMAP_GETDISPLAYCOORD(int2);
}