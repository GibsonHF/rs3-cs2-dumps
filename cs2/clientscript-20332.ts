//
function script20332(): void {
    var int0 = 0;
    var int1 = 21;
    var int2 = 4;
    var int3 = 4;
    var int4 = 2;
    var int5 = 0;
    var int6 = 30;
    var int7 = 4;
    var int8 = 36;
    var int9 = 21;
    var int10 = 16;
    var int11 = 0;
    var int12 = script20117(-1);
    var int13 = 4927014;
    var int14 = 0;
    var int15 = 26 as fontmetrics;
    if ((int12 != -1 as dbrow)) {
        int11 = 30;
        IF_SETHIDE(false, comp(910, 12));
        if ((varbitplayer_58378 == 1)) {
            IF_BUTTON_SETTOGGLED(1, 59637850);
            IF_BUTTON_SETTOGGLED(0, 59637848);
        } else {
            IF_BUTTON_SETTOGGLED(0, 59637850);
            IF_BUTTON_SETTOGGLED(1, 59637848);
        };
        IF_SETTEXTFONT(209 as fontmetrics, comp(910, 88));
    } else {
        varbitplayer_58378 = 0;
        IF_SETHIDE(true, comp(910, 90));
    };
    if ((script13749() == true)) {
        int1 = 42;
        int2 = 4;
        int3 = (int3 + 10);
        int4 = (int4 + 4);
        int7 = 6;
        int6 = (40 + int7);
        int8 = 44;
        int9 = 42;
        int10 = 32;
        int15 = 28 as fontmetrics;
        IF_SETHIDE(false, comp(910, 2));
        IF_SETCOLOUR(16777215, comp(910, 8));
        IF_SETTEXTFONT(28 as fontmetrics, comp(910, 8));
        IF_SETSIZE(0, (54 + int11), 1, 1, comp(910, 16));
        IF_SETPOSITION(0, (54 + int11), 0, 0, comp(910, 16));
    } else {
        IF_SETHIDE(true, comp(910, 2));
        IF_SETPOSITION(0, 0, 0, 0, comp(910, 6));
        IF_SETCOLOUR(14931919, comp(910, 8));
        IF_SETTEXTFONT(26 as fontmetrics, comp(910, 8));
        IF_SETSIZE(0, (60 + int11), 1, 1, comp(910, 16));
        IF_SETPOSITION(0, (60 + int11), 0, 0, comp(910, 16));
    };
    script15637(int13);
    IF_SETPOSITION(0, (int8 + 4), 0, 0, comp(910, 12));
    IF_SETSIZE(0, int8, 1, 0, comp(910, 11));
    IF_SETSIZE(0, int1, 1, 0, comp(910, 65));
    IF_SETSIZE(16, int1, 1, 0, comp(910, 17));
    IF_SETSIZE(16, int1, 1, 0, comp(910, 18));
    IF_SETSIZE(16, int1, 1, 0, comp(910, 19));
    if ((script20335(1) > 0)) {
        int0 = (int1 + int2);
    };
    if ((script20335(2) > 0)) {
        int0 = (int0 + (int1 + int2));
    };
    if ((script20335(3) > 0)) {
        int0 = (int0 + (int1 + int2));
    };
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(910, 28));
        IF_SETHIDE(true, comp(910, 29));
        IF_SETHIDE(true, comp(910, 20));
    } else {
        IF_SETPOSITION(0, int6, 0, 0, comp(910, 28));
        IF_SETSIZE(16, (int0 + 2), 1, 0, comp(910, 20));
        IF_SETPOSITION(0, (int6 + int2), 0, 0, comp(910, 20));
        IF_SETPOSITION(0, (int6 + int2), 0, 0, comp(910, 17));
        IF_SETPOSITION(0, ((int6 + int1) + (int2 * 2)), 0, 0, comp(910, 18));
        IF_SETPOSITION(0, ((int6 + (int1 * 2)) + (int2 * 3)), 0, 0, comp(910, 19));
        IF_SETHIDE(false, comp(910, 20));
        IF_SETHIDE(false, comp(910, 28));
        IF_SETHIDE(false, comp(910, 29));
        int0 = (int0 + 1);
        IF_SETPOSITION(0, (int6 + int0), 0, 0, comp(910, 29));
        int0 = (int0 + 2);
    };
    IF_SETPOSITION(0, 0, 0, 0, comp(910, 30));
    IF_SETSIZE(0, (int6 - int7), 1, 0, comp(910, 30));
    int0 = (int0 + (int6 + MAX(4, int2)));
    IF_SETSIZE(16, int0, 1, 1, comp(910, 62));
    IF_SETPOSITION(0, int0, 0, 0, comp(910, 62));
    IF_SETSIZE(16, (int0 - 3), 0, 1, comp(910, 87));
    IF_SETPOSITION(0, 0, 2, 2, comp(910, 87));
    var int16 = comp(910, 64);
    var int17 = comp(910, 66);
    var int18 = comp(910, 67);
    var int19 = comp(910, 68);
    var int20 = comp(910, 69);
    var int21 = comp(910, 70);
    var int22 = comp(910, 71);
    var int23 = comp(910, 72);
    var int24 = comp(910, 73);
    var int25 = comp(910, 74);
    var int26 = comp(910, 75);
    var int27 = comp(910, 76);
    var int28 = comp(910, 77);
    var int29 = comp(910, 87);
    var int30 = comp(910, 86);
    CC_DELETEALL(int16);
    CC_DELETEALL(int17);
    CC_DELETEALL(int18);
    CC_DELETEALL(int19);
    CC_DELETEALL(int20);
    CC_DELETEALL(int21);
    CC_DELETEALL(int22);
    CC_DELETEALL(int23);
    CC_DELETEALL(int24);
    CC_DELETEALL(int25);
    CC_DELETEALL(int26);
    CC_DELETEALL(int27);
    CC_DELETEALL(int28);
    CC_DELETEALL(int30);
    var int31 = 0;
    var int32 = 0;
    var string0 = "";
    var int33 = 0;
    var string1 = "";
    var int34 = 0;
    var int35 = 0;
    var int36 = -1 as graphic;
    var int37 = 0;
    var int38 = 0;
    var int39 = 0;
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var int40 = -1 as graphic;
    var int41 = -1 as graphic;
    var string5 = "";
    var string6 = "";
    var int42 = -1;
    var int43 = -1;
    var int44 = -1;
    stack(unk11101());
    [int31, int32, string0, int33, string1, int34, int35, string2] = stack();
    if ((int31 == -1)) {
        IF_SETTEXT("The world list could not be loaded.<br><br>Please accept our apologies for the<br>inconvenience, and try again later.", comp(910, 10));
        return;
    };
    var int45 = 0;
    var int46 = 0;
    var string7 = "";
    var int47 = script16823();
    while ((int31 >= 0)) {
        if ((((varbitplayer_58378 == 1) && (int12 != -1 as dbrow)) && (TESTBIT(int32, 24) == 0))) {
            stack(unk11100());
            [int31, int32, string0, int33, string1, int34, int35, string2] = stack();
        } else if ((((varbitplayer_58378 == 0) || (int12 == -1 as dbrow)) && (TESTBIT(int32, 24) == 1))) {
            stack(unk11100());
            [int31, int32, string0, int33, string1, int34, int35, string2] = stack();
        } else if (((int31 >= 170) && (int34 < 0))) {
            stack(unk11100());
            [int31, int32, string0, int33, string1, int34, int35, string2] = stack();
        } else if ((TESTBIT(int32, 12) == 1)) {
            stack(unk11100());
            [int31, int32, string0, int33, string1, int34, int35, string2] = stack();
        } else if ((((TESTBIT(int32, 30) == 1) && (int47 == false)) && (STAFFMODLEVEL() < 2))) {
            stack(unk11100());
            [int31, int32, string0, int33, string1, int34, int35, string2] = stack();
        } else if ((((TESTBIT(int32, 30) == 0) && (int47 == true)) && (STAFFMODLEVEL() < 2))) {
            stack(unk11100());
            [int31, int32, string0, int33, string1, int34, int35, string2] = stack();
        } else {
            [int40, string3, string4, int38, int41, int37, int36, string5, string6] = script3117(int31, int32, int45, string0, string1, int34, int33);
            if ((script13749() == true)) {
                if ((int38 == 16777215)) {
                    int39 = 7705248;
                } else {
                    int39 = int38;
                };
                int38 = 7705248;
            } else {
                int39 = int38;
            };
            script20333(int16, int45, int1, int46, int45);
            script7924(int17, int45, int9, int9, 0, int46, int36, false, false, false, 0);
            CC_SETPOSITION(0, (int46 + int5), 1, 0);
            script10629(int18, int45, (IF_GETWIDTH(int18) - 6), int1, 3, int46, inttostring(int31, 10), int38, int15, 0, 1, 0, true);
            script10629(int20, int45, (IF_GETWIDTH(int20) - 6), int1, 3, int46, string6, int38, int15, 0, 1, 0, true);
            script10629(int21, int45, (IF_GETWIDTH(int21) - 6), int1, 3, int46, string4, int38, int15, 0, 1, 0, true);
            script7924(int23, int45, 24, 12, 4, (int46 + int3), int40, false, false, false, 0);
            script10629(int22, int45, 30, int1, 30, int46, string3, int38, int15, 0, 1, 0, true);
            CC_SETSIZE(30, int1, 1, 0);
            script10629(int24, int45, (IF_GETWIDTH(int24) - 10), int1, 5, int46, string5, int39, int15, 0, 1, 0, true);
            script7924(int25, int45, int10, int10, 0, (int46 + int4), int41, false, false, false, 0);
            CC_SETPOSITION(0, (int46 + int4), 1, 0);
            if ((int35 == -1)) {
                string7 = "-";
            } else if ((int35 >= 1000)) {
                string7 = "N/A";
            } else {
                string7 = inttostring(int35, 10);
            };
            script10629(int26, int45, (IF_GETWIDTH(int26) - 10), int1, 5, int46, string7, int38, int15, 0, 1, 0, true);
            script10629(int27, int45, IF_GETWIDTH(int27), int1, 0, int46, "", 0, int15, 0, 1, 0, true);
            CC_SETOP(1, "Select");
            CC_SETOPBASE(`World ${inttostring(int31, 10)}`);
            CC_SETONOP(callback(script3129, -2147483644, int45, int31, string2));
            script10629(int28, int45, IF_GETWIDTH(int28), int1, 0, int46, "", 0, int15, 0, 1, 0, 1);
            CC_SETONMOUSEOVER(callback(script3130, int17, int28, int45, int31));
            CC_SETONMOUSELEAVE(callback(script3132, int17, int45, int31));
            CC_SETOP(1, "Alter");
            CC_SETOPBASE("Favourite");
            CC_SETONOP(callback(script3128, -2147483645, -2147483643, -2147483644, int45, int31));
            CC_SETONCLICK(callback(script10036));
            if ((int31 == MAP_WORLD())) {
                IF_SETHIDE(false, comp(910, 65));
                IF_SETPOSITION(0, int46, 0, 0, comp(910, 65));
            };
            if ((int31 == script20335(1))) {
                int42 = int45;
            };
            if ((int31 == script20335(2))) {
                int43 = int45;
            };
            if ((int31 == script20335(3))) {
                int44 = int45;
            };
            stack(unk11100());
            [int31, int32, string0, int33, string1, int34, int35, string2] = stack();
            int46 = (int46 + (int1 + int2));
            int45 = (int45 + 1);
        };
    };
    IF_SETSCROLLSIZE(0, (int46 + IF_GETY(comp(910, 63))), comp(910, 62));
    script31(int29, comp(910, 62), 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    if ((script20335(1) > 0)) {
        script3118(script20335(1), comp(910, 17), int42);
    } else {
        script3119(comp(910, 17), 1);
    };
    if ((script20335(2) > 0)) {
        script3118(script20335(2), comp(910, 18), int43);
    } else {
        script3119(comp(910, 18), 0);
    };
    if ((script20335(3) > 0)) {
        script3118(script20335(3), comp(910, 19), int44);
    } else {
        script3119(comp(910, 19), 0);
    };
    IF_SETHIDE(true, comp(910, 10));
    IF_SETHIDE(false, comp(910, 16));
    return;
}