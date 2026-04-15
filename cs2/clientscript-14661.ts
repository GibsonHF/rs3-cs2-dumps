//
function script14661(int0: int): int {
    var int1 = -1 as dbrow;
    var int2 = 0;
    var int3 = script14662();
    var int4 = 0;
    while ((++int4 <= int3)) {
        int1 = script14655(int0, int4);
        if ((int1 != -1 as dbrow)) {
            int2 = (int2 + script14676(int1));
        };
    };
    if (((script15809(3) >= 2) && (script14627() == 1))) {
        int2 = (int2 - 3);
    };
    return int2;
}