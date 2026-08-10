//
function script20947(): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    stack(int0);
    script20948();
    [int1, int2, int3] = [];
    var int4 = 0;
    var int5 = -1;
    if ((int1 == 1)) {
        int4 = (int4 + 1);
        int5 = 0;
    };
    if ((int2 == 1)) {
        int4 = (int4 + 1);
        int5 = 1;
    };
    if ((int3 == 1)) {
        int4 = (int4 + 1);
        int5 = 2;
    };
    if ((int4 != 1)) {
        stack(-1);
        return;
    };
    stack(int5);
    return;
}