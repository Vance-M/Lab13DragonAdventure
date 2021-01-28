// make you quests here
const monsters = {
    id: 'Bandits',
    title: 'An Ambush by Bandits',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'Bandits.jpeg',
    description: `
        As you cross the first bridge on your way to slay a dragon suddenly,
         from the bushes, a group of armed men jump out and threaten you!
         "Give us 10 Gold or draw your weapon"
    `,
    choices: [{
        id: 'bribe',
        description: 'Give them 10 Gold',
        result: `
            "Thats a good lad." They say as they turn and disappear into the forest to the east.
            No point in fighting mere bandits and whats 10 Gold when you'll have thousands after killing the dragon.. 
        `,
        hp: 0,
        gold: -10
    }, {
        id: 'fight',
        description: 'Draw your weapon and have at thee!',
        result: `
            Wielding your weapon you attack the bandits who frankly didn't expect a fight.
            Still they are armed and do manage to put up some resistance before being put down.
            You find 20 Gold on them.
        `,
        hp: -20,
        gold: 20
    }, {
        id: 'run',
        description: 'Run back up the bridge and towards town',
        result: `
            As you run you hear laughter from the bandits and then a distinct thwonk sound as 
            an arrow sails towards you. You try to dodge but it cuts across the back of your thigh.
            Ouch.
        `,
        hp: -10,
        gold: 0
    }]
};

const dragon = {
    id: 'orcs',
    title: 'A Band of Orcs',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'orcs.jpeg',

    description: `
        As you travel through the swamp you encounter a group of orcs. They seem to be
        argueing over a bag of Gold. They haven't seen you yet so you could sneak up and attack
        or, knowing the less then impressive intellect of orcs, you could try to convince them 
        to let you leave with the Gold.
    `,
    choices: [{
        id: 'fight',
        description: 'You decide to kill them',
        result: `
            You burst out of cover and attack. You seem to forget that orcs are always ready to
            fight and immediately are overwhelmed. You manage to kill them but at great cost
            to your own health and take 40 hp damage. You do get 20 Gold from the bag they were
            surrounding.
        `,
        hp: -40,
        gold: 20
    }, {
        id: 'parlay',
        description: 'Outwit the orcs',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const treasure = {
    id: 'mages',
    title: 'A circle of Hedge Mages',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    monsters, 
    treasure,
    dragon,
];

export default quests;