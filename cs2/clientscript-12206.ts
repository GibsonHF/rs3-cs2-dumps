//
function script12206(int0: unknown_int): void {
    var int1 = -1 as obj;
    switch (int0) {
        case 112394298: {
            int1 = 36739 as obj;
            break;
        }
        case 112394320: {
            int1 = 36740 as obj;
            break;
        }
        case 112394309: {
            int1 = 36741 as obj;
            break;
        }
        case 112394278: {
            int1 = 36742 as obj;
            break;
        }
        case 112394288: {
            int1 = 36743 as obj;
            break;
        }
        case 112394351: {
            int1 = 36744 as obj;
            break;
        }
        case 112394331: {
            int1 = 36745 as obj;
            break;
        }
        case 112394341: {
            int1 = 36735 as obj;
            break;
        }
        case 112394279:
        case 112394289:
        case 112394299:
        case 112394310:
        case 112394321:
        case 112394352:
        case 112394332: {
            printmessage("You have already unlocked that reward.");
            return;
        }
    };
    if ((script12207(int1) >= 1)) {
        printmessage("You have already unlocked that item.");
        return;
    };
    var int2 = enum_getvalue(33, 0, 10765 as cs2enum, int1);
    if ((INV_TOTAL(93 as inv, 36734 as obj) < int2)) {
        printmessage("You don't have enough grotesque souls to create that item.");
        return;
    };
    var string0 = enum_getvalue(33, 36, 10771 as cs2enum, int1);
    if ((int0 == 112394341)) {
        IF_SETTEXT(`Are you sure you want to create a ${string0} for ${TOSTRING_LOCALISED(int2, 1)} grotesque souls?`, comp(1715, 123));
    } else {
        IF_SETTEXT(`Are you sure you want to create the ${string0} for ${TOSTRING_LOCALISED(int2, 1)} grotesque souls? You will receive ${inttostring((3 * int2), 10)} Slayer XP.`, comp(1715, 123));
    };
    IF_SETHIDE(false, comp(1715, 2));
    IF_SETHIDE(false, comp(1715, 31));
    return;
}