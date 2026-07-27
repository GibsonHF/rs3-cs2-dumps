//
function script594(int0: number, int1: number, int2: number, long0: BigInt): void {
    if (((item_getparam(int1, 3758) != -1 as obj) && (int0 == 0))) {
        var int1 = item_getparam(int1, 3758);
    };
    IF_SETOBJECT(int1, -1, comp(105, 154));
    var string0 = "null";
    var string1 = "null";
    var string2 = "null";
    var int3 = 0;
    var int4 = 8;
    if ((int0 == 0)) {
        IF_SETOP(1, "Select", comp(105, 153));
        IF_SETTEXT("Buy Offer", comp(105, 145));
        IF_SETTEXT("Confirm Buy Offer", comp(105, 212));
        IF_SETTEXT("Update Buy Offer", comp(105, 213));
        IF_SETGRAPHIC(1170 as graphic, comp(105, 151));
        IF_SETTEXT("+1", comp(105, 174));
        IF_SETOP(1, "Add 1", comp(105, 174));
        IF_SETPOSITION(-90, int4, 1, 2, comp(105, 174));
        IF_SETTEXT("+10", comp(105, 175));
        IF_SETOP(1, "Add 10", comp(105, 175));
        IF_SETPOSITION(-45, int4, 1, 2, comp(105, 175));
        IF_SETTEXT("+100", comp(105, 176));
        IF_SETOP(1, "Add 100", comp(105, 176));
        IF_SETPOSITION(0, int4, 1, 2, comp(105, 176));
        IF_SETTEXT("+1K", comp(105, 177));
        IF_SETOP(1, "Add 1000", comp(105, 177));
        IF_SETPOSITION(45, int4, 1, 2, comp(105, 177));
        IF_SETHIDE(false, comp(105, 178));
        if ((int1 != -1 as obj)) {
            IF_SETONMOUSEREPEAT(callback(script9564, int1, -2147483645, -2147483643), 6881434);
        } else {
            IF_SETONMOUSEREPEAT(callback(), comp(105, 154));
        };
    } else {
        IF_CLEAROPS(comp(105, 153));
        IF_SETTEXT("Sell Offer", comp(105, 145));
        IF_SETTEXT("Confirm Sell Offer", comp(105, 212));
        IF_SETTEXT("Update Sell Offer", comp(105, 213));
        IF_SETGRAPHIC(1168 as graphic, comp(105, 151));
        IF_SETTEXT("1", comp(105, 174));
        IF_SETOP(1, "Sell 1", comp(105, 174));
        IF_SETPOSITION(-66, int4, 1, 2, comp(105, 174));
        IF_SETTEXT("10", comp(105, 175));
        IF_SETOP(1, "Sell 10", comp(105, 175));
        IF_SETPOSITION(-22, int4, 1, 2, comp(105, 175));
        IF_SETTEXT("100", comp(105, 176));
        IF_SETOP(1, "Sell 100", comp(105, 176));
        IF_SETPOSITION(22, int4, 1, 2, comp(105, 176));
        IF_SETTEXT("ALL", comp(105, 177));
        IF_SETOP(1, "Sell All", comp(105, 177));
        IF_SETPOSITION(66, int4, 1, 2, comp(105, 177));
        IF_SETHIDE(true, comp(105, 178));
        if ((int1 == -1 as obj)) {
            string2 = "Use your inventory to select an item to sell here";
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 6881434);
        } else {
            IF_SETONMOUSEREPEAT(callback(script9564, int1, -2147483645, -2147483643), 6881434);
        };
    };
    if ((int1 == -1 as obj)) {
        IF_SETTEXT("Choose an item to exchange", comp(105, 139));
        IF_SETTEXT("N/A", comp(105, 147));
        IF_SETTEXT("N/A", comp(105, 150));
        if ((varplayer_139 == 0)) {
            IF_SETTEXT(script9465(2), comp(105, 140));
        } else if ((varplayer_139 == 1)) {
            IF_SETTEXT("Select an item in your inventory to sell.", comp(105, 140));
        };
    } else {
        IF_SETTEXT(script18300(int1), comp(105, 139));
        if (((varplayer_135 != -1 as obj) && branch_not_long[252](varplayer_140, -1n))) {
            IF_SETTEXT(TOSTRING_LOCALISED_LONG(varplayer_140, 1), comp(105, 147));
            if (branch_not_long[261](varplayer_13483, -1n)) {
                IF_SETTEXT(TOSTRING_LOCALISED_LONG(varplayer_13483, 1), comp(105, 150));
            } else {
                IF_SETTEXT("-", comp(105, 150));
            };
        } else {
            IF_SETTEXT("Loading...", comp(105, 140));
            IF_SETTEXT("Loading...", comp(105, 147));
            IF_SETTEXT("Loading...", comp(105, 150));
            IF_SETONTIMER(callback(), comp(105, 141));
            IF_SETTEXT("Loading...", 6881421);
        };
        if ((int2 > 0)) {
            IF_SETENABLED(true, comp(105, 212));
        };
    };
    script20874();
    if (((STOCKMARKET_ISOFFEREMPTY(varplayer_138, 0) == 1) || (STOCKMARKET_ISOFFERFINISHED(varplayer_138, 0) == 0))) {
        if ((varclient_82 <= 0)) {
            varclient_84 = varplayer_136;
            var int2 = varclient_84;
        };
        if ((varclient_83 <= 0)) {
            varclient_85 = varplayer_137;
            var long0 = varclient_85;
        };
        if (((STOCKMARKET_ISOFFEREMPTY(varplayer_138, 0) == 0) && ((varplayer_9457 != int2) || branch_not_long[335](varplayer_9458, long0)))) {
            IF_SETENABLED(true, comp(105, 213));
        } else {
            IF_SETENABLED(false, comp(105, 213));
        };
    };
    IF_SETTEXT(TOSTRING_LOCALISED(int2, 1), comp(105, 170));
    IF_SETTEXT(TOSTRING_LOCALISED_LONG(long0, 1), comp(105, 185));
    var long1 = -1n;
    var long2 = 0n;
    if ((branch_lteq_long[363](long0, 0n) || (int2 <= 0))) {
        long1 = 0n;
    } else if (branch_lt_long[373](long0, DIVIDE_LONG(2147483649147483647n, INT_TO_LONG(int2)))) {
        long1 = MULTIPLY_LONG(long0, INT_TO_LONG(int2));
        long2 = script12802(varplayer_138, int1, int2, long1, int0);
    };
    var int5 = true;
    if (branch_eq_long[391](long1, -1n)) {
        IF_SETTEXT("Too high!", comp(105, 215));
    } else if ((int0 == 1)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED_LONG(SUB_LONG(long1, long2), 1)} coins`, comp(105, 215));
        string2 = "Minimum total value of sale.";
        if (branch_gt_long[414](long2, 0n)) {
            string2 = `${string2}<br><br>A sales tariff of ${inttostring(2, 10)}% applies to any items sold for 50 coins or more and is automatically applied.`;
            int5 = false;
        };
    } else {
        string2 = "Maximum total cost of purchase.";
        IF_SETTEXT(`${TOSTRING_LOCALISED_LONG(long1, 1)} coins`, comp(105, 215));
    };
    IF_SETHIDE(int5, comp(105, 216));
    script3536(string2, 6881497, -1);
    return;
}