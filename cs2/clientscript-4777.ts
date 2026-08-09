//
function script4777(int0: number, int1: number, int2: number): void {
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
        IF_SETGRAPHIC(int3, comp(1115, 36));
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
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 12));
            IF_SETSIZE(((int21 * int42) / MAX(1, int15)), IF_GETHEIGHT(comp(1115, 98)), 0, 0, comp(1115, 98));
            string2 = `${inttostring(int21, 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 98));
            IF_SETSIZE(((int22 * int42) / MAX(1, int16)), IF_GETHEIGHT(comp(1115, 103)), 0, 0, comp(1115, 103));
            string2 = `${inttostring(int22, 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 103));
            IF_SETSIZE(((int23 * int42) / MAX(1, int17)), IF_GETHEIGHT(comp(1115, 108)), 0, 0, comp(1115, 108));
            string2 = `${inttostring(int23, 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 108));
            IF_SETSIZE(((int24 * int42) / MAX(1, int18)), IF_GETHEIGHT(comp(1115, 113)), 0, 0, comp(1115, 113));
            string2 = `${inttostring(int24, 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 113));
            IF_SETSIZE(((int25 * int42) / MAX(1, int19)), IF_GETHEIGHT(comp(1115, 121)), 0, 0, comp(1115, 121));
            string2 = `${inttostring(int25, 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 121));
            IF_SETPOSITION(((IF_GETX(comp(1115, 12)) + IF_GETWIDTH(comp(1115, 12))) + 1), 0, 0, 1, comp(1115, 94));
            IF_SETPOSITION(((IF_GETX(comp(1115, 98)) + IF_GETWIDTH(comp(1115, 98))) + 1), 0, 0, 1, comp(1115, 99));
            IF_SETPOSITION(((IF_GETX(comp(1115, 103)) + IF_GETWIDTH(comp(1115, 103))) + 1), 0, 0, 1, comp(1115, 104));
            IF_SETPOSITION(((IF_GETX(comp(1115, 108)) + IF_GETWIDTH(comp(1115, 108))) + 1), 0, 0, 1, comp(1115, 109));
            IF_SETPOSITION(((IF_GETX(comp(1115, 113)) + IF_GETWIDTH(comp(1115, 113))) + 1), 0, 0, 1, comp(1115, 114));
            IF_SETPOSITION(((IF_GETX(comp(1115, 121)) + IF_GETWIDTH(comp(1115, 121))) + 1), 0, 0, 1, comp(1115, 122));
            IF_SETSIZE(((int26 * int42) / MAX(1, int14)), IF_GETHEIGHT(comp(1115, 94)), 0, 0, comp(1115, 94));
            string2 = `${inttostring(int26, 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 94));
            IF_SETSIZE(((int27 * int42) / MAX(1, int15)), IF_GETHEIGHT(comp(1115, 99)), 0, 0, comp(1115, 99));
            string2 = `${inttostring(int27, 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 99));
            IF_SETSIZE(((int28 * int42) / MAX(1, int16)), IF_GETHEIGHT(comp(1115, 104)), 0, 0, comp(1115, 104));
            string2 = `${inttostring(int28, 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 104));
            IF_SETSIZE(((int29 * int42) / MAX(1, int17)), IF_GETHEIGHT(comp(1115, 109)), 0, 0, comp(1115, 109));
            string2 = `${inttostring(int29, 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 109));
            IF_SETSIZE(((int30 * int42) / MAX(1, int18)), IF_GETHEIGHT(comp(1115, 114)), 0, 0, comp(1115, 114));
            string2 = `${inttostring(int30, 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 114));
            IF_SETSIZE(((int31 * int42) / MAX(1, int19)), IF_GETHEIGHT(comp(1115, 122)), 0, 0, comp(1115, 122));
            string2 = `${inttostring(int31, 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 122));
            IF_SETPOSITION(((IF_GETX(comp(1115, 94)) + IF_GETWIDTH(comp(1115, 94))) + 1), 0, 0, 1, comp(1115, 95));
            IF_SETPOSITION(((IF_GETX(comp(1115, 99)) + IF_GETWIDTH(comp(1115, 99))) + 1), 0, 0, 1, comp(1115, 100));
            IF_SETPOSITION(((IF_GETX(comp(1115, 104)) + IF_GETWIDTH(comp(1115, 104))) + 1), 0, 0, 1, comp(1115, 105));
            IF_SETPOSITION(((IF_GETX(comp(1115, 109)) + IF_GETWIDTH(comp(1115, 109))) + 1), 0, 0, 1, comp(1115, 110));
            IF_SETPOSITION(((IF_GETX(comp(1115, 114)) + IF_GETWIDTH(comp(1115, 114))) + 1), 0, 0, 1, comp(1115, 115));
            IF_SETPOSITION(((IF_GETX(comp(1115, 122)) + IF_GETWIDTH(comp(1115, 122))) + 1), 0, 0, 1, comp(1115, 123));
            IF_SETSIZE(((int32 * int42) / MAX(1, int14)), IF_GETHEIGHT(comp(1115, 95)), 0, 0, comp(1115, 95));
            string2 = `${inttostring(int32, 10)}<br>of<br>${inttostring(int14, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 95));
            IF_SETSIZE(((int33 * int42) / MAX(1, int15)), IF_GETHEIGHT(comp(1115, 100)), 0, 0, comp(1115, 100));
            string2 = `${inttostring(int33, 10)}<br>of<br>${inttostring(int15, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 100));
            IF_SETSIZE(((int34 * int42) / MAX(1, int16)), IF_GETHEIGHT(comp(1115, 105)), 0, 0, comp(1115, 105));
            string2 = `${inttostring(int34, 10)}<br>of<br>${inttostring(int16, 10)}<br>3:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 105));
            IF_SETSIZE(((int35 * int42) / MAX(1, int17)), IF_GETHEIGHT(comp(1115, 110)), 0, 0, comp(1115, 110));
            string2 = `${inttostring(int35, 10)}<br>of<br>${inttostring(int17, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 110));
            IF_SETSIZE(((int36 * int42) / MAX(1, int18)), IF_GETHEIGHT(comp(1115, 115)), 0, 0, comp(1115, 115));
            string2 = `${inttostring(int36, 10)}<br>of<br>${inttostring(int18, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 115));
            IF_SETSIZE(((int37 * int42) / MAX(1, int19)), IF_GETHEIGHT(comp(1115, 123)), 0, 0, comp(1115, 123));
            string2 = `${inttostring(int37, 10)}<br>of<br>${inttostring(int19, 10)}<br>3:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 123));
            IF_SETPOSITION(((IF_GETX(comp(1115, 95)) + IF_GETWIDTH(comp(1115, 95))) + 1), 0, 0, 1, comp(1115, 96));
            IF_SETPOSITION(((IF_GETX(comp(1115, 100)) + IF_GETWIDTH(comp(1115, 100))) + 1), 0, 0, 1, comp(1115, 101));
            IF_SETPOSITION(((IF_GETX(comp(1115, 105)) + IF_GETWIDTH(comp(1115, 105))) + 1), 0, 0, 1, comp(1115, 106));
            IF_SETPOSITION(((IF_GETX(comp(1115, 110)) + IF_GETWIDTH(comp(1115, 110))) + 1), 0, 0, 1, comp(1115, 111));
            IF_SETPOSITION(((IF_GETX(comp(1115, 115)) + IF_GETWIDTH(comp(1115, 115))) + 1), 0, 0, 1, comp(1115, 116));
            IF_SETPOSITION(((IF_GETX(comp(1115, 123)) + IF_GETWIDTH(comp(1115, 123))) + 1), 0, 0, 1, comp(1115, 124));
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 12)) + 1)) - (IF_GETWIDTH(comp(1115, 94)) + 1)) - (IF_GETWIDTH(comp(1115, 95)) + 1)), IF_GETHEIGHT(comp(1115, 96)), 0, 0, comp(1115, 96));
            string2 = `${inttostring((int14 - ((int20 + int26) + int32)), 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 96));
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 98)) + 1)) - (IF_GETWIDTH(comp(1115, 99)) + 1)) - (IF_GETWIDTH(comp(1115, 100)) + 1)), IF_GETHEIGHT(comp(1115, 101)), 0, 0, comp(1115, 101));
            string2 = `${inttostring((int15 - ((int21 + int27) + int33)), 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 101));
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 103)) + 1)) - (IF_GETWIDTH(comp(1115, 104)) + 1)) - (IF_GETWIDTH(comp(1115, 105)) + 1)), IF_GETHEIGHT(comp(1115, 106)), 0, 0, comp(1115, 106));
            string2 = `${inttostring((int16 - ((int22 + int28) + int34)), 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 106));
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 108)) + 1)) - (IF_GETWIDTH(comp(1115, 109)) + 1)) - (IF_GETWIDTH(comp(1115, 110)) + 1)), IF_GETHEIGHT(comp(1115, 111)), 0, 0, comp(1115, 111));
            string2 = `${inttostring((int17 - ((int23 + int29) + int35)), 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 111));
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 113)) + 1)) - (IF_GETWIDTH(comp(1115, 114)) + 1)) - (IF_GETWIDTH(comp(1115, 115)) + 1)), IF_GETHEIGHT(comp(1115, 116)), 0, 0, comp(1115, 116));
            string2 = `${inttostring((int18 - ((int24 + int30) + int36)), 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 116));
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 121)) + 1)) - (IF_GETWIDTH(comp(1115, 122)) + 1)) - (IF_GETWIDTH(comp(1115, 123)) + 1)), IF_GETHEIGHT(comp(1115, 124)), 0, 0, comp(1115, 124));
            string2 = `${inttostring((int19 - ((int25 + int31) + int37)), 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 124));
            string2 = `${inttostring(int20, 10)} paid<br>${inttostring(int26, 10)} available<br>${inttostring(int32, 10)} from wildcard<br>${inttostring((int14 - ((int20 + int26) + int32)), 10)} shortfall`;
            if ((int14 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 7));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 7));
            };
            string2 = `${inttostring(int21, 10)} paid<br>${inttostring(int27, 10)} available<br>${inttostring(int33, 10)} from wildcard<br>${inttostring((int15 - ((int21 + int27) + int33)), 10)} shortfall`;
            if ((int15 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 44));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 44));
            };
            string2 = `${inttostring(int22, 10)} paid<br>${inttostring(int28, 10)} available<br>${inttostring(int34, 10)} from wildcard<br>${inttostring((int16 - ((int22 + int28) + int34)), 10)} shortfall`;
            if ((int16 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 81));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 81));
            };
            string2 = `${inttostring(int23, 10)} paid<br>${inttostring(int29, 10)} available<br>${inttostring(int35, 10)} from wildcard<br>${inttostring((int17 - ((int23 + int29) + int35)), 10)} shortfall`;
            if ((int17 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 85));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 85));
            };
            string2 = `${inttostring(int24, 10)} paid<br>${inttostring(int30, 10)} available<br>${inttostring(int36, 10)} from wildcard<br>${inttostring((int18 - ((int24 + int30) + int36)), 10)} shortfall`;
            if ((int18 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 89));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 89));
            };
            string2 = `${inttostring(int25, 10)} paid<br>${inttostring(int31, 10)} available<br>${inttostring(int37, 10)} from wildcard<br>${inttostring((int19 - ((int25 + int31) + int37)), 10)} shortfall`;
            if ((int19 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 93));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 93));
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
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 12));
            IF_SETSIZE(((int21 * int42) / MAX(1, int15)), IF_GETHEIGHT(comp(1115, 98)), 0, 0, comp(1115, 98));
            string2 = `${inttostring(int21, 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 98));
            IF_SETSIZE(((int22 * int42) / MAX(1, int16)), IF_GETHEIGHT(comp(1115, 103)), 0, 0, comp(1115, 103));
            string2 = `${inttostring(int22, 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 103));
            IF_SETSIZE(((int23 * int42) / MAX(1, int17)), IF_GETHEIGHT(comp(1115, 108)), 0, 0, comp(1115, 108));
            string2 = `${inttostring(int23, 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 108));
            IF_SETSIZE(((int24 * int42) / MAX(1, int18)), IF_GETHEIGHT(comp(1115, 113)), 0, 0, comp(1115, 113));
            string2 = `${inttostring(int24, 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 113));
            IF_SETSIZE(((int25 * int42) / MAX(1, int19)), IF_GETHEIGHT(comp(1115, 121)), 0, 0, comp(1115, 121));
            string2 = `${inttostring(int25, 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 121));
            IF_SETPOSITION(((IF_GETX(comp(1115, 12)) + IF_GETWIDTH(comp(1115, 12))) + 1), 0, 0, 1, comp(1115, 94));
            IF_SETPOSITION(((IF_GETX(comp(1115, 98)) + IF_GETWIDTH(comp(1115, 98))) + 1), 0, 0, 1, comp(1115, 99));
            IF_SETPOSITION(((IF_GETX(comp(1115, 103)) + IF_GETWIDTH(comp(1115, 103))) + 1), 0, 0, 1, comp(1115, 104));
            IF_SETPOSITION(((IF_GETX(comp(1115, 108)) + IF_GETWIDTH(comp(1115, 108))) + 1), 0, 0, 1, comp(1115, 109));
            IF_SETPOSITION(((IF_GETX(comp(1115, 113)) + IF_GETWIDTH(comp(1115, 113))) + 1), 0, 0, 1, comp(1115, 114));
            IF_SETPOSITION(((IF_GETX(comp(1115, 121)) + IF_GETWIDTH(comp(1115, 121))) + 1), 0, 0, 1, comp(1115, 122));
            IF_SETSIZE(((int26 * int42) / MAX(1, int14)), IF_GETHEIGHT(comp(1115, 94)), 0, 0, comp(1115, 94));
            string2 = `${inttostring(int26, 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 94));
            IF_SETSIZE(((int27 * int42) / MAX(1, int15)), IF_GETHEIGHT(comp(1115, 99)), 0, 0, comp(1115, 99));
            string2 = `${inttostring(int27, 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 99));
            IF_SETSIZE(((int28 * int42) / MAX(1, int16)), IF_GETHEIGHT(comp(1115, 104)), 0, 0, comp(1115, 104));
            string2 = `${inttostring(int28, 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 104));
            IF_SETSIZE(((int29 * int42) / MAX(1, int17)), IF_GETHEIGHT(comp(1115, 109)), 0, 0, comp(1115, 109));
            string2 = `${inttostring(int29, 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 109));
            IF_SETSIZE(((int30 * int42) / MAX(1, int18)), IF_GETHEIGHT(comp(1115, 114)), 0, 0, comp(1115, 114));
            string2 = `${inttostring(int30, 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 114));
            IF_SETSIZE(((int31 * int42) / MAX(1, int19)), IF_GETHEIGHT(comp(1115, 122)), 0, 0, comp(1115, 122));
            string2 = `${inttostring(int31, 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 122));
            IF_SETPOSITION(((IF_GETX(comp(1115, 94)) + IF_GETWIDTH(comp(1115, 94))) + 1), 0, 0, 1, comp(1115, 95));
            IF_SETPOSITION(((IF_GETX(comp(1115, 99)) + IF_GETWIDTH(comp(1115, 99))) + 1), 0, 0, 1, comp(1115, 100));
            IF_SETPOSITION(((IF_GETX(comp(1115, 104)) + IF_GETWIDTH(comp(1115, 104))) + 1), 0, 0, 1, comp(1115, 105));
            IF_SETPOSITION(((IF_GETX(comp(1115, 109)) + IF_GETWIDTH(comp(1115, 109))) + 1), 0, 0, 1, comp(1115, 110));
            IF_SETPOSITION(((IF_GETX(comp(1115, 114)) + IF_GETWIDTH(comp(1115, 114))) + 1), 0, 0, 1, comp(1115, 115));
            IF_SETPOSITION(((IF_GETX(comp(1115, 122)) + IF_GETWIDTH(comp(1115, 122))) + 1), 0, 0, 1, comp(1115, 123));
            IF_SETSIZE(((int32 * int42) / MAX(1, int14)), IF_GETHEIGHT(comp(1115, 95)), 0, 0, comp(1115, 95));
            string2 = `${inttostring(int32, 10)}<br>of<br>${inttostring(int14, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 95));
            IF_SETSIZE(((int33 * int42) / MAX(1, int15)), IF_GETHEIGHT(comp(1115, 100)), 0, 0, comp(1115, 100));
            string2 = `${inttostring(int33, 10)}<br>of<br>${inttostring(int15, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 100));
            IF_SETSIZE(((int34 * int42) / MAX(1, int16)), IF_GETHEIGHT(comp(1115, 105)), 0, 0, comp(1115, 105));
            string2 = `${inttostring(int34, 10)}<br>of<br>${inttostring(int16, 10)}<br>3:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 105));
            IF_SETSIZE(((int35 * int42) / MAX(1, int17)), IF_GETHEIGHT(comp(1115, 110)), 0, 0, comp(1115, 110));
            string2 = `${inttostring(int35, 10)}<br>of<br>${inttostring(int17, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 110));
            IF_SETSIZE(((int36 * int42) / MAX(1, int18)), IF_GETHEIGHT(comp(1115, 115)), 0, 0, comp(1115, 115));
            string2 = `${inttostring(int36, 10)}<br>of<br>${inttostring(int18, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 115));
            IF_SETSIZE(((int37 * int42) / MAX(1, int19)), IF_GETHEIGHT(comp(1115, 123)), 0, 0, comp(1115, 123));
            string2 = `${inttostring(int37, 10)}<br>of<br>${inttostring(int19, 10)}<br>3:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 123));
            IF_SETPOSITION(((IF_GETX(comp(1115, 95)) + IF_GETWIDTH(comp(1115, 95))) + 1), 0, 0, 1, comp(1115, 96));
            IF_SETPOSITION(((IF_GETX(comp(1115, 100)) + IF_GETWIDTH(comp(1115, 100))) + 1), 0, 0, 1, comp(1115, 101));
            IF_SETPOSITION(((IF_GETX(comp(1115, 105)) + IF_GETWIDTH(comp(1115, 105))) + 1), 0, 0, 1, comp(1115, 106));
            IF_SETPOSITION(((IF_GETX(comp(1115, 110)) + IF_GETWIDTH(comp(1115, 110))) + 1), 0, 0, 1, comp(1115, 111));
            IF_SETPOSITION(((IF_GETX(comp(1115, 115)) + IF_GETWIDTH(comp(1115, 115))) + 1), 0, 0, 1, comp(1115, 116));
            IF_SETPOSITION(((IF_GETX(comp(1115, 123)) + IF_GETWIDTH(comp(1115, 123))) + 1), 0, 0, 1, comp(1115, 124));
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 12)) + 1)) - (IF_GETWIDTH(comp(1115, 94)) + 1)) - (IF_GETWIDTH(comp(1115, 95)) + 1)), IF_GETHEIGHT(comp(1115, 96)), 0, 0, comp(1115, 96));
            string2 = `${inttostring((int14 - ((int20 + int26) + int32)), 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 96));
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 98)) + 1)) - (IF_GETWIDTH(comp(1115, 99)) + 1)) - (IF_GETWIDTH(comp(1115, 100)) + 1)), IF_GETHEIGHT(comp(1115, 101)), 0, 0, comp(1115, 101));
            string2 = `${inttostring((int15 - ((int21 + int27) + int33)), 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 101));
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 103)) + 1)) - (IF_GETWIDTH(comp(1115, 104)) + 1)) - (IF_GETWIDTH(comp(1115, 105)) + 1)), IF_GETHEIGHT(comp(1115, 106)), 0, 0, comp(1115, 106));
            string2 = `${inttostring((int16 - ((int22 + int28) + int34)), 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 106));
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 108)) + 1)) - (IF_GETWIDTH(comp(1115, 109)) + 1)) - (IF_GETWIDTH(comp(1115, 110)) + 1)), IF_GETHEIGHT(comp(1115, 111)), 0, 0, comp(1115, 111));
            string2 = `${inttostring((int17 - ((int23 + int29) + int35)), 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 111));
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 113)) + 1)) - (IF_GETWIDTH(comp(1115, 114)) + 1)) - (IF_GETWIDTH(comp(1115, 115)) + 1)), IF_GETHEIGHT(comp(1115, 116)), 0, 0, comp(1115, 116));
            string2 = `${inttostring((int18 - ((int24 + int30) + int36)), 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 116));
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 121)) + 1)) - (IF_GETWIDTH(comp(1115, 122)) + 1)) - (IF_GETWIDTH(comp(1115, 123)) + 1)), IF_GETHEIGHT(comp(1115, 124)), 0, 0, comp(1115, 124));
            string2 = `${inttostring((int19 - ((int25 + int31) + int37)), 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 124));
            string2 = `${inttostring(int26, 10)} available<br>${inttostring(int32, 10)} from wildcard<br>${inttostring((int14 - (int26 + int32)), 10)} shortfall`;
            if ((int14 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 7));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 7));
            };
            string2 = `${inttostring(int27, 10)} available<br>${inttostring(int33, 10)} from wildcard<br>${inttostring((int15 - (int27 + int33)), 10)} shortfall`;
            if ((int15 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 44));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 44));
            };
            string2 = `${inttostring(int28, 10)} available<br>${inttostring(int34, 10)} from wildcard<br>${inttostring((int16 - (int28 + int34)), 10)} shortfall`;
            if ((int16 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 81));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 81));
            };
            string2 = `${inttostring(int29, 10)} available<br>${inttostring(int35, 10)} from wildcard<br>${inttostring((int17 - (int29 + int35)), 10)} shortfall`;
            if ((int17 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 85));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 85));
            };
            string2 = `${inttostring(int30, 10)} available<br>${inttostring(int36, 10)} from wildcard<br>${inttostring((int18 - (int30 + int36)), 10)} shortfall`;
            if ((int18 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 89));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 89));
            };
            string2 = `${inttostring(int31, 10)} available<br>${inttostring(int37, 10)} from wildcard<br>${inttostring((int19 - (int31 + int37)), 10)} shortfall`;
            if ((int19 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 93));
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 93));
            };
        };
        IF_SETTEXT(string1, comp(1115, 79));
    };
    return;
}