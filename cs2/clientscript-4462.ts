//
function script4462(int0: component): void {
    var int1 = script411(int0);
    var int2 = struct_getparam(int1, 7332);
    var int3 = struct_getparam(int1, 7334);
    var int4 = struct_getparam(int1, 7335);
    var int5 = struct_getparam(int1, 7336);
    var int6 = struct_getparam(int1, 7337);
    var int7 = struct_getparam(int1, 7338);
    var int8 = struct_getparam(int1, 7340);
    var int9 = struct_getparam(int1, 7340);
    var int10 = comp(1110, 4);
    var int11 = 0;
    var int12 = 0;
    var string0 = "";
    var int13 = -1;
    var int14 = -1;
    if ((unk10986(0) == 1)) {
        int12 = unk11113();
        IF_SETTEXT(`<col=EE7600>Clan Ban List</col> - ${inttostring(int12, 10)}/100`, int10);
        int13 = ACTIVECLANSETTINGS_GETAFFINEDSLOT(CHAT_PLAYERNAME_UNFILTERED());
        if ((int13 < 0)) {
            return;
        };
        int14 = ACTIVECLANSETTINGS_GETAFFINEDRANK(int13);
        if (((int14 >= 100) || (varbitclansettings_42911 == 1))) {
            IF_SETTEXT("", int6);
            IF_SETHIDE(true, int7);
            while ((int11 < int12)) {
                if ((CC_FIND(int2, int11) == 1)) {
                    string0 = unk11019(int11);
                    CC_SETTEXT(string0);
                    CC_SETOPBASE(`<col=ffffff>${string0}`);
                    CC_SETHIDE(false);
                };
                if ((CC_FIND(int5, int11) == 1)) {
                    CC_SETHIDE(false);
                };
                int11 = (int11 + 1);
            };
            while ((int11 < 100)) {
                if ((CC_FIND(int2, int11) == 1)) {
                    CC_SETHIDE(true);
                };
                if ((CC_FIND(int5, int11) == 1)) {
                    CC_SETHIDE(true);
                };
                int11 = (int11 + 1);
            };
        } else {
            IF_SETHIDE(false, int7);
            IF_SETTEXT("Your rank does not have permission to<br>view the ban list.", int6);
            while ((int11 < 100)) {
                if ((CC_FIND(int2, int11) == 1)) {
                    CC_SETHIDE(true);
                };
                if ((CC_FIND(int5, int11) == 1)) {
                    CC_SETHIDE(true);
                };
                int11 = (int11 + 1);
            };
        };
    } else {
        IF_SETHIDE(false, int7);
        IF_SETTEXT("You must be part of a clan to<br>view the ban list.", int6);
        while ((int11 < 100)) {
            if ((CC_FIND(int2, int11) == 1)) {
                CC_SETHIDE(true);
            };
            if ((CC_FIND(int5, int11) == 1)) {
                CC_SETHIDE(true);
            };
            int11 = (int11 + 1);
        };
    };
    var int15 = (19 * int12);
    var int16 = MIN(IF_GETSCROLLY(int3), IF_GETSCROLLHEIGHT(int3));
    if ((int15 > IF_GETHEIGHT(int3))) {
        script7791(int4, int3);
        IF_SETSCROLLSIZE(0, int15, int3);
        IF_SETSCROLLPOS(0, int16, int3);
        IF_SETHIDE(false, int4);
        IF_SETSIZE(16, 60, 1, 1, int3);
        script72(int4, int3, int16);
    } else {
        IF_SETHIDE(true, int4);
        IF_SETSIZE(0, 60, 1, 1, int3);
        IF_SETSCROLLSIZE(0, 0, int3);
        IF_SETSCROLLPOS(0, 0, int3);
        script72(int4, int3, 0);
    };
    if ((IF_GETWIDTH(int0) < 110)) {
        IF_SETHIDE(true, int8);
    } else {
        IF_SETHIDE(false, int8);
    };
    return;
}