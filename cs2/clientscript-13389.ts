//
function script13389(int0: unknown_int, int1: component, int2: int): void {
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
            stack(struct_getparam(int7, 6533));
            stack(48758801);
            IF_SETGRAPHIC();
            stack(int7);
            stack(6534);
            struct_getparam();
            stack(48758802);
            IF_SETGRAPHIC();
            stack(int7);
            stack(6535);
            struct_getparam();
            stack(48758803);
            IF_SETGRAPHIC();
            stack(int7);
            stack(6536);
            struct_getparam();
            stack(48758804);
            IF_SETGRAPHIC();
            stack(int7);
            stack(6537);
            struct_getparam();
            stack(48758805);
            IF_SETGRAPHIC();
            stack(int7);
            stack(6538);
            struct_getparam();
            stack(48758806);
            IF_SETGRAPHIC();
            stack(int7);
            stack(6539);
            struct_getparam();
            stack(48758807);
            IF_SETGRAPHIC();
            stack(int7);
            stack(6540);
            struct_getparam();
            stack(48758808);
            IF_SETGRAPHIC();
            stack(int7);
            stack(6541);
            struct_getparam();
            stack(48758809);
            IF_SETGRAPHIC();
            IF_SETTRANS(255, 48758801);
            IF_SETTRANS(255, 48758802);
            IF_SETTRANS(255, 48758803);
            IF_SETTRANS(255, 48758804);
            IF_SETTRANS(255, 48758805);
            IF_SETTRANS(255, 48758806);
            IF_SETTRANS(255, 48758807);
            IF_SETTRANS(255, 48758808);
            IF_SETTRANS(255, 48758809);
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