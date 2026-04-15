//
function script4777(int0: int, int1: unknown_int, int2: int): void {
    var int3 = -1 as graphic;
    var string0 = "";
    var string1 = "";
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = (varclan_2724 / 100);
    var int8 = (varclan_2725 / 100);
    var int9 = (varclan_2728 / 100);
    var int10 = (varclan_2732 / 100);
    var int11 = (varclan_2731 / 100);
    var int12 = (varclan_2730 / 100);
    var int13 = (varclan_2733 / 100);
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = 0;
    var int28 = 0;
    var int29 = 0;
    var int30 = 0;
    var int31 = 0;
    var int32 = 0;
    var int33 = 0;
    var int34 = 0;
    var int35 = 0;
    var int36 = 0;
    var int37 = 0;
    var int38 = int0;
    var int39 = 0;
    var int40 = 0;
    var int41 = 0;
    var string2 = "";
    var string3 = "";
    var int42 = (IF_GETWIDTH(comp(1115, 8)) - 2);
    if (((int0 < 1) || (int0 > 900))) {
        return;
    };
    if ((CLANPROFILE_FIND() == 1)) {
        IF_SETHIDE(false, comp(1115, 34));
        [int3, string0, int4, int5, int6, int39, int40, int41] = script4791(int0);
        [int14, int15, int16, int17, int18, int19, int20, int21, int22, int23, int24, int25, int26, int27, int28, int29, int30, int31, int32, int33, int34, int35, int36, int37, int38] = script4794(int2, int7, int8, int9, int10, int11, int12, int13);
        if (((int0 > 300) && (int0 < 600))) {
            int4 = (int4 - int5);
        };
        if ((int39 == 5)) {
            if ((int4 == 1)) {
                string3 = "(Basic)";
            } else if ((int4 == 2)) {
                string3 = "(Medium)";
            } else if ((int4 == 3)) {
                string3 = "(Grand)";
            };
        } else {
            string3 = `(Tier ${inttostring(int4, 10)})`;
        };
        if ((PARAHEIGHT(string0, IF_GETWIDTH(comp(1115, 37)), 26 as fontmetrics) > 1)) {
            IF_SETTEXT(`${string0} ${string3}`, comp(1115, 37));
        } else {
            IF_SETTEXT(`${string0}<br>${string3}`, comp(1115, 37));
        };
        stack(int3);
        stack(73072676);
        IF_SETGRAPHIC();
        if ((int0 > 600)) {
            string1 = "Upgrade";
            IF_SETHIDE(true, comp(1115, 80));
            IF_SETHIDE(true, comp(1115, 42));
            IF_SETHIDE(false, comp(1115, 41));
            IF_SETHIDE(false, comp(1115, 119));
            if ((int14 == 0)) {
                IF_SETHIDE(true, comp(1115, 8));
                IF_SETHIDE(false, comp(1115, 9));
            } else {
                IF_SETHIDE(false, comp(1115, 8));
                IF_SETHIDE(true, comp(1115, 9));
            };
            if ((int15 == 0)) {
                IF_SETHIDE(true, comp(1115, 45));
                IF_SETHIDE(false, comp(1115, 46));
            } else {
                IF_SETHIDE(false, comp(1115, 45));
                IF_SETHIDE(true, comp(1115, 46));
            };
            if ((int16 == 0)) {
                IF_SETHIDE(true, comp(1115, 82));
                IF_SETHIDE(false, comp(1115, 83));
            } else {
                IF_SETHIDE(false, comp(1115, 82));
                IF_SETHIDE(true, comp(1115, 83));
            };
            if ((int17 == 0)) {
                IF_SETHIDE(true, comp(1115, 86));
                IF_SETHIDE(false, comp(1115, 87));
            } else {
                IF_SETHIDE(false, comp(1115, 86));
                IF_SETHIDE(true, comp(1115, 87));
            };
            if ((int18 == 0)) {
                IF_SETHIDE(true, comp(1115, 90));
                IF_SETHIDE(false, comp(1115, 91));
            } else {
                IF_SETHIDE(false, comp(1115, 90));
                IF_SETHIDE(true, comp(1115, 91));
            };
            if ((int19 == 0)) {
                IF_SETHIDE(true, comp(1115, 117));
                IF_SETHIDE(false, comp(1115, 118));
            } else {
                IF_SETHIDE(false, comp(1115, 117));
                IF_SETHIDE(true, comp(1115, 118));
            };
            IF_SETSIZE(((int20 * int42) / MAX(1, int14)), IF_GETHEIGHT(comp(1115, 12)), 0, 0, comp(1115, 12));
            string2 = `${inttostring(int20, 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072652);
            IF_SETSIZE(((int21 * int42) / MAX(1, int15)), IF_GETHEIGHT(73072738), 0, 0, 73072738);
            string2 = `${inttostring(int21, 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072738);
            IF_SETSIZE(((int22 * int42) / MAX(1, int16)), IF_GETHEIGHT(73072743), 0, 0, 73072743);
            string2 = `${inttostring(int22, 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072743);
            IF_SETSIZE(((int23 * int42) / MAX(1, int17)), IF_GETHEIGHT(73072748), 0, 0, 73072748);
            string2 = `${inttostring(int23, 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072748);
            IF_SETSIZE(((int24 * int42) / MAX(1, int18)), IF_GETHEIGHT(73072753), 0, 0, 73072753);
            string2 = `${inttostring(int24, 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072753);
            IF_SETSIZE(((int25 * int42) / MAX(1, int19)), IF_GETHEIGHT(73072761), 0, 0, 73072761);
            string2 = `${inttostring(int25, 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072761);
            IF_SETPOSITION(((IF_GETX(73072652) + IF_GETWIDTH(73072652)) + 1), 0, 0, 1, 73072734);
            IF_SETPOSITION(((IF_GETX(73072738) + IF_GETWIDTH(73072738)) + 1), 0, 0, 1, 73072739);
            IF_SETPOSITION(((IF_GETX(73072743) + IF_GETWIDTH(73072743)) + 1), 0, 0, 1, 73072744);
            IF_SETPOSITION(((IF_GETX(73072748) + IF_GETWIDTH(73072748)) + 1), 0, 0, 1, 73072749);
            IF_SETPOSITION(((IF_GETX(73072753) + IF_GETWIDTH(73072753)) + 1), 0, 0, 1, 73072754);
            IF_SETPOSITION(((IF_GETX(73072761) + IF_GETWIDTH(73072761)) + 1), 0, 0, 1, 73072762);
            IF_SETSIZE(((int26 * int42) / MAX(1, int14)), IF_GETHEIGHT(73072734), 0, 0, 73072734);
            string2 = `${inttostring(int26, 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072734);
            IF_SETSIZE(((int27 * int42) / MAX(1, int15)), IF_GETHEIGHT(73072739), 0, 0, 73072739);
            string2 = `${inttostring(int27, 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072739);
            IF_SETSIZE(((int28 * int42) / MAX(1, int16)), IF_GETHEIGHT(73072744), 0, 0, 73072744);
            string2 = `${inttostring(int28, 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072744);
            IF_SETSIZE(((int29 * int42) / MAX(1, int17)), IF_GETHEIGHT(73072749), 0, 0, 73072749);
            string2 = `${inttostring(int29, 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072749);
            IF_SETSIZE(((int30 * int42) / MAX(1, int18)), IF_GETHEIGHT(73072754), 0, 0, 73072754);
            string2 = `${inttostring(int30, 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072754);
            IF_SETSIZE(((int31 * int42) / MAX(1, int19)), IF_GETHEIGHT(73072762), 0, 0, 73072762);
            string2 = `${inttostring(int31, 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072762);
            IF_SETPOSITION(((IF_GETX(73072734) + IF_GETWIDTH(73072734)) + 1), 0, 0, 1, 73072735);
            IF_SETPOSITION(((IF_GETX(73072739) + IF_GETWIDTH(73072739)) + 1), 0, 0, 1, 73072740);
            IF_SETPOSITION(((IF_GETX(73072744) + IF_GETWIDTH(73072744)) + 1), 0, 0, 1, 73072745);
            IF_SETPOSITION(((IF_GETX(73072749) + IF_GETWIDTH(73072749)) + 1), 0, 0, 1, 73072750);
            IF_SETPOSITION(((IF_GETX(73072754) + IF_GETWIDTH(73072754)) + 1), 0, 0, 1, 73072755);
            IF_SETPOSITION(((IF_GETX(73072762) + IF_GETWIDTH(73072762)) + 1), 0, 0, 1, 73072763);
            IF_SETSIZE(((int32 * int42) / MAX(1, int14)), IF_GETHEIGHT(73072735), 0, 0, 73072735);
            string2 = `${inttostring(int32, 10)}<br>of<br>${inttostring(int14, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072735);
            IF_SETSIZE(((int33 * int42) / MAX(1, int15)), IF_GETHEIGHT(73072740), 0, 0, 73072740);
            string2 = `${inttostring(int33, 10)}<br>of<br>${inttostring(int15, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072740);
            IF_SETSIZE(((int34 * int42) / MAX(1, int16)), IF_GETHEIGHT(73072745), 0, 0, 73072745);
            string2 = `${inttostring(int34, 10)}<br>of<br>${inttostring(int16, 10)}<br>3:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072745);
            IF_SETSIZE(((int35 * int42) / MAX(1, int17)), IF_GETHEIGHT(73072750), 0, 0, 73072750);
            string2 = `${inttostring(int35, 10)}<br>of<br>${inttostring(int17, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072750);
            IF_SETSIZE(((int36 * int42) / MAX(1, int18)), IF_GETHEIGHT(73072755), 0, 0, 73072755);
            string2 = `${inttostring(int36, 10)}<br>of<br>${inttostring(int18, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072755);
            IF_SETSIZE(((int37 * int42) / MAX(1, int19)), IF_GETHEIGHT(73072763), 0, 0, 73072763);
            string2 = `${inttostring(int37, 10)}<br>of<br>${inttostring(int19, 10)}<br>3:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072763);
            IF_SETPOSITION(((IF_GETX(73072735) + IF_GETWIDTH(73072735)) + 1), 0, 0, 1, 73072736);
            IF_SETPOSITION(((IF_GETX(73072740) + IF_GETWIDTH(73072740)) + 1), 0, 0, 1, 73072741);
            IF_SETPOSITION(((IF_GETX(73072745) + IF_GETWIDTH(73072745)) + 1), 0, 0, 1, 73072746);
            IF_SETPOSITION(((IF_GETX(73072750) + IF_GETWIDTH(73072750)) + 1), 0, 0, 1, 73072751);
            IF_SETPOSITION(((IF_GETX(73072755) + IF_GETWIDTH(73072755)) + 1), 0, 0, 1, 73072756);
            IF_SETPOSITION(((IF_GETX(73072763) + IF_GETWIDTH(73072763)) + 1), 0, 0, 1, 73072764);
            IF_SETSIZE((((int42 - (IF_GETWIDTH(73072652) + 1)) - (IF_GETWIDTH(73072734) + 1)) - (IF_GETWIDTH(73072735) + 1)), IF_GETHEIGHT(73072736), 0, 0, 73072736);
            string2 = `${inttostring((int14 - ((int20 + int26) + int32)), 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072736);
            IF_SETSIZE((((int42 - (IF_GETWIDTH(73072738) + 1)) - (IF_GETWIDTH(73072739) + 1)) - (IF_GETWIDTH(73072740) + 1)), IF_GETHEIGHT(73072741), 0, 0, 73072741);
            string2 = `${inttostring((int15 - ((int21 + int27) + int33)), 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072741);
            IF_SETSIZE((((int42 - (IF_GETWIDTH(73072743) + 1)) - (IF_GETWIDTH(73072744) + 1)) - (IF_GETWIDTH(73072745) + 1)), IF_GETHEIGHT(73072746), 0, 0, 73072746);
            string2 = `${inttostring((int16 - ((int22 + int28) + int34)), 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072746);
            IF_SETSIZE((((int42 - (IF_GETWIDTH(73072748) + 1)) - (IF_GETWIDTH(73072749) + 1)) - (IF_GETWIDTH(73072750) + 1)), IF_GETHEIGHT(73072751), 0, 0, 73072751);
            string2 = `${inttostring((int17 - ((int23 + int29) + int35)), 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072751);
            IF_SETSIZE((((int42 - (IF_GETWIDTH(73072753) + 1)) - (IF_GETWIDTH(73072754) + 1)) - (IF_GETWIDTH(73072755) + 1)), IF_GETHEIGHT(73072756), 0, 0, 73072756);
            string2 = `${inttostring((int18 - ((int24 + int30) + int36)), 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072756);
            IF_SETSIZE((((int42 - (IF_GETWIDTH(73072761) + 1)) - (IF_GETWIDTH(73072762) + 1)) - (IF_GETWIDTH(73072763) + 1)), IF_GETHEIGHT(73072764), 0, 0, 73072764);
            string2 = `${inttostring((int19 - ((int25 + int31) + int37)), 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072764);
            string2 = `${inttostring(int20, 10)} paid<br>${inttostring(int26, 10)} available<br>${inttostring(int32, 10)} from wildcard<br>${inttostring((int14 - ((int20 + int26) + int32)), 10)} shortfall`;
            if ((int14 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 7));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072647);
            };
            string2 = `${inttostring(int21, 10)} paid<br>${inttostring(int27, 10)} available<br>${inttostring(int33, 10)} from wildcard<br>${inttostring((int15 - ((int21 + int27) + int33)), 10)} shortfall`;
            if ((int15 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 44));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072684);
            };
            string2 = `${inttostring(int22, 10)} paid<br>${inttostring(int28, 10)} available<br>${inttostring(int34, 10)} from wildcard<br>${inttostring((int16 - ((int22 + int28) + int34)), 10)} shortfall`;
            if ((int16 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 81));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072721);
            };
            string2 = `${inttostring(int23, 10)} paid<br>${inttostring(int29, 10)} available<br>${inttostring(int35, 10)} from wildcard<br>${inttostring((int17 - ((int23 + int29) + int35)), 10)} shortfall`;
            if ((int17 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 85));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072725);
            };
            string2 = `${inttostring(int24, 10)} paid<br>${inttostring(int30, 10)} available<br>${inttostring(int36, 10)} from wildcard<br>${inttostring((int18 - ((int24 + int30) + int36)), 10)} shortfall`;
            if ((int18 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 89));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072729);
            };
            string2 = `${inttostring(int25, 10)} paid<br>${inttostring(int31, 10)} available<br>${inttostring(int37, 10)} from wildcard<br>${inttostring((int19 - ((int25 + int31) + int37)), 10)} shortfall`;
            if ((int19 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 93));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072733);
            };
        } else if ((int0 < 300)) {
            string1 = `Downgrade -${inttostring(int5, 10)}`;
            IF_SETHIDE(false, comp(1115, 80));
            IF_SETHIDE(false, comp(1115, 42));
            IF_SETHIDE(true, comp(1115, 41));
            IF_SETHIDE(true, comp(1115, 119));
            IF_SETTEXT(inttostring(int14, 10), comp(1115, 137));
            IF_SETTEXT(inttostring(int15, 10), comp(1115, 139));
            IF_SETTEXT(inttostring(int16, 10), comp(1115, 141));
            IF_SETTEXT(inttostring(int17, 10), comp(1115, 143));
            IF_SETTEXT(inttostring(int18, 10), comp(1115, 145));
            IF_SETTEXT(inttostring(int19, 10), comp(1115, 147));
            [int14, int15, int16, int17, int18, int19] = script4792(int0, MAX((int4 - int5), 0));
            IF_SETTEXT(inttostring(int14, 10), comp(1115, 138));
            IF_SETTEXT(inttostring(int15, 10), comp(1115, 140));
            IF_SETTEXT(inttostring(int16, 10), comp(1115, 142));
            IF_SETTEXT(inttostring(int17, 10), comp(1115, 144));
            IF_SETTEXT(inttostring(int18, 10), comp(1115, 146));
            IF_SETTEXT(inttostring(int19, 10), comp(1115, 148));
        } else {
            string1 = "Upkeep";
            IF_SETHIDE(true, comp(1115, 80));
            IF_SETHIDE(true, comp(1115, 42));
            IF_SETHIDE(false, comp(1115, 41));
            IF_SETHIDE(true, comp(1115, 119));
            if ((int14 == 0)) {
                IF_SETHIDE(true, comp(1115, 8));
                IF_SETHIDE(false, comp(1115, 9));
            } else {
                IF_SETHIDE(false, comp(1115, 8));
                IF_SETHIDE(true, comp(1115, 9));
            };
            if ((int15 == 0)) {
                IF_SETHIDE(true, comp(1115, 45));
                IF_SETHIDE(false, comp(1115, 46));
            } else {
                IF_SETHIDE(false, comp(1115, 45));
                IF_SETHIDE(true, comp(1115, 46));
            };
            if ((int16 == 0)) {
                IF_SETHIDE(true, comp(1115, 82));
                IF_SETHIDE(false, comp(1115, 83));
            } else {
                IF_SETHIDE(false, comp(1115, 82));
                IF_SETHIDE(true, comp(1115, 83));
            };
            if ((int17 == 0)) {
                IF_SETHIDE(true, comp(1115, 86));
                IF_SETHIDE(false, comp(1115, 87));
            } else {
                IF_SETHIDE(false, comp(1115, 86));
                IF_SETHIDE(true, comp(1115, 87));
            };
            if ((int18 == 0)) {
                IF_SETHIDE(true, comp(1115, 90));
                IF_SETHIDE(false, comp(1115, 91));
            } else {
                IF_SETHIDE(false, comp(1115, 90));
                IF_SETHIDE(true, comp(1115, 91));
            };
            if ((int19 == 0)) {
                IF_SETHIDE(true, comp(1115, 117));
                IF_SETHIDE(false, comp(1115, 118));
            } else {
                IF_SETHIDE(false, comp(1115, 117));
                IF_SETHIDE(true, comp(1115, 118));
            };
            IF_SETSIZE(((int20 * int42) / MAX(1, int14)), IF_GETHEIGHT(comp(1115, 12)), 0, 0, comp(1115, 12));
            string2 = `${inttostring(int20, 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072652);
            IF_SETSIZE(((int21 * int42) / MAX(1, int15)), IF_GETHEIGHT(73072738), 0, 0, 73072738);
            string2 = `${inttostring(int21, 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072738);
            IF_SETSIZE(((int22 * int42) / MAX(1, int16)), IF_GETHEIGHT(73072743), 0, 0, 73072743);
            string2 = `${inttostring(int22, 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072743);
            IF_SETSIZE(((int23 * int42) / MAX(1, int17)), IF_GETHEIGHT(73072748), 0, 0, 73072748);
            string2 = `${inttostring(int23, 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072748);
            IF_SETSIZE(((int24 * int42) / MAX(1, int18)), IF_GETHEIGHT(73072753), 0, 0, 73072753);
            string2 = `${inttostring(int24, 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072753);
            IF_SETSIZE(((int25 * int42) / MAX(1, int19)), IF_GETHEIGHT(73072761), 0, 0, 73072761);
            string2 = `${inttostring(int25, 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072761);
            IF_SETPOSITION(((IF_GETX(73072652) + IF_GETWIDTH(73072652)) + 1), 0, 0, 1, 73072734);
            IF_SETPOSITION(((IF_GETX(73072738) + IF_GETWIDTH(73072738)) + 1), 0, 0, 1, 73072739);
            IF_SETPOSITION(((IF_GETX(73072743) + IF_GETWIDTH(73072743)) + 1), 0, 0, 1, 73072744);
            IF_SETPOSITION(((IF_GETX(73072748) + IF_GETWIDTH(73072748)) + 1), 0, 0, 1, 73072749);
            IF_SETPOSITION(((IF_GETX(73072753) + IF_GETWIDTH(73072753)) + 1), 0, 0, 1, 73072754);
            IF_SETPOSITION(((IF_GETX(73072761) + IF_GETWIDTH(73072761)) + 1), 0, 0, 1, 73072762);
            IF_SETSIZE(((int26 * int42) / MAX(1, int14)), IF_GETHEIGHT(73072734), 0, 0, 73072734);
            string2 = `${inttostring(int26, 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072734);
            IF_SETSIZE(((int27 * int42) / MAX(1, int15)), IF_GETHEIGHT(73072739), 0, 0, 73072739);
            string2 = `${inttostring(int27, 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072739);
            IF_SETSIZE(((int28 * int42) / MAX(1, int16)), IF_GETHEIGHT(73072744), 0, 0, 73072744);
            string2 = `${inttostring(int28, 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072744);
            IF_SETSIZE(((int29 * int42) / MAX(1, int17)), IF_GETHEIGHT(73072749), 0, 0, 73072749);
            string2 = `${inttostring(int29, 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072749);
            IF_SETSIZE(((int30 * int42) / MAX(1, int18)), IF_GETHEIGHT(73072754), 0, 0, 73072754);
            string2 = `${inttostring(int30, 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072754);
            IF_SETSIZE(((int31 * int42) / MAX(1, int19)), IF_GETHEIGHT(73072762), 0, 0, 73072762);
            string2 = `${inttostring(int31, 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072762);
            IF_SETPOSITION(((IF_GETX(73072734) + IF_GETWIDTH(73072734)) + 1), 0, 0, 1, 73072735);
            IF_SETPOSITION(((IF_GETX(73072739) + IF_GETWIDTH(73072739)) + 1), 0, 0, 1, 73072740);
            IF_SETPOSITION(((IF_GETX(73072744) + IF_GETWIDTH(73072744)) + 1), 0, 0, 1, 73072745);
            IF_SETPOSITION(((IF_GETX(73072749) + IF_GETWIDTH(73072749)) + 1), 0, 0, 1, 73072750);
            IF_SETPOSITION(((IF_GETX(73072754) + IF_GETWIDTH(73072754)) + 1), 0, 0, 1, 73072755);
            IF_SETPOSITION(((IF_GETX(73072762) + IF_GETWIDTH(73072762)) + 1), 0, 0, 1, 73072763);
            IF_SETSIZE(((int32 * int42) / MAX(1, int14)), IF_GETHEIGHT(73072735), 0, 0, 73072735);
            string2 = `${inttostring(int32, 10)}<br>of<br>${inttostring(int14, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072735);
            IF_SETSIZE(((int33 * int42) / MAX(1, int15)), IF_GETHEIGHT(73072740), 0, 0, 73072740);
            string2 = `${inttostring(int33, 10)}<br>of<br>${inttostring(int15, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072740);
            IF_SETSIZE(((int34 * int42) / MAX(1, int16)), IF_GETHEIGHT(73072745), 0, 0, 73072745);
            string2 = `${inttostring(int34, 10)}<br>of<br>${inttostring(int16, 10)}<br>3:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072745);
            IF_SETSIZE(((int35 * int42) / MAX(1, int17)), IF_GETHEIGHT(73072750), 0, 0, 73072750);
            string2 = `${inttostring(int35, 10)}<br>of<br>${inttostring(int17, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072750);
            IF_SETSIZE(((int36 * int42) / MAX(1, int18)), IF_GETHEIGHT(73072755), 0, 0, 73072755);
            string2 = `${inttostring(int36, 10)}<br>of<br>${inttostring(int18, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072755);
            IF_SETSIZE(((int37 * int42) / MAX(1, int19)), IF_GETHEIGHT(73072763), 0, 0, 73072763);
            string2 = `${inttostring(int37, 10)}<br>of<br>${inttostring(int19, 10)}<br>3:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072763);
            IF_SETPOSITION(((IF_GETX(73072735) + IF_GETWIDTH(73072735)) + 1), 0, 0, 1, 73072736);
            IF_SETPOSITION(((IF_GETX(73072740) + IF_GETWIDTH(73072740)) + 1), 0, 0, 1, 73072741);
            IF_SETPOSITION(((IF_GETX(73072745) + IF_GETWIDTH(73072745)) + 1), 0, 0, 1, 73072746);
            IF_SETPOSITION(((IF_GETX(73072750) + IF_GETWIDTH(73072750)) + 1), 0, 0, 1, 73072751);
            IF_SETPOSITION(((IF_GETX(73072755) + IF_GETWIDTH(73072755)) + 1), 0, 0, 1, 73072756);
            IF_SETPOSITION(((IF_GETX(73072763) + IF_GETWIDTH(73072763)) + 1), 0, 0, 1, 73072764);
            IF_SETSIZE((((int42 - (IF_GETWIDTH(73072652) + 1)) - (IF_GETWIDTH(73072734) + 1)) - (IF_GETWIDTH(73072735) + 1)), IF_GETHEIGHT(73072736), 0, 0, 73072736);
            string2 = `${inttostring((int14 - ((int20 + int26) + int32)), 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072736);
            IF_SETSIZE((((int42 - (IF_GETWIDTH(73072738) + 1)) - (IF_GETWIDTH(73072739) + 1)) - (IF_GETWIDTH(73072740) + 1)), IF_GETHEIGHT(73072741), 0, 0, 73072741);
            string2 = `${inttostring((int15 - ((int21 + int27) + int33)), 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072741);
            IF_SETSIZE((((int42 - (IF_GETWIDTH(73072743) + 1)) - (IF_GETWIDTH(73072744) + 1)) - (IF_GETWIDTH(73072745) + 1)), IF_GETHEIGHT(73072746), 0, 0, 73072746);
            string2 = `${inttostring((int16 - ((int22 + int28) + int34)), 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072746);
            IF_SETSIZE((((int42 - (IF_GETWIDTH(73072748) + 1)) - (IF_GETWIDTH(73072749) + 1)) - (IF_GETWIDTH(73072750) + 1)), IF_GETHEIGHT(73072751), 0, 0, 73072751);
            string2 = `${inttostring((int17 - ((int23 + int29) + int35)), 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072751);
            IF_SETSIZE((((int42 - (IF_GETWIDTH(73072753) + 1)) - (IF_GETWIDTH(73072754) + 1)) - (IF_GETWIDTH(73072755) + 1)), IF_GETHEIGHT(73072756), 0, 0, 73072756);
            string2 = `${inttostring((int18 - ((int24 + int30) + int36)), 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072756);
            IF_SETSIZE((((int42 - (IF_GETWIDTH(73072761) + 1)) - (IF_GETWIDTH(73072762) + 1)) - (IF_GETWIDTH(73072763) + 1)), IF_GETHEIGHT(73072764), 0, 0, 73072764);
            string2 = `${inttostring((int19 - ((int25 + int31) + int37)), 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072764);
            string2 = `${inttostring(int26, 10)} available<br>${inttostring(int32, 10)} from wildcard<br>${inttostring((int14 - (int26 + int32)), 10)} shortfall`;
            if ((int14 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 7));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072647);
            };
            string2 = `${inttostring(int27, 10)} available<br>${inttostring(int33, 10)} from wildcard<br>${inttostring((int15 - (int27 + int33)), 10)} shortfall`;
            if ((int15 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 44));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072684);
            };
            string2 = `${inttostring(int28, 10)} available<br>${inttostring(int34, 10)} from wildcard<br>${inttostring((int16 - (int28 + int34)), 10)} shortfall`;
            if ((int16 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 81));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072721);
            };
            string2 = `${inttostring(int29, 10)} available<br>${inttostring(int35, 10)} from wildcard<br>${inttostring((int17 - (int29 + int35)), 10)} shortfall`;
            if ((int17 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 85));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072725);
            };
            string2 = `${inttostring(int30, 10)} available<br>${inttostring(int36, 10)} from wildcard<br>${inttostring((int18 - (int30 + int36)), 10)} shortfall`;
            if ((int18 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 89));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072729);
            };
            string2 = `${inttostring(int31, 10)} available<br>${inttostring(int37, 10)} from wildcard<br>${inttostring((int19 - (int31 + int37)), 10)} shortfall`;
            if ((int19 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 93));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 73072733);
            };
        };
        IF_SETTEXT(string1, comp(1115, 79));
    };
    return;
}