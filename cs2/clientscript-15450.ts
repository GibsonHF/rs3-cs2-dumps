//
function script15450(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    IF_SETOP(1, "Feed honeycomb", comp(90, 84));  // pof_animal:honeycomb_health_button
    IF_SETOP(1, "Feed honeycomb", comp(90, 86));  // pof_animal:honeycomb_happiness_button
    IF_SETOP(1, "Feed honeycomb", comp(90, 124));  // pof_animal:honeycomb_weight_button
    IF_SETOP(1, "Feed honeycomb", comp(90, 125));  // pof_animal:honeycomb_speed_button
    IF_SETOP(1, "Feed honeycomb", comp(90, 126));  // pof_animal:honeycomb_attractiveness_button
    script15451(int0, 100, 43947, 5898325, "This animal is already the healthiest it can be.", "You don't have any Medicinal honeycomb to feed this animal.", 5898324, "Feed Medicinal honeycomb.");
    script15451(int1, 100, 43945, 5898327, "This animal is already the happiest it can be.", "You don't have any Delicious honeycomb to feed this animal.", 5898326, "Feed Delicious honeycomb.");
    script15451(int2, 2047, 43949, 5898367, "This animal is already the heaviest it can be.", "You don't have any Dense honeycomb to feed this animal.", 5898364, "Feed Dense honeycomb.");
    script15451(int3, 2047, 43951, 5898418, "This animal is already the fastest it can be.", "You don't have any Runny honeycomb to feed this animal.", 5898365, "Feed Runny honeycomb.");
    script15451(int4, 2047, 43953, 5898419, "This animal is already the prettiest it can be.", "You don't have any Sweet honeycomb to feed this animal.", 5898366, "Feed Sweet honeycomb.");
    script15452(int0, 100, "This animal is not at its healthiest, gathering produce from the animal will result in less XP.", "This animal is as healthy as can be!", 5898347);
    script15452(int1, 100, "This animal is not at its happiest, gathering produce from the animal will result in less XP.", "This animal is as happy as can be!", 5898339);
    return;
}