//
function script17224(int0: int): void {
    var int1 = -1 as dbrow;
    switch (int0) {
        case 1: {
            int1 = 7212 as dbrow;
            break;
        }
        case 2: {
            int1 = 7225 as dbrow;
            break;
        }
        case 0: {
            int1 = 7238 as dbrow;
            break;
        }
        default: {
            script12478(`Unhandled bookmark tab #${inttostring(int0, 10)}.`);
            return;
        }
    };
    var string0 = "Clues: ";
    string0 = strconcat(string0, script17210());
    IF_SETTEXT(string0, comp(1030, 9));
    script17225(int0, int1);
    return;
}