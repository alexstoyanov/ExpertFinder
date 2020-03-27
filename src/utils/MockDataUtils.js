
export function getChannels() {
    return [
        {
            id:"1",
            title:"Дипломна работа",
            description:"Стъпки за направа на дипломна работа"
        },
        {
            id:"2",
            title:"Състезания",
            description:"Участия в състезания"
        },

    ];
}
export function getMessages() {
    return [
        {
            _id: 1,
            text: 'Готово!',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'Alexander Native',
                avatar: 'https://placeimg.com/140/140/any',
            }
        },
        {
            _id: 1,
            text: 'Добре, чакам.',
            createdAt: new Date(),
            user: {
                _id: 1,
                name: 'Test Native',
                avatar: 'https://placeimg.com/140/140/any',
            }
        },
        {
            _id: 2,
            text: 'Намерих с какво мога да го подобря',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'Ivan Native',
                avatar: 'https://placeimg.com/140/140/any',
            }
        },
        {
            _id: 3,
            createdAt: new Date(),
            text: 'Постарай се с API-то',
            user: {
                _id: 1,
                name: 'Stoyan Native',
                avatar: 'https://placeimg.com/140/140/any',
            }
        }
    ];
}