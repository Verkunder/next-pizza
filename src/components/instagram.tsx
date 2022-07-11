import React, { useEffect, useState } from 'react';
import Loader from '@/components/Loader';

interface instagramProps {
    img: string;
    alt: string;
}

const Instagram = () => {
    const [instagram, setInstagram] = useState<instagramProps[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const loadImage = async () => {
        try {
            setLoad(true);
            const InstagramResult = await fetch('http://localhost:8080/instagram.json');
            const instagramm = (await InstagramResult.json()) as instagramProps[];
            setInstagram(instagramm);
            setLoad(false);
        } catch (e) {
            console.log(e);
            setErrorMessage('Возникла ошибка при загрузке');
        }
    };

    useEffect(() => {
        loadImage().catch(e => console.log(e));
    }, []);

    return (
        <div className="instagram">
            <div className="wrapper">
                {errorMessage ? (
                    <h2 className="instagram__title">{errorMessage}</h2>
                ) : (
                    <>
                        <h2 className="instagram__title">Следите за нами в Instagram</h2>
                        <a
                            className="instagram__address"
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @pizzamenu
                        </a>
                    </>
                )}
            </div>
            {!load ? (
                <div className="instagram__photo">
                    {instagram.map(({ img, alt }, idx) => (
                        <img src={img} alt={alt} key={idx} />
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Instagram;
