//
function script984(int0: number, int1: number): void {
    var int2 = struct_getparam(int0, 7425);
    var int3 = enum_getvalue(0, 73, int2, int1);
    IF_SETTEXT("0", comp(204, 110));  // rsraffle:ticket_input_display
    IF_SETTEXT("How many tickets would you like to enter into the lucky dip?", comp(204, 112));  // rsraffle:enter_description
    IF_SETTEXT(`Personal Entries: ${TOSTRING_LOCALISED(script16027(varplayer_8046), 1)}`, comp(204, 113));  // rsraffle:enter_entries
    script13969(13369447, -1, 41035, struct_getparam(int3, 7434));
    script13971(13369462, 13369463, 28553, "Confirm", 1);
    script13969(13369459, 13369460, 28554, "Cancel");
    return;
}