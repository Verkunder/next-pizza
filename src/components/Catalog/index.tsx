import React, { FC, useState } from 'react';
import CatalogItem from '@/components/Catalog/CatalogItem';
import CatalogFilter from '@/components/Catalog/CatalogFilter';
import Loader from '@/components/Loader';
import Portal from '@/components/Portal';
import Push from '@/components/Push';

interface CatalogProps {
    catalog: {
        id: number;
        name: string;
        description: string;
        size: number;
        price: number;
        icon: Array<string>;
        img: string;
        pizzaSize: string;
        sort: string;
    }[];
    load: boolean;
}

const Index: FC<CatalogProps> = ({ catalog, load }) => {
    const [filterCatalog, setFilterCatalog] = useState(catalog);
    const [filterType, setFilterType] = useState<string>('all');

    const addFilterType = (type: string) => {
        setFilterType(type);
        if (type === 'all') {
            return setFilterCatalog(catalog);
        }
        const catalogFilt = catalog.filter(({ sort }) => sort === type);
        return setFilterCatalog(catalogFilt);
    };

    return (
        <div className="wrapper">
            <CatalogFilter addFilterType={addFilterType} filterType={filterType} />
            {!load ? (
                <div className="catalog-pizza-card">
                    {filterCatalog.map(
                        (
                            item: {
                                id: number;
                                name: string;
                                description: string;
                                size: number;
                                price: number;
                                icon: Array<string>;
                                img: string;
                                pizzaSize: string;
                                sort: string;
                            },
                            id
                        ) => (
                            <CatalogItem catalogItem={item} key={id} />
                        )
                    )}
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Index;
