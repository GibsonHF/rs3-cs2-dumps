//
function script13790(int0: struct, string0: string): string {
    var string0 = `${string0}<br>- <sprite=14240><nbsp><col=ffffff>${struct_getparam(14735, 2794)}</col> costs <col=ffffff>${inttostring((120 / 10), 10)}%</col> less <sprite=14907><nbsp><col=DEAC18>Adrenaline</col> per stack.`;
    string0 = `${string0}<br>- At <col=ffffff>${inttostring(5, 10)}</col> stacks: Your <col=3366FF>Magic attacks</col> trigger an area of effect attack dealing ${script17720(44066 as struct, 10, (10 + 40), 0, 0)} to the target and up to ${script18561(8)} within ${script17709(2)} of the target.`;
    string0 = `${string0}<br>- <col=ffffff>${script15973(20, 1)}</col> cooldown.`;
    return string0;
}