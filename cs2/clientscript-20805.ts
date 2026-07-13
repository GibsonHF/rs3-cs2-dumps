//
function script20805(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    script16258();
    if ((script16260() == 0)) {
        switch (varbitplayer_61434) {
            case 40:
            case 45:
            case 30: {
                return;
            }
        };
    };
    var int8 = 0;
    var int9 = 0;
    [int8, int9] = script14328(int1, varbitclient_61226, varbitclient_61227);
    if (((int8 == varbitclient_61226) && (int9 == varbitclient_61227))) {
        script20801(int0, varbitclient_61226, varbitclient_61227, int2, int3, int4, int5, int6, int7);
        return;
    };
    varbitclient_61226 = int8;
    varbitclient_61227 = int9;
    script20801(int0, varbitclient_61226, varbitclient_61227, int2, int3, int4, int5, int6, int7);
    switch (int0) {
        case 99352586: {
            script20769();
            break;
        }
        case 99090443: {
            break;
        }
        case 99483657: {
            break;
        }
        default: {
            script12478("No plug-in for custom updates on category select.");
            break;
        }
    };
    script20806(int2, int3, int4, int5, int6, varbitclient_61228, int7, 1);
    return;
}