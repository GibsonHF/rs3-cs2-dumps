//
function script12262(int0: number): void {
    CC_DELETEALL(comp(584, 5));
    CC_DELETEALL(comp(584, 6));
    if ((int0 == 1)) {
        script11624(38273029, 38273030, 44641, 0, 0, 0, 1);
        if ((CC_FIND(comp(584, 6), 0) == 1)) {
            CC_SETOP(1, "Resume");
        };
    } else if ((int0 == 0)) {
        script11624(38273029, 38273030, 44647, 0, 0, 0, 1);
        if ((CC_FIND(comp(584, 6), 0) == 1)) {
            CC_SETOP(1, "Pause");
        };
    };
    return;
}