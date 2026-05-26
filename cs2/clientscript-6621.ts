//
function script6621(int0: number, int1: number): void {
    var int2 = 0;
    while ((int2 < 100)) {
        if ((INV_GETOBJ(int1, int2) == 7099)) {
            if ((CC_FIND(int0, int2) == 1)) {
                CC_SETGRAPHIC(12187);
            };
        } else if (((((((((INV_GETOBJ(int1, int2) == 3873) || (INV_GETOBJ(int1, int2) == 3874)) || (INV_GETOBJ(int1, int2) == 3875)) || (INV_GETOBJ(int1, int2) == 3876)) || (INV_GETOBJ(int1, int2) == 3877)) || (INV_GETOBJ(int1, int2) == 3878)) || (INV_GETOBJ(int1, int2) == 3870)) && (CC_FIND(int0, int2) == 1))) {
            CC_SETGRAPHIC(12186);
        };
        int2 = (int2 + 1);
    };
    return;
}