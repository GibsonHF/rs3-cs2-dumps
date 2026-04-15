//
function script16545(): string {
    var int0 = 0;
    var string0 = "";
    while ((int0 < 30)) {
        if ((strcmp("", script2452(int0)) == 0)) {
            return `<col=FFFFFF>${inttostring(int0, 10)}</col>/${inttostring(30, 10)}`;
        };
        int0 = (int0 + 1);
    };
    return `<col=FF0000>${inttostring(int0, 10)}</col>/${inttostring(30, 10)}`;
}