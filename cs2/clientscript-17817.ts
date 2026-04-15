//
function script17817(int0: dbrow): string {
    var string0 = "Requirements:";
    string0 = `${string0}<br>- Ritual site (${script17498(script17507(int0))})`;
    if ((DB_GETFIELDCOUNT(int0, 962720) == 1)) {
        string0 = `${string0}<br>- ${script17510(int0)}`;
    };
    string0 = `${string0}<br>- ${inttostring(script17513(int0), 10)} component durability`;
    var int1 = -1 as npc;
    var int2 = 0;
    var int3 = script17512(int0);
    var int4 = -1;
    while ((++int4 < int3)) {
        [int1, int2] = script17511(int0, int4);
        string0 = `${string0}<br>- ${inttostring(int2, 10)} x ${script17522(int1)}`;
    };
    string0 = `${string0}<br>- ${inttostring(script17527(int0), 10)} light sources`;
    string0 = `${string0}<br><br>Focus:`;
    var int5 = -1 as obj;
    var int6 = 0;
    var int7 = script17505(int0);
    int4 = -1;
    while ((++int4 < int7)) {
        [int5, int6] = script17504(int0, -1, int4);
        string0 = `${string0}<br>- ${inttostring(int6, 10)} x ${OC_NAME(int5)}`;
    };
    return string0;
}