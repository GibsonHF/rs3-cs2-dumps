//
function script6696(int0: int): string {
    if ((int0 >= 1500)) {
        return `<col=ffff00>${TOSTRING_LOCALISED(1500, 1)}</col>`;
    };
    return `<col=ffffff>${TOSTRING_LOCALISED(int0, 1)}</col>`;
}