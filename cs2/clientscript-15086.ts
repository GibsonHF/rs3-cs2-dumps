//
function script15086(int0: number): string {
    var string0 = "";
    var int1 = dbrow_getfield(int0, 1515600, 0);
    var int2 = dbrow_getfield(int0, 1515616, 0);
    var int3 = dbrow_getfield(int0, 1515664, 0);
    string0 = strconcat(string0, `Category: ${enum_getvalue(0, 36, 12859 as cs2enum, int1)}`);
    if ((int2 != -1)) {
        string0 = strconcat(string0, `<br>Subcategory: ${enum_getvalue(0, 36, 12973 as cs2enum, int2)}`);
    };
    if ((STAT_BASE(22 as stat) >= int3)) {
        string0 = strconcat(string0, `<br>Construction Level: <col=FF00>${inttostring(int3, 10)}`);
    } else {
        string0 = strconcat(string0, `<br>Construction Level: <col=FF0000>${inttostring(int3, 10)}`);
    };
    return string0;
}