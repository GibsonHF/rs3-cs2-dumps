//
function script13830(int0: int): void {
    if ((int0 < 5)) {
        IF_SETONTIMER(callback(script13830, (int0 + 1)), comp(517, 244));
        return;
    };
    IF_SETONTIMER(callback(), comp(517, 244));
    script5776();
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    [int2, int1, int3, int4] = script5779();
    int2 = (int2 - int1);
    var int5 = 0;
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    while ((int5 < 1820)) {
        int6 = INV_GETOBJ(95 as inv, int5);
        if ((int6 != -1 as obj)) {
            int7 = (int7 + 1);
            if ((OC_MEMBERS(int6) == 0)) {
                int8 = (int8 + 1);
            };
        };
        int5 = (int5 + 1);
    };
    var int9 = (int7 - int8);
    var int10 = false;
    var int11 = true;
    IF_SETHIDE(false, comp(517, 245));
    var string0 = "Get more bank space!";
    var string1 = "Total number of bank spaces used and available.";
    var string2 = "";
    if (((15 - int3) > 0)) {
        int10 = false;
        if ((PLAYERMEMBER() == true)) {
            string1 = `${string1}<br><br>You may purchase an additional ${inttostring(((15 - int3) * 50), 10)} bank spaces from the Store / Services tab in the Marketplace.`;
        };
    };
    if (((1 - int4) > 0)) {
        int10 = false;
        string1 = `${string1}<br><br>You may purchase an additional ${inttostring(((1 - int4) * 250), 10)} bank spaces from the Bonds tab in the Marketplace.`;
    };
    if (((PLAYERMEMBER() == true) || (script20009() == 1))) {
        IF_SETTEXT(TOSTRING_LOCALISED(int7, 1), comp(517, 248));
        IF_SETTEXT(TOSTRING_LOCALISED(script5777(), 1), comp(517, 249));
    } else {
        if ((int9 > 540)) {
            int8 = (int8 + (int9 - 540));
            int9 = 540;
        };
        string1 = `${string1}<br><br>Free spaces are displayed on the left and members spaces to the right.<br>Items within the members spaces do not count towards your limit for non-members items.`;
        string2 = script13865(string2, int9);
        string2 = script13865(string2, int8);
        IF_SETTEXT(`${TOSTRING_LOCALISED(int8, 1)}       ${string2}${TOSTRING_LOCALISED(int9, 1)}`, comp(517, 248));
        IF_SETTEXT(`${TOSTRING_LOCALISED(script5778(), 1)}       ${TOSTRING_LOCALISED(540, 1)}`, comp(517, 249));
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 33882357);
    if ((script15532(0) == 1)) {
        int10 = true;
        string0 = "";
    };
    script13959(comp(517, 251), 28222 as struct, int10);
    script13959(comp(517, 252), 31846 as struct, int10);
    if ((varplayer_12314 > 0)) {
        IF_SETHIDE(true, comp(517, 250));
        IF_SETSIZE(0, 30, 1, 0, comp(517, 245));
        int10 = true;
        string0 = "";
    } else if ((int10 == false)) {
        int11 = false;
        IF_SETOP(1, "Select", comp(517, 250));
    } else {
        IF_CLEAROPS(comp(517, 250));
    };
    IF_SETHIDE(int11, comp(517, 253));
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 33882362);
    return;
}