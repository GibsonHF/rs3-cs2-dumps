//
function script9715(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = -1 as obj;
    if ((((OC_CATEGORY(INV_GETOBJ(94 as inv, 13)) == 5087 as category) && (OC_HASVAROBJ(INV_GETOBJ(94 as inv, 13)) == 1)) && (item_getparam(INV_GETOBJ(94 as inv, 13), 8605) > 1))) {
        switch (int0) {
            case 45801: {
                int2 = script9692(94 as inv, 13, 0);
                break;
            }
            case 45802: {
                int2 = script9692(94 as inv, 13, 1);
                break;
            }
        };
        if ((int2 != -1 as obj)) {
            var string0 = `${string0}<br><br><col=ffffff>Ammo:</col> ${OC_NAME(int2)}`;
        };
    };
    return string0;
}