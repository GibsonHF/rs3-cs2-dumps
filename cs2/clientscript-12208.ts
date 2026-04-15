//
function script12208(int0: component): void {
    var string0 = enum_getvalue(9, 36, 10768 as cs2enum, int0);
    var string1 = enum_getvalue(9, 36, 10769 as cs2enum, int0);
    var int1 = enum_getvalue(9, 0, 10770 as cs2enum, int0);
    var string2 = `Combine ${inttostring(int1, 10)} grotesque souls to create ${string0}. You will receive ${inttostring((3 * int1), 10)} Slayer XP.`;
    if ((int0 == comp(1715, 10))) {
        string2 = `Combine ${inttostring(500, 10)} grotesque souls to create a soul gem. This can be used to upgrade your grotesque armour.`;
    };
    switch (int0) {
        case 112394299:
        case 112394321:
        case 112394310:
        case 112394279:
        case 112394289:
        case 112394352:
        case 112394332: {
            string2 = `Owned! You have created ${string1}.`;
            break;
        }
    };
    script3877(string2, int0, -1);
    return;
}