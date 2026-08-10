//
function script21116(): void {
    var int2 = 32;
    script20986();
    if (BRANCH_EQUALS(1)) {
        int2 = 64;
    };
    var string0 = `${string0}<br>-\tGain a stack of <sprite=14227><nbsp><col=ffffff>${struct_getparam(14718, 2794)}</col> each time you are attacked.`;
    string0 = `${string0}<br>- ${script17710(int2)}.`;
    stack(string0);
    return;
}