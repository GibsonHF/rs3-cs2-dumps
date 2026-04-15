//
function script18379(int0: struct, string0: string): string {
    var int1 = 12;
    var int2 = 4;
    var int3 = 33;
    var int4 = 4;
    var int5 = 8;
    switch (int0) {
        case 29051: {
            int1 = 8;
            int2 = 4;
            int3 = 24;
            int4 = 4;
            int5 = 12;
            break;
        }
    };
    var string0 = `${string0}- Attacks generate <col=ffffff>1</col> <sprite=20228><nbsp><col=ffffff>${struct_getparam(29050, 2794)}</col> stack.`;
    string0 = `${string0}<br>- At <col=ffffff>${inttostring(int5, 10)}</col> <sprite=20228><nbsp><col=ffffff>${struct_getparam(29050, 2794)}</col> stacks, launch an additional attack that deals ${script17720(49543 as struct, int1, (int1 + int2), 0, 1)} plus <col=ffffff>${inttostring(int3, 10)}%-${inttostring((int3 + int4), 10)}%</col> of the damage from the attack that triggered the effect.`;
    return string0;
}