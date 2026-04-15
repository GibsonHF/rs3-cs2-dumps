//
function script5902(): void {
    var string0 = "";
    switch (varbitplayer_18336) {
        case 1: {
            string0 = "Audio issues can include; sound effects, music tracks, voice over, missing audio, audio timing and similar issues.<br><br>Text issues include NPC dialogue/examines, tooltips, interface text, grammatical errors and similar issues.";
            break;
        }
        case 2: {
            string0 = "Graphical bugs relate to how something visually appears.<br><br>Issues can relate to missing polygons (causing invisible areas, gaps in outfits etc), z-fighting (flickering), clipping, stretching, animations not playing correctly and similar issues.";
            break;
        }
        case 3: {
            string0 = "This covers all other aspects of the game outside of audio, text and graphical. Anything that hinders your progression through content, systems not behaving as expected/intended, balancing issues, bug abuse, repeatable disconnects when interacting with content and anything else not covered by other categories.";
            break;
        }
        case 4: {
            string0 = "Billing issues are handled through the Jagex Support system.<br><br>Select continue to go there now.";
            break;
        }
        case 5: {
            string0 = "Lost item reports are handled through the Jagex Support system.<br><br>Select continue to go there now.";
            break;
        }
        case 6: {
            string0 = "Technical issues are handled through the Jagex Support system.<br><br>Issues can include client crashes, game unable to launch, issues which don't occur on another computer and similar issues.<br><br>Select continue to go there now.";
            break;
        }
        default: {
            string0 = "Select a category to view more information.";
            break;
        }
    };
    IF_SETTEXT(string0, comp(583, 23));
    script13995(comp(583, 16), comp(-1, 65535), 28556 as struct, "Text & Audio", script9670(1, varbitplayer_18336));
    script13995(comp(583, 19), comp(-1, 65535), 28556 as struct, "Graphical", script9670(2, varbitplayer_18336));
    script13995(comp(583, 20), comp(-1, 65535), 28556 as struct, "Gameplay", script9670(3, varbitplayer_18336));
    script13995(comp(583, 15), comp(-1, 65535), 28556 as struct, "Billing Issue", script9670(4, varbitplayer_18336));
    script13995(comp(583, 18), comp(-1, 65535), 28556 as struct, "Lost Items", script9670(5, varbitplayer_18336));
    script13995(comp(583, 17), comp(-1, 65535), 28556 as struct, "Technical", script9670(6, varbitplayer_18336));
    if ((script6431() == false)) {
        IF_SETSIZE(0, 229, 1, 0, comp(1405, 16));
    };
    return;
}