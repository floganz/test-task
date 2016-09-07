const initialState = {
    statuses:[
        {
            id:1,
            title:'one'
        },
        {
            id:2,
            title:'two'
        },
        {
            id:3,
            title:'three'
        }
    ],
    cards:[
        {
            id:1,
            text:'textCard',
            status:1
        },
        {
            id:2,
            text:'textCard2',
            status:2
        },
        {
            id:3,
            text:'textCard3',
            status:3
        },
        {
            id:4,
            text:'textCard4',
            status:3
        }
    ]
};

export default function cardstate(state = initialState,action) {
    switch (action.type){
        
        default:
            return state;

    }
}