//
function script232(int0: number): void {
    var int1 = (0 - 1);
    var int2 = -1;
    int1 = (int1 + 1);
    while ((int1 <= 3)) {
        stack(806912);
        stack(int1);
        DB_FIND(0);
        int2 = dbrow_findnext();
        if ((int2 != -1)) {
            if (((script16811(int2) >= 0) || (script16812(int2) == 0))) {
                script16808(int2, 0);
                script16814(int2);
            } else {
                script16808(int2, 1);
            };
        };
    };
    return;
}