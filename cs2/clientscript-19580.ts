//
function script19580(int0: obj): int {
    var int1 = script19584(int0, 0, 0);
    if ((int1 == -1)) {
        return 0;
    };
    if ((script3802(int0) == false)) {
        return script19587(int1);
    };
    var int2 = script19587(int1);
    var int3 = script19579();
    int1 = (int1 + 1);
    while ((int1 < int3)) {
        if ((script19586(int1) == int0)) {
            int2 = (int2 + script19587(int1));
        };
        int1 = (int1 + 1);
    };
    return int2;
}