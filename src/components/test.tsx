import React from 'react';
import Push from '@/components/Push';
import Portal from '@/components/Portal';

const WithMessage = Component =>
    class extends React.Component {
        state = {
            isShow: false,
        };

        openHandler = () => {
            this.setState({ isShow: !this.state.isShow });
        };

        componentDidUpdate(prevProps) {
            console.log('Текущие пропсы: ', this.props);
            console.log('Предыдущие пропсы: ', prevProps);
        }

        render() {
            // Оборачиваем компонент в контейнер без мутаций. Супер!
            return (
                <div onClick={() => this.openHandler()}>
                    {this.state.isShow && (
                        <Portal>
                            <Push
                                type="Успешно"
                                message="Товар добавлен в корзину"
                                severityType="success"
                            />
                        </Portal>
                    )}
                    <Component {...this.props} />{' '}
                </div>
            );
        }
    };

export default WithMessage;
