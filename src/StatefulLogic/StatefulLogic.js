import React, { Component } from 'react';

/*
  Render-props можно использовать для вынесения стейтфул логики

  Напишите компонент, который будет добавлять тултип к кнопке.
  Пусть тултип будет обычным `div`

  Пусть на тултипе будет написано "Hello, i'm Tooltip"

  Укажите у тултипа аттрибут `data-testid="tooltip"`

  Кнопка должна получать onClick коллбек из компонента-обёртки
*/

export class WithTooltip extends Component {

    state = {showToolTip: false};

    onClick() {
        this.setState({showToolTip: !this.state.showToolTip})
    }

    render() {
        const {children} = this.props;
        const onClick = () => {
            this.setState({showToolTip: !this.state.showToolTip})
        };
        // TODO: на обработчик вида this.onClick в render дочерний компонент не реагирует, наверно какая то история со скопом
        return <div>
            {this.state.showToolTip ? <div data-testid="tooltip">Hello, i'm Tooltip</div> : ''}
            {children(onClick)}
        </div>;
    }
}