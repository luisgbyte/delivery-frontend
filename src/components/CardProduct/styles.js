import styled, { css } from 'styled-components';

export const Container = styled.div`
    background: #f0f0f5;
    border-radius: 8px;

    header {
        background: #ffb84d;
        border-radius: 8px 8px 0px 0px;
        height: 150px;
        overflow: hidden;
        transition: 0.3s opacity;
        text-align: center;

        ${(props) =>
            !props.available &&
            css`
                opacity: 0.3;
            `};

        img {
            pointer-events: none;
            user-select: none;
        }
    }

    section.body {
        padding: 10px;
        font-size: 15px;
        h2 {
            color: #3d3d4d;
            font-size: 15px;
        }

        p {
            color: #3d3d4d;
            font-size: 15px;
            margin-top: 5px;
        }

        .price {
            font-style: normal;
            font-size: 17px;
            line-height: 17px;
            color: #39b100;

            b {
                font-weight: 500;
            }
        }
    }

    section.footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 10px 15px;
        background: #e4e4eb;
        border-radius: 0px 0px 8px 8px;

        div.icon-container {
            display: flex;

            button {
                background: #fff;
                padding: 5px;
                border-radius: 8px;
                display: flex;
                border: none;
                transition: 0.1s;
                width: 25px;

                svg {
                    color: #3d3d4d;
                }

                & + button {
                    margin-left: 3px;
                }
            }
        }

        div.availability-container {
            display: flex;
            align-items: center;

            p {
                color: #3d3d4d;
                font-size: 12px;
            }

            .switch {
                position: relative;
                display: inline-block;
                width: 88px;
                height: 32px;
                margin-left: 12px;

                & input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #c72828;
                    -webkit-transition: 0.4s;
                    transition: 0.4s;
                    border-radius: 16px;
                    height: 26px;
                    width: 80px;

                    &:before {
                        position: absolute;
                        content: '';
                        height: 15px;
                        width: 30px;
                        left: 8px;
                        bottom: 6px;
                        background-color: white;
                        -webkit-transition: 0.4s;
                        transition: 0.4s;
                        border-radius: 10px;
                    }
                }

                input:checked + .slider {
                    background-color: #39b100;
                }

                input:focus + .slider {
                    box-shadow: 0 0 1px #2196f3;
                }

                input:checked + .slider:before {
                    -webkit-transform: translateX(32px);
                    -ms-transform: translateX(32px);
                    transform: translateX(32px);
                }
            }
        }
    }
`;
