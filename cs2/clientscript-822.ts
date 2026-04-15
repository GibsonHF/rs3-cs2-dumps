//
function script822(): void {
    var int0 = struct_getparam(40949 as struct, 7411);
    var string0 = "";
    if ((int0 != -1 as struct)) {
        switch (MAP_LANG()) {
            case 1: {
                string0 = struct_getparam(int0, 7196);
                break;
            }
            case 2: {
                string0 = struct_getparam(int0, 7197);
                break;
            }
            case 3: {
                string0 = struct_getparam(int0, 7198);
                break;
            }
        };
        if ((STRING_LENGTH(string0) == 0)) {
            string0 = struct_getparam(int0, 7179);
        };
        if ((STRING_LENGTH(string0) > 0)) {
            string0 = strconcat(string0, "&utm_source=rs3-motw&utm_medium=in-game-link&utm_term=newspost");
            OPENURL("news", string0, 1);
        };
    };
    return;
}