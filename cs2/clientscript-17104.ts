//
function script17104(int0: int): string {
    var int1 = 0;
    var string0 = "";
    [string0, int1] = script17102(int0, 0, 15413039, 15413039);
    switch (int0) {
        case 1: {
            return `Skulled${string0}: Opted into dangerous PvP within the Wilderness.`;
        }
        case 2: {
            return `Stealing Creation${string0}: No items are protected within this minigame.`;
        }
        case 3: {
            return `Dangerous Clan Wars${string0}: The red portal leads to dangerous PvP.`;
        }
        case 4: {
            return `Hardcore Ironman${string0}: Opted into at account creation.`;
        }
    };
    return "";
}