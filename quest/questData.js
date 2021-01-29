// make you quests here
const bandits = {
    id: 'bandits',
    title: 'An Ambush by Bandits',
    map: {
        top: '33%',
        left: '45%'
    },
    image: 'Bandits.jpg',
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

const orcs = {
    id: 'orcs',
    title: 'A Band of Orcs',
    map: {
        top: '38%',
        left: '66%'
    },
    image: 'Orcs.jpg',

    description: `
        As you travel through the swamp you encounter a group of orcs. They seem to be
        arguing over a bag of Gold. They haven't seen you yet so you could sneak up and attack
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
            You walk out of the brush casually an begin to talk to the orcs. They 
            are very aggresive at first but after a bit of reasoning decide that your
            right. If you take the Gold and leave immediately then they have nothing
            to argue over and they can get back to raiding and fighting. Win Win.
            You pocket 20 gold and move on.
        `,
        hp: 0,
        gold: 20
    }, {
        id: 'sneak',
        description: 'Leave them alone to settle this out',
        result: `
            Orcs are no joke and it really isn't worth the gold right now. They haven't seen
            you so you just slip away unnoticed and unharmed.
        `,
        hp: 0,
        gold: 0
    }]
};

const mages = {
    id: 'mages',
    title: 'A circle of Hedge Mages',
    map: {
        top: '28%',
        left: '74%'
    },
    image: 'HedgeMages.jpg',
    description: `
        As you walk through the forest for a time you encoutner a circle of mages encanting 
        over a green fire. Hedge mages are outlawed throughout the land but noones sure why.
        You could walk up to them and ask or leave. You also notice as your pondering what to do,
        that their travel packs are stashed behind a big tree nearby. You may be able to pilfer
        a few things before you go.
    `,
    choices: [{
        id: 'smoke',
        description: 'Talk to the Hedge mages',
        result: `You walk out of the forest and call out to them. They greet you warmly and 
        offer to sell you a healing remedy. Knowing you'll get countless Gold from the dragon,
        you partake. They hand you a pipe to smoke and after a couple hours you leave feeling
        greatly refreshed. Whatever that stuff was should be legalized everywhere. `,
        hp: 30,
        gold: -10
    }, {
        id: 'steal',
        description: 'Take provisions from thier packs',
        result: `It turns out the mages where well supplied. After rifling through thier packs
        you find a small healing vial and some Gold, before you leave.`,
        hp: 10,
        gold: 10
    }, {
        id: 'leave',
        description: 'Walk away without consorting with outlaws',
        result: `You walk away knowing that as the hero you can't be seen consorting with outlaws 
        such as them. Your destined for greater things!`,
        hp: 0,
        gold: 0
    }]
    
};

const fort = {
    id: 'fortess',
    title: 'The Evil Fortress',
    map: {
        top: '74%',
        left: '78%'
    },
    image: 'EvilFort.jpeg',
    description: `
        You walk up to the massive doors of the Black Fortress. The home of the dragon and 
        his massive hoard of Gold. The only problem now is how to get in.
    `,
    choices: [{
        id: 'bash',
        description: 'Bash the door down',
        result: `Its a sturdy door but your more then capable. You begin bashing the door down and
        the din alerts many guards. The ensueing battle is short and you do take a bit of damage but
        the guards wealth is yours!`,
        hp: -10,
        gold: 10
    }, {
        id: 'pick',
        description: 'Use your lockpicks',
        result: `Using guile and your set of trusty lockpicks, you sneakily open the door. It is a 
        very intricate lock and your pick end up snapping but your in. You sneak past the guards
        and up the tower to face the scaled tyrant.`,
        hp: 0,
        gold: -10
    }, {
        id: 'climb',
        description: 'Scale the walls',
        result: `The walls look climbable and noone would expect that. Beginning this course of
        action, you find it easier then you thought. Halfway up a gargoyle comes alive however
        and you begin to battle on the walls. Slaying the beast proved to be a challenge but 
        his jewel encrusted eyes proves to be a great reward.`,
        hp: -20,
        gold: 20
    }]
    
};

const dragon = {
    id: 'dragon',
    title: 'The Black Tyrant, Mordulech',
    map: {
        top: '53%',
        left: '60%'
    },
    image: 'BlackDragon.jpg',
    description: `
        You've reached the summit of the dread fortress. You've surmounted a mutlitude of 
        other quests. All thats left is to defeat the Dragon and win the day.
    `,
    choices: [{
        id: 'melee',
        description: 'Fight the dragon upfront and personal like a knight',
        result: `This is a formidible fight and battling upfront draws the dragon away from his hoard.
        You trade blows for what feels like hours but in the end, you prevail. The hoard is yours.`,
        hp: -40,
        gold: 100
    }, {
        id: 'range',
        description: 'Shoot the dragon from behind stealthily',
        result: `Stealthily waiting for the most opportune time to strike avails you a perfect shot
        You take aim and strike true but as the dragon roars and falls dead part of the floor underneath
        crumbles to his size. part of the hoard falls with him.`,
        hp: -10,
        gold: 70
    }, {
        id: 'magic',
        description: 'Conjure the greatest spell you know to destroy the dragon',
        result: `You conjure a meteor to fall from the heavens as the dragon blasts fire at you.
        The meteor falls, crushing him and his hoard alike but it's done. The tyrant is no more.`,
        hp: -20,
        gold: 30
    }]
    
};

const quests = [
    bandits, 
    orcs,
    mages,
    fort,
    dragon
];

export default quests;

// prerequisites: ['dragon', 'monsters'],