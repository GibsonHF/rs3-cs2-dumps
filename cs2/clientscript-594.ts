//
function script594(int0: number, int1: number, int2: number, long0: bigint): void {
    if (((item_getparam(int1, 3758) != -1 as obj) && (int0 == 0))) {
        var int1 = item_getparam(int1, 3758);
    };
    IF_SETOBJECT(int1, -1, comp(105, 154));  // stockmarket:offeritem_model ?
    var string0 = "null";
    var string1 = "null";
    var string2 = "";
    var int3 = 0;
    var int4 = 8;
    if ((int0 == 0)) {
        IF_SETOP(1, "Select", comp(105, 153));  // stockmarket:offeritem_backing ?
        IF_SETTEXT("Buy Offer", comp(105, 145));  // stockmarket:offertype_text ?
        IF_SETTEXT("Confirm Buy Offer", comp(105, 212));  // stockmarket:makeofferbutton ?
        IF_SETTEXT("Update Buy Offer", comp(105, 213));  // stockmarket:updateofferbutton ?
        IF_SETGRAPHIC(1170 as graphic, comp(105, 151));  // stockmarket:offertype_icon ?
        IF_SETTEXT("+1", comp(105, 174));  // stockmarket:offercount_1 ?
        IF_SETOP(1, "Add 1", comp(105, 174));  // stockmarket:offercount_1 ?
        IF_SETPOSITION(-90, int4, 1, 2, comp(105, 174));  // stockmarket:offercount_1 ?
        IF_SETTEXT("+10", comp(105, 175));  // stockmarket:offercount_10 ?
        IF_SETOP(1, "Add 10", comp(105, 175));  // stockmarket:offercount_10 ?
        IF_SETPOSITION(-45, int4, 1, 2, comp(105, 175));  // stockmarket:offercount_10 ?
        IF_SETTEXT("+100", comp(105, 176));  // stockmarket:offercount_100 ?
        IF_SETOP(1, "Add 100", comp(105, 176));  // stockmarket:offercount_100 ?
        IF_SETPOSITION(0, int4, 1, 2, comp(105, 176));  // stockmarket:offercount_100 ?
        IF_SETTEXT("+1K", comp(105, 177));  // stockmarket:offercount_1000 ?
        IF_SETOP(1, "Add 1000", comp(105, 177));  // stockmarket:offercount_1000 ?
        IF_SETPOSITION(45, int4, 1, 2, comp(105, 177));  // stockmarket:offercount_1000 ?
        IF_SETHIDE(false, comp(105, 178));  // stockmarket:offercount_limit ?
        if ((int1 != -1 as obj)) {
            IF_SETONMOUSEREPEAT(callback(script9564, int1, -2147483645, -2147483643), comp(105, 154));  // stockmarket:offeritem_model ?
        } else {
            IF_SETONMOUSEREPEAT(callback(), comp(105, 154));  // stockmarket:offeritem_model ?
        };
    } else {
        IF_CLEAROPS(comp(105, 153));  // stockmarket:offeritem_backing ?
        IF_SETTEXT("Sell Offer", comp(105, 145));  // stockmarket:offertype_text ?
        IF_SETTEXT("Confirm Sell Offer", comp(105, 212));  // stockmarket:makeofferbutton ?
        IF_SETTEXT("Update Sell Offer", comp(105, 213));  // stockmarket:updateofferbutton ?
        IF_SETGRAPHIC(1168 as graphic, comp(105, 151));  // stockmarket:offertype_icon ?
        IF_SETTEXT("1", comp(105, 174));  // stockmarket:offercount_1 ?
        IF_SETOP(1, "Sell 1", comp(105, 174));  // stockmarket:offercount_1 ?
        IF_SETPOSITION(-66, int4, 1, 2, comp(105, 174));  // stockmarket:offercount_1 ?
        IF_SETTEXT("10", comp(105, 175));  // stockmarket:offercount_10 ?
        IF_SETOP(1, "Sell 10", comp(105, 175));  // stockmarket:offercount_10 ?
        IF_SETPOSITION(-22, int4, 1, 2, comp(105, 175));  // stockmarket:offercount_10 ?
        IF_SETTEXT("100", comp(105, 176));  // stockmarket:offercount_100 ?
        IF_SETOP(1, "Sell 100", comp(105, 176));  // stockmarket:offercount_100 ?
        IF_SETPOSITION(22, int4, 1, 2, comp(105, 176));  // stockmarket:offercount_100 ?
        IF_SETTEXT("ALL", comp(105, 177));  // stockmarket:offercount_1000 ?
        IF_SETOP(1, "Sell All", comp(105, 177));  // stockmarket:offercount_1000 ?
        IF_SETPOSITION(66, int4, 1, 2, comp(105, 177));  // stockmarket:offercount_1000 ?
        IF_SETHIDE(true, comp(105, 178));  // stockmarket:offercount_limit ?
        if ((int1 == -1 as obj)) {
            string2 = "Use your inventory to select an item to sell here";
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(105, 154));  // stockmarket:offeritem_model ?
        } else {
            IF_SETONMOUSEREPEAT(callback(script9564, int1, -2147483645, -2147483643), comp(105, 154));  // stockmarket:offeritem_model ?
        };
    };
    if ((int1 == -1 as obj)) {
        IF_SETTEXT("Choose an item to exchange", comp(105, 139));  // stockmarket:offeritem_name ?
        IF_SETTEXT("N/A", comp(105, 147));  // stockmarket:offeritem_marketprice ?
        IF_SETTEXT("N/A", comp(105, 150));  // stockmarket:offeritem_recentprice ?
        if ((varplayer_139 == 0)) {
            IF_SETTEXT(script9465(2), comp(105, 140));  // stockmarket:offeritem_desc ?
        } else if ((varplayer_139 == 1)) {
            IF_SETTEXT("Select an item in your inventory to sell.", comp(105, 140));  // stockmarket:offeritem_desc ?
        };
    } else {
        IF_SETTEXT(script18300(int1), comp(105, 139));  // stockmarket:offeritem_name ?
        if ((varplayer_135 != -1 as obj)) {
            if (LONG_BRANCH_NOT(varplayer_140, -1n)) {
                IF_SETTEXT(TOSTRING_LOCALISED_LONG(varplayer_140, 1), comp(105, 147));  // stockmarket:offeritem_marketprice ?
                if (LONG_BRANCH_NOT(varplayer_13483, -1n)) {
                    IF_SETTEXT(TOSTRING_LOCALISED_LONG(varplayer_13483, 1), comp(105, 150));  // stockmarket:offeritem_recentprice ?
                } else {
                    IF_SETTEXT("-", comp(105, 150));  // stockmarket:offeritem_recentprice ?
                };
            } else {
                IF_SETTEXT("Loading...", comp(105, 140));  // stockmarket:offeritem_desc ?
                IF_SETTEXT("Loading...", comp(105, 147));  // stockmarket:offeritem_marketprice ?
                IF_SETTEXT("Loading...", comp(105, 150));  // stockmarket:offeritem_recentprice ?
                IF_SETONTIMER(callback(), comp(105, 141));  // stockmarket:offeritem_buylimit ?
                IF_SETTEXT("Loading...", comp(105, 141));  // stockmarket:offeritem_buylimit ?
            };
        } else {
            IF_SETTEXT("Loading...", comp(105, 140));  // stockmarket:offeritem_desc ?
            IF_SETTEXT("Loading...", comp(105, 147));  // stockmarket:offeritem_marketprice ?
            IF_SETTEXT("Loading...", comp(105, 150));  // stockmarket:offeritem_recentprice ?
            IF_SETONTIMER(callback(), comp(105, 141));  // stockmarket:offeritem_buylimit ?
            IF_SETTEXT("Loading...", comp(105, 141));  // stockmarket:offeritem_buylimit ?
        };
        if ((int2 > 0)) {
            IF_SETENABLED(true, comp(105, 212));  // stockmarket:makeofferbutton ?
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
        if ((STOCKMARKET_ISOFFEREMPTY(varplayer_138, 0) == 0)) {
            if (((varplayer_9457 != int2) || LONG_BRANCH_NOT(varplayer_9458, long0))) {
                IF_SETENABLED(true, comp(105, 213));  // stockmarket:updateofferbutton ?
            } else {
                IF_SETENABLED(false, comp(105, 213));  // stockmarket:updateofferbutton ?
            };
        } else {
            IF_SETENABLED(false, comp(105, 213));  // stockmarket:updateofferbutton ?
        };
    };
    IF_SETTEXT(TOSTRING_LOCALISED(int2, 1), comp(105, 170));  // stockmarket:quantity_input_display ?
    IF_SETTEXT(TOSTRING_LOCALISED_LONG(long0, 1), comp(105, 185));  // stockmarket:price_input_display ?
    var long1 = -1n;
    var long2 = 0n;
    if ((LONG_BRANCH_LESS_THAN_OR_EQUALS(long0, 0n) || (int2 <= 0))) {
        long1 = 0n;
    } else if (LONG_BRANCH_LESS_THAN(long0, DIVIDE_LONG(2147483649147483647n, INT_TO_LONG(int2)))) {
        long1 = MULTIPLY_LONG(long0, INT_TO_LONG(int2));
        long2 = script12802(varplayer_138, int1, int2, long1, int0);
    };
    var int5 = 1;
    if (LONG_BRANCH_EQUALS(long1, -1n)) {
        IF_SETTEXT("Too high!", comp(105, 215));  // stockmarket:totalvalue ?
    } else if ((int0 == 1)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED_LONG(SUB_LONG(long1, long2), 1)} coins`, comp(105, 215));  // stockmarket:totalvalue ?
        string2 = "Minimum total value of sale.";
        if (LONG_BRANCH_GREATER_THAN(long2, 0n)) {
            string2 = `${string2}<br><br>A sales tariff of ${inttostring(2, 10)}% applies to any items sold for 50 coins or more and is automatically applied.`;
            int5 = 0;
        };
    } else {
        string2 = "Maximum total cost of purchase.";
        IF_SETTEXT(`${TOSTRING_LOCALISED_LONG(long1, 1)} coins`, comp(105, 215));  // stockmarket:totalvalue ?
    };
    IF_SETHIDE(int5, comp(105, 216));  // stockmarket:totalvalue_tax_info ?
    script3536(string2, 6881497, -1);
    return;
}