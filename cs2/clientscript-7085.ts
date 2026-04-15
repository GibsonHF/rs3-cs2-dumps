//
function script7085(int0: component, int1: inv, int2: unknown_int): void {
    var int3 = -1 as cs2enum;
    if ((varplayer_6168 != -1 as struct)) {
        int3 = struct_getparam(varplayer_6168, 5688);
        if ((int3 == -1 as cs2enum)) {
            varclient_5183 = struct_getparam(varplayer_6168, 5689);
            IF_SETONTIMER(callback(), int0);
        } else if ((MODULO(CLIENTCLOCK(), (struct_getparam(varplayer_6168, 5687) / ENUM_GETOUTPUTCOUNT(int3))) == 0)) {
            if ((int2 == 0)) {
                varclient_5182 = (varclient_5182 + 1);
                if ((varclient_5182 > (ENUM_GETOUTPUTCOUNT(int3) - 1))) {
                    varclient_5182 = 0;
                };
                varclient_5183 = enum_getvalue(0, 26, int3, varclient_5182);
            };
            script7995(int0, int1);
        };
    };
    return;
}