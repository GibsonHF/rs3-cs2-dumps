//
function script15140(int0: dbrow): boolean {
    if ((int0 == -1 as dbrow)) {
        return true;
    };
    var int1 = -1 as graphic;
    var int2 = -1 as obj;
    [int2, int1] = dbrow_getfield(int0, 434192, 0);
    var int3 = -1 as struct;
    if ((int2 != -1 as obj)) {
        int3 = item_getparam(int2, 4414);
    };
    if ((int3 == -1 as struct)) {
        int3 = item_getparam(int2, 5051);
    };
    if (((int3 != -1 as struct) && (struct_getparam(int3, 4744) > 0))) {
        switch (int3) {
            case 1572: {
                if (((((((((varbitplayer_30305 == 1) && (varbitplayer_30306 == 1)) && (varbitplayer_30307 == 1)) && (varbitplayer_30308 == 1)) && (varbitplayer_30309 == 1)) && (varbitplayer_30310 == 1)) && (varbitplayer_30312 == 1)) && (varbitplayer_30311 == 1))) {
                    return true;
                };
                return false;
            }
            case 1348: {
                if ((((((((((varbitplayer_35849 == 1) && (varbitplayer_35850 == 1)) && (varbitplayer_35851 == 1)) && (varbitplayer_35852 == 1)) && (varbitplayer_35853 == 1)) && (varbitplayer_35854 == 1)) && (varbitplayer_35884 == 1)) && (varbitplayer_27438 == 1)) && (varbitplayer_35883 == 1))) {
                    return true;
                };
                return false;
            }
        };
        return script734(script10881(int3));
    };
    switch (int0) {
        case 3682: {
            return script734(varbitplayer_280);
        }
    };
    if ((dbrow_getfield(int0, 434256, 0) == false)) {
        script12478(`Missing a plugin for recipe ID - ${inttostring(dbrow_getfield(int0, 434176, 0), 10)}`);
        return true;
    };
    return false;
}