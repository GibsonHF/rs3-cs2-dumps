//
function script354(int0: unknown_int): void {
    var int1 = -1 as obj;
    switch (int0) {
        case 109772852: {
            int1 = 35591 as obj;
            break;
        }
        case 109772862: {
            int1 = 35592 as obj;
            break;
        }
        case 109772892: {
            int1 = 35588 as obj;
            break;
        }
        case 109772903: {
            int1 = 35590 as obj;
            break;
        }
        case 109772914: {
            int1 = 35589 as obj;
            break;
        }
        case 109772925: {
            int1 = 28095 as obj;
            break;
        }
        case 109772872: {
            int1 = 35596 as obj;
            break;
        }
        case 109772882: {
            int1 = 35597 as obj;
            break;
        }
        case 109772935: {
            int1 = 35593 as obj;
            break;
        }
        case 109772946: {
            int1 = 35595 as obj;
            break;
        }
        case 109772957: {
            int1 = 35594 as obj;
            break;
        }
        case 109772968: {
            int1 = 28099 as obj;
            break;
        }
        case 109772978: {
            int1 = 35601 as obj;
            break;
        }
        case 109772988: {
            int1 = 35602 as obj;
            break;
        }
        case 109772998: {
            int1 = 35598 as obj;
            break;
        }
        case 109773009: {
            int1 = 35600 as obj;
            break;
        }
        case 109773020: {
            int1 = 35599 as obj;
            break;
        }
        case 109773031: {
            int1 = 28103 as obj;
            break;
        }
        case 109773051: {
            int1 = 35587 as obj;
            break;
        }
        case 109773041: {
            int1 = 28091 as obj;
            break;
        }
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
            printmessage("You have already unlocked that reward.");
            return;
        }
    };
    if ((script355(int1) >= 1)) {
        printmessage("You have already unlocked that item.");
        return;
    };
    var int2 = enum_getvalue(33, 0, 10333 as cs2enum, int1);
    if ((INV_TOTAL(93 as inv, 28090 as obj) < int2)) {
        printmessage("You don't have enough starlight ore to create that item.");
        return;
    };
    var string0 = enum_getvalue(33, 36, 10339 as cs2enum, int1);
    IF_SETTEXT(`Are you sure you want to create ${string0} for ${TOSTRING_LOCALISED(int2, 1)} starlight ore?`, comp(1675, 263));
    IF_SETHIDE(false, comp(1675, 2));
    IF_SETHIDE(false, comp(1675, 45));
    return;
}