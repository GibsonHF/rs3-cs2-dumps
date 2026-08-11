//
function script20794(int0: number): number {
    var int1 = 99221507;
    var int2 = 0;
    var int3 = 1;
    if ((varclient_8427 == comp(1518, 8))) {  // house_furniture_trunk:filters
        int3 = 0;
    };
    script7896(int1, 0, 0, int2, 0, 0, 0, 24, 1, 0, 4487, 1, 12625, -1, varbitclient_61235);
    CC_SETONDROPDOWNSELECT(callback(script20796, -2147483643, -2147483647, -2147483646));
    int2 = ((int2 + 24) + 4);
    script7896(int1, 1, 0, int2, 0, 0, 0, 24, 1, 0, 4487, int3, 12626, -1, varbitclient_61236);
    CC_SETONDROPDOWNSELECT(callback(script20796, -2147483643, -2147483647, -2147483646));
    int2 = ((int2 + 24) + 4);
    var int0 = (int0 - 22);
    int2 = script20795(int1, 2, int2, int0, "Can be unlocked from recipes", varbitclient_61237, int3);
    int2 = script20795(int1, 3, int2, int0, "Construction level requirement met", varbitclient_61238, 1);
    int2 = script20795(int1, 4, int2, int0, "Holiday furniture", varbitclient_61240, 1);
    int2 = script20795(int1, 5, int2, int0, "Stored", varbitclient_61239, int3);
    script7896(int1, 6, 0, int2, 0, 0, 28, 24, 1, 0, 4487, 1, 12627, -1, varbitclient_61233);
    CC_SETONDROPDOWNSELECT(callback(script20796, -2147483643, -2147483647, -2147483646));
    script7852(int1, 7, 0, int2, 2, 0, 24, 24, 0, 0, callback(script4476));
    CC_SETOP(1, "Toggle");
    CC_SETONOP(callback(script20797, -2147483643));
    var int4 = 23788;
    if ((varbitclient_61234 == 1)) {
        int4 = 23783;
    };
    script2994(int1, 8, 4, (int2 + 4), 2, 0, 15, 15, 0, 0, int4);
    int2 = ((int2 + 24) + (4 * 2));
    return int2;
}