//
function script13390(int0: unknown_int, int1: component, int2: int, int3: unknown_int, int4: int, int5: int, int6: unknown_int): void {
    var int7 = (255 - MIN(255, (MAX(0, (CLIENTCLOCK() - int2)) * 4)));
    var int8 = enum_getvalue(0, 73, 12591 as cs2enum, varclient_6040);
    var int9 = -1 as cs2enum;
    if ((int6 != -1)) {
        IF_SETTRANS(int7, comp(744, 17));
        IF_SETTRANS(int7, comp(744, 18));
        IF_SETTRANS(int7, comp(744, 19));
        IF_SETTRANS(int7, comp(744, 20));
        IF_SETTRANS(int7, comp(744, 21));
        IF_SETTRANS(int7, comp(744, 22));
        IF_SETTRANS(int7, comp(744, 23));
        IF_SETTRANS(int7, comp(744, 24));
        IF_SETTRANS(int7, comp(744, 25));
    };
    if ((int6 == -1)) {
        IF_SETTRANS(int7, int1);
        if ((int1 == comp(744, 14))) {
            IF_SETTRANS((255 - int7), comp(744, 30));
        };
    };
    if ((int7 == 0)) {
        if ((int3 == 111)) {
            IF_SETONTIMER(callback(script13387, int0, int1, CLIENTCLOCK(), 111), int0);
        };
        varclient_6040 = int4;
        int8 = enum_getvalue(0, 73, 12591 as cs2enum, int4);
        if ((int8 != -1 as struct)) {
            int9 = struct_getparam(int8, 6589);
            if ((int9 != -1 as cs2enum)) {
                varclient_6045 = int5;
                if ((varclient_6042 != 1)) {
                    IF_SETONTIMER(callback(script13387, int0, int1, CLIENTCLOCK(), varclient_6040), int0);
                };
            };
        };
        script13385();
        IF_SETONTIMER(callback(script13391, int1, CLIENTCLOCK(), int6), int1);
    };
    return;
}