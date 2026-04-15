//
function script18574(int0: int, int1: int): string {
    if ((int1 > 0)) {
        return `Reduces the target's <col=ffffff>Hit Chance</col> by <col=ffffff>${inttostring(int0, 10)}%</col> for <col=ffffff>${script15973(int1, 1)}</col>`;
    };
    return `Reduces the target's <col=ffffff>Hit Chance</col> by <col=ffffff>${inttostring(int0, 10)}%</col>`;
}