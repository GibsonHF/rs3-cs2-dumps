//
function script13170(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, string0: string): void {
    var string0 = LOWERCASE(string0);
    define_array((6 + 1));
    pop_array(1, int1);
    pop_array(2, int2);
    pop_array(3, int3);
    pop_array(4, int4);
    pop_array(5, int5);
    pop_array(6, int6);
    var string1 = "null";
    var int10 = -1;
    define_array[65536]((6 + 1));
    var int11 = -1;
    var int12 = -1;
    var int13 = -1;
    var int14 = 0;
    if ((IF_FIND(comp(1843, 183)) == 1)) {
        string1 = cc_getparam(5441);
        int10 = cc_getparam(6362);
        pop_array[1](1, cc_getparam(6364));
        pop_array[1](2, cc_getparam(6365));
        pop_array[1](3, cc_getparam(6366));
        pop_array[1](4, cc_getparam(6367));
        pop_array[1](5, cc_getparam(6368));
        pop_array[1](6, cc_getparam(6369));
        int11 = cc_getparam(6370);
        int12 = cc_getparam(6371);
        int13 = cc_getparam(6372);
        if ((((((((((((strcmp(string0, string1) == 0) && (int10 == int0)) && (push_array[1](1) == push_array(1))) && (push_array[1](2) == push_array(2))) && (push_array[1](3) == push_array(3))) && (push_array[1](4) == push_array(4))) && (push_array[1](5) == push_array(5))) && (push_array[1](6) == push_array(6))) && (int11 == int7)) && (int12 == int8)) && (int13 == int9))) {
            return;
        };
        CC_SETPARAM_STRING(5441, string0);
        cc_setparam(6362, int0);
        cc_setparam(6364, push_array(1));
        cc_setparam(6365, push_array(2));
        cc_setparam(6366, push_array(3));
        cc_setparam(6367, push_array(4));
        cc_setparam(6368, push_array(5));
        cc_setparam(6369, push_array(6));
        cc_setparam(6370, int7);
        cc_setparam(6371, int8);
        cc_setparam(6372, int9);
        cc_setparam(6359, 0);
        CC_SETSCROLLPOS(0, 0);
    };
    if ((varbitclient_35134 == 0)) {
        script13177();
    } else {
        script13176();
    };
    return;
}