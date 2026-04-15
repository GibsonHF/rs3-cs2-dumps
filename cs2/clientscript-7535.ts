//
function script7535(int0: struct, string0: string, string1: string): void {
    var int1 = struct_getparam(int0, 3250);
    var int2 = struct_getparam(int0, 5889);
    var int3 = struct_getparam(int0, 5890);
    var string2 = `Level ${inttostring(int1, 10)} Slayer`;
    if ((STAT_BASE(18 as stat) < int1)) {
        string2 = strconcat("<col=ff0000>", strconcat(string2, "</col>"));
    };
    if ((int2 != -1 as stat)) {
        if ((STAT_BASE(int2) < int3)) {
            string2 = `${string2}<br><col=ff0000>Level ${inttostring(int3, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int2)}</col>`;
        } else {
            string2 = `${string2}<br>Level ${inttostring(int3, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int2)}`;
        };
    };
    string2 = strconcat(string2, "<br>");
    CC_SETTEXT(strconcat(string0, strconcat(string2, string1)));
    CC_SETONSTATTRANSMIT(callback(script7534, -2147483645, -2147483643, string0, int0, string1, 18, 1));
    return;
}