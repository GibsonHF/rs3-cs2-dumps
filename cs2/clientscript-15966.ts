//
function script15966(int0: component, int1: int, int2: int, int3: dbrow, int4: int, int5: unknown_int, int6: boolean): [int, int] {
    var string0 = script20494(int3, int5);
    if ((STRING_LENGTH(string0) == 0)) {
        return [int1, -10];
    };
    var int7 = script20495(int3, int5);
    var int8 = 0;
    var int9 = 0;
    [int8, int9] = script20496(int3, int5);
    if (((int8 <= 0) && (int9 <= 0))) {
        [int8, int9] = script17669(int5, int7);
    };
    var int10 = SCALE(IF_GETWIDTH(int0), 16384, 7373);
    var int11 = 0;
    switch (int5) {
        case 4: {
            int11 = script20497(int3);
            if ((int11 == 0)) {
                script2996(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, 4128 as dbrow);
                CC_SETONVARTRANSMIT(callback());
                CC_SETCOLOUR(16777215);
                CC_SETTRANS(128);
            };
            script2995(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, int3, string0);
            CC_SETONVARTRANSMIT(callback());
            int11 = script11432(CC_GETFONTMETRICS());
            if ((int11 > int9)) {
                int9 = int11;
                CC_SETSIZE(7373, int9, 2, 0);
            };
            break;
        }
        case 3: {
            script2996(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, int3);
            CC_SETONVARTRANSMIT(callback());
            script2995(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, 2100, string0);
            break;
        }
        case 10:
        case 1000: {
            if ((int8 > 0)) {
                script7852(int0, int1++, 0, int2, int4, 0, int8, int9, 0, 0, int3, "");
                CC_SETONVARTRANSMIT(callback());
                CC_SETENABLED(int6);
                script2995(int0, int1++, int8, int2, int4, 0, (SCALE(IF_GETWIDTH(int0), 16384, 7373) - int8), int9, 0, 0, 2100, string0);
                CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            } else {
                script7852(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, int3, string0);
                CC_SETONVARTRANSMIT(callback());
                CC_SETENABLED(int6);
                CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            };
            break;
        }
        case 12: {
            script7874(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, int3, string0);
            CC_SETENABLED(int6);
            CC_SETONVARTRANSMIT(callback());
            break;
        }
        case 13: {
            script2995(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, 2100 as dbrow, string0);
            int11 = (5 + script11432(CC_GETFONTMETRICS()));
            CC_SETSIZE(7373, int11, 2, 0);
            var int2 = (int2 + int11);
            script7939(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, int3);
            CC_SETENABLED(int6);
            CC_SETONVARTRANSMIT(callback());
            int9 = (int9 + int11);
            break;
        }
        case 16: {
            script7895(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, int3);
            CC_SETENABLED(int6);
            CC_SETONVARTRANSMIT(callback());
            CC_LIST_ADDENTRY(0, `${string0} (Entry 1)`, -1);
            CC_LIST_ADDENTRY(1, `${string0} (Entry 2)`, -1);
            CC_LIST_ADDENTRY(2, `${string0} (Entry 3)`, -1);
            CC_LIST_ADDENTRY(3, `${string0} (Entry 4)`, -1);
            break;
        }
        case 14: {
            script2995(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, 2100 as dbrow, string0);
            int11 = (5 + script11432(CC_GETFONTMETRICS()));
            CC_SETSIZE(7373, int11, 2, 0);
            int2 = (int2 + int11);
            script17652(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, int3, int6, 1, 10, 5);
            CC_SETONVARTRANSMIT(callback());
            int9 = (int9 + int11);
            break;
        }
        case 17: {
            script17590(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, int3);
            CC_SETENABLED(int6);
            CC_SETONVARTRANSMIT(callback());
            CC_COMBO_ADDENTRY(0, `${string0} (Entry 1)`);
            CC_COMBO_ADDENTRY(1, `${string0} (Entry 2)`);
            CC_COMBO_ADDENTRY(2, `${string0} (Entry 3)`);
            CC_COMBO_ADDENTRY(3, `${string0} (Entry 4)`);
            CC_COMBO_SELECT(0, 0);
            break;
        }
        case 18: {
            script17605(int0, int1++, 0, (int2 + 40), int4, 0, 7373, (int9 - 40), 2, 0, int3, 3, 7989);
            CC_SETENABLED(int6);
            CC_SETONVARTRANSMIT(callback());
            stack((int1 + 1));
            stack(IF_GETNEXTCATEGORYSUBID((int1 + 1), int0));
            unk11167();
            CC_SETPOSITION(0, int2, int4, 0);
            CC_SETSIZE(7373, 30, 2, 0);
            CC_SETONVARTRANSMIT(callback());
            script17667(int0, string0, 0, (int1 - 1), (int1 + 1));
            script17667(int0, string0, 1, (int1 - 1), (int1 + 1));
            script17667(int0, string0, 2, (int1 - 1), (int1 + 1));
            script17618(int0, 0, (int1 - 1), 1);
            break;
        }
        case 20: {
            script17570(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, int3);
            CC_SETENABLED(int6);
            CC_SETONVARTRANSMIT(callback());
            stack(0);
            stack(`${string0} (Entry 1)`);
            unk11166();
            stack(1);
            stack(`${string0} (Entry 2)`);
            unk11166();
            stack(2);
            stack(`${string0} (Entry 3)`);
            unk11166();
            stack(3);
            stack(`${string0} (Entry 4)`);
            unk11166();
            break;
        }
        case 21: {
            script17584(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, int3, 5);
            CC_SETENABLED(int6);
            CC_SETONVARTRANSMIT(callback());
            script17666(int0, string0, 0, (int1 - 1), (int1 + 1));
            script17666(int0, string0, 1, (int1 - 1), (int1 + 1));
            script17666(int0, string0, 2, (int1 - 1), (int1 + 1));
            script17666(int0, string0, 3, (int1 - 1), (int1 + 1));
            script17666(int0, string0, 4, (int1 - 1), (int1 + 1));
            script17589(int0, 0, (int1 - 1), 1);
            break;
        }
        case 22: {
            script17634(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, int3);
            CC_SETENABLED(int6);
            CC_SETONVARTRANSMIT(callback());
            stack(0);
            stack(`${string0} (Entry 1)`);
            CC_RADIOGROUP_ADDOPTION();
            stack(1);
            stack(`${string0} (Entry 2)`);
            CC_RADIOGROUP_ADDOPTION();
            stack(2);
            stack(`${string0} (Entry 3)`);
            CC_RADIOGROUP_ADDOPTION();
            stack(3);
            stack(`${string0} (Entry 4)`);
            CC_RADIOGROUP_ADDOPTION();
            break;
        }
        case 23:
        case 1001:
        case 1002:
        case 1003:
        case 1004: {
            script17600(int0, int1++, 0, int2, int4, 0, 7373, int9, 2, 0, int3, "Title");
            CC_SETENABLED(int6);
            CC_SETONVARTRANSMIT(callback());
            script10033(0, int1++, 0, 0, 0, 0, 0, 0, 1, 1, 4128);
            CC_SETCOLOUR(65280);
            CC_SETFILL(0);
            CC_SETONVARTRANSMIT(callback());
            if ((int5 != 23)) {
                string0 = `${string0}<br>Child content area (green box) offset automatically for child components.`;
            };
            script10485(0, int1++, 0, 0, 0, 0, 0, 0, 1, 1, 2100 as dbrow, string0);
            break;
        }
        case 24: {
            script2996(int0, int1++, 0, int2, int4, 0, int9, int9, 0, 0, 4128 as dbrow);
            CC_SETONVARTRANSMIT(callback());
            CC_SETCOLOUR(65535);
            if ((int6 == 0)) {
                script17619(int0, int1++, 0, int2, int4, 0, int9, int9, 0, 0, int3, 10000, 3);
            } else {
                script17619(int0, int1++, 0, int2, int4, 0, int9, int9, 0, 0, int3, 10000, 1);
            };
            CC_SETONVARTRANSMIT(callback());
            CC_SETONTIMER(callback(script17668, -2147483645, -2147483643, string0, int6));
            script2995(int0, int1++, (int9 + 5), int2, int4, 0, (int10 - int9), int9, 0, 0, 2100, string0);
            break;
        }
    };
    return [int1, int9];
}