//
function script13684(int0: component, int1: int, int2: unknown_int, int3: int, int4: int): void {
    var string0 = "";
    var int4 = (varbitplayer_37613 - int4);
    if ((int2 == 0)) {
        string0 = `<col=f5b241>Current power available:</col> <col=ffffff>${inttostring((varbitplayer_37612 - int4), 10)}/${inttostring(varbitplayer_37612, 10)}</col>`;
    } else {
        string0 = `<col=f5b241>Power limit supplied:</col> <col=ffffff>${inttostring(int3, 10)}`;
    };
    script3877(string0, int0, int1);
    return;
}