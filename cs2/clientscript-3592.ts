//
function script3592(int0: int): void {
    var int1 = 1;
    var int2 = comp(-1, 65535);
    while ((int1 <= ENUM_GETOUTPUTCOUNT(15792 as cs2enum))) {
        int2 = enum_getvalue(0, 9, 15792 as cs2enum, int1);
        if ((int2 != comp(-1, 65535))) {
            if ((int0 >= int1)) {
                script3593(int1, 1, int2);
            } else {
                script3593(int1, 0, int2);
            };
        };
        int1 = (int1 + 1);
    };
    return;
}