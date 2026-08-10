//
function script21114(): void {
    var int2 = 50;
    var int3 = 100;
    var int4 = 16;
    var int5 = 8;
    var int6 = 3;
    var int7 = 10;
    var int8 = 5;
    script20986();
    if (BRANCH_EQUALS(0)) {
        var string0 = `${string0}<br>- Reduce incoming damage by <col=ffffff>${inttostring(int2, 10)}%</col>.`;
        string0 = `${string0}<br>- Reflect <col=ffffff>${inttostring(int3, 10)}%</col> of damage taken back at the attacker.`;
        string0 = `${string0}<br>- ${script17710(int4)}.`;
    } else {
        string0 = `${string0}<br>- Reduce incoming damage by <col=ffffff>${inttostring(int2, 10)}%</col>.`;
        stack(string0);
        stack("<br>- Reflect <col=ffffff>");
        stack(inttostring(int3, 10));
        stack("%</col> of incoming damage, plus an additional ");
        stack(int0);
        stack(0);
        stack(int7);
        stack((int7 + int8));
        stack(0);
        stack(int1);
        script21112();
        string0 = ` at the attacker and up to ${script18561(int5)} within ${script17709(int6)} of you.`;
        string0 = `${string0}<br>- ${script17710(int4)}.`;
    };
    stack(string0);
    return;
}