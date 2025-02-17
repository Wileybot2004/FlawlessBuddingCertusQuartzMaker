StartupEvents.registry('item', event => {
    
    event.create('manasteel_plate').texture('fbcqm:item/manasteel_plate').displayName('Manasteel Plate').tooltip('A Plate made of Manasteel.')
    event.create('inert_resonator_wip').texture('fbcqm:item/inert_resonator_wip').displayName('Incomplete Inert Mana Resonator').tooltip('An incomplete Inert Mana Resonator.')
    event.create('inert_resonator').texture('fbcqm:item/inert_resonator').displayName('Inert Mana Resonator').tooltip('Something tells you that it needs to be charged.')
    event.create('charged_resonator').texture('fbcqm:item/charged_resonator').displayName('Charged Mana Resonator').tooltip('Filled with Power, it needs magic to tell it what to do.')
    event.create('activated_resonator').texture('fbcqm:item/activated_resonator').displayName('Activated Mana Resonator').tooltip('Fully Online, it is ready to be used.')

})