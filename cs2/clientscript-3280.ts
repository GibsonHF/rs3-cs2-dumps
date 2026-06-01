//
function script3280(): void {
    var int0 = comp(518, 34);
    var int1 = comp(518, 33);
    var string0 = script3281();
    IF_SETTEXT(string0, int0);
    var int2 = (PARAHEIGHT(string0, IF_GETWIDTH(int1), 209 as fontmetrics) * 18);
    IF_SETSCROLLSIZE(0, int2, int1);
    script7791(33947680, int1);
    return;
}