//
function script1497(int0: obj, int1: int): int {
    if ((int1 == 0)) {
        return 0;
    };
    var int2 = script14342(int0, 0, 1);
    var int3 = 0;
    if ((int2 != -1)) {
        if ((CC_FIND(comp(517, 201), int2) == 1)) {
            if ((((2147483647 - CC_GETINVCOUNT()) - int1) > 0)) {
                int3 = int1;
                script13796(int0, (CC_GETINVCOUNT() + int1));
            } else {
                int3 = (2147483647 - CC_GETINVCOUNT());
                script13796(int0, 2147483647);
            };
        };
    } else {
        int2 = varplayer_8970;
        if ((int2 == -1)) {
            int2 = script9309(varplayer_8971);
        };
        if (((int2 < script3999(int0)) && (CC_FIND(comp(517, 201), int2) == 1))) {
            int3 = int1;
            script13796(int0, int1);
            if ((int2 >= varplayer_8971)) {
                varplayer_8971 = (varplayer_8971 + 1);
                script9318(1);
            };
        };
    };
    return int3;
}