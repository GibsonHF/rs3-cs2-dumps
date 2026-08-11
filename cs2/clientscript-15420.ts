//
function script15420(int0: number, int1: number): void {
    if ((int0 == -1)) {
        return;
    };
    varclient_6986 = int1;
    var int2 = dbrow_getfield(int0, 483392, 0);
    var int3 = dbrow_getfield(int0, 483408, 0);
    var string0 = strconcat("<col=FFFFFF>", dbrow_getfield(int0, 483344, 0));
    var string1 = dbrow_getfield(int0, 483376, 0);
    var string2 = "";
    IF_SETGRAPHIC(int2, comp(743, 8));  // toplevel_v2_extra_action_button:button_graphic
    IF_SETONMOUSEOVER(callback(script15422, int3), comp(743, 6));  // toplevel_v2_extra_action_button:click_layer
    IF_SETONMOUSELEAVE(callback(script15423, int2), comp(743, 6));  // toplevel_v2_extra_action_button:click_layer
    if ((DB_GETFIELDCOUNT(int0, 483472) > 0)) {
        string2 = dbrow_getfield(int0, 483472, 0);
        IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(743, 6));  // toplevel_v2_extra_action_button:click_layer
    };
    IF_SETOPBASE(string0, comp(743, 6));  // toplevel_v2_extra_action_button:click_layer
    IF_SETOP(1, string1, comp(743, 6));  // toplevel_v2_extra_action_button:click_layer
    script8843(83, 1);
    return;
}