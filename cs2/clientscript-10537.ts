//
function script10537(string0: string): string {
    var string0 = `${string0}- Attacks apply a <sprite=30335><nbsp><col=ffffff>${struct_getparam(1489, 2794)}</col> stack with each hit, storing <col=ffffff>${script18566(-1 as struct, (10 / 10), 0)}.`;
    string0 = `${string0}<br>- <sprite=30335><nbsp><col=ffffff>${struct_getparam(1489, 2794)}</col> deals <col=ffffff>100%</col> of the stored damage over <col=ffffff>${script15973((3 * 5), 1)}</col>.`;
    string0 = `${string0}<br>Maximum stacks: <col=ffffff>${inttostring(250, 10)}</col>.`;
    string0 = `${string0}<br><col=ffffff>${script15973(50, 1)}</col> duration.`;
    return string0;
}