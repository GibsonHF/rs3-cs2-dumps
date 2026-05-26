//
function script12753(int0: number, int1: number, string0: string): void {
    var int2 = -1;
    var int3 = -1;
    switch (int0) {
        case 1: {
            int2 = 117112832;
            int3 = 117112833;
            break;
        }
        case 2: {
            int2 = 117112834;
            int3 = 117112835;
            break;
        }
        case 3: {
            int2 = 117112836;
            int3 = 117112837;
            break;
        }
        case 4: {
            int2 = 117112838;
            int3 = 117112839;
            break;
        }
        case 5: {
            int2 = 117112840;
            int3 = 117112841;
            break;
        }
    };
    if ((int2 != -1)) {
        if ((int1 == 0)) {
            IF_SETTEXT("-", int3);
        } else {
            IF_SETTEXT(inttostring(int1, 10), int3);
        };
        IF_SETTEXT(string0, int2);
    };
    return;
}