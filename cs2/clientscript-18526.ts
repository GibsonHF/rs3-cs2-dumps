//
function script18526(int0: stat, int1: int): string {
    var string0 = "Level ";
    string0 = strconcat(string0, inttostring(int1, 10));
    string0 = strconcat(string0, " ");
    string0 = strconcat(string0, enum_getvalue(17, 36, 680 as cs2enum, int0));
    return script1164(STAT_BASE(int0), int1, string0);
}