//
function script16004(int0: int): string {
    var string0 = `Action Bar Preset ${inttostring(int0, 10)}`;
    var int1 = script17470(int0);
    if ((int1 != 0)) {
        string0 = enum_getvalue(0, 36, 15485 as cs2enum, int1);
    };
    string0 = `${inttostring(int0, 10)}: ${string0}`;
    return string0;
}