//
function script4981(int0: int, int1: int, int2: unknown_int, int3: unknown_int, int4: int): void {
    if (((int2 == -1) || (int3 == -1))) {
        return;
    };
    if (((int1 < 0) || (int1 > 7))) {
        return;
    };
    var int5 = 0;
    switch (int0) {
        case 17:
        case 18:
        case 19:
        case 1: {
            int5 = 1;
            break;
        }
    };
    var int6 = script5169(int0);
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1 as struct;
    var int11 = -1;
    var int12 = -1;
    var int13 = -1 as struct;
    var int14 = -1;
    var int15 = -1;
    var int16 = -1 as struct;
    var int17 = 0;
    var int18 = -1;
    var int19 = -1;
    var int20 = 0;
    var string0 = "";
    var int21 = 1;
    var string1 = "";
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var string2 = "This building cannot be upgraded.";
    var string3 = "This building cannot be downgraded.";
    var string4 = "There is no upgrade to cancel.";
    var string5 = "There is no downgrade to cancel.";
    var string6 = "This building is already marked to be moved.";
    var string7 = "There is no move order to cancel.";
    IF_SETHIDE(true, comp(1261, 159));
    IF_SETHIDE(true, comp(1261, 167));
    IF_SETHIDE(true, comp(1261, 184));
    IF_SETHIDE(true, comp(1261, 192));
    IF_SETHIDE(true, comp(1261, 210));
    IF_SETHIDE(true, comp(1261, 218));
    if (((CLANPROFILE_FIND() == 1) && (unk10986(0) == 1))) {
        int18 = ACTIVECLANSETTINGS_GETAFFINEDSLOT(CHAT_PLAYERNAME_UNFILTERED());
        if ((int18 < 0)) {
            return;
        };
        int19 = ACTIVECLANSETTINGS_GETAFFINEDRANK(int18);
        int22 = (varclan_2132 - DATE_MINUTES());
        if (((int22 < 360) && (int19 < 126))) {
            int23 = 1;
        };
        IF_SETTEXT("", comp(1261, 233));
        if ((int0 == 17)) {
            IF_SETTEXT("Citadel", comp(1261, 122));
        } else if ((int0 == 18)) {
            IF_SETTEXT("Storehouse", comp(1261, 122));
        } else if ((int0 == 19)) {
            IF_SETTEXT("Battlefield", comp(1261, 122));
        } else {
            IF_SETTEXT(enum_getvalue(0, 36, 4287 as cs2enum, int0), comp(1261, 122));
        };
        if ((int4 == 4)) {
            IF_SETTEXT("Dilapidated", comp(1261, 123));
        } else if ((int4 == 3)) {
            IF_SETTEXT("Working", comp(1261, 123));
        } else {
            IF_SETTEXT("Not built", comp(1261, 123));
        };
        stack(script4974(int0));
        stack(82641017);
        IF_SETGRAPHIC();
        int7 = script4948(int0);
        int17 = script4952(int7);
        script4982(int2, int3, int1, int6, int17);
        IF_SETHIDE(0, 82641063);
        if ((int7 > 0)) {
            script4152(comp(1261, 161), "Upgrade");
            int14 = script4961(int7, 1);
            int9 = script4961(int7, 2);
            int11 = script4961(int7, 3);
            if ((script4798(int11) == 1)) {
                int24 = 0;
            } else {
                int24 = 1;
            };
            int15 = script4953(int14);
            int12 = script4953(int11);
            int16 = enum_getvalue(0, 73, 4009 as cs2enum, int14);
            int10 = enum_getvalue(0, 73, 4009 as cs2enum, int9);
            int13 = enum_getvalue(0, 73, 4009 as cs2enum, int11);
            IF_SETHIDE(false, comp(1261, 159));
            script4152(comp(1261, 161), "Upgrade");
            if (((int12 <= 0) && (int15 <= 0))) {
                if ((int1 < 7)) {
                    if ((int24 == 1)) {
                        IF_SETHIDE(true, comp(1261, 159));
                    } else {
                        IF_SETHIDE(false, comp(1261, 159));
                        if ((int11 == 602)) {
                            string2 = "You must cancel the storehouse upgrade to be able to upgrade this.";
                        } else if ((int11 == 603)) {
                            string2 = "You must cancel the battlefield upgrade to be able to upgrade this.";
                        } else {
                            string2 = "You must cancel another skill plot upgrade to be able to upgrade this.";
                        };
                    };
                };
                if ((int1 == 0)) {
                    script4152(comp(1261, 161), "Buy");
                };
            };
            IF_SETHIDE(false, comp(1261, 167));
            if ((int12 > 0)) {
                IF_SETHIDE(true, comp(1261, 167));
            };
            IF_SETHIDE(false, comp(1261, 184));
            if (((int12 <= 0) && ((int1 - int5) > int17))) {
                [int20, string0] = script4723(int0, (int1 - (int17 + 1)));
                if ((int20 == 1)) {
                    IF_SETHIDE(true, comp(1261, 184));
                } else {
                    string3 = string0;
                };
            };
            IF_SETHIDE(false, comp(1261, 192));
            if ((int17 > 0)) {
                IF_SETHIDE(true, comp(1261, 192));
                script4211(comp(1261, 161), 28 as fontmetrics, 15708259, 601926);
            };
            IF_SETHIDE(true, comp(1261, 210));
            IF_SETHIDE(true, comp(1261, 218));
            if ((((int7 == 1) || (int7 == 2)) || (int7 == 3))) {
                IF_SETHIDE(false, comp(1261, 210));
                IF_SETHIDE(false, comp(1261, 218));
                string6 = "This building cannot be moved to another position.";
            };
            int8 = script4978(int7);
            if ((int8 < 4)) {
                int8 = int7;
            };
            if ((int8 != int7)) {
                IF_SETHIDE(false, comp(1261, 210));
                string6 = "This building is already marked to be moved. You can view next week's map to see its new position.";
            };
            if ((((int7 == 1) || (int7 == 2)) || (int7 == 3))) {
                IF_SETHIDE(false, comp(1261, 218));
                string6 = "This building cannot be moved to another position.";
            };
            if ((int8 == int7)) {
                IF_SETHIDE(false, comp(1261, 218));
            };
            if ((int12 > 0)) {
                if ((int1 == 0)) {
                    IF_SETTEXT("This building is marked to<br>be built.", comp(1261, 233));
                } else {
                    IF_SETTEXT("This building is marked to<br>be upgraded.", comp(1261, 233));
                };
                string2 = "This building is already marked for upgrade.";
            } else if ((int17 == 1)) {
                IF_SETTEXT("This building is marked to be downgraded by 1 tier.", comp(1261, 233));
            } else if ((int17 > 1)) {
                IF_SETTEXT(`This building is marked to be downgraded by ${inttostring(int17, 10)} tiers.`, comp(1261, 233));
            } else if ((int1 == 7)) {
                IF_SETTEXT("This building has reached its top tier.", comp(1261, 233));
            } else if ((int1 == 0)) {
                IF_SETTEXT("This building has not yet been bought.", comp(1261, 233));
            };
        } else {
            IF_SETHIDE(false, comp(1261, 210));
            IF_SETHIDE(false, comp(1261, 218));
            string6 = "You have not yet bought this building.";
            int25 = script4799();
            if ((int25 >= 2)) {
                int24 = 0;
                string2 = "You must cancel another skill plot upgrade to be able to upgrade this.";
                IF_SETHIDE(false, comp(1261, 159));
            } else {
                int24 = 1;
                script4152(comp(1261, 161), "Buy");
                IF_SETHIDE(true, comp(1261, 159));
                IF_SETTEXT("Clan builders can buy this<br>in the 'Upgrade' side tab.", comp(1261, 233));
            };
            IF_SETHIDE(false, comp(1261, 167));
            IF_SETHIDE(false, comp(1261, 184));
            IF_SETHIDE(false, comp(1261, 192));
        };
        if ((int23 == 1)) {
            string2 = "The build orders will be executed in less than six hours, so only the owner can make this change.";
            string3 = string2;
            string4 = string2;
            string5 = string2;
            string6 = string2;
            string7 = string2;
            IF_SETHIDE(false, comp(1261, 159));
            IF_SETHIDE(false, comp(1261, 167));
            IF_SETHIDE(false, comp(1261, 184));
            IF_SETHIDE(false, comp(1261, 192));
            IF_SETHIDE(false, comp(1261, 210));
            IF_SETHIDE(false, comp(1261, 218));
        };
        [int21, string1] = script4722(int0, (int1 + 1));
        if ((int21 == 0)) {
            string2 = `This cannot be upgraded because: ${string1}`;
            IF_SETHIDE(false, comp(1261, 159));
        };
        if ((script5145(-1) == 0)) {
            string2 = "You do not have permission from your clan to do that.";
            string4 = "You do not have permission from your clan to do that.";
            IF_SETHIDE(false, comp(1261, 159));
            IF_SETHIDE(false, comp(1261, 167));
            if ((script5147(-1) == 0)) {
                IF_SETHIDE(false, comp(1261, 210));
                IF_SETHIDE(false, comp(1261, 218));
                IF_SETHIDE(false, comp(1261, 218));
                IF_SETHIDE(false, comp(1261, 210));
                string6 = "You do not have permission from your clan to do that.";
                string7 = "You do not have permission from your clan to do that.";
                string6 = "You do not have permission from your clan to do that.";
                string7 = "You do not have permission from your clan to do that.";
            };
        };
        if ((script5147(-1) == 0)) {
            string3 = "You do not have permission from your clan to do that.";
            string5 = "You do not have permission from your clan to do that.";
            IF_SETHIDE(false, comp(1261, 184));
            IF_SETHIDE(false, comp(1261, 192));
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 82641055);
        IF_SETONMOUSEREPEAT(callback(script8799, string4, -2147483645, -2147483643), 82641063);
        IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -2147483643), 82641080);
        IF_SETONMOUSEREPEAT(callback(script8799, string5, -2147483645, -2147483643), 82641088);
        IF_SETONMOUSEREPEAT(callback(script8799, string6, -2147483645, -2147483643), 82641106);
        IF_SETONMOUSEREPEAT(callback(script8799, string7, -2147483645, -2147483643), 82641114);
    };
    return;
}