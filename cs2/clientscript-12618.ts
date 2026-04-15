//
function script12618(int0: struct, string0: string): string {
    var int1 = script8247(19343 as struct);
    var int2 = script8247(19342 as struct);
    switch (int0) {
        default: {
            break;
        }
    };
    var string0 = `${string0}<br>-Your next <col=3366FF>Magic ability</col> is empowered:`;
    if ((int2 == 47221 as struct)) {
        string0 = `${string0}<br>- <sprite=27432><nbsp><col=ffffff>${struct_getparam(int2, 2794)}:</col> Your next <col=3366FF>Magic ability</col> costs <col=ffffff>${inttostring((450 / 10), 10)}%</col> less <sprite=14907><nbsp><col=DEAC18>Adrenaline</col>.`;
    } else {
        string0 = `${string0}<br>- <sprite=27430><nbsp><col=ffffff>${struct_getparam(int2, 2794)}:</col> Your next <col=3366FF>Magic ability</col> costs <col=ffffff>${inttostring((350 / 10), 10)}%</col> less <sprite=14907><nbsp><col=DEAC18>Adrenaline</col>.`;
    };
    string0 = `${string0}<br>- <sprite=14236><nbsp><col=ffffff>${struct_getparam(14730 as struct, 2794)}:</col> Deals ${script17720(14730 as struct, 260, (260 + 50), 0, 0)}.`;
    if ((int1 == 45450 as struct)) {
        string0 = `${string0}<br>- <sprite=13310><nbsp><col=ffffff>${struct_getparam(int1, 2794)}:</col> Each attack grants an additional ${inttostring(10, 10)}% <col=ffffff>Critical Strike Chance</col>.`;
    } else {
        string0 = `${string0}<br>- <sprite=13309><nbsp><col=ffffff>${struct_getparam(int1, 2794)}:</col> Each attack grants an additional ${inttostring(10, 10)}% <col=ffffff>Critical Strike Chance</col>.`;
    };
    return string0;
}