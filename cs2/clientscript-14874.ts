//
function script14874(int0: component, int1: int, int2: int, int3: int, int4: int, int5: boolean, string0: string, string1: string): void {
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    if ((STRING_LENGTH(string0) > 0)) {
        int7 = MAX(120, (29 + PARAWIDTH(string0, int3, 26 as fontmetrics)));
        int6 = (int6 + 1);
    };
    if ((STRING_LENGTH(string1) > 0)) {
        int7 = MIN((int3 / 2), int7);
        int8 = MIN((int3 / 2), MAX(120, (29 + PARAWIDTH(string1, (int3 - int7), 26 as fontmetrics))));
        int6 = (int6 + 1);
    };
    var int1 = (int1 + ((((int3 - int7) - int8) - ((10 * int6) - 1)) / 2));
    if ((int7 > 0)) {
        script7924(int0, IF_GETNEXTSUBID(int0), 24, 24, int1, (int2 + ((int4 - 24) / 2)), 30347 as graphic, false, false, false, 0);
        script6203(int0, ((int7 - 24) - 5), int4, ((int1 + 24) + 5), int2, 26 as fontmetrics, string0, 3);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXTSHADOW(int5);
        int1 = (int1 + int7);
        if ((--int6 > 0)) {
            int1 = (int1 + 10);
        };
    };
    if ((int8 > 0)) {
        script7924(int0, IF_GETNEXTSUBID(int0), 22, 22, int1, (int2 + ((int4 - 22) / 2)), 10316 as graphic, false, false, false, 0);
        script6203(int0, ((int8 - 22) - 5), int4, ((int1 + 22) + 5), int2, 26 as fontmetrics, string1, 3);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXTSHADOW(int5);
        int1 = (int1 + int7);
        if ((--int6 > 0)) {
            int1 = (int1 + 10);
        };
    };
    return;
}