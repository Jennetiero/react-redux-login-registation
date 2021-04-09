import { userConstants } from '../_constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };
            case userConstants.GETALL_SUCCESS:
                return {
                    items: action.users 
                };
                case userContacts.GETALL_FAILURE:
                    return {
                        error: action.error
                    };
                    case userConstants.DELETE_REQUEST:
                        //добавляем deleting:true, чтобы пользователь удалился 
                        return {
                            ...state,
                            items: state.items.map(user =>
                                user.id === action.id 
                                ? {...user,deleting:true }
                                : user
                                )
                        };
                        case userConstants.DELETE_SUCCESS:
                            //удаляем пользователя
                            return {
                                items: state.items.filter(user => user.id !==action.id)
                            };
                            case userConstants.DELETE_FAILURE:
                                //удаляет свойство 'deleting: true' и добавляет пользователю свойство 'deleteError: [error]'
                                return{
                                    ...state,
                                    items: state.items.map(user => {
                                        if (user.id === action.id)  {
                                            const { deleting, ...userCopy } = user;

                                            return{ ...userCopy, deleteError: action.error};
                                        };

                                        return user;
                                    })
                                };
                                default:
                                    return state
    }
}