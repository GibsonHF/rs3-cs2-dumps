//
function script16380(int0: dbrow): int {
    var int1 = 0;
    switch (script16379()) {
        case 1: {
            int1 = DB_GETFIELDCOUNT(int0, 290864);
            break;
        }
        case 2: {
            int1 = DB_GETFIELDCOUNT(int0, 290880);
            break;
        }
        case 0: {
            int1 = DB_GETFIELDCOUNT(int0, 290848);
            break;
        }
    };
    return int1;
}