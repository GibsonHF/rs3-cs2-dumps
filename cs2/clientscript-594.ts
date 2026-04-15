//
function script594(int0: int, int1: obj, int2: int, long0: long): void {
    if (((item_getparam(int1, 3758) != -1 as obj) && (int0 == 0))) {
        var int1 = item_getparam(int1, 3758);
    };
    IF_SETOBJECT(int1, -1, comp(105, 227));
    var string0 = "null";
    var string1 = "null";
    var string2 = "null";
    var int3 = 0;
    var int4 = 51;
    if ((int0 == 0)) {
        IF_SETOP(1, "Select", comp(105, 226));
        IF_SETTEXT("Buy Offer", comp(105, 222));
        stack(1157);
        stack(6881505);
        IF_SETGRAPHIC();
        IF_SETTEXT("+1", 6881528);
        IF_SETOP(1, "Add 1", 6881526);
        IF_SETPOSITION(-90, int4, 1, 0, 6881522);
        IF_SETTEXT("+10", 6881535);
        IF_SETOP(1, "Add 10", 6881533);
        IF_SETPOSITION(-45, int4, 1, 0, 6881529);
        IF_SETTEXT("+100", 6881542);
        IF_SETOP(1, "Add 100", 6881540);
        IF_SETPOSITION(0, int4, 1, 0, 6881536);
        IF_SETTEXT("+1K", 6881550);
        IF_SETOP(1, "Add 1000", 6881548);
        IF_SETPOSITION(45, int4, 1, 0, 6881543);
        IF_SETHIDE(0, 6881544);
        if ((int1 != -1)) {
            IF_SETONMOUSEREPEAT(callback(script9564, int1, -2147483645, -2147483643), 6881507);
        } else {
            IF_SETONMOUSEREPEAT(callback(), comp(105, 227));
        };
        IF_SETPOSITION(0, IF_GETY(comp(105, 221)), 0, 0, comp(105, 221));
        IF_SETPOSITION(0, IF_GETY(comp(105, 213)), 2, 0, comp(105, 213));
        int3 = (IF_GETWIDTH(comp(105, 221)) + 1);
        IF_SETPOSITION(int3, IF_GETY(comp(105, 210)), 0, 0, comp(105, 210));
        IF_SETPOSITION(3, IF_GETY(comp(105, 211)), 0, 0, comp(105, 211));
    } else {
        IF_CLEAROPS(comp(105, 226));
        IF_SETTEXT("Sell Offer", comp(105, 222));
        stack(1156);
        stack(6881505);
        IF_SETGRAPHIC();
        IF_SETTEXT("1", 6881528);
        IF_SETOP(1, "Sell 1", 6881526);
        IF_SETPOSITION(-66, int4, 1, 0, 6881522);
        IF_SETTEXT("10", 6881535);
        IF_SETOP(1, "Sell 10", 6881533);
        IF_SETPOSITION(-22, int4, 1, 0, 6881529);
        IF_SETTEXT("100", 6881542);
        IF_SETOP(1, "Sell 100", 6881540);
        IF_SETPOSITION(22, int4, 1, 0, 6881536);
        IF_SETTEXT("ALL", 6881550);
        IF_SETOP(1, "Sell All", 6881548);
        IF_SETPOSITION(66, int4, 1, 0, 6881543);
        IF_SETHIDE(1, 6881544);
        if ((int1 == -1)) {
            string2 = "Use your inventory to select an item to sell here";
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 6881507);
        } else {
            IF_SETONMOUSEREPEAT(callback(script9564, int1, -2147483645, -2147483643), 6881507);
        };
        IF_SETPOSITION(0, IF_GETY(comp(105, 213)), 0, 0, comp(105, 213));
        IF_SETPOSITION(0, IF_GETY(comp(105, 221)), 2, 0, comp(105, 221));
        int3 = (IF_GETWIDTH(comp(105, 221)) + 1);
        IF_SETPOSITION(int3, IF_GETY(comp(105, 210)), 2, 0, comp(105, 210));
        IF_SETPOSITION(4, IF_GETY(comp(105, 211)), 2, 0, comp(105, 211));
    };
    if ((int1 == -1 as obj)) {
        IF_SETTEXT("Choose an item to exchange", comp(105, 214));
        IF_SETTEXT("N/A", comp(105, 223));
        if ((varplayer_139 == 0)) {
            IF_SETTEXT(script9465(2), comp(105, 215));
        } else if ((varplayer_139 == 1)) {
            IF_SETTEXT("Select an item in your inventory to sell.", comp(105, 215));
        };
    } else {
        IF_SETTEXT(script18300(int1), comp(105, 214));
        if ((varplayer_135 != -1 as obj)) {
            IF_SETTEXT(TOSTRING_LOCALISED_LONG(varplayer_140, 1), comp(105, 223));
        } else {
            IF_SETTEXT("Retrieving details...", comp(105, 215));
            IF_SETTEXT("N/A", comp(105, 223));
        };
        if ((int2 > 0)) {
            script13971(comp(105, 324), comp(105, 325), 28553 as struct, "Confirm Offer", false);
        };
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    if (((IF_FIND(comp(105, 223)) == 1) && (IF_FIND[1](comp(105, 224)) == 1))) {
        int6 = CC_GETWIDTH();
        int7 = PARAWIDTH(CC_GETTEXT(), int6, 26 as fontmetrics);
        int8 = CC_GETWIDTH[1]();
        int5 = (((int6 - int7) / 2) - (int8 - 5));
        CC_SETPOSITION[1](int5, CC_GETY[1](), 0, 0);
    };
    if ((STOCKMARKET_ISOFFEREMPTY(varplayer_138, 0) == 1)) {
        if ((varclient_82 <= 0)) {
            varclient_84 = varplayer_136;
            var int2 = varclient_84;
        };
        if ((varclient_83 <= 0)) {
            varclient_85 = varplayer_137;
            var long0 = varclient_85;
        };
    };
    IF_SETTEXT(TOSTRING_LOCALISED(int2, 1), comp(105, 237));
    IF_SETTEXT(TOSTRING_LOCALISED_LONG(long0, 1), comp(105, 278));
    var long1 = -1n;
    var long2 = 0n;
    if ((branch_lteq_long[406](long0, 0n) || (int2 <= 0))) {
        long1 = 0n;
    } else if (branch_lt_long[416](long0, DIVIDE_LONG(2147483649147483647n, INT_TO_LONG(int2)))) {
        long1 = MULTIPLY_LONG(long0, INT_TO_LONG(int2));
        long2 = script12802(varplayer_138, int1, int2, long1, int0);
    };
    var int9 = true;
    if (branch_eq_long[434](long1, -1n)) {
        IF_SETTEXT("Too high!", comp(105, 321));
    } else if ((int0 == 1)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED_LONG(SUB_LONG(long1, long2), 1)} coins`, comp(105, 321));
        string2 = "Minimum total value of sale.";
        if (branch_gt_long[457](long2, 0n)) {
            string2 = `${string2}<br><br>A sales tariff of ${inttostring(2, 10)}% applies to any items sold for 50 coins or more and is automatically applied.`;
            int9 = false;
        };
    } else {
        string2 = "Maximum total cost of purchase.";
        IF_SETTEXT(`${TOSTRING_LOCALISED_LONG(long1, 1)} coins`, comp(105, 321));
    };
    IF_SETHIDE(int9, comp(105, 319));
    script3536(string2, comp(105, 320), -1);
    return;
}