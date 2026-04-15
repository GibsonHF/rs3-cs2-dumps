//
function script4797(): [int, int, int, int, int, int] {
    var int0 = 0;
    var int1 = 1;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = -1 as graphic;
    var string0 = "";
    if ((CLANPROFILE_FIND() == 1)) {
        while (((int1 <= 31) && (int8 == 0))) {
            int0 = script4790(int1);
            if ((int0 > 600)) {
                int8 = 1;
            } else if ((int0 < 300)) {
            } else {
                [int21, string0, int5, int6, int7, int2, int3, int4] = script4791(int0);
                int5 = (int5 - int6);
                [int9, int10, int11, int12, int13, int14] = script4792(int0, int5);
                if ((int7 == 2)) {
                    int9 = (int9 * 2);
                    int10 = (int10 * 2);
                    int11 = (int11 * 2);
                    int12 = (int12 * 2);
                    int13 = (int13 * 2);
                    int14 = (int14 * 2);
                };
                int15 = (int15 + int9);
                int16 = (int16 + int10);
                int17 = (int17 + int11);
                int18 = (int18 + int12);
                int19 = (int19 + int13);
                int20 = (int20 + int14);
            };
            int1 = (int1 + 1);
        };
    };
    return [int15, int16, int17, int18, int19, int20];
}