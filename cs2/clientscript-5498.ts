//
function script5498(int0: int, int1: component): void {
    if (((CC_FIND(int1, int0) == 1) && (CC_GETTRANS() < 255))) {
        if (((CC_GETTRANS() + 5) > 255)) {
            CC_SETTRANS(255);
        } else {
            CC_SETTRANS((CC_GETTRANS() + 5));
        };
    };
    return;
}