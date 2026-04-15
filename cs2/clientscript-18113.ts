//
function script18113(int0: dbrow, int1: dbrow): string {
    var string0 = "";
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = script18103(int0);
    var int4 = (int2 + int3);
    if ((script17865(int1) == 1)) {
        if ((int4 > 0)) {
            string0 = `You can earn <col=2EF8FF>${TOSTRING_LOCALISED(int4, 1)}</col> more ${script4583(int4, "charge", "charges")} from the pass.`;
        };
    } else if ((int2 > 0)) {
        if ((int3 > 0)) {
            string0 = `You can earn <col=2EF8FF>${TOSTRING_LOCALISED(int2, 1)}</col> more ${script4583(int2, "charge", "charges")} from the pass (<col=2EF8FF>${TOSTRING_LOCALISED(int4, 1)}</col> with the Premier Hero Pass).`;
        } else {
            string0 = `You can earn <col=2EF8FF>${TOSTRING_LOCALISED(int2, 1)}</col> more ${script4583(int2, "charge", "charges")} from the pass.`;
        };
    } else if ((int3 > 0)) {
        string0 = `You can earn <col=2EF8FF>${TOSTRING_LOCALISED(int3, 1)}</col> more ${script4583(int2, "charge", "charges")} from the pass with the Premier Hero Pass.`;
    };
    return string0;
}