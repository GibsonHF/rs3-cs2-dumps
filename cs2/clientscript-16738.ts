//
function script16738(int0: int, int1: int): string {
    if ((int1 > 0)) {
        return `Reduces the <col=ffffff>Hit Chance</col> of enemies hit by <col=ffffff>${inttostring(int0, 10)}%</col> for <col=ffffff>${script15973(int1, 1)}</col>`;
    };
    return `Reduces the <col=ffffff>Hit Chance</col> of enemies hit by <col=ffffff>${inttostring(int0, 10)}%</col>`;
}