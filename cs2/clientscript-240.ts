//[proc,snapshot_selected_highlight]
function script240(int0: int): void {
    var int1 = 0;
    while ((int1 < IF_GETNEXTSUBID(comp(594, 10)))) {
        if ((CC_FIND(comp(594, 10), int1) == 1)) {
            CC_SETTRANS(255);
        };
        int1 = (int1 + 1);
    };
    if ((CC_FIND(comp(594, 10), int0) == 1)) {
        CC_SETTRANS(110);
    };
    return;
}