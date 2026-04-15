//
function script984(int0: struct, int1: int): void {
    var int2 = struct_getparam(int0, 7425);
    var int3 = enum_getvalue(0, 73, int2, int1);
    IF_SETTEXT("0", comp(204, 110));
    IF_SETTEXT("How many tickets would you like to enter into the lucky dip?", comp(204, 112));
    IF_SETTEXT(`Personal Entries: ${TOSTRING_LOCALISED(script16027(varplayer_8046), 1)}`, comp(204, 113));
    script13969(comp(204, 103), comp(-1, 65535), 41035 as struct, struct_getparam(int3, 7434));
    script13971(comp(204, 118), comp(204, 119), 28553 as struct, "Confirm", true);
    script13969(comp(204, 115), comp(204, 116), 28554 as struct, "Cancel");
    return;
}