//
function script273(): number {
    if (((item_getparam(INV_GETOBJ(94 as inv, 10), 2881) == 2) && (INV_GETOBJ(94 as inv, 3) != -1 as obj))) {
        if (((INV_TOTALPARAM(94 as inv, 2825) == 1) || (INV_TOTALPARAM(94 as inv, 8569) == 1))) {
            return 1;
        };
    };
    return -1;
}