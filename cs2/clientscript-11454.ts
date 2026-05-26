//
function script11454(): void {
    CC_DELETEALL(106561545);
    CC_DELETEALL(106561546);
    CC_DELETEALL(106561591);
    CC_DELETEALL(106561592);
    CC_DELETEALL(106561538);
    CC_DELETEALL(106561540);
    CC_DELETEALL(106561631);
    CC_DELETEALL(106561632);
    CC_DELETEALL(106561598);
    CC_DELETEALL(106561599);
    CC_DELETEALL(106561613);
    CC_DELETEALL(106561615);
    var int0 = 0;
    var int1 = 0;
    switch (varbitplayer_28118) {
        case 2: {
            int0 = varbitplayer_1675;
            int1 = script11480(530, 0, 30);
            break;
        }
        case 1: {
            break;
        }
        default: {
            return;
        }
    };
    var int2 = varbitplayer_28114;
    var int3 = varbitplayer_28115;
    var int4 = varbitplayer_28116;
    var int5 = varbitplayer_28119;
    var int6 = 0;
    stack(PUSH_CONSTANT_INT[16]("<br><col=", script10495(3)));
    var string0 = `${stack()}${inttostring()}>`;
    var string1 = `Protected Items:${string0}These items are free to reclaim.</col>`;
    var string2 = `Saved Items:${string0}These items compose the base reclaim cost.</col>`;
    var string3 = `Lost Items:${string0}These items are lost upon death.</col>`;
    var string4 = `Beast of Burden Items:${string0}Your familiar will drop the items it is holding.</col>`;
    var string5 = `Always-Kept Items:${string0}These items will remain with you through death.</col>`;
    switch (int0) {
        case 1:
        case 3: {
            int3 = int2;
            int6 = 1;
            string1 = `Protected items:${string0}You save these items automatically.</col>`;
            string3 = `Lost items:${string0}In a dangerous area all of these items will be lost.</col>`;
            break;
        }
        case 2: {
            int2 = int5;
            int3 = int5;
            int4 = int5;
            int1 = 0;
            string1 = `Protected Items:${string0}In a safe area you will keep items upon death.</col>`;
            break;
        }
    };
    if ((((varbitplayer_28118 == 1) && (varbitplayer_52406 == 1)) || (varbitplayer_52406 == 2))) {
        IF_SETSIZE(288, (5 + IF_GETHEIGHT(106561579)), 1, 1, 106561560);
        IF_SETSIZE(30, (30 + IF_GETHEIGHT(106561579)), 1, 1, 106561588);
        IF_SETHIDE(0, 106561579);
        if ((varbitplayer_52406 == 2)) {
            IF_SETHIDE(0, 106561580);
            IF_SETHIDE(0, 106561581);
        } else {
            IF_SETHIDE(1, 106561580);
            IF_SETHIDE(1, 106561581);
        };
    } else {
        IF_SETSIZE(288, 5, 1, 1, 106561560);
        IF_SETSIZE(30, 30, 1, 1, 106561588);
        IF_SETHIDE(1, 106561579);
    };
    script17088(int0);
    var long0 = 0n;
    var long1 = 0n;
    var long2 = 0n;
    var long3 = 0n;
    var long4 = 0n;
    var long5 = 0n;
    var int7 = int2;
    var int8 = (int3 - int2);
    var int9 = (int4 - int3);
    var int10 = (int5 - int4);
    define_array[33]((5 + 1));
    define_array[65536]((5 + 1));
    var int11 = -1;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = -1;
    var int16 = 0;
    var int17 = -1;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = int9;
    if ((int6 == 1)) {
        while ((int22 < int7)) {
            int17 = INV_GETOBJ(676, int14);
            int18 = INV_GETNUM(676, int14);
            pop_array(int22, int17);
            pop_array[1](int22, int14);
            int13 = (int13 + 1);
            if (((int18 - int13) == 0)) {
                int13 = 0;
                int14 = (int14 + 1);
            };
            int22 = (int22 + 1);
        };
        if (((int13 > 0) && ((int18 - int13) > 0))) {
            int11 = int17;
            int12 = (int18 - int13);
            int15 = int14;
            int16 = 1;
        };
        int23 = (int9 + (int7 - int14));
    };
    var int24 = 0;
    var int25 = script17093();
    if ((varbitplayer_52406 == 0)) {
        IF_SETHIDE(0, 106561577);
        IF_SETHIDE(1, 106561566);
    } else if ((varbitplayer_52406 == 2)) {
        IF_SETHIDE(1, 106561577);
        IF_SETHIDE(0, 106561566);
        int24 = script17090(106561568, -1, -1, int24, int25, (INV_SIZE(930) - INV_FREESPACE(930)), "");
        IF_SETHIDE(1, 106561569);
        IF_SETHIDE(1, 106561570);
        IF_SETHIDE(1, 106561571);
        IF_SETHIDE(1, 106561572);
        IF_SETHIDE(1, 106561573);
    } else {
        IF_SETHIDE(1, 106561577);
        IF_SETHIDE(0, 106561566);
        int24 = script17090(106561569, 106561543, 106561544, int24, int25, int7, string1);
        int24 = script17090(106561570, 106561589, 106561590, int24, int25, int8, string2);
        int24 = script17090(106561571, 106561536, 106561537, int24, int25, int23, string3);
        int24 = script17090(106561572, 106561629, 106561630, int24, int25, int1, string4);
        int24 = script17090(106561573, 106561596, 106561597, int24, int25, int10, string5);
        IF_SETHIDE(1, 106561568);
    };
    var int26 = 0;
    var int27 = 0;
    var int28 = 0;
    var int29 = 0;
    var int30 = INV_SIZE(676);
    var int31 = 0;
    var int32 = 0;
    while ((int32 < int2)) {
        if ((int6 == 1)) {
            int17 = push_array(int32);
            int31 = push_array[1](int32);
            int18 = 1;
        } else {
            int17 = INV_GETOBJ(676, int32);
            int18 = INV_GETNUM(676, int32);
            int31 = int32;
        };
        long0 = script17375(long0, script11466(int17, script11472(int31), int18, 2));
        long1 = script17375(long1, script11466(int17, script11472(int31), int18, 1));
        [int26, int27] = script11457(106561545, 106561546, int17, int18, int26, int27, int31, int32, int15, int0);
        int32 = (int32 + 1);
    };
    int26 = 0;
    int27 = 0;
    while ((int32 < int3)) {
        int17 = INV_GETOBJ(676, int32);
        int18 = INV_GETNUM(676, int32);
        [long2, long4] = script17092(long2, long4, int17, script11472(int32), int18, 2);
        long3 = script17375(long3, script11466(int17, script11472(int32), int18, 1));
        [int26, int27] = script11457(106561591, 106561592, int17, int18, int26, int27, int32, (int32 - int2), int15, int0);
        int32 = (int32 + 1);
    };
    int26 = 0;
    int27 = 0;
    if (((int6 == 1) && (int14 < int2))) {
        int32 = (int32 - int14);
    };
    if ((int15 != -1)) {
        long5 = script17375(long5, script11466(int11, script11472(int15), int12, 1));
        [int26, int27] = script11457(106561538, 106561540, int11, int12, int26, int27, int30, int30, int15, int0);
    };
    while ((int32 < int4)) {
        int17 = INV_GETOBJ(676, int32);
        int18 = INV_GETNUM(676, int32);
        long5 = script17375(long5, script11466(int17, script11472(int32), int18, 1));
        [int26, int27] = script11457(106561538, 106561540, int17, int18, int26, int27, int32, ((int32 - int3) + int14), int15, int0);
        int32 = (int32 + 1);
    };
    if ((int1 > 0)) {
        int26 = 0;
        int27 = 0;
        while ((int28 < 30)) {
            int17 = INV_GETOBJ(530, int28);
            int18 = INV_GETNUM(530, int28);
            if ((int17 != -1)) {
                [int26, int27] = script11457(106561631, 106561632, int17, int18, int26, int27, int28, int28, int15, int0);
                int29 = (int29 + 1);
            };
            int28 = (int28 + 1);
        };
    };
    int26 = 0;
    int27 = 0;
    while ((int32 < 47)) {
        int17 = INV_GETOBJ(676, int32);
        int18 = INV_GETNUM(676, int32);
        [int26, int27] = script11457(106561598, 106561599, int17, int18, int26, int27, int32, (int32 - int4), int15, int0);
        int32 = (int32 + 1);
    };
    int26 = 0;
    int27 = 0;
    int32 = 0;
    var long6 = 0n;
    while ((int32 < 50)) {
        int17 = INV_GETOBJ(930, int32);
        int18 = INV_GETNUM(930, int32);
        [int26, int27] = script11457(106561613, 106561615, int17, int18, int26, int27, int32, int32, 0, 0);
        long6 = script17375(long6, script11466(int17, script11472(int32), int18, 7));
        int32 = (int32 + 1);
    };
    var long7 = long2;
    var long8 = script12798();
    long7 = SUB_LONG(long7, long4);
    var long9 = SCALE_LONG(long7, 100n, long8);
    long7 = SUB_LONG(long7, long9);
    var long10 = long7;
    var string6 = "...";
    if ((varbitplayer_28117 == 0)) {
        if ((varbitplayer_52406 == 2)) {
            if ((INV_FREESPACE(930) == INV_SIZE(930))) {
                IF_SETENABLED(0, 106561583);
            } else {
                IF_SETENABLED(1, 106561583);
            };
            string6 = script17372(long6, 9, 0);
        } else {
            if ((INV_FREESPACE(676) == INV_SIZE(676))) {
                IF_SETENABLED(0, 106561583);
            } else {
                IF_SETENABLED(1, 106561583);
            };
            if ((varbitplayer_1942 == 3)) {
                string6 = "Free";
                long7 = SUB_LONG(long7, long10);
            } else {
                string6 = script17372(long7, 9, 0);
            };
        };
    } else {
        IF_SETENABLED(0, 106561583);
    };
    IF_SETTEXT(string6, 106561587);
    var long11 = script17375(script17375(long3, long5), varclient_4876);
    var long12 = script17375(long1, long11);
    script17096();
    script17094(int0, long12, long11, long2, long4, long9, long10, long7);
    IF_SETTEXT("Confirm", 106561607);
    IF_SETTEXT("Yes", 106561608);
    IF_SETTEXT("No", 106561609);
    if (((int24 == 0) && (varbitplayer_28117 == 0))) {
        IF_SETHIDE(0, 106561574);
    } else {
        IF_SETHIDE(1, 106561574);
    };
    IF_SETSCROLLSIZE(0, script17380(int24, IF_GETHEIGHT(106561567), int24, 0), 106561567);
    script7791(106561576, 106561567);
    return;
}