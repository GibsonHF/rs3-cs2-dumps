//
function script592(): void {
    var int0 = IF_GETWIDTH(comp(517, 116));  // bank:share_preset_quick_buttons
    var int1 = MAX(0, ((int0 - 180) / 7));
    var int2 = int1;
    var int3 = 0;
    var int4 = (1 + (9 * varbitplayer_49662));
    var int5 = 1;
    var int6 = (30 + int2);
    int2 = MAX(int2, 4);
    var int7 = int2;
    int1 = int2;
    CC_DELETEALL(comp(517, 119));  // bank:share_quick_click
    CC_DELETEALL(comp(517, 117));  // bank:share_quick_build
    CC_DELETEALL(comp(517, 118));  // bank:share_quick_disabled
    CC_CREATE(comp(517, 119), 4, 0);  // bank:share_quick_click
    while ((int5 <= 9)) {
        if ((int4 < 19)) {
            script15924(int5, int2, int3);
            if ((int5 == 5)) {
                int2 = int7;
                int3 = (int3 + (30 + 4));
            } else {
                int2 = (int2 + int6);
            };
            int4 = (int4 + 1);
            int5 = (int5 + 1);
        };
        script15923(int1, int6);
        return;
    };
    script15923(int1, int6);
    return;
}