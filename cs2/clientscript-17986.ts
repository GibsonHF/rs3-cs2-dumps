//
function script17986(int0: boolean, int1: boolean, int2: int): dbrow {
    var int3 = -1 as dbrow;
    if ((int0 == true)) {
        if ((int1 == true)) {
            if ((int2 != -1)) {
                int3 = script17989(28);
            } else {
                int3 = script17989(16);
            };
        } else if ((int2 != -1)) {
            int3 = script17989(29);
        } else {
            int3 = script17989(15);
        };
    } else if ((int1 == true)) {
        if ((int2 != -1)) {
            int3 = script17989(30);
        } else {
            int3 = script17989(18);
        };
    } else if ((int2 != -1)) {
        int3 = script17989(31);
    } else {
        int3 = script17989(17);
    };
    return int3;
}