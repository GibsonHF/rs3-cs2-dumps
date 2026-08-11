//[proc,snapshot_selected_highlight]
function script240(int0: number): void {
    var int1 = 0;
    while ((int1 < IF_GETNEXTSUBID(comp(594, 10)))) {  // snapshot_main_v2:selected_name_layer
        if ((CC_FIND(comp(594, 10), int1) == 1)) {  // snapshot_main_v2:selected_name_layer
            CC_SETTRANS(255);
        };
        int1 = (int1 + 1);
    };
    if ((CC_FIND(comp(594, 10), int0) == 1)) {  // snapshot_main_v2:selected_name_layer
        CC_SETTRANS(110);
    };
    return;
}