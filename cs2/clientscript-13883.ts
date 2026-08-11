//
function script13883(int0: number, int1: number, int2: number): void {
    if ((varclient_6708 == 1)) {
        return;
    };
    if ((varclient_6707 < 0)) {
        IF_SETHIDE(true, comp(517, 209));  // bank:ondrag_highlight
        IF_SETHIDE(true, comp(517, 207));  // bank:ondrag_placeholder_highlight
        return;
    };
    if ((script13884(int0, int1, int2) == 1)) {
        return;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        IF_SETHIDE(true, comp(517, 209));  // bank:ondrag_highlight
        if ((int2 == 0)) {
            if (((IF_GETX(comp(517, 209)) == (CC_GETX() - 1)) && (IF_GETY(comp(517, 209)) == (CC_GETY() - 1)))) {  // bank:ondrag_highlight
                IF_SETHIDE(true, comp(517, 209));  // bank:ondrag_highlight
            };
        } else {
            if ((int0 != comp(517, 217))) {  // bank:bank_inv_insert
                IF_SETHIDE(true, comp(517, 211));  // bank:ondrag_insert_right_highlight
                IF_SETHIDE(true, comp(517, 214));  // bank:ondrag_insert_left_highlight
            } else if ((varclient_6707 < int1)) {
                IF_SETHIDE(true, comp(517, 211));  // bank:ondrag_insert_right_highlight
                IF_SETHIDE(false, comp(517, 214));  // bank:ondrag_insert_left_highlight
            } else {
                IF_SETHIDE(false, comp(517, 211));  // bank:ondrag_insert_right_highlight
                IF_SETHIDE(true, comp(517, 214));  // bank:ondrag_insert_left_highlight
            };
            IF_SETPOSITION((CC_GETX() - 1), (CC_GETY() - 1), 0, 0, comp(517, 209));  // bank:ondrag_highlight
            IF_SETSIZE((CC_GETWIDTH() + 2), (CC_GETHEIGHT() + 2), 0, 0, comp(517, 209));  // bank:ondrag_highlight
            IF_SETHIDE(false, comp(517, 209));  // bank:ondrag_highlight
        };
    };
    return;
}