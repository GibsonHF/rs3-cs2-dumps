//
function script19200(int0: struct): string {
    var string0 = "";
    switch (int0) {
        case 50261:
        case 50262: {
            string0 = `${struct_getparam(int0, 2533)} (Aura Override)`;
            break;
        }
        default: {
            string0 = struct_getparam(int0, 2533);
            break;
        }
    };
    return string0;
}