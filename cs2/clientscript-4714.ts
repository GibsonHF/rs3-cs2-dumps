//
function script4714(int0: component): void {
    switch (int0) {
        case 119537693:
        case 119537738:
        case 119537760:
        case 119537727:
        case 119537749:
        case 119537771: {
            printmessage("You have already unlocked that reward.");
            return;
        }
        case 119537782: {
            printmessage("You need to unlock all of the other rewards before you can buy prismatic stars.");
            return;
        }
    };
    if ((script8106(int0) == 1)) {
        printmessage("You have already unlocked that reward.");
        return;
    };
    var int1 = enum_getvalue(9, 0, 12111 as cs2enum, int0);
    if ((varbitplayer_34915 < int1)) {
        printmessage("You don't have enough reputation to unlock that reward.");
        return;
    };
    var string0 = enum_getvalue(9, 36, 12108 as cs2enum, int0);
    IF_SETTEXT(`Are you sure you want to unlock ${string0} for ${TOSTRING_LOCALISED(int1, 1)} reputation?`, comp(1824, 40));
    IF_SETHIDE(false, comp(1824, 1));
    IF_SETHIDE(false, comp(1824, 21));
    return;
}