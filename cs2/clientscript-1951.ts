//
function script1951(int0: number): void {
    var string0 = "You have no voyage selected.";
    if (((int0 == -1) || (int0 == 17069))) {
        IF_SETHIDE(false, comp(950, 164));  // pop_voyage_list:voyage_send_no
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), comp(950, 164));  // pop_voyage_list:voyage_send_no
        IF_SETTEXT("You have no voyage selected.", comp(950, 78));  // pop_voyage_list:voyage_flavour
        IF_SETTEXT("No Voyage Selected", comp(950, 79));  // pop_voyage_list:voyage_name
        IF_SETHIDE(true, comp(950, 119));  // pop_voyage_list:graft_chance_layer
        IF_SETHIDE(true, comp(950, 133));  // pop_voyage_list:combat_chance_layer
        IF_SETHIDE(true, comp(950, 147));  // pop_voyage_list:seafaring_chance_layer
        IF_SETTEXT("-", comp(950, 162));  // pop_voyage_list:voyage_time
        return;
    };
    script2020();
    script2059();
    var string1 = script2057(int0, 0);
    IF_SETTEXT(string1, comp(950, 78));  // pop_voyage_list:voyage_flavour
    IF_SETTEXT(struct_getparam(int0, 2365), comp(950, 79));  // pop_voyage_list:voyage_name
    script2025();
    script2022();
    if ((struct_getparam(int0, 3056) == 0)) {
        IF_SETHIDE(true, comp(950, 119));  // pop_voyage_list:graft_chance_layer
    } else {
        IF_SETHIDE(false, comp(950, 119));  // pop_voyage_list:graft_chance_layer
    };
    if ((struct_getparam(int0, 3057) == 0)) {
        IF_SETHIDE(true, comp(950, 133));  // pop_voyage_list:combat_chance_layer
    } else {
        IF_SETHIDE(false, comp(950, 133));  // pop_voyage_list:combat_chance_layer
    };
    if ((struct_getparam(int0, 3058) == 0)) {
        IF_SETHIDE(true, comp(950, 147));  // pop_voyage_list:seafaring_chance_layer
    } else {
        IF_SETHIDE(false, comp(950, 147));  // pop_voyage_list:seafaring_chance_layer
    };
    if (((struct_getparam(int0, 2366) == 7) && (script1121(varbitplayer_17132) == 1))) {
        IF_SETHIDE(false, comp(950, 195));  // pop_voyage_list:low_chance_warning
        IF_SETTEXT("Your captain already has four traits and cannot gain any more.", comp(950, 195));  // pop_voyage_list:low_chance_warning
        IF_SETHIDE(true, comp(950, 196));  // pop_voyage_list:confirm_send
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = struct_getparam(int0, 2367);
    var int5 = MAX(1, struct_getparam(int0, 2368));
    var int6 = SCALE(125, 100, int5);
    var int7 = SCALE(75, 100, int5);
    var int8 = MAX(MIN(int6, script1124(varbitplayer_17132)), int7);
    int4 = SCALE(int5, int8, int4);
    int4 = script6668(int4);
    int4 = MAX(1500, int4);
    [int1, int2, int3] = script4705(int4);
    var string2 = inttostring(int2, 10);
    if ((int2 < 10)) {
        string2 = strconcat("0", string2);
    };
    var string3 = `${inttostring(int1, 10)}:${string2}`;
    IF_SETTEXT(string3, comp(950, 162));  // pop_voyage_list:voyage_time
    return;
}