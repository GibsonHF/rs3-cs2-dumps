//
function script11772(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = script17444(int0);
    var string0 = `${string0}<br>- Applies <sprite=35768><nbsp><col=ffffff>${struct_getparam(int0, 2794)}</col> to self.`;
    string0 = `${string0}<br>- ${script17710(int2)}.`;
    string0 = `${string0}<br>- Can be recast to extend duration by <col=ffffff>${script15973(int2, 1)}</col> per cast to a maximum of <col=ffffff>${script15973(6000, 1)}</col>.`;
    return string0;
}