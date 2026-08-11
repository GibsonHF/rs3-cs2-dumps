//
function script13884(int0: number, int1: number, int2: number): number {
    if (((int0 != 33882317) && (int0 != 33882318))) {
        return 0;
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    if ((int1 > 1)) {
        if ((varbitplayer_45141 == 1)) {
            int3 = script14372(int1);
        } else {
            int3 = int1;
        };
        [int5, int4] = script5787(int3);
    } else {
        int4 = script14337();
    };
    int4 = MAX(0, (int4 - 1));
    if (((CC_FIND(comp(517, 201) /*bank:bank_inv*/, int4) == 1) && (CC_FIND[1](comp(517, 217) /*bank:bank_inv_insert*/, int4) == 1))) {
        if ((int2 == 0)) {
            if (((IF_GETX(comp(517, 209)) == ((CC_GETX() + CC_GETWIDTH()) - 1)) && (IF_GETY(comp(517, 209)) == (CC_GETY() - 1)))) {  // bank:ondrag_highlight
                IF_SETHIDE(true, comp(517, 209));  // bank:ondrag_highlight
            };
        } else {
            IF_SETPOSITION(((CC_GETX() + CC_GETWIDTH()) - 1), (CC_GETY() - 1), 0, 0, comp(517, 209));  // bank:ondrag_highlight
            IF_SETSIZE((CC_GETWIDTH[1]() + 2), (CC_GETHEIGHT[1]() + 2), 0, 0, comp(517, 209));  // bank:ondrag_highlight
            IF_SETHIDE(false, comp(517, 209));  // bank:ondrag_highlight
            IF_SETHIDE(true, comp(517, 211));  // bank:ondrag_insert_right_highlight
            IF_SETHIDE(true, comp(517, 214));  // bank:ondrag_insert_left_highlight
        };
    };
    return 1;
}