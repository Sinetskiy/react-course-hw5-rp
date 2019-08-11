import React, { Component } from 'react';
import {getLoggedInUser} from '../utils'

/*
  Предоставление данных

  Одна из фозможностей Render-props - предоставление данных
  для обёрнутого компонента

  Нужно написать Render-prop, который передаст авторизованного
  пользователя через проп user

  Вы уже писали такой HOC, теперь реализуйте то же самое при помощи RenderProps

  Чтобы получить текущего пользователя - используйте
  метод `getLoggedInUser` из `utils`

  const user = getLoggedInUser()
*/

// !!! вот это почему то не работает
// !!! и в тестах не верных класс импортировался

// export const WithLoggedInUser = () => {
//     return class extends Component {
//
//         render() {
//             const {children} = this.props;
//             const user = getLoggedInUser();
//             return children(user);
//         }
//     };
// };

export class WithLoggedInUser extends Component {

    render() {
        const {children} = this.props;
        const user = getLoggedInUser();
        return children(user);
    }

}