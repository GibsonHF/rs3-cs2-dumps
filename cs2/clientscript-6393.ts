//
function script6393(int0: int, int1: stat, string0: string): [int, string] {
    if ((int0 > 0)) {
        var string0 = strconcat(string0, " or ");
    };
    var int0 = (int0 + 1);
    string0 = strconcat(string0, enum_getvalue(17, 36, 680 as cs2enum, int1));
    return [int0, string0];
}