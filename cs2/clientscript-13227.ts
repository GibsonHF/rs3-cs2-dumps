//
function script13227(int0: struct): string {
    var string0 = "";
    if (((int0 != -1 as struct) && (struct_getparam(int0, 6352) != -1 as inv))) {
        switch (int0) {
            case 35654: {
                string0 = varclient_5940;
                break;
            }
            case 35655: {
                string0 = varclient_5941;
                break;
            }
            case 35656: {
                string0 = varclient_5942;
                break;
            }
            case 35657: {
                string0 = varclient_5943;
                break;
            }
        };
        string0 = REMOVETAGS(string0);
        if ((STRING_LENGTH(string0) == 0)) {
            string0 = struct_getparam(int0, 2533);
        };
    };
    return string0;
}