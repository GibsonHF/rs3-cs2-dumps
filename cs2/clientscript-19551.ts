//
function script19551(int0: number, int1: number): number {
    if (((int0 != 86048846) && (int0 != 86048847))) {
        return 0;
    };
    var int2 = MAX(0, (script19579() - 1));
    if (((CC_FIND(comp(1313, 75) /*group_ironman_storage:clan_inv*/, int2) == 1) && (CC_FIND[1](comp(1313, 90) /*group_ironman_storage:clan_inv_insert*/, int2) == 1))) {
        if ((int1 == 0)) {
            if (((IF_GETX(comp(1313, 82)) == ((CC_GETX() + CC_GETWIDTH()) - 1)) && (IF_GETY(comp(1313, 82)) == (CC_GETY() - 1)))) {  // group_ironman_storage:ondrag_highlight
                IF_SETHIDE(true, comp(1313, 82));  // group_ironman_storage:ondrag_highlight
            };
        } else {
            IF_SETPOSITION(((CC_GETX() + CC_GETWIDTH()) - 1), (CC_GETY() - 1), 0, 0, comp(1313, 82));  // group_ironman_storage:ondrag_highlight
            IF_SETSIZE((CC_GETWIDTH[1]() + 2), (CC_GETHEIGHT[1]() + 2), 0, 0, comp(1313, 82));  // group_ironman_storage:ondrag_highlight
            IF_SETHIDE(false, comp(1313, 82));  // group_ironman_storage:ondrag_highlight
            IF_SETHIDE(true, comp(1313, 84));  // group_ironman_storage:ondrag_insert_right_highlight
            IF_SETHIDE(true, comp(1313, 87));  // group_ironman_storage:ondrag_insert_left_highlight
        };
    };
    return 1;
}