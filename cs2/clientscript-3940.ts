//
function script3940(int0: struct, int1: int): string {
    var string0 = "";
    switch (int1) {
        case 1: {
            string0 = "Cruor";
            break;
        }
        case 2: {
            string0 = "Glacies";
            break;
        }
        case 3: {
            string0 = "Umbra";
            break;
        }
        case 4: {
            string0 = "Fumus";
            break;
        }
    };
    switch (int0) {
        case 1875: {
            string0 = strconcat(string0, ", the first to fall.");
            break;
        }
        case 1876: {
            string0 = strconcat(string0, ", the second to fall.");
            break;
        }
        case 1877: {
            string0 = strconcat(string0, ", the third to fall.");
            break;
        }
        case 1878: {
            string0 = strconcat(string0, ", the last to fall.");
            break;
        }
    };
    return string0;
}