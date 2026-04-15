//
function script13105(int0: struct): struct {
    if ((int0 != -1 as struct)) {
        switch (struct_getparam(int0, 4007)) {
            case 0: {
                if ((GENDER() == 1)) {
                    var int0 = struct_getparam(int0, 6322);
                };
                break;
            }
            case 1: {
                if ((GENDER() == 0)) {
                    int0 = struct_getparam(int0, 6322);
                };
                break;
            }
        };
    };
    return int0;
}