//
function script1423(int0: int, int1: dbrow): unknown_int {
    switch (int0) {
        case 32: {
            if ((int1 != -1 as dbrow)) {
                return 1;
            };
            return 0;
        }
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 25:
        case 46: {
            return 1;
        }
    };
    return 0;
}