//
function script19550(int0: number, int1: number, int2: number): void {
    if ((varclient_6708 == 1)) {
        return;
    };
    if ((varclient_6707 < 0)) {
        IF_SETHIDE(true, comp(1313, 82));  // group_ironman_storage:ondrag_highlight
        IF_SETHIDE(true, comp(1313, 80));  // group_ironman_storage:ondrag_placeholder_highlight
        return;
    };
    if ((script19551(int0, int2) == 1)) {
        return;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        IF_SETHIDE(true, comp(1313, 82));  // group_ironman_storage:ondrag_highlight
        if ((int2 == 0)) {
            if (((IF_GETX(comp(1313, 82)) == (CC_GETX() - 1)) && (IF_GETY(comp(1313, 82)) == (CC_GETY() - 1)))) {  // group_ironman_storage:ondrag_highlight
                IF_SETHIDE(true, comp(1313, 82));  // group_ironman_storage:ondrag_highlight
            };
        } else {
            if ((int0 != comp(1313, 90))) {  // group_ironman_storage:clan_inv_insert
                IF_SETHIDE(true, comp(1313, 84));  // group_ironman_storage:ondrag_insert_right_highlight
                IF_SETHIDE(true, comp(1313, 87));  // group_ironman_storage:ondrag_insert_left_highlight
            } else if ((varclient_6707 < int1)) {
                IF_SETHIDE(true, comp(1313, 84));  // group_ironman_storage:ondrag_insert_right_highlight
                IF_SETHIDE(false, comp(1313, 87));  // group_ironman_storage:ondrag_insert_left_highlight
            } else {
                IF_SETHIDE(false, comp(1313, 84));  // group_ironman_storage:ondrag_insert_right_highlight
                IF_SETHIDE(true, comp(1313, 87));  // group_ironman_storage:ondrag_insert_left_highlight
            };
            IF_SETPOSITION((CC_GETX() - 1), (CC_GETY() - 1), 0, 0, comp(1313, 82));  // group_ironman_storage:ondrag_highlight
            IF_SETSIZE((CC_GETWIDTH() + 2), (CC_GETHEIGHT() + 2), 0, 0, comp(1313, 82));  // group_ironman_storage:ondrag_highlight
            IF_SETHIDE(false, comp(1313, 82));  // group_ironman_storage:ondrag_highlight
        };
    };
    return;
}