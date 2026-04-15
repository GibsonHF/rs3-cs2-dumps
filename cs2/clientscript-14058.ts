//
function script14058(int0: int, int1: int): string {
    var string0 = "";
    switch (int0) {
        case 0: {
            string0 = "";
            break;
        }
        case 1: {
            string0 = `in ${inttostring(int0, 10)} minute`;
            break;
        }
        default: {
            string0 = `in ${inttostring(int0, 10)} minutes`;
            break;
        }
    };
    if (((int1 >= 1) && (int0 >= 1))) {
        string0 = strconcat(string0, " ");
    };
    switch (int1) {
        case 0: {
            return string0;
        }
        case 1: {
            string0 = strconcat(string0, `${inttostring(int1, 10)} second`);
            break;
        }
        default: {
            string0 = strconcat(string0, `${inttostring(int1, 10)} seconds`);
            break;
        }
    };
    return string0;
}