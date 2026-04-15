//[proc,gravestone_shop_createbutton]
function script682(int0: component, int1: int, int2: int, int3: component, int4: component, int5: component, int6: component, int7: component, int8: component): void {
    var int9 = ((IF_GETWIDTH(int0) - 164) / 2);
    var int10 = (int9 + ((146 + int9) * int2));
    CC_CREATE(int0, 3, (int2 * 2));
    CC_SETSIZE(164, 146, 0, 0);
    CC_SETPOSITION(int9, int10, 0, 0);
    if ((varbitplayer_1669 == int1)) {
        CC_SETCOLOUR(8323072);
    } else if (((varbitplayer_28095 - 1) == int1)) {
        CC_SETCOLOUR(15777401);
    } else {
        CC_SETCOLOUR(0);
    };
    CC_SETTRANS(200);
    CC_SETFILL(1);
    CC_SETOP(1, "Choose");
    CC_SETOPBASE(`<col=ff9040>${enum_getvalue(0, 36, 1099 as cs2enum, int1)}</col>`);
    CC_SETONOP(callback(script687, int1, int0, -2147483643, int3, int4, int5, int6, int7, int8));
    CC_CREATE(int0, 6, ((int2 * 2) + 1));
    CC_SETSIZE(164, 146, 0, 0);
    CC_SETPOSITION(int9, int10, 0, 0);
    script683(int1);
    return;
}