//
function script21115(): void {
    var int2 = 16;
    var int3 = 5;
    var int4 = 20;
    script20986();
    if (BRANCH_EQUALS(0)) {
        var string0 = `${string0}<br>-\tReduce the cooldown of <sprite=14222><nbsp><col=ffffff>${struct_getparam(14713, 2794)}</col> and <sprite=15035><nbsp><col=ffffff>${struct_getparam(45045, 2794)}</col> by <col=ffffff>${script15973(int3, 1)}</col> each time you are hit by an attack.`;
        string0 = `${string0}<br>- ${script17710(int2)}.`;
    } else {
        string0 = `${string0}<br>-\tReduce the cooldown of all other abilities by <col=ffffff>${script15973(int4, 1)}</col>.`;
        string0 = `${string0}<br>-\tReduce the cooldown of <sprite=14222><nbsp><col=ffffff>${struct_getparam(14713, 2794)}</col> and <sprite=15035><nbsp><col=ffffff>${struct_getparam(45045, 2794)}</col> by <col=ffffff>${script15973(int3, 1)}</col> each time you are hit by an attack.`;
        string0 = `${string0}<br>- ${script17710(int2)}.`;
    };
    stack(string0);
    return;
}