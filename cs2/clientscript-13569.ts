//
function script13569(int0: struct): int {
    var int1 = struct_getparam(int0, 6423);
    var string0 = "";
    if ((int1 == -1337)) {
        switch (int0) {
            case 35936: {
                return varplayer_423;
            }
            case 38007: {
                return script13496();
            }
            case 35970: {
                return (POW(2, ENUM_GETOUTPUTCOUNT(struct_getparam(int0, 6426))) - 1);
            }
            case 35935: {
                return (POW(2, ENUM_GETOUTPUTCOUNT(1482 as cs2enum)) - 1);
            }
            case 6900: {
                return script13639();
            }
            case 12270: {
                return ENUM_GETOUTPUTCOUNT(9498 as cs2enum);
            }
        };
        string0 = script13284(int0);
        script12478(`<col=FF0000>cheevo_get_check_var_total - Achievement #${inttostring(struct_getparam(int0, 6413), 10)} ${string0} does not have a return case.`);
        return 0;
    };
    if ((struct_getparam(int0, 6424) == 1)) {
        if ((struct_getparam(int0, 6426) != -1 as cs2enum)) {
            int1 = ENUM_GETOUTPUTCOUNT(struct_getparam(int0, 6426));
        };
        return (POW(2, int1) - 1);
    };
    return int1;
}