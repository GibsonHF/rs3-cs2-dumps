//
function script12254(int0: number): void {
    var int1 = IF_GETTRANS(int0);
    if ((int1 < 40)) {
        stack(int1);
        int1 = (int1 + 1);
        IF_SETTRANS(int0);
    };
    return;
}