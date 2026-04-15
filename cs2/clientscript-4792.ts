//
function script4792(int0: int, int1: int): [int, int, int, int, int, int] {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = enum_getvalue(0, 73, 4008 as cs2enum, int0);
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = -1 as graphic;
    var string0 = "";
    if (((int0 < 1) || (int0 > 900))) {
        printmessage(`Clan Build Tick : Attempting to look up build cost for invalid job ${inttostring(int0, 10)}.`);
        return [0, 0, 0, 0, 0, 0];
    };
    [int21, string0, int11, int12, int13, int8, int9, int10] = script4791(int0);
    var int22 = -1 as struct;
    if ((int0 < 600)) {
        switch (int8) {
            case 1: {
                int22 = 2021 as struct;
                break;
            }
            case 2: {
                int22 = 2022 as struct;
                break;
            }
            case 3: {
                int22 = 2023 as struct;
                break;
            }
            case 4: {
                int22 = enum_getvalue(0, 73, 4010 as cs2enum, int10);
                break;
            }
            case 5: {
                int22 = int14;
                break;
            }
        };
    } else {
        switch (int8) {
            case 1: {
                int22 = 2031 as struct;
                break;
            }
            case 2: {
                int22 = 2032 as struct;
                break;
            }
            case 3: {
                int22 = 2033 as struct;
                break;
            }
            case 4: {
                int22 = enum_getvalue(0, 73, 4009 as cs2enum, int10);
                break;
            }
            case 5: {
                int22 = int14;
                break;
            }
        };
    };
    if ((int1 == 0)) {
        return [0, 0, 0, 0, 0, 0];
    };
    switch (int1) {
        case 1: {
            return [struct_getparam(int22, 1483), struct_getparam(int22, 1490), struct_getparam(int22, 1497), struct_getparam(int22, 1504), struct_getparam(int22, 1511), struct_getparam(int22, 1518)];
        }
        case 2: {
            return [struct_getparam(int22, 1484), struct_getparam(int22, 1491), struct_getparam(int22, 1498), struct_getparam(int22, 1505), struct_getparam(int22, 1512), struct_getparam(int22, 1519)];
        }
        case 3: {
            return [struct_getparam(int22, 1485), struct_getparam(int22, 1492), struct_getparam(int22, 1499), struct_getparam(int22, 1506), struct_getparam(int22, 1513), struct_getparam(int22, 1520)];
        }
        case 4: {
            return [struct_getparam(int22, 1486), struct_getparam(int22, 1493), struct_getparam(int22, 1500), struct_getparam(int22, 1507), struct_getparam(int22, 1514), struct_getparam(int22, 1521)];
        }
        case 5: {
            return [struct_getparam(int22, 1487), struct_getparam(int22, 1494), struct_getparam(int22, 1501), struct_getparam(int22, 1508), struct_getparam(int22, 1515), struct_getparam(int22, 1522)];
        }
        case 6: {
            return [struct_getparam(int22, 1488), struct_getparam(int22, 1495), struct_getparam(int22, 1502), struct_getparam(int22, 1509), struct_getparam(int22, 1516), struct_getparam(int22, 1523)];
        }
        case 7: {
            return [struct_getparam(int22, 1489), struct_getparam(int22, 1496), struct_getparam(int22, 1503), struct_getparam(int22, 1510), struct_getparam(int22, 1517), struct_getparam(int22, 1524)];
        }
    };
    return [0, 0, 0, 0, 0, 0];
}