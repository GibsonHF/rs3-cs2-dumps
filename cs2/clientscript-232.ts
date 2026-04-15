//
function script232(int0: unknown_int): void {
    var int1 = (0 - 1);
    var int2 = -1 as dbrow;
    while ((++int1 <= 3)) {
        stack(806912);
        stack(int1);
        DB_FIND(0);
        dbrow_findnext();
        int2 = stack();
        if ((int2 != -1)) {
            if (((script16811(int2) >= 0) || (script16812(int2) == 0))) {
                script16808(int2, false);
                script16814(int2);
            } else {
                script16808(int2, true);
            };
        };
    };
    return;
}