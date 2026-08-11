//
function script6088(int0: number, int1: number): void {
    var int2 = comp(1265, 20);  // shop_main:list_background
    var int3 = comp(1265, 23);  // shop_main:list_name
    var int4 = comp(1265, 24);  // shop_main:list_icon
    var int5 = comp(1265, 22);  // shop_main:list_currency
    var int6 = comp(1265, 21);  // shop_main:list_price
    var int7 = comp(1265, 25);  // shop_main:list_extra_icon
    if ((int1 == 1)) {
        int2 = comp(1265, 14);  // shop_main:free_background
        int3 = comp(1265, 16);  // shop_main:free_name
        int4 = comp(1265, 17);  // shop_main:free_icon
        int5 = comp(-1, 65535);
        int6 = comp(1265, 15);  // shop_main:free_price
        int7 = comp(1265, 18);  // shop_main:free_extra_icon
    };
    CC_CREATE(int2, 5, int0);
    CC_CREATE(int3, 4, int0);
    CC_CREATE(int4, 5, int0);
    CC_CREATE(int6, 4, int0);
    if ((int5 != comp(-1, 65535))) {
        CC_CREATE(int5, 5, int0);
    };
    CC_CREATE(int7, 5, int0);
    return;
}