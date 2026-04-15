//
function script17103(int0: int, int1: int, string0: string): [string, int] {
    var string1 = "";
    var [string1, int1] = script17102(int0, int1, 65280, 15651330);
    switch (int0) {
        case 10: {
            return [`Protect Item Prayer${string1}: Requires ${string0}25 Prayer</col> in the standard prayer book.`, int1];
        }
        case 11: {
            return [`Protect Item Curse${string1}: Requires ${string0}50 Prayer</col> and completion of ${string0}The Temple at Senntisten</col> quest.`, int1];
        }
        case 12: {
            return [`Powder of Item Protection${string1}: Created in ${string0}Het's Oasis</col>. Enhances ${string0}Protect Item</col>, protecting ${string0}one</col> additional item for 30 minutes.`, int1];
        }
        case 13: {
            return [`Hoarding Perk${string1}: A perk for augmented items, created with the ${string0}Invention</col> skill.`, int1];
        }
        case 14: {
            return [`Sign of Item Protection${string1}: Created at level ${string0}69 Divination</col>. Works when carried in the pocket slot.`, int1];
        }
        case 15: {
            return [`Portent of Item Protection 1${string1}: Created at level ${string0}92 Divination</col>. Works when carried in the backpack.`, int1];
        }
        case 16: {
            return [`Portent of Item Protection 2${string1}: Two portents may be used from the inventory, but only one can be used if a sign is active.`, int1];
        }
        case 17: {
            return [`Fury Shark${string1}: Obtained as a drop from ${string0}lava strykewyrms</col> and ${string0}wildywyrms</col>.`, int1];
        }
    };
    return ["", 0];
}