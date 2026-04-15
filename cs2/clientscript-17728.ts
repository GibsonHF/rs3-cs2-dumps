//
function script17728(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = script17460(int0);
    var int3 = 0;
    switch (int0) {
        case 48326: {
            int3 = 25;
            break;
        }
        case 48327: {
            int3 = 50;
            break;
        }
    };
    var string0 = `${string0}<br>- Applies a level <col=ffffff>${inttostring(int2, 10)}</col> (<col=ffffff>${inttostring(int3, 10)}%</col> <sprite=30930>) <sprite=30099><nbsp><col=ffffff>${struct_getparam(48340, 2794)}</col> to self.`;
    string0 = `${string0}<br>- <col=ffffff>Togglable</col>.`;
    return string0;
}