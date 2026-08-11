//
function script15516(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 4;
    var int11 = 0;
    var int12 = 0;
    if ((varbitplayer_12077 == 0)) {
        int7 = (int7 + 1);
        while ((int7 <= 10)) {
            int11 = script6540(int7);
            if ((int11 != 0)) {
                stack(495632);
                stack(int11);
                DB_FIND(0);
                [int9, int12] = script15517(dbrow_getfield(dbrow_findnext(), 495616, 0), int9, int12, int1, int2, int3, int4, int5, int6);
            };
        };
    };
    int7 = -1;
    int7 = (int7 + 1);
    while ((int7 < 67)) {
        int8 = push_array(int7);
        stack(495616);
        stack(int8);
        DB_FIND(0);
        if ((varbitplayer_12077 == 0)) {
            if ((script10989(dbrow_getfield(dbrow_findnext(), 495632, 0)) == 0)) {
                [int9, int12] = script15517(int8, int9, int12, int1, int2, int3, int4, int5, int6);
            };
        } else {
            [int9, int12] = script15517(int8, int9, int12, int1, int2, int3, int4, int5, int6);
        };
    };
    script15518();
    if ((int9 > IF_GETHEIGHT(int1))) {
        IF_SETSCROLLSIZE(0, (int9 - int10), comp(784, 41));  // fairyrings:log_content
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(784, 41));  // fairyrings:log_content
    };
    script7791(51380273, 51380265);
    return;
}