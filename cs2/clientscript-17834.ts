//
function script17834(int0: achievement, int1: obj): void {
    IF_SETHIDE(false, comp(755, 87));
    IF_SETTEXT(script3509(int1), comp(755, 95));
    IF_SETOBJECT_NONUM(int1, 1, comp(755, 98));
    var string0 = `${script15321(int0)}<br><br>Reward:<br>${script19862(int0)}`;
    IF_SETTEXT(string0, comp(755, 101));
    var int2 = (16 * PARAHEIGHT(string0, IF_GETWIDTH(comp(755, 101)), 207 as fontmetrics));
    IF_SETSCROLLSIZE(0, int2, comp(755, 100));
    IF_SETSCROLLPOS(0, 0, comp(755, 100));
    script7791(comp(755, 102), comp(755, 100));
    return;
}