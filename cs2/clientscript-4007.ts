//
function script4007(int0: component): void {
    var string0 = enum_getvalue(9, 36, 10336 as cs2enum, int0);
    var string1 = enum_getvalue(9, 36, 10337 as cs2enum, int0);
    var int1 = enum_getvalue(9, 0, 10338 as cs2enum, int0);
    var string2 = `Combine ${inttostring(int1, 10)} starlight ore to create ${string0}. You will receive ${inttostring(int1, 10)} Smithing XP.`;
    if ((int0 == comp(1675, 40))) {
        string2 = `Combine ${inttostring(2500, 10)} starlight ore to create a Starborn diamond. This can be used to upgrade items from starfire to starfury.`;
    };
    switch (int0) {
        case 109772853:
        case 109772863:
        case 109772893:
        case 109772904:
        case 109772915:
        case 109772926:
        case 109772873:
        case 109772883:
        case 109772936:
        case 109772947:
        case 109772958:
        case 109772969:
        case 109772979:
        case 109772989:
        case 109772999:
        case 109773010:
        case 109773021:
        case 109773032:
        case 109773052: {
            string2 = `Owned! You have created ${string1}. If you lose this item you can reclaim another from Diango in Draynor for a fee.`;
            break;
        }
    };
    script3877(string2, int0, -1);
    return;
}