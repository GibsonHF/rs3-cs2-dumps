//
function script18198(int0: struct, int1: dbrow): struct {
    var int2 = -1 as struct;
    var int3 = -1 as struct;
    var int4 = -1;
    if ((IF_FIND[1](IF_GETLAYER(struct_getparam(int0, 4037))) == 1)) {
        [int2, int3, int4] = script13178(int1);
        if (((cc_getparam[1](4405) != int2) || (cc_getparam[1](4425) != int3))) {
            cc_setparam[1](4405, int2);
            cc_setparam[1](4425, int3);
            script10014(int0, int2, int3);
        };
    };
    return int2;
}