//
function script19530(int0: number): void {
    CC_CREATE(comp(1313, 76), 4, int0);  // group_ironman_storage:separators
    CC_SETSIZE(0, 12, 1, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETHIDE(true);
    CC_CREATE(comp(1313, 77), 5, int0);  // group_ironman_storage:dividers
    CC_SETSIZE(0, 1, 1, 0);
    CC_SETGRAPHIC(8121 as graphic);
    CC_SETHIDE(true);
    CC_CREATE(comp(1313, 78), 4, int0);  // group_ironman_storage:spacer_endrow
    CC_SETONMOUSEOVER(callback(script19549, -2147483645, -2147483643, 1));
    CC_SETONMOUSELEAVE(callback(script19549, -2147483645, -2147483643, 0));
    CC_CREATE(comp(1313, 79), 4, int0);  // group_ironman_storage:spacer_below
    CC_SETONMOUSEOVER(callback(script19549, -2147483645, -2147483643, 1));
    CC_SETONMOUSELEAVE(callback(script19549, -2147483645, -2147483643, 0));
    return;
}