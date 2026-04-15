//
function script12262(int0: int): void {
    CC_DELETEALL(comp(584, 5));
    CC_DELETEALL(comp(584, 6));
    if ((int0 == 1)) {
        script11624(comp(584, 5), comp(584, 6), 44641 as struct, 0, 0, 0, 1);
        if ((CC_FIND(comp(584, 6), 0) == 1)) {
            CC_SETOP(1, "Resume");
        };
    } else if ((int0 == 0)) {
        script11624(comp(584, 5), comp(584, 6), 44647 as struct, 0, 0, 0, 1);
        if ((CC_FIND(comp(584, 6), 0) == 1)) {
            CC_SETOP(1, "Pause");
        };
    };
    return;
}