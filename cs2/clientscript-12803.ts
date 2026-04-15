//
function script12803(): void {
    var int0 = 0;
    var int1 = 0;
    [int1, int1, int0] = DATE_RUNEDAY_TODATE(DATE_RUNEDAY());
    IF_SETTEXT(`Customer Service Week ${inttostring(int0, 10)}`, comp(1795, 18));
    return;
}