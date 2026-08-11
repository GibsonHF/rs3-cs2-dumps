//[proc,love_puzzle_update]
function script3477(): void {
    var int0 = (3 - script3484(1));
    if ((int0 > 0)) {
        IF_SETOBJECT_ALWAYSNUM(enum_getvalue(0, 33, 3082 as cs2enum, 1), int0, comp(991, 6));  // love_puzzle:source_1_l
        IF_SETONOP(callback(script3481, -2147483644), comp(991, 6));  // love_puzzle:source_1_l
        IF_SETOP(1, "Select", comp(991, 6));  // love_puzzle:source_1_l
    } else {
        IF_SETOBJECT_NONUM(-1 as obj, 0, comp(991, 6));  // love_puzzle:source_1_l
        IF_SETONOP(callback(), comp(991, 6));  // love_puzzle:source_1_l
        IF_CLEAROPS(comp(991, 6));  // love_puzzle:source_1_l
    };
    int0 = (2 - script3484(2));
    if ((int0 > 0)) {
        IF_SETOBJECT_ALWAYSNUM(enum_getvalue(0, 33, 3082 as cs2enum, 2), int0, comp(991, 7));  // love_puzzle:source_1_r
        IF_SETONOP(callback(script3481, -2147483644), comp(991, 7));  // love_puzzle:source_1_r
        IF_SETOP(1, "Select", comp(991, 7));  // love_puzzle:source_1_r
    } else {
        IF_SETOBJECT_NONUM(-1 as obj, 0, comp(991, 7));  // love_puzzle:source_1_r
        IF_SETONOP(callback(), comp(991, 7));  // love_puzzle:source_1_r
        IF_CLEAROPS(comp(991, 7));  // love_puzzle:source_1_r
    };
    int0 = (2 - script3484(3));
    if ((int0 > 0)) {
        IF_SETOBJECT_ALWAYSNUM(enum_getvalue(0, 33, 3082 as cs2enum, 3), int0, comp(991, 8));  // love_puzzle:source_1_b
        IF_SETONOP(callback(script3481, -2147483644), comp(991, 8));  // love_puzzle:source_1_b
        IF_SETOP(1, "Select", comp(991, 8));  // love_puzzle:source_1_b
    } else {
        IF_SETOBJECT_NONUM(-1 as obj, 0, comp(991, 8));  // love_puzzle:source_1_b
        IF_SETONOP(callback(), comp(991, 8));  // love_puzzle:source_1_b
        IF_CLEAROPS(comp(991, 8));  // love_puzzle:source_1_b
    };
    int0 = (2 - script3485(1));
    if ((int0 > 0)) {
        IF_SETOBJECT_ALWAYSNUM(enum_getvalue(0, 33, 3083 as cs2enum, 1), int0, comp(991, 14));  // love_puzzle:source_2_l
        IF_SETONOP(callback(script3481, -2147483644), comp(991, 14));  // love_puzzle:source_2_l
        IF_SETOP(1, "Select", comp(991, 14));  // love_puzzle:source_2_l
    } else {
        IF_SETOBJECT_NONUM(-1 as obj, 0, comp(991, 14));  // love_puzzle:source_2_l
        IF_SETONOP(callback(), comp(991, 14));  // love_puzzle:source_2_l
        IF_CLEAROPS(comp(991, 14));  // love_puzzle:source_2_l
    };
    int0 = (4 - script3485(2));
    if ((int0 > 0)) {
        IF_SETOBJECT_ALWAYSNUM(enum_getvalue(0, 33, 3083 as cs2enum, 2), int0, comp(991, 15));  // love_puzzle:source_2_r
        IF_SETONOP(callback(script3481, -2147483644), comp(991, 15));  // love_puzzle:source_2_r
        IF_SETOP(1, "Select", comp(991, 15));  // love_puzzle:source_2_r
    } else {
        IF_SETOBJECT_NONUM(-1 as obj, 0, comp(991, 15));  // love_puzzle:source_2_r
        IF_SETONOP(callback(), comp(991, 15));  // love_puzzle:source_2_r
        IF_CLEAROPS(comp(991, 15));  // love_puzzle:source_2_r
    };
    int0 = (2 - script3485(3));
    if ((int0 > 0)) {
        IF_SETOBJECT_ALWAYSNUM(enum_getvalue(0, 33, 3083 as cs2enum, 3), int0, comp(991, 16));  // love_puzzle:source_2_b
        IF_SETONOP(callback(script3481, -2147483644), comp(991, 16));  // love_puzzle:source_2_b
        IF_SETOP(1, "Select", comp(991, 16));  // love_puzzle:source_2_b
    } else {
        IF_SETOBJECT_NONUM(-1 as obj, 0, comp(991, 16));  // love_puzzle:source_2_b
        IF_SETONOP(callback(), comp(991, 16));  // love_puzzle:source_2_b
        IF_CLEAROPS(comp(991, 16));  // love_puzzle:source_2_b
    };
    CC_DELETEALL(comp(991, 10));  // love_puzzle:grid1
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = script13749();
    while ((int1 < 28)) {
        CC_CREATE(comp(991, 10), 5, int1);  // love_puzzle:grid1
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION((((6 - int2) * 16) + (int3 * 32)), (int2 * 32), 0, 2);
        int0 = script3482(int1);
        CC_SETOBJECT_NONUM(enum_getvalue(0, 33, 3082 as cs2enum, int0), 1);
        if ((int0 > 0)) {
            CC_SETOP(1, "Remove tile");
            CC_SETONOP(callback(script1620, -2147483645, -2147483643, 150, 0, 10));
            if ((int4 == 0)) {
                CC_SETDRAGDEADZONE(5);
                CC_SETDRAGDEADTIME(5);
            } else {
                CC_SETDRAGDEADZONE(20);
                CC_SETDRAGDEADTIME(5);
            };
            CC_SETDRAGRENDERBEHAVIOUR(2);
        };
        if ((int3 >= int2)) {
            int3 = 0;
            int2 = (int2 + 1);
        } else {
            int3 = (int3 + 1);
        };
        int1 = (int1 + 1);
    };
    CC_DELETEALL(comp(991, 18));  // love_puzzle:grid2
    int1 = 0;
    int2 = 6;
    int3 = 0;
    while ((int1 < 28)) {
        CC_CREATE(comp(991, 18), 5, int1);  // love_puzzle:grid2
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION((((6 - int2) * 16) + (int3 * 32)), (int2 * 32), 0, 0);
        int0 = script3483(int1);
        CC_SETOBJECT_NONUM(enum_getvalue(0, 33, 3083 as cs2enum, int0), 1);
        if ((int0 > 0)) {
            CC_SETOP(1, "Remove tile");
            CC_SETONOP(callback(script1620, -2147483645, -2147483643, 125, 0, 8));
            CC_SETDRAGDEADZONE(5);
            CC_SETDRAGDEADTIME(5);
            CC_SETDRAGRENDERBEHAVIOUR(2);
        };
        if ((int3 >= int2)) {
            int3 = 0;
            int2 = (int2 - 1);
        } else {
            int3 = (int3 + 1);
        };
        int1 = (int1 + 1);
    };
    script3478(64946186, 0, 7, 16750623);
    int1 = 0;
    while ((int1 <= 30)) {
        if ((TESTBIT(varclient_1317, int1) == 1)) {
            switch (int1) {
                case 0: {
                    script3478(64946186, -1, 5, 16750623);
                    break;
                }
                case 1: {
                    script3478(64946186, -2, 3, 16750623);
                    break;
                }
                case 2: {
                    script3478(64946186, 0, 3, 16750623);
                    break;
                }
                case 3: {
                    script3478(64946186, 2, 3, 16750623);
                    break;
                }
                case 4: {
                    script3478(64946186, -3, 1, 16750623);
                    break;
                }
                case 5: {
                    script3478(64946186, 1, 1, 16750623);
                    break;
                }
                case 6: {
                    script3478(64946186, 3, 1, 16750623);
                    break;
                }
                case 7: {
                    script3478(64946186, -4, -1, 16750623);
                    break;
                }
                case 8: {
                    script3478(64946186, -2, -1, 16750623);
                    break;
                }
                case 9: {
                    script3478(64946186, 2, -1, 16750623);
                    break;
                }
                case 10: {
                    script3478(64946186, 4, -1, 16750623);
                    break;
                }
                case 11: {
                    script3478(64946186, -5, -3, 16750623);
                    break;
                }
                case 12: {
                    script3478(64946186, -3, -3, 16750623);
                    break;
                }
                case 13: {
                    script3478(64946186, 1, -3, 16750623);
                    break;
                }
                case 14: {
                    script3478(64946186, 3, -3, 16750623);
                    break;
                }
                case 15: {
                    script3478(64946186, 5, -3, 16750623);
                    break;
                }
                case 16: {
                    script3478(64946186, -6, -5, 16750623);
                    break;
                }
                case 17: {
                    script3478(64946186, -4, -5, 16750623);
                    break;
                }
                case 18: {
                    script3478(64946186, -2, -5, 16750623);
                    break;
                }
                case 19: {
                    script3478(64946186, 0, -5, 16750623);
                    break;
                }
                case 20: {
                    script3478(64946186, 2, -5, 16750623);
                    break;
                }
                case 21: {
                    script3478(64946186, 4, -5, 16750623);
                    break;
                }
                case 22: {
                    script3478(64946186, 6, -5, 16750623);
                    break;
                }
                case 23: {
                    script3478(64946186, -7, -7, 16750623);
                    script3478(64946194, -7, 7, 16750623);
                    break;
                }
                case 24: {
                    script3478(64946186, -5, -7, 16750623);
                    script3478(64946194, -5, 7, 16750623);
                    break;
                }
                case 25: {
                    script3478(64946186, -3, -7, 16750623);
                    script3478(64946194, -3, 7, 16750623);
                    break;
                }
                case 26: {
                    script3478(64946186, -1, -7, 16750623);
                    script3478(64946194, -1, 7, 16750623);
                    break;
                }
                case 27: {
                    script3478(64946186, 1, -7, 16750623);
                    script3478(64946194, 1, 7, 16750623);
                    break;
                }
                case 28: {
                    script3478(64946186, 3, -7, 16750623);
                    script3478(64946194, 3, 7, 16750623);
                    break;
                }
                case 29: {
                    script3478(64946186, 5, -7, 16750623);
                    script3478(64946194, 5, 7, 16750623);
                    break;
                }
                case 30: {
                    script3478(64946186, 7, -7, 16750623);
                    script3478(64946194, 7, 7, 16750623);
                    break;
                }
            };
        };
        int1 = (int1 + 1);
    };
    int1 = 0;
    while ((int1 <= 30)) {
        if ((TESTBIT(varclient_1318, int1) == 1)) {
            switch (int1) {
                case 0: {
                    script3478(64946194, -6, 5, 16750623);
                    break;
                }
                case 1: {
                    script3478(64946194, -4, 5, 16750623);
                    break;
                }
                case 2: {
                    script3478(64946194, -2, 5, 16750623);
                    break;
                }
                case 3: {
                    script3478(64946194, 0, 5, 16750623);
                    break;
                }
                case 4: {
                    script3478(64946194, 2, 5, 16750623);
                    break;
                }
                case 5: {
                    script3478(64946194, 4, 5, 16750623);
                    break;
                }
                case 6: {
                    script3478(64946194, 6, 5, 16750623);
                    break;
                }
                case 7: {
                    script3478(64946194, -5, 3, 16750623);
                    break;
                }
                case 8: {
                    script3478(64946194, -3, 3, 16750623);
                    break;
                }
                case 9: {
                    script3478(64946194, 3, 3, 16750623);
                    break;
                }
                case 10: {
                    script3478(64946194, 5, 3, 16750623);
                    break;
                }
                case 11: {
                    script3478(64946194, -4, 1, 16750623);
                    break;
                }
                case 12: {
                    script3478(64946194, 4, 1, 16750623);
                    break;
                }
                case 13: {
                    script3478(64946194, -3, -1, 16750623);
                    break;
                }
                case 14: {
                    script3478(64946194, -1, -1, 16750623);
                    break;
                }
                case 15: {
                    script3478(64946194, 1, -1, 16750623);
                    break;
                }
                case 16: {
                    script3478(64946194, 3, -1, 16750623);
                    break;
                }
                case 17: {
                    script3478(64946194, 0, -3, 16750623);
                    break;
                }
                case 18: {
                    script3478(64946194, 2, -3, 16750623);
                    break;
                }
                case 19: {
                    script3478(64946194, -1, -5, 16750623);
                    break;
                }
                case 20: {
                    script3478(64946194, 0, -7, 16750623);
                    break;
                }
                case 21: {
                    script3478(64946186, 1, 5, 0);
                    break;
                }
                case 22: {
                    script3478(64946186, -1, 1, 0);
                    break;
                }
                case 23: {
                    script3478(64946186, 0, -1, 0);
                    break;
                }
                case 24: {
                    script3478(64946186, -1, -3, 0);
                    break;
                }
                case 25: {
                    script3478(64946194, 1, 3, 0);
                    break;
                }
                case 26: {
                    script3478(64946194, -2, 1, 0);
                    break;
                }
                case 27: {
                    script3478(64946194, 0, 1, 0);
                    break;
                }
                case 28: {
                    script3478(64946194, 2, 1, 0);
                    break;
                }
                case 29: {
                    script3478(64946194, -2, -3, 0);
                    break;
                }
                case 30: {
                    script3478(64946194, 1, -5, 0);
                    break;
                }
                default: {
                    CC_SETHIDE(true);
                    break;
                }
            };
        };
        int1 = (int1 + 1);
    };
    return;
}