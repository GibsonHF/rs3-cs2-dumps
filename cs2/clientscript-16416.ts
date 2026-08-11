//
function script16416(int0: number): void {
    IF_SETHIDE(true, comp(955, 23));  // uitutorial:arrow_below
    IF_SETHIDE(true, comp(955, 21));  // uitutorial:arrow_above
    IF_SETHIDE(true, comp(955, 27));  // uitutorial:arrow_left
    IF_SETHIDE(true, comp(955, 25));  // uitutorial:arrow_right
    var int1 = 0;
    var int2 = 0;
    var int3 = comp(-1, 65535);
    while ((int2 <= 4)) {
        switch (int2) {
            case 0: {
                int3 = comp(955, 15);  // uitutorial:build_layer
                break;
            }
            case 1: {
                int3 = comp(955, 10);  // uitutorial:background
                break;
            }
            case 2: {
                int3 = comp(955, 18);  // uitutorial:border
                break;
            }
            case 3: {
                int3 = comp(955, 20);  // uitutorial:close
                break;
            }
            case 4: {
                int3 = comp(955, 1);  // uitutorial:page_contents
                break;
            }
        };
        int1 = IF_GETNEXTSUBID(int3);
        while ((int1 >= 0)) {
            if ((CC_FIND(int3, int1) == 1)) {
                CC_SETTRANS(int0);
            };
            int1 = (int1 - 1);
        };
        int2 = (int2 + 1);
    };
    IF_SETTRANS(int0, comp(955, 19));  // uitutorial:flashy_icon
    IF_SETTRANS(int0, comp(955, 13));  // uitutorial:build_back
    IF_SETTRANS(int0, comp(955, 14));  // uitutorial:build_back_outline
    IF_SETTRANS(int0, comp(955, 29));  // uitutorial:left_arrow_button
    IF_SETTRANS(int0, comp(955, 30));  // uitutorial:left_arrow_graphic
    IF_SETTRANS(int0, comp(955, 3));  // uitutorial:right_arrow_button
    IF_SETTRANS(int0, comp(955, 4));  // uitutorial:right_arrow_graphic
    if ((IF_FIND(comp(955, 17)) == 1)) {  // uitutorial:ok_button
        CC_SETTRANS(int0);
    };
    return;
}