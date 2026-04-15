//
function script651(int0: int): void {
    var int1 = script623(int0);
    var int2 = script10(int0);
    CC_DELETEALL(int1);
    var int3 = IF_GETWIDTH(int1);
    var int4 = IF_GETHEIGHT(int1);
    var int5 = STOCKMARKET_GETOFFERTYPE(int0, 0);
    var int6 = STOCKMARKET_GETOFFERCOUNT(int0, 0);
    var int7 = STOCKMARKET_GETOFFERCOMPLETEDCOUNT(int0, 0);
    var int8 = STOCKMARKET_GETOFFERITEM(int0, 0);
    var long0 = STOCKMARKET_GETOFFERPRICE(int0, 0);
    if (((item_getparam(int8, 3758) != -1 as obj) && (int5 == 0))) {
        int8 = item_getparam(int8, 3758);
    };
    var string0 = "";
    if ((STOCKMARKET_ISOFFEREMPTY(int0, 0) == 1)) {
        string0 = `Slot ${inttostring((int0 + 1), 10)}`;
        script7794(int2, 21361 as struct);
    } else if ((STOCKMARKET_GETOFFERTYPE(int0, 0) == 0)) {
        string0 = `${inttostring((int0 + 1), 10)} - Buy`;
        script7794(int2, 21362 as struct);
    } else {
        string0 = `${inttostring((int0 + 1), 10)} - Sell`;
        script7794(int2, 52670 as struct);
    };
    CC_CREATE(int1, 3, 0);
    CC_SETSIZE(int3, int4, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETFILL(1);
    CC_SETCOLOUR(16777215);
    CC_SETTRANS(255);
    script584(int1, string0);
    var int9 = IF_GETNEXTSUBID(int1);
    IF_SETONMOUSEOVER(callback(script629, int0), int1);
    IF_SETONMOUSELEAVE(callback(script631, int0), int1);
    if ((STOCKMARKET_ISOFFEREMPTY(int0, 0) == 1)) {
        IF_SETONOP(callback(), int1);
        IF_SETOP(1, "", int1);
        IF_SETOP(2, "", int1);
        IF_SETONMOUSEREPEAT(callback(), int1);
        if ((int0 >= 3)) {
            if ((PLAYERMEMBER() == true)) {
                IF_SETHIDE(true, script624(int0));
            } else {
                IF_SETHIDE(false, script624(int0));
            };
        };
    } else {
        IF_SETOP(1, "View Offer", int1);
        IF_SETONOP(callback(script15044, -2147483644, int0), int1);
        string0 = "View offer";
        IF_SETONMOUSEREPEAT(callback(script10009, string0, -2147483645, -2147483643), int1);
        if ((STOCKMARKET_ISOFFERFINISHED(int0, 0) == 0)) {
            IF_SETOP(2, "Abort Offer", int1);
        } else if ((STOCKMARKET_ISOFFEREMPTY(int0, 0) == 0)) {
            IF_SETOP(2, "Collect and repeat", int1);
        } else {
            IF_SETOP(2, "", int1);
        };
    };
    var string1 = TOSTRING_LOCALISED(int6, 1);
    var string2 = TOSTRING_LOCALISED_LONG(long0, 1);
    var string3 = script17371(long0);
    var int10 = 0;
    var int11 = 0;
    var int12 = script627(int0);
    var int13 = script15039(int0);
    var int14 = script15040(int0);
    var int15 = script15041(int0);
    IF_SETHIDE(true, int12);
    var string4 = "";
    var int16 = 0;
    var int17 = 0;
    if ((STOCKMARKET_ISOFFEREMPTY(int0, 0) == 1)) {
        if (((int0 < 3) || (PLAYERMEMBER() == true))) {
            IF_SETHIDE(false, int12);
        };
        IF_SETHIDE(true, int13);
        IF_SETHIDE(true, int14);
        if (((int0 >= 3) && (PLAYERMEMBER() == false))) {
            IF_SETHIDE(true, int15);
        } else {
            IF_SETHIDE(false, int15);
        };
    } else {
        int10 = 7;
        int11 = (int4 - 30);
        if ((STOCKMARKET_ISOFFERADDING(int0, 0) == 1)) {
            int9 = IF_GETNEXTSUBID(int1);
            CC_CREATE[1](int1, 4, int9);
            CC_SETPOSITION[1](int10, int11, 0, 0);
            CC_SETSIZE[1]((int3 - 14), 15, 0, 0);
            CC_SETTEXTFONT[1](26 as fontmetrics);
            CC_SETCOLOUR[1](14407812);
            CC_SETTEXT[1]("Submitting...");
            CC_SETTEXTALIGN[1](1, 1, 0);
        } else {
            script652(int10, int11, (int3 - 14), 15, int0, int1, int9, 0, 1, 1);
        };
        if ((STOCKMARKET_ISOFFERFINISHED(int0, 0) == 1)) {
            IF_SETHIDE(true, int13);
            string4 = "Collect and repeat offer";
            IF_SETONMOUSEOVER(callback(script1256, -2147483645), int14);
            IF_SETONMOUSEREPEAT(callback(script8799, string4, -2147483645, -2147483643), int14);
            IF_SETONMOUSELEAVE(callback(script1257, -2147483645), int14);
            IF_SETONCLICK(callback(script1257, -2147483645), int14);
            stack(14121);
            stack(int14);
            IF_SETGRAPHIC();
            IF_SETOP(1, "Collect and repeat", int14);
            IF_SETHIDE(0, int14);
        } else {
            IF_SETHIDE(false, int13);
            string4 = "Abort offer";
            IF_SETONMOUSEOVER(callback(script617, -2147483645), int14);
            IF_SETONMOUSEREPEAT(callback(script8799, string4, -2147483645, -2147483643), int14);
            IF_SETONMOUSELEAVE(callback(script618, -2147483645), int14);
            IF_SETONCLICK(callback(script618, -2147483645), int14);
            stack(1165);
            stack(int14);
            IF_SETGRAPHIC();
            IF_SETOP(1, "Abort Offer", int14);
            IF_SETHIDE(0, int14);
        };
        IF_SETHIDE(true, int15);
        int9 = IF_GETNEXTSUBID(int1);
        CC_CREATE(int1, 5, int9);
        int9 = (int9 + 1);
        CC_SETPOSITION(6, 30, 0, 0);
        CC_SETSIZE(40, 36, 0, 0);
        CC_SETGRAPHIC(18266 as graphic);
        CC_CREATE(int1, 5, int9);
        CC_SETPOSITION(8, 32, 0, 0);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETOBJECT(int8, int6);
        string0 = TOSTRING_LOCALISED(int6, 1);
        CC_SETONMOUSEREPEAT(callback(script5495, int8));
        CC_SETONMOUSELEAVE(callback(script5495, -1));
        int9 = (int9 + 1);
        CC_CREATE(int1, 4, int9);
        CC_SETPOSITION(48, 30, 0, 0);
        string0 = script18300(int8);
        int17 = (int3 - 53);
        int16 = PARAWIDTH(string0, int17, 27);
        if ((int16 > int17)) {
            int10 = STRING_LENGTH(string0);
            while (((int16 > int17) && (int10 > 0))) {
                int10 = (int10 - 1);
                string0 = `${SUBSTRING(string0, 0, int10)}...`;
                int16 = PARAWIDTH(string0, int17, 27 as fontmetrics);
            };
        };
        int9 = (int9 + 1);
        int4 = (PARAHEIGHT(string0, int17, 27 as fontmetrics) * 14);
        string0 = script18300(int8);
        if ((int4 < 56)) {
            int4 = 56;
        };
        CC_SETSIZE(int17, int4, 0, 0);
        CC_SETCOLOUR(15777401);
        CC_SETTEXTFONT(27 as fontmetrics);
        CC_SETTEXTALIGN(0, 0, 14);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXT(string0);
        CC_SETMAXLINES(4);
        CC_CREATE(int1, 4, int9);
        CC_SETPOSITION(6, 70, 0, 0);
        CC_SETSIZE(40, 15, 0, 0);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 15);
        CC_SETTEXTSHADOW(true);
        if (branch_lt_long[608](long0, 10000n)) {
            CC_SETTEXT(string2);
        } else {
            CC_SETTEXT(string3);
            CC_SETONMOUSEREPEAT(callback(script8799, string2, int1, int9));
        };
        int9 = (int9 + 1);
        CC_CREATE(int1, 5, int9);
        CC_SETPOSITION(4, 2, 2, 0);
        CC_SETSIZE(20, 20, 0, 0);
        CC_SETGRAPHIC(-1 as graphic);
        int9 = (int9 + 1);
    };
    return;
}