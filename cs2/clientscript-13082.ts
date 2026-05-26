//
function script13082(int0: number, int1: number, int2: number): [number, string] {
    var string0 = "";
    if (((int0 != 1) && (script11282(int1, int2) < 1))) {
        string0 = script4583(1, "kill", "kills");
        return [0, `You require ${inttostring(1, 10)} ${string0} of this boss to direct the portal to its location.`];
    };
    return [-1, ""];
}