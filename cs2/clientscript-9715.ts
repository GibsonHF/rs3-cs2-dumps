//
function script9715(int0: number, int1: number, string0: string): string {
    var int2 = -1;
    if ((((OC_CATEGORY(INV_GETOBJ(94, 13)) == 5087) && (OC_HASVAROBJ(INV_GETOBJ(94, 13)) == 1)) && (item_getparam(INV_GETOBJ(94, 13), 8605) > 1))) {
        switch (int0) {
            case 45801: {
                int2 = script9692(94, 13, 0);
                break;
            }
            case 45802: {
                int2 = script9692(94, 13, 1);
                break;
            }
        };
        if ((int2 != -1)) {
            var string0 = `${string0}<br><br><col=ffffff>Ammo:</col> ${OC_NAME(int2)}`;
        };
    };
    return string0;
}