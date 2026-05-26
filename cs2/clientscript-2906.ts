//[clientscript,ii_storage_update_side]
function script2906(int0: number, int1: number, int2: number): void {
    var int3 = IF_GETLAYER(int0);
    var int4 = 0;
    if ((int1 == 10010)) {
        int4 = (INV_TOTAL(94, 11259) + INV_TOTAL(93, 11259));
        if ((int4 > 0)) {
            var int1 = 11259;
        };
    };
    switch (int1) {
        case 10010:
        case 11259: {
            if ((int4 == 0)) {
                int4 = (INV_TOTAL(93, 10010) + INV_TOTAL(94, 10010));
            };
            break;
        }
        default: {
            int4 = INV_TOTAL(93, int1);
            break;
        }
    };
    IF_SETTEXT(OC_NAME(int1), int2);
    if ((int4 > 0)) {
        IF_SETCOLOUR(16776960, int2);
        IF_SETOBJECT(int1, int4, int0);
    } else {
        IF_SETCOLOUR(13369344, int2);
        IF_SETOBJECT(int1, -1, int0);
    };
    IF_SETOUTLINE(1, int0);
    return;
}