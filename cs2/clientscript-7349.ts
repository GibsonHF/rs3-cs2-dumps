//
function script7349(): void {
    var int0 = (DATE_MINUTES() / 1440);
    var int1 = (int0 * 1440);
    var int2 = (DATE_MINUTES() - int1);
    var int3 = ((int2 * 100) / 1440);
    script8421(comp(944, 136), comp(944, 139), comp(944, 137), comp(944, 140), `Captain's Log, Runedate ${inttostring(DATE_RUNEDAY(), 10)}.${inttostring(int3, 10)}`, 21218 as struct, 1007, 1, -1 as graphic, -1 as struct);
    script7351();
    script7353();
    script7355();
    script7357();
    script7359();
    IF_SETOPKEY(1, 96, 0, comp(944, 8));
    IF_SETOPKEY(1, 97, 0, comp(944, 6));
    IF_SETOPKEY(1, 13, 0, comp(944, 140));
    return;
}