//
function script6523(int0: component, int1: cs2enum, int2: int, int3: int): void {
    var int4 = -1 as fontmetrics;
    var int5 = 0;
    [int4, int5] = script5742(IF_GETWIDTH(int0), IF_GETTEXT(int0), int1, int2, int3);
    IF_SETTEXTFONT(int4, int0);
    return;
}