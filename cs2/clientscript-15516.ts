//
function script15516(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 4;
    var int11 = 0;
    var int12 = 0;
    if ((varbitplayer_12077 == 0)) {
        while ((++int7 <= 10)) {
            int11 = script6540(int7);
            if ((int11 != 0)) {
                stack(495632);
                stack(int11);
                DB_FIND(0);
                dbrow_findnext();
                stack(495616);
                stack(0);
                dbrow_getfield();
                [int9, int12] = script15517(stack(), int9, int12, int1, int2, int3, int4, int5, int6);
            };
        };
    };
    int7 = -1;
    while ((++int7 < 67)) {
        int8 = push_array(int7);
        stack(495616);
        stack(int8);
        DB_FIND(0);
        if ((varbitplayer_12077 == 0)) {
            dbrow_findnext();
            stack(495632);
            stack(0);
            dbrow_getfield();
            if ((script10989(stack()) == 0)) {
                [int9, int12] = script15517(int8, int9, int12, int1, int2, int3, int4, int5, int6);
            };
        } else {
            [int9, int12] = script15517(int8, int9, int12, int1, int2, int3, int4, int5, int6);
        };
    };
    script15518();
    if ((int9 > IF_GETHEIGHT(int1))) {
        IF_SETSCROLLSIZE(0, (int9 - int10), 51380265);
    } else {
        IF_SETSCROLLSIZE(0, 0, 51380265);
    };
    script7791(51380273, 51380265);
    return;
}