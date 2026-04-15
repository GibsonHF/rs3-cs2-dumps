//
function script15733(string0: string): string {
    var int0 = INV_GETOBJ(94 as inv, 3);
    var int1 = 0;
    if ((item_getparam(int0, 2825) == 1)) {
        int1 = script7460(int0);
    };
    switch (int1) {
        case 2: {
            var string0 = `${string0}<br>- <col=ffffff>2h <sprite=14903>:</col> Deliver a powerful blow to the target.`;
            string0 = `${string0}<br><col=969696>- 2x <sprite=14904>: Sweep the target with both weapons.</col>`;
            break;
        }
        case 1: {
            string0 = `${string0}<br><col=969696>- 2h <sprite=14903>: Deliver a powerful blow to the target.</col>`;
            string0 = `${string0}<br><col=ffffff>- 2x <sprite=14904>: Sweep the target with both weapons.</col>`;
            break;
        }
        default: {
            string0 = `${string0}<br><col=969696>- 2h <sprite=14903>: Deliver a powerful blow to the target.</col>`;
            string0 = `${string0}<br><col=969696>- 2x <sprite=14904>: Sweep the target with both weapons.</col>`;
            break;
        }
    };
    return string0;
}