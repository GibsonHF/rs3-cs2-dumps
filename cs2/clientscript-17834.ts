//
function script17834(int0: number, int1: number): void {
    IF_SETHIDE(0, 49479767);
    IF_SETTEXT(script3509(int1), 49479775);
    IF_SETOBJECT_NONUM(int1, 1, 49479778);
    var string0 = `${script15321(int0)}<br><br>Reward:<br>${script19862(int0)}`;
    IF_SETTEXT(string0, 49479781);
    var int2 = (16 * PARAHEIGHT(string0, IF_GETWIDTH(49479781), 207));
    IF_SETSCROLLSIZE(0, int2, 49479780);
    IF_SETSCROLLPOS(0, 0, 49479780);
    script7791(49479782, 49479780);
    return;
}