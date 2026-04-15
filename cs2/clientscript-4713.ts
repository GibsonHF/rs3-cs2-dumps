//
function script4713(int0: component): void {
    var string0 = enum_getvalue(9, 36, 12106 as cs2enum, int0);
    var string1 = enum_getvalue(9, 36, 12107 as cs2enum, int0);
    var int1 = enum_getvalue(9, 0, 12110 as cs2enum, int0);
    var string2 = `Unlock ${string0} with ${inttostring(int1, 10)} reputation.`;
    switch (int0) {
        case 119537693:
        case 119537738:
        case 119537760:
        case 119537727:
        case 119537749:
        case 119537771: {
            string2 = `Owned! You have unlocked ${string1}.`;
            break;
        }
        case 119537782: {
            string2 = "You need to unlock all of the other rewards before you can buy prismatic stars.";
            break;
        }
    };
    script3877(string2, int0, -1);
    return;
}