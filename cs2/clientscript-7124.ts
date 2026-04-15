//
function script7124(int0: component, int1: obj, int2: int): int {
    var string0 = OC_NAME(int1);
    if ((STRING_LENGTH(item_getparam(int1, 3859)) > 0)) {
        string0 = item_getparam(int1, 3859);
    };
    if ((int2 > 1)) {
        string0 = `${string0} x${inttostring(int2, 10)}`;
    };
    IF_SETTEXTFONT(29 as fontmetrics, int0);
    IF_SETTEXTALIGN(0, 0, 16, int0);
    var int3 = IF_GETWIDTH(int0);
    var int4 = 0;
    [string0, int4] = script7125(string0, 29 as fontmetrics, int3);
    IF_SETTEXT(string0, int0);
    return (16 * int4);
}