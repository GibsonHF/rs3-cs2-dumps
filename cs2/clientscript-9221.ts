//
function script9221(int0: obj): unknown_int {
    var int1 = 0;
    var string0 = "";
    [int1, string0] = script3849(int0);
    switch (int1) {
        case 0: {
            if ((script925(int0) == 0)) {
                return 3;
            };
            return 0;
        }
        case 1: {
            script1296(string0);
            break;
        }
        case 2:
        case 5:
        case 4: {
            return 1;
        }
    };
    return 1;
}