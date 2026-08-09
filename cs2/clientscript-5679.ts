//
function script5679(int0: number): void {
    var int1 = 0;
    var int2 = -1 as graphic;
    switch (int0) {
        case 103809097: {
            int1 = 0;
            int2 = 16420 as graphic;
            break;
        }
        case 103809153: {
            int1 = 1;
            int2 = 16423 as graphic;
            break;
        }
        case 103809121: {
            int1 = 2;
            int2 = 16421 as graphic;
            break;
        }
        case 103809169: {
            int1 = 3;
            int2 = 16422 as graphic;
            break;
        }
        case 103809089: {
            int1 = 4;
            int2 = 16418 as graphic;
            break;
        }
        case 103809137: {
            int1 = 5;
            int2 = 16419 as graphic;
            break;
        }
        case 103809113: {
            int1 = 6;
            int2 = 21727 as graphic;
            break;
        }
        case 103809161: {
            int1 = 7;
            int2 = 21728 as graphic;
            break;
        }
        case 103809129: {
            int1 = 8;
            int2 = 21730 as graphic;
            break;
        }
        case 103809177: {
            int1 = 9;
            int2 = 21729 as graphic;
            break;
        }
        case 103809105: {
            int1 = 10;
            int2 = 21732 as graphic;
            break;
        }
        case 103809145: {
            int1 = 11;
            int2 = 21731 as graphic;
            break;
        }
        case 103809138:
        case 103809146:
        case 103809090:
        case 103809106:
        case 103809154:
        case 103809162:
        case 103809098:
        case 103809114:
        case 103809170:
        case 103809178:
        case 103809122:
        case 103809130: {
            printmessage("You have already unlocked that reward.");
            return;
        }
    };
    if ((script10949(int1) == 1)) {
        printmessage("You have already unlocked that reward.");
        return;
    };
    if ((script4148() == 1)) {
        if (((((int1 == 0) || (int1 == 1)) || (int1 == 6)) || (int1 == 7))) {
            printmessage("Ironman players cannot unlock that reward as it has combat stats.");
            return;
        };
    };
    var int3 = enum_getvalue(0, 33, 9661 as cs2enum, int1);
    if (((OC_MEMBERS(int3) == 1) && (PLAYERMEMBER() == false))) {
        printmessage("Only members can unlock that reward.");
        return;
    };
    if ((INV_TOTAL(93 as inv, 33968 as obj) < enum_getvalue(0, 0, 9662 as cs2enum, int1))) {
        printmessage("You don't have enough rose petals to unlock that reward.");
        return;
    };
    IF_SETGRAPHIC(int2, comp(1584, 159));
    var int4 = enum_getvalue(0, 0, 9662 as cs2enum, int1);
    var string0 = enum_getvalue(0, 36, 9663 as cs2enum, int1);
    IF_SETTEXT(`Are you sure you want to unlock ${string0} for ${TOSTRING_LOCALISED(int4, 1)} rose petals?`, comp(1584, 178));
    IF_SETHIDE(false, comp(1584, 60));
    IF_SETHIDE(false, comp(1584, 12));
    return;
}