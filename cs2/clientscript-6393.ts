//
function script6393(int0: number, int1: number, string0: string): [number, string] {
    if ((int0 > 0)) {
        var string0 = strconcat(string0, " or ");
    };
    var int0 = (int0 + 1);
    string0 = strconcat(string0, enum_getvalue(17, 36, 680 as cs2enum, int1));
    return [int0, string0];
}