//
function script16337(int0: struct): string {
    var string0 = struct_getparam(int0, 1348);
    var string1 = struct_getparam(int0, 1348);
    var int1 = -1;
    var int2 = 23;
    while ((int2 <= 26)) {
        if (((script10509(int2) == 1) || (varbitplayer_29947 == int2))) {
            int1 = int2;
            while ((int1 <= 26)) {
                if ((((script9851(int1, int0) == 1) && (int1 == int2)) && (varbitplayer_29947 <= int2))) {
                    if ((varbitplayer_29947 != 0)) {
                        string0 = `<col=FF00>${string1}</col>`;
                    };
                } else if (((script9851(int1, int0) == 1) && (int1 == (int2 + 1)))) {
                    string0 = `<col=F99222>${string1}</col>`;
                };
                int1 = (int1 + 1);
            };
        };
        int2 = (int2 + 1);
    };
    return string0;
}