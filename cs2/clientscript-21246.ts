//
function script21246(): void {
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
    if ((int0 <= int1)) {
        stack(0);
        stack(int0);
        stack(int0);
        stack(0);
        stack(0);
        stack(0);
        stack(0);
        return;
    };
    int7 = MAX(1, (int1 - 1));
    int8 = MAX(1, (int1 - 2));
    int9 = MAX(0, (int0 - int7));
    int3 = MAX(0, MIN(int2, int9));
    if ((int3 > 0)) {
        int12 = 1;
        int6 = (int6 + 1);
    };
    if ((int3 < int9)) {
        int13 = 1;
        int6 = (int6 + 1);
    };
    int4 = MAX(1, MIN((int0 - int3), (int1 - int6)));
    int5 = (int4 + int6);
    if ((int12 == 1)) {
        if ((int3 <= int7)) {
            int10 = 0;
        } else {
            int10 = MAX(0, (int3 - int8));
        };
    };
    if ((int13 == 1)) {
        if ((int3 == 0)) {
            int11 = MIN(int9, int7);
        } else {
            int11 = MIN(int9, (int3 + int8));
        };
    };
    stack(int3);
    stack(int4);
    stack(int5);
    stack(int10);
    stack(int11);
    stack(int12);
    stack(int13);
    return;
}