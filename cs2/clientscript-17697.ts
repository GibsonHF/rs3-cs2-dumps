//
function script17697(int0: struct): string {
    var string0 = "";
    var string1 = "";
    var int1 = INV_GETOBJ(94 as inv, 3);
    var int2 = INV_GETOBJ(94 as inv, 5);
    switch (struct_getparam(int0, 2806)) {
        case 29: {
            if ((item_getparam(int1, 8898) == 1)) {
                string0 = `${string0}<br><br><col=ffffff>Main-hand:</col> ${OC_NAME(int1)}`;
                string1 = script17663(int1);
                if ((STRING_LENGTH(string1) > 0)) {
                    string0 = `${string0}<br>${string1}`;
                };
                if ((item_getparam(int2, 8898) == 1)) {
                    string0 = `${string0}<br><br><col=ffffff>Off-hand: </col>${OC_NAME(int2)}`;
                    string1 = script17663(int2);
                    if ((STRING_LENGTH(string1) > 0)) {
                        string0 = `${string0}<br>${string1}`;
                    };
                };
            };
            break;
        }
    };
    return string0;
}