//[proc,snapshot_selected_highlight]
function script240(int0: number): void {
    var int1 = 0;
    while ((int1 < IF_GETNEXTSUBID(38928394))) {
        if ((CC_FIND(38928394, int1) == 1)) {
            CC_SETTRANS(255);
        };
        int1 = (int1 + 1);
    };
    if ((CC_FIND(38928394, int0) == 1)) {
        CC_SETTRANS(110);
    };
    return;
}