//
function script9762(int0: int, int1: unknown_int): void {
    var string0 = "Not available";
    switch (int1) {
        case 1: {
            switch (int0) {
                case 9: {
                    string0 = strconcat("0: ", enum_getvalue(0, 36, 2535 as cs2enum, int0));
                    break;
                }
                case 10: {
                    string0 = strconcat("M: ", enum_getvalue(0, 36, 2535 as cs2enum, int0));
                    break;
                }
                default: {
                    string0 = strconcat(`${inttostring((int0 + 1), 10)}: `, enum_getvalue(0, 36, 2535 as cs2enum, int0));
                    break;
                }
            };
            break;
        }
        case 2: {
            string0 = "There is no spirit tree planted here.";
            break;
        }
        case 3: {
            switch (int0) {
                case 8: {
                    string0 = "You have not unlocked this destination.<br>You need to make partial progress through 'The Path of Glouphrie' quest";
                    break;
                }
                default: {
                    string0 = "You have not unlocked this destination.";
                    break;
                }
            };
            break;
        }
        case 4: {
            string0 = "You are currently at this tree.";
            break;
        }
    };
    var int2 = enum_getvalue(0, 9, 8839 as cs2enum, int0);
    script8800(string0, int2, -1);
    return;
}