//
function script5490(string0: string): void {
    var int0 = 0;
    CC_DELETEALL(comp(1477, 886));
    CC_DELETEALL(comp(1477, 887));
    if ((varclient_1691 != -1 as obj)) {
        int0 = script9568(string0, varclient_1691, 96797556, 96797559, -1, -1);
    } else {
        int0 = script7235(string0, "<col=E3D7CF>", 27826, 96797556, 96797559, int0);
    };
    var int1 = 0;
    var int2 = 0;
    if (((script13749() == 0) && (varbitplayer_60413 == 0))) {
        [int1, int2] = unk11051();
        if ((--int1 > 0)) {
            int0 = script20487(96797556, 96797559, int0);
            int0 = script7238(`+<col=E3D7CF>${inttostring(int1, 10)} ${script4583(int1, "option", "options")}</col>`, 14931919, 52669, 96797556, 96797559, int0);
        };
    };
    return;
}