//
function script18295(int0: number, string0: string): string {
    var int1 = script10903();
    var string0 = `${string0}<br>- Casts up to <col=ffffff>${inttostring(int1, 10)}</col> conjure abilities.`;
    string0 = `${string0}<br>- Consumes <col=ffffff>2x</col> <col=ffffff>${OC_NAME(55336 as obj)}</col> for each ability.`;
    string0 = `${string0}<br><br><col=ffffff>Undead Army`;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    [int2, int3, int4, int5] = script18289();
    if (((((int2 == -1) && (int3 == -1)) && (int4 == -1)) && (int5 == -1))) {
        return `${string0}<br>No abilities selected.</col>`;
    };
    var int6 = -1;
    var int7 = 0;
    while ((++int7 <= int1)) {
        switch (int7) {
            case 1: {
                int6 = int2;
                break;
            }
            case 2: {
                int6 = int3;
                break;
            }
            case 3: {
                int6 = int4;
                break;
            }
            case 4: {
                int6 = int5;
                break;
            }
        };
        if ((int6 != -1)) {
            string0 = `${string0}<br>- `;
            switch (int6) {
                case 48302: {
                    string0 = `${string0}<sprite=34169><nbsp>`;
                    break;
                }
                case 48304: {
                    string0 = `${string0}<sprite=34173><nbsp>`;
                    break;
                }
                case 48306: {
                    string0 = `${string0}<sprite=34171><nbsp>`;
                    break;
                }
                case 31820: {
                    string0 = `${string0}<sprite=34175><nbsp>`;
                    break;
                }
            };
            string0 = `${string0}<col=ffffff>${struct_getparam(int6, 2794)}</col>`;
            if ((script18287(int6) == 1)) {
                string0 = `${string0} (active)`;
            } else if ((script17694(int6) > CLIENTCLOCK())) {
                string0 = `${string0} (unavailable)`;
            };
        };
    };
    return string0;
}