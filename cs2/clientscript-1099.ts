//
function script1099(int0: number): number {
    CC_DELETEALL(comp(91, 6));  // rand_party_side_new:party_layer
    var int1 = 120;
    if ((script13749() == 1)) {
        int1 = 160;
    };
    var int2 = ((int1 - 10) / 5);
    IF_SETSIZE(0, int1, 1, 0, comp(91, 6));  // rand_party_side_new:party_layer
    IF_SETPOSITION(0, int0, 0, 0, comp(91, 6));  // rand_party_side_new:party_layer
    IF_SETPOSITION(0, (2 + int2), 1, 0, comp(91, 8));  // rand_party_side_new:devider
    IF_SETPOSITION(0, (2 + (int2 * 2)), 1, 0, comp(91, 9));  // rand_party_side_new:devider_1
    IF_SETPOSITION(0, (2 + (int2 * 3)), 1, 0, comp(91, 10));  // rand_party_side_new:devider_2
    IF_SETPOSITION(0, (2 + (int2 * 4)), 1, 0, comp(91, 11));  // rand_party_side_new:devider_3
    var int3 = 6;
    var int4 = comp(91, 19);  // rand_party_side_new:mem1_name
    var int5 = 0;
    while ((int5 < 5)) {
        switch (int5) {
            case 0: {
                int4 = comp(91, 19);  // rand_party_side_new:mem1_name
                break;
            }
            case 1: {
                int4 = comp(91, 20);  // rand_party_side_new:mem2_name
                break;
            }
            case 2: {
                int4 = comp(91, 21);  // rand_party_side_new:mem3_name
                break;
            }
            case 3: {
                int4 = comp(91, 22);  // rand_party_side_new:mem4_name
                break;
            }
            case 4: {
                int4 = comp(91, 23);  // rand_party_side_new:mem5_name
                break;
            }
        };
        IF_SETPOSITION(30, (int3 - 3), 0, 0, int4);
        IF_SETSIZE(60, int2, 1, 0, int4);
        if ((script6431() == 1)) {
            IF_SETTEXTFONT(28 as fontmetrics, int4);
        } else {
            IF_SETTEXTFONT(26 as fontmetrics, int4);
        };
        int3 = (int3 + int2);
        int5 = (int5 + 1);
    };
    return (int0 + int1);
}