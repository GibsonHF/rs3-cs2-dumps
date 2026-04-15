//
function script5518(int0: struct): string {
    var string0 = "";
    var int1 = struct_getparam(int0, 7658);
    var int2 = struct_getparam(int0, 7664);
    var int3 = struct_getparam(int0, 7659);
    if ((int1 > 0)) {
        string0 = strconcat(string0, `Lasts ${script5641(int0)}`);
    };
    switch (int3) {
        case 1: {
            if ((STRING_LENGTH(string0) > 0)) {
                string0 = strconcat(string0, ", stat changes are <col=00ffff>diminished</col> by 1 point per minute");
            } else {
                string0 = strconcat(string0, "Stat changes are <col=00ffff>diminished</col> by 1 point per minute");
            };
            break;
        }
        case 2: {
            if ((STRING_LENGTH(string0) > 0)) {
                string0 = strconcat(string0, ", stat changes are <col=00ffff>static</col> for the duration");
            } else {
                string0 = strconcat(string0, "Stat changes are <col=00ffff>static</col> for the duration");
            };
            break;
        }
    };
    if ((STRING_LENGTH(string0) > 0)) {
        string0 = strconcat(string0, ".");
    };
    return string0;
}