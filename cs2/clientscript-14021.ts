//
function script14021(int0: number): void {
    var int1 = comp(1934, 5);  // trail17_skyscrapers:hint_top
    var int2 = -1;
    var int3 = -1;
    int2 = (int2 + 1);
    while ((int2 < 4)) {
        int3 = (int3 + 1);
        while ((int3 < int0)) {
            if ((CC_FIND(int1, int3) == 1)) {
                CC_SETTEXT(inttostring(script3859(int3, int2), 10));
            };
        };
        switch (int2) {
            case 0: {
                int1 = comp(1934, 3);  // trail17_skyscrapers:hint_left
                break;
            }
            case 1: {
                int1 = comp(1934, 4);  // trail17_skyscrapers:hint_bottom
                break;
            }
            case 2: {
                int1 = comp(1934, 2);  // trail17_skyscrapers:hint_right
                break;
            }
        };
        int3 = -1;
    };
    return;
}