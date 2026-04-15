//
function script10823(int0: component): void {
    var int1 = -1 as struct;
    var int2 = false;
    var int3 = comp(-1, 65535);
    var int4 = false;
    var int5 = comp(-1, 65535);
    var int6 = 50;
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((IF_FIND(int0) == 1)) {
        int1 = cc_getparam(8106);
        if ((int1 == -1 as struct)) {
            return;
        };
        int2 = script15433(int0);
        if ((int2 == false)) {
            int3 = IF_GETLAYER(int0);
        } else {
            int3 = script11293(int1);
        };
        int6 = script11296(int1);
        if ((int6 != cc_getparam(8108))) {
            cc_setparam(8108, int6);
            script11427(int0, 1);
            int5 = script10818(int1, int3);
            script11426(int0, int5, 1);
            script10822(int3);
            return;
        };
        if ((struct_getparam(int1, 8109) == 2)) {
            int4 = script11095(int1);
            if ((((int4 == true) && (int2 == false)) || ((int4 == false) && (int2 == true)))) {
                script15427(int1, script11294(int2));
                script15425(int1, int3);
                return;
            };
        };
        if ((MODULO(CLIENTCLOCK(), enum_getvalue(0, 0, 15518 as cs2enum, int6)) != 0)) {
            return;
        };
        if (((cc_getparam(8107) == true) && ((int3 == comp(1204, 2)) || ((int3 != comp(1204, 2)) && (script11295(int1) == 0))))) {
            script2921(int0, int1);
        };
    };
    return;
}