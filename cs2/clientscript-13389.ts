//
function script13389(int0: number, int1: number, int2: number): void {
    if ((enum_getvalue(0, 73, 12591 as cs2enum, int2) == 1579 as struct)) {
        var int2 = 0;
    };
    if ((int2 == 112)) {
        int2 = 109;
    };
    var int3 = int2;
    var int4 = 0;
    if ((int2 == 111)) {
        varclient_6042 = 1;
        int3 = script13386(12591 as cs2enum);
    } else {
        varclient_6042 = 0;
    };
    var int5 = enum_getvalue(0, 73, 12591 as cs2enum, int3);
    var int6 = -1 as cs2enum;
    if ((int5 != -1 as struct)) {
        int6 = struct_getparam(int5, 6589);
        if ((int6 != -1 as cs2enum)) {
            int4 = script13386(int6);
        };
    };
    int5 = enum_getvalue(0, 73, 12591 as cs2enum, int2);
    int6 = -1 as cs2enum;
    var int7 = -1 as struct;
    if (((int5 != -1 as struct) && (int3 == varclient_6040))) {
        int6 = struct_getparam(int5, 6589);
        if ((((int2 == varclient_6040) && (varclient_6042 == 0)) && (int6 == -1 as cs2enum))) {
            return;
        };
        if ((int6 != -1 as cs2enum)) {
            int7 = enum_getvalue(0, 73, int6, 2147483647);
        };
        if (((int7 != -1 as struct) && (int1 == comp(744, 14)))) {
            IF_SETHIDE(false, comp(744, 15));
            IF_SETHIDE(false, comp(744, 16));
            IF_SETGRAPHIC(struct_getparam(int7, 6533), comp(744, 17));
            IF_SETGRAPHIC(struct_getparam(int7, 6534), comp(744, 18));
            IF_SETGRAPHIC(struct_getparam(int7, 6535), comp(744, 19));
            IF_SETGRAPHIC(struct_getparam(int7, 6536), comp(744, 20));
            IF_SETGRAPHIC(struct_getparam(int7, 6537), comp(744, 21));
            IF_SETGRAPHIC(struct_getparam(int7, 6538), comp(744, 22));
            IF_SETGRAPHIC(struct_getparam(int7, 6539), comp(744, 23));
            IF_SETGRAPHIC(struct_getparam(int7, 6540), comp(744, 24));
            IF_SETGRAPHIC(struct_getparam(int7, 6541), comp(744, 25));
            IF_SETTRANS(255, comp(744, 17));
            IF_SETTRANS(255, comp(744, 18));
            IF_SETTRANS(255, comp(744, 19));
            IF_SETTRANS(255, comp(744, 20));
            IF_SETTRANS(255, comp(744, 21));
            IF_SETTRANS(255, comp(744, 22));
            IF_SETTRANS(255, comp(744, 23));
            IF_SETTRANS(255, comp(744, 24));
            IF_SETTRANS(255, comp(744, 25));
        };
    };
    if ((((int2 == varclient_6040) && (varclient_6042 == 0)) && (int6 == -1 as cs2enum))) {
        return;
    };
    if ((int1 != comp(-1, 65535))) {
        IF_SETHIDE(false, int1);
        IF_SETTRANS(255, int1);
    };
    IF_SETONTIMER(callback(script13390, int0, int1, CLIENTCLOCK(), int2, int3, int4, int7), int1);
    IF_SETONTIMER(callback(), int0);
    return;
}