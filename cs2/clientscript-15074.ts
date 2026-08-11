//
function script15074(int0: number): void {
    var int1 = 0;
    script15957(82117058, 0, int1, 0, 0, 0, 0, 0, 0, 1, 1, 4471, 1);
    var int2 = DB_GETFIELDCOUNT(int0, 639136);
    if ((int2 == 0)) {
        return;
    };
    var int3 = 0;
    var int4 = 10;
    var int5 = -1;
    var int6 = -1;
    var string0 = "";
    var int7 = 0;
    var int8 = -1;
    var int9 = -1;
    var string1 = "";
    var int10 = -1;
    var int11 = -1;
    var int12 = -1;
    var int13 = 0;
    var int14 = 0;
    var int15 = 10;
    var string2 = "";
    var string3 = "";
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    stack(82117058);
    stack(1);
    stack(int1);
    int1 = (int1 + 1);
    script15938(0, 10, 1, 0, 20, 18, 1, 0);
    script10485(1, int1, 0, 0, 0, 0, 0, 0, 1, 1, 1897, dbrow_getfield(int0, 639120, 0));
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(10276069);
    int1 = 0;
    stack(82117059);
    stack(0);
    stack(int1);
    int1 = (int1 + 1);
    script15938(10, 0, 0, 0, (10 + 16), 0, 1, 1);
    var int20 = CC_GETWIDTH();
    var int21 = int1;
    var int22 = 10;
    var int23 = 0;
    var int24 = 0;
    int5 = (int5 + 1);
    while ((int5 < int2)) {
        int6 = dbrow_getfield(int0, 639136, int5);
        if ((int6 == -1)) {
            return;
        };
        int23 = dbrow_getfield(int6, 643104, 0);
        if (((int23 == 0) || (PLAYERMEMBER() == true))) {
            int21 = int1;
            stack(0);
            stack(int1);
            int1 = (int1 + 1);
            script10033(0, int3, 1, 0, 0, 0, 1, 1, 4127);
            int3 = (int3 + 10);
            string0 = dbrow_getfield(int6, 643072, 0);
            if ((STRING_LENGTH(string0) > 0)) {
                stack(0);
                stack(int1);
                int1 = (int1 + 1);
                script10485(int4, int3, 0, 0, 20, 17, 1, 0, 2141, string0);
                CC_SETCOLOUR(script10495(0));
                CC_SETTEXTALIGN(0, 0, 0);
                int22 = (int22 + 17);
                int3 = (int3 + 20);
            };
            int7 = DB_GETFIELDCOUNT(int6, 643088);
            int8 = (int8 + 1);
            while ((int8 < int7)) {
                int9 = dbrow_getfield(int6, 643088, int8);
                int23 = dbrow_getfield(int9, 647296, 0);
                int24 = dbrow_getfield(int9, 647312, 0);
                if ((PLAYERMEMBER() == 1)) {
                    if ((int24 == 0)) {
                        string1 = dbrow_getfield(int9, 647168, 0);
                        int10 = dbrow_getfield(int9, 647184, 0);
                        int11 = dbrow_getfield(int9, 647200, 0);
                        [int12, int13, int14] = dbrow_getfield(int9, 647216, 0);
                        int15 = dbrow_getfield(int9, 647232, 0);
                        string2 = dbrow_getfield(int9, 647248, 0);
                        string3 = dbrow_getfield(int9, 647264, 0);
                        string3 = script19926(int9, string3);
                        int16 = dbrow_getfield(int9, 647280, 0);
                        if ((STRING_LENGTH(string1) > 0)) {
                            if ((int18 > 0)) {
                                int18 = 0;
                                int4 = 10;
                                int3 = (int3 + (int19 + 10));
                                int22 = (int22 + (int19 + 10));
                            };
                            [int1, int19] = script15075(string1, int1, int4, int3, int20);
                            int17 = 1;
                        } else if ((int12 != 15371)) {
                            [int1, int4, int18, int19] = script15088(int12, int1, int4, int3, int13, int14, int18, string2, int15, string3, int16);
                            if ((int18 == 3)) {
                                int17 = 1;
                            };
                        } else if (((PLAYERMEMBER() == 1) || (OC_MEMBERS(int10) == 0))) {
                            [int1, int4, int18, int19] = script15215(int10, int11, int1, int4, int3, int18, string2, int15, string3);
                            if ((int18 == 3)) {
                                int17 = 1;
                            };
                        };
                        if ((int17 == 1)) {
                            int17 = 0;
                            int18 = 0;
                            int3 = (int3 + (int19 + 10));
                            int22 = (int22 + (int19 + 10));
                            int4 = 10;
                        };
                    } else if (((PLAYERMEMBER() == 0) && (int23 == 0))) {
                        string1 = dbrow_getfield(int9, 647168, 0);
                        int10 = dbrow_getfield(int9, 647184, 0);
                        int11 = dbrow_getfield(int9, 647200, 0);
                        [int12, int13, int14] = dbrow_getfield(int9, 647216, 0);
                        int15 = dbrow_getfield(int9, 647232, 0);
                        string2 = dbrow_getfield(int9, 647248, 0);
                        string3 = dbrow_getfield(int9, 647264, 0);
                        string3 = script19926(int9, string3);
                        int16 = dbrow_getfield(int9, 647280, 0);
                        if ((STRING_LENGTH(string1) > 0)) {
                            if ((int18 > 0)) {
                                int18 = 0;
                                int4 = 10;
                                int3 = (int3 + (int19 + 10));
                                int22 = (int22 + (int19 + 10));
                            };
                            [int1, int19] = script15075(string1, int1, int4, int3, int20);
                            int17 = 1;
                        } else if ((int12 != 15371)) {
                            [int1, int4, int18, int19] = script15088(int12, int1, int4, int3, int13, int14, int18, string2, int15, string3, int16);
                            if ((int18 == 3)) {
                                int17 = 1;
                            };
                        } else if (((PLAYERMEMBER() == 1) || (OC_MEMBERS(int10) == 0))) {
                            [int1, int4, int18, int19] = script15215(int10, int11, int1, int4, int3, int18, string2, int15, string3);
                            if ((int18 == 3)) {
                                int17 = 1;
                            };
                        };
                        if ((int17 == 1)) {
                            int17 = 0;
                            int18 = 0;
                            int3 = (int3 + (int19 + 10));
                            int22 = (int22 + (int19 + 10));
                            int4 = 10;
                        };
                    };
                } else if (((PLAYERMEMBER() == 0) && (int23 == 0))) {
                    string1 = dbrow_getfield(int9, 647168, 0);
                    int10 = dbrow_getfield(int9, 647184, 0);
                    int11 = dbrow_getfield(int9, 647200, 0);
                    [int12, int13, int14] = dbrow_getfield(int9, 647216, 0);
                    int15 = dbrow_getfield(int9, 647232, 0);
                    string2 = dbrow_getfield(int9, 647248, 0);
                    string3 = dbrow_getfield(int9, 647264, 0);
                    string3 = script19926(int9, string3);
                    int16 = dbrow_getfield(int9, 647280, 0);
                    if ((STRING_LENGTH(string1) > 0)) {
                        if ((int18 > 0)) {
                            int18 = 0;
                            int4 = 10;
                            int3 = (int3 + (int19 + 10));
                            int22 = (int22 + (int19 + 10));
                        };
                        [int1, int19] = script15075(string1, int1, int4, int3, int20);
                        int17 = 1;
                    } else if ((int12 != 15371)) {
                        [int1, int4, int18, int19] = script15088(int12, int1, int4, int3, int13, int14, int18, string2, int15, string3, int16);
                        if ((int18 == 3)) {
                            int17 = 1;
                        };
                    } else if (((PLAYERMEMBER() == 1) || (OC_MEMBERS(int10) == 0))) {
                        [int1, int4, int18, int19] = script15215(int10, int11, int1, int4, int3, int18, string2, int15, string3);
                        if ((int18 == 3)) {
                            int17 = 1;
                        };
                    };
                    if ((int17 == 1)) {
                        int17 = 0;
                        int18 = 0;
                        int3 = (int3 + (int19 + 10));
                        int22 = (int22 + (int19 + 10));
                        int4 = 10;
                    };
                };
            };
            if ((int18 != 0)) {
                int18 = 0;
                int3 = (int3 + (int19 + 10));
                int22 = (int22 + (int19 + 10));
                int19 = 0;
                int4 = 10;
            };
            if ((CC_FINDBYCATEGORY[1](comp(1253, 451), 0, int21) == 1)) {  // wheel_of_fortune:trh_promo_info_right_contents
                CC_SETSIZE[1](0, int22, 1, 0);
            };
            int8 = -1;
            int22 = 10;
            int3 = (int3 + 10);
        };
    };
    if ((CC_FINDBYCATEGORY(comp(1253, 451), 0, 0) == 1)) {  // wheel_of_fortune:trh_promo_info_right_contents
        if ((int3 > 492)) {
            CC_SETSIZE((10 + 16), int3, 1, 0);
            IF_SETSCROLLPOS(0, 0, comp(1253, 451));  // wheel_of_fortune:trh_promo_info_right_contents
            IF_SETSCROLLSIZE(380, int3, comp(1253, 451));  // wheel_of_fortune:trh_promo_info_right_contents
            script7791(82117060, 82117059);
        } else {
            CC_SETSIZE(20, int3, 1, 0);
            IF_SETSCROLLPOS(0, 0, comp(1253, 451));  // wheel_of_fortune:trh_promo_info_right_contents
            IF_SETSCROLLSIZE(380, int3, comp(1253, 451));  // wheel_of_fortune:trh_promo_info_right_contents
            CC_DELETEALL(comp(1253, 452));  // wheel_of_fortune:trh_promo_info_right_panel_scrollbar
        };
    };
    return;
}