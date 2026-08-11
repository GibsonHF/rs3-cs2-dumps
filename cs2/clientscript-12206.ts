//
function script12206(int0: number): void {
    var int1 = -1;
    switch (int0) {
        case 112394298: {
            int1 = 36739;
            break;
        }
        case 112394320: {
            int1 = 36740;
            break;
        }
        case 112394309: {
            int1 = 36741;
            break;
        }
        case 112394278: {
            int1 = 36742;
            break;
        }
        case 112394288: {
            int1 = 36743;
            break;
        }
        case 112394351: {
            int1 = 36744;
            break;
        }
        case 112394331: {
            int1 = 36745;
            break;
        }
        case 112394341: {
            int1 = 36735;
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
        IF_SETTEXT(`Are you sure you want to create a ${string0} for ${TOSTRING_LOCALISED(int2, 1)} grotesque souls?`, comp(1715, 123));  // trh80_corrupt:confirm_purchase_text
    } else {
        IF_SETTEXT(`Are you sure you want to create the ${string0} for ${TOSTRING_LOCALISED(int2, 1)} grotesque souls? You will receive ${inttostring((3 * int2), 10)} Slayer XP.`, comp(1715, 123));  // trh80_corrupt:confirm_purchase_text
    };
    IF_SETHIDE(false, comp(1715, 2));  // trh80_corrupt:darkness
    IF_SETHIDE(false, comp(1715, 31));  // trh80_corrupt:confirm_purchase
    return;
}