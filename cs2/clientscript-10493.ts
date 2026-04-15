//
function script10493(int0: int): void {
    var int1 = script13549(int0);
    var int2 = script13548(int0);
    if ((CC_FIND(int1, 0) == 1)) {
        return;
    };
    script11606(int2, int1, 37617 as struct, 0, 2, 0, 1, "View Filters", "View Filters", "Select this icon to view filters you can apply to this chat box.");
    if ((CC_FIND(int1, 0) == 1)) {
        CC_SETONOP(callback(script7461, -2147483645));
    };
    script11606(int2, int1, 37579 as struct, 16, 2, 1, 1, "View Actions", "View Actions", "Select this icon to view actions you can perform from this chat box.");
    if ((CC_FIND(int1, 1) == 1)) {
        CC_SETONOP(callback(script7461, -2147483645));
    };
    script10766(int2, int1, int0);
    IF_SETONVARTRANSMIT(callback(script10765, int2, int1, int0, 1775, 1), script13547(int0));
    return;
}