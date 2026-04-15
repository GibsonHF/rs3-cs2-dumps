//
function script7471(int0: int, int1: component, int2: component, int3: component, int4: unknown_int, string0: string, string1: string): void {
    var string2 = string1;
    if ((int4 > 0)) {
        IF_SETTEXT("<col=FF0000>Eliminated</col>", int1);
        switch (int4) {
            case 1: {
                string2 = "";
                break;
            }
            case 2: {
                string2 = "+10%";
                break;
            }
            case 3: {
                string2 = "+20%";
                break;
            }
            case 4: {
                string2 = "+30%";
                break;
            }
            case 5: {
                string2 = "+40%";
                break;
            }
        };
    } else {
        IF_SETTEXT(inttostring(int0, 10), int1);
    };
    IF_SETTEXT(string0, int2);
    IF_SETTEXT(string2, int3);
    return;
}