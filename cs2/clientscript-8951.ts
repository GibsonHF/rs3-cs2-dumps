//
function script8951(int0: struct, int1: boolean): [string, unknown_string, unknown_int] {
    var string0 = "";
    var string1 = "";
    var int2 = -1;
    var int3 = struct_getparam(int0, 1282);
    if (((varplayer_7124 > 0) && (varplayer_7124 == struct_getparam(int0, 6413)))) {
        if ((int3 != -1 as coordgrid)) {
            string0 = "Clear Guidance";
            if ((int1 == true)) {
                string1 = "Tap to Clear Guidance";
            } else {
                string1 = "Click to Clear Guidance";
            };
            int2 = 158;
        } else {
            string0 = "Clear Selection";
            if ((int1 == true)) {
                string1 = "Tap to Clear Selection";
            } else {
                string1 = "Click to Clear Selection";
            };
            int2 = 158;
        };
    } else if ((int3 != -1 as coordgrid)) {
        string0 = "View Guidance";
        if ((int1 == true)) {
            string1 = "Tap for Guidance";
        } else {
            string1 = "Click for Guidance";
        };
        int2 = 172;
    } else {
        string0 = "View Select";
        if ((int1 == true)) {
            string1 = "Tap to Select";
        } else {
            string1 = "Click to Select";
        };
        int2 = 46;
    };
    return [string0, string1, int2];
}