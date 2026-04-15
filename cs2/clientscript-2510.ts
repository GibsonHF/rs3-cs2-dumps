//
function script2510(int0: int, int1: int): [int, int] {
    var int2 = enum_getvalue(0, 74, 14569 as cs2enum, int0);
    var int3 = enum_getvalue(0, 74, 14569 as cs2enum, int1);
    if ((int3 == -1 as dbrow)) {
        return script2511();
    };
    script20387();
    if ((DB_GETFIELDCOUNT(int3, 127024) == 0)) {
        switch (dbrow_getfield(int3, 127040, 0)) {
            case 1: {
                if ((varbitplayer_38842 == 1)) {
                    return script2511();
                };
                break;
            }
            case 2: {
                if ((varbitplayer_38842 == 0)) {
                    return script2511();
                };
                break;
            }
            case 4: {
                if ((CLIENTTYPE() != 8)) {
                    return script2511();
                };
                break;
            }
            case 3: {
                if ((PLATFORMTYPE() != 1)) {
                    return script2511();
                };
                break;
            }
            case 5: {
                if ((script19316() == false)) {
                    return script2511();
                };
                break;
            }
            case 6: {
                if ((varplayer_12314 <= 0)) {
                    return script2511();
                };
                break;
            }
        };
        return [script2512(int2, int3, int0), int1];
    };
    int3 = dbrow_getfield(int3, 127024, 0);
    return [int1, enum_getreverseindex(74, 0, 14569 as cs2enum, int3, 0)];
}