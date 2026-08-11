//
function script6099(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    CC_DELETEALL(int1);
    CC_DELETEALL(int4);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int5 = INV_SIZE(int0);
    var int6 = 0;
    while ((int6 < int5)) {
        CC_CREATE(int2, 5, int6);
        CC_SETSIZE(40, 36, 0, 0);
        CC_SETGRAPHIC(18266 as graphic);
        CC_CREATE(int3, 5, int6);
        CC_SETSIZE(36, 32, 0, 0);
        int6 = (int6 + 1);
    };
    if (((varbitplayer_27169 == 1) || (script6431() == 1))) {
        switch (int0) {
            case 93: {
                IF_SETHIDE(false, comp(65, 19));  // group_inspect_inv:close_button
                break;
            }
            case 530: {
                IF_SETHIDE(false, comp(47, 21));  // group_inspect_bob:close_button
                break;
            }
        };
    };
    return;
}