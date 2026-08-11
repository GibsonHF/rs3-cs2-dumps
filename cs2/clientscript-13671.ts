//
function script13671(int0: number): void {
    if ((varbitplayer_37614 == 0)) {
        return;
    };
    var int1 = 1;
    var int2 = -1;
    var int3 = -1;
    var int4 = 0;
    var int5 = 0;
    var int6 = 36390;
    var int7 = 24224;
    var int8 = 0;
    var int9 = IF_GETNEXTSUBID(int0);
    var int10 = int9;
    var int11 = (IF_GETWIDTH(int0) - 4);
    var int12 = 0;
    stack(90112);
    stack(varbitplayer_37614);
    DB_FIND(0);
    var int13 = dbrow_findnext();
    var int14 = DB_GETFIELDCOUNT(int13, 90416);
    if ((int14 > 0)) {
        [int2, int4] = dbrow_getfield(int13, 90416, 0);
        if ((int14 > 1)) {
            [int3, int5] = dbrow_getfield(int13, 90416, 1);
        };
        [int4, int5] = script13641(varbitplayer_37615);
        if ((int2 != -1)) {
            int1 = 2;
        };
        if ((int3 != -1)) {
            int1 = 3;
        };
    };
    int1 = MIN(int1, 3);
    while ((int8 < int1)) {
        int10 = int9;
        CC_CREATE(int0, 5, int9);
        CC_SETSIZE(int11, int11, 0, 0);
        CC_SETGRAPHIC(18266 as graphic);
        if ((int1 == 1)) {
            int12 = 0;
            int9 = (int9 + 1);
            script13674(int0, int9, -1, 24224, -1, int11, int12, 0);
            script13310(124649484, 124649506, 31, 8000);
            if ((IF_FIND[1](comp(1902, 33)) == 1)) {  // invent_machine_management:input_generator_charge_bar_container
                CC_SETPOSITION[1](CC_GETX[1](), int12, 0, 1);
                IF_SETHIDE(true, comp(1902, 15));  // invent_machine_management:input_secondary_1_bar_container
                IF_SETHIDE(true, comp(1902, 17));  // invent_machine_management:input_secondary_2_bar_container
            };
        } else if ((int1 == 2)) {
            if ((int8 == 0)) {
                int12 = (0 - (IF_GETHEIGHT(int0) / 4));
                int9 = (int9 + 1);
                script13674(int0, int9, int2, -1, -1, int11, int12, 1);
                script13310(124649482, 124649491, 29, 8000);
                if ((IF_FIND[1](comp(1902, 15)) == 1)) {  // invent_machine_management:input_secondary_1_bar_container
                    CC_SETPOSITION[1](CC_GETX[1](), int12, 0, 1);
                    IF_SETHIDE(true, comp(1902, 17));  // invent_machine_management:input_secondary_2_bar_container
                };
            } else {
                int12 = (IF_GETHEIGHT(int0) / 4);
                int9 = (int9 + 1);
                script13674(int0, int9, -1, int7, -1, int11, int12, 0);
                script13310(124649484, 124649506, 31, 8000);
                if ((IF_FIND[1](comp(1902, 33)) == 1)) {  // invent_machine_management:input_generator_charge_bar_container
                    CC_SETPOSITION[1](CC_GETX[1](), int12, 0, 1);
                    IF_SETHIDE(true, comp(1902, 17));  // invent_machine_management:input_secondary_2_bar_container
                };
            };
        } else if ((int1 == 3)) {
            if ((int8 == 0)) {
                int12 = (0 - (IF_GETHEIGHT(int0) / 3));
                int9 = (int9 + 1);
                script13674(int0, int9, int2, -1, -1, int11, int12, 1);
                script13310(124649482, 124649491, 29, 8000);
                if ((IF_FIND[1](comp(1902, 15)) == 1)) {  // invent_machine_management:input_secondary_1_bar_container
                    CC_SETPOSITION[1](CC_GETX[1](), int12, 0, 1);
                };
            } else if ((int8 == 1)) {
                int12 = 0;
                int9 = (int9 + 1);
                script13674(int0, int9, int3, -1, -1, int11, int12, 1);
                script13310(124649483, 124649493, 30, 8000);
                if ((IF_FIND[1](comp(1902, 17)) == 1)) {  // invent_machine_management:input_secondary_2_bar_container
                    CC_SETPOSITION[1](CC_GETX[1](), int12, 0, 1);
                };
            } else {
                int12 = (IF_GETHEIGHT(int0) / 3);
                int9 = (int9 + 1);
                script13674(int0, int9, -1, int7, -1, int11, int12, 0);
                script13310(124649484, 124649506, 31, 8000);
                if ((IF_FIND[1](comp(1902, 33)) == 1)) {  // invent_machine_management:input_generator_charge_bar_container
                    CC_SETPOSITION[1](CC_GETX[1](), int12, 0, 1);
                };
            };
        };
        if ((CC_FIND(int0, int10) == 1)) {
            CC_SETPOSITION(0, int12, 1, 1);
        };
        int8 = (int8 + 1);
        int9 = (int9 + 1);
    };
    return;
}