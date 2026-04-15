//
function script16948(int0: int): dbrow {
    var int1 = 0;
    var int2 = -1 as dbrow;
    while ((++int1 <= 3)) {
        if ((script13383(int1) == 1)) {
            int2 = script16947(int1);
            if (((int2 != -1 as dbrow) && (dbrow_getfield(int2, 843792, 0) == int0))) {
                return int2;
            };
        };
    };
    return -1 as dbrow;
}