//
function script17141(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 0;
    switch (int0) {
        case 14823: {
            int2 = 16;
            break;
        }
        case 14817: {
            int2 = 12;
            break;
        }
        case 14811: {
            int2 = 8;
            break;
        }
        case 14805: {
            int2 = 4;
            break;
        }
    };
    if ((struct_getparam(int0, 2842) == 1)) {
        var string0 = `${string0}<br>- <sprite=23399><nbsp><col=ffffff>${struct_getparam(52777 as struct, 2794)}</col>: Hits up to ${script18561(9)} within ${script17709(1)} of the target, dealing ${script17717(70)}.`;
        string0 = `${string0}<br>- <sprite=23399><nbsp><col=ffffff>${struct_getparam(52777 as struct, 2794)}</col>: ${script16284(int2)}.`;
    } else {
        string0 = `${string0}<br>- <sprite=23399><nbsp><col=ffffff>${struct_getparam(52777 as struct, 2794)}</col>: ${script17725(int2)}.`;
    };
    return string0;
}