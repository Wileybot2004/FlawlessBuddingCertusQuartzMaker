(ServerEvents.recipes(event => {
    event.recipes.create.sequenced_assembly([
        'kubejs:inert_resonator'], //output item
        '#minecraft:wooden_slabs', //starting input item
        [
            event.recipes.create.deploying('kubejs:inert_resonator_wip', ['kubejs:inert_resonator_wip', 'kubejs:manasteel_plate']), //step 1
            event.recipes.create.pressing('kubejs:inert_resonator_wip', 'kubejs:inert_resonator_wip'), //step 2
            event.recipes.create.deploying('kubejs:inert_resonator_wip', ['kubejs:inert_resonator_wip', 'create:electron_tube']), //step 3
            event.recipes.create.deploying('kubejs:inert_resonator_wip', ['kubejs:inert_resonator_wip', '#forge:wires/copper']), //step 4
            event.recipes.create.pressing('kubejs:inert_resonator_wip', 'kubejs:inert_resonator_wip') //step 5
        ]
    ).transitionalItem('kubejs:inert_resonator_wip').loops(1)
}))
