//[clientscript,ii_storage_update_side]
function script2906(int0: component, int1: obj, int2: component): void {
    var int3 = IF_GETLAYER(int0);
    var int4 = 0;
    if ((int1 == 10010 as obj)) {
        int4 = (INV_TOTAL(94 as inv, 11259 as obj) + INV_TOTAL(93 as inv, 11259 as obj));
        if ((int4 > 0)) {
            var int1 = 11259 as obj;
        };
    };
    switch (int1) {
        case 10010:
        case 11259: {
            if ((int4 == 0)) {
                int4 = (INV_TOTAL(93 as inv, 10010 as obj) + INV_TOTAL(94 as inv, 10010 as obj));
            };
            break;
        }
        default: {
            int4 = INV_TOTAL(93 as inv, int1);
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