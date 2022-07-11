import React, { FC } from 'react';

interface CatalogFilterProps {
    addFilterType: (type: string) => void;
    filterType: string;
}

const CatalogFilter: FC<CatalogFilterProps> = ({ addFilterType, filterType }) => (
    <>
        <h2 className="catalog-pizza__title">Выберите пиццу</h2>
        <div className="catalog-pizza-tabs">
            <div className="catalog-pizza-tabs__item">
                <button
                    type="button"
                    className={
                        filterType === 'all'
                            ? 'catalog-pizza-tabs__icon active'
                            : 'catalog-pizza-tabs__icon'
                    }
                    onClick={() => addFilterType('all')}
                >
                    <svg
                        width="24"
                        height="13"
                        viewBox="0 0 24 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22.2866 2.10875C21.1819
                            1.00376 19.7131
                            0.395386 18.1509
                            0.395386C16.5884
                            0.395386 15.1196
                            1.00376 14.0149
                            2.10875L12.9982
                            3.12536L15.1194
                            5.24654L16.136
                            4.22983C17.2478
                            3.11901 19.0546
                            3.11948 20.1655
                            4.22983C21.2763
                            5.34094 21.2763
                            7.14852 20.1655
                            8.25962C19.0547
                            9.37044 17.2478
                            9.37096 16.136
                            8.25962L16.1125
                            8.23619L9.98513
                            2.10875C8.88038
                            1.00376
                            7.41162
                            0.395386
                            5.84913
                            0.395386C4.28687
                            0.395386
                            2.81812
                            1.00376 1.71336
                            2.10875C0.608377
                            3.2135 0 4.68226
                            0 6.24475C0
                            7.80724 0.608377
                            9.276 1.71336
                            10.3808C2.81812
                            11.4857 4.28687
                            12.0941 5.84913
                            12.0941C7.41162
                            12.0941 8.88038
                            11.4857 9.98513
                            10.3808L11.0018
                            9.36414L8.88061
                            7.24296L7.86405
                            8.25967C6.75271
                            9.37101 4.94584
                            9.37049 3.83449
                            8.25967C2.72367
                            7.14856 2.72367
                            5.34099 3.83449
                            4.22988C4.39016
                            3.67444 5.11967
                            3.39689 5.84936
                            3.39689C6.57887
                            3.39689 7.30833
                            3.67449 7.864 4.22988L14.0149
                            10.3808C15.1196 11.4857 16.5884
                            12.0941
                            18.1509 12.0941C19.7131 12.0941
                            21.1819 11.4857 22.2866 10.3808C23.3916 9.276
                            24 7.80724 24 6.24475C24
                            4.68226 23.3916 3.2135 22.2866 2.10875V2.10875Z"
                            fill="#C5CBD1"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    className={
                        filterType === 'all'
                            ? 'catalog-pizza-tabs__btn active'
                            : 'catalog-pizza-tabs__btn'
                    }
                    onClick={() => addFilterType('all')}
                >
                    Все
                </button>
            </div>
            <div className="catalog-pizza-tabs__item">
                <button
                    type="button"
                    className={
                        filterType === 'hot'
                            ? 'catalog-pizza-tabs__icon active'
                            : 'catalog-pizza-tabs__icon'
                    }
                    onClick={() => addFilterType('hot')}
                >
                    <svg
                        width="24"
                        height="21"
                        viewBox="0 0 24 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22.858
                            1.28576C22.3781
                            0.818415 21.6107
                            0.82788 21.1434
                            1.30788C20.676
                            1.78783 20.6855
                            2.5552 21.1655
                            3.02255C21.1694
                            3.02651 21.5666
                            3.48753 21.5287
                            4.36935C21.5119
                            4.75881 21.396
                            5.33268 21.0244
                            6.07379C21.4128
                            6.28935 21.7727
                            6.54833 22.0884
                            6.85772C22.3742
                            7.13785 22.6204
                            7.45652 22.8318
                            7.80237C23.5185
                            6.66002 23.9055
                            5.5469 23.9515
                            4.47279C24.0367
                            2.49363 22.9788
                            1.4034 22.858
                            1.28576Z"
                            fill="#C5CBD1"
                        />
                        <path
                            d="M18.2745
                            7.00061C16.6616
                            7.00061 14.9485
                            7.80584 14.0138
                            9.10841C9.22482
                            15.788 4.37928
                            16.1306 1.83099
                            16.1306C1.53961
                            16.1306 1.27831
                            16.1259 1.05096
                            16.1259C0.16441
                            16.1259 -0.214519
                            16.1937 0.120998
                            16.8561C0.915895
                            18.4271 4.54192
                            20.3502 8.99593
                            20.3502C12.5832
                            20.3502 16.7073
                            19.1021 20.3191
                            15.4169C22.1411
                            13.5585 22.8137
                            9.83314
                            20.9561 8.01185C20.2425
                            7.31247 19.2778
                            7.00061 18.2745
                            7.00061Z"
                            fill="#C5CBD1"
                        />
                        <path
                            d="M3.10876
                            12.9261C3.01774
                            11.7465 3.23779
                            9.07042 6.75387
                            7.56354C6.75387
                            7.56354
                            5.44855
                            10.7206
                            7.21653
                            12.3179C8.49925
                            11.3168
                            9.40155 9.68167
                            9.49412
                            8.10033C9.76015
                            3.53888
                            6.57544 1.13816
                            4.50781
                            0.0684926C4.29631
                            -0.04127 4.0381
                            -0.00418346
                            3.86687
                            0.161644C3.69476
                            0.32665 3.64816
                            0.583165 3.74923
                            0.79873C4.54809
                            2.49452 5.0857 5.52832
                            1.66823 9.05946C0.624837
                            10.1369 1.47503 12.119
                            3.10876 12.9261Z"
                            fill="#C5CBD1"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    className={
                        filterType === 'hot'
                            ? 'catalog-pizza-tabs__btn active'
                            : 'catalog-pizza-tabs__btn'
                    }
                    onClick={() => addFilterType('hot')}
                >
                    Острые
                </button>
            </div>
            <div className="catalog-pizza-tabs__item">
                <button
                    type="button"
                    className={
                        filterType === 'meat'
                            ? 'catalog-pizza-tabs__icon active'
                            : 'catalog-pizza-tabs__icon'
                    }
                    onClick={() => addFilterType('meat')}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19.7398
                            4.26013C18.4571
                            2.97739 14.163
                            -1.10111 12.7793
                            0.282735C11.3955
                            1.66648 15.4739
                            5.96052 16.7568
                            7.24325C18.0395
                            8.52608 22.3335
                            12.6045 23.7173
                            11.2207C25.101
                            9.83698 21.0226
                             5.54295 19.7398
                             4.26013Z"
                            fill="#C5CBD1"
                        />
                        <path
                            d="M8.27704
                            4.78508C5.3444
                            7.71768 4.33743
                            11.9835 5.64881
                            15.9179C5.68331
                            16.0212 5.74157
                            16.1154
                            5.81873
                            16.1926L7.80745
                            18.1814C7.8847
                            18.2585 7.97887
                            18.3168 8.08228
                            18.3513C12.0166
                            19.6627 16.2824
                            18.6557
                            19.215
                            15.723L22.1482
                            12.79C20.5176
                             12.3823 18.4064
                             10.8816 15.7624
                             8.23757C13.1185
                             5.59363 11.6177
                             3.48257 11.2101
                            1.85193L8.27704
                            4.78508Z"
                            fill="#C5CBD1"
                        />
                        <path
                            d="M4.42298
                            16.5939L3.22397
                            17.8125H2.10914C0.945891
                            17.8125 0 18.7387
                            0 19.9021C0 21.0256
                            0.883219 21.9476
                            1.99162 22.0083C2.02031
                            22.5274 2.23589
                            23.0119 2.60634
                            23.3823C3.0045
                            23.7805 3.5347
                            24 4.09791
                            24C5.26125
                            24 6.1875
                            23.0542
                            6.1875
                            21.8908V20.776L7.40611
                            19.577C7.18903 19.4736
                            6.9832 19.3459 6.813
                            19.1757L4.82428
                            17.187C4.65412
                            17.0168 4.52639
                            16.811 4.42298
                            16.5939V16.5939Z"
                            fill="#C5CBD1"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    className={
                        filterType === 'meat'
                            ? 'catalog-pizza-tabs__btn active'
                            : 'catalog-pizza-tabs__btn'
                    }
                    onClick={() => addFilterType('meat')}
                >
                    Мясные
                </button>
            </div>
            <div className="catalog-pizza-tabs__item">
                <button
                    type="button"
                    className={
                        filterType === 'chees'
                            ? 'catalog-pizza-tabs__icon active'
                            : 'catalog-pizza-tabs__icon'
                    }
                    onClick={() => addFilterType('chees')}
                >
                    <svg
                        width="24"
                        height="19"
                        viewBox="0 0 24 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.826205 3.05397L23.2749
                            5.15076C23.6635 5.18709
                            23.9606 5.51317 23.9606
                            5.90341V17.5349C23.9606
                            17.952 23.6221
                            18.2908 23.2046
                            18.2908C23.2023
                            18.2908 23.2019
                            18.2909 23.2015
                            18.2911C23.1951
                            18.2936 23.1873
                            18.2929 14.7276
                            17.5025L0.685606
                            16.1907C0.297071
                            16.1543 0
                            15.8283 0
                            15.438V11.9903C0
                            11.5728 0.338457
                            11.2344 0.755906
                            11.2344C1.57696
                            11.2344 2.24499
                            10.5664 2.24499
                             9.74534C2.24499
                             8.92424 1.57696
                             8.25621 0.755906
                             8.25621C0.338457
                             8.25621 0
                            7.9178 0
                            7.50031V3.80657C0
                            3.36083 0.384189
                            3.01235 0.826205
                            3.05397ZM6.61701
                            10.5567C6.61701
                            11.5365 7.41132
                            12.3308 8.39116
                            12.3308C9.37101
                            12.3308 10.1653
                            11.5365 10.1653
                            10.5567C10.1653
                            9.57683 9.37101
                            8.78251 8.39116
                            8.78251C7.41132
                            8.78251 6.61701
                            9.57683 6.61701
                            10.5567ZM15.3978
                            14.8589C14.9216
                            14.8589 14.5356
                            14.4729 14.5356
                            13.9967C14.5356
                            13.5204 14.9216
                            13.1344 15.3978
                            13.1344C15.8741
                            13.1344 16.2601
                            13.5204 16.2601
                            13.9967C16.2601
                            14.4729 15.8741
                            14.8589 15.3978
                            14.8589ZM14.7558
                            9.27446C14.7558
                            10.2543 15.5502
                            11.0486 16.53
                            11.0486C17.5098
                            11.0486 18.3042
                            10.2543 18.3042
                            9.27446C18.3042 8.29462
                            17.5098 7.50031 16.53
                            7.50031C15.5502 7.50031
                            14.7558 8.29462 14.7558
                            9.27446Z"
                            fill="#C5CBD1"
                        />
                        <path
                            d="M21.1377
                            3.43279C21.7436
                            3.48939 22.1504
                            2.82547 21.8249
                            2.31131L20.584
                            0.351435C20.4225
                            0.0964586 20.1249
                            -0.0379508 19.8266
                             0.00929326L8.71928
                             1.77514C8.42698 1.82162
                             8.44073 2.24682 8.73539
                             2.27432L21.1377 3.43279Z"
                            fill="#C5CBD1"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    className={
                        filterType === 'chees'
                            ? 'catalog-pizza-tabs__btn active'
                            : 'catalog-pizza-tabs__btn'
                    }
                    onClick={() => addFilterType('chees')}
                >
                    Сырные
                </button>
            </div>
            <div className="catalog-pizza-tabs__item">
                <button
                    type="button"
                    className={
                        filterType === 'vegan'
                            ? 'catalog-pizza-tabs__icon active'
                            : 'catalog-pizza-tabs__icon'
                    }
                    onClick={() => addFilterType('vegan')}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.4198 6.29722C16.6906
                            5.56747 15.7894 5.08227
                            14.8134 4.83791V4.8381C13.2991
                            4.45841
                            11.8869 4.68407
                            10.5999 5.44382L13.4421
                            8.28646C14.1083 8.9526
                            13.092 9.92483 12.4479
                            9.28073L9.46492
                             6.29741C8.79062 6.97171
                             7.55003 9.04701 7.06525
                             9.86366L9.46506 12.2635C10.1312
                             12.9296 9.11491 13.9019
                             8.4708 13.2577L6.33114
                             11.1181C5.78641 12.0674
                             5.20356 13.1 4.198
                             14.9519L5.48734
                             16.2412C6.15348
                             16.9074
                             5.13719 17.8796
                             4.49308 17.2355L3.50116
                             16.2436C2.26684
                             18.5443 0.946
                             21.2735 0.077453
                             22.9776C-0.160953
                             23.4438 0.180062
                             24 0.703609
                             24C1.13959
                             24 9.71641 19.0749
                              10.0963 18.861L8.51542
                              17.2801C7.86175 16.6265
                             8.85063 15.6268
                              9.50969 16.2859L11.3651
                              18.1413C13.1853
                               17.1 14.3316 16.4009
                               15.1021 15.912L12.4925
                             13.3024C11.8388
                             12.6487 12.8277
                             11.6491 13.4867
                             12.3081L16.3012
                             15.1226C17.9253
                             14.0033 18.8454
                             12.8025
                             19.0185 10.7527C19.1584
                             8.98879 18.5065 7.3843
                             17.4198 6.29722Z"
                            fill="#C5CBD1"
                        />
                        <path
                            d="M21.982 4.68361C22.5835
                            3.85894 22.5128 2.69236
                            21.7692
                            1.94869C21.0173 1.19611
                            19.8307 1.13156 19.0034
                            1.75917C18.8358
                            0.762187 17.9665 0
                            16.9229 0C15.7597 0
                            14.8135 0.946219
                            14.8135 2.10938V3.37753C16.1693
                            3.64397 17.4159
                            4.30406 18.4142
                            5.30297C19.4341
                            6.32316 20.0717
                            7.58194 20.3326
                             8.901L21.8921
                             8.89964C23.0586
                             8.89964 24.0015
                            7.95548 24.0001
                            6.78891C23.9987
                            5.64928 23.1013
                            4.72866 21.982
                            4.68361Z"
                            fill="#C5CBD1"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    className={
                        filterType === 'vegan'
                            ? 'catalog-pizza-tabs__btn active'
                            : 'catalog-pizza-tabs__btn'
                    }
                    onClick={() => addFilterType('vegan')}
                >
                    Веганские
                </button>
            </div>
        </div>
    </>
);

export default CatalogFilter;