//
function script19347(int0: int, int1: int, int2: int): int {
    var int3 = int0;
    if ((int3 == -1)) {
        var int0 = script19579();
    };
    if ((varplayer_11958 != -1)) {
        if ((int2 == 1)) {
            if ((int3 == -1)) {
                int0 = varplayer_11958;
            } else {
                if (((((int0 == int3) && (int0 != script19579())) && (int0 < int1)) && (script19586(int0) == -1 as obj))) {
                    return int0;
                };
                if ((script19579() >= int1)) {
                    if (((int3 != -1) && ((int3 >= int1) || (script19586(int3) != -1 as obj)))) {
                        int0 = (int0 - script19577(0, int0));
                        script19596();
                    };
                } else if (((int0 > 0) && (script19586((int0 - 1)) == -1 as obj))) {
                    return (int0 - 1);
                };
            };
        } else if ((int2 > 1)) {
            int0 = (varplayer_11958 - script19577(0, varplayer_11958));
            script19596();
        };
    };
    if ((int0 >= 200)) {
        int0 = script19348(int0);
    };
    if ((script19586(int0) != -1 as obj)) {
        script19601(int0, (MIN(int1, (script19579() + int2)) - int2), int2);
        varplayer_11959 = (varplayer_11959 + int2);
    } else if ((int0 >= varplayer_11959)) {
        varplayer_11959 = (varplayer_11959 + int2);
    };
    return int0;
}