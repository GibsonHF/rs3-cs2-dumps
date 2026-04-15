//
function script19156(): void {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script16726();
    IF_SETTEXT(`<col=FA3232>Min</col> Hit: ${TOSTRING_LOCALISED(int0, 1)}   <col=32FA32>Max</col> Hit: ${TOSTRING_LOCALISED(int1, 1)}`, comp(1288, 53));
    var string0 = `Your character will deal between ${TOSTRING_LOCALISED(int0, 1)} and ${TOSTRING_LOCALISED(int1, 1)} damage each attack.`;
    script17014(comp(1288, 51), string0);
    return;
}