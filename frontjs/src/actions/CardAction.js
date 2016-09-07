export function setCard(user) {
    return {
        type:'SET_USER',
        payload:{
            name:user.name,
            id:user.id
        }
    }
}