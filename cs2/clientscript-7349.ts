//
function script7349(): void {
    var int0 = (DATE_MINUTES() / 1440);
    var int1 = (int0 * 1440);
    var int2 = (DATE_MINUTES() - int1);
    var int3 = ((int2 * 100) / 1440);
    script8421(61866120, 61866123, 61866121, 61866124, `Captain's Log, Runedate ${inttostring(DATE_RUNEDAY(), 10)}.${inttostring(int3, 10)}`, 21218, 1007, 1, -1, -1);
    script7351();
    script7353();
    script7355();
    script7357();
    script7359();
    IF_SETOPKEY(1, 96, 0, 61865992);
    IF_SETOPKEY(1, 97, 0, 61865990);
    IF_SETOPKEY(1, 13, 0, 61866124);
    return;
}