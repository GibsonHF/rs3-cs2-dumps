//
function script18915(int0: dbrow, int1: struct, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: dbrow, string0: string): void {
    var int11 = script18865(int10);
    var int12 = script18866(int10);
    var int13 = 5;
    var int14 = 10;
    script14391(comp(1284, 29), varbitclient_55448, int2, int3, 0, 0, int4, 41, 0, 0);
    CC_SETOP(1, "View Details");
    CC_SETONOP(callback(script18871, int0, int1, string0, int9));
    CC_SETMOUSEOVERCURSOR(172);
    script7920(84148253, 1, varbitclient_55448, 0, varbitclient_55448, 0, 0, 0, 1, 16, 0, 0, 1, 33780);
    CC_SETCOLOUR(int11);
    script7920(84148253, 2, varbitclient_55448, 0, varbitclient_55448, 0, 0, 1, 1, 32, 0, 1, 1, 33782);
    CC_SETCOLOUR(int11);
    script7920(84148253, 3, varbitclient_55448, 0, varbitclient_55448, 0, 0, 2, 1, 16, 0, 0, 1, 33780);
    CC_SETCOLOUR(int11);
    CC_SETHFLIP(1);
    if ((int6 > int8)) {
        if ((int5 != int8)) {
            int14 = (91 + int13);
        } else {
            int14 = 25;
        };
    };
    script20483(comp(1284, 29), 4, varbitclient_55448, 0, varbitclient_55448, int13, 0, 0, 1, int14, 0, 1, 1, 2141 as dbrow, string0, int12, -1, -1);
    CC_SETMAXLINES(2);
    if ((int6 > int8)) {
        script7920(comp(1284, 29), 5, varbitclient_55448, 0, varbitclient_55448, 5, 0, 2, 1, 16, 32, 0, 0, 33781 as graphic);
        CC_SETCOLOUR(int12);
        if ((int5 != int8)) {
            script20483(comp(1284, 29), 6, varbitclient_55448, 0, varbitclient_55448, 30, 0, 2, 0, 0, 8192, 1, 2, 2141 as dbrow, "Ends:", int12, 2, 2);
            script20483(comp(1284, 29), 7, varbitclient_55448, 0, varbitclient_55448, 30, 0, 2, 2, 0, 8192, 1, 2, 2100 as dbrow, script18864(int6), int12, 2, 0);
        };
    };
    varbitclient_55448 = (varbitclient_55448 + 1);
    return;
}