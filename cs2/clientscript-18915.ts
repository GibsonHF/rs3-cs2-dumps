//
function script18915(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, string0: string): void {
    var int11 = script18865(int10);
    var int12 = script18866(int10);
    var int13 = 5;
    var int14 = 10;
    script14391(84148253, varbitclient_55448, int2, int3, 0, 0, int4, 41, 0, 0);
    CC_SETOP(1, "View Details");
    CC_SETONOP(callback(script18871, int0, int1, string0, int9));
    CC_SETMOUSEOVERCURSOR(172);
    script7920(84148253, 1, varbitclient_55448, 0, varbitclient_55448, 0, 0, 0, 1, 16, 0, 0, 1, 33780);
    CC_SETCOLOUR(int11);
    script7920(84148253, 2, varbitclient_55448, 0, varbitclient_55448, 0, 0, 1, 1, 32, 0, 1, 1, 33782);
    CC_SETCOLOUR(int11);
    script7920(84148253, 3, varbitclient_55448, 0, varbitclient_55448, 0, 0, 2, 1, 16, 0, 0, 1, 33780);
    CC_SETCOLOUR(int11);
    CC_SETHFLIP(true);
    if ((int6 > int8)) {
        if ((int5 != int8)) {
            int14 = (91 + int13);
        } else {
            int14 = 25;
        };
    };
    script20483(84148253, 4, varbitclient_55448, 0, varbitclient_55448, int13, 0, 0, 1, int14, 0, 1, 1, 2141, string0, int12, -1, -1);
    CC_SETMAXLINES(2);
    if ((int6 > int8)) {
        script7920(84148253, 5, varbitclient_55448, 0, varbitclient_55448, 5, 0, 2, 1, 16, 32, 0, 0, 33781);
        CC_SETCOLOUR(int12);
        if ((int5 != int8)) {
            script20483(84148253, 6, varbitclient_55448, 0, varbitclient_55448, 30, 0, 2, 0, 0, 8192, 1, 2, 2141, "Ends:", int12, 2, 2);
            script20483(84148253, 7, varbitclient_55448, 0, varbitclient_55448, 30, 0, 2, 2, 0, 8192, 1, 2, 2100, script18864(int6), int12, 2, 0);
        };
    };
    varbitclient_55448 = (varbitclient_55448 + 1);
    return;
}