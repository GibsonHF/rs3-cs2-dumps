//
function script17541(int0: int, int1: int, int2: npc): [unknown_int, string] {
    var int3 = 1;
    var string0 = "";
    if ((int0 < int1)) {
        string0 = strconcat(string0, `<col=EB2F2F>You have ${inttostring(int0, 10)} / ${inttostring(int1, 10)} nc_name glyphs required to start this ritual.<br>`);
        int3 = 0;
    };
    return [int3, string0];
}