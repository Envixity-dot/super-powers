player.onChat("jump", function () {
    mobs.applyEffect(FIRE_RESISTANCE, mobs.target(LOCAL_PLAYER), 10, 120)
    blocks.fill(
    FIRE,
    pos(-5, 0, -5),
    pos(5, 0, 5),
    FillOperation.Replace
    )
})
player.onChat("fly", function () {
    mobs.applyEffect(LEVITATION, mobs.target(ALL_ENTITIES), 2, 1)
})
player.onChat("run", function () {
    gameplay.timeSet(gameplay.time(MIDNIGHT))
    mobs.applyEffect(NIGHT_VISION, mobs.target(LOCAL_PLAYER), 10, 120)
})
player.onItemInteracted(APPLE, function () {
    mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 10, 120)
})
