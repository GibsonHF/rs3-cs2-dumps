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
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    [int9, int10, int11] = [int1, script14328(varbitclient_61226, varbitclient_61227, varbitclient_61875)];
    if (((int9 == varbitclient_61226) && (int10 == varbitclient_61227))) {
        stack(int0);
        script20801(varbitclient_61226, varbitclient_61227, int2, int3, int4, int5, int6, int7, int8);
        return;
    };
    varbitclient_61226 = int9;
    varbitclient_61227 = int10;
    stack(int0);
    script20801(varbitclient_61226, varbitclient_61227, int2, int3, int4, int5, int6, int7, int8);
    switch (int0) {
        case 99352586: {
            script20769();
            break;
        }
        case 99090444: {
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
    stack(int2);
    script20806(int3, int4, int5, int6, int7, varbitclient_61228, int8, 1);
    return;
}