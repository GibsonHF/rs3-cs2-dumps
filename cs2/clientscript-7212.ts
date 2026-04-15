//
function script7212(int0: int, int1: component, int2: component): void {
    script8841(11, 1);
    var int3 = 0;
    if (((varclient_2236 == 7) || (varclient_2236 == 11))) {
        int3 = 1;
    };
    if ((script13749() == true)) {
        varclient_1029 = STRING_LENGTH(varclient_2250);
        if ((IF_SET2DANGLE() == 0)) {
            script1566(int3, varclient_2250, varclient_2237);
        };
    } else {
        varclient_1029 = script1504(int0, varclient_2250, 26 as fontmetrics, int1, -1);
    };
    script7213(int1, int2);
    return;
}