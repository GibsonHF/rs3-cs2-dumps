//
function script980(int0: struct, int1: int): void {
    var int2 = struct_getparam(int0, 7425);
    var int3 = enum_getvalue(0, 73, int2, int1);
    var string0 = "";
    var int4 = struct_getparam(int3, 8363);
    var int5 = script16026(22, varclient_6488);
    script16040(int0, int1);
    IF_SETPOSITION(0, (int1 * (40 + 1)), 0, 0, comp(204, 21));
    script994(int3, comp(204, 38));
    script13969(comp(204, 35), comp(-1, 65535), 41035 as struct, struct_getparam(int3, 7434));
    if ((STRING_LENGTH(varclient_6971) == 0)) {
        string0 = script16049(int3);
    } else {
        string0 = varclient_6971;
        varclient_6971 = "";
    };
    var string1 = struct_getparam(int3, 7435);
    if ((struct_getparam(int3, 8365) != -1 as cs2enum)) {
        string1 = `${string1} (${string0}).`;
    };
    IF_SETTEXT(string1, comp(204, 39));
    IF_SETTEXT(`Chance per ticket: 1/${TOSTRING_LOCALISED(int4, 1)}`, comp(204, 40));
    script13969(comp(204, 43), comp(204, 44), 28553 as struct, "Enter Lucky Dip");
    IF_SETTEXT(`Days left: ${TOSTRING_LOCALISED(MAX(0, int5), 1)}`, comp(204, 46));
    return;
}