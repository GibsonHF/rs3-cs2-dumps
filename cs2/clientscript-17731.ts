//
function script17731(int0: struct, int1: unknown_int, int2: unknown_int, string0: string): string {
    var string0 = struct_getparam(int0, 2795);
    var int3 = (varbitplayer_53578 + varbitplayer_53579);
    switch (int0) {
        case 48311: {
            string0 = `${string0}<br>- ${script17720(48311 as struct, 72, (72 + 16), 0, int1)} to the target and up to ${script18561(9)} in a <col=ffffff>cone</col> in the attack direction.`;
            string0 = `${string0}<br>- <col=ffffff>${inttostring(25, 10)}%</col> chance to generate <col=ffffff>${inttostring(1, 10)} <sprite=30123><nbsp>${struct_getparam(48334 as struct, 2794)}</col> stack with each hit.`;
            if (((int2 != 2) && (int3 > 0))) {
                string0 = `${string0}<br>- Can be <col=ffffff>recast</col> within <col=ffffff>${script14945(25, 1)}</col> of the previous cast.`;
                string0 = `${string0}<br><br><col=ffffff>Second Cast:</col> ${struct_getparam(48312 as struct, 2795)}`;
                if ((int3 > 1)) {
                    string0 = `${string0}<br><col=ffffff>Third Cast:</col> ${struct_getparam(48313 as struct, 2795)}`;
                };
            };
            break;
        }
        case 48312: {
            string0 = `${string0}<br>- ${script17720(48312 as struct, 180, (180 + 40), 0, int1)} to the target and up to ${script18561(25)} within ${script17709(2)} of you.`;
            string0 = `${string0}<br>- <col=ffffff>On hit:</col> <col=ffffff>${inttostring(25, 10)}%</col> chance to generate <col=ffffff>${inttostring(1, 10)} <sprite=30123><nbsp>${struct_getparam(48334 as struct, 2794)}</col> stack.`;
            if ((int2 == 2)) {
                string0 = `${string0}<br><br><col=969696>Note: This is an upgrade to ${struct_getparam(48311 as struct, 2794)} and will be available as a second cast.</col>`;
            };
            break;
        }
        case 48313: {
            string0 = `${string0}<br>- ${script17720(48313 as struct, 225, (225 + 50), 0, int1)} to the target and up to ${script18561(25)} within ${script17709(2)} of you.`;
            string0 = `${string0}<br>- Damage is increased by <col=ffffff>0%-${inttostring(((100 / 1) * 1), 10)}%</col> based on enemy's missing life points.`;
            if ((int2 == 2)) {
                string0 = `${string0}<br><br><col=969696>Note: This is an upgrade to ${struct_getparam(48311 as struct, 2794)} and will be available as a third cast.</col>`;
            };
            break;
        }
    };
    return string0;
}